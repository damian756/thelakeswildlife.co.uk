import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Clock, Eye, AlertTriangle } from "lucide-react";

const title = "RSPB Haweswater: Red Squirrels, Parking and What to See";
const description =
  "Visitor guide to Wild Haweswater, the RSPB and United Utilities restoration partnership in the eastern Lake District: red squirrels, ring ouzels, pied flycatchers and parking at Mardale Head. Free entry.";
const url = "https://www.thelakeswildlife.co.uk/nature/haweswater-rspb";

const faqs = [
  {
    q: "Is RSPB Haweswater free to enter?",
    a: "Yes. Entry is free for everyone. There is no parking charge at Mardale Head, but the RSPB asks for a suggested £2 donation in the car park cairn. It takes cash only, as there is no phone signal.",
  },
  {
    q: "Where do I park at Haweswater?",
    a: "Park at Mardale Head, the main visitor car park at the southern end of the reservoir. It is open at all times, but overnight parking is not allowed. On busy days it fills up, so do not block the road. The RSPB office at Naddle Farm has no public parking except for pre-booked hides and events.",
  },
  {
    q: "What wildlife can I see at Haweswater?",
    a: "Red squirrels live in the woods all year. In spring, ring ouzels, wheatears, skylarks and meadow pipits return to the fells, and redstarts, pied flycatchers and cuckoos return to the woods of the Naddle and Swindale valleys. Mountain ringlet butterflies emerge on the remote fells in summer, and Atlantic salmon swim up Swindale Beck to spawn in winter.",
  },
  {
    q: "Are there hides or viewpoints at Haweswater?",
    a: "There are no public hides or set viewpoints. The RSPB runs a badger hide that you must book in advance. It is open from April to October. A partner-run woodland wildlife hide opens from November to June, and it is also pre-booked.",
  },
  {
    q: "Are there toilets or a cafe?",
    a: "No. There are no toilets, cafe or visitor centre. The nearest public toilets are in Shap, about ten miles away. Wild Haweswater lists places to eat within ten minutes' drive, including the Haweswater Hotel, the Mardale Inn at Bampton and Bampton Valley Stores.",
  },
  {
    q: "Are dogs allowed at RSPB Haweswater?",
    a: "Yes, on the public footpaths and bridleways. Keep dogs under close control at all times. Use a lead during the bird nesting season, near birds resting on the ground and around livestock, as cattle and ponies graze the site.",
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
    name: "RSPB Haweswater (Wild Haweswater)",
    description: "Landscape restoration partnership between the RSPB and landowner United Utilities in the eastern Lake District. Red squirrels, ring ouzels, pied flycatchers and mountain ringlet butterflies.",
    url,
    address: { "@type": "PostalAddress", addressLocality: "Mardale Head, Haweswater", addressRegion: "Cumbria", addressCountry: "GB" },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free entry to reserve", value: true },
      { "@type": "LocationFeatureSpecification", name: "Toilets", value: false },
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
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "article", images: [{ url: "/images/species/mammals/red-squirrel.jpg", alt: "Red squirrel eating a nut on a mossy tree stump" }] },
  twitter: { card: "summary_large_image", title, description },
};

