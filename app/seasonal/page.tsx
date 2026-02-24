import Link from "next/link";

import type { Metadata } from "next";

const title = "Seasonal Wildlife Guides — Sefton Coast";
const description = "What to see when on the Sefton Coast — pink-footed geese, wader migration, breeding birds and seasonal highlights.";
const url = "https://seftoncoastwildlife.co.uk/seasonal";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seasons = [
  { slug: "pink-footed-geese", title: "Pink-footed geese", period: "October–March" },
  { slug: "wader-migration", title: "Wader migration", period: "Spring & autumn" },
  { slug: "breeding-birds", title: "Breeding birds", period: "April–July" },
  { slug: "winter-wildfowl", title: "Winter wildfowl", period: "November–February" },
];

export default function SeasonalPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--forest)] mb-6">Seasonal guides</h1>
      <p className="text-[var(--slate)] mb-8 max-w-2xl">
        When to visit the Sefton Coast for specific wildlife — from the spectacle of tens of thousands of pink-footed geese to spring wader passage and summer breeders.
      </p>
      <ul className="grid gap-4 md:grid-cols-2">
        {seasons.map((s) => (
          <li key={s.slug}>
            <Link
              href={`/seasonal/${s.slug}`}
              className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
            >
              <h2 className="text-xl font-semibold text-[var(--forest)]">{s.title}</h2>
              <p className="text-sm text-[var(--slate)] mt-1">{s.period}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
