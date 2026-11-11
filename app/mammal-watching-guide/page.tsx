import Link from "next/link";
import type { Metadata } from "next";

const title = "Mammal Watching in the Lake District | Red Deer, Otter, Pine Marten";
const description =
  "Mammal watching guide for the Lake District. Red deer rut in Martindale, otters on the rivers, red squirrels in Grizedale, pine marten sightings. Where to go, when, and what to look for.";
const url = "https://www.thelakeswildlife.co.uk/mammal-watching-guide";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "article", images: [{ url: "/images/species/mammals/otter.jpg", alt: "Otter resting on a mossy rock" }] },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Where is the best place to see otters in the Lake District?",
    a: "Leighton Moss RSPB (LA5 0SW) has resident otters, and the RSPB reports sightings most days from the Causeway, Lower and Lilian's hides. Rivers flowing into the larger lakes, such as the Rothay at Rydal and the Brathay near Ambleside, also hold otters. Dawn is the most reliable time year-round.",
  },
  {
    q: "Are there pine martens in the Lake District?",
    a: "Pine martens are spreading from southern Scotland and naturally recolonising parts of Cumbria, the Vincent Wildlife Trust says, but they are still scarce in England. Trail cameras sometimes pick them up at night. Report any sighting to the Vincent Wildlife Trust.",
  },
  {
    q: "Where can I see badgers in the Lake District?",
    a: "Badgers are widespread. Lowland woodland edges with earthworm-rich soils are the main habitat. The National Trust manages several badger watch events in spring and early summer at various properties. Watching a sett at dusk in late April or May is the most reliable approach.",
  },
  {
    q: "What is the best time of year for mammal watching in the Lake District?",
    a: "October for the red deer rut in Martindale. Spring (April/May) for badger cubs. Year-round for red squirrels. Otters can breed at any time of year, but most cubs are born between May and August. Dawn and dusk year-round give the best chance of most species.",
  },
  {
    q: "Are there water voles in the Lake District?",
    a: "Water voles had vanished from the Lake District, the Eden Rivers Trust says. Since 2023 the Trust and its partners have released several hundred, and reintroduced water voles now live in the becks at Wild Haweswater. The lower becks and river margins with dense bankside vegetation are the habitat. Numbers are low and sightings require patience and luck.",
  },
];

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
  {
    "@type": "Article",
    "@id": url + "#article",
    headline: title,
    description,
    url,
    mainEntityOfPage: url,
    datePublished: "2024-04-01",
    dateModified: "2025-03-01",
    author: { "@id": "https://www.churchtownmedia.co.uk/about#founder" },
    publisher: { "@id": "https://www.thelakeswildlife.co.uk/#organization" },
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thelakeswildlife.co.uk" },
      { "@type": "ListItem", position: 2, name: "Mammal Watching Guide", item: url },
    ],
  },
  {
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  },
  ],
};

