import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";
import { AdSlot } from "@/components/AdSlot";

import type { Metadata } from "next";

// Rebuilt at least once a day, so an advert whose `until` date has passed drops off (lib/ad-slots.ts).
export const revalidate = 86400;

const title = "Lake District Mammals: Red Squirrels, Red Deer, Otters, Bats";
const description = "Mammals, reptiles and amphibians of the Lake District: red squirrels, red deer, otters, pine martens, bats and adders. Where and when to see each.";
const url = "https://www.thelakeswildlife.co.uk/mammals";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "website", images: [{ url: "/images/species/mammals/red-squirrel.jpg", alt: "Red squirrel eating a nut on a mossy tree stump" }] },
  twitter: { card: "summary_large_image", title, description },
};

export default async function MammalsPage() {
  const species = getAllSpecies("mammals");

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Mammals of the Lake District",
    description: "Mammals, reptiles and amphibians of the Lake District: red squirrels, red deer, otters, pine martens, bats and adders.",
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
      <div className="mx-auto max-w-5xl px-4 pb-12">
        <AdSlot id="section-mammals" />
      </div>
    </>
  );
}
