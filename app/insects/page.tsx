import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";
import type { Metadata } from "next";

const title = "Sefton Coast Insects — Butterflies, Moths & Beetles Guide";
const description = "Butterflies, moths and beetles of the Sefton Coast dunes and heathland — Dark Green Fritillary, Grayling, Six-spot Burnet, Dune Tiger Beetle and more. Where to see them and identification tips.";
const url = "https://seftoncoastwildlife.co.uk/insects";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function InsectsPage() {
  const species = getAllSpecies("insects");
  return <SpeciesList category="insects" species={species} />;
}
