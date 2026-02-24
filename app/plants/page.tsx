import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

export const metadata = {
  title: "Sefton Coast Plants — Dune & Marsh Flora Species Guide",
  description: "Dune and marsh plants of the Sefton Coast — including nationally rare species like Grass of Parnassus and Round-leaved Wintergreen at Ainsdale NNR. Identification guides and where to find them.",
};

export default function PlantsPage() {
  const species = getAllSpecies("plants");
  return <SpeciesList category="plants" species={species} />;
}
