// Advertising spaces and the /advertise page (stage B, 11 Nov 2026).
// Run: npm run test:ads, or node --test tests/*.test.mjs
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import {
  AD_OPTIONS,
  AD_OPTION_ORDER,
  AD_SLOTS,
  POST_END_CATEGORIES,
  activeSponsor,
  advertiseHref,
  emptyPriceLine,
  hasPostEnd,
  priceText,
} from "../lib/ad-slots.ts";
import { BLOG_POSTS } from "../content/blog/posts.ts";

const root = new URL("..", import.meta.url);
const read = (p) => readFileSync(new URL(p, root), "utf8");
const walk = (dir) =>
  readdirSync(new URL(dir, root)).flatMap((name) => {
    const rel = join(dir, name).split(String.fromCharCode(92)).join("/");
    return statSync(new URL(rel, root)).isDirectory() ? walk(rel + "/") : [rel];
  });

const ADVERTISE = "app/advertise/page.tsx";
const COPY_FILES = [ADVERTISE, "lib/ad-slots.ts", "components/AdSlot.tsx"];
const appFiles = walk("app/").filter((f) => /\.(ts|tsx)$/.test(f));

// Pages that must never carry an advert. The layout wraps every page, so it carries none either.
const NO_ADVERT = [
  /^app\/nature\//,
  /^app\/contact\//,
  /^app\/privacy\//,
  /^app\/terms\//,
  /^app\/about\//,
  /^app\/advertise\//,
  /^app\/not-found\.tsx$/,
  /^app\/layout\.tsx$/,
];

// Species and seasonal posts that name a business (boat company, fishery, tearoom, estate, hide
// operator): they must never show the end-of-post space.
const NO_ADVERT_POSTS = [
  "ospreys-bassenthwaite-lake",
  "ospreys-haweswater-rspb",
  "winter-wildfowl-ullswater",
  "red-deer-rut-martindale",
  "haweswater-in-winter",
];
// Words that mean a post names a business. A post that keeps the space must contain none of them.
// Whole words only, so "public", "beginning" and "workshop" are not "pub", "inn" and "shop". Lookarounds,
// not \b, so that "café" ends a word too (\b treats "é" as a non-word character).
const BUSINESS_WORDS =
  /(?<![\p{L}\p{N}])(?:Steamers?|Tea ?rooms?|caf[eé]s?|fisher(?:y|ies)|Estate Office|Dalemain|Wild Intrigue|United Utilities|hotels?|pubs?|inns?|boat trips?|hire|shops?)(?![\p{L}\p{N}])/iu;
const postText = (p) =>
  [p.title, p.metaDescription, p.intro, ...(p.sections ?? []).flatMap((s) => [s.heading, ...(s.body ?? [])]), JSON.stringify(p.faq ?? [])].join(" ");

