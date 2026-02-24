import type { Metadata } from "next";

const title = "Birdwatching on the Sefton Coast — Guide & Best Spots";
const description = "How to birdwatch on the Sefton Coast — best reserves, seasons, what to bring and where to see pink-footed geese, waders and more.";
const url = "https://seftoncoastwildlife.co.uk/birdwatching-guide";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function BirdwatchingGuidePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--forest)] mb-6">Birdwatching guide</h1>
      <p className="text-lg text-[var(--slate)] mb-8">
        The Sefton Coast is one of the best places in the North West for waders, wildfowl and wintering geese. This guide covers where to go, when, and what kit you need.
      </p>
      <section className="prose prose-[var(--slate)] max-w-none">
        <p>Content to come: best spots (Marshside, Hesketh Out Marsh, etc.), seasonal calendar, binoculars and optics recommendations (affiliate), clothing and footwear, etiquette.</p>
      </section>
    </div>
  );
}
