#!/usr/bin/env node
/**
 * Builds content/species/photo-credits.json: author, licence and Commons page
 * for every Wikimedia Commons photo the site shows.
 *
 * Run: node scripts/build-photo-credits.mjs
 *
 * - Species photos (public/images/species/...) were saved from the lead image
 *   of a Wikipedia article (scripts/download-wiki-images.mjs: wikipediaTitle or
 *   commonName, then the scientific name). For each one this script asks
 *   Wikipedia which Commons file leads those articles today, downloads that
 *   file's 330 px thumbnail and compares it with the stored photo. Only a
 *   match is credited; anything else is listed under "unmatched" and the site
 *   shows no invented credit for it.
 * - Blog heroes named by heroWikipediaTitle in content/blog/posts.ts are
 *   recorded with the file, its credit and a 960 px thumbnail, and the site
 *   shows exactly that file.
 * - Author, licence and links come from the MediaWiki API (imageinfo with
 *   extmetadata: Artist, LicenseShortName, LicenseUrl, descriptionurl).
 *
 * Uses sharp, which is installed with Next.js. Reads public pages only.
 */
import { readFileSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const UA = "TheLakesWildlife-photo-credits/1.0 (https://www.thelakeswildlife.co.uk)";
const API = "https://en.wikipedia.org/w/api.php";
const COMMONS = "https://commons.wikimedia.org/w/api.php";
const MATCH_THRESHOLD = 14; // mean absolute difference (0-255) of 16x16 greyscale
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function getJson(url) {
  for (let i = 0; i < 4; i++) {
    const res = await fetch(url, { headers: { "User-Agent": UA } }).catch(() => null);
    if (res?.ok) return res.json();
    await sleep(1000 * (i + 1));
  }
  throw new Error("request failed: " + url);
}

async function getBuffer(url) {
  for (let i = 0; i < 4; i++) {
    const res = await fetch(url, { headers: { "User-Agent": UA } }).catch(() => null);
    if (res?.ok) return Buffer.from(await res.arrayBuffer());
    await sleep(1000 * (i + 1));
  }
  return null;
}

const chunks = (arr, n) => Array.from({ length: Math.ceil(arr.length / n) }, (_, i) => arr.slice(i * n, i * n + n));

/** Lead image file name of each Wikipedia article (redirects followed). */
async function leadFiles(titles) {
  const out = new Map();
  for (const batch of chunks([...new Set(titles)], 40)) {
    const q = `${API}?action=query&format=json&redirects=1&prop=pageimages&piprop=name&titles=${encodeURIComponent(batch.join("|"))}`;
    const data = await getJson(q);
    const back = new Map();
    for (const n of data.query?.normalized ?? []) back.set(n.to, n.from);
    for (const r of data.query?.redirects ?? []) back.set(r.to, back.get(r.from) ?? r.from);
    for (const p of Object.values(data.query?.pages ?? {})) {
      if (!p.pageimage) continue;
      const asked = back.get(p.title) ?? p.title;
      out.set(asked, p.pageimage);
      out.set(p.title, p.pageimage);
    }
    await sleep(300);
  }
  return out;
}

function plain(html) {
  return String(html ?? "")
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&copy;|\u00a9|\ufffd/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0*39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/[<>]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 200);
}

/** Commons metadata for each file, with a thumbnail at the given width. */
async function fileInfo(files, width) {
  const out = new Map();
  for (const batch of chunks([...new Set(files)], 40)) {
    const titles = batch.map((f) => "File:" + f).join("|");
    const q = `${COMMONS}?action=query&format=json&prop=imageinfo&iiprop=url|extmetadata&iiurlwidth=${width}&titles=${encodeURIComponent(titles)}`;
    const data = await getJson(q);
    for (const p of Object.values(data.query?.pages ?? {})) {
      const ii = p.imageinfo?.[0];
      if (!ii) continue;
      const m = ii.extmetadata ?? {};
      out.set(p.title.replace(/^File:/, "").replace(/_/g, " "), {
        file: p.title.replace(/^File:/, ""),
        page: ii.descriptionurl,
        // Artist, or the file's own required attribution text when Artist is empty.
        title: plain(m.ObjectName?.value).replace(/\s*-\s*geograph\.org\.uk\s*-\s*\d+$/i, "") || null,
        artist: plain(m.Artist?.value) || plain(String(m.Attribution?.value ?? "").split(/<hr/i)[0]),
        licence: plain(m.LicenseShortName?.value),
        licenceUrl: m.LicenseUrl?.value ?? null,
        thumb: ii.thumburl ? ii.thumburl.split("?")[0] : null,
      });
    }
    await sleep(300);
  }
  return out;
}

