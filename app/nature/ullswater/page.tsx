import Link from "next/link";
import type { Metadata } from "next";

const title = "Ullswater — Red Deer, Goldeneye & Wildlife";
const description = "The second largest lake in the Lake District. Red deer in Martindale, goldeneye in winter. Landscape and wildlife.";
const url = "https://www.thelakeswildlife.co.uk/nature/ullswater";

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
      <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[var(--slate)]" />
      <div className="bg-[var(--forest)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Ullswater</span>
          </nav>
          <p className="text-[var(--gold)] text-xs font-bold uppercase tracking-widest mb-3">Lake District · Overview</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Ullswater</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Red deer in Martindale. Goldeneye on the water in winter. The second largest lake in the Lake District.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <section className="prose prose-slate max-w-none">
          <h2>What to see</h2>
          <p>Red deer in Martindale. Dawn or dusk in October for the rut. Goldeneye on the lake in winter. The landscape is the draw as much as the wildlife.</p>
        </section>
      </div>
    </>
  );
}
