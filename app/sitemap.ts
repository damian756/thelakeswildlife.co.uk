import type { MetadataRoute } from "next";
import { SPECIES_CATEGORIES } from "@/lib/types";
import { getAllSlugs } from "@/lib/species";

const BASE = "https://seftoncoastwildlife.co.uk";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticPaths = [
    "",
    "/birds",
    "/insects",
    "/plants",
    "/mammals",
    "/nature",
    "/nature/marshside-rspb",
    "/nature/sefton-coast",
    "/birdwatching-guide",
    "/seasonal",
    "/seasonal/pink-footed-geese",
    "/seasonal/wader-migration",
    "/seasonal/breeding-birds",
    "/seasonal/winter-wildfowl",
  ];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE}${path || "/"}`,
    lastModified: new Date(),
    changeFrequency: path ? "weekly" as const : "daily" as const,
    priority: path ? 0.8 : 1,
  }));

  for (const category of SPECIES_CATEGORIES) {
    const slugs = getAllSlugs(category);
    for (const slug of slugs) {
      entries.push({
        url: `${BASE}/${category}/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return entries;
}
