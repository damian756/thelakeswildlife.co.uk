import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Clock, Eye, AlertTriangle } from "lucide-react";

const title = "RSPB Haweswater Reserve | Ospreys, Parking & What to See";
const description =
  "Practical guide to RSPB Haweswater in the Lake District: osprey hide, pied flycatchers, red squirrels, parking and seasonal highlights. Postcode CA10 2LX. Free entry.";
const url = "https://www.thelakeswildlife.co.uk/nature/haweswater-rspb";

const faqs = [
  {
    q: "Is RSPB Haweswater free to enter?",
    a: "Yes. Entry to the reserve is free. RSPB members park free. Non-members pay for parking at the Burnbanks car park. The osprey hide and viewpoint are free to access during open season.",
  },
  {
    q: "When is the best time to see ospreys at Haweswater?",
    a: "April to August. Birds return from West Africa in March or early April. The female is usually back on the nest by late March. June and July are peak activity at the nest. Get there before 10am for a decent spot at the hide.",
  },
  {
    q: "What else can I see at Haweswater?",
    a: "Pied flycatchers and redstarts in the oak woodland from April to August. Red squirrels near the visitor point. Woodland birds including nuthatch, treecreeper, and wood warbler. The reservoir itself holds goosander and common sandpiper in summer.",
  },
  {
    q: "How do I get to the osprey hide at Haweswater?",
    a: "Park at Burnbanks car park (CA10 2LX). Follow the signed path along the western shore of the reservoir for approximately 1 mile. The hide is clearly signed and overlooks the osprey nest on the far bank. Allow 20 to 25 minutes each way.",
  },
  {
    q: "Are dogs allowed at RSPB Haweswater?",
    a: "Dogs are permitted on leads. The valley path and lakeshore are open to dogs on a short lead. Keep dogs under close control, particularly near the hide during breeding season.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thelakeswildlife.co.uk" },
      { "@type": "ListItem", position: 2, name: "Nature", item: "https://www.thelakeswildlife.co.uk/nature" },
      { "@type": "ListItem", position: 3, name: "RSPB Haweswater", item: url },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "RSPB Haweswater Reserve",
    description: "RSPB reserve in the Lake District. Ospreys, pied flycatchers, red squirrels. The flagship Lakeland wildlife site.",
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

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function HaweswaterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-end text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=1400&q=80"
          alt="Osprey in flight over Haweswater reservoir in the Lake District"
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
            <span className="text-white/80">RSPB Haweswater</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            RSPB Reserve · Lake District · Free entry
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            RSPB Haweswater Reserve
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
            Ospreys, pied flycatchers, red squirrels. The flagship Lake District wildlife site. Get there before 10am if you want a decent spot at the osprey hide. Take binoculars.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { icon: Eye, stat: "Breeding pair", label: "Ospreys" },
              { icon: MapPin, stat: "CA10 2LX", label: "Postcode" },
              { icon: Clock, stat: "Apr–Aug", label: "Osprey season" },
              { icon: AlertTriangle, stat: "Free", label: "Entry" },
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
              { href: "#woodland-birds", label: "Woodland Birds" },
              { href: "#red-squirrels", label: "Red Squirrels" },
              { href: "#seasonal", label: "When to Go" },
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
              ["Postcode", "CA10 2LX"],
              ["Managed by", "RSPB"],
              ["Entry", "Free"],
              ["Parking", "RSPB members free. Non-members charged."],
              ["Walk to hide", "Approx. 1 mile each way from car park"],
              ["Dogs", "On leads permitted"],
              ["Best for", "Ospreys, pied flycatchers, red squirrels"],
              ["Osprey season", "April to August"],
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
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">About RSPB Haweswater</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Haweswater Reservoir sits in the Far Eastern Fells, one of the most remote corners of the Lake District. The valley was flooded in the 1930s to supply water to Manchester, submerging the village of Mardale Green in the process. The resulting reservoir is long, narrow, and surrounded by steep fells that create a distinctive enclosed landscape unlike the more open central lakes.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            The RSPB has managed wildlife at Haweswater for decades. The osprey pair here are part of the wider Cumbrian reintroduction programme that has re-established breeding ospreys across the Lake District after their absence for most of the twentieth century. The reserve also holds excellent woodland birds in the ancient oak woodlands along the shore, and red squirrels have been recorded around the visitor point.
          </p>
        </section>

        {/* Ospreys */}
        <section id="ospreys" className="mb-12 scroll-mt-20">
          <div className="rounded-2xl overflow-hidden border border-[var(--fell)]/10 md:flex mb-6">
            <div className="relative h-52 md:h-auto md:w-72 flex-none">
              <Image
                src="https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80"
                alt="Osprey carrying a fish"
                fill sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover"
              />
            </div>
            <div className="bg-[var(--fog)] p-6 flex flex-col justify-center md:flex-1">
              <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-2">April to August</p>
              <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">Ospreys</h2>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                The Haweswater osprey pair is the centrepiece of the reserve. The hide overlooks the nest platform at a respectful distance with a clear line of sight. RSPB staff and volunteers are usually on hand with a scope during peak season. Get there before 10am or you will be waiting for a place.
              </p>
            </div>
          </div>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Ospreys return from West Africa in March or early April. The male arrives first, inspects the nest, and begins courtship display flights. The female arrives within days. Egg-laying happens in April and incubation lasts approximately 37 days. Chicks hatch in late May or early June and fledge by late July or early August.
          </p>
          <p className="text-[var(--slate)] leading-relaxed mb-6">
            Watching from the hide gives a direct view of the nest. The adult birds make regular fishing flights, returning with trout held feet-first in their talons. The grip posture is distinctive: one talon in front, one behind, the fish oriented head-first to reduce drag. Even at distance, this is unmistakeable.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-semibold text-amber-800 text-sm mb-1">Get there early</p>
            <p className="text-amber-700 text-sm">The hide fills quickly on fine mornings in June and July. Before 10am gives you the best chance of a space and the most active period for fishing trips from the nest. The walk from the car park is about 20 minutes each way.</p>
          </div>
        </section>

        {/* Woodland birds */}
        <section id="woodland-birds" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">Woodland Birds</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                name: "Pied Flycatcher",
                season: "April to August",
                image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&q=80",
                desc: "One of the most sought-after summer migrants in the Lake District. Males are striking black and white. They nest in holes in old oak trees and catch insects in short aerial sallies. The nest box trail at Haweswater is one of the most reliable places to see them in the north.",
              },
              {
                name: "Redstart",
                season: "April to August",
                image: "https://images.unsplash.com/photo-1618229136403-eb6d4025a1d3?w=600&q=80",
                desc: "The male has a blue-grey back, orange-red breast, and constantly quivering rust-red tail. Arrives in April and breeds in the old oak woodland along the lakeshore. Often seen perching openly on branches near the hide path in early morning.",
              },
            ].map((bird) => (
              <div key={bird.name} className="bg-[var(--fog)] rounded-xl overflow-hidden">
                <div className="relative h-36">
                  <Image src={bird.image} alt={bird.name} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <p className="text-white font-display font-bold text-sm">{bird.name}</p>
                    <p className="text-white/70 text-xs">{bird.season}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[var(--slate)] text-sm leading-relaxed">{bird.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[var(--slate)] leading-relaxed">
            The ancient oak woodland at Haweswater is one of the finest stretches of upland oak in the Lake District. Other woodland species include wood warbler (a declining summer visitor with a distinctive shivering song), nuthatch, treecreeper, and a range of tit species. The walk to the hide passes through the best woodland section.
          </p>
        </section>

        {/* Red squirrels */}
        <section id="red-squirrels" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Red Squirrels</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Red squirrels have been recorded in the woodland around the Burnbanks visitor point. They are present but not as reliably visible as at Grizedale Forest, where feeders are maintained at the visitor centre. At Haweswater, the squirrels are genuinely wild and sightings depend on the time of day and season. Autumn and early morning give the best chances.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            If red squirrels are the primary reason for your visit, Grizedale Forest (LA22 0QJ) is a more reliable destination. If you are coming for the ospreys and woodland birds, the possibility of a red squirrel on the walk to the hide is a genuine bonus.
          </p>
        </section>

        {/* Seasonal */}
        <section id="seasonal" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">When to Go</h2>
          <div className="space-y-3">
            {[
              { period: "March to April", highlight: "Ospreys return", detail: "First birds back from West Africa. Courtship displays and nest preparation. Cold mornings but the valley is beautiful. Pied flycatchers and redstarts arrive late April." },
              { period: "May to June", highlight: "Peak breeding activity", detail: "Ospreys incubating or with small chicks. Pied flycatchers and wood warblers singing. The woodland is at its most active." },
              { period: "July to August", highlight: "Osprey chicks fledge", detail: "Young ospreys learning to fly and fish. The nest is lively with feeding activity. Late July and early August are often the best days at the hide before the family disperses." },
              { period: "September to March", highlight: "Ospreys departed", detail: "The osprey season is over. The valley is quieter but still worth visiting for the landscape. Goosander on the reservoir year-round. Red squirrels may be more visible in the bare winter woodland." },
            ].map(({ period, highlight, detail }) => (
              <div key={period} className="bg-[var(--fog)] rounded-xl p-4 flex gap-4">
                <div className="flex-none w-28">
                  <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-wider">{period}</p>
                  <p className="font-semibold text-[var(--fell)] text-sm mt-0.5">{highlight}</p>
                </div>
                <p className="text-sm text-[var(--slate)] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting there */}
        <section id="getting-there" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">Getting There</h2>
          <div className="bg-[var(--fog)] rounded-xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-[var(--copper)]" />
              <h3 className="font-semibold text-[var(--fell)]">By Car</h3>
            </div>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-3">
              Haweswater is remote. The access road runs east from Shap village (CA10 3NB) through Bampton and along the northern shore of the reservoir to Burnbanks at the western end (CA10 2LX). There is no through road. The drive from the M6 (Junction 39) takes about 20 minutes.
            </p>
            <p className="text-sm text-[var(--slate)] leading-relaxed">
              The car park at Burnbanks is the starting point for the walk to the osprey hide. RSPB members park free. Non-members pay the daily charge. The car park fills quickly on fine mornings in June and July. Arrive before 9am if coming for the ospreys in peak season.
            </p>
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
                href: "/nature/ullswater",
                name: "Ullswater",
                desc: "Red deer in Martindale, goldeneye in winter",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
              },
              {
                href: "/nature/grizedale-forest",
                name: "Grizedale Forest",
                desc: "Red squirrels, red deer, red kites",
                image: "https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=600&q=80",
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
