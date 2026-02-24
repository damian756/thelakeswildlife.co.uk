import Link from "next/link";

import type { Metadata } from "next";

const title = "The Sefton Coast — Geography & Habitats";
const description = "What the Sefton Coast is — from Southport to Formby, marshes, dunes, pinewoods and the wildlife that depends on it.";
const url = "https://seftoncoastwildlife.co.uk/nature/sefton-coast";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function SeftonCoastPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--forest)] mb-6">The Sefton Coast</h1>
      <p className="text-lg text-[var(--slate)] mb-8">
        The stretch of coastline between the Mersey and the Ribble — saltmarsh, sand dunes, pinewoods and some of the best birdwatching in the North West.
      </p>
      <section className="prose prose-[var(--slate)] max-w-none">
        <p>Content to come: geography, key habitats (Marshside, Crossens, Formby dunes, pinewoods), how it connects to Southport and Formby.</p>
      </section>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] font-medium hover:underline">Marshside RSPB →</Link>
        <a href="https://www.formbyguide.co.uk" target="_blank" rel="noopener" className="text-[var(--marsh)] font-medium hover:underline">FormbyGuide (pinewoods, red squirrels) →</a>
        <a href="https://www.southportguide.co.uk" target="_blank" rel="noopener" className="text-[var(--marsh)] font-medium hover:underline">SouthportGuide →</a>
      </div>
    </div>
  );
}
