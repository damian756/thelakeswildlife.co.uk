import Link from "next/link";
import type { PhotoCredit } from "@/lib/photo-credits";
import { creditFor } from "@/lib/photo-credits";

const linkClass = "underline decoration-dotted underline-offset-2 hover:decoration-solid";

/** "Photo: Author, CC BY-SA 4.0, via Wikimedia Commons", from Commons metadata only. */
export function CreditText({ credit }: { credit: PhotoCredit | null }): React.ReactNode {
  if (credit?.artist && credit.licence) {
    return (
      <>
        Photo: {credit.artist},{" "}
        {credit.licenceUrl ? (
          <a href={credit.licenceUrl} target="_blank" rel="license noopener noreferrer" className={linkClass}>
            {credit.licence}
          </a>
        ) : (
          credit.licence
        )}
        , via{" "}
        <a href={credit.page} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Wikimedia Commons
        </a>
      </>
    );
  }
  if (credit?.page) {
    // Commons names no author for this file: licence and the file page.
    return (
      <>
        Photo: {credit.licence ?? "licence on the file page"}, via{" "}
        <a href={credit.page} target="_blank" rel="noopener noreferrer" className={linkClass}>
          Wikimedia Commons
        </a>
      </>
    );
  }
  return null;
}

/** One credit line under a photo. */
export function PhotoCreditLine({ src, credit, className = "" }: { src?: string; credit?: PhotoCredit | null; className?: string }) {
  const c = credit !== undefined ? credit : src ? creditFor(src) : null;
  return (
    <p className={`text-xs leading-relaxed ${className}`}>
      <CreditText credit={c} />
    </p>
  );
}

/** A small "Photo credits" list for pages that show several photos. */
export function PhotoCredits({ items, className = "" }: { items: { label: string; src?: string; credit?: PhotoCredit | null }[]; className?: string }) {
  const seen = new Set<string>();
  const rows = items.filter((i) => {
    const k = i.src ?? i.credit?.file ?? i.label;
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
  if (rows.length === 0) return null;
  return (
    <section aria-labelledby="photo-credits" className={`text-xs text-[var(--slate)] ${className}`}>
      <h2 id="photo-credits" className="font-semibold text-[var(--fell)] mb-2">Photo credits</h2>
      <ul className="space-y-1">
        {rows.map((i) => (
          <li key={i.src ?? i.label}>
            <span className="font-medium">{i.label}.</span>{" "}
            <CreditText credit={i.credit !== undefined ? i.credit : i.src ? creditFor(i.src) : null} />
          </li>
        ))}
      </ul>
      <p className="mt-2">
        <Link href="/photo-credits" className={linkClass}>All photo credits</Link>
      </p>
    </section>
  );
}
