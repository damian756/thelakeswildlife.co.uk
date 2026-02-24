import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";
import type { Metadata } from "next";

const title = "Sefton Coast Mammals — Red Squirrels, Seals, Otters & More";
const description = "Mammals of the Sefton Coast — Red Squirrels at Formby NT pinewoods, Grey Seals on the beach, Natterjack Toads at Ainsdale NNR and Brown Hares on the marshland. Where to see them and ID tips.";
const url = "https://seftoncoastwildlife.co.uk/mammals";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function MammalsPage() {
  const species = getAllSpecies("mammals");
  return <SpeciesList category="mammals" species={species} />;
}
