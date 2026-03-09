import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

/* ─── per-page content ────────────────────────────────────── */

interface SeasonalPageData {
  title: string;
  period: string;
  metaDescription: string;
  heroWikipediaTitle: string;
  heroAlt: string;
  intro: string;
  sections: { heading: string; body: string[] }[];
  practicalTips: string[];
  relatedLinks: { href: string; label: string; external?: boolean }[];
}

const seasonalPages: Record<string, SeasonalPageData> = {
  "osprey-season": {
    title: "Osprey Season in the Lake District",
    period: "April/August",
    metaDescription: "When and where to see ospreys in the Lake District: RSPB Haweswater, Foulshaw Moss. Get there before 10am.",
    heroWikipediaTitle: "Osprey",
    heroAlt: "Osprey in flight over water",
    intro: "Ospreys return to the Lake District from West Africa in March. By April they're on the nest. RSPB Haweswater and Foulshaw Moss are the main sites. Get there before 10am if you want a decent spot at the hide.",
    sections: [
      { heading: "When they arrive", body: ["Birds return in March. Nesting starts in April. Chicks fledge in August. April to July is peak viewing."] },
      { heading: "Where to go", body: ["RSPB Haweswater is the flagship site. Foulshaw Moss near Grange-over-Sands has a viewing platform. Bassenthwaite has a nest with live webcam."] },
    ],
    practicalTips: ["Get there before 10am", "Take binoculars", "April to July is best", "RSPB Haweswater postcode: CA10 2LX"],
    relatedLinks: [
      { href: "/nature/haweswater-rspb", label: "RSPB Haweswater guide" },
      { href: "/birds/osprey", label: "Osprey species page" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },
  "red-deer-rut": {
    title: "Red Deer Rut in the Lake District",
    period: "October",
    metaDescription: "When and where to see the red deer rut in the Lake District. Martindale. Dawn or dusk.",
    heroWikipediaTitle: "Red deer",
    heroAlt: "Red deer stag during rut",
    intro: "The red deer rut in October. Martindale is the place. Dawn or dusk. You'll hear the stags roaring before you see them. Keep your distance. They're wild.",
    sections: [
      { heading: "When to go", body: ["October. Dawn or dusk. The stags are most active in the first and last hours of light."] },
      { heading: "Where to go", body: ["Martindale is the stronghold. The valley is a designated refuge. Grizedale and Ullswater also hold red deer."] },
    ],
    practicalTips: ["Dawn or dusk", "Martindale", "Keep your distance", "Join a guided walk if you want to get closer"],
    relatedLinks: [
      { href: "/nature/ullswater", label: "Ullswater guide" },
      { href: "/mammals/red-deer", label: "Red Deer species page" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },
  "red-squirrel-watching": {
    title: "Red Squirrel Watching in the Lake District",
    period: "Year-round",
    metaDescription: "Where to see red squirrels in the Lake District. Grizedale Forest, Whinlatter. Morning is best.",
    heroWikipediaTitle: "Red squirrel",
    heroAlt: "Red squirrel in woodland",
    intro: "Grizedale Forest is the place for red squirrels. The visitor centre has feeders. Whinlatter too. Go in the morning. They're used to people.",
    sections: [
      { heading: "Where to go", body: ["Grizedale visitor centre has feeders. Whinlatter has a red squirrel trail. Conifer woodland throughout the Lakes holds them."] },
      { heading: "When to go", body: ["Morning. First few hours after dawn. They're most active then. Year-round."] },
    ],
    practicalTips: ["Grizedale visitor centre", "Morning", "Whinlatter red squirrel trail", "Conifer woodland"],
    relatedLinks: [
      { href: "/nature/grizedale-forest", label: "Grizedale Forest guide" },
      { href: "/mammals/red-squirrel", label: "Red Squirrel species page" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },
  "winter-wildfowl": {
    title: "Winter Wildfowl in the Lake District",
    period: "November/February",
    metaDescription: "Goldeneye, tufted duck and wigeon on the Lake District lakes. Ullswater, Windermere, Coniston.",
    heroWikipediaTitle: "Common goldeneye",
    heroAlt: "Goldeneye on lake",
    intro: "The big lakes hold winter wildfowl. Ullswater, Windermere, Coniston. Goldeneye, tufted duck, wigeon. They dive. Watch for a few seconds and they'll go under.",
    sections: [
      { heading: "Where to go", body: ["Ullswater, Windermere, Coniston. The larger lakes hold the best numbers. Goldeneye are the star."] },
      { heading: "What to look for", body: ["Goldeneye dive for food. The male has a white face patch. Tufted duck and wigeon are also regular."] },
    ],
    practicalTips: ["Winter", "Ullswater is reliable", "They dive", "Bring binoculars"],
    relatedLinks: [
      { href: "/nature/ullswater", label: "Ullswater guide" },
      { href: "/birds/goldeneye", label: "Goldeneye species page" },
      { href: "/birdwatching-guide", label: "Birdwatching guide" },
    ],
  },

};

/* ─── page component ─────────────────────────────────────── */

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(seasonalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seasonalPages[slug];
  if (!page) return {};
  const url = `https://www.thelakeswildlife.co.uk/seasonal/${slug}`;
  return {
    title: `${page.title} | The Lakes Wildlife`,
    description: page.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `${page.title} | The Lakes Wildlife`,
      description: page.metaDescription,
      url,
      siteName: "The Lakes Wildlife",
      type: "article",
    },
    twitter: { card: "summary_large_image", title: page.title, description: page.metaDescription },
  };
}

export default async function SeasonalSlugPage({ params }: Props) {
  // params is still a Promise in Next.js 16 so async is required
  const { slug } = await params;
  const page = seasonalPages[slug];
  if (!page) notFound();

  const url = `https://www.thelakeswildlife.co.uk/seasonal/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: page.title,
    description: page.metaDescription,
    url,
    author: {
      "@type": "Person",
      name: "Damian Roche",
      description: "Damian walks the Lake District fells, watches the wildlife, and writes about what he finds. Ex-army, hiker, fisherman.",
      url: "https://www.thelakeswildlife.co.uk",
    },
    publisher: { "@type": "Organization", name: "The Lakes Wildlife", url: "https://www.thelakeswildlife.co.uk" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {/* Page header band */}
      <div className="bg-[var(--fell)] text-white">
    <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/seasonal" className="hover:text-white/80 transition">Seasonal guides</Link>
            <span>/</span>
            <span className="text-white/80">{page.title}</span>
      </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Seasonal guide · {page.period}
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">{page.title}</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">{page.intro}</p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-10">

        {page.sections.map((section) => (
          <div key={section.heading} className="mb-10">
            <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">{section.heading}</h2>
            {section.body.map((para, i) => (
              <p key={i} className="text-[var(--slate)] text-sm leading-relaxed mb-3">{para}</p>
            ))}
          </div>
        ))}

        <div className="bg-[var(--fog)] rounded-xl p-5 mb-10">
          <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-3">Quick reference</p>
          <h2 className="font-semibold text-[var(--fell)] mb-3">Practical tips</h2>
          <ul className="space-y-1.5">
            {page.practicalTips.map((tip) => (
              <li key={tip} className="flex gap-2 text-sm text-[var(--slate)]">
                <span className="text-[var(--lichen)] flex-shrink-0">▸</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Author bio */}
        <div className="p-5 rounded-xl bg-[var(--fog)] border border-[var(--reed)] mb-10">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--lichen)] mb-1">About the author</p>
          <p className="text-sm font-semibold text-[var(--fell)]">Damian Roche</p>
          <p className="text-sm text-[var(--slate)] mt-1 leading-relaxed">
            Damian walks the Lake District fells, watches the wildlife, and writes about what he finds. Ex-army, hiker, fisherman. Regular Lakes visitor for decades.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-4 border-t border-[var(--fog)]">
          {page.relatedLinks.map((link) =>
            link.external ? (
              <a key={link.href} href={link.href} target="_blank" rel="noopener" className="text-[var(--lichen)] font-medium hover:underline text-sm">
                {link.label} →
              </a>
            ) : (
              <Link key={link.href} href={link.href} className="text-[var(--lichen)] font-medium hover:underline text-sm">
                {link.label} →
              </Link>
            )
          )}
        </div>
    </div>
    </>
  );
}
