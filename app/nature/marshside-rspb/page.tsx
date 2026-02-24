import Link from "next/link";
import type { Metadata } from "next";

const title = "Marshside RSPB Reserve — Parking, Access & What to Bring";
const description =
  "Practical guide to Marshside RSPB Reserve near Southport — postcode PR9 9PH, free entry, hides, seasonal highlights and 80,000+ Pink-footed Geese in winter.";
const url = "https://seftoncoastwildlife.co.uk/nature/marshside-rspb";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Is Marshside RSPB free to enter?",
    a: "Yes. Entry is free for everyone — RSPB members and non-members alike. The car park on Marshside Road is also free.",
  },
  {
    q: "What is the postcode for Marshside RSPB?",
    a: "PR9 9PH. Parking is in the roadside layby on Marshside Road. The reserve entrance is on the left heading north from Southport, about a mile up the road.",
  },
  {
    q: "When is the best time to visit Marshside RSPB?",
    a: "October to March is the peak season — Pink-footed Geese arrive from Iceland and numbers can reach 80,000+ on the Ribble Estuary. April–June is good for breeding Avocets and waders. There is always something to see.",
  },
  {
    q: "Are dogs allowed at Marshside RSPB?",
    a: "Yes, dogs are allowed on leads on the main paths. Keep them well clear of nesting areas between April and July — Avocets, Lapwing and Redshank nest on and near the scrapes.",
  },
  {
    q: "How do I get to Marshside RSPB by public transport?",
    a: "Southport is on the Merseyrail Northern Line from Liverpool. From Lord Street the reserve is about 25 minutes on foot heading north along Marshside Road, or a short local bus ride.",
  },
  {
    q: "What birds can I see at Marshside in winter?",
    a: "Pink-footed Goose (80,000+), Teal, Wigeon, Shoveler, Pintail, Golden Plover, Ruff, and — on good evenings — Short-eared Owl quartering the saltmarsh. Bring a scope for the geese on the estuary.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Marshside RSPB Reserve",
    description:
      "RSPB reserve on the Sefton Coast near Southport — managed lagoons, scrapes and saltmarsh attracting thousands of wading birds and wildfowl.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 53.676, longitude: -2.993 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marshside Road",
      addressLocality: "Southport",
      postalCode: "PR9 9PH",
      addressCountry: "GB",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hides", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free entry", value: true },
      { "@type": "LocationFeatureSpecification", name: "Dogs on leads", value: true },
    ],
    touristType: ["Birdwatchers", "Wildlife photographers", "Families", "Dog walkers"],
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

