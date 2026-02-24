import Link from "next/link";
import type { Species, SpeciesCategory } from "@/lib/types";

const categoryLabels: Record<SpeciesCategory, string> = {
  birds: "Birds",
  insects: "Insects",
  plants: "Plants",
  mammals: "Mammals",
};

interface SpeciesListProps {
  category: SpeciesCategory;
  species: Species[];
}

export function SpeciesList({ category, species }: SpeciesListProps) {
  const label = categoryLabels[category];
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--forest)] mb-2">{label} of the Sefton Coast</h1>
      <p className="text-[var(--slate)] mb-8">
        {species.length} species recorded on the marshes, reserves and coastline. Click through for seasonal presence, where to see them, and ID tips.
      </p>
      {species.length === 0 ? (
        <p className="text-[var(--slate)]/80">No species in the database yet. Add entries to <code className="bg-[var(--dune)] px-1 rounded">content/species/{category}.json</code>.</p>
      ) : (
        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {species.map((s) => (
            <li key={s.id}>
              <Link
                href={`/${category}/${s.id}`}
                className="block p-4 rounded-lg border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
              >
                <span className="font-medium text-[var(--forest)]">{s.commonName}</span>
                <span className="text-sm text-[var(--slate)]/70 block italic">{s.scientificName}</span>
                {s.seasonalPresence && (
                  <span className="text-xs text-[var(--slate)]/60 mt-1 block">{s.seasonalPresence}</span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
