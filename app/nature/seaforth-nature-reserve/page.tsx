import Link from "next/link";
import type { Metadata } from "next";

const title = "Seaforth Nature Reserve — Mediterranean Gulls, Terns & Visitor Guide";
const description =
  "Practical guide to Seaforth Nature Reserve near Crosby — managed by the Wildlife Trust for Lancashire, free entry, Mediterranean Gulls, Little Terns and urban birding on the Mersey.";
const url = "https://seftoncoastwildlife.co.uk/nature/seaforth-nature-reserve";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Is Seaforth Nature Reserve free to enter?",
    a: "Yes. Seaforth Nature Reserve is free to enter and managed by the Wildlife Trust for Lancashire, Manchester and North Merseyside. Access is from the coastal path near Crosby.",
  },
  {
    q: "What is Seaforth Nature Reserve known for?",
    a: "Mediterranean Gulls — Seaforth holds one of the most reliable colonies in northern England. It's also nationally important for Little Terns and is a significant site for passage waders and migrants given its position on the north Mersey coast.",
  },
  {
    q: "When is the best time to visit Seaforth?",
    a: "Late April through July for Mediterranean Gulls breeding and Little Terns nesting. Spring and autumn for passage migrants — the reserve's position on the coast makes it a good trap for tired migrants. Winter is good for wildfowl on the lagoons.",
  },
  {
    q: "How do I get to Seaforth Nature Reserve?",
    a: "The reserve is on the north Mersey coast near Crosby and Seaforth. Waterloo station on the Merseyrail Northern Line is about 1.5 miles south. By car, head for Marine Drive, Crosby — the reserve is adjacent to the Seaforth container terminal.",
  },
  {
    q: "Are dogs allowed at Seaforth?",
    a: "Dogs are permitted but must be kept on leads throughout. The reserve is compact and any disturbance to nesting gulls and terns needs to be minimised between April and July.",
  },
  {
    q: "Can I see the Mediterranean Gulls easily?",
    a: "In the breeding season (May–July) yes — they nest in the Black-headed Gull colony and are findable by their distinctive call (a distinctive 'wee-oo' rather than the harsh cry of a Black-headed). Adults in summer have a full dark hood, white eye crescents, and a deep red bill. You'll hear them before you see them.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Seaforth Nature Reserve",
    description:
      "Urban nature reserve on the Mersey coast near Crosby — managed by the Wildlife Trust for Lancashire, Manchester and North Merseyside. Nationally important for Mediterranean Gulls and Little Terns.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 53.459, longitude: -3.026 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Marine Drive",
      addressLocality: "Crosby, Liverpool",
      postalCode: "L21 1JD",
      addressCountry: "GB",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free entry", value: true },
      { "@type": "LocationFeatureSpecification", name: "Dogs on leads", value: true },
    ],
    touristType: ["Birdwatchers", "Wildlife photographers", "Naturalists"],
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