export default function MarshsidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Page header band */}
      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Marshside RSPB</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            RSPB Reserve · Southport · Free entry
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Marshside RSPB Reserve
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            If you're going to visit one place on the Sefton Coast for birdwatching, make it Marshside. Free entry. Managed lagoons, breeding Avocets, and in winter — the sky fills with Pink-footed Geese. No excuses.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        {/* Stat block */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "80,000+", label: "Pink-footed Geese (peak winter)" },
            { stat: "Free", label: "Entry — always" },
            { stat: "10–20", label: "Avocet pairs breeding" },
            { stat: "PR9 9PH", label: "Postcode for parking" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--dune)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--forest)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        {/* Practical info box */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Practical information
        </p>
        <div className="bg-[var(--dune)] rounded-xl p-6 mb-10">
          <table className="w-full text-sm text-[var(--slate)]">
            <tbody className="divide-y divide-[var(--foam)]">
              <tr className="py-2"><td className="py-2 font-medium w-36">Postcode</td><td className="py-2">PR9 9PH</td></tr>
              <tr><td className="py-2 font-medium">Entry</td><td className="py-2">Free. RSPB members and non-members alike</td></tr>
              <tr><td className="py-2 font-medium">Car park</td><td className="py-2">Free roadside parking on Marshside Road. Small layby — arrive early in winter or you'll park further up</td></tr>
              <tr><td className="py-2 font-medium">Hides</td><td className="py-2">Two hides: Sandgrounder Hide (main lagoon) and the sea wall viewpoint</td></tr>
              <tr><td className="py-2 font-medium">Dogs</td><td className="py-2">Allowed on leads on the paths. Keep them well clear of nesting areas April–July</td></tr>
              <tr><td className="py-2 font-medium">Facilities</td><td className="py-2">No café or toilets on site. Southport town centre is 15 minutes on foot</td></tr>
              <tr><td className="py-2 font-medium">Accessibility</td><td className="py-2">The main path along the sea wall is flat and firm. Hides are step-free</td></tr>
            </tbody>
          </table>
        </div>

        {/* When to visit */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Seasonal highlights
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">When to visit</h2>
        <p className="text-[var(--slate)] mb-6 leading-relaxed">
          Marshside is worth visiting any time of year. The honest answer is that October through March is the best of it — but there's always something happening.
        </p>

        <div className="space-y-6 mb-10">
          <div className="border-l-4 border-sky-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">October – March: the peak</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Pink-footed Geese arrive from Iceland in October and by November there can be 80,000+ on the Ribble Estuary. Stand on the sea wall around dusk and you'll hear the noise before you see anything — a low, constant calling that builds until the sky goes dark with birds. It's one of the best wildlife spectacles in the North West and it costs nothing.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Through winter the lagoons hold Teal, Wigeon, Shoveler and Pintail. Ruff and Golden Plover work the fields behind the reserve. If it's cold and clear, check for Short-eared Owl quartering the saltmarsh at dusk.
            </p>
          </div>

          <div className="border-l-4 border-amber-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">April – June: breeding season</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Avocets breed on the scrapes — usually 10–20 pairs. Lapwing and Redshank nest on the marsh. Sedge Warblers and Reed Buntings arrive in April. Summer wader passage starts in May with Dunlin, Ringed Plover and the occasional Ruff still in breeding plumage.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Keep dogs strictly on leads from April onwards. Those Avocets have flown from West Africa to nest here.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">July – September: autumn passage</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Wader passage picks up in late July. Greenshank, Green Sandpiper, Little Stint and Curlew Sandpiper all pass through. Numbers build through August — by mid-August the main scrape can hold 200–400 Dunlin. September brings Black-tailed Godwit in large flocks on the inner marsh.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              The geese start coming back from Iceland from late September. The first skeins of the season are always a good moment.
            </p>
          </div>
        </div>

        {/* What to bring */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Kit list
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">What to bring</h2>
        <ul className="space-y-3 mb-10 text-[var(--slate)] text-sm leading-relaxed">
          {[
            { label: "Binoculars", body: "The basic requirement. 8×42 covers everything you'll see from the hides. Waders on the far mud are manageable at that magnification." },
            { label: "Scope", body: "Useful in winter when the geese are on the estuary. Not essential but if you've got one, bring it." },
            { label: "Layers and waterproofs", body: "Marshside is exposed. The wind off the Ribble is relentless. Dress warmer than you think you need to." },
            { label: "Walking boots or wellies", body: "The sea wall path is firm but field edges can be muddy after rain. Trainers are fine in summer." },
            { label: "Thermos", body: "Optional but you'll be glad of it. There's nowhere to get a coffee on site." },
            { label: "Field guide", body: "Collins Bird Guide is the one. The waders especially benefit from having a book on hand in autumn passage." },
          ].map(({ label, body }) => (
            <li key={label} className="flex gap-3">
              <span className="text-[var(--marsh)] mt-0.5 flex-shrink-0">▸</span>
              <span><strong className="text-[var(--slate)]">{label}</strong> — {body}</span>
            </li>
          ))}
        </ul>

        {/* Hides */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Hides & viewpoints
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">The hides</h2>
        <p className="text-[var(--slate)] mb-4 leading-relaxed text-sm">
          The main hide looks over the managed lagoon and scrapes — this is where you'll see most of the waders and wildfowl. It faces south-west, which means afternoon sun straight in your eyes in winter. Go in the morning if you can. The light is better and the geese are usually still on the fields before they move to the estuary. Check the left-hand corner of the scrape first — that's where the waders tend to congregate.
        </p>
        <p className="text-[var(--slate)] mb-10 leading-relaxed text-sm">
          The sea wall gives you an open view over the Ribble Estuary — essential for the Pink-footed Goose flocks and the winter waders on the mudflats. Bring the scope here.
        </p>

        {/* Getting there */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Getting there
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-3">How to find us</h2>
        <p className="text-[var(--slate)] mb-3 text-sm leading-relaxed">
          Marshside Road runs north from Southport town centre. The reserve entrance is on the left about a mile up, well before you reach Crossens. Postcode <strong>PR9 9PH</strong> gets you close — park in the layby on the road.
        </p>
        <p className="text-[var(--slate)] mb-10 text-sm leading-relaxed">
          By public transport: Southport is on the Merseyrail Northern Line from Liverpool. The reserve is about 25 minutes on foot from Lord Street, or a short bus ride to Marshside Road.
        </p>

        {/* FAQ */}
        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Common questions
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-6">FAQs</h2>
        <div className="space-y-5 mb-10">
          {faqs.map(({ q, a }) => (
            <div key={q} className="border-b border-[var(--dune)] pb-5 last:border-0">
              <h3 className="font-semibold text-[var(--forest)] mb-1.5 text-sm">{q}</h3>
              <p className="text-sm text-[var(--slate)] leading-relaxed">{a}</p>
            </div>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--dune)]">
          <Link href="/birds" className="text-[var(--marsh)] font-medium hover:underline text-sm">Browse the bird species database →</Link>
          <Link href="/birdwatching-guide" className="text-[var(--marsh)] font-medium hover:underline text-sm">Birdwatching guide →</Link>
          <Link href="/seasonal/pink-footed-geese" className="text-[var(--marsh)] font-medium hover:underline text-sm">Pink-footed Geese guide →</Link>
        </div>
      </div>
    </>
  );
}
