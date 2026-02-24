import { getAllSlugs } from "@/lib/species";
import type { MetadataRoute } from "next";

const baseUrl = "https://seftoncoastwildlife.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = ["birds", "insects", "plants", "mammals"] as const;
  const speciesUrls: MetadataRoute.Sitemap = [];
  for (const cat of categories) {
    const slugs = getAllSlugs(cat);
    for (const slug of slugs) {
      speciesUrls.push({
        url: `${baseUrl}/${cat}/${slug}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      });
    }
  }

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/birds`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/insects`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/plants`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mammals`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/nature`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/marshside-rspb`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/sefton-coast`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/birdwatching-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/seasonal`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/seasonal/pink-footed-geese`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/wader-migration`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/breeding-birds`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/winter-wildfowl`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  return [...staticPages, ...speciesUrls];
}
