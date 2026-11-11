// Plain visit counts (Nov 2026). Pure helpers for app/api/count: which requests
// are counted. Nothing about the visitor is stored; the user agent is read only
// to leave known bots out.
import birds from "@/content/species/birds.json";
import insects from "@/content/species/insects.json";
import plants from "@/content/species/plants.json";
import mammals from "@/content/species/mammals.json";
import { BLOG_POSTS } from "@/content/blog/posts";
import { slugify } from "@/lib/types";

// The list from app/api/p (the old beacon), plus a few common crawlers and tools.
const BOT_PATTERNS = [
  "bot", "crawler", "spider", "Googlebot", "Bingbot", "Slurp", "DuckDuckBot",
  "Baiduspider", "YandexBot", "facebookexternalhit", "Twitterbot", "LinkedInBot",
  "headless", "lighthouse", "ahrefs", "semrush", "python", "curl", "wget",
  "preview", "monitor", "uptime", "playwright", "puppeteer",
];

export function isBot(ua: string): boolean {
  if (!ua) return true;
  const lower = ua.toLowerCase();
  return BOT_PATTERNS.some((p) => lower.includes(p.toLowerCase()));
}

// Pages that exist outside the species, blog and seasonal lists.
const STATIC_PATHS = [
  "/", "/birds", "/insects", "/plants", "/mammals",
  "/nature", "/nature/haweswater-rspb", "/nature/grizedale-forest", "/nature/foulshaw-moss",
  "/nature/leighton-moss-rspb", "/nature/ullswater",
  "/birdwatching-guide", "/mammal-watching-guide", "/fishing-guide",
  "/upland-habitats", "/woodland-habitats",
  "/seasonal", "/blog", "/contact", "/privacy", "/terms",
];

// Keep in step with the keys of seasonalPages in app/seasonal/[slug]/page.tsx.
const SEASONAL_SLUGS = ["osprey-season", "red-deer-rut", "red-squirrel-watching", "winter-wildfowl"];

type Entry = { id?: string; commonName: string };
const speciesPaths = (cat: string, list: Entry[]) =>
  list.map((s) => `/${cat}/${s.id ?? slugify(s.commonName)}`);

const KNOWN = new Set<string>([
  ...STATIC_PATHS,
  ...SEASONAL_SLUGS.map((s) => `/seasonal/${s}`),
  ...BLOG_POSTS.map((p) => `/blog/${p.slug}`),
  ...speciesPaths("birds", birds as Entry[]),
  ...speciesPaths("insects", insects as Entry[]),
  ...speciesPaths("plants", plants as Entry[]),
  ...speciesPaths("mammals", mammals as Entry[]),
]);

/** The path to count, or null. Only a known page path: no query, no /api, /admin, /dashboard or /_next. */
export function countablePath(raw: unknown): string | null {
  if (typeof raw !== "string") return null;
  const path = raw.trim();
  if (!path.startsWith("/") || path.length > 300) return null;
  if (/^\/(api|admin|dashboard|_next)(\/|$)/.test(path)) return null;
  const clean = path.length > 1 ? path.replace(/\/+$/, "") : path;
  return KNOWN.has(clean) ? clean : null;
}
