import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

export const metadata = {
  title: "Plants of the Sefton Coast",
  description: "Flora of the Sefton Coast — saltmarsh, dune and coastal plants.",
};

export default function PlantsPage() {
  const species = getAllSpecies("plants");
  return <SpeciesList category="plants" species={species} />;
}
