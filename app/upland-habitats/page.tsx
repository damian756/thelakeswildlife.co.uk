import Link from "next/link";
import type { Metadata } from "next";

const title = "Upland Fell Habitats | Wildlife of the Lake District High Fells";
const description =
  "Guide to the wildlife of the Lake District upland habitats. Blanket bog, heather moorland, rocky crags, and montane grassland. What lives there, why, and where to find it.";
const url = "https://www.thelakeswildlife.co.uk/upland-habitats";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "What birds live on the Lake District high fells?",
    a: "Ring ouzel above 500 metres from April to August. Red grouse on heather moorland year-round. Peregrine on rocky crags year-round. Golden plover and dunlin on blanket bog in summer. Dotterel pass through on migration in May. Raven throughout.",
  },
  {
    q: "What plants grow on the Lake District uplands?",
    a: "Heather, bilberry, and crowberry on the drier moorland. Sphagnum moss, cotton grass, and sundew on blanket bog. Montane plants like starry saxifrage and alpine lady's-mantle above 700 metres. Cloudberry at scattered high sites.",
  },
  {
    q: "Are there mountain hare on the Lake District fells?",
    a: "Yes, in small numbers. The Skiddaw massif and the northern fells are the main sites. They are near the southern edge of their English range. Look on open fell above 600 metres, particularly in winter when they can turn white.",
  },
  {
    q: "What is blanket bog and why does it matter for wildlife?",
    a: "Blanket bog is deep peat formed over thousands of years, fed by rainfall. It covers many of the higher Lake District plateaux. It stores significant amounts of carbon and supports specialist species — golden plover, dunlin, large heath butterfly. Damaged bog drains, releasing carbon. Intact bog is both a wildlife habitat and a climate asset.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url,
    author: {
      "@type": "Person",
      name: "Damian Roche",
      description: "Damian walks the high fells and has been watching the upland wildlife for years.",
      url: "https://www.thelakeswildlife.co.uk",
    },
    publisher: { "@type": "Organization", name: "The Lakes Wildlife", url: "https://www.thelakeswildlife.co.uk" },
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

export default function UplandHabitatsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Upland habitats</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Habitat guide · Lake District uplands
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Upland Fell Habitats
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Above the intake walls, the Lake District belongs to a different set of species. Ring ouzel, peregrine, red grouse, golden plover. The fell habitats — blanket bog, heather moorland, crags, and scree — are specialist wildlife country. Understanding what you are walking through makes the wildlife make more sense.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="prose prose-slate max-w-none">
          <h2>Heather moorland</h2>
          <p>
            Heather moorland is the dominant vegetation on many of the drier fell tops and south-facing slopes between about 300 and 600 metres. The characteristic plants are ling (Calluna vulgaris), bell heather, and bilberry. In August the heather blooms and the moors turn purple — this is when the red grouse population is most visible, as the birds move through the heather in family groups.
          </p>
          <p>
            Red grouse are the moorland flagship species. They are medium-sized, reddish-brown game birds that spend their entire lives in heather moorland. They roost, nest, and feed in the heather. The males call loudly — the distinctive "go back, go back, go back" call, running words together at speed — particularly early in the morning. On the Skiddaw and Blencathra moorlands and the eastern fells above Patterdale, red grouse are reliable year-round.
          </p>
          <p>
            Heather management for grouse shooting involves rotational burning (muirburn) to maintain a mosaic of ages from regenerating shoots (for feeding) to mature heather (for nesting and cover). The patchwork this creates is visible on many Lake District moorlands. Whether the wildlife interest is better served by grouse management or by allowing moorland to develop naturally is a genuine question; the habitats support different species mixes.
          </p>

          <h2>Blanket bog</h2>
          <p>
            Blanket bog covers the higher, wetter plateaux of the Lake District — Cross Fell and the surrounding fells in the north-east, parts of the Skiddaw Forest, and the high areas of the central fells. Blanket bog forms where the annual rainfall is high and temperatures low enough to prevent the decomposition of dead plant material, resulting in the accumulation of peat over thousands of years. Some Lake District peats are several metres deep.
          </p>
          <p>
            The specialist birds of blanket bog are golden plover and dunlin, both present as breeding species on the higher areas from April to July. Golden plover in summer plumage are handsome birds — black-faced with a golden spangled back. Their melancholy call, a liquid two-note whistle, carries across the bog in clear weather. Dunlin are small waders with a distinctive drooped bill tip and a black belly patch in summer.
          </p>
          <p>
            The large heath butterfly is a blanket and raised bog specialist (see Foulshaw Moss) that occurs on the wetter flat areas. Bog asphodel flowers in July and August on the wet bog surfaces. Sphagnum moss in multiple species forms the living infrastructure. Sundew catches insects. This is a complete and ancient ecosystem that looks featureless to the uninitiated.
          </p>

          <h2>Rocky crags and scree</h2>
          <p>
            Peregrine falcons breed on rocky crags throughout the Lake District. They are present year-round, though most visible in the breeding season from March to July when the adults are defending territory and feeding young. The peregrine stoops — dives at speed — on prey birds with a speed that is difficult to follow with the eye. The stoop makes a distinctive high-pitched tearing sound as the bird descends.
          </p>
          <p>
            The rocky crags of Helvellyn's east face, the Borrowdale volcanic crags, and the limestone crags on the southern edge of the national park all hold peregrines. Scree below the crags provides habitat for common lizard and slow worm in the south-facing exposures. Ring ouzel breed in rocky gullies and scree above 500 metres from April to August — the male is a blackbird-sized bird with a white crescent on the breast, often singing from a prominent boulder.
          </p>

          <h2>Montane grassland and high summit flora</h2>
          <p>
            Above around 700 metres, the vegetation changes. The heather and bilberry thin out and the ground is increasingly dominated by mat-grass, wavy hair-grass, and a range of montane plant species. Starry saxifrage grows in wet flushes near summit streams. Alpine lady's-mantle is common on the higher ridges. Three-leaved rush, viviparous fescue, and stiff sedge mark the higher altitude grassland communities.
          </p>
          <p>
            The montane plants are not dramatic individually, but finding starry saxifrage on the flanks of Helvellyn or alpine willowherb beside a summit pool connects you to a flora that survived the last Ice Age in refugia on south-facing rocks. These are slow-growing, specialist plants at the limit of their thermal tolerance in Britain.
          </p>

          <h2>Dotterel</h2>
          <p>
            Dotterel pass through the Lake District in May on migration from their African wintering grounds to the Scottish mountains and Scandinavian breeding areas. They stop briefly on the high fell tops and plateaux to rest and feed. Small groups — trips of dotterel — are found on the same traditional stopping places year after year: the summit areas of Helvellyn, Blencathra, and the Skiddaw massif. They are confiding birds, allowing close approach, and the male (which does most of the incubation in this species) is strikingly marked with a chestnut breast and bold white face markings.
          </p>
          <p>
            The timing is narrow — the main migration window is from late April to mid-May. A cold spell can delay them or cause them to stop in larger numbers. Check local birding records in late April for reports of dotterel on the high fells.
          </p>

          <h2>Ravens</h2>
          <p>
            Ravens are present year-round across the entire Lake District uplands. Large all-black birds with a deep, resonant croak and a wedge-shaped tail distinguishing them from crows in flight. They are intelligent, acrobatic in the air, and reliable throughout the year. On any fell walk above 400 metres, raven sightings are almost guaranteed.
          </p>
          <p>
            In winter, ravens form communal roosts of sometimes hundreds of birds. The roost sites shift year to year but the Borrowdale crags and the Skiddaw massif both hold large winter roosts. Watching a raven roost gathering at dusk in November is one of those natural spectacles that requires no specialist knowledge to appreciate.
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
              <p className="mt-3 text-sm text-[var(--slate)]/80 leading-relaxed">{a}</p>
            </details>
          ))}
        </div>

        <div className="mt-10 border-t border-[var(--slate)]/10 pt-8">
          <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-4">Related habitat guides</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { href: "/woodland-habitats", label: "Woodland habitats" },
              { href: "/birdwatching-guide", label: "Birdwatching guide" },
              { href: "/mammal-watching-guide", label: "Mammal watching guide" },
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