export default function HaweswaterPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-end text-white overflow-hidden">
        <Image
          src="/images/species/mammals/red-squirrel.jpg"
          alt="Red squirrel eating a nut on a mossy tree stump"
          fill priority sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/30" />
        <div className="relative w-full max-w-3xl mx-auto px-4 pb-12 pt-32">
          <nav className="flex items-center gap-1.5 text-xs text-white/80 mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">RSPB Haweswater</span>
          </nav>
          <p className="text-[#F2C796] text-xs font-bold uppercase tracking-widest mb-3 [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
            RSPB and United Utilities · Eastern Lake District · Free entry
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            RSPB Haweswater Reserve
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
            Red squirrels, ring ouzels and pied flycatchers in a quiet, rugged corner of the eastern Lake District. There are no public hides, toilets or cafe, so bring a map, food and waterproofs.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { icon: MapPin, stat: "Mardale Head", label: "Parking" },
              { icon: Eye, stat: "Free", label: "Entry" },
              { icon: Clock, stat: "Open all hours", label: "Car park" },
              { icon: AlertTriangle, stat: "None", label: "Toilets" },
            ].map(({ icon: Icon, stat, label }) => (
              <div key={label} className="bg-black/40 backdrop-blur rounded-xl px-3 py-2.5 border border-white/20">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <Icon className="w-3 h-3 text-[var(--copper)]" />
                  <p className="text-white/80 text-[10px] uppercase tracking-wider">{label}</p>
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
              { href: "#badger-hide", label: "Badger Hide" },
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
              ["Parking", "Mardale Head, open at all times"],
              ["Managed by", "RSPB with landowner United Utilities"],
              ["Entry", "Free"],
              ["Car park", "No charge. Suggested £2 cash donation"],
              ["Facilities", "No toilets, cafe or visitor centre"],
              ["Hides", "Badger hide, pre-booked, April to October"],
              ["Dogs", "Close control. Leads in nesting season and near livestock"],
              ["Best for", "Red squirrels, ring ouzels, pied flycatchers"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3 border-b border-[var(--slate)]/10 pb-1.5">
                <dt className="shrink-0 text-[var(--slate)]">{k}</dt>
                <dd className="font-medium text-right text-[var(--fell)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* About */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">About RSPB Haweswater</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Haweswater sits in a quiet, less visited corner of the eastern Lake District. The Manchester Corporation flooded the valley in 1935 to make the reservoir, drowning the hamlet of Mardale with its church and the Dun Bull Inn. The resulting reservoir is long, narrow, and surrounded by steep fells that create a distinctive enclosed landscape unlike the more open central lakes. Today it supplies drinking water to 2 million people across Cumbria and the North West.
          </p>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            When golden eagles returned to nest at Haweswater in 1969, the RSPB set up round-the-clock nest guarding to protect them. For most of the next five decades this was the only place in England where golden eagles lived. They reared young in 16 years, but the last male spent his final 12 years alone and died in 2015.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            Today Wild Haweswater is a landscape restoration partnership between the RSPB and landowner United Utilities. It covers 30 square kilometres of the Mardale, Naddle and Swindale valleys, including the temperate rainforest of Naddle Forest, where red squirrels live.
          </p>
        </section>

        {/* Badger hide */}
        <section id="badger-hide" className="mb-12 scroll-mt-20">
          <div className="rounded-2xl overflow-hidden border border-[var(--fell)]/10 md:flex mb-6">
            <div className="relative h-52 md:h-auto md:w-72 flex-none">
              <Image
                src="/images/species/mammals/badger.jpg"
                alt="Badger in long grass"
                fill sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover"
              />
            </div>
            <div className="bg-[var(--fog)] p-6 flex flex-col justify-center md:flex-1">
              <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-2">April to October · Book ahead</p>
              <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">Badger Hide</h2>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                The RSPB runs a badger hide at Haweswater, with close views of badgers and good chances for photographs. It opens from April to October and you must book in advance on the RSPB website. It is the only formal viewing point on the site.
              </p>
            </div>
          </div>
          <p className="text-[var(--slate)] leading-relaxed mb-6">
            Away from the hide, Wild Haweswater has no designated viewpoints, public hides or set spots to see wildlife. The plants and animals live across a vast, mountainous landscape, so you explore the public footpaths and bridleways and see what is around.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-semibold text-amber-800 text-sm mb-1">Plan ahead</p>
            <p className="text-amber-700 text-sm">There are no toilets, cafe or visitor centre, and there is no phone signal across most of the site. The nearest public toilets are in Shap, about ten miles away, and the nearest food is in Bampton and at the Haweswater Hotel, within ten minutes&rsquo; drive. Check the forecast and bring an OS map (OL5), food, water and waterproofs.</p>
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
                image: "/images/species/birds/pied-flycatcher.jpg",
                desc: "A summer migrant. Males are striking black and white. They nest in holes in old oak trees and catch insects in short aerial sallies. At Haweswater they return to the woods of the Naddle and Swindale valleys in spring.",
              },
              {
                name: "Redstart",
                season: "April to August",
                image: "/images/species/birds/redstart.jpg",
                desc: "The male has a blue-grey back, orange-red breast, and constantly quivering rust-red tail. Wild Haweswater says redstarts return each spring to the woods of the Naddle and Swindale valleys.",
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
            Naddle Forest is one of the last fragments of temperate rainforest left in Cumbria. Cuckoos return in spring, and dippers feed in the fast-flowing streams all year.
          </p>
        </section>

        {/* Red squirrels */}
        <section id="red-squirrels" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Red Squirrels</h2>
          <p className="text-[var(--slate)] leading-relaxed">
            Red squirrels live in the woods at Haweswater all year, including the temperate rainforest of Naddle Forest. Sightings depend on the time of day and season. The landscape is mountainous and vast, so wildlife is not always easy to see.
          </p>
        </section>

        {/* Seasonal */}
        <section id="seasonal" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">When to Go</h2>
          <div className="space-y-3">
            {[
              { period: "Spring", highlight: "Migrants return", detail: "Ring ouzels, wheatears, skylarks and meadow pipits return to the fells around the reservoir. Redstarts, pied flycatchers and cuckoos come back to the woods of the Naddle and Swindale valleys. The badger hide reopens in April." },
              { period: "Summer", highlight: "Meadows in flower", detail: "Wildflowers bloom in Swindale Meadows and arctic-alpine plants flower in Mardale Mountain Meadow. Dark green fritillary, small pearl-bordered fritillary and marsh fritillary butterflies fly in Swindale Meadows. Mountain ringlets emerge on the remote fells." },
              { period: "Autumn", highlight: "Red deer rut", detail: "Red deer roar on the fells. Fungi appear in Naddle Forest, and pink-footed geese fly over on migration. The badger hide season ends in October." },
              { period: "Winter", highlight: "Salmon run", detail: "Atlantic salmon swim up Swindale Beck from the sea to spawn. Redwings and fieldfares spend the winter here, feeding on berries. Red squirrels, dippers and buzzards are around all year." },
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
              Haweswater is remote. From the M6, leave at junction 39 for Shap, take the B6261 and turn right onto the A6 through Shap, then follow signs for Haweswater. Drive slowly along the winding road beside the reservoir to Mardale Head, the main visitor car park at the southern end. There are pull-ins along the way where you can stop briefly to enjoy the view.
            </p>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-3">
              Mardale Head car park is open at all times, but overnight parking is not allowed. Use what3words weary.intrigued.published or grid reference NY 469 107. There is no charge, but the RSPB suggests a £2 cash donation in the car park cairn. On busy days the car park fills up, so do not block the road.
            </p>
            <p className="text-sm text-[var(--slate)] leading-relaxed">
              The nearest railway station is Penrith, 14 miles (22.5 km) away. Once you are here, stay on the public rights of way, close gates behind you and take care around the grazing cattle and ponies.
            </p>
          </div>
          <div className="mt-4 rounded-xl border border-[var(--fog)] p-5">
            <h3 className="font-semibold text-[var(--fell)] mb-2">Fells from Mardale Head</h3>
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-3">
              Wild Haweswater says you can climb several Wainwrights from the car park. Route guides on our sister site, Hike The Lakes:
            </p>
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 text-sm">
              {[
                { slug: "high-street", name: "High Street" },
                { slug: "kidsty-pike", name: "Kidsty Pike" },
                { slug: "harter-fell-mardale", name: "Harter Fell" },
                { slug: "mardale-ill-bell", name: "Mardale Ill Bell" },
                { slug: "branstree", name: "Branstree" },
                { slug: "selside-pike", name: "Selside Pike" },
              ].map(({ slug, name }) => (
                <li key={slug}>
                  <a href={`https://www.hikethelakes.com/fells/${slug}`} className="text-[var(--lichen)] hover:underline">
                    {name}
                  </a>
                </li>
              ))}
            </ul>
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
                <p className="mt-3 text-sm text-[var(--slate)] leading-relaxed">{a}</p>
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
                image: "/images/species/birds/goldeneye.jpg",
                imageAlt: "Goldeneye drake on water",
              },
              {
                href: "/nature/grizedale-forest",
                name: "Grizedale Forest",
                desc: "Red squirrels, red deer, red kites",
                image: "/images/species/mammals/red-deer.jpg",
                imageAlt: "Red deer stag with large antlers standing in woodland",
              },
            ].map(({ href, name, desc, image, imageAlt }) => (
              <Link key={href} href={href} className="group relative h-36 rounded-2xl overflow-hidden block">
                <Image src={image} alt={imageAlt} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
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
