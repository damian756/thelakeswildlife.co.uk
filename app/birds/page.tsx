import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";
import type { Metadata } from "next";

const title = "Sefton Coast Birds — Species Guide, Where to See & ID Tips";
const description = "40+ bird species recorded on the Sefton Coast — Pink-footed Geese at Marshside RSPB, breeding Avocets, Peregrines, waders and wildfowl. Seasonal presence, identification and viewing tips for each.";
const url = "https://seftoncoastwildlife.co.uk/birds";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BirdsPage() {
  const species = getAllSpecies("birds");
  return <SpeciesList category="birds" species={species} />;
}
