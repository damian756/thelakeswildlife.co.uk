import { notFound } from "next/navigation";
import { getSpeciesBySlug, getAllSlugs, getAllSpecies } from "@/lib/species";
import { SpeciesDetail } from "@/components/SpeciesDetail";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const slugs = getAllSlugs("birds");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug("birds", slug);
  if (!species) return {};
  return {
    title: `${species.commonName} — Sefton Coast`,
    description: `${species.commonName} (${species.scientificName}) on the Sefton Coast. ${species.seasonalPresence}. ${species.whereToSee}.`,
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
  return <SpeciesDetail category="birds" species={species} related={related} />;
}
