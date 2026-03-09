import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Clock, Eye, TreePine } from "lucide-react";

const title = "Grizedale Forest | Red Squirrels, Red Deer & Wildlife Guide";
const description =
  "Grizedale Forest wildlife guide. Red squirrels at the visitor centre feeders, red deer in the forest, red kites overhead. Postcode LA22 0QJ, parking, best trails and what to bring.";
const url = "https://www.thelakeswildlife.co.uk/nature/grizedale-forest";

const faqs = [
  {
    q: "Is Grizedale Forest free to enter?",
    a: "Entry to the forest itself is free. Forestry England charges for car parking at the main visitor centre (LA22 0QJ). Day rates apply. The red squirrel feeders at the visitor centre are free to watch.",
  },
  {
    q: "When is the best time to see red squirrels at Grizedale?",
    a: "Year-round, but the feeders at the visitor centre are most active in the morning, particularly between 8am and 11am. Autumn and winter are good when the canopy is bare and squirrels are more visible. Go early to avoid the family crowd at the feeders.",
  },
  {
    q: "When is the red deer rut at Grizedale?",
    a: "October is peak rut. Dawn and dusk. The stags roar and chase, and the noise carries a long distance in the forest. The Bogle Crag and Courthouse areas are good for deer. Go very early and stay quiet.",
  },
  {
    q: "Are there red kites at Grizedale?",
    a: "Yes. Red kites were reintroduced to the area and are now regularly seen over Grizedale and the surrounding fells. They are large, fork-tailed birds with russet colouring. Often seen soaring over the forest edges in thermals late morning.",
  },
  {
    q: "What walking routes are at Grizedale?",
    a: "Forestry England maintains a network of marked trails from the visitor centre, ranging from 1.5 miles to 10 miles. The Ridding Wood Trail (2.5 miles) is excellent for wildlife. The Courthouse Trail (5 miles) gives the best combination of red deer habitat and forest views. Trail maps are available at the visitor centre.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Grizedale Forest",
    description:
      "Forestry England forest between Coniston Water and Windermere. Red squirrels, red deer, red kites. Visitor centre with feeders. One of England's best sites for seeing red squirrels.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 54.3333, longitude: -3.0333 },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hawkshead",
      postalCode: "LA22 0QJ",
      addressCountry: "GB",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
      { "@type": "LocationFeatureSpecification", name: "Visitor centre", value: true },
      { "@type": "LocationFeatureSpecification", name: "Walking trails", value: true },
      { "@type": "LocationFeatureSpecification", name: "Red squirrel feeders", value: true },
      { "@type": "LocationFeatureSpecification", name: "Cafe", value: true },
      { "@type": "LocationFeatureSpecification", name: "Toilets", value: true },
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
      { "@type": "ListItem", position: 3, name: "Grizedale Forest", item: url },
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

export default function GrizedalePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-end text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1476231682828-37e571bc172f?w=1400&q=80"
          alt="Grizedale Forest in the Lake District — ancient woodland and conifer plantation"
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
            <span className="text-white/80">Grizedale Forest</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Forestry England · Between Coniston and Windermere · Free entry
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Grizedale Forest
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
            Red squirrels at the visitor centre feeders, red deer in the valley, red kites over the canopy. One of the best places in England to see all three in a single morning. Go early.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { icon: MapPin, stat: "LA22 0QJ", label: "Postcode" },
              { icon: Clock, stat: "Free", label: "Entry" },
              { icon: TreePine, stat: "All year", label: "Red squirrels" },
              { icon: Clock, stat: "October", label: "Red deer rut" },
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
              { href: "#red-squirrels", label: "Red Squirrels" },
              { href: "#red-deer", label: "Red Deer" },
              { href: "#red-kites", label: "Red Kites" },
              { href: "#woodland-birds", label: "Woodland Birds" },
              { href: "#trails", label: "Trails" },
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
              ["Postcode", "LA22 0QJ"],
              ["Managed by", "Forestry England"],
              ["Entry", "Free (car park charged)"],
              ["Parking", "Pay and display at visitor centre"],
              ["Facilities", "Visitor centre, cafe, toilets, cycle hire"],
              ["Dogs", "Allowed on leads in most areas"],
              ["Best for", "Red squirrels, red deer, red kites"],
              ["Peak season", "October (deer rut), May (woodland birds)"],
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
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">About Grizedale Forest</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Grizedale Forest sits between Coniston Water and Windermere, occupying the Grizedale valley between the two lakes. It covers around 2,500 hectares of mixed conifer and broadleaf woodland managed by Forestry England. The forest is best known to wildlife watchers for three things: red squirrels, red deer, and red kites. Getting all three in a single morning visit is entirely realistic.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            The forest also has a sculpture trail running through the woodland since 1977, with around 40 permanent artworks placed along the trails. Some are obvious, some you walk past without noticing. It adds an unusual dimension to a wildlife walk.
          </p>
        </section>

        {/* Red squirrels */}
        <section id="red-squirrels" className="mb-12 scroll-mt-20">
          <div className="rounded-2xl overflow-hidden border border-[var(--fell)]/10 md:flex mb-6">
            <div className="relative h-52 md:h-auto md:w-72 flex-none">
              <Image
                src="https://images.unsplash.com/photo-1508283710081-1e54cbfa8b78?w=600&q=80"
                alt="Red squirrel at Grizedale Forest feeders"
                fill sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover"
              />
            </div>
            <div className="bg-[var(--fog)] p-6 flex flex-col justify-center md:flex-1">
              <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-2">Year-round, best in morning</p>
              <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">Red Squirrels</h2>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                The feeders at the visitor centre are the most reliable red squirrel spot in the southern Lakes. Forestry England maintains them year-round and the squirrels are habituated to people to the point where close observation is straightforward. Go before 11am for the best activity.
              </p>
            </div>
          </div>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Away from the feeders, red squirrels range widely through the forest. The Ridding Wood Trail and the Courthouse Trail both pass through good habitat. Quiet walkers who move slowly and stop often do better than those who march through. Look up as much as along — squirrels moving through the canopy are often detected by sound before sight, a rustling and occasional shower of spruce cone fragments.
          </p>
          <div className="bg-[var(--fog)] rounded-xl p-4">
            <p className="font-semibold text-[var(--fell)] text-sm mb-2">Why Grizedale still has red squirrels</p>
            <p className="text-sm text-[var(--slate)] leading-relaxed">Grey squirrel control is ongoing. Forestry England and the Red Squirrel Survival Trust manage the grey squirrel population across the forest. Without this work, greys would have displaced the reds long ago. The success here is managed, not natural. Worth knowing.</p>
          </div>
        </section>

        {/* Red deer */}
        <section id="red-deer" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Red Deer</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Red deer are present year-round but the October rut is the reason to plan a specific visit. Stags roar from dawn, and the sound carries far through the valley. The Bogle Crag area and the Courthouse area both hold deer regularly. Arrive at first light, stay quiet, and move slowly.
          </p>
          <p className="text-[var(--slate)] leading-relaxed mb-6">
            Outside the rut, red deer are most likely at dawn and dusk. Hinds are around 120kg, stags considerably more. In summer, stags in velvet are often seen in bachelor groups in forest clearings. In winter, herds of hinds and last year's calves move through the valleys. Patient walking on the Courthouse Trail in November or December regularly produces deer sightings.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-semibold text-amber-800 text-sm mb-1">Rut timing</p>
            <p className="text-amber-700 text-sm">October is peak rut. Dawn and dusk are most active. The Bogle Crag area and Courthouse Trail are the best locations. Arrive at first light. Keep quiet and at distance from rut stags.</p>
          </div>
        </section>

        {/* Red kites */}
        <section id="red-kites" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Red Kites</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Red kites were reintroduced to the Lake District in 2010. The population has established successfully and birds now breed in and around Grizedale. They are large raptors, wingspan around 175cm, with a distinctive russet body, pale grey head, and deeply forked tail. Soaring over forest edges in thermals, usually late morning when the air warms up.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            Scan the sky from any high point on the forest trails, particularly above the main valley. If you see a large bird of prey circling with a forked tail, it is a red kite. Buzzards are superficially similar but lack the forked tail and are browner overall. Red kites are not shy and will come low when investigating food sources.
          </p>
        </section>

        {/* Woodland birds */}
        <section id="woodland-birds" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Woodland Birds</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            May and June are the peak months for woodland birds. Grizedale holds breeding pied flycatchers, redstarts, wood warblers, and tree pipits, all summer migrants that arrive in April and leave by August. Resident year-round species include treecreepers, nuthatches, siskins, redpolls, and crossbills in the conifer sections.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            Listen for the liquid song of the wood warbler in the mature oak woodland, a sustained descending trill, one of the most distinctive bird sounds in the Lakes. It is a declining species across the UK and Grizedale is one of the better remaining strongholds in the north of England.
          </p>
        </section>

        {/* Trails */}
        <section id="trails" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">Walking Trails</h2>
          <div className="space-y-3">
            {[
              { name: "Ridding Wood Trail", distance: "2.5 miles", time: "1.5 hrs", detail: "Excellent for wildlife. Passes through red squirrel habitat and the sculpture trail. Starts and ends at the visitor centre. A good combination of forest and open fell edge." },
              { name: "Courthouse Trail", distance: "5 miles", time: "2.5 hrs", detail: "Best combination of red deer habitat and forest views. Passes through the Bogle Crag and Courthouse areas. Good for red deer year-round, especially November to February." },
              { name: "Grizedale Tarn Trail", distance: "4 miles", time: "2 hrs", detail: "Reaches the forest tarn above the main valley. Good views of the surrounding fells and the two lakes. The high point gives the best scanning for red kites in thermal conditions." },
            ].map((trail) => (
              <div key={trail.name} className="bg-[var(--fog)] rounded-xl p-4 flex gap-4">
                <div className="flex-none">
                  <p className="font-semibold text-[var(--fell)] text-sm">{trail.name}</p>
                  <div className="flex gap-2 mt-1">
                    <span className="text-xs text-[var(--slate)]/60 bg-white rounded-full px-2 py-0.5">{trail.distance}</span>
                    <span className="text-xs text-[var(--slate)]/60 bg-white rounded-full px-2 py-0.5">{trail.time}</span>
                  </div>
                </div>
                <p className="text-sm text-[var(--slate)] leading-relaxed">{trail.detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting there */}
        <section id="getting-there" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Getting There and Parking</h2>
          <div className="bg-[var(--fog)] rounded-xl p-5">
            <p className="text-sm text-[var(--slate)] leading-relaxed mb-3">
              The visitor centre (LA22 0QJ) is signposted from Hawkshead village to the north and from the B5285 Coniston to Ambleside road. Parking charges apply at the visitor centre car park. Check current rates on the Forestry England website.
            </p>
            <p className="text-sm text-[var(--slate)] leading-relaxed">
              Additional smaller car parks are at the forest edges (Bogle Crag, Force Mills) for those who want to avoid the visitor centre. The visitor centre has a cafe, toilets, and cycle hire.
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
                href: "/nature/haweswater-rspb",
                name: "RSPB Haweswater",
                desc: "Ospreys and fell woodland birds",
                image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80",
              },
              {
                href: "/nature/ullswater",
                name: "Ullswater",
                desc: "Red deer in Martindale, goldeneye in winter",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
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