export default function MammalWatchingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/80 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Mammal watching guide</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Mammal watching · Lake District
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Mammal Watching in the Lake District
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Red deer on the open fell, otters on the rivers, red squirrels in the conifer woodland. The Lake District has a good range of mammals. Getting up early helps. Knowing where to look helps more.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "Oct", label: "Red deer rut (Martindale)" },
            { stat: "Dawn", label: "Best time for most species" },
            { stat: "Year-round", label: "Red squirrels" },
            { stat: "May/Aug", label: "Most otter cubs born" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--fog)] p-4 text-center">
              <p className="font-display text-xl font-bold text-[var(--fell)]">{stat}</p>
              <p className="text-xs text-[var(--slate)] mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>Red deer</h2>
          <p>
            Red deer are the largest wild land mammal in Britain. Martindale in the eastern Lakes is the main stronghold: the Dalemain Estate says it is home to the oldest native, pure-bred red deer population in the UK. Grizedale Forest in the south holds deer throughout the year, though the Mammal Society says southern Lake District populations are now almost entirely red-sika hybrids. The Caldbeck Fells and parts of the western fells also hold deer.
          </p>
          <p>
            The October rut is the event. Stags roar, fight, and herd hinds throughout the month. Martindale at dawn in the second week of October is well worth the early start. The stags are visible on the open hillside, the roaring carries across the valley, and the light at that time of year makes every photograph worth taking.
          </p>
          <p>
            Outside the rut, red deer are most visible at dawn and dusk. They move onto open ground from cover in low light. On the fell tops above Grizedale in November, a herd of hinds on the skyline at first light is a regular sight. Binoculars are enough for most views; a telescope is worth it for the Martindale rut if you want detail at distance.
          </p>

          <h2>Otter</h2>
          <p>
            Otters are resident on most of the major rivers and lake systems in the Lake District. They were absent or very scarce in the 1970s and 1980s due to organochlorine pesticide contamination of river systems. The recovery since the 1990s has been substantial and otter sightings are now regular across the county.
          </p>
          <p>
            Leighton Moss RSPB (LA5 0SW) near Silverdale is a good place to see otters. The RSPB reports otters most days from the Causeway, Lower and Lilian&apos;s hides.
          </p>
          <p>
            On the rivers, look for otters along the Rothay between Grasmere and Ambleside, the Brathay near Skelwith Bridge, and the Kent near Kendal. Dawn on a quiet stretch of river, with the light coming up, is a good time to look. Look for spraints (droppings) on prominent rocks at the water's edge as an indicator of regular otter use.
          </p>

          <h2>Red squirrel</h2>
          <p>
            The Lake District holds the largest red squirrel population in England. Grizedale Forest (LA22 0QJ) and Whinlatter Forest (CA12 5TW) are two of the main visitor sites; Whinlatter's visitor centre has a red squirrel experience. Haweswater, the Forestry England woodlands above Thirlmere, and the National Trust woodlands around Ullswater all hold squirrels.
          </p>
          <p>
            Morning is reliably the best time. The squirrels are most active in the first few hours after dawn. In autumn they are busy caching food and seen more frequently on the forest floor. In summer they spend more time at height in the canopy, so early morning when they descend to feed is the opportunity.
          </p>

          <h2>Pine marten</h2>
          <p>
            By 1915 pine martens were confined to a few remote areas of Britain. The Vincent Wildlife Trust says they are now spreading from southern Scotland and naturally recolonising parts of Cumbria and Northumberland, although they are still scarce in England. The Trust&apos;s own reintroductions in England were in the Forest of Dean (2019 to 2021) and Devon (2024 to 2025).
          </p>
          <p>
            Pine martens are most active at night and at dusk. They are cat-sized, dark brown with a pale yellow-cream chest patch (the bib), and move through the tree canopy with remarkable speed. They are opportunistic feeders: berries, birds, small mammals, eggs, carrion. A bird feeder in the right woodland edge habitat can attract pine martens to close range.
          </p>
          <p>
            Trail cameras are the most effective way to confirm pine marten presence in an area. If you are staying in a woodland property in the central Lakes, a camera trap placed near the woodland edge or near a bird feeder in September or October stands a reasonable chance. Report confirmed sightings to the Vincent Wildlife Trust to contribute to the monitoring programme.
          </p>

          <h2>Badger</h2>
          <p>
            Badgers are widespread across the Lake District in suitable lowland habitat. The classic habitat is a sloping woodland edge with well-drained earthworm-rich soil. Badger setts are substantial earthworks with multiple entrance tunnels, recognisable by the spoil heaps of excavated soil and the well-worn paths radiating from the entrance.</p>
          <p>
            The National Trust runs badger watching events at several properties in spring and early summer when badger cubs are emerging from the sett for the first time. These guided events are the most reliable way to guarantee a sighting without having to find and watch a sett independently. April and May are the best months for cubs.
          </p>
          <p>
            Independent sett watching requires finding an active sett, then sitting quietly downwind of the entrance before dusk. The badgers emerge at varying times depending on season and disturbance, but May to August gives the longest evenings and the best chance of cubs playing outside the sett before dark.
          </p>

          <h2>Smaller mammals</h2>
          <p>
            Mountain hares were released in the Lake District in the late 1800s, but the Mammal Society says only the hares taken to the Peak District survived. In England they now live only in the Peak District.
          </p>
          <p>
            Water voles had vanished from the Lake District, the Eden Rivers Trust says. Since 2023 the Trust and its partners have released several hundred, and reintroduced water voles now live in the becks at Wild Haweswater. They are well-camouflaged and require deliberate searching of bankside vegetation on sunny days in the middle of the day when they are most active. The characteristic feeding stations, nibbled grass stems and food scraps on flat rocks at the water&apos;s edge, are a reliable indicator.
          </p>
          <p>
            Stoats and weasels are present throughout the fells, though rarely seen. Stoats can be more visible in winter when they turn white (ermine). Short-tailed voles and wood mice are abundant and draw in the predators, so a quiet sit in moorland or woodland edge habitat at dusk often produces stoat or weasel activity.
          </p>
        </div>

        <div className="mt-10 space-y-4">
          <h2 className="font-display text-xl font-bold text-[var(--fell)]">Frequently asked questions</h2>
          {faqs.map(({ q, a }) => (
            <details key={q} className="group bg-[var(--fog)] rounded-xl p-4">
              <summary className="font-medium text-[var(--fell)] cursor-pointer list-none flex justify-between items-center">
                {q}
                <span className="text-[var(--copper)] text-lg group-open:rotate-45 transition-transform">+</span>
              </summary>
              <p className="mt-3 text-sm text-[var(--slate)] leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--slate)]/10 pt-8">
          <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-4">Related guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/seasonal/red-deer-rut", label: "Red deer rut guide" },
              { href: "/seasonal/red-squirrel-watching", label: "Red squirrel watching" },
              { href: "/nature/ullswater", label: "Ullswater wildlife" },
              { href: "/nature/grizedale-forest", label: "Grizedale Forest" },
            ].map(({ href, label }) => (
              <Link key={href} href={href} className="block p-4 bg-[var(--fog)] rounded-xl hover:bg-[var(--lichen)]/20 transition font-medium text-[var(--fell)] text-sm">
                {label} →
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
