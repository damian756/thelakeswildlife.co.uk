import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[var(--fell)] text-white">
      {/* Accent strip */}
      <div className="h-1 w-full bg-gradient-to-r from-[var(--lichen)] via-[var(--copper-light)] to-[var(--lichen)]" />

      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-lg font-semibold text-white leading-tight mb-1">
              The Lakes{" "}
              <span className="text-[var(--copper-light)]">Wildlife</span>
            </p>
            <p className="text-white/60 text-sm leading-relaxed mt-2">
              Independent guide to birds, nature and wildlife in the Lake District, from RSPB Haweswater to Grizedale Forest.
            </p>
            <p className="text-white/60 text-xs mt-4">
              Part of{" "}
              <a href="https://www.thelakes.network/" target="_blank" rel="noopener" className="text-white/60 hover:text-white transition">
                The Lakes Network
              </a>
            </p>
          </div>

          {/* Species */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--copper-light)] mb-4">Species</h2>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                { href: "/birds", label: "Birds" },
                { href: "/insects", label: "Insects" },
                { href: "/plants", label: "Plants" },
                { href: "/mammals", label: "Mammals & Wildlife" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Nature */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--copper-light)] mb-4">Nature</h2>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                { href: "/nature/haweswater-rspb", label: "RSPB Haweswater" },
                { href: "/nature/grizedale-forest", label: "Grizedale Forest" },
                { href: "/birdwatching-guide", label: "Birdwatching Guide" },
                { href: "/seasonal", label: "Seasonal Guides" },
                { href: "/blog", label: "Wildlife Blog" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Network */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--copper-light)] mb-4">The Lakes Network</h2>
            <ul className="space-y-2.5 text-sm text-white/70">
              {[
                { href: "https://www.thelakesguide.co.uk", label: "The Lakes Guide: restaurants, accommodation & walks" },
                { href: "https://www.hikethelakes.com", label: "Hike The Lakes: 214 Wainwright fells" },
                { href: "https://www.thelakes.network/", label: "TheLakes.network" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener" className="hover:text-white transition">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Partner banner */}
        <div className="mt-12 border-t border-white/10 pt-6 pb-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm">
          <p className="text-white/70">
            Conservation group or local business?{" "}
            <Link href="/advertise" className="text-[var(--copper-light)] font-semibold hover:text-white transition">
              Partner with The Lakes Network
            </Link>
          </p>
          <Link href="/contact" className="text-[var(--copper-light)] hover:text-white transition font-medium text-sm">
            Use the contact form →
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/60">
          <span>© {year} The Lakes Wildlife · Built by <a href="https://www.churchtownmedia.co.uk/" target="_blank" rel="noopener" className="hover:text-white/60 transition">Churchtown Media</a></span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/60 transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white/60 transition">Terms</Link>
            <Link href="/photo-credits" className="hover:text-white/60 transition">Photo credits</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
