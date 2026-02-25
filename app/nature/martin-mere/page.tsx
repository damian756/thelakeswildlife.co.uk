import Link from "next/link";
import type { Metadata } from "next";

const title = "WWT Martin Mere — Whooper Swans, Flamingos & Visitor Guide";
const description =
  "Practical guide to WWT Martin Mere Wetland Centre near Burscough — postcode L40 0TA, opening times, whooper swans, entry prices and what to see each season.";
const url = "https://seftoncoastwildlife.co.uk/nature/martin-mere";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "Sefton Coast Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "What is the postcode for WWT Martin Mere?",
    a: "L40 0TA. WWT Martin Mere is on Fish Lane, Burscough, near Ormskirk in Lancashire. It's about 10 miles north-east of Southport, well signposted from the A59.",
  },
  {
    q: "How much does it cost to visit Martin Mere?",
    a: "Adult entry is around £14–16, with discounts for children and families. WWT members enter free. A family membership works out cheaper than two adult visits, so worth considering if you're planning to return. Check wwt.org.uk for current prices and seasonal offers.",
  },
  {
    q: "When is the best time to visit Martin Mere?",
    a: "October to February for the whooper and Bewick's swans — they arrive from Iceland and Siberia respectively and the numbers at peak can reach 1,000+ birds on the reserve. November is the most reliable month. Summer is better for breeding ducks, waders and the flamingo collection.",
  },
  {
    q: "Are dogs allowed at WWT Martin Mere?",
    a: "Guide dogs and registered assistance dogs are welcome. Pet dogs are not permitted inside the centre.",
  },
  {
    q: "What's the difference between whooper and Bewick's swans?",
    a: "Both winter at Martin Mere. Whooper swans are larger with a longer, wedge-shaped yellow and black bill. Bewick's are smaller and rounder, with a more variable yellow patch on the bill — each individual has a unique pattern. Bewick's are the rarer and more threatened of the two, breeding in Siberia.",
  },
  {
    q: "Is Martin Mere good for families?",
    a: "Yes — it's one of the best family wildlife days out in the North West. The flamingo lagoon, the swan feeds (daily in winter), adventure play areas, and the Discovery Zone all keep children engaged. Plan 3–4 hours minimum.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "WWT Martin Mere Wetland Centre",
    description:
      "WWT wetland centre near Burscough, Lancashire — famous for winter whooper and Bewick's swans, flamingos and diverse wetland habitats.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 53.606, longitude: -2.847 },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fish Lane, Burscough",
      addressLocality: "Ormskirk",
      postalCode: "L40 0TA",
      addressCountry: "GB",
    },
    telephone: "01704 895181",
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Café", value: true },
      { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hides", value: true },
      { "@type": "LocationFeatureSpecification", name: "Family facilities", value: true },
      { "@type": "LocationFeatureSpecification", name: "Accessible paths", value: true },
    ],
    touristType: ["Families", "Birdwatchers", "Wildlife photographers", "Day trippers"],
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

