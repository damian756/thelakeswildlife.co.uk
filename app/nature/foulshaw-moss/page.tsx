import Link from "next/link";
import type { Metadata } from "next";

const title = "Foulshaw Moss | Osprey Viewing Platform";
const description = "Cumbria Wildlife Trust reserve near Grange-over-Sands. Osprey viewing platform. Nest visible from the hide.";
const url = "https://www.thelakeswildlife.co.uk/nature/foulshaw-moss";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

export default function FoulshawMossPage() {
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
            <span className="text-white/80">Foulshaw Moss</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">Cumbria Wildlife Trust · Grange-over-Sands · Free entry</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Foulshaw Moss</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Osprey viewing platform. The nest is visible from the hide. One of the Lake District osprey reintroduction success stories.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <section className="prose prose-slate max-w-none">
          <h2>What to see</h2>
          <p>Ospreys. The viewing platform overlooks the nest. Bog asphodel and heath spotted orchids on the moss in summer.</p>
        </section>
      </div>
    </>
  );
}
