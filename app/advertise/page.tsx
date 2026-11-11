import type { Metadata } from "next";
import Link from "next/link";
import { AD_OPTIONS, AD_OPTION_ORDER, AD_SLOTS, isAdSlotId, priceText } from "@/lib/ad-slots";

// No advert on this page. Options and prices come from lib/ad-slots.ts; every price is shown plus VAT.

const title = "Advertise";
const description =
  "Advertising on The Lakes Wildlife: section and guide sponsors, the home page card, sponsored articles and the Lakes network bundle. Prices plus VAT, and how to ask.";
const url = "https://www.thelakeswildlife.co.uk/advertise";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title: "Advertise on The Lakes Wildlife",
    description,
    url,
    siteName: "The Lakes Wildlife",
    type: "website",
    images: [{ url: "/images/species/birds/goldeneye.jpg", alt: "Goldeneye drake on water" }],
  },
};

const NEVER = [
  "On the reserve guides, so no partnership with the people who run the reserves is implied",
  "On the contact, privacy, terms and advertise pages",
  "Inside the text of a post or guide",
  "Next to another advert: there is at most one on any page",
];

type Props = { searchParams: Promise<{ space?: string | string[] }> };

export default async function AdvertisePage({ searchParams }: Props) {
  // ?space=<slot-id> arrives from an empty "advertising space" card; the card for that option names it.
  const { space } = await searchParams;
  const asked = isAdSlotId(space) ? AD_SLOTS[space] : null;

  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-12">
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">Advertising</p>
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Advertise on The Lakes Wildlife
          </h1>
          <p className="text-white/75 text-lg leading-relaxed text-pretty max-w-2xl mb-7">
            Simple options at fixed prices for local businesses and groups. Every advert is labelled on the page, and
            paying for a space does not change what we write.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[var(--copper)] px-6 py-3 text-sm font-semibold text-[var(--fell)] hover:opacity-90 transition"
          >
            Ask through the contact form →
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12">
        {/* Founding offer: these exact words, and never how many places are left. */}
        <div className="rounded-2xl border border-[var(--copper)]/50 bg-white p-6 mb-12">
          <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">Founding advertisers</p>
          <p className="text-[var(--fell)] leading-relaxed text-pretty">
            For the first ten advertisers across the Lakes network sites: half price for your first three months, and your monthly price held for twelve months.
          </p>
        </div>

        <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">Options and prices</p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--fell)] mb-2">Ways to advertise</h2>
        <p className="text-[var(--slate)] text-sm mb-8">All prices are plus VAT. Payment is by invoice; nothing is sold by checkout.</p>

        {/* Each card is a subgrid of five rows (name, price, term, points, button), so the prices, terms and
            buttons line up across a row of cards. */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {AD_OPTION_ORDER.map((id) => {
            const o = AD_OPTIONS[id];
            const { amount, rest } = priceText(o);
            const picked = asked?.option === id;
            const bundle = id === "network-bundle";
            return (
              <div
                key={id}
                id={o.id}
                className={`scroll-mt-24 row-span-5 grid grid-rows-subgrid gap-y-0 rounded-2xl border p-6 lg:px-5 ${bundle ? "bg-[var(--fell)] text-white" : "bg-white"} ${
                  picked ? "border-[var(--copper)] ring-2 ring-[var(--copper)]/40" : bundle ? "border-[var(--fell)]" : "border-[var(--fog)]"
                }`}
              >
                <div className="self-end mb-3">
                  {bundle && (
                    <p className="text-[var(--copper)] text-[11px] font-bold uppercase tracking-widest mb-2">All three Lakes sites</p>
                  )}
                  <h3 className={`font-display text-xl font-bold text-balance ${bundle ? "text-white" : "text-[var(--fell)]"}`}>{o.name}</h3>
                </div>
                <p className="mb-1.5">
                  <span className={`block text-3xl font-bold ${bundle ? "text-white" : "text-[var(--fell)]"}`}>{amount}</span>{" "}
                  <span className={`block text-sm mt-0.5 ${bundle ? "text-white/80" : "text-[var(--fell)]"}`}>{rest}</span>
                </p>
                <p className={`text-xs mb-5 ${bundle ? "text-white/70" : "text-[var(--slate)]"}`}>{o.term}</p>
                <div className="mb-6">
                  <ul className={`space-y-2 text-sm ${bundle ? "text-white/85" : "text-[var(--slate)]"}`}>
                    {o.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5">
                        <span
                          className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${bundle ? "bg-[var(--copper)]" : "bg-[var(--lichen)]"}`}
                          aria-hidden="true"
                        />
                        <span className="text-pretty">{pt}</span>
                      </li>
                    ))}
                  </ul>
                  {o.note && <p className="text-sm text-[var(--slate)] mt-4 leading-relaxed text-pretty">{o.note}</p>}
                  {picked && asked && (
                    <p className={`rounded-lg px-3 py-2 text-xs mt-4 ${bundle ? "bg-white/10 text-white" : "bg-[var(--mist)] text-[var(--fell)]"}`}>
                      You asked about: <strong>{asked.title}</strong>
                    </p>
                  )}
                </div>
                <Link
                  href="/contact"
                  className={`justify-self-start self-end rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                    bundle
                      ? "bg-[var(--copper)] text-[var(--fell)] hover:opacity-90"
                      : "bg-[var(--fell)] text-white hover:bg-[var(--lichen)]"
                  }`}
                >
                  Ask about this
                </Link>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-[var(--fog)] bg-white p-6">
            <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-4">How it works</h2>
            <ol className="space-y-2.5 text-sm text-[var(--slate)] leading-relaxed text-pretty list-decimal pl-5 marker:text-[var(--lichen)] marker:font-semibold">
              <li>
                Tell us which option you would like through the{" "}
                <Link href="/contact" className="text-[var(--lichen)] font-medium underline underline-offset-2 hover:text-[var(--fell)]">
                  contact form
                </Link>
                .
              </li>
              <li>We reply by email, agree the wording and photo with you, and send an invoice.</li>
              <li>Your advert goes live once the invoice is paid.</li>
            </ol>
            <p className="text-sm text-[var(--slate)] leading-relaxed text-pretty mt-4">
              No checkout, and no contract beyond the minimum term. Every advert is labelled Advertisement or Sponsor, and
              paid links are marked as sponsored for search engines.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--fog)] bg-white p-6">
            <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-4">Where adverts never appear</h2>
            <ul className="space-y-2.5 text-sm text-[var(--slate)] leading-relaxed text-pretty">
              {NEVER.map((line) => (
                <li key={line} className="flex gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-[var(--copper)]" aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-[var(--slate)] leading-relaxed text-pretty mt-4">
              An advert is a photo, a few words and a link: no advert networks, tracking cookies or third-party scripts.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
