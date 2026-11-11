import { notFound } from "next/navigation";
import { getSpeciesBySlug, getAllSlugs, getAllSpecies } from "@/lib/species";
import { SpeciesDetail } from "@/components/SpeciesDetail";
import { speciesDescription, speciesTitle } from "@/lib/types";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

const BASE = "https://www.thelakeswildlife.co.uk";

export function generateStaticParams() {
  return getAllSlugs("plants").map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const species = getSpeciesBySlug("plants", slug);
  if (!species) return {};

  const title = speciesTitle(species);
  const description = speciesDescription(species);

  const canonical = `${BASE}/plants/${slug}`;
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
      ...(image && { images: [{ url: image, alt: species.commonName }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | The Lakes Wildlife`,
      description,
      ...(image && { images: [image] }),
    },
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

  return <SpeciesDetail category="plants" species={species} related={related} slug={slug} />;
}
