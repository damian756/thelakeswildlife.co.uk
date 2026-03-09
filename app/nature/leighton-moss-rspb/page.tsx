import Link from "next/link";
import type { Metadata } from "next";

const title = "Leighton Moss RSPB | Bittern, Marsh Harrier & Reedbed Wildlife Guide";
const description =
  "Leighton Moss RSPB wildlife guide. The largest reedbed in north-west England. Bittern, marsh harrier, bearded tit, otter. Postcode LA5 0SW. Practical visit information, what to see and when.";
const url = "https://www.thelakeswildlife.co.uk/nature/leighton-moss-rspb";

const faqs = [
  {
    q: "Is Leighton Moss RSPB free to enter?",
    a: "No. There is an entry charge for non-RSPB members. RSPB members enter free on production of membership card. The entry charge includes access to all hides and the reedbed trail. Check rspb.org.uk for current prices.",
  },
  {
    q: "What is the best time of year to visit Leighton Moss?",
    a: "Year-round. Winter is excellent for wildfowl, bittern booming in spring, bearded tits and marsh harriers breeding in summer, and wader passage in autumn. No bad time. October and November can be quieter for visitors but good for wildfowl arrival.",
  },
  {
    q: "Can you hear bittern booming at Leighton Moss?",
    a: "Yes. Bitterns boom at Leighton Moss from February to June. The booming sound is extraordinary — a deep resonating call that carries across the reedbed. Dawn is the most reliable time. February and March are peak booming season.",
  },
  {
    q: "Are there otters at Leighton Moss?",
    a: "Yes. Otters are resident and regularly seen. Dawn and dusk are the best times. The Alan Turing hide overlooking the open water gives the best chance. Otters are more visible in winter when the water levels change and fish are more concentrated.",
  },
  {
    q: "Where is Leighton Moss in relation to the Lake District?",
    a: "Leighton Moss is near Silverdale, Lancashire, on the southern edge of the Lake District national park. About 45 minutes from Windermere, 20 minutes from Arnside. The site has a train station (Silverdale station) directly adjacent.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Leighton Moss RSPB",
    description:
      "RSPB reserve near Silverdale. The largest reedbed in north-west England. Bittern, marsh harrier, bearded tit, otter, water rail.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 54.1667, longitude: -2.8333 },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Silverdale",
      postalCode: "LA5 0SW",
      addressCountry: "GB",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
      { "@type": "LocationFeatureSpecification", name: "Visitor centre", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hides", value: true },
      { "@type": "LocationFeatureSpecification", name: "Cafe", value: true },
      { "@type": "LocationFeatureSpecification", name: "Toilets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Shop", value: true },
    ],
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
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thelakeswildlife.co.uk" },
      { "@type": "ListItem", position: 2, name: "Nature", item: "https://www.thelakeswildlife.co.uk/nature" },
      { "@type": "ListItem", position: 3, name: "Leighton Moss RSPB", item: url },
    ],
  },
];

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function LeightonMossPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[var(--slate)]" />

      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Leighton Moss RSPB</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            RSPB Reserve · Silverdale · Entry charge (RSPB members free)
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Leighton Moss RSPB
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            The largest reedbed in north-west England. Bittern, marsh harrier, bearded tit, otter. Worth it. RSPB members get in free. Non-members pay an entry charge that is justified.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "LA5 0SW", label: "Postcode" },
            { stat: "Charged", label: "Entry (RSPB free)" },
            { stat: "All year", label: "Open" },
            { stat: "Feb–Jun", label: "Bittern booming" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--fog)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--fell)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--fog)] rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-[var(--fell)] mb-3 text-sm uppercase tracking-wider">Practical information</h2>
          <dl className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
            {[
              ["Postcode", "LA5 0SW"],
              ["Managed by", "RSPB"],
              ["Entry", "Charged (RSPB members free)"],
              ["Parking", "Pay and display at visitor centre"],
              ["Facilities", "Visitor centre, cafe, shop, toilets, 6 hides"],
              ["Transport", "Silverdale train station adjacent"],
              ["Best for", "Bittern, marsh harrier, bearded tit, otter"],
              ["Dogs", "On leads in car park only"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-[var(--slate)]/10 pb-1.5">
                <dt className="text-[var(--slate)]/60">{k}</dt>
                <dd className="font-medium text-[var(--fell)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <section className="prose prose-slate max-w-none">
          <h2>About Leighton Moss</h2>
          <p>
            Leighton Moss sits in a low-lying valley between the limestone hills of Silverdale and the Kent estuary. The RSPB has managed the reserve since 1964 and has expanded it significantly over the decades. The reedbed — around 100 hectares of Phragmites reed — is the largest in north-west England and is surrounded by willow scrub, wet grassland, and open water pools that together create one of the most productive wildlife habitats in the country.
          </p>
          <p>
            The site is reached directly from the A6 via Yealand Redmayne, or by train to Silverdale station, which is immediately adjacent to the reserve. The visitor centre is well-equipped with a cafe, shop, and interpretation displays. Six hides overlook different parts of the reserve, from the main reedbed to the open lagoons and the coastal salt marsh.
          </p>
          <p>
            The entry charge is worth it. The RSPB's management of the water levels, reedbed cutting, and grazing regime is what makes this place work for the wildlife it holds. RSPB membership is worth considering if you visit regularly — the site and the other RSPB reserves in the region justify the cost easily.
          </p>

          <h2>Bittern</h2>
          <p>
            Bitterns are the flagship species at Leighton Moss and the main reason many people make the journey. The bittern is a large, brown, streaky heron — cryptically camouflaged to blend with the reedbed where it spends most of its time. The booming call is extraordinary: a deep, resonating foghorn sound that carries across the reserve and beyond. Males boom from February to June to attract females and advertise territory.
          </p>
          <p>
            Seeing a bittern in flight is easier than seeing one standing in the reeds. The birds fly low over the reed tops at dawn and dusk, typically moving between feeding areas. From the main hides, this flight is the most reliable sighting. The Grisedale hide and the Lower Hide both overlook reedbed edges where bitterns hunt.
          </p>
          <p>
            Britain's bittern population was down to a handful of males in the 1990s before intensive conservation work reversed the decline. Leighton Moss is one of the sites that supported breeding bitterns through that period and still does. The current UK population is around 200 booming males.
          </p>

          <h2>Marsh harrier</h2>
          <p>
            Marsh harriers breed at Leighton Moss and are visible from April to September. The male is unmistakeable in breeding season: grey and brown with pale grey wingtips, quartering low over the reedbed with wings held in a shallow V. The female is larger and darker, with a cream crown. Watch from any of the main hides for harriers hunting or carrying prey to the nest.
          </p>
          <p>
            The food pass is worth waiting for. The male brings prey to the female and performs a spectacular aerial display, tossing the food for the female to catch in a stoop. This happens unpredictably but is one of the great raptor sightings in northern England when you do see it.
          </p>

          <h2>Bearded tit</h2>
          <p>
            Bearded tits are resident year-round and are one of the most satisfying birds to find at Leighton Moss. They spend most of their time deep in the reed stems, feeding on seeds in winter and invertebrates in summer. In late autumn they show well in the tops of the reeds, particularly when a light wind moves the reed heads. The males are orange-brown with a blue-grey head and dramatic black moustache markings. Listen for a distinctive metallic 'ping' call.
          </p>

          <h2>Otter</h2>
          <p>
            Otters are resident at Leighton Moss. Dawn and dusk are the reliable times. The Alan Turing hide on the open water lagoon is the best spot. Winter is often better than summer as lower water levels concentrate fish and make otter activity more visible. The otter is a good indicator of reserve health — it eats large quantities of fish and requires clean, productive water to support a population.
          </p>
          <p>
            A hunting otter in open water is one of the most compelling things to watch in British wildlife. They move fast, dive cleanly, and resurface unpredictably. The wait can be long. Bring patience and binoculars, and scan the surface regularly from the hide.
          </p>

          <h2>Seasonal calendar</h2>
          <ul>
            <li><strong>January–February:</strong> Large numbers of teal and other wildfowl. Bitterns sometimes visible at reedbed edges. Whooper swans possible.</li>
            <li><strong>March–April:</strong> Bittern booming. Marsh harriers arrive. Garganey possible on passage. Spring wader movement on the lagoons.</li>
            <li><strong>May–June:</strong> Peak breeding activity. Marsh harrier food passes. Reed and sedge warblers singing. Bearded tit chicks in the reeds.</li>
            <li><strong>July–August:</strong> Young marsh harriers learning to hunt. Wader passage begins. Hobby possible over the reedbed.</li>
            <li><strong>September–October:</strong> Autumn wader passage. Wildfowl numbers building. Water rail calling from reed edges.</li>
            <li><strong>November–December:</strong> Peak wildfowl. Bitterns more visible as vegetation dies back. Hen harrier possible on the estuary edge.</li>
          </ul>

          <h2>Getting there</h2>
          <p>
            Silverdale station is directly adjacent to the reserve — trains on the Furness Line stop here. The station is unstaffed and small but functional. By car, take the A6 north from Carnforth, turn west at Yealand Redmayne and follow signs to Silverdale. The postcode is LA5 0SW. Parking charges apply at the visitor centre.
          </p>

          <h2>What to bring</h2>
          <p>
            Binoculars are essential. A telescope is worth it if you have one — the open water lagoons are wide and distant targets benefit from more magnification. The hides can be cold in winter, particularly the Lower Hide which faces north. Carry a warm layer regardless of the season. Waterproof footwear for the reedbed paths. The cafe serves decent coffee and hot food throughout the day.
          </p>
        </section>

        <div className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-bold text-[var(--fell)]">Frequently asked questions</h2>
          {faqs.map(({ q, a }) => (
            <details key={q} className="group bg-[var(--fog)] rounded-xl p-4">
              <summary className="font-medium text-[var(--fell)] cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[var(--copper)] text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-[var(--slate)]/80 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--slate)]/10 pt-8">
          <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-4">Nearby nature sites</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/nature/foulshaw-moss", name: "Foulshaw Moss", desc: "Osprey nest, Large Heath butterfly, raised bog" },
              { href: "/nature/haweswater-rspb", name: "RSPB Haweswater", desc: "Ospreys and fell woodland birds" },
            ].map(({ href, name, desc }) => (
              <Link key={href} href={href} className="block p-4 bg-[var(--fog)] rounded-xl hover:bg-[var(--lichen)]/20 transition">
                <p className="font-semibold text-[var(--fell)]">{name}</p>
                <p className="text-sm text-[var(--slate)]/70 mt-0.5">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
