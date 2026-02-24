import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

export const metadata = {
  title: "Mammals of the Sefton Coast",
  description: "Mammals you can see on the Sefton Coast — including red squirrels at Formby.",
};

export default function MammalsPage() {
  const species = getAllSpecies("mammals");
  return <SpeciesList category="mammals" species={species} />;
}
