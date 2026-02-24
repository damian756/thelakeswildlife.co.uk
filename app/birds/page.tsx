import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

export const metadata = {
  title: "Sefton Coast Birds — Species Guide, Where to See & ID Tips",
  description: "40+ bird species recorded on the Sefton Coast — Pink-footed Geese at Marshside RSPB, breeding Avocets, Peregrines, waders and wildfowl. Seasonal presence, identification and viewing tips for each.",
};

export default function BirdsPage() {
  const species = getAllSpecies("birds");
  return <SpeciesList category="birds" species={species} />;
}