export default function MartinMerePage() {
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
            <span className="text-white/80">WWT Martin Mere</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">
            WWT Wetland Centre · Burscough · Entry charge
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            WWT Martin Mere
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            In November, up to a thousand whooper swans land on the mere after flying in from Iceland. It&apos;s one of those things you have to see to believe. Martin Mere is a proper day out — there&apos;s always something to see regardless of season.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "1,000+", label: "Whooper Swans (peak winter)" },
            { stat: "L40 0TA", label: "Postcode" },
            { stat: "Nov", label: "Best month to visit" },
            { stat: "~£15", label: "Adult entry (members free)" },
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
              <tr className="py-2"><td className="py-2 font-medium w-36">Postcode</td><td className="py-2">L40 0TA (Fish Lane, Burscough)</td></tr>
              <tr><td className="py-2 font-medium">Entry</td><td className="py-2">Paid. ~£14–16 adults, less for children. WWT members free. Check wwt.org.uk for current prices</td></tr>
              <tr><td className="py-2 font-medium">Opening times</td><td className="py-2">Generally 9:30am–5pm (summer), 9:30am–4:30pm (winter). Check website before visiting — hours vary</td></tr>
              <tr><td className="py-2 font-medium">Car park</td><td className="py-2">Free for visitors. Large car park on site</td></tr>
              <tr><td className="py-2 font-medium">Café</td><td className="py-2">On-site café and gift shop. Good food, reasonable prices — plan to eat here</td></tr>
              <tr><td className="py-2 font-medium">Dogs</td><td className="py-2">Registered assistance dogs only. No pet dogs</td></tr>
              <tr><td className="py-2 font-medium">Accessibility</td><td className="py-2">Excellent. Most paths are firm and surfaced. Wheelchairs and mobility scooters available to borrow</td></tr>
              <tr><td className="py-2 font-medium">Phone</td><td className="py-2">01704 895181</td></tr>
            </tbody>
          </table>
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          Seasonal highlights
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">When to visit</h2>
        <p className="text-[var(--slate)] mb-6 leading-relaxed">
          Martin Mere is worth visiting any time of year — the flamingo lagoon, breeding ducks and otters are year-round. But winter is when it becomes something genuinely special.
        </p>

        <div className="space-y-6 mb-10">
          <div className="border-l-4 border-sky-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">October – February: the swan season</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Whooper Swans start arriving from Iceland in October and peak in November — numbers regularly exceed 1,000 birds on the reserve. They&apos;re huge, vocal and completely unafraid of people. The daily swan feed brings them in close and is one of the best wildlife experiences in the North West. Don&apos;t skip it.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Bewick&apos;s Swans also winter here, though in smaller numbers than they once did — their Siberian breeding grounds are under pressure. Look for the smaller body size and more rounded head compared to the Whoopers. Each individual has a unique yellow bill pattern; WWT researchers photograph and name them all.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Through winter the lagoons also hold large numbers of Pintail, Shoveler, Wigeon and Teal. European White-fronted Geese roost on the main mere in good numbers. Pink-footed Geese — the same birds you see at Marshside — use the fields around the reserve.
            </p>
          </div>

          <div className="border-l-4 border-emerald-500 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">March – June: breeding season</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              The swans leave in March for Iceland. Breeding ducks take over — Tufted Duck, Pochard, Gadwall and Garganey all nest on the reserve. Lapwing and Redshank breed on the wet grassland. The captive flamingo collection is spectacular in summer when they&apos;re most active.
            </p>
            <p className="text-[var(--slate)] text-sm leading-relaxed mt-2">
              Great Crested Grebes display on the open water in March and April. Otters are resident and occasionally visible from the hides in early morning.
            </p>
          </div>

          <div className="border-l-4 border-amber-400 pl-5">
            <h3 className="font-semibold text-[var(--forest)] mb-1">July – September: family season</h3>
            <p className="text-[var(--slate)] text-sm leading-relaxed">
              Summer is peak family season. The Discovery Zone, adventure play and daily keeper talks make this the best time for children. Wildlife-wise it&apos;s quieter, but Kingfisher is reliable on the water channels in late summer and wader passage picks up in August.
            </p>
          </div>
        </div>

        <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-2">
          What to see
        </p>
        <h2 className="font-display text-2xl font-bold text-[var(--forest)] mb-4">Highlights not to miss</h2>
        <ul className="space-y-3 mb-10 text-[var(--slate)] text-sm leading-relaxed">
          {[
            { label: "The swan feed", body: "Daily in winter. The whole flock moves in and the noise is incredible. Get there 10 minutes early for a good position." },
            { label: "Flamingo Lagoon", body: "A large captive flock of Chilean Flamingos. Genuinely impressive — and oddly at home in Lancashire." },
            { label: "Otter holt", body: "The resident otters have a purpose-built holt with underwater viewing windows. Early morning and late afternoon are best." },
            { label: "The hides", body: "Multiple hides overlooking different habitats. Bespoke Mere Hide overlooks the main water and is the best winter viewpoint." },
            { label: "Canoe safari", body: "Seasonal activity — paddling through the reedbeds with a guide. Book in advance, it sells out." },
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
          Postcode <strong>L40 0TA</strong>. Martin Mere is on Fish Lane, Burscough — about 10 miles north-east of Southport via the A570 and A59. Well signposted from the A59 between Ormskirk and Rufford. Allow 20–25 minutes from Southport.
        </p>
        <p className="text-[var(--slate)] mb-10 text-sm leading-relaxed">
          By public transport: Burscough Bridge or Burscough Junction stations (both on the Merseyrail network) are about 1.5 miles from the reserve. It&apos;s a walkable distance in good weather but there&apos;s no direct bus connection to the gate.
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
          Martin Mere is roughly equidistant between Southport and Wigan — a natural stop on a day that combines the coast with the wetlands inland. If you&apos;re based in Southport,{" "}
          <a
            href="https://www.southportguide.co.uk"
            className="font-medium text-[var(--marsh)] underline underline-offset-2 hover:text-[var(--forest)] transition-colors"
          >
            SouthportGuide covers accommodation and restaurants nearby
          </a>
          .
        </p>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--dune)]">
          <Link href="/nature/marshside-rspb" className="text-[var(--marsh)] font-medium hover:underline text-sm">Marshside RSPB Reserve →</Link>
          <Link href="/nature/ainsdale-sand-dunes" className="text-[var(--marsh)] font-medium hover:underline text-sm">Ainsdale Sand Dunes NNR →</Link>
          <Link href="/seasonal/winter-wildfowl" className="text-[var(--marsh)] font-medium hover:underline text-sm">Winter wildfowl guide →</Link>
        </div>
      </div>
    </>
  );
}
