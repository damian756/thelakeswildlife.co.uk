import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

import type { Metadata } from "next";

const title = "Lake District Plants | Upland & Woodland Flora Species Guide";
const description = "Plants of the Lake District. Upland flora, limestone grassland, tarn-edge specialists and woodland species. Identification guides and where to find them.";
const url = "https://www.thelakeswildlife.co.uk/plants";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function PlantsPage() {
  const species = getAllSpecies("plants");


  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Plants of the Lake District",
    description: "Flora of the Lake District. Upland species, limestone grassland, tarn-edge plants and woodland wildflowers.",
    url,
    numberOfItems: species.length,
    itemListElement: species.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.commonName,
      url: `https://www.thelakeswildlife.co.uk/plants/${s.id}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SpeciesList category="plants" species={species}  />
    </>
  );
}
