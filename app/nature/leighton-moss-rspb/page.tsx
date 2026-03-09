import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { MapPin, Clock, Eye, Train } from "lucide-react";

const title = "Leighton Moss RSPB | Bittern, Marsh Harrier & Reedbed Wildlife Guide";
const description =
  "Leighton Moss RSPB wildlife guide. The largest reedbed in north-west England. Bittern, marsh harrier, bearded tit, otter. Postcode LA5 0SW. Practical visit information, what to see and when.";
const url = "https://www.thelakeswildlife.co.uk/nature/leighton-moss-rspb";

const faqs = [
  {
    q: "Is Leighton Moss RSPB free to enter?",
    a: "No. There is an entry charge for non-RSPB members. RSPB members enter free on production of membership card. The entry charge includes access to all hides and the reedbed trail. Check rspb.org.uk for current prices.",
  },
  {
    q: "What is the best time of year to visit Leighton Moss?",
    a: "Year-round. Winter is excellent for wildfowl, bittern booming in spring, bearded tits and marsh harriers breeding in summer, and wader passage in autumn. No bad time. October and November can be quieter for visitors but good for wildfowl arrival.",
  },
  {
    q: "Can you hear bittern booming at Leighton Moss?",
    a: "Yes. Bitterns boom at Leighton Moss from February to June. The booming sound is extraordinary, a deep resonating call that carries across the reedbed. Dawn is the most reliable time. February and March are peak booming season.",
  },
  {
    q: "Are there otters at Leighton Moss?",
    a: "Yes. Otters are resident and regularly seen. Dawn and dusk are the best times. The Alan Turing hide overlooking the open water gives the best chance. Otters are more visible in winter when water levels change and fish are more concentrated.",
  },
  {
    q: "Where is Leighton Moss in relation to the Lake District?",
    a: "Leighton Moss is near Silverdale, Lancashire, on the southern edge of the Lake District national park. About 45 minutes from Windermere, 20 minutes from Arnside. The site has a train station (Silverdale station) directly adjacent.",
  },
];

const pageJsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name: "Leighton Moss RSPB",
    description:
      "RSPB reserve near Silverdale. The largest reedbed in north-west England. Bittern, marsh harrier, bearded tit, otter, water rail.",
    url,
    geo: { "@type": "GeoCoordinates", latitude: 54.1667, longitude: -2.8333 },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Silverdale",
      postalCode: "LA5 0SW",
      addressCountry: "GB",
    },
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Car park", value: true },
      { "@type": "LocationFeatureSpecification", name: "Visitor centre", value: true },
      { "@type": "LocationFeatureSpecification", name: "Hides", value: true },
      { "@type": "LocationFeatureSpecification", name: "Cafe", value: true },
      { "@type": "LocationFeatureSpecification", name: "Toilets", value: true },
      { "@type": "LocationFeatureSpecification", name: "Shop", value: true },
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
      { "@type": "ListItem", position: 3, name: "Leighton Moss RSPB", item: url },
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

