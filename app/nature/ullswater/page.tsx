import Link from "next/link";
import type { Metadata } from "next";

const title = "Ullswater Wildlife | Red Deer Rut, Goldeneye & Martindale Guide";
const description =
  "Ullswater wildlife guide. Red deer rut in Martindale in October. Goldeneye and wildfowl in winter. Ospreys, peregrines, and fell birds. Practical visitor information and what to see when.";
const url = "https://www.thelakeswildlife.co.uk/nature/ullswater";

const faqs = [
  {
    q: "When is the red deer rut at Martindale?",
    a: "October. The rut peaks in the second and third weeks of October. Dawn and dusk are the most active times. Go to the Martindale valley off the Howtown road. You will hear the stags roaring before you see them. Arrive early and move quietly.",
  },
  {
    q: "Where should I go to see the Ullswater red deer?",
    a: "Martindale is the main valley. Take the road south from Howtown along the east shore of Ullswater and continue into Martindale and Ramps Gill. The deer are in the open hillside and valley bottom from early morning. Binoculars essential.",
  },
  {
    q: "What birds can I see on Ullswater in winter?",
    a: "Goldeneye are the most sought-after species. They arrive in October and stay until March or April. Goosander are resident. Tufted duck, pochard, and teal. Great crested grebe. Cormorant. The northern end of the lake near Pooley Bridge can hold good numbers of wildfowl.",
  },
  {
    q: "Are there ospreys at Ullswater?",
    a: "Ospreys fish on Ullswater between April and August. They are not breeding on the lake itself but birds from the wider Cumbrian reintroduction fish the lake regularly. Watch from the shore for a large, gull-sized bird of prey diving feet-first into the water.",
  },
  {
    q: "Can I take the Ullswater Steamers for wildlife watching?",
    a: "Yes. The Ullswater Steamers run between Glenridding, Howtown, and Pooley Bridge. The boats give excellent views of the lake shore and allow you to scan the water for wildfowl and diving birds. The journey to Howtown connects directly to the Martindale valley for red deer.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Ullswater",
    description:
      "The second largest lake in the Lake District. Red deer rut in Martindale in October. Goldeneye and wildfowl in winter. Ospreys fishing in summer.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 54.5667, longitude: -2.8833 },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Glenridding",
      addressRegion: "Cumbria",
      addressCountry: "GB",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Steamers service", value: true },
      { "@type": "LocationFeatureSpecification", name: "Car parks", value: true },
      { "@type": "LocationFeatureSpecification", name: "Walking trails", value: true },
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
      { "@type": "ListItem", position: 3, name: "Ullswater", item: url },
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

export default function UllswaterPage() {
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
            <span className="text-white/80">Ullswater</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Lake District · Eastern Fells · Martindale Red Deer
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Ullswater Wildlife
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Red deer rut in October in Martindale. Goldeneye on the water in winter. Ospreys fishing in summer. One of the best all-round wildlife destinations in the Lake District, with the landscape making every season worth the journey.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
          {[
            { stat: "Oct", label: "Red deer rut" },
            { stat: "Oct–Mar", label: "Goldeneye" },
            { stat: "Apr–Aug", label: "Ospreys possible" },
            { stat: "9 miles", label: "Lake length" },
          ].map(({ stat, label }) => (
            <div key={label} className="rounded-xl bg-[var(--fog)] p-4 text-center">
              <p className="font-display text-2xl font-bold text-[var(--fell)]">{stat}</p>
              <p className="text-xs text-[var(--slate)]/70 mt-1">{label}</p>
            </div>
          ))}
        </div>

        <div className="bg-[var(--fog)] rounded-xl p-5 mb-8">
          <h2 className="font-semibold text-[var(--fell)] mb-3 text-sm uppercase tracking-wider">Key wildlife sites</h2>
          <dl className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
            {[
              ["Red deer", "Martindale valley — from Howtown road"],
              ["Goldeneye", "Northern lake, near Pooley Bridge"],
              ["Ospreys", "Fish on open water, April to August"],
              ["Goosander", "Year-round on lake"],
              ["Peregrines", "Rocky crags above Helvellyn"],
              ["Steamers", "Glenridding, Howtown, Pooley Bridge"],
              ["Parking (Glenridding)", "CA11 0PD, pay and display"],
              ["Parking (Pooley Bridge)", "CA10 2NQ, pay and display"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-[var(--slate)]/10 pb-1.5">
                <dt className="text-[var(--slate)]/60">{k}</dt>
                <dd className="font-medium text-[var(--fell)]">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <section className="prose prose-slate max-w-none">
          <h2>About Ullswater</h2>
          <p>
            Ullswater is the second largest lake in the Lake District, stretching nine miles from Pooley Bridge in the north to Glenridding in the south. The lake is shaped by the glacial valleys of the eastern fells — Helvellyn to the west, the High Street range to the east — and sits at around 145 metres above sea level. It is deep, clear, and cold. The word ullr appears in the Norse and the lake has been settled around for over a thousand years.
          </p>
          <p>
            For wildlife, Ullswater delivers across all seasons. Martindale to the east is one of the finest red deer landscapes in England. The lake itself holds excellent wildfowl in winter. Ospreys and peregrines use the surrounding fells. The combination of open water, wooded shorelines, upland fell, and the sheltered Martindale valley gives a diversity of habitat that few single locations match.
          </p>

          <h2>The Martindale red deer rut</h2>
          <p>
            In October, Martindale is the place. The Martindale valley is one of the oldest managed red deer forests in England — the deer here have lived in these valleys for centuries, managed by the Dalemain Estate. The herd numbers in the hundreds and during the October rut the stags are visible throughout the day, though dawn and dusk are the most dramatic.
          </p>
          <p>
            The drive from Howtown along the narrow road south into Martindale and Ramps Gill takes about 15 minutes. There are limited parking places at the head of the valley. Walk quietly up the valley sides in the early morning and the deer are often visible on the open hillside above. Stags roar continuously during the rut — a deep, bellowing sound that echoes between the valley walls. You will hear it well before you see anything.
          </p>
          <p>
            A large rut stag is an impressive animal. Adult stags can reach 200kg, with antlers that are shed and regrown each year. The antlers are at their fullest in October. The rut involves stags herding hinds, chasing rivals, and performing parallel walks with competing stags before fights. The fights themselves are rarely prolonged but are spectacular when they happen. Stay at a respectful distance — these are wild animals and rut stags are unpredictable.
          </p>
          <p>
            The best approach is to be in the valley at first light on a dry, still morning in the second or third week of October. Binoculars and a telephoto lens if you have one. Wear dull colours. Move slowly. The deer will be audible from the road.
          </p>

          <h2>Wildfowl on the lake</h2>
          <p>
            Goldeneye arrive on Ullswater in October and stay until March or April. They are diving ducks from Scandinavia and northern Russia, wintering on the clear, cold lakes of the Lake District. The male goldeneye is one of the more striking ducks: black and white with an iridescent green-black head and a yellow eye that gives the species its name. The female is grey-brown with a chocolate-brown head.
          </p>
          <p>
            Goldeneye feed by diving, sometimes to considerable depth, for invertebrates and small fish. They dive frequently — watch a group and count the seconds underwater. On sunny winter days the males perform courtship displays, throwing their heads back in exaggerated neck-stretching movements. The display is easy to watch from the steamer jetty at Pooley Bridge or from the shore path at the northern end of the lake.
          </p>
          <p>
            Goosander are resident year-round. They are larger than goldeneye, long and streamlined, with serrated bills for gripping fish. The male is pink-washed white with a dark green head. The female is grey with a rusty-red head and a distinctive shaggy crest. Both sexes are often seen resting on exposed rocks along the shoreline.
          </p>
          <p>
            Other winter wildfowl on the lake include tufted duck (small, black and white diving ducks, common but often overlooked), pochard (red-headed diving ducks, less common than tufted duck), teal (tiny surface-feeding ducks, usually in sheltered bays at the lake edges), and occasional unusual species during cold weather movements. Great crested grebes are resident and visible throughout the year.
          </p>

          <h2>Ospreys</h2>
          <p>
            Ospreys fish on Ullswater between April and August. The birds are from the broader Cumbrian population and are not breeding on the lake, but individuals regularly work the open water for fish. Watch from the lakeshore for a large, pale-bellied raptor, larger than a buzzard, with distinctive angled wings in flight. Ospreys hover briefly before diving feet-first into the water with a dramatic splash. They are successful in around one in three dives.
          </p>
          <p>
            The best chance is early morning on calm days when the water surface is less disturbed. The middle section of the lake, visible from the road between Glenridding and Howtown, is a good scan point.
          </p>

          <h2>Fell birds</h2>
          <p>
            The fells around Ullswater hold peregrines. The crags on the Helvellyn east face and on the High Street range both hold breeding pairs. Watch from the valley floor for a fast, compact raptor, stooping at speed or soaring on broad wings above the crags. Ring ouzels breed on the higher rocky slopes — the 'mountain blackbird' with its white gorget is visible from April to August around 600 metres and above.
          </p>
          <p>
            Common sandpipers arrive in April and breed along the stony shores of the lake. Small, brown, with a bobbing motion and a distinctive trilling call, they are easy to locate by sound as they fly low along the water's edge. Dippers are resident on the fast-flowing streams that enter the lake — look for a small, dark, round bird that bobs on midstream rocks and walks underwater to feed.
          </p>

          <h2>Getting there</h2>
          <p>
            Glenridding at the southern end of the lake (CA11 0PD) has the main car park and the Ullswater Steamers southern terminus. Pooley Bridge at the north (CA10 2NQ) has parking and is the natural base for watching wildfowl at the northern end. The A592 runs the western shore between the two. There is no road along the eastern shore — access to Martindale is via the road from Pooley Bridge east through Dacre and then south through the villages of Martindale.
          </p>
          <p>
            The Ullswater Steamers connect Glenridding, Howtown, and Pooley Bridge by water. This is the best way to see the full lake and the wildlife on it. Book in advance in summer — the steamers are popular and depart to a timetable. For the Martindale deer, disembark at Howtown and walk or drive south into the valley.
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
              { href: "/nature/haweswater-rspb", name: "RSPB Haweswater", desc: "Ospreys, pied flycatchers, red squirrels" },
              { href: "/nature/grizedale-forest", name: "Grizedale Forest", desc: "Red squirrels, red deer, red kites" },
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