// Components other than AdSlot itself that render a space.
const adComponents = walk("components/")
  .filter((f) => f !== "components/AdSlot.tsx" && /<AdSlot\b/.test(read(f)))
  .map((f) => f.replace(/^components\//, "").replace(/\.tsx?$/, ""));

test("every space is empty at commit and names a real option", () => {
  for (const [id, slot] of Object.entries(AD_SLOTS)) {
    assert.equal(slot.sponsor, null, `${id} has a sponsor committed`);
    assert.ok(AD_OPTIONS[slot.option], `${id} names ${slot.option}, which is not an option`);
    assert.equal(advertiseHref(id), `/advertise?space=${id}#${slot.option}`);
    assert.equal(slot.label, id === "home-card" ? "Advertisement" : "Sponsor", id);
  }
  assert.doesNotMatch(read("lib/ad-slots.ts"), /Example advert/);
});

test("every option a space names is a card on the advertise page", () => {
  const page = read(ADVERTISE);
  // The page draws one card per entry in AD_OPTION_ORDER, with the option id as its anchor.
  assert.match(page, /AD_OPTION_ORDER\.map\(/);
  assert.match(page, /id=\{o\.id\}/);
  assert.deepEqual([...AD_OPTION_ORDER].sort(), Object.keys(AD_OPTIONS).sort(), "every option is drawn once");
  assert.equal(new Set(AD_OPTION_ORDER).size, AD_OPTION_ORDER.length);
  for (const [id, o] of Object.entries(AD_OPTIONS)) assert.equal(o.id, id);
  for (const [id, slot] of Object.entries(AD_SLOTS)) assert.ok(AD_OPTION_ORDER.includes(slot.option), `${id} -> ${slot.option}`);
});

test("the prices are the approved ones", () => {
  const shown = Object.fromEntries(Object.values(AD_OPTIONS).map((o) => [o.id, `${o.price} ${o.per}, ${o.term}`]));
  assert.deepEqual(shown, {
    "section-sponsor": "£35 a month, 3 months minimum",
    "birdwatching-guide": "£35 a month, 3 months minimum",
    "home-card": "£39 a month, 3 months minimum",
    "sponsored-article": "£99 one-off, Live for 12 months",
    "winter-birds": "£79 for November to February, One payment",
    "network-bundle": "£99 a month, 3 months minimum",
  });
});

test("no space is placed on a page from the no-advert list, and no page has more than one", () => {
  const placed = [];
  for (const f of appFiles) {
    const src = read(f);
    const tags = src.match(/<AdSlot\b[^>]*>/g) ?? [];
    if (NO_ADVERT.some((re) => re.test(f))) {
      assert.doesNotMatch(src, /\bAdSlot\b/, `${f} must not show an advert`);
      for (const c of adComponents) assert.doesNotMatch(src, new RegExp(`components/${c}["']`), `${f} imports ${c}, which shows an advert`);
      continue;
    }
    assert.ok(tags.length <= 1, `${f} has ${tags.length} spaces; at most one per page`);
    for (const tag of tags) {
      const id = tag.match(/\bid="([^"]+)"/)?.[1];
      assert.ok(id, `${f}: give AdSlot a literal id`);
      placed.push(id);
    }
  }
  assert.deepEqual(adComponents, [], "spaces are placed in page files, where this test can see them");
  assert.deepEqual([...placed].sort(), Object.keys(AD_SLOTS).sort(), "each space is placed exactly once");
});

test("the end-of-post space is on species and seasonal posts only, never on a sponsored article", () => {
  assert.deepEqual([...POST_END_CATEGORIES], ["species-spotlight", "seasonal-watching"]);
  for (const post of BLOG_POSTS) {
    const eligible =
      ["species-spotlight", "seasonal-watching"].includes(post.category) && !post.sponsor && !NO_ADVERT_POSTS.includes(post.slug);
    assert.equal(hasPostEnd(post), eligible, post.slug);
  }
  assert.ok(BLOG_POSTS.some(hasPostEnd));
  assert.equal(hasPostEnd({ slug: "x", category: "species-spotlight", sponsor: { name: "S", url: "https://example.com" } }), false);
});

test("the business-word check finds business words, and only as whole words", () => {
  const names = ["Ullswater Steamers", "the steamer", "a tea room", "the tearoom", "the café", "two cafes", "Esthwaite fishery",
    "Estate Office", "Dalemain", "Wild Intrigue", "United Utilities", "a hotel", "the pub", "two pubs", "the inn",
    "boat trips", "bike hire", "the shop"];
  for (const w of names) assert.match(w, BUSINESS_WORDS, w);
  const plain = ["a public footpath", "the beginning of May", "dinner", "spinning", "Cheshire", "a workshop", "the bishop",
    "a fisherman", "hireling", "publication", "shopping"];
  for (const w of plain) assert.doesNotMatch(w, BUSINESS_WORDS, w);
});

test("posts that name a business never show the end-of-post space", () => {
  for (const slug of NO_ADVERT_POSTS) {
    const post = BLOG_POSTS.find((p) => p.slug === slug);
    assert.ok(post, `${slug} is not a post`);
    assert.equal(hasPostEnd(post), false, slug);
  }
  for (const post of BLOG_POSTS.filter(hasPostEnd)) {
    const hit = postText(post).match(BUSINESS_WORDS);
    assert.equal(hit, null, `${post.slug} keeps the space but names a business (${hit?.[0]})`);
  }
});

test("the winter wildfowl guide keeps its own space", () => {
  assert.match(read("app/blog/[slug]/page.tsx"), /\{hasPostEnd\(post\) && <AdSlot id="post-end"/);
  assert.match(read("app/seasonal/[slug]/page.tsx"), /\{slug === "winter-wildfowl" && <AdSlot id="seasonal-winter-wildfowl"/);
});

test("no traffic figures or audience claims in the advertising copy", () => {
  for (const f of COPY_FILES) {
    const src = read(f);
    assert.doesNotMatch(src, /\d[\d,.]*\s*\+?\s*(?:[a-z]+\s+)?(?:visitors|views|readers)\b/i, f);
    assert.doesNotMatch(src, /\b(?:growing|popular|high-intent|affluent)\b/i, f);
  }
});

test("every advert price is shown plus VAT", () => {
  for (const o of Object.values(AD_OPTIONS)) {
    const { amount, rest } = priceText(o);
    assert.equal(amount, o.price);
    assert.match(rest, /plus\sVAT$/, o.id);
  }
  for (const id of Object.keys(AD_SLOTS)) {
    const line = emptyPriceLine(id);
    assert.match(line, /plus\sVAT$/, id);
    assert.ok(line.includes(AD_OPTIONS[AD_SLOTS[id].option].price), line);
  }
  // Any other amount in the copy, such as the bundle's comparison, says plus VAT too.
  const strings = [
    ...Object.values(AD_OPTIONS).flatMap((o) => [...o.points, o.note ?? "", o.term, o.name]),
    ...Object.values(AD_SLOTS).flatMap((s) => [s.title, s.cardTitle, s.pitch, s.product ?? ""]),
  ];
  for (const s of strings) if (/£\d/.test(s)) assert.match(s, /£\d+[^.]*plus VAT/, s);
  // The page and the card print no amount of their own: every price comes from lib/ad-slots.ts.
  assert.doesNotMatch(read(ADVERTISE), /£/);
  assert.doesNotMatch(read("components/AdSlot.tsx"), /£/);
  assert.match(read(ADVERTISE), /priceText\(o\)/);
  assert.match(read(ADVERTISE), /\{rest\}/);
  assert.match(read("components/AdSlot.tsx"), /\{emptyPriceLine\(id\)\}/);
});

test("the founding offer is in the agreed words, with no count of places left", () => {
  const page = read(ADVERTISE).replace(/\s+/g, " ");
  assert.ok(
    page.includes(
      "For the first ten advertisers across the Lakes network sites: half price for your first three months, and your monthly price held for twelve months.",
    ),
  );
  assert.doesNotMatch(page, /places? (?:left|remaining)|spaces? (?:left|remaining)|\d+ (?:of ten|left)/i);
});

test("the advertise page sends enquiries to the contact form and shows no email address", () => {
  const page = read(ADVERTISE);
  const hrefs = [...page.matchAll(/href=["{`]+([^"`}]+)/g)].map((m) => m[1]);
  assert.ok(hrefs.length > 0);
  for (const h of hrefs) assert.equal(h, "/contact", `advertise page links to ${h}`);
  assert.doesNotMatch(page, /mailto:|@[a-z0-9-]+\.[a-z]/i);
  for (const heading of ["How it works", "Where adverts never appear", "Founding advertisers"]) assert.ok(page.includes(heading), heading);
});

test("a sponsor past its until date shows as empty", () => {
  const slot = { ...AD_SLOTS["home-card"], sponsor: { name: "X", url: "https://example.com", text: "t", until: "2026-11-10" } };
  assert.equal(activeSponsor(slot, new Date("2026-11-11T12:00:00Z")), null);
  assert.ok(activeSponsor(slot, new Date("2026-11-10T12:00:00Z")));
  assert.ok(activeSponsor({ ...slot, sponsor: { ...slot.sponsor, until: undefined } }, new Date("2030-01-01")));
  assert.equal(activeSponsor(AD_SLOTS["home-card"]), null);
});

test("filled cards and sponsored articles mark paid links", () => {
  const card = read("components/AdSlot.tsx");
  assert.match(card, /target="_blank"\s+rel="sponsored noopener"/);
  assert.match(card, /\{slot\.label\}/);
  const post = read("app/blog/[slug]/page.tsx");
  assert.match(post, /Sponsored by\{" "\}\s*<a href=\{sponsor\.url\} target="_blank" rel="sponsored noopener"/);
  assert.match(post, /rel=\{sponsor \? "sponsored noopener" : "noopener"\}/);
  // No author box on a sponsored article, and its author in the page data is the sponsor.
  assert.match(post, /\{!sponsor && \(\s*<div[^>]*>\s*<p[^>]*>About the author/);
  assert.match(post, /author: sponsor\s*\?\s*\{ "@type": "Organization", name: sponsor\.name, url: sponsor\.url \}/);
  // Teasers for a sponsored article are labelled too.
  assert.match(read("components/BlogListClient.tsx"), /post\.sponsored \? "Sponsored" : post\.categoryLabel/);
  assert.match(read("app/page.tsx"), /post\.sponsor \? "Sponsored" : post\.categoryLabel/);
  assert.match(read("app/feed/route.ts"), /p\.sponsor \? `Sponsored: \$\{p\.title\}`/);
});

test("every page that shows a space is rebuilt daily, so a lapsed sponsor drops", () => {
  for (const f of appFiles) {
    if (!/<AdSlot\b/.test(read(f))) continue;
    assert.match(read(f), /^export const revalidate = 86400;\r?$/m, f);
  }
});

test("the footer's partner line links to /advertise", () => {
  assert.match(read("components/Footer.tsx"), /<Link href="\/advertise"[^>]*>\s*Partner with The Lakes Network\s*<\/Link>/);
});

test("no em dash in the advertising files", () => {
  for (const f of COPY_FILES) assert.ok(!read(f).includes(String.fromCharCode(0x2014)), f);
});
