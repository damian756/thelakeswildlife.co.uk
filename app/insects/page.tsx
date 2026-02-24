import { getAllSpecies } from "@/lib/species";
import { SpeciesList } from "@/components/SpeciesList";

export const metadata = {
  title: "Sefton Coast Insects — Butterflies, Moths & Beetles Guide",
  description: "Butterflies, moths and beetles of the Sefton Coast dunes and heathland — Dark Green Fritillary, Grayling, Six-spot Burnet, Dune Tiger Beetle and more. Where to see them and identification tips.",
};

export default function InsectsPage() {
  const species = getAllSpecies("insects");
  return <SpeciesList category="insects" species={species} />;
}
