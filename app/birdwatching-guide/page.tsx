import Link from "next/link";
import type { Metadata } from "next";

const title = "Birdwatching in the Lake District | Guide, Best Spots & What to Bring";
const description =
  "Where to go birdwatching in and around the Lake District. Leighton Moss bitterns, Foulshaw Moss ospreys, Haweswater ring ouzels. What to bring, when to go and what you'll see each season.";
const url = "https://www.thelakeswildlife.co.uk/birdwatching-guide";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Where is the best place to go birdwatching in the Lake District?",
    a: "Leighton Moss RSPB near Silverdale (LA5 0SW) has the largest reedbed in north-west England, with bitterns, marsh harriers and bearded tits. For breeding ospreys, Cumbria Wildlife Trust's Foulshaw Moss near Witherslack (LA11 6SN) has a viewing platform and an osprey webcam.",
  },
  {
    q: "What binoculars do I need for birdwatching in the Lakes?",
    a: "8×42 binoculars cover most situations. A scope is useful at Leighton Moss for distant marsh birds.",
  },
  {
    q: "When is the best season for birdwatching in the Lake District?",
    a: "April to July for breeding upland birds such as ring ouzel. October for the red deer rut in Martindale. Year-round at Leighton Moss. Red grouse live on the moors all year, and fieldfare flocks arrive from October to April.",
  },
  {
    q: "Is birdwatching at Haweswater suitable for beginners?",
    a: "Haweswater has no RSPB trails, public hides, viewpoints, toilets or café, so it suits walkers happy to explore on public footpaths. For hides and level paths, start at Leighton Moss.",
  },
  {
    q: "Can I see red squirrels in the Lake District?",
    a: "Yes. Grizedale Forest has a healthy population. Go early in the morning and walk quietly. Red squirrels are also present in Whinlatter and other conifer woodland.",
  },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
  {
    "@type": "Article",
    "@id": url + "#article",
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: "2024-04-01",
    dateModified: "2025-03-01",
    author: { "@id": "https://www.churchtownmedia.co.uk/about#founder" },
    publisher: { "@id": "https://www.thelakeswildlife.co.uk/#organization" },
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thelakeswildlife.co.uk" },
      { "@type": "ListItem", position: 2, name: "Birdwatching Guide", item: url },
    ],
  },
  {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
  ],
};

