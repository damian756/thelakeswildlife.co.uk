import Link from "next/link";
import type { Metadata } from "next";

const title = "Fishing in the Lake District | Tarns, Becks & Lakes Guide";
const description =
  "Fishing guide for the Lake District. Brown trout in the becks, pike and perch on the lakes, trout in the tarns. Where to go, what to fish for, permits, and the best spots. Written by a fisherman who actually goes.";
const url = "https://www.thelakeswildlife.co.uk/fishing-guide";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const faqs = [
  {
    q: "Do you need a permit to fish in the Lake District?",
    a: "Yes. You need a valid Environment Agency rod licence for freshwater fishing in England. You also need permission from the landowner or fishing club for each water. Most lakes and many tarns are managed by angling clubs with day ticket or season permit options.",
  },
  {
    q: "What fish are in the Lake District?",
    a: "Brown trout in the becks and upland tarns. Arctic charr in the deep lakes (Windermere, Coniston, Ullswater, Wastwater). Pike and perch in the lowland lakes. Sea trout and salmon in some of the rivers. Vendace in Bassenthwaite, one of England's rarest fish.",
  },
  {
    q: "What is the best lake for fishing in the Lake District?",
    a: "Ullswater is excellent for brown trout and perch. Coniston Water for trout and pike. Windermere for brown trout, perch, and pike — but it requires permits and is heavily managed. Esthwaite Water near Hawkshead is a stocked trout fishery with day tickets available.",
  },
  {
    q: "Can you fish the tarns on the fells?",
    a: "Many fell tarns are accessible and hold wild brown trout. Red Tarn on Helvellyn, Blea Tarn in Langdale, Scoat Tarn above Wastwater. Access is generally via fell walk. Most high tarns are not formally managed — check with local fishing clubs or access land rules.",
  },
  {
    q: "When is the trout fishing season in the Lake District?",
    a: "The Brown trout season runs from March 15 to September 30. Sea trout and salmon seasons vary by river. Check Environment Agency regulations and the specific water you are planning to fish before the trip.",
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
      description: "Damian fishes the Lake District tarns and becks. Ex-army, hiker, and serious fisherman. Has been coming for decades.",
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

export default function FishingGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Fishing guide</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Fishing guide · Lake District
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Fishing in the Lake District
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Brown trout in the becks. Arctic charr in the deep cold lakes. Pike in the lowland waters. Wild trout in tarns that take a 45-minute walk to reach. The Lake District has excellent fishing. You just need to know where to look and who to ask.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "Trout", label: "Most becks and tarns" },
            { stat: "Charr", label: "Deep cold lakes" },
            { stat: "Mar–Sep", label: "Trout season" },
            { stat: "Permit", label: "Required (EA rod licence)" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--fog)] p-4 text-center">
              <p className="font-display text-xl font-bold text-[var(--fell)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="prose prose-slate max-w-none">
          <h2>Why the Lake District is good fishing country</h2>
          <p>
            The Lake District is good fishing country for the same reasons it is good walking country: the water is clean, the landscape is varied, and the fishing is genuinely wild in many places. The limestone and volcanic geology creates streams with different water chemistry and different fish populations. The altitude range from sea level to nearly 1,000 metres gives habitats from lowland still water to high mountain tarns. And unlike some intensively managed fisheries, a lot of the fishing here is on waters where the fish have been there for centuries, not stocked last week.
          </p>
          <p>
            I have been fishing the Lakes for years. Not competitive fishing, not specimen hunting — just time on the water, a fly on a beck, occasionally a tarn on the fell top that takes an hour to reach. The fishing is incidental to the landscape, most of the time. But the landscape is a reason to be there even when the fish are not playing.
          </p>

          <h2>The becks</h2>
          <p>
            The Lake District's upland becks — Langstrath Beck, Grisedale Beck, the infant River Esk — hold wild brown trout. Small fish, mostly, 6 to 8 inches on a good day, but they are wild fish in wild water. A dry fly in June on a beck at 300 metres above sea level, with no one else in sight, is one of the better experiences in English freshwater fishing.
          </p>
          <p>
            The becks are on private land and require permission. Most of the valley farms have riparian rights and some belong to angling clubs. The Eden Rivers Trust and the Cumbria Wildlife Trust are involved in beck habitat management across the county. It is worth contacting local clubs before visiting — many will issue day permits or simply direct you to accessible stretches.
          </p>
          <p>
            Fly fishing is the most satisfying method on the becks. A short rod, 8 to 9 feet, with a light line, works in the narrow tree-lined sections. The fish respond to traditional wet fly patterns early in the season, dry fly from May onwards. Keep low and approach the pools from downstream. Beck trout are easily spooked.
          </p>

          <h2>The tarns</h2>
          <p>
            The high tarns are the Lake District fishing that most visitors never find. Red Tarn on the eastern face of Helvellyn holds wild brown trout. Scoat Tarn above Wastwater, a long walk from Netherwasdale, is one of the most remote fishing spots in England. Blea Tarn in Langdale, below the Langdale Pikes, is more accessible and less dramatic but holds trout consistently.
          </p>
          <p>
            The trout in the high tarns are small and wild. They are there because the tarns have been isolated above natural fish barriers long enough for distinct populations to develop. Some of these fish have never seen a spinner or a fly — they are instinctively cautious and the fishing is genuinely difficult. An offer refused by a tarn trout on a still day, having walked 45 minutes to get there, is still an experience. Getting one is better.
          </p>
          <p>
            The fishing on most of the high tarns is permissive access on open fell land. No permit required beyond the EA rod licence. Check the access land designations and any specific restrictions before visiting. The Environment Agency website has permit information for specific waters.
          </p>

          <h2>The lakes — trout, perch, and pike</h2>
          <p>
            The major lakes are managed fisheries. Ullswater is managed by the Ullswater Fishing Association with day tickets and season permits available. Brown trout, perch, and pike are all present. The perch fishing on Ullswater is underrated — large perch are present in the deeper water and the summer perch fishing can be excellent.
          </p>
          <p>
            Windermere holds brown trout, perch, and pike. It is one of England's most productive natural fisheries by area. The management is split between several organisations and fishing rights are complex — contact the Environment Agency or local clubs for current permit information. The pike fishing is Windermere's open secret: large fish in accessible water, with catches reported to over 20lb.
          </p>
          <p>
            Coniston Water is worth considering as an alternative to Windermere — less traffic, similar fish, and a more remote atmosphere. Esthwaite Water near Hawkshead (LA22 0QF) is a formally managed trout fishery with day tickets available at the fishing lodge. The stocking here is regular and the fish are catchable — it is the place to go for a reliable day's trout fishing without the planning complexity of the wilder options.
          </p>

          <h2>Arctic charr</h2>
          <p>
            The Lake District holds some of England's best Arctic charr fishing. Charr are relict Ice Age fish that were trapped in the deep cold lakes when the glaciers retreated. They still live in Windermere, Coniston, Ullswater, Thirlmere, Haweswater, Wastwater, and Ennerdale. They are unusual, beautiful fish — silver and red in breeding season — and they live in the deepest cold water of the lakes.
          </p>
          <p>
            Traditional charr fishing used a plumb line with multiple wet flies, trolled slowly at depth. Modern lure fishing at depth is also effective. The fish require specific tackle and technique — depth finders help, and the fishing is more technical than beck trout work. Local tackle shops in Windermere and Keswick can provide current advice and permit information.
          </p>

          <h2>The vendace</h2>
          <p>
            Bassenthwaite Lake holds the vendace, one of Britain's rarest freshwater fish. It is a small, herring-like fish that lives only in Bassenthwaite and Derwentwater in England, and in a handful of Scottish lochs. There is no fishing for vendace — they are too rare and too protected. But the existence of this fish in Bassenthwaite is a reminder that the Lake District is genuinely unusual wildlife country. The water quality required to support vendace is exceptional. It tells you something about the state of the lake.
          </p>

          <h2>Permits and regulations</h2>
          <p>
            Every rod fishing in freshwater in England needs an Environment Agency rod licence. Day and annual licences are available from the EA website (gov.uk/fishing-licences). Licences are cheap; there is no excuse for not having one. In addition to the EA licence, most waters require permission from the landowner or the relevant angling club. This can be a day ticket, a season permit, or simply an informal arrangement with a farmer for beck fishing.
          </p>
          <p>
            Local tackle shops are the best source of current information. Carlisle and Kendal both have well-established tackle shops. For specific waters, clubs like the Eden Angling Association, the Cockermouth Angling Association, and the Westmorland Angling Association cover large stretches of the county. Their websites have current permit information and beat maps.
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
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--lichen)] mb-1">About the author</p>
          <p className="text-sm font-semibold text-[var(--fell)]">Damian Roche</p>
          <p className="text-sm text-[var(--slate)] mt-1 leading-relaxed">
            Damian fishes the Lake District tarns and becks. Ex-army. Has been coming for decades. Still uses a fly rod on the becks when he could probably catch more with a spinner.
          </p>
        </div>
      </div>
    </>
  );
}
