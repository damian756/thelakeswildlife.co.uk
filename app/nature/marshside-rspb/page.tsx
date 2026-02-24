import Link from "next/link";

import type { Metadata } from "next";

const title = "Marshside RSPB Reserve — Parking, Access & What to Bring";
const description = "Practical guide to Marshside RSPB Reserve near Southport — postcode, parking, when to visit, what to see and what to bring.";
const url = "https://seftoncoastwildlife.co.uk/nature/marshside-rspb";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function MarshsidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--forest)] mb-6">Marshside RSPB Reserve</h1>
      <p className="text-lg text-[var(--slate)] mb-8">
        One of the best places for birdwatching on the Sefton Coast — lagoons, scrapes and saltmarsh that attract thousands of waders and wildfowl, especially in winter when pink-footed geese dominate the sky.
      </p>
      <section className="prose prose-[var(--slate)] max-w-none">
        <h2 className="text-xl font-semibold text-[var(--forest)] mt-8 mb-2">Practical info</h2>
        <p>Content to come: postcode, parking, opening times, facilities, accessibility, dogs policy.</p>
        <h2 className="text-xl font-semibold text-[var(--forest)] mt-8 mb-2">When to visit</h2>
        <p>Content to come: seasonal highlights — pink-footed geese Oct–Mar, wader passage spring and autumn, breeding birds summer.</p>
        <h2 className="text-xl font-semibold text-[var(--forest)] mt-8 mb-2">What to bring</h2>
        <p>Content to come: binoculars, layers, footwear, no bins on site (take it home).</p>
      </section>
      <p className="mt-8">
        <Link href="/birds" className="text-[var(--marsh)] font-medium hover:underline">Browse the bird species database →</Link>
      </p>
    </div>
  );
}
