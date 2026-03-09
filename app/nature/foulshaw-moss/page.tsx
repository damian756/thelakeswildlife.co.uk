import Link from "next/link";
import type { Metadata } from "next";

const title = "Foulshaw Moss | Osprey Viewing, Wildlife & Practical Guide";
const description =
  "Foulshaw Moss wildlife guide. Cumbria Wildlife Trust raised bog with osprey viewing platform, bog asphodel, sundew, and large heath butterflies. Postcode LA11 6QZ. Free entry.";
const url = "https://www.thelakeswildlife.co.uk/nature/foulshaw-moss";

const faqs = [
  {
    q: "Is Foulshaw Moss free to enter?",
    a: "Yes. Entry to the reserve is free. There is a small car park on the minor road off the A590 which is also free. Managed by Cumbria Wildlife Trust.",
  },
  {
    q: "When is the best time to see ospreys at Foulshaw Moss?",
    a: "April to August. The viewing platform overlooks the osprey nest platform. The birds return from West Africa in March or early April. June and July are peak chick-rearing time. Get there before 10am for the best activity at the nest.",
  },
  {
    q: "Is Foulshaw Moss good for butterflies?",
    a: "Yes. The Large Heath butterfly is the flagship insect species here. It flies in June and July and is restricted to raised bog habitats. Foulshaw is one of the better places in northern England to see it. The boardwalk through the bog is the right area.",
  },
  {
    q: "What plants grow at Foulshaw Moss?",
    a: "Classic raised bog flora. Sphagnum moss throughout, bog asphodel in July and August, round-leaved sundew throughout summer, cross-leaved heath and common cotton grass. Cranberry grows low in the bog.",
  },
  {
    q: "How difficult is the walking at Foulshaw Moss?",
    a: "Easy. The main route is a boardwalk across the bog and a clear path to the viewing platform. The entire circuit is around 1.5 miles on flat ground. Suitable for all abilities. Wellies recommended in wet weather.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Foulshaw Moss",
    description:
      "Cumbria Wildlife Trust raised bog reserve near Grange-over-Sands. Osprey viewing platform, Large Heath butterfly, bog plants and summer wildlife.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 54.2167, longitude: -2.9167 },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Grange-over-Sands",
      postalCode: "LA11 6QZ",
      addressCountry: "GB",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Free car park", value: true },
      { "@type": "LocationFeatureSpecification", name: "Viewing platform", value: true },
      { "@type": "LocationFeatureSpecification", name: "Boardwalk", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free entry", value: true },
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
      { "@type": "ListItem", position: 3, name: "Foulshaw Moss", item: url },
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

export default function FoulshawMossPage() {
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
            <span className="text-white/80">Foulshaw Moss</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Cumbria Wildlife Trust · Near Grange-over-Sands · Free entry
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Foulshaw Moss
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            A restored raised bog with an osprey nest you can watch from a viewing platform. Part of the Lake District osprey reintroduction. Go in summer for the ospreys, the Large Heath butterfly, and a bog landscape that looks like nowhere else in the Lakes.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "LA11 6QZ", label: "Postcode" },
            { stat: "Free", label: "Entry and parking" },
            { stat: "Apr–Aug", label: "Osprey season" },
            { stat: "Jun–Jul", label: "Large Heath" },
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
              ["Postcode", "LA11 6QZ"],
              ["Managed by", "Cumbria Wildlife Trust"],
              ["Entry", "Free"],
              ["Parking", "Free, roadside car park"],
              ["Facilities", "Viewing platform, boardwalk, information boards"],
              ["Dogs", "On leads please"],
              ["Best for", "Ospreys, Large Heath butterfly, bog plants"],
              ["Peak season", "May to August"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-[var(--slate)]/10 pb-1.5">
                <dt className="text-[var(--slate)]/60">{k}</dt>
                <dd className="font-medium text-[var(--fell)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <section className="prose prose-slate max-w-none">
          <h2>About Foulshaw Moss</h2>
          <p>
            Foulshaw Moss is a raised bog on the southern edge of the Lake District, just off the A590 near Grange-over-Sands. It is managed by Cumbria Wildlife Trust and is part of the Morecambe Bay Limestones and Wetlands project, a significant effort to restore and protect the wetland habitats of the southern Lakes fringe.
          </p>
          <p>
            Raised bogs are rare habitats. They form over thousands of years where peat accumulates above the surrounding landscape, fed entirely by rainfall. The sphagnum mosses are the key engineering species — they absorb water like a sponge and create the acidic, nutrient-poor conditions that support the specialist plant and insect communities. Foulshaw was partly damaged by drainage and peat cutting, and the restoration work since 2001 has rebuilt the bog hydrology with rewetting and drain blocking.
          </p>
          <p>
            Most visitors come for the ospreys. The nest platform at Foulshaw is part of the Cumbria Osprey Project, which has reintroduced ospreys to the Lake District and surrounding area. The birds use the nest platform reliably and raise chicks most years. The viewing platform overlooks the nest at a respectful distance with a clear line of sight.
          </p>

          <h2>Ospreys</h2>
          <p>
            Foulshaw's ospreys return from West Africa in March or early April. The male usually arrives first, then the female. Egg laying happens in April, incubation for about five weeks, and the chicks hatch in late May or early June. By August the young birds are flying and the family disperses. Migration south begins from August onwards.
          </p>
          <p>
            The viewing platform is the place to be. Binoculars help — the nest is visible to the naked eye but detail on the birds requires optics. Early morning is the most active time: the adult birds make fishing flights to the Kent estuary and return to the nest. Watch for the osprey circling high before a fishing dive, or flying low over the bog with a fish in its talons.
          </p>
          <p>
            This is part of the same reintroduction programme that includes the Bassenthwaite ospreys (webcam available through the Lake District Wildlife website) and the Haweswater pair. The success at multiple sites is a genuine conservation story. Forty years ago there were no ospreys in England. There are now several pairs breeding across the Lakes.
          </p>

          <h2>Large Heath butterfly</h2>
          <p>
            The Large Heath is one of Britain's rarest butterflies, restricted to upland and lowland raised bogs across the north and west of the country. Foulshaw is one of the better sites in the north-west. The butterfly is on the wing in June and July, flying low over the bog surface and perching on cotton grass stems. The male has a pale orange-brown forewing with one eyespot; the female has two. They can be distinguished from the commoner Small Heath by size and habitat — if you are on a raised bog in June, the larger brown butterfly is almost certainly a Large Heath.
          </p>
          <p>
            The boardwalk through the bog is the right area. Walk slowly, scan the cotton grass and sphagnum ahead of you, and look for the characteristic low, fluttery flight. Warm, overcast days in late June to mid-July are the peak flight period. In direct sun the butterflies shelter in the vegetation.
          </p>

          <h2>Plants of the bog</h2>
          <p>
            The bog flora is the framework for everything else. Sphagnum moss in multiple species forms the living carpet of the reserve — different species colonise different moisture zones, creating a mosaic of greens, reds, and browns. Common cotton grass with its white fluffy seedheads is a reliable indicator of wet bog conditions. Cross-leaved heath is the dominant heather here, preferring the wet areas where bell heather and ling would not survive.
          </p>
          <p>
            Bog asphodel flowers in July and August, turning the wet areas yellow before fading to orange-red in autumn. Round-leaved sundew catches insects in its sticky, glandular leaves — look for rosettes of reddish, round leaves on the sphagnum surface between July and September. Cranberry grows low across the bog, bearing small dark berries in autumn. These plants have all evolved specifically for the nutrient-poor, waterlogged conditions of raised bog.
          </p>

          <h2>Getting there</h2>
          <p>
            The reserve entrance and car park are on a minor road off the A590, approximately 3 miles east of Grange-over-Sands. The postcode LA11 6QZ brings you to the right area. Look for the Cumbria Wildlife Trust signs. The car park is free and holds around 15 vehicles. Do not park on the verge — the road is narrow and agricultural vehicles use it regularly.
          </p>
          <p>
            The reserve is not served by public transport. The nearest town is Grange-over-Sands, which has a train station on the Furness line. A taxi from Grange-over-Sands to the reserve is around 10 minutes.
          </p>

          <h2>What to bring</h2>
          <p>
            Wellies or waterproof footwear. The boardwalk is solid but the approaches can be wet and the bog edges are boggy in wet weather. Binoculars for the ospreys. A macro lens if you are photographing sundew or Large Heaths. The reserve has no toilets and no cafe — the nearest facilities are in Grange-over-Sands. Carry water and food if you are combining with a longer visit.
          </p>

          <h2>Seasonal highlights</h2>
          <ul>
            <li><strong>March–April:</strong> Ospreys return. First singing willow warblers in the scrub around the bog edges.</li>
            <li><strong>May–June:</strong> Osprey nest activity. Pied flycatchers and redstarts in nearby woodland. Cotton grass in flower.</li>
            <li><strong>June–July:</strong> Large Heath butterfly on the wing. Bog asphodel flowering. Peak insect diversity.</li>
            <li><strong>July–August:</strong> Young ospreys fledging. Dragonflies and damselflies active over the wet areas. Golden-ringed dragonfly on the bog edges.</li>
            <li><strong>September–October:</strong> Ospreys depart. Bog asphodel turning orange-red. Wildfowl beginning to arrive on the nearby estuary.</li>
          </ul>
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
              { href: "/nature/haweswater-rspb", name: "RSPB Haweswater", desc: "Ospreys, pied flycatchers, red squirrels" },
              { href: "/nature/leighton-moss-rspb", name: "Leighton Moss RSPB", desc: "Bittern, marsh harrier, the largest reedbed in NW England" },
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
