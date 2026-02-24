import Link from "next/link";
import type { Species, SpeciesCategory } from "@/lib/types";

const categoryLabels: Record<SpeciesCategory, string> = {
  birds: "Birds",
  insects: "Insects",
  plants: "Plants",
  mammals: "Mammals",
};

const statusLabels: Record<string, string> = {
  red: "Red list",
  amber: "Amber list",
  green: "Green list",
  unknown: "Unknown",
};

interface SpeciesDetailProps {
  category: SpeciesCategory;
  species: Species;
  related: Species[];
}

export function SpeciesDetail({ category, species, related }: SpeciesDetailProps) {
  const label = categoryLabels[category];
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-[var(--slate)]/80 mb-6">
        <Link href="/" className="hover:text-[var(--marsh)]">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/${category}`} className="hover:text-[var(--marsh)]">{label}</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">{species.commonName}</span>
      </nav>
      <h1 className="text-3xl font-bold text-[var(--forest)]">{species.commonName}</h1>
      <p className="text-lg italic text-[var(--slate)] mt-1">{species.scientificName}</p>
      {species.conservationStatus && species.conservationStatus !== "unknown" && (
        <p className="mt-2 text-sm text-[var(--slate)]">
          UK {statusLabels[species.conservationStatus] ?? species.conservationStatus}
        </p>
      )}
      <div className="mt-6 prose prose-[var(--slate)] max-w-none">
        <p>{species.description}</p>
        <dl className="grid gap-2 mt-6">
          <div>
            <dt className="font-medium text-[var(--forest)]">When you’ll see it</dt>
            <dd>{species.seasonalPresence}</dd>
          </div>
          <div>
            <dt className="font-medium text-[var(--forest)]">Where to look</dt>
            <dd>{species.whereToSee}</dd>
          </div>
          {species.identification && (
            <div>
              <dt className="font-medium text-[var(--forest)]">Identification</dt>
              <dd>{species.identification}</dd>
            </div>
          )}
          {species.tips && (
            <div>
              <dt className="font-medium text-[var(--forest)]">Tips</dt>
              <dd>{species.tips}</dd>
            </div>
          )}
        </dl>
      </div>
      {related.length > 0 && (
        <aside className="mt-10 pt-8 border-t border-[var(--dune)]">
          <h2 className="text-lg font-semibold text-[var(--forest)] mb-3">Related species</h2>
          <ul className="flex flex-wrap gap-2">
            {related.map((r) => (
              <li key={r.id}>
                <Link
                  href={`/${category}/${r.id}`}
                  className="text-sm text-[var(--marsh)] hover:underline"
                >
                  {r.commonName}
                </Link>
              </li>
            ))}
          </ul>
        </aside>
      )}
    </article>
  );
}
