import Image from "next/image";
import Link from "next/link";
import { AD_SLOTS, activeSponsor, advertiseHref, emptyPriceLine, type AdSlotId } from "@/lib/ad-slots";

// One advertising space (server component). Filled: a card labelled Advertisement or Sponsor, with the
// sponsor's name, words, optional photo and a sponsored link. Empty: an "advertise here" card naming the
// space, linking to /advertise. Spaces and sponsors are set in lib/ad-slots.ts.
export function AdSlot({ id, className = "" }: { id: AdSlotId; className?: string }) {
  const slot = AD_SLOTS[id];
  const sponsor = activeSponsor(slot);

  if (sponsor) {
    return (
      <aside
        aria-label={slot.label}
        data-ad-slot={id}
        className={`rounded-2xl border border-[var(--reed)]/40 bg-white p-5 sm:p-6 flex flex-col sm:flex-row gap-5 sm:items-center ${className}`}
      >
        {sponsor.image && (
          <div className="relative w-full h-44 sm:w-48 sm:h-32 shrink-0 overflow-hidden rounded-xl bg-[var(--fog)]">
            <Image src={sponsor.image} alt={sponsor.name} fill sizes="(max-width: 640px) 100vw, 192px" className="object-cover" />
          </div>
        )}
        <div className="min-w-0">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--lichen)] mb-1.5">{slot.label}</p>
          <p className="font-display text-lg font-bold text-[var(--fell)] leading-snug">{sponsor.name}</p>
          <p className="text-sm text-[var(--slate)] leading-relaxed text-pretty mt-1.5">{sponsor.text}</p>
          <a
            href={sponsor.url}
            target="_blank"
            rel="sponsored noopener"
            className="inline-block mt-3 text-sm font-semibold text-[var(--lichen)] hover:text-[var(--fell)] hover:underline"
          >
            Visit {sponsor.name} →
          </a>
        </div>
      </aside>
    );
  }

  return (
    <aside
      aria-label="Advertising space"
      data-ad-slot={id}
      className={`rounded-2xl border-[1.5px] border-dashed border-[var(--copper)]/70 bg-white px-5 py-5 sm:px-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-4 ${className}`}
    >
      <div className="min-w-0 flex-[1_1_20rem]">
        <p className="text-xs font-bold uppercase tracking-widest text-[var(--lichen)] mb-1.5">Advertising space</p>
        <p className="font-display text-lg font-bold text-[var(--fell)] leading-snug text-balance mb-1">{slot.cardTitle}</p>
        <p className="text-sm text-[var(--slate)] leading-relaxed text-pretty">{slot.pitch}</p>
      </div>
      <div className="flex flex-col items-start gap-2.5">
        <span className="text-[13px] font-semibold text-[var(--fell)]">{emptyPriceLine(id)}</span>
        <Link
          href={advertiseHref(id)}
          className="inline-block rounded-lg bg-[var(--fell)] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[var(--lichen)] transition"
        >
          See advertising options
        </Link>
      </div>
    </aside>
  );
}
