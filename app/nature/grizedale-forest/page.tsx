import Link from "next/link";
import type { Metadata } from "next";

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
    q: "Are red kites at Grizedale?",
    a: "Yes. Red kites were reintroduced to the area and are now regularly seen over Grizedale and the surrounding fells. They are large, fork-tailed birds with russet colouring — unmistakeable in flight. Often seen soaring over the forest edges.",
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

      <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[var(--slate)]" />

      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Grizedale Forest</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Forestry England · Between Coniston and Windermere · Free entry
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Grizedale Forest
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Red squirrels at the visitor centre feeders, red deer in the valley, red kites over the canopy. One of the best places in England to see all three in a single morning. Go early.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "LA22 0QJ", label: "Postcode" },
            { stat: "Free", label: "Entry" },
            { stat: "Paid", label: "Parking" },
            { stat: "All year", label: "Red squirrels" },
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
              ["Postcode", "LA22 0QJ"],
              ["Managed by", "Forestry England"],
              ["Entry", "Free (car park charged)"],
              ["Parking", "Pay and display at visitor centre"],
              ["Facilities", "Visitor centre, cafe, toilets, cycle hire"],
              ["Dogs", "Allowed on leads in most areas"],
              ["Best for", "Red squirrels, red deer, red kites, pied flycatchers"],
              ["Peak season", "October (deer rut), May (woodland birds)"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-[var(--slate)]/10 pb-1.5">
                <dt className="text-[var(--slate)]/60">{k}</dt>
                <dd className="font-medium text-[var(--fell)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <section className="prose prose-slate max-w-none">
          <h2>About Grizedale Forest</h2>
          <p>
            Grizedale Forest sits between Coniston Water and Windermere, occupying the Grizedale valley between the two lakes. It covers around 2,500 hectares of mixed conifer and broadleaf woodland managed by Forestry England. The name comes from the Old Norse for Valley of the Pigs, which tells you the forest has been here in some form for a long time.
          </p>
          <p>
            The forest is best known to wildlife watchers for three things: red squirrels, red deer, and red kites. Getting all three in a single morning visit is entirely realistic. The visitor centre feeders give reliable red squirrel sightings. The forest valleys hold one of the better red deer herds in the Lake District. Red kites were reintroduced to the area and now soar over the canopy in good numbers — large, russet, fork-tailed birds that are unmistakeable once you know what you are looking for.
          </p>
          <p>
            The forest also has sculpture trails — a legacy of an arts programme that has placed artworks throughout the woodland since 1977. There are around 40 permanent sculptures along the trails. Some are obvious, some you walk past without noticing. It adds an unusual dimension to a wildlife walk. The Ridding Wood Trail passes several of the better ones.
          </p>

          <h2>Red squirrels</h2>
          <p>
            The feeders at the visitor centre are the most reliable red squirrel spot in the southern Lakes. Forestry England maintains them year-round and the squirrels are habituated to people to the point where close observation is straightforward. Morning visits, particularly before 11am, give the best activity. The squirrels are most visible in autumn and winter when the deciduous trees are bare.
          </p>
          <p>
            Away from the feeders, red squirrels range widely through the forest. The Ridding Wood Trail and the Courthouse Trail both pass through red squirrel habitat. Quiet walkers who move slowly and stop often do better than those who march through. Look up as much as along — squirrels moving through the canopy are often detected by sound before sight, a rustling and occasional shower of spruce cone fragments.
          </p>
          <p>
            Grey squirrel control is ongoing here. Forestry England and the Red Squirrel Survival Trust manage the grey squirrel population across the forest. Without this work, greys would have displaced the reds long ago. The success of the red squirrel population at Grizedale is not natural — it is managed. That is worth knowing.
          </p>

          <h2>Red deer</h2>
          <p>
            Red deer are present year-round but the October rut is the reason to plan a specific visit. Stags roar from dawn, and the sound carries far through the valley. The Bogle Crag area and the Courthouse area both hold deer regularly. Arrive at first light, stay quiet, and move slowly. The rut stags are focused on females and rivals rather than humans, which makes them relatively approachable at distance.
          </p>
          <p>
            Outside the rut, red deer are most likely at dawn and dusk. They are large animals — hinds around 120kg, stags considerably more. In summer, the stags are in velvet and often seen in bachelor groups in the forest clearings. In winter, herds of hinds and last year's calves move through the valleys. Patient walking on the Courthouse Trail in November or December regularly produces deer sightings.
          </p>

          <h2>Red kites</h2>
          <p>
            Red kites were reintroduced to the Lake District in 2010. The population has established successfully and birds now breed in and around Grizedale. They are large raptors — wingspan around 175cm — with a distinctive russet body, pale grey head, and deeply forked tail. Soaring over forest edges in thermals, usually late morning when the air warms up.
          </p>
          <p>
            The easiest way to see them is to scan the sky from any high point on the forest trails, particularly above the main valley. If you see a large bird of prey circling with a forked tail, it is a red kite. They are not shy and will come low when investigating food sources. Buzzards are superficially similar but lack the forked tail and are browner overall.
          </p>

          <h2>Woodland birds</h2>
          <p>
            May and June are the peak months for woodland birds. Grizedale holds breeding pied flycatchers, redstarts, wood warblers, and tree pipits — all summer migrants that arrive in April and leave by August. Resident year-round species include treecreepers, nuthatches, siskins, redpolls, and crossbills in the conifer sections. Listen for the liquid song of the wood warbler in the mature oak woodland — a sustained descending trill, one of the most distinctive birdsong in the Lakes.
          </p>

          <h2>Getting there and parking</h2>
          <p>
            The visitor centre (LA22 0QJ) is signposted from Hawkshead village to the north and from the B5285 Coniston to Ambleside road. Parking charges apply at the visitor centre car park — check current rates on the Forestry England website. There are additional smaller car parks at the forest edges (Bogle Crag, Force Mills) for those who want to avoid the main visitor centre area.
          </p>

          <h2>What to bring</h2>
          <p>
            Binoculars. The red squirrel feeders are close enough for naked-eye observation, but red kites at height and deer at distance both benefit from optics. Waterproof footwear is essential in autumn and winter — the forest trails are muddy after rain and the side paths away from the main routes can be genuinely wet. Layers throughout the year: the valley can be sheltered but the high points on the Courthouse Trail catch wind.
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
              { href: "/nature/haweswater-rspb", name: "RSPB Haweswater", desc: "Ospreys and pied flycatchers" },
              { href: "/nature/ullswater", name: "Ullswater", desc: "Red deer in Martindale, goldeneye in winter" },
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
