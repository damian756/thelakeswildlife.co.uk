import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

export const metadata = {
  title: "Birds of the Sefton Coast",
  description: "Bird species you can see on the Sefton Coast — Marshside RSPB, waders, wildfowl, pink-footed geese and more.",
};

export default function BirdsPage() {
  const species = getAllSpecies("birds");
  return <SpeciesList category="birds" species={species} />;
}
