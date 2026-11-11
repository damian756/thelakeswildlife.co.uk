import Link from "next/link";
import type { Metadata } from "next";

const title = "Woodland Habitats | Wildlife of the Lake District Woodlands";
const description =
  "Guide to the wildlife of the Lake District's woodlands. Ancient oak woodland, conifer plantations, and their birds, mammals, and plants. What lives where and when to look.";
const url = "https://www.thelakeswildlife.co.uk/woodland-habitats";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "article", images: [{ url: "/images/species/birds/pied-flycatcher.jpg", alt: "Male pied flycatcher perched on a branch" }] },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "What birds live in the Lake District oak woodlands?",
    a: "Pied flycatcher, redstart, and wood warbler are the three summer migrants that define the Lakeland oak woodland in May and June. Resident year-round: nuthatch, treecreeper, great spotted woodpecker, tawny owl. The ancient sessile oak woodlands of Borrowdale and the Langdale fells hold the best populations.",
  },
  {
    q: "When is the best time to visit Lake District woodland for birds?",
    a: "May is the peak. Summer migrants have arrived and are singing at their most intense. The oak canopy has just leafed out, so the birds are visible in the tree tops. Early morning, before 8am, is the most productive time.",
  },
  {
    q: "What is the difference between oak woodland and conifer plantation?",
    a: "The ancient sessile oak woodlands of Borrowdale and the Langdale fells are semi-natural, with a full range of plant and animal species. Conifer plantations are managed for timber and support different species. Red squirrels, crossbills, siskins, and coal tits are more characteristic of conifer woodland.",
  },
  {
    q: "Where are the best woodlands to visit in the Lake District?",
    a: "Borrowdale for ancient oak woodland birds: from Keswick, head south on the B5289. Grizedale Forest (LA22 0QJ) for red squirrels and forest wildlife. Whinlatter Forest (CA12 5TW) for red squirrels and mountain forest trails.",
  },
  {
    q: "Are there woodpeckers in the Lake District?",
    a: "Yes. Great spotted woodpecker is resident across the woodlands. Lesser spotted woodpecker is rare but has been recorded. The drumming of great spotted woodpeckers is a characteristic sound of the oak woodlands from February to April.",
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
      { "@type": "ListItem", position: 2, name: "Woodland Habitats", item: url },
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

export default function WoodlandHabitatsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/80 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Woodland habitats</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Habitat guide · Lake District woodlands
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Woodland Habitats
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            The Lake District valleys hold ancient sessile oak woodlands. In May, the pied flycatcher and wood warbler arrive from Africa and the woodland birds are at their most intense. Understanding the difference between oak woodland and conifer plantation tells you where to look for each species.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="prose prose-slate max-w-none">
          <h2>Ancient sessile oak woodland</h2>
          <p>
            The Lake District contains significant ancient sessile oak woodlands. These are the woodlands that cover the lower valley sides in Borrowdale, Langdale, the Duddon valley, and around the shores of Ullswater and Coniston Water. They are ancient in a specific sense: many are recorded as woodland in historical documents going back centuries, and the species diversity of the ground flora and the epiphytic lichens on the oak trunks reflects centuries of unbroken woodland cover.
          </p>
          <p>
            The sessile oak (Quercus petraea) is the dominant tree in these upland western woodlands, preferred over the pedunculate oak (Q. robur) of the English lowlands by the acid soils and high rainfall of the Lake District. Ash and hazel grow in the more calcareous valleys, birch on wetter ground. The woodland structure is characteristic and beautiful: tall, multi-stemmed oaks over a shrub layer of hazel, hawthorn, and rowan, with a ground flora of wood sorrel, bluebell, and ferns.
          </p>
          <p>
            These woodlands are the habitat for three sought-after summer migrant birds: the pied flycatcher, the redstart, and the wood warbler. All three arrive from Africa in April and May. Redstarts leave in late August, and wood warblers can be seen until September. May is the month to visit. The birds are singing at maximum intensity as they establish territories and attract mates, and the noise from a good patch of Borrowdale woodland in early May is genuinely remarkable.
          </p>

          <h2>Pied flycatcher</h2>
          <p>
            The pied flycatcher is a small, bold black-and-white bird that arrives in the Lake District oakwoods in late April and departs in August. The male arrives first and establishes a territory around a nest hole: natural holes in old oaks, or the nest boxes that RSPB and the National Trust maintain throughout the valley woodlands. The female, drabber brown, arrives a week or two later.
          </p>
          <p>
            The pied flycatcher is a bird of the treetops. It snatches insects in flight and from leaf surfaces, and the male sings from a high perch with a rapid, varied song. At Wild Haweswater, the RSPB says redstarts and pied flycatchers return each spring to the woods of the Naddle and Swindale valleys. There are no RSPB trails or public hides, so explore on the public footpaths. Borrowdale woodlands, accessible from the B5289 south of Keswick, hold good populations.
          </p>

          <h2>Redstart and wood warbler</h2>
          <p>
            The redstart is one of the most beautiful common birds in Britain. The male has a slate-grey back, russet-orange breast and tail, and a black face with white forehead. The tail constantly shivers. The species breeds in old oaks with natural nest holes and is present in the Lake District oakwoods from May to August.
          </p>
          <p>
            The wood warbler completes the trio. This is the largest of the leaf warblers and the most specialised woodland bird in the upland oak woodlands. It breeds on the woodland floor under open-canopied oak woodland and is the most demanding of the three in terms of habitat quality. The song is extraordinary: a vibrating, increasingly rapid trill that ends in a liquid descending call, usually transcribed as a shivering note becoming &quot;pew pew pew.&quot; Once you know what you are listening for, the wood warbler's song from a Borrowdale oakwood in May is one of the defining sounds of the Lake District.
          </p>

          <h2>Resident woodland birds</h2>
          <p>
            Nuthatch and treecreeper are year-round residents in the Lake District woodlands. Nuthatches are blue-grey above and orange-buff below, with a bold eye-stripe. They are often seen moving headfirst down tree trunks, which no other British bird does. They are noisy, obvious birds once you know the calls. Treecreepers are smaller, brown and white, and spiral up tree trunks probing bark crevices with a curved bill. Both are found throughout the broadleaf woodlands.
          </p>
          <p>
            Great spotted woodpeckers drum on dead timber from February to April, the sound carrying clearly through the woodland. The drumming is a territorial display, not foraging. The foraging itself, excavating timber for beetle larvae, produces a deeper, irregular tapping. Both sounds are reliable indicators of woodpecker presence.
          </p>
          <p>
            Tawny owls are resident throughout the woodlands and call at night from late summer onwards. The hooting of a tawny owl carries across the valley on still autumn nights. They roost in old trees during the day and can be found by locating owl pellets: compressed bundles of fur, bones, and feathers regurgitated below the roost.
          </p>

          <h2>Conifer plantation woodland</h2>
          <p>
            Grizedale and Whinlatter are the major Forestry England conifer plantations in the Lake District. They were planted primarily for timber production from the mid-20th century and lack the biodiversity of the ancient oakwoods. But they are not lifeless. Red squirrels are at higher density in conifer woodland than in broadleaved woodland, because the grey squirrel, which outcompetes reds in broadleaved settings, is less successful in conifer where the food is primarily cone seeds.
          </p>
          <p>
            Crossbills are erratic visitors to conifer woodland. These finches with crossed mandibles specialise in extracting seeds from cones. They are nomadic, following the cone crops across the northern forests, and periodically appear in large numbers in the Lake District conifers when northern seed crops fail. In irruption years (roughly every 2 to 4 years) Grizedale and Whinlatter can hold significant crossbill flocks.
          </p>
          <p>
            Siskins and redpolls feed on the birch and alder seeds along conifer plantation edges in winter. Both are small, streaky finches that move in mixed flocks through the tree tops. Siskins have a characteristic call, a rising, interrogative &quot;tsu-weet&quot;, that draws attention to the flock. Coal tits are the dominant tit of conifer woodland, preferring the dense spruce over the oak woodland's great and blue tits.
          </p>

          <h2>Woodland flowers and fungi</h2>
          <p>
            Bluebells in the oak woodland understory from April to May are one of the Lake District's most photographed subjects. Ancient woodland indicators such as wood anemone, ramsons (wild garlic), wood sorrel and enchanter&apos;s nightshade mark the oldest woodland sites. The Borrowdale woodlands are particularly rich in the mosses, liverworts, and epiphytic lichens that indicate undisturbed, old woodland with a long history of high humidity.
          </p>
          <p>
            Autumn fungi in the woodland floor include fly agaric (the classic red-capped toadstool of fairy tales, common under birch), penny bun (ceps, excellent eating), chanterelle (yellow, apricot-scented, under oak and beech), and the extraordinary diversity of mycorrhizal fungi associated with oak. The first frosts end the main fungi season. October is the best month for a deliberate fungi walk through the Grizedale or Borrowdale woodland.
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
          <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-4">Related habitat guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/upland-habitats", label: "Upland fell habitats" },
              { href: "/birdwatching-guide", label: "Birdwatching guide" },
              { href: "/nature/grizedale-forest", label: "Grizedale Forest" },
              { href: "/nature/haweswater-rspb", label: "RSPB Haweswater" },
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
