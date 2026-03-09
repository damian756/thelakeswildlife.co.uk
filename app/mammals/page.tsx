import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

import type { Metadata } from "next";

const title = "Lake District Mammals & Wildlife | Red Squirrels, Red Deer, Otters, Seals";
const description = "Mammals of the Lake District. Red Squirrels at Grizedale, Red Deer rut at Martindale, Otters on the lakes and rivers, Grey Seals on the Cumbrian coast. Where to see them, ID tips and seasonal guidance.";
const url = "https://www.thelakeswildlife.co.uk/mammals";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function MammalsPage() {
  const species = getAllSpecies("mammals");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mammals of the Lake District",
    description: "Mammals of the Lake District. Red Squirrels at Grizedale, Red Deer at Martindale, Otters, Grey Seals and bats.",
    url,
    numberOfItems: species.length,
    itemListElement: species.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.commonName,
      url: `https://www.thelakeswildlife.co.uk/mammals/${s.id}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SpeciesList category="mammals" species={species}  />
    </>
  );
}
