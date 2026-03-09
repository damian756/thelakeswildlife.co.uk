import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Eye, Clock, Waves } from "lucide-react";

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

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-end text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80"
          alt="Ullswater lake at dawn in the Lake District"
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
            <span className="text-white/80">Ullswater</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Lake District · Eastern Fells · Martindale Red Deer
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ullswater Wildlife
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
            Red deer rut in October in Martindale. Goldeneye on the water in winter. Ospreys fishing in summer. One of the best all-round wildlife destinations in the Lake District, with the landscape making every season worth the journey.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { icon: Clock, stat: "Oct", label: "Red deer rut" },
              { icon: Eye, stat: "Oct–Mar", label: "Goldeneye" },
              { icon: Eye, stat: "Apr–Aug", label: "Ospreys possible" },
              { icon: Waves, stat: "9 miles", label: "Lake length" },
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
              { href: "#martindale", label: "Red Deer Rut" },
              { href: "#wildfowl", label: "Wildfowl" },
              { href: "#ospreys", label: "Ospreys" },
              { href: "#fell-birds", label: "Fell Birds" },
              { href: "#getting-there", label: "Getting There" },
            ].map(({ href, label }) => (
              <a key={href} href={href} className="text-white/60 hover:text-[var(--copper)] transition-colors font-medium">{label}</a>
            ))}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-3xl px-4 py-10">

        {/* Key sites table */}
        <div className="bg-[var(--fog)] rounded-xl p-5 mb-10">
          <h2 className="font-semibold text-[var(--fell)] mb-3 text-sm uppercase tracking-wider">Key wildlife sites</h2>
          <dl className="grid sm:grid-cols-2 gap-y-2 gap-x-6 text-sm">
            {[
              ["Red deer", "Martindale valley, from Howtown road"],
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

        {/* About */}
        <section className="mb-12">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">About Ullswater</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Ullswater is the second largest lake in the Lake District, stretching nine miles from Pooley Bridge in the north to Glenridding in the south. The lake is shaped by the glacial valleys of the eastern fells, Helvellyn to the west and the High Street range to the east, and sits at around 145 metres above sea level. It is deep, clear, and cold.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            For wildlife, Ullswater delivers across all seasons. Martindale to the east is one of the finest red deer landscapes in England. The lake itself holds excellent wildfowl in winter. Ospreys and peregrines use the surrounding fells. The combination of open water, wooded shorelines, upland fell, and the sheltered Martindale valley gives a diversity of habitat that few single locations match.
          </p>
        </section>

        {/* Martindale */}
        <section id="martindale" className="mb-12 scroll-mt-20">
          <div className="rounded-2xl overflow-hidden border border-[var(--fell)]/10 md:flex mb-6">
            <div className="relative h-52 md:h-auto md:w-72 flex-none">
              <Image
                src="https://images.unsplash.com/photo-1484723091739-30990338e8e0?w=600&q=80"
                alt="Red deer stag roaring during the October rut"
                fill sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover"
              />
            </div>
            <div className="bg-[var(--fog)] p-6 flex flex-col justify-center md:flex-1">
              <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-2">October only</p>
              <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">The Martindale Red Deer Rut</h2>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                The Martindale valley is one of the oldest managed red deer forests in England. The herd numbers in the hundreds and during the October rut the stags are visible throughout the day, though dawn and dusk are the most dramatic. You will hear the stags roaring before you see them.
              </p>
            </div>
          </div>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            The drive from Howtown along the narrow road south into Martindale and Ramps Gill takes about 15 minutes. There are limited parking places at the head of the valley. Walk quietly up the valley sides in the early morning and the deer are often visible on the open hillside above. Stags roar continuously during the rut, a deep bellowing sound that echoes between the valley walls.
          </p>
          <p className="text-[var(--slate)] leading-relaxed mb-6">
            Adult stags can reach 200kg, with antlers shed and regrown each year. The antlers are at their fullest in October. The rut involves stags herding hinds, chasing rivals, and performing parallel walks before fights. The fights are rarely prolonged but are spectacular when they happen.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="font-semibold text-amber-800 text-sm mb-1">Approach with care</p>
            <p className="text-amber-700 text-sm">Stay at a respectful distance. Rut stags are unpredictable. Best approach: in the valley at first light on a dry, still morning in the second or third week of October. Binoculars, dull colours, move slowly.</p>
          </div>
        </section>

        {/* Wildfowl */}
        <section id="wildfowl" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">Wildfowl on the Lake</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            {[
              {
                name: "Goldeneye",
                season: "October to April",
                image: "https://images.unsplash.com/photo-1618229136403-eb6d4025a1d3?w=600&q=80",
                desc: "Diving ducks from Scandinavia and northern Russia. The male is black and white with an iridescent green head and yellow eye. Watch courtship displays from Pooley Bridge shore on sunny winter mornings.",
              },
              {
                name: "Goosander",
                season: "Year-round resident",
                image: "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=600&q=80",
                desc: "Long and streamlined with serrated bills for gripping fish. The male is pink-washed white with a dark green head. Often resting on exposed rocks along the shoreline. Resident year-round.",
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
            Other winter wildfowl include tufted duck, pochard, teal, and occasional unusual species during cold weather movements. Great crested grebes are resident year-round. The northern end near Pooley Bridge (CA10 2NQ) can hold good numbers in winter.
          </p>
        </section>

        {/* Ospreys */}
        <section id="ospreys" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Ospreys</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Ospreys fish on Ullswater between April and August. The birds are from the broader Cumbrian population and are not breeding on the lake, but individuals regularly work the open water for fish. Watch for a large, pale-bellied raptor with distinctive angled wings. Ospreys hover briefly before diving feet-first into the water. They are successful in around one in three dives.
          </p>
          <p className="text-[var(--slate)] leading-relaxed mb-6">
            The best chance is early morning on calm days when the water surface is less disturbed. The middle section of the lake, visible from the road between Glenridding and Howtown, is a good scan point.
          </p>
          <div className="bg-[var(--fog)] rounded-xl p-5">
            <p className="font-semibold text-[var(--fell)] mb-2 text-sm">Osprey tips</p>
            <ul className="space-y-1.5 text-sm text-[var(--slate)]">
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> April to August is the window. Peak in June and July.</li>
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Early morning on still days gives the best water visibility.</li>
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Look for a large pale raptor hovering 20 to 30 metres above the water before diving.</li>
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> The Ullswater Steamers route between Howtown and Glenridding is a good scanning platform.</li>
            </ul>
          </div>
        </section>

        {/* Fell birds */}
        <section id="fell-birds" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Fell Birds</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            The fells around Ullswater hold peregrines. The crags on the Helvellyn east face and on the High Street range both hold breeding pairs. Watch from the valley floor for a fast, compact raptor stooping at speed or soaring on broad wings above the crags.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            Ring ouzels breed on the higher rocky slopes, the mountain blackbird with its white gorget, visible from April to August around 600 metres and above. Common sandpipers arrive in April and breed along the stony shores of the lake. Dippers are resident on the fast-flowing streams that enter the lake. Look for a small, dark, round bird that bobs on midstream rocks and walks underwater to feed.
          </p>
        </section>

        {/* Getting there */}
        <section id="getting-there" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">Getting There</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[var(--fog)] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[var(--copper)]" />
                <h3 className="font-semibold text-[var(--fell)]">By Car</h3>
              </div>
              <ul className="space-y-2 text-sm text-[var(--slate)]">
                <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Glenridding (CA11 0PD) — main car park, Steamers southern terminus</li>
                <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Pooley Bridge (CA10 2NQ) — northern end, good for wildfowl</li>
                <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> A592 runs the western shore. No road along the eastern shore.</li>
                <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Martindale: from Pooley Bridge east through Dacre, then south</li>
              </ul>
            </div>
            <div className="bg-[var(--fog)] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Waves className="w-4 h-4 text-[var(--copper)]" />
                <h3 className="font-semibold text-[var(--fell)]">Ullswater Steamers</h3>
              </div>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                The Steamers connect Glenridding, Howtown, and Pooley Bridge by water. This is the best way to see the full lake and the wildlife on it. Book in advance in summer. For Martindale deer, disembark at Howtown and drive south into the valley.
              </p>
            </div>
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
