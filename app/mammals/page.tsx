import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

export const metadata = {
  title: "Sefton Coast Mammals — Red Squirrels, Seals, Otters & More",
  description: "Mammals of the Sefton Coast — Red Squirrels at Formby NT pinewoods, Grey Seals on the beach, Natterjack Toads at Ainsdale NNR and Brown Hares on the marshland. Where to see them and ID tips.",
};

export default function MammalsPage() {
  const species = getAllSpecies("mammals");
  return <SpeciesList category="mammals" species={species} />;
}
