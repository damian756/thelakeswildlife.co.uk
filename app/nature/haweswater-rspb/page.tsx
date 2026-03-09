import Link from "next/link";
import type { Metadata } from "next";

const title = "RSPB Haweswater Reserve — Ospreys, Parking & What to See";
const description =
  "Practical guide to RSPB Haweswater in the Lake District — osprey hide, pied flycatchers, red squirrels, parking and seasonal highlights.";
const url = "https://www.thelakeswildlife.co.uk/nature/haweswater-rspb";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  { q: "Is RSPB Haweswater free to enter?", a: "Yes. Entry to the reserve is free. RSPB members park free. Non-members pay for parking. The osprey hide is free." },
  { q: "When is the best time to see ospreys at Haweswater?", a: "April to August. Birds return from West Africa in March. Get there before 10am for a spot at the hide." },
  { q: "What else can I see at Haweswater?", a: "Pied flycatchers, redstarts, red squirrels, and woodland birds. The nest box trail is good for pied flycatchers in May." },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "RSPB Haweswater Reserve",
    description: "RSPB reserve in the Lake District — ospreys, pied flycatchers, red squirrels. The flagship Lakeland wildlife site.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 54.5167, longitude: -2.8333 },
    address: { "@type": "PostalAddress", addressLocality: "Haweswater", postalCode: "CA10 2LX", addressCountry: "GB" },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hides", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free entry to reserve", value: true },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  },
];

export default function HaweswaterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
      <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[var(--slate)]" />
      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">RSPB Haweswater</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">RSPB Reserve · Lake District · Free entry</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">RSPB Haweswater Reserve</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Ospreys, pied flycatchers, red squirrels. The flagship Lake District wildlife site. Get there before 10am if you want a decent spot at the osprey hide. Take binoculars.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "Ospreys", label: "Breeding pair" },
            { stat: "Free", label: "Entry" },
            { stat: "CA10 2LX", label: "Postcode" },
            { stat: "Apr–Aug", label: "Osprey season" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--dune)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--forest)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1">{label}</p>
            </div>
          ))}
        </div>
        <section className="prose prose-slate max-w-none">
          <h2>What to see</h2>
          <p>Ospreys are the star. The hide overlooks the nest. Pied flycatchers and redstarts in the oak woodland. Red squirrels at the visitor centre feeders.</p>
          <h2>When to go</h2>
          <p>April to August for ospreys. May and June for pied flycatchers. Get there early. The hide fills up.</p>
        </section>
      </div>
    </>
  );
}
