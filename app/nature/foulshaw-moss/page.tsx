import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Clock, Eye, Leaf } from "lucide-react";

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

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-end text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1504198266287-1659872e6590?w=1400&q=80"
          alt="Foulshaw Moss raised bog reserve near Grange-over-Sands"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="relative w-full max-w-3xl mx-auto px-4 pb-12 pt-32">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Foulshaw Moss</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Cumbria Wildlife Trust · Near Grange-over-Sands · Free entry
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Foulshaw Moss
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
            A restored raised bog with an osprey nest you can watch from a viewing platform. Part of the Lake District osprey reintroduction. Go in summer for the ospreys, the Large Heath butterfly, and a bog landscape that looks like nowhere else in the Lakes.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { icon: MapPin, stat: "LA11 6QZ", label: "Postcode" },
              { icon: Clock, stat: "Free", label: "Entry and parking" },
              { icon: Eye, stat: "Apr–Aug", label: "Osprey season" },
              { icon: Leaf, stat: "Jun–Jul", label: "Large Heath" },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="bg-black/40 backdrop-blur rounded-xl px-3 py-2.5 border border-white/20">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Icon className="w-3 h-3 text-[var(--copper)]" />
                  <p className="text-white/50 text-[10px] uppercase tracking-wider">{label}</p>
                </div>
                <p className="font-display text-sm font-bold text-white">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky nav */}
      <nav className="bg-[var(--fell)] border-b border-white/10 sticky top-16 z-40">
        <div className="mx-auto max-w-3xl px-4 py-3">
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[
              { href: "#ospreys", label: "Ospreys" },
              { href: "#large-heath", label: "Large Heath" },
              { href: "#bog-plants", label: "Bog Plants" },
              { href: "#seasonal", label: "Seasonal Highlights" },
              { href: "#getting-there", label: "Getting There" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="text-white/60 hover:text-[var(--copper)] transition-colors font-medium">{label}</a>
            ))}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-4 py-10">

        {/* Practical info */}
        <div className="bg-[var(--fog)] rounded-xl p-5 mb-10">
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

        {/* About */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">About Foulshaw Moss</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Foulshaw Moss is a raised bog on the southern edge of the Lake District, just off the A590 near Grange-over-Sands. Managed by Cumbria Wildlife Trust and part of the Morecambe Bay Limestones and Wetlands project, it is one of the most productive wildlife habitats in the southern Lakes fringe.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            Raised bogs are rare habitats. They form over thousands of years where peat accumulates above the surrounding landscape, fed entirely by rainfall. The sphagnum mosses absorb water like a sponge and create the acidic, nutrient-poor conditions that support the specialist plant and insect communities found here. Foulshaw was partly damaged by drainage and peat cutting. Restoration work since 2001 has rebuilt the bog hydrology with rewetting and drain blocking.
          </p>
        </section>

        {/* Ospreys */}
        <section id="ospreys" className="mb-12 scroll-mt-20">
          <div className="rounded-2xl overflow-hidden border border-[var(--fell)]/10 md:flex mb-6">
            <div className="relative h-52 md:h-auto md:w-72 flex-none">
              <Image
                src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80"
                alt="Osprey returning to nest at Foulshaw Moss"
                fill sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover"
              />
            </div>
            <div className="bg-[var(--fog)] p-6 flex flex-col justify-center md:flex-1">
              <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-2">April to August</p>
              <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">Ospreys</h2>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                The nest platform at Foulshaw is part of the Cumbria Osprey Project. The birds use the nest platform reliably and raise chicks most years. The viewing platform overlooks the nest at a respectful distance with a clear line of sight. This is part of the same reintroduction programme that includes the Haweswater pair.
              </p>
            </div>
          </div>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Foulshaw ospreys return from West Africa in March or early April. The male usually arrives first. Egg laying happens in April, incubation for about five weeks, and the chicks hatch in late May or early June. By August the young birds are flying and the family disperses. Migration south begins from August onwards.
          </p>
          <p className="text-[var(--slate)] leading-relaxed mb-6">
            Early morning is the most active time: the adult birds make fishing flights to the Kent estuary and return to the nest. Watch for the osprey circling high before a fishing dive, or flying low over the bog with a fish in its talons. Binoculars help. The nest is visible to the naked eye but detail on the birds requires optics.
          </p>
          <div className="bg-[var(--fog)] rounded-xl p-4">
            <p className="font-semibold text-[var(--fell)] text-sm mb-1">Why this matters</p>
            <p className="text-sm text-[var(--slate)] leading-relaxed">Forty years ago there were no ospreys in England. There are now several pairs breeding across the Lakes. The success at Foulshaw, Haweswater, and multiple other sites is a genuine conservation story.</p>
          </div>
        </section>

        {/* Large Heath */}
        <section id="large-heath" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Large Heath Butterfly</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            The Large Heath is one of Britain's rarest butterflies, restricted to upland and lowland raised bogs across the north and west of the country. Foulshaw is one of the better sites in the north-west. The butterfly is on the wing in June and July, flying low over the bog surface and perching on cotton grass stems.
          </p>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            The male has a pale orange-brown forewing with one eyespot; the female has two. They can be distinguished from the commoner Small Heath by size and habitat. If you are on a raised bog in June, the larger brown butterfly is almost certainly a Large Heath.
          </p>
          <div className="bg-[var(--fog)] rounded-xl p-4">
            <p className="font-semibold text-[var(--fell)] text-sm mb-2">How to find them</p>
            <ul className="space-y-1.5 text-sm text-[var(--slate)]">
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Walk the boardwalk through the bog slowly, scanning the cotton grass ahead of you.</li>
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Look for the characteristic low, fluttery flight just above the vegetation.</li>
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Warm, overcast days in late June to mid-July are peak flight period.</li>
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> In direct sun the butterflies shelter in the vegetation and are harder to find.</li>
            </ul>
          </div>
        </section>

        {/* Bog plants */}
        <section id="bog-plants" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Plants of the Bog</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            The bog flora is the framework for everything else. Sphagnum moss in multiple species forms the living carpet of the reserve, creating a mosaic of greens, reds, and browns. Common cotton grass with its white fluffy seedheads is a reliable indicator of wet bog conditions. Cross-leaved heath is the dominant heather here, preferring the wet areas where bell heather and ling would not survive.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Bog Asphodel", timing: "July to August", desc: "Turns the wet areas yellow before fading to orange-red in autumn. One of the most striking bog plants when in flower." },
              { name: "Round-leaved Sundew", timing: "July to September", desc: "Catches insects in sticky, glandular leaves. Look for rosettes of reddish round leaves on the sphagnum surface. A genuine carnivorous plant." },
              { name: "Common Cotton Grass", timing: "April to June (flowers)", desc: "White fluffy seedheads visible from a distance. A reliable indicator of wet bog conditions throughout the reserve." },
              { name: "Cranberry", timing: "Berries in autumn", desc: "Grows low across the bog surface. Small, dark berries in autumn. Easy to miss if you are not looking for it." },
            ].map(({ name, timing, desc }) => (
              <div key={name} className="bg-[var(--fog)] rounded-xl p-4">
                <p className="font-semibold text-[var(--fell)] text-sm">{name}</p>
                <p className="text-[var(--copper)] text-xs mb-1.5">{timing}</p>
                <p className="text-sm text-[var(--slate)] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Seasonal */}
        <section id="seasonal" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">Seasonal Highlights</h2>
          <div className="space-y-3">
            {[
              { period: "March to April", detail: "Ospreys return. First singing willow warblers in the scrub around the bog edges." },
              { period: "May to June", detail: "Osprey nest activity. Pied flycatchers and redstarts in nearby woodland. Cotton grass in flower." },
              { period: "June to July", detail: "Large Heath butterfly on the wing. Bog asphodel flowering. Peak insect diversity on the reserve." },
              { period: "July to August", detail: "Young ospreys fledging. Dragonflies and damselflies active over the wet areas. Golden-ringed dragonfly on the bog edges." },
              { period: "September to October", detail: "Ospreys depart. Bog asphodel turning orange-red. Wildfowl beginning to arrive on the nearby estuary." },
            ].map(({ period, detail }) => (
              <div key={period} className="bg-[var(--fog)] rounded-xl p-4 flex gap-4">
                <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-wider flex-none w-28 pt-0.5">{period}</p>
                <p className="text-sm text-[var(--slate)] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting there */}
        <section id="getting-there" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Getting There</h2>
          <div className="bg-[var(--fog)] rounded-xl p-5">
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-3">
              The reserve entrance and car park are on a minor road off the A590, approximately 3 miles east of Grange-over-Sands. The postcode LA11 6QZ brings you to the right area. Look for the Cumbria Wildlife Trust signs. The car park is free and holds around 15 vehicles.
            </p>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-3">
              The reserve is not served by public transport. The nearest town is Grange-over-Sands, which has a train station on the Furness line. A taxi from Grange-over-Sands to the reserve is around 10 minutes.
            </p>
            <p className="text-sm text-[var(--slate)] font-medium">What to bring: wellies or waterproof footwear, binoculars, water and food (no cafe on site). The nearest facilities are in Grange-over-Sands.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group bg-[var(--fog)] rounded-xl p-4">
                <summary className="font-medium text-[var(--fell)] cursor-pointer list-none flex justify-between items-center">
                  {q}
                  <span className="text-[var(--copper)] text-lg group-open:rotate-45 transition-transform flex-shrink-0 ml-4">+</span>
                </summary>
                <p className="mt-3 text-sm text-[var(--slate)]/80 leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Nearby nature sites */}
        <section className="border-t border-[var(--slate)]/10 pt-10">
          <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-5">Nearby Nature Sites</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/nature/haweswater-rspb",
                name: "RSPB Haweswater",
                desc: "Ospreys, pied flycatchers, red squirrels",
                image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80",
              },
              {
                href: "/nature/leighton-moss-rspb",
                name: "Leighton Moss RSPB",
                desc: "Bittern, marsh harrier, the largest reedbed in NW England",
                image: "https://images.unsplash.com/photo-1484627147104-f5197bcd6651?w=600&q=80",
              },
            ].map(({ href, name, desc, image }) => (
              <Link key={href} href={href} className="group relative h-36 rounded-2xl overflow-hidden block">
                <Image src={image} alt={name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-display font-bold text-sm">{name}</p>
                  <p className="text-white/65 text-xs">{desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
}
