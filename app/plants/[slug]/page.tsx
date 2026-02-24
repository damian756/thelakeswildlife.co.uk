import { notFound } from "next/navigation";
import { getSpeciesBySlug, getAllSlugs, getAllSpecies } from "@/lib/species";
import { SpeciesDetail } from "@/components/SpeciesDetail";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const slugs = getAllSlugs("plants");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug("plants", slug);
  if (!species) return {};
  return {
    title: `${species.commonName} — Sefton Coast`,
    description: `${species.commonName} (${species.scientificName}) on the Sefton Coast. ${species.seasonalPresence}. ${species.whereToSee}.`,
  };
}

export default async function PlantPage({ params }: Props) {
  const { slug } = await params;
  const species = getSpeciesBySlug("plants", slug);
  if (!species) notFound();
  const all = getAllSpecies("plants");
  const related = species.relatedSpecies
    ? all.filter((s) => species.relatedSpecies!.includes(s.id))
    : [];
  return <SpeciesDetail category="plants" species={species} related={related} />;
}
