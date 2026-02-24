#!/usr/bin/env node
/**
 * Check which species wikipediaTitle values return images from the Wikipedia API.
 * Run: node scripts/check-wiki-images.mjs
 */

import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

async function fetchWikiImage(title) {
  const res = await fetch(
    `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`
  );
  if (!res.ok) return null;
  const data = await res.json();
  const base = data.originalimage?.source ?? data.thumbnail?.source;
  return base ? "ok" : null;
}

async function main() {
  const categories = ["birds", "insects", "plants", "mammals"];
  const fails = [];

  for (const cat of categories) {
    const path = join(ROOT, "content", "species", `${cat}.json`);
    const data = JSON.parse(readFileSync(path, "utf-8"));
    for (const s of data) {
      const title = s.wikipediaTitle;
      if (!title) {
        fails.push({ category: cat, id: s.id ?? s.commonName, commonName: s.commonName, scientificName: s.scientificName, issue: "no wikipediaTitle" });
        continue;
      }
      const ok = await fetchWikiImage(title);
      if (!ok) {
        fails.push({ category: cat, id: s.id ?? s.commonName, commonName: s.commonName, scientificName: s.scientificName, wikipediaTitle: title, issue: "no image" });
      }
      await new Promise((r) => setTimeout(r, 150));
    }
  }

  console.log("=== Missing images ===");
  console.log(JSON.stringify(fails, null, 2));
  console.log("\nTotal fails:", fails.length);
}

main().catch(console.error);
