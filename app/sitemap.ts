import { getAllSlugs } from "@/lib/species";
import { BLOG_POSTS } from "@/content/blog/posts";
import type { MetadataRoute } from "next";

const baseUrl = "https://www.thelakeswildlife.co.uk";

// Date the species data last changed. Update it when content/species/*.json changes.
const SPECIES_UPDATED = new Date("2026-11-11");

export default function sitemap(): MetadataRoute.Sitemap {
  const categories = ["birds", "insects", "plants", "mammals"] as const;

  const allSlugs: { cat: string; slug: string }[] = [];
  for (const cat of categories) {
    for (const slug of getAllSlugs(cat)) {
      allSlugs.push({ cat, slug });
    }
  }
  const speciesUrls: MetadataRoute.Sitemap = allSlugs.map(({ cat, slug }) => ({
    url: `${baseUrl}/${cat}/${slug}`,
    lastModified: SPECIES_UPDATED,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogUrls: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date("2026-11-11"), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/birds`, lastModified: new Date("2026-11-11"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/insects`, lastModified: new Date("2026-11-11"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/plants`, lastModified: new Date("2026-11-11"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/mammals`, lastModified: new Date("2026-11-11"), changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/nature`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/haweswater-rspb`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/grizedale-forest`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/foulshaw-moss`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/leighton-moss-rspb`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nature/ullswater`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/birdwatching-guide`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/seasonal`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/seasonal/osprey-season`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/red-deer-rut`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/red-squirrel-watching`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/seasonal/winter-wildfowl`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/fishing-guide`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/mammal-watching-guide`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/upland-habitats`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/woodland-habitats`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/blog`, lastModified: new Date("2026-11-11"), changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/photo-credits`, lastModified: new Date("2026-11-11"), changeFrequency: "monthly", priority: 0.3 },
    { url: `${baseUrl}/contact`, lastModified: new Date("2026-11-11"), changeFrequency: "yearly", priority: 0.4 },
  ];

  return [...staticPages, ...speciesUrls, ...blogUrls];
}
