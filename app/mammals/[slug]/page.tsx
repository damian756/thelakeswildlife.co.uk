import { notFound } from "next/navigation";
import { getSpeciesBySlug, getAllSlugs, getAllSpecies } from "@/lib/species";
import { SpeciesDetail } from "@/components/SpeciesDetail";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  const slugs = getAllSlugs("mammals");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug("mammals", slug);
  if (!species) return {};
  return {
    title: `${species.commonName} — Sefton Coast`,
    description: `${species.commonName} (${species.scientificName}) on the Sefton Coast. ${species.seasonalPresence}. ${species.whereToSee}.`,
  };
}

export default async function MammalPage({ params }: Props) {
  const { slug } = await params;
  const species = getSpeciesBySlug("mammals", slug);
  if (!species) notFound();
  const all = getAllSpecies("mammals");
  const related = species.relatedSpecies
    ? all.filter((s) => species.relatedSpecies!.includes(s.id))
    : [];
  return <SpeciesDetail category="mammals" species={species} related={related} />;
}
