import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";
import type { Metadata } from "next";

const title = "Sefton Coast Plants — Dune & Marsh Flora Species Guide";
const description = "Dune and marsh plants of the Sefton Coast — including nationally rare species like Grass of Parnassus and Round-leaved Wintergreen at Ainsdale NNR. Identification guides and where to find them.";
const url = "https://seftoncoastwildlife.co.uk/plants";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function PlantsPage() {
  const species = getAllSpecies("plants");
  return <SpeciesList category="plants" species={species} />;
}
