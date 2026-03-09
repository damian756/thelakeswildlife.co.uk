import Link from "next/link";
import type { Species, SpeciesCategory } from "@/lib/types";
import { SpeciesListClient } from "./SpeciesListClient";

const categoryLabels: Record<SpeciesCategory, string> = {
  birds: "Birds",
  insects: "Insects",
  plants: "Plants",
  mammals: "Mammals & Wildlife",
};

const categoryDescriptions: Record<SpeciesCategory, string> = {
  birds: "Waders, raptors and passerines of the Lake District. Ospreys at RSPB Haweswater, red grouse on the fells, and migrant waders at Leighton Moss.",
  insects: "Butterflies, moths, beetles and other invertebrates of the Lake District fells, woodland and wetland habitats.",
  plants: "Upland and wetland flora of the Lake District, including nationally rare species in the fells and tarns.",
  mammals: "Mammals of the Lake District. Red squirrels at Grizedale, red deer in Martindale, otters and bats across the region.",
};

interface SpeciesListProps {
  category: SpeciesCategory;
  species: Species[];
}

export function SpeciesList({ category, species }: SpeciesListProps) {
  const label = categoryLabels[category];
  const description = categoryDescriptions[category];

  const redList = species.filter((s) => s.conservationStatus === "red");
  const amberList = species.filter((s) => s.conservationStatus === "amber");

  return (
    <div>
      {/* Header — server-rendered, no interactivity needed */}
      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">{label}</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
            {label} of the Lake District
          </h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">{description}</p>

          {/* Stats strip */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="bg-white/10 rounded-lg px-4 py-2 border border-white/10">
              <span className="text-xl font-bold text-white">{species.length}</span>
              <span className="text-sm text-white/60 ml-1.5">species recorded</span>
            </div>
            {redList.length > 0 && (
              <div className="bg-red-600/80 rounded-lg px-4 py-2 border border-red-500/30">
                <span className="text-xl font-bold text-white">{redList.length}</span>
                <span className="text-sm text-white/80 ml-1.5">Red List</span>
              </div>
            )}
            {amberList.length > 0 && (
              <div className="bg-amber-500/80 rounded-lg px-4 py-2 border border-amber-400/30">
                <span className="text-xl font-bold text-white">{amberList.length}</span>
                <span className="text-sm text-white/80 ml-1.5">Amber List</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Interactive grid — client component */}
      {species.length === 0 ? (
        <div className="mx-auto max-w-5xl px-4 py-10">
          <p className="text-[var(--slate)]/80">
            No species in the database yet. Add entries to{" "}
            <code className="bg-[var(--dune)] px-1 rounded">content/species/{category}.json</code>.
          </p>
        </div>
      ) : (
        <SpeciesListClient category={category} species={species} />
      )}
    </div>
  );
}