export default function BirdwatchingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Page header */}
      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Birdwatching guide</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Practical guide · All levels
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Birdwatching in the Lake District
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            The Lake District is genuinely excellent for birds. Ospreys at Foulshaw Moss, red grouse on the fells, marsh harriers at Leighton Moss. You don&apos;t have to go to Norfolk.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        {/* Stat block */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "Ospreys", label: "Foulshaw Moss (summer)" },
            { stat: "4+", label: "Key sites to visit" },
            { stat: "RSPB members", label: "Free entry to reserves" },
            { stat: "Year-round", label: "Always something to see" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--fog)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--fell)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        {/* Best spots */}
        <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">
          Where to go
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">Best spots</h2>

        <div className="space-y-5 mb-10">
          <div className="card-hover rounded-xl border border-[var(--fog)] bg-white p-5">
            <div className="flex items-start justify-between gap-3 mb-2">
              <h3 className="font-bold text-[var(--fell)]">RSPB Haweswater</h3>
              <span className="text-xs bg-[var(--fell)] text-white px-2 py-0.5 rounded font-medium flex-shrink-0">Free entry</span>
            </div>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              A landscape restoration partnership between the RSPB and United Utilities. There are no RSPB trails, public hides, viewpoints, toilets or café. Park at Mardale Head and explore the public footpaths for red squirrels, ring ouzels and red deer.
            </p>
            <p className="text-xs text-[var(--slate)]/60 mb-1">Mardale Head car park: what3words weary.intrigued.published · Free entry · No toilets</p>
            <a href="https://www.rspb.org.uk/days-out/reserves/haweswater" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--lichen)] font-medium hover:underline block">RSPB Haweswater page →</a>
          </div>

          <div className="card-hover rounded-xl border border-[var(--fog)] bg-white p-5">
            <h3 className="font-bold text-[var(--fell)] mb-2">RSPB Leighton Moss</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              Near Silverdale, just south of the Lakes. The largest reedbed in northwest England. Bitterns, marsh harriers, bearded tits, otters. Excellent hides. Café on site. Worth a full day.
            </p>
            <p className="text-xs text-[var(--slate)]/60">Postcode: LA5 0SW · RSPB members free · Café</p>
          </div>

          <div className="card-hover rounded-xl border border-[var(--fog)] bg-white p-5">
            <h3 className="font-bold text-[var(--fell)] mb-2">Grizedale Forest</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              Red squirrels, red deer, woodland birds. Forestry England managed. Good for Treecreeper, Coal Tit, Crossbill in irruption years. The forest drives and trails are well signposted. Go early for squirrels.
            </p>
            <p className="text-xs text-[var(--slate)]/60">Postcode: LA22 0QJ · Parking charge · Visitor centre</p>
          </div>

          <div className="card-hover rounded-xl border border-[var(--fog)] bg-white p-5">
            <h3 className="font-bold text-[var(--fell)] mb-2">The fells: upland species</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              Red grouse, ring ouzel, wheatear, golden plover. Walk any of the higher fells in spring and summer and you&apos;ll encounter them. Martindale in October for the red deer rut. Dawn or dusk for the best chance of seeing stags.
            </p>
            <p className="text-xs text-[var(--slate)]/60">No fixed postcode · Check weather · Bring layers</p>
          </div>
        </div>

        {/* Seasonal calendar */}
        <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">
          When to visit
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Seasonal calendar</h2>
        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-[var(--fell)] text-white">
                <th className="text-left px-3 py-2 rounded-tl-lg">Season</th>
                <th className="text-left px-3 py-2">Highlights</th>
                <th className="text-left px-3 py-2 rounded-tr-lg">Best site</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--fog)]">
              <tr className="bg-sky-50">
                <td className="px-3 py-2 font-medium text-sky-800">Apr/Jul</td>
                <td className="px-3 py-2 text-[var(--slate)]">Ospreys at Foulshaw Moss, ring ouzel, wheatear, red grouse on the fells</td>
                <td className="px-3 py-2 text-[var(--slate)]">Foulshaw Moss, fells</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-amber-700">Aug/Sep</td>
                <td className="px-3 py-2 text-[var(--slate)]">Ospreys passing through in September, wader passage at Leighton Moss</td>
                <td className="px-3 py-2 text-[var(--slate)]">Foulshaw Moss, Leighton Moss</td>
              </tr>
              <tr className="bg-emerald-50">
                <td className="px-3 py-2 font-medium text-emerald-700">Oct/Mar</td>
                <td className="px-3 py-2 text-[var(--slate)]">Red deer rut in Martindale, fieldfares, red grouse, bitterns at Leighton Moss</td>
                <td className="px-3 py-2 text-[var(--slate)]">Martindale, Leighton Moss, fells</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Kit */}
        <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">
          Kit list
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">What to bring</h2>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          You don&apos;t need expensive gear to start. A pair of 8×42 binoculars and a field guide will cover 90% of what you&apos;ll see. Upgrade the scope later when you&apos;ve decided you&apos;re hooked.
        </p>
        <div className="space-y-3 mb-10">
          {[
            { item: "Binoculars", rec: "8×42 is the standard and covers most situations." },
            { item: "Field guide", rec: "Collins Bird Guide. Not the pocket version. The full one. Upland species in particular are worth having on paper." },
            { item: "Scope and tripod", rec: "Worth it at Leighton Moss for distant marsh birds. Dress for the weather." },
            { item: "Layers", rec: "The fells change fast. Even in summer, bring a waterproof and a fleece." },
            { item: "Walking boots", rec: "Essential for the fells. Grizedale and Leighton Moss have good paths but can be muddy." },
            { item: "Thermos", rec: "Leighton Moss has a café. Haweswater doesn't. Plan accordingly." },
          ].map(({ item, rec }) => (
            <div key={item} className="flex gap-3 text-sm">
              <span className="text-[var(--lichen)] mt-0.5 flex-shrink-0">▸</span>
              <span className="text-[var(--slate)]"><strong className="text-[var(--slate)]">{item}</strong>: {rec}</span>
            </div>
          ))}
        </div>

        {/* Beginners */}
        <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">
          Getting started
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">If you&apos;re just starting out</h2>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          Start at Leighton Moss. Sit in one of the hides for an hour and watch the reedbed for bitterns, marsh harriers and bearded tits.
        </p>
        <p className="text-[var(--slate)] mb-4 text-sm leading-relaxed">
          Don&apos;t worry about identifying everything. Write down what you see and look it up afterwards. The Collins Guide and the Merlin app (free) will cover most of what you encounter. Ask other birders at the hide; they&apos;ll usually be pleased you&apos;re interested.
        </p>
        <p className="text-[var(--slate)] mb-10 text-sm leading-relaxed">
          Sometimes you stand in the rain for two hours and see nothing. That&apos;s birdwatching. Come back tomorrow.
        </p>

        {/* FAQ */}
        <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">
          Common questions
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">FAQs</h2>
        <div className="space-y-5 mb-10">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b border-[var(--fog)] pb-5 last:border-0">
              <h3 className="font-semibold text-[var(--fell)] mb-1.5 text-sm">{q}</h3>
              <p className="text-sm text-[var(--slate)] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--fog)]">
          <Link href="/birds" className="text-[var(--lichen)] font-medium hover:underline text-sm">Bird species database →</Link>
          <Link href="/mammals" className="text-[var(--lichen)] font-medium hover:underline text-sm">Mammals & wildlife →</Link>
        </div>
      </div>
    </>
  );
}