export default function LeightonMossPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />

      {/* Hero */}
      <section className="relative min-h-[480px] flex items-end text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1484627147104-f5197bcd6651?w=1400&q=80"
          alt="Leighton Moss RSPB reedbed near Silverdale, Lancashire"
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
            <span className="text-white/80">Leighton Moss RSPB</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            RSPB Reserve · Silverdale · Entry charge (RSPB members free)
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Leighton Moss RSPB
          </h1>
          <p className="text-white/80 text-lg leading-relaxed max-w-2xl mb-8">
            The largest reedbed in north-west England. Bittern, marsh harrier, bearded tit, otter. Worth it. RSPB members get in free. Non-members pay an entry charge that is justified.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
            {[
              { icon: MapPin, stat: "LA5 0SW", label: "Postcode" },
              { icon: Clock, stat: "Charged", label: "Entry (RSPB free)" },
              { icon: Eye, stat: "All year", label: "Open" },
              { icon: Train, stat: "Feb–Jun", label: "Bittern booming" },
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
              { href: "#bittern", label: "Bittern" },
              { href: "#marsh-harrier", label: "Marsh Harrier" },
              { href: "#bearded-tit", label: "Bearded Tit" },
              { href: "#otter", label: "Otter" },
              { href: "#seasonal", label: "Seasonal Calendar" },
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
              ["Postcode", "LA5 0SW"],
              ["Managed by", "RSPB"],
              ["Entry", "Charged (RSPB members free)"],
              ["Parking", "Pay and display at visitor centre"],
              ["Facilities", "Visitor centre, cafe, shop, toilets, 6 hides"],
              ["Transport", "Silverdale train station adjacent"],
              ["Best for", "Bittern, marsh harrier, bearded tit, otter"],
              ["Dogs", "On leads in car park only"],
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
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">About Leighton Moss</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Leighton Moss sits in a low-lying valley between the limestone hills of Silverdale and the Kent estuary. The RSPB has managed the reserve since 1964. The reedbed, around 100 hectares of Phragmites reed, is the largest in north-west England and is surrounded by willow scrub, wet grassland, and open water pools that together create one of the most productive wildlife habitats in the country.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            The entry charge is worth it. The RSPB&rsquo;s management of the water levels, reedbed cutting, and grazing regime is what makes this place work for the wildlife it holds. Six hides overlook different parts of the reserve, from the main reedbed to the open lagoons and the coastal salt marsh.
          </p>
        </section>

        {/* Bittern */}
        <section id="bittern" className="mb-12 scroll-mt-20">
          <div className="rounded-2xl overflow-hidden border border-[var(--fell)]/10 md:flex mb-6">
            <div className="relative h-52 md:h-auto md:w-72 flex-none">
              <Image
                src="https://images.unsplash.com/photo-1504198266287-1659872e6590?w=600&q=80"
                alt="Bittern in the reedbed at Leighton Moss RSPB"
                fill sizes="(max-width: 768px) 100vw, 288px"
                className="object-cover"
              />
            </div>
            <div className="bg-[var(--fog)] p-6 flex flex-col justify-center md:flex-1">
              <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-2">February to June (booming)</p>
              <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">Bittern</h2>
              <p className="text-[var(--slate)] text-sm leading-relaxed">
                The flagship species at Leighton Moss and the main reason many people make the journey. The booming call is extraordinary: a deep, resonating foghorn sound that carries across the reserve and beyond. Males boom from February to June. Dawn is the most reliable time.
              </p>
            </div>
          </div>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Bitterns are a large, brown, streaky heron, cryptically camouflaged to blend with the reedbed where they spend most of their time. Seeing a bittern in flight is easier than seeing one standing in the reeds. The birds fly low over the reed tops at dawn and dusk, typically moving between feeding areas. From the main hides, this flight is the most reliable sighting.
          </p>
          <div className="bg-[var(--fog)] rounded-xl p-4">
            <p className="font-semibold text-[var(--fell)] text-sm mb-1">A conservation success story</p>
            <p className="text-sm text-[var(--slate)] leading-relaxed">Britain&rsquo;s bittern population was down to a handful of males in the 1990s before intensive conservation work reversed the decline. Leighton Moss is one of the sites that supported breeding bitterns through that period and still does. The current UK population is around 200 booming males.</p>
          </div>
        </section>

        {/* Marsh harrier */}
        <section id="marsh-harrier" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Marsh Harrier</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Marsh harriers breed at Leighton Moss and are visible from April to September. The male is unmistakeable in breeding season: grey and brown with pale grey wingtips, quartering low over the reedbed with wings held in a shallow V. The female is larger and darker, with a cream crown. Watch from any of the main hides for harriers hunting or carrying prey to the nest.
          </p>
          <p className="text-[var(--slate)] leading-relaxed mb-6">
            The food pass is worth waiting for. The male brings prey to the female and performs a spectacular aerial display, tossing the food for the female to catch in a stoop. This happens unpredictably but is one of the great raptor sightings in northern England when you do see it.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="bg-[var(--fog)] rounded-xl p-4">
              <p className="font-semibold text-[var(--fell)] text-sm mb-1">When to see them</p>
              <p className="text-sm text-[var(--slate)]">April to September. Present almost daily in the breeding season. Best views from the Lower Hide or the main visitor centre windows.</p>
            </div>
            <div className="bg-[var(--fog)] rounded-xl p-4">
              <p className="font-semibold text-[var(--fell)] text-sm mb-1">What to look for</p>
              <p className="text-sm text-[var(--slate)]">A large, long-winged raptor quartering low over the reed tops. The male&rsquo;s grey wingtips are diagnostic. Wings held in a V, not flat like a buzzard.</p>
            </div>
          </div>
        </section>

        {/* Bearded tit */}
        <section id="bearded-tit" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Bearded Tit</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Bearded tits are resident year-round and one of the most satisfying birds to find at Leighton Moss. They spend most of their time deep in the reed stems. In late autumn they show well in the tops of the reeds, particularly when a light wind moves the reed heads. The males are orange-brown with a blue-grey head and dramatic black moustache markings.
          </p>
          <p className="text-[var(--slate)] leading-relaxed">
            Listen for a distinctive metallic &lsquo;ping&rsquo; call. Once you know the call, you will hear bearded tits before you see them. In a light wind from late October onwards, pairs and small groups often clamber up to the reed heads to feed on seeds, giving excellent views from the reedbed hides.
          </p>
        </section>

        {/* Otter */}
        <section id="otter" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-4">Otter</h2>
          <p className="text-[var(--slate)] leading-relaxed mb-4">
            Otters are resident at Leighton Moss. Dawn and dusk are the reliable times. The Alan Turing hide on the open water lagoon is the best spot. Winter is often better than summer as lower water levels concentrate fish and make otter activity more visible.
          </p>
          <p className="text-[var(--slate)] leading-relaxed mb-6">
            A hunting otter in open water is one of the most compelling things to watch in British wildlife. They move fast, dive cleanly, and resurface unpredictably. The wait can be long. Bring patience and binoculars, and scan the surface regularly from the hide.
          </p>
          <div className="bg-[var(--fog)] rounded-xl p-4">
            <p className="font-semibold text-[var(--fell)] text-sm mb-2">Otter tips</p>
            <ul className="space-y-1.5 text-sm text-[var(--slate)]">
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Alan Turing hide is the best location. Arrive at first light.</li>
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Winter gives better sightings as fish are more concentrated in lower water.</li>
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Scan the whole surface slowly. Otters can travel the width of the lagoon quickly.</li>
              <li className="flex gap-2"><span className="text-[var(--copper)] font-bold">•</span> Look for a V-shaped ripple moving across the water, then a head and back arching at the surface.</li>
            </ul>
          </div>
        </section>

        {/* Seasonal calendar */}
        <section id="seasonal" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">Seasonal Calendar</h2>
          <div className="space-y-3">
            {[
              { period: "Jan to Feb", highlight: "Winter wildfowl peak", detail: "Large numbers of teal and other wildfowl. Bitterns sometimes visible at reedbed edges in cold weather. Whooper swans possible." },
              { period: "Mar to Apr", highlight: "Bittern booming", detail: "Bittern booming from dawn. Marsh harriers arrive. Garganey possible on passage. Spring wader movement on the lagoons." },
              { period: "May to Jun", highlight: "Peak breeding", detail: "Peak breeding activity. Marsh harrier food passes. Reed and sedge warblers singing. Bearded tit chicks in the reeds." },
              { period: "Jul to Aug", highlight: "Harrier family", detail: "Young marsh harriers learning to hunt. Wader passage begins. Hobby possible over the reedbed." },
              { period: "Sep to Oct", highlight: "Wader passage", detail: "Autumn wader passage. Wildfowl numbers building. Water rail calling from reed edges." },
              { period: "Nov to Dec", highlight: "Peak wildfowl", detail: "Peak wildfowl numbers. Bitterns more visible as vegetation dies back. Hen harrier possible on the estuary edge." },
            ].map(({ period, highlight, detail }) => (
              <div key={period} className="bg-[var(--fog)] rounded-xl p-4 flex gap-4">
                <div className="flex-none w-24">
                  <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-wider">{period}</p>
                  <p className="font-semibold text-[var(--fell)] text-xs mt-0.5">{highlight}</p>
                </div>
                <p className="text-sm text-[var(--slate)] leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Getting there */}
        <section id="getting-there" className="mb-12 scroll-mt-20">
          <h2 className="font-display text-2xl font-bold text-[var(--fell)] mb-6">Getting There</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-[var(--fog)] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Train className="w-4 h-4 text-[var(--copper)]" />
                <h3 className="font-semibold text-[var(--fell)]">By Train</h3>
              </div>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                Silverdale station is directly adjacent to the reserve. Trains on the Furness Line stop here. The station is unstaffed and small but functional. The walk from the platform to the visitor centre entrance is about 2 minutes.
              </p>
            </div>
            <div className="bg-[var(--fog)] rounded-xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4 text-[var(--copper)]" />
                <h3 className="font-semibold text-[var(--fell)]">By Car</h3>
              </div>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                Take the A6 north from Carnforth, turn west at Yealand Redmayne and follow signs to Silverdale. Postcode LA5 0SW. Parking charges apply at the visitor centre. The cafe serves decent coffee and hot food throughout the day.
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
                href: "/nature/foulshaw-moss",
                name: "Foulshaw Moss",
                desc: "Osprey nest, Large Heath butterfly, raised bog",
                image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?w=600&q=80",
              },
              {
                href: "/nature/haweswater-rspb",
                name: "RSPB Haweswater",
                desc: "Ospreys and fell woodland birds",
                image: "https://images.unsplash.com/photo-1551524559-8af4e6624178?w=600&q=80",
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
