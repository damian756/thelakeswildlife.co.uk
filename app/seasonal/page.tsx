import Link from "next/link";
import type { Metadata } from "next";

const title = "Seasonal Wildlife Guides | Lake District";
const description = "What to see when in the Lake District — ospreys, red deer rut, red squirrels and winter wildfowl.";
const url = "https://www.thelakeswildlife.co.uk/seasonal";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const seasons = [
  {
    slug: "osprey-season",
    title: "Osprey Season",
    period: "April/August",
    desc: "Ospreys return from West Africa to breed at RSPB Haweswater and Foulshaw Moss. Get there before 10am for a spot at the hide.",
    tag: "Peak season",
  },
  {
    slug: "red-deer-rut",
    title: "Red Deer Rut",
    period: "October",
    desc: "Martindale and the eastern fells. Dawn or dusk. You'll hear the stags roaring before you see them.",
    tag: "October only",
  },
  {
    slug: "red-squirrel-watching",
    title: "Red Squirrel Watching",
    period: "Year-round",
    desc: "Grizedale Forest and Whinlatter. The visitor centre feeders. Morning is best. One of England's strongholds.",
    tag: "Best in morning",
  },
  {
    slug: "winter-wildfowl",
    title: "Winter Wildfowl",
    period: "November – February",
    desc: "Goldeneye, tufted duck and wigeon on Ullswater and Windermere. The big lakes hold good numbers.",
    tag: "Winter guide",
  },
];

export default function SeasonalPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Seasonal guides</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Year-round watching
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Seasonal guides</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            When to visit the Lake District for specific wildlife, from ospreys at Haweswater to the red deer rut in Martindale.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-10">
        <ul className="grid gap-5 md:grid-cols-2">
          {seasons.map((s) => (
            <li key={s.slug}>
              <Link
                href={`/seasonal/${s.slug}`}
                className="card-hover group block p-6 rounded-2xl border border-[var(--fog)] bg-white hover:border-[var(--lichen)]/50"
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[var(--lichen)] bg-[var(--lichen)]/10 px-2 py-0.5 rounded-full mb-3">
                  {s.tag}
                </span>
                <h2 className="font-display text-xl font-bold text-[var(--fell)] group-hover:text-[var(--lichen)] transition mb-1">
                  {s.title}
                </h2>
                <p className="text-xs text-[var(--slate)]/60 mb-3">{s.period}</p>
                <p className="text-sm text-[var(--slate)] leading-relaxed">{s.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
