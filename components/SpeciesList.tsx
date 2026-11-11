import Link from "next/link";
import Image from "next/image";
import type { Species, SpeciesCategory } from "@/lib/types";
import { SpeciesListClient } from "./SpeciesListClient";
import { toSpeciesCard } from "@/lib/types";

// Section hero illustrations (computer-generated; see the terms page).
const SECTION_ILLUSTRATIONS: Record<SpeciesCategory, { src: string; alt: string }> = {
  birds: { src: "/images/illustrations/section-birds.webp", alt: "Illustration of a wetland below the fells, with a wading bird in the shallows and a bird of prey soaring above the crags" },
  insects: { src: "/images/illustrations/section-insects.webp", alt: "Illustration of a summer meadow beside a pond, with butterflies over the flowers and dragonflies above the water" },
  plants: { src: "/images/illustrations/section-plants.webp", alt: "Illustration of an oak woodland floor with blue woodland flowers, ferns and mossy rocks opening onto a daisy meadow" },
  mammals: { src: "/images/illustrations/section-mammals.webp", alt: "Illustration of woodland edge and open fell, with a small red squirrel on a branch and a distant red deer on the hillside" },
};

const categoryLabels: Record<SpeciesCategory, string> = {
  birds: "Birds",
  insects: "Insects",
  plants: "Plants",
  mammals: "Mammals & Wildlife",
};

const categoryDescriptions: Record<SpeciesCategory, string> = {
  birds: "Waders, raptors and passerines of the Lake District. Ospreys at Foulshaw Moss, red grouse on the fells, and migrant waders at Leighton Moss.",
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
      <div className="relative overflow-hidden bg-[var(--fell)] text-white">
        <Image src={SECTION_ILLUSTRATIONS[category].src} alt={SECTION_ILLUSTRATIONS[category].alt} fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-[var(--fell)]/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--fell)]/80 via-[var(--fell)]/40 to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 py-10">
          <nav className="text-sm text-white/80 mb-4 flex items-center gap-1.5">
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
          <p className="text-[var(--slate)]">
            No species in the database yet. Add entries to{" "}
            <code className="bg-[var(--fog)] px-1 rounded">content/species/{category}.json</code>.
          </p>
        </div>
      ) : (
        <SpeciesListClient category={category} species={species.map(toSpeciesCard)} />
      )}

      {/* Every species linked in plain HTML, whatever the list above has rendered */}
      {species.length > 0 && (
        <nav aria-label={`All ${label.toLowerCase()}, A to Z`} className="mx-auto max-w-5xl px-4 pb-12">
          <details className="rounded-xl border border-[var(--fog)] bg-white p-4">
            <summary className="cursor-pointer text-sm font-semibold text-[var(--fell)]">
              All {species.length} {label.toLowerCase()}, A to Z
            </summary>
            <ul className="mt-3 columns-2 sm:columns-3 gap-6 text-sm">
              {[...species]
                .sort((a, b) => a.commonName.localeCompare(b.commonName))
                .map((s) => (
                  <li key={s.id} className="mb-1 break-inside-avoid">
                    <Link href={`/${category}/${s.id}`} className="text-[var(--lichen)] hover:underline">
                      {s.commonName}
                    </Link>
                  </li>
                ))}
            </ul>
          </details>
          <p className="mt-3 text-xs text-[var(--slate)]">
            Photos from Wikimedia Commons.{" "}
            <Link href={`/photo-credits#${category}`} className="underline decoration-dotted underline-offset-2 hover:decoration-solid">
              Authors and licences
            </Link>
          </p>
        </nav>
      )}
    </div>
  );
}
