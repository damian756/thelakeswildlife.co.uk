import { notFound } from "next/navigation";
import { getSpeciesBySlug, getAllSlugs, getAllSpecies } from "@/lib/species";
import { SpeciesDetail } from "@/components/SpeciesDetail";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const BASE = "https://www.thelakeswildlife.co.uk";

function truncateAtSentence(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const lastDot = cut.lastIndexOf(".");
  if (lastDot > max * 0.4) return cut.slice(0, lastDot + 1);
  return cut.replace(/\s+\S*$/, "") + "...";
}

export function generateStaticParams() {
  return getAllSlugs("insects").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug("insects", slug);
  if (!species) return {};

  const location = species.shortLocation ?? "the Lake District";
  const title = `${species.commonName} at ${location}`;
  const description = truncateAtSentence(
    species.description || `${species.commonName} (${species.scientificName}) on the Lake District. ${species.seasonalPresence}.`,
    155
  );

  const canonical = `${BASE}/insects/${slug}`;
  const image = species.localImage
    ? `${BASE}${species.localImage}`
    : undefined;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | The Lakes Wildlife`,
      description,
      url: canonical,
      siteName: "The Lakes Wildlife",
      type: "article",
      ...(image && { images: [{ url: image, width: 800, alt: species.commonName }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | The Lakes Wildlife`,
      description,
      ...(image && { images: [image] }),
    },
  };
}

export default async function InsectPage({ params }: Props) {
  const { slug } = await params;
  const species = getSpeciesBySlug("insects", slug);
  if (!species) notFound();
  const all = getAllSpecies("insects");
  const related = species.relatedSpecies
    ? all.filter((s) => species.relatedSpecies!.includes(s.id))
    : [];
  return <SpeciesDetail category="insects" species={species} related={related} slug={slug} />;
}
