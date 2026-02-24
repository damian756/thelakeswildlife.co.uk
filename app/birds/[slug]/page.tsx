import { notFound } from "next/navigation";
import { getSpeciesBySlug, getAllSlugs, getAllSpecies } from "@/lib/species";
import { SpeciesDetail } from "@/components/SpeciesDetail";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

async function getWikipediaImage(title: string) {
  try {
    const res = await fetch(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(title)}`,
      { next: { revalidate: 604800 } } // cache 7 days
    );
    if (!res.ok) return null;
    const data = await res.json();
    const src = data.originalimage?.source ?? data.thumbnail?.source ?? null;
    if (!src) return null;
    // Request 800px wide version from Wikimedia
    const resized = src.replace(/\/\d+px-([^/]+)$/, "/800px-$1");
    return {
      src: resized,
      pageUrl: data.content_urls?.desktop?.page ?? `https://en.wikipedia.org/wiki/${encodeURIComponent(title)}`,
    };
  } catch {
    return null;
  }
}

export function generateStaticParams() {
  const slugs = getAllSlugs("birds");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug("birds", slug);
  if (!species) return {};
  const location = species.shortLocation ?? "the Sefton Coast";
  return {
    title: `${species.commonName} at ${location} | Sefton Coast Wildlife`,
    description: species.faq?.[0]?.answer
      ? species.faq[0].answer.substring(0, 160)
      : `${species.commonName} (${species.scientificName}) on the Sefton Coast — where to see it, identification tips, and seasonal presence. ${species.seasonalPresence}.`,
  };
}

export default async function BirdPage({ params }: Props) {
  const { slug } = await params;
  const species = getSpeciesBySlug("birds", slug);
  if (!species) notFound();
  const all = getAllSpecies("birds");
  const related = species.relatedSpecies
    ? all.filter((s) => species.relatedSpecies!.includes(s.id))
    : [];
  const wikiImage = species.wikipediaTitle ? await getWikipediaImage(species.wikipediaTitle) : null;
  return <SpeciesDetail category="birds" species={species} related={related} wikiImage={wikiImage} />;
}