/** Wiki markup to plain text: user links to their label or user name, templates dropped. */
function cleanWiki(a) {
  return plain(
    String(a)
      .replace(/\{\{\s*[Cc]reator:([^}|]+)[^}]*\}\}/g, "$1")
      .replace(/\{\{\s*[Uu]ser:[^}|]*\|([^}]+)\}\}/g, "$1")
      .replace(/\{\{[^}]*\}\}/g, "")
      .replace(/\[\[:?(?:[a-z]{2,3}:)?[Uu]ser:([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, u, label) => (label ?? u).replace(/_/g, " "))
      .replace(/\[\[(?:[^\]|]*\|)?([^\]]+)\]\]/g, "$1")
      .replace(/\[https?:\/\/\S+\s+([^\]]+)\]/g, "$1")
      .replace(/'{2,}/g, "")
  ).replace(/[.,;:\s]+$/, "");
}

/**
 * Author from the file page's own wikitext: the {{Information}} author field,
 * or, on old pages without that template, the page's own "Author:",
 * "Photo/Picture/Image taken by" or "Foto:" line. Nothing else is guessed.
 */
function authorFromWikitext(text) {
  const t = String(text ?? "");
  const field = t.match(/^\s*\|\s*(?:author|photographer|artist)\s*=\s*(.*)$/im);
  const free =
    t.match(/^\s*\*?\s*Author:\s*(.+)$/im) ||
    t.match(/(?:Picture|Photo|Foto|Image|Photograph)\s+(?:taken\s+)?by\s+(.+?)(?:\s+on\s+\d.*)?(?:\.\s*)?(?:\{\{.*)?$/im) ||
    t.match(/^\s*(?:Foto|Photo):\s*(.+)$/im);
  for (const m of [field, free]) {
    if (!m) continue;
    // A trailing note in brackets (a camera model, say) is not part of the name.
    const a = cleanWiki(m[1]).replace(/\s*\([^)]*\)$/, "");
    if (a && !/^(unknown|anonymous|own work|\{\{own\}\})$/i.test(a)) return a;
  }
  return null;
}

/** Fill missing authors from each file page's wikitext. */
async function fillAuthors(infoMap) {
  const missing = [...infoMap.values()].filter((i) => !i.artist);
  for (const batch of chunks(missing, 20)) {
    const titles = batch.map((i) => "File:" + i.file.replace(/_/g, " ")).join("|");
    const q = `${COMMONS}?action=query&format=json&prop=revisions&rvprop=content&rvslots=main&titles=${encodeURIComponent(titles)}`;
    const data = await getJson(q);
    for (const p of Object.values(data.query?.pages ?? {})) {
      const text = p.revisions?.[0]?.slots?.main?.["*"] ?? p.revisions?.[0]?.["*"];
      const author = authorFromWikitext(text);
      const hit = batch.find((i) => key(i.file) === p.title.replace(/^File:/, "").replace(/_/g, " "));
      if (hit && author) { hit.artist = author; hit.authorFrom = "wikitext"; }
    }
    await sleep(300);
  }
}

async function signature(buf) {
  const { data } = await sharp(buf).resize(16, 16, { fit: "fill" }).greyscale().raw().toBuffer({ resolveWithObject: true });
  return data;
}
const diff = (a, b) => a.reduce((t, v, i) => t + Math.abs(v - b[i]), 0) / a.length;
const key = (f) => f.replace(/_/g, " ");

// Species photos
const species = [];
for (const cat of ["birds", "insects", "plants", "mammals"]) {
  for (const s of JSON.parse(readFileSync(join(ROOT, "content/species", `${cat}.json`), "utf8"))) {
    if (!s.localImage) continue;
    const titles = [s.wikipediaTitle ?? s.commonName, s.scientificName, s.commonName].filter(Boolean);
    species.push({ name: s.commonName, src: s.localImage, titles: [...new Set(titles)] });
  }
}
// Other photos the pages show that are not a species page's own photo.
species.push({ name: "Bittern", src: "/images/species/birds/bittern.jpg", titles: ["Eurasian bittern", "Botaurus stellaris"] });
// Reserve heroes: Geograph photographs downloaded once from these Commons
// files and resized (credited with their title, as the licence asks).
const RESERVE_FILES = {
  "/images/reserves/haweswater-mardale-head.jpg": "Haweswater at Mardale Head - geograph.org.uk - 5812690.jpg",
  "/images/reserves/leighton-moss-reedbeds.jpg": "Reedbeds, Leighton Moss - geograph.org.uk - 8002474.jpg",
  "/images/reserves/foulshaw-moss-pool.jpg": "Pool, Foulshaw Moss nature reserve - geograph.org.uk - 6921775.jpg",
};

// Blog heroes
const postsSrc = readFileSync(join(ROOT, "content/blog/posts.ts"), "utf8");
const heroTitles = [...new Set([...postsSrc.matchAll(/heroWikipediaTitle: "([^"]+)"/g)].map((m) => m[1]))];

const leads = await leadFiles([...species.flatMap((s) => s.titles), ...heroTitles]);
const info330 = await fileInfo([...leads.values()], 330);
await fillAuthors(info330);

const photos = {};
const unmatched = [];
for (const s of species) {
  const local = join(ROOT, "public", s.src);
  if (!existsSync(local)) { unmatched.push({ src: s.src, reason: "file missing" }); continue; }
  const mine = await signature(readFileSync(local));
  let best = null;
  for (const t of s.titles) {
    const f = leads.get(t);
    const inf = f && info330.get(key(f));
    if (!inf?.thumb) continue;
    const buf = await getBuffer(inf.thumb);
    await sleep(150);
    if (!buf) continue;
    const d = diff(mine, await signature(buf));
    if (!best || d < best.d) best = { d, inf, title: t };
    if (d < MATCH_THRESHOLD) break;
  }
  if (best && best.d < MATCH_THRESHOLD && best.inf.artist && best.inf.licence) {
    const { file, page, artist, licence, licenceUrl } = best.inf;
    photos[s.src] = { subject: s.name, file, page, artist, licence, licenceUrl };
  } else if (best && best.d < MATCH_THRESHOLD) {
    // Known file, but no machine-readable author or licence: link the file page only.
    photos[s.src] = { subject: s.name, file: best.inf.file, page: best.inf.page, artist: null, licence: best.inf.licence || null, licenceUrl: best.inf.licenceUrl };
    unmatched.push({ src: s.src, reason: `matches ${best.inf.file}, but its Commons metadata has no author or licence` });
  } else {
    unmatched.push({
      src: s.src,
      reason: best ? `the article's lead image today (${best.inf.file}) is a different photo (score ${best.d.toFixed(1)})` : "no lead image found",
    });
  }
  process.stdout.write(photos[s.src] ? "." : "x");
}
process.stdout.write("\n");

const reserveInfo = await fileInfo(Object.values(RESERVE_FILES), 330);
await fillAuthors(reserveInfo);
const reserves = {};
for (const [src, f] of Object.entries(RESERVE_FILES)) {
  const inf = reserveInfo.get(key(f));
  if (!inf?.artist || !inf.licence) { unmatched.push({ src, reason: `${f}: no author or licence` }); continue; }
  const { file, page, title, artist, licence, licenceUrl } = inf;
  reserves[src] = { file, page, title, artist, licence, licenceUrl };
}

const info960 = await fileInfo(heroTitles.map((t) => leads.get(t)).filter(Boolean), 960);
await fillAuthors(info960);
const wikipedia = {};
for (const t of heroTitles) {
  const inf = leads.get(t) && info960.get(key(leads.get(t)));
  if (!inf?.thumb) {
    unmatched.push({ src: `wikipedia:${t}`, reason: "no lead image found" });
    continue;
  }
  if (!inf.artist || !inf.licence) {
    unmatched.push({ src: `wikipedia:${t}`, reason: `${inf.file}: Commons metadata has no author or licence` });
    const { file, page, licenceUrl, thumb } = inf;
    wikipedia[t] = { file, page, artist: null, licence: inf.licence || null, licenceUrl, src: thumb };
    continue;
  }
  const { file, page, artist, licence, licenceUrl, thumb } = inf;
  wikipedia[t] = { file, page, artist, licence, licenceUrl, src: thumb };
}

// A photo shared by two species is credited once.
const unmatchedOut = unmatched.filter((u) => !photos[u.src]?.artist).filter((u, i, a) => a.findIndex((x) => x.src === u.src) === i);

const out = {
  note: "Generated by scripts/build-photo-credits.mjs from Wikipedia and Wikimedia Commons metadata. Do not edit by hand.",
  generated: new Date().toISOString().slice(0, 10),
  photos: { ...photos, ...reserves },
  wikipedia,
  unmatched: unmatchedOut,
};
writeFileSync(join(ROOT, "content/species/photo-credits.json"), JSON.stringify(out, null, 2) + "\n");
console.log(`credited ${Object.keys(photos).length} species photos, ${Object.keys(wikipedia).length} of ${heroTitles.length} blog heroes; ${unmatchedOut.length} unmatched`);
for (const u of unmatchedOut) console.log("  unmatched:", u.src, "-", u.reason);
