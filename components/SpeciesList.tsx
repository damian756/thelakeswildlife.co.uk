import Link from "next/link";
import type { Species, SpeciesCategory } from "@/lib/types";

const categoryLabels: Record<SpeciesCategory, string> = {
  birds: "Birds",
  insects: "Insects",
  plants: "Plants",
  mammals: "Mammals",
};

const categoryDescriptions: Record<SpeciesCategory, string> = {
  birds: "Waders, wildfowl, raptors and passerines recorded on the Sefton Coast — from the Pink-footed Goose roosts at Marshside to breeding Avocets and Little Terns on the beach.",
  insects: "Butterflies, moths, beetles and other invertebrates of the Sefton Coast dunes, slacks and heathland — one of the richest insect habitats in northwest England.",
  plants: "Dune and marsh flora of the Sefton Coast — including nationally rare species such as Grass of Parnassus and Round-leaved Wintergreen at Ainsdale NNR.",
  mammals: "Mammals recorded on the Sefton Coast — from Red Squirrels in the Formby pinewoods to Grey Seals on the beach and Natterjack Toads in the dune slacks.",
};

const statusConfig = {
  red: { label: "Red", bg: "bg-red-600", text: "text-white" },
  amber: { label: "Amber", bg: "bg-amber-500", text: "text-white" },
  green: { label: "Green", bg: "bg-emerald-600", text: "text-white" },
  unknown: { label: "", bg: "", text: "" },
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
      {/* Header */}
      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">{label}</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3">
            {label} of the Sefton Coast
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

      {/* Species grid */}
      <div className="mx-auto max-w-5xl px-4 py-10">
        {species.length === 0 ? (
          <p className="text-[var(--slate)]/80">
            No species in the database yet. Add entries to{" "}
            <code className="bg-[var(--dune)] px-1 rounded">content/species/{category}.json</code>.
          </p>
        ) : (
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {species.map((s) => {
              const sc = s.conservationStatus ? statusConfig[s.conservationStatus] : null;
              return (
                <li key={s.id}>
                  <Link
                    href={`/${category}/${s.id}`}
                    className="block p-4 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--marsh)] hover:shadow-sm transition group h-full"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-semibold text-[var(--forest)] group-hover:text-[var(--marsh)] transition leading-snug">
                        {s.commonName}
                      </span>
                      {sc && sc.label && (
                        <span className={`flex-shrink-0 text-[10px] font-bold px-1.5 py-0.5 rounded ${sc.bg} ${sc.text} uppercase tracking-wide mt-0.5`}>
                          {sc.label}
                        </span>
                      )}
                    </div>
                    <span className="text-xs italic text-[var(--slate)]/60 block mb-2">{s.scientificName}</span>
                    {s.habitat && s.habitat.length > 0 && (
                      <div className="flex flex-wrap gap-1 mb-2">
                        {s.habitat.slice(0, 2).map((h) => (
                          <span key={h} className="text-[10px] bg-[var(--dune)] text-[var(--slate)]/70 px-1.5 py-0.5 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                    )}
                    {s.seasonalPresence && (
                      <span className="text-xs text-[var(--slate)]/55 leading-snug block">
                        {s.seasonalPresence.split('.')[0]}
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