export default function SeaforthNatureReservePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Seaforth Nature Reserve</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            Wildlife Trust · Crosby · Free entry
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Seaforth Nature Reserve
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Wedged between a container terminal and the suburbs of north Liverpool, Seaforth is one of those reserves that makes no sense until you see what&apos;s there. Mediterranean Gulls, Little Terns, passage rarities — and almost nobody watching. Serious birders know about it. Most people don&apos;t.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "Free", label: "Entry — always" },
            { stat: "L21 1JD", label: "Postcode" },
            { stat: "May–Jul", label: "Best for Med Gulls" },
            { stat: "N. Mersey", label: "Coast location" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--dune)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--forest)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1 leading-snug">{label}</p>
            </div>
          ))}
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Practical information
        </p>
        <div className="bg-[var(--dune)] rounded-xl p-6 mb-10">
          <table className="w-full text-sm text-[var(--slate)]">
            <tbody className="divide-y divide-[var(--foam)]">
              <tr className="py-2"><td className="py-2 font-medium w-36">Postcode</td><td className="py-2">L21 1JD (Marine Drive, Crosby)</td></tr>
              <tr><td className="py-2 font-medium">Entry</td><td className="py-2">Free. Open access</td></tr>
              <tr><td className="py-2 font-medium">Managed by</td><td className="py-2">Wildlife Trust for Lancashire, Manchester and North Merseyside</td></tr>
              <tr><td className="py-2 font-medium">Parking</td><td className="py-2">Limited roadside parking on Marine Drive. Crosby Coastal Park car park is nearby</td></tr>
              <tr><td className="py-2 font-medium">Dogs</td><td className="py-2">On leads throughout. Strict during nesting season April–July</td></tr>
              <tr><td className="py-2 font-medium">Facilities</td><td className="py-2">No on-site facilities. Crosby village is 10–15 minutes walk with cafés and shops</td></tr>
              <tr><td className="py-2 font-medium">Accessibility</td><td className="py-2">Main coastal path is accessible. The reserve interior has rougher terrain</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Key species
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">What makes Seaforth worth the trip</h2>
        <p className="text-[var(--slate)] mb-6 leading-relaxed">
          For its size, Seaforth punches well above its weight. Its position at the mouth of the Mersey, combined with the lagoons and scrub, creates a concentrated funnel for migrants and a stable breeding site for species that are genuinely scarce nationally.
        </p>

        <div className="space-y-6 mb-10">
          <div className="border-l-4 border-amber-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">Mediterranean Gull</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              The headline bird. Mediterranean Gulls breed in the Black-headed Gull colony at Seaforth — one of the most reliable breeding sites in northern England. Adults in summer are unmistakable: full dark hood (darker and more complete than Black-headed), white eye crescents, bright red bill and legs, and white wingtips with no black. They&apos;re also noticeably vocal — a distinctive &quot;wee-oo&quot; call that cuts through the gull noise once you know it.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Numbers have grown over recent decades as the species has expanded north-west from its traditional Mediterranean breeding range. Seeing them at Seaforth is watching range expansion in real time.
            </p>
          </div>

          <div className="border-l-4 border-sky-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">Little Tern</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Little Terns nest at Seaforth — the reserve provides managed nest protection during the breeding season. They&apos;re the UK&apos;s smallest tern: jittery, fast-moving, with a distinctive hovering style before plunge-diving into shallow water. Yellow bill with a black tip in summer. Listen for their high-pitched, scratchy calls at the lagoon edge.
            </p>
          </div>

          <div className="border-l-4 border-rose-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">Passage migrants and rarities</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Seaforth&apos;s coastal position makes it a decent migrant trap in spring and autumn. Common migrants like Wheatear, Whinchat and Redstart pass through in good numbers. The reserve has a history of attracting scarcer species — Yellow-browed Warbler in October is now almost annual, and American waders occasionally appear on the lagoons after westerly weather.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Check local birding reports (BirdGuides, RBA) before visiting in October — if conditions are right for a fall, Seaforth can be very productive.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">Winter wildfowl</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              The lagoons hold good numbers of diving ducks in winter — Tufted Duck, Pochard and occasional Goldeneye and Scaup. The Mersey itself can be viewed from the coastal path and is worth scanning for divers and grebes in cold weather.
            </p>
          </div>
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Seasonal highlights
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">When to visit</h2>

        <div className="overflow-x-auto mb-10">
          <table className="w-full text-sm text-[var(--slate)] border-collapse">
            <thead>
              <tr className="bg-[var(--dune)] text-left">
                <th className="py-2 px-3 font-semibold text-[var(--forest)]">Month</th>
                <th className="py-2 px-3 font-semibold text-[var(--forest)]">Highlights</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--dune)]">
              <tr><td className="py-2 px-3 font-medium">Apr–May</td><td className="py-2 px-3">Mediterranean Gulls return. Little Terns arrive. Spring migrants in the scrub</td></tr>
              <tr><td className="py-2 px-3 font-medium">Jun–Jul</td><td className="py-2 px-3">Peak breeding season for Med Gulls and Little Terns. Keep your distance from nest areas</td></tr>
              <tr><td className="py-2 px-3 font-medium">Aug–Sep</td><td className="py-2 px-3">Terns depart. Autumn wader passage. Common migrants and early rarities</td></tr>
              <tr><td className="py-2 px-3 font-medium">Oct</td><td className="py-2 px-3">Best month for rarities — Yellow-browed Warbler near-annual. American waders possible after westerlies</td></tr>
              <tr><td className="py-2 px-3 font-medium">Nov–Mar</td><td className="py-2 px-3">Diving ducks on the lagoons. Mersey divers and grebes. Quiet but reliable</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          What to bring
        </p>
        <ul className="space-y-3 mb-10 text-[var(--slate)] text-sm leading-relaxed">
          {[
            { label: "Binoculars", body: "8×42 is the standard. For scanning the Mersey or picking out waders at distance, a scope is useful." },
            { label: "Gull identification guide", body: "Mediterranean Gull is distinctive in summer but first and second year birds need care. Gulls of Europe, Asia and North America (Olsen & Larsson) is the definitive reference." },
            { label: "Waterproofs", body: "The Mersey coast gets weather. Even on a calm day the coastal path can be wet underfoot." },
            { label: "Phone with BirdGuides or BTO app", body: "Check local sightings before you go — local patch birders report regularly and will have noted anything unusual." },
          ].map(({ label, body }) => (
            <li key={label} className="flex gap-3">
              <span className="text-[var(--marsh)] mt-0.5 flex-shrink-0">▸</span>
              <span><strong className="text-[var(--slate)]">{label}</strong> — {body}</span>
            </li>
          ))}
        </ul>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Getting there
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-3">How to find it</h2>
        <p className="text-[var(--slate)] mb-3 text-sm leading-relaxed">
          The reserve is on the north Mersey coast adjacent to the Seaforth container terminal — postcode <strong>L21 1JD</strong>. Head for Marine Drive, Crosby. The reserve entrance and lagoons are accessible from the coastal path heading south from Crosby beach.
        </p>
        <p className="text-[var(--slate)] mb-3 text-sm leading-relaxed">
          Crosby is also home to Anthony Gormley&apos;s <em>Another Place</em> — 100 cast iron figures on the beach. Worth combining into the same trip if you haven&apos;t seen them.
        </p>
        <p className="text-[var(--slate)] mb-10 text-sm leading-relaxed">
          By train: Waterloo station (Merseyrail Northern Line) is about 1.5 miles south. Blundellsands & Crosby station is slightly closer. Both walkable in 20–25 minutes along the coast path.
        </p>

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

        <p className="text-[var(--slate)] text-sm leading-relaxed mb-10">
          Seaforth is on the southern edge of the Sefton Coast — a good starting or end point for a longer coastal day. For the full coast north to Formby and Southport,{" "}
          <a
            href="https://www.formbyguide.co.uk"
            className="font-medium text-[var(--marsh)] underline underline-offset-2 hover:text-[var(--forest)] transition-colors"
          >
            FormbyGuide covers Formby beach, pinewoods and red squirrels
          </a>
          {" "}and{" "}
          <a
            href="https://www.southportguide.co.uk"
            className="font-medium text-[var(--marsh)] underline underline-offset-2 hover:text-[var(--forest)] transition-colors"
          >
            SouthportGuide covers things to do and eat in Southport
          </a>
          .
        </p>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--dune)]">
          <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] font-medium hover:underline text-sm">Marshside RSPB Reserve →</Link>
          <Link href="/nature/ainsdale-sand-dunes" className="text-[var(--marsh)] font-medium hover:underline text-sm">Ainsdale Sand Dunes NNR →</Link>
          <Link href="/birds" className="text-[var(--marsh)] font-medium hover:underline text-sm">Browse the bird species database →</Link>
        </div>
      </div>
    </>
  );
}
