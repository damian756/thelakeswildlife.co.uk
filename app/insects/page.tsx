import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

export const metadata = {
  title: "Insects of the Sefton Coast",
  description: "Butterflies, moths and invertebrates you can find on the Sefton Coast marshes and reserves.",
};

export default function InsectsPage() {
  const species = getAllSpecies("insects");
  return <SpeciesList category="insects" species={species} />;
}
