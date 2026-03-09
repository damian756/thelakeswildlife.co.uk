import Link from "next/link";
import type { Metadata } from "next";

const title = "Grizedale Forest | Red Squirrels, Walks & Wildlife";
const description = "Guide to Grizedale Forest in the Lake District: red squirrels, red deer, red kites. Visitor centre feeders and walking trails.";
const url = "https://www.thelakeswildlife.co.uk/nature/grizedale-forest";

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
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">Forestry England · Lake District · Free entry</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Grizedale Forest</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Red squirrels, red deer, red kites. The visitor centre has feeders. One of the best places in England to see red squirrels. Go in the morning.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <section className="prose prose-slate max-w-none">
          <h2>What to see</h2>
          <p>Red squirrels at the visitor centre feeders. Red deer in the forest. Red kites overhead. The Lake District stronghold for red squirrels.</p>
        </section>
      </div>
    </>
  );
}
