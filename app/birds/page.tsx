import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";
import type { Metadata } from "next";

const title = "Lake District Birds | Species Guide, Where to See & ID Tips";
const description = "Bird species of the Lake District. Ospreys at Haweswater RSPB, Peregrines on the crags, Pink-footed Geese, waders and wildfowl. Seasonal presence, identification and viewing tips for each.";
const url = "https://www.thelakeswildlife.co.uk/birds";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default async function BirdsPage() {
  const species = getAllSpecies("birds");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Birds of the Lake District",
    description: "Species database of birds recorded in the Lake District. Haweswater RSPB, Bassenthwaite, Derwentwater and the upland fells.",
    url,
    numberOfItems: species.length,
    itemListElement: species.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: s.commonName,
      url: `https://www.thelakeswildlife.co.uk/birds/${s.id}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }} />
      <SpeciesList category="birds" species={species} />
    </>
  );
}
