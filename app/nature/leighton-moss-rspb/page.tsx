import Link from "next/link";
import type { Metadata } from "next";

const title = "Leighton Moss RSPB — Bittern, Marsh Harrier & Reedbed";
const description = "The largest reedbed in north-west England. Bittern, marsh harrier, bearded tit. RSPB reserve near Silverdale.";
const url = "https://www.thelakeswildlife.co.uk/nature/leighton-moss-rspb";

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
      <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-[var(--slate)]" />
      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <nav className="text-sm text-white/50 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <Link href="/nature" className="hover:text-white/80 transition">Nature</Link>
            <span>/</span>
            <span className="text-white/80">Leighton Moss RSPB</span>
          </nav>
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">RSPB Reserve · Silverdale · Entry charge</p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">Leighton Moss RSPB</h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            The largest reedbed in north-west England. Bittern, marsh harrier, bearded tit. A proper day out.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl px-4 py-10">
        <section className="prose prose-slate max-w-none">
          <h2>What to see</h2>
          <p>Bittern, marsh harrier, bearded tit. The reedbed is the draw. RSPB members get in free. Non-members pay. Worth it.</p>
        </section>
      </div>
    </>
  );
}
