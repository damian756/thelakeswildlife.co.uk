import Link from "next/link";
import type { Metadata } from "next";

const title = "Birdwatching in the Lake District | Guide, Best Spots & What to Bring";
const description =
  "Where to go birdwatching in the Lake District. RSPB Haweswater ospreys, Leighton Moss, Grizedale red squirrels. What to bring, when to go and what you'll see each season.";
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
    a: "RSPB Haweswater (postcode CA10 2LT) is the standout location for ospreys. The viewpoint hide opens April to September. Leighton Moss RSPB near Silverdale is excellent for bitterns, marsh harriers and bearded tits.",
  },
  {
    q: "What binoculars do I need for birdwatching in the Lakes?",
    a: "8×42 binoculars cover most situations. A scope is useful at Haweswater for the osprey nest and at Leighton Moss for distant marsh birds. Celestron Nature DX or Kowa YF are solid entry-level options under £150.",
  },
  {
    q: "When is the best season for birdwatching in the Lake District?",
    a: "April to July for ospreys at Haweswater and breeding upland birds. October for red deer rut in Martindale. Year-round at Leighton Moss. Winter brings red grouse on the fells and flocks of fieldfares.",
  },
  {
    q: "Is birdwatching at Haweswater suitable for beginners?",
    a: "Yes. The osprey viewpoint is accessible and the birds are visible from the hide. Staff and volunteers are on hand to help. Arrive before 10am in peak season for a decent spot.",
  },
  {
    q: "Can I see red squirrels in the Lake District?",
    a: "Yes. Grizedale Forest has a healthy population. Go early in the morning, walk quietly, and look for feeders near the visitor centre. Red squirrels are also present in Whinlatter and other conifer woodland.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    author: {
      "@type": "Person",
      name: "Damian",
      description:
        "Damian has been walking the Lake District fells for decades. Ex-army, outdoor enthusiast. Keeps a yearly bird tally. Still gets up at five.",
      url: "https://www.thelakeswildlife.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "The Lakes Wildlife",
      url: "https://www.thelakeswildlife.co.uk",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
];

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
            The Lake District is genuinely excellent for birds. Ospreys at RSPB Haweswater, red grouse on the fells, marsh harriers at Leighton Moss. You don&apos;t have to go to Norfolk.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        {/* Stat block */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "Ospreys", label: "RSPB Haweswater (Apr/Sep)" },
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
              <span className="text-xs bg-[var(--fell)] text-white px-2 py-0.5 rounded font-medium flex-shrink-0">Best for ospreys</span>
            </div>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              The osprey viewpoint hide overlooks the nest site. Open April to September. Get there before 10am in peak season. Red deer, ravens and upland species in the surrounding fells. The drive in from Mardale is spectacular.
            </p>
            <p className="text-xs text-[var(--slate)]/60 mb-1">Postcode: CA10 2LT · RSPB members free · Check opening times</p>
            <a href="https://www.rspb.org.uk/reserves-and-events/reserves-a-z/haweswater" target="_blank" rel="noopener noreferrer" className="text-xs text-[var(--lichen)] font-medium hover:underline block">RSPB Haweswater page →</a>
          </div>

          <div className="card-hover rounded-xl border border-[var(--fog)] bg-white p-5">
            <h3 className="font-bold text-[var(--fell)] mb-2">RSPB Leighton Moss</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-2">
              Near Silverdale, just south of the Lakes. The largest reedbed in northwest England. Bitterns, marsh harriers, bearded tits, otters. Excellent hides. Café on site. Worth a full day.
            </p>
            <p className="text-xs text-[var(--slate)]/60">Postcode: LA5 9TZ · RSPB members free · Café</p>
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
                <td className="px-3 py-2 text-[var(--slate)]">Ospreys at Haweswater, ring ouzel, wheatear, red grouse on the fells</td>
                <td className="px-3 py-2 text-[var(--slate)]">Haweswater, fells</td>
              </tr>
              <tr>
                <td className="px-3 py-2 font-medium text-amber-700">Aug/Sep</td>
                <td className="px-3 py-2 text-[var(--slate)]">Osprey migration, wader passage at Leighton Moss</td>
                <td className="px-3 py-2 text-[var(--slate)]">Haweswater, Leighton Moss</td>
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
            { item: "Binoculars", rec: "8×42 is the standard. Celestron Nature DX or Kowa YF are decent entry points under £150. Swarovski if you've made a commitment." },
            { item: "Field guide", rec: "Collins Bird Guide. Not the pocket version. The full one. Upland species in particular are worth having on paper." },
            { item: "Scope and tripod", rec: "Worth it for Haweswater ospreys and Leighton Moss. The hides have space. Dress for the weather." },
            { item: "Layers", rec: "The fells change fast. Even in summer, bring a waterproof and a fleece. The Haweswater hide can be cold." },
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
          Go to Haweswater in spring. Sit in the osprey hide for an hour. You&apos;ll see the birds. In autumn, try Leighton Moss for bitterns and marsh harriers. The hides are comfortable and the reedbed is productive year-round.
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
