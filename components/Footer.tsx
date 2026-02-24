import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--dune)] bg-[var(--slate)] text-white/80">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <span className="font-semibold text-white/90">Sefton Coast Wildlife</span>
          <div className="flex gap-6">
            <Link href="/birds" className="hover:text-white transition">Birds</Link>
            <Link href="/insects" className="hover:text-white transition">Insects</Link>
            <Link href="/plants" className="hover:text-white transition">Plants</Link>
            <Link href="/mammals" className="hover:text-white transition">Mammals</Link>
            <Link href="/nature/marshside-rspb" className="hover:text-white transition">Marshside RSPB</Link>
          </div>
        </div>
        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/50">
          <span>Part of the <a href="https://seftoncoast.network" target="_blank" rel="noopener" className="hover:text-white/70 transition">Sefton Coast Network</a></span>
          <div className="flex gap-4">
            <a href="https://www.southportguide.co.uk" target="_blank" rel="noopener" className="hover:text-white/70 transition">SouthportGuide</a>
            <a href="https://www.formbyguide.co.uk" target="_blank" rel="noopener" className="hover:text-white/70 transition">FormbyGuide</a>
            <a href="https://www.seftonlinks.com" target="_blank" rel="noopener" className="hover:text-white/70 transition">SeftonLinks</a>
            <a href="https://seftoncoast.network" target="_blank" rel="noopener" className="hover:text-white/70 transition">SeftonCoast.network</a>
          </div>
        </div>
        <p className="mt-4 text-xs text-white/40">Built by Churchtown Media · © {new Date().getFullYear()} Sefton Coast Wildlife</p>
      </div>
    </footer>
  );
}
