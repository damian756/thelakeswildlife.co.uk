// Advertising spaces on The Lakes Wildlife, and the options sold on /advertise
// (stage B, approved by Damian on 11 Nov 2026).
//
// Every sponsor is null at commit. Damian fills one by hand once its invoice is paid:
//   sponsor: { name: "Business name", url: "https://...", text: "Up to 30 words.", image: "/images/...", until: "YYYY-MM-DD" }
// `image` (a path under /public) and `until` (the last day shown) are optional. After `until` the space
// shows as empty again. Every page with a space sets `export const revalidate = 86400`, so a lapsed
// sponsor drops off within a day.
//
// Rules: at most one advert on any page. No advert on the reserve pages (/nature/*), contact, privacy,
// terms, advertise, the 404 page, or a sponsored article. tests/ads.test.mjs checks these.
//
// No imports and only erasable TypeScript, so `node --test tests/*.test.mjs` can load this file directly.

export type Sponsor = {
  name: string;
  /** The sponsor's own site, linked with rel="sponsored noopener". */
  url: string;
  /** At most 30 words. */
  text: string;
  /** Optional photo, a path under /public. */
  image?: string;
  /** Last day shown, "YYYY-MM-DD". After it the space is empty again. */
  until?: string;
};

export type AdOptionId =
  | "section-sponsor"
  | "birdwatching-guide"
  | "home-card"
  | "sponsored-article"
  | "winter-birds"
  | "network-bundle";

export type AdOption = {
  id: AdOptionId;
  name: string;
  /** The figure, e.g. "£35". Always shown with `per` and "plus VAT" (see priceText). */
  price: string;
  /** "a month", "one-off" or the season. */
  per: string;
  /** "3 months minimum", "live for 12 months" or "one payment". */
  term: string;
  /** Empty cards say "from <price> a month plus VAT" for a monthly option. */
  monthly: boolean;
  points: string[];
  /** One plain line under the points. */
  note?: string;
};

/** The cards on /advertise, in this order. */
export const AD_OPTION_ORDER: readonly AdOptionId[] = [
  "section-sponsor",
  "birdwatching-guide",
  "home-card",
  "sponsored-article",
  "winter-birds",
  "network-bundle",
];

export const AD_OPTIONS: Record<AdOptionId, AdOption> = {
  "section-sponsor": {
    id: "section-sponsor",
    name: "Section sponsor",
    price: "£35",
    per: "a month",
    term: "3 months minimum",
    monthly: true,
    points: [
      "One of Birds, Mammals, Insects, Plants, Seasonal or the Fishing guide",
      "Your card shown once on that section's main page, labelled Sponsor",
      "One sponsor per section, never inside the writing",
    ],
    note: "The end of our species and seasonal posts is sold at the same price, with one sponsor for all of them.",
  },
  "birdwatching-guide": {
    id: "birdwatching-guide",
    name: "Birdwatching guide sponsor",
    price: "£35",
    per: "a month",
    term: "3 months minimum",
    monthly: true,
    points: [
      "One card at the end of the birdwatching guide, labelled Sponsor",
      "Suits guided wildlife walks and places to stay",
      "One sponsor at a time",
    ],
  },
  "home-card": {
    id: "home-card",
    name: "Home page card",
    price: "£39",
    per: "a month",
    term: "3 months minimum",
    monthly: true,
    points: [
      "One card on the home page, after the latest posts",
      "Your photo, up to 30 words and a link, labelled Advertisement",
      "One business at a time",
    ],
  },
  "sponsored-article": {
    id: "sponsored-article",
    name: "Sponsored article",
    price: "£99",
    per: "one-off",
    term: "Live for 12 months",
    monthly: false,
    points: [
      "A useful post about something you run, such as a guided wildlife walk",
      "Written with you, checked for facts and labelled Sponsored at the top",
      "Bylined Sponsored by your business, and never presented as a review",
    ],
  },
  "winter-birds": {
    id: "winter-birds",
    name: "Winter birds package",
    price: "£79",
    per: "for November to February",
    term: "One payment",
    monthly: false,
    points: [
      "Sponsor of the Birds section and the winter wildfowl guide together",
      "Four months, while the winter ducks are on the lakes",
    ],
  },
  "network-bundle": {
    id: "network-bundle",
    name: "Lakes network bundle",
    price: "£99",
    per: "a month",
    term: "3 months minimum",
    monthly: true,
    points: [
      "A home page card on The Lakes Guide, Hike The Lakes and The Lakes Wildlife",
      "Plus one guide, area or section sponsorship on each site",
      "About £220 a month plus VAT if bought separately",
    ],
  },
};

/** "<words> plus VAT", with the last word and "plus VAT" held together so "VAT" never sits alone on a line. */
function plusVat(words: string): string {
  return `${words.replace(/ (\S+)$/, " $1")} plus VAT`;
}

/** The figure and the words after it, e.g. { amount: "£35", rest: "a month plus VAT" }. */
export function priceText(option: AdOption): { amount: string; rest: string } {
  return { amount: option.price, rest: plusVat(option.per) };
}

export type AdSlotId =
  | "home-card"
  | "section-birds"
  | "section-mammals"
  | "section-insects"
  | "section-plants"
  | "section-seasonal"
  | "section-fishing"
  | "birdwatching-guide"
  | "seasonal-winter-wildfowl"
  | "post-end";

export type AdSlotConfig = {
  /** The option id on /advertise. */
  option: AdOptionId;
  /** Names the space, e.g. on /advertise when a visitor arrives from its empty card. */
  title: string;
  /** Shown on a filled card. */
  label: "Advertisement" | "Sponsor";
  /** Empty card: the title naming the space and one sentence. */
  cardTitle: string;
  pitch: string;
  /** Empty card price line, in place of the option's name. */
  product?: string;
  sponsor: Sponsor | null;
};

const section = (name: string, where: string): AdSlotConfig => ({
  option: "section-sponsor",
  title: `Sponsor of the ${name} section`,
  label: "Sponsor",
  cardTitle: `Sponsor the ${name} section`,
  pitch: `Your business shown once on this page, ${where}, labelled Sponsor.`,
  sponsor: null,
});

export const AD_SLOTS: Record<AdSlotId, AdSlotConfig> = {
  // Home page, after the latest posts.
  "home-card": {
    option: "home-card",
    title: "Home page card",
    label: "Advertisement",
    cardTitle: "Your business on The Lakes Wildlife home page",
    pitch: "One local business on the home page, labelled as an advert, with a photo, a line about you and a link.",
    sponsor: null,
  },

  // Section pages, after the species list or the guides.
  "section-birds": section("Birds", "after the species"),
  "section-mammals": section("Mammals", "after the species"),
  "section-insects": section("Insects", "after the species"),
  "section-plants": section("Plants", "after the species"),
  "section-seasonal": section("Seasonal", "after the guides"),

  // The fishing guide names clubs, a fishery and tackle shops: do not sell this space to one of them,
  // since the card sits just after the guide's text and would read as an endorsement.
  "section-fishing": {
    option: "section-sponsor",
    title: "Sponsor of the Fishing guide",
    label: "Sponsor",
    cardTitle: "Sponsor the Fishing guide",
    pitch: "Your business shown once at the end of this guide, labelled Sponsor. Sponsors never appear inside the guide's text.",
    sponsor: null,
  },

  // The birdwatching guide names the Collins Bird Guide, the Merlin app and the reserves: do not sell
  // this space to a business selling one of those, for the same reason.
  "birdwatching-guide": {
    option: "birdwatching-guide",
    title: "Sponsor of the birdwatching guide",
    label: "Sponsor",
    cardTitle: "Sponsor the birdwatching guide",
    pitch: "Your business shown once at the end of this guide, labelled Sponsor. Sponsors never appear inside the guide's text.",
    sponsor: null,
  },

  // /seasonal/winter-wildfowl, sold with the Birds section as the winter birds package (November to
  // February). When the package is sold, give the same sponsor to "section-birds" for the same dates.
  "seasonal-winter-wildfowl": {
    option: "winter-birds",
    title: "Sponsor of the winter wildfowl guide",
    label: "Sponsor",
    cardTitle: "Sponsor the winter wildfowl guide",
    pitch: "One business at the end of this guide and on the Birds page from November to February, labelled Sponsor.",
    sponsor: null,
  },

  // End of every species and seasonal blog post (POST_END_CATEGORIES), one sponsor for all of them.
  // Some of these posts name the Ullswater Steamers, the Esthwaite Water fishery and a tearoom: do not
  // sell this space to a business the posts name.
  "post-end": {
    option: "section-sponsor",
    title: "Sponsor of the species and seasonal posts",
    label: "Sponsor",
    cardTitle: "Sponsor our species and seasonal posts",
    pitch: "One business shown once at the end of each species and seasonal post, labelled Sponsor and never inside the writing.",
    product: "Post sponsor",
    sponsor: null,
  },
};

/** Blog categories whose posts end with the "post-end" space. */
export const POST_END_CATEGORIES: readonly string[] = ["species-spotlight", "seasonal-watching"];

/** True when a blog post shows the "post-end" space: species and seasonal posts, never a sponsored article. */
export function hasPostEnd(post: { category: string; sponsor?: unknown }): boolean {
  return !post.sponsor && POST_END_CATEGORIES.includes(post.category);
}

export function isAdSlotId(id: unknown): id is AdSlotId {
  return typeof id === "string" && Object.prototype.hasOwnProperty.call(AD_SLOTS, id);
}

/** The sponsor to show today, or null if the space is empty or the sponsor's `until` date has passed. */
export function activeSponsor(slot: AdSlotConfig, today: Date = new Date()): Sponsor | null {
  const s = slot.sponsor;
  if (!s) return null;
  if (s.until && s.until < today.toISOString().slice(0, 10)) return null;
  return s;
}

/** Link from an empty card to the advertise page, naming the space. */
export function advertiseHref(id: AdSlotId): string {
  return `/advertise?space=${id}#${AD_SLOTS[id].option}`;
}

/** The empty card's price line, e.g. "Section sponsor · from £35 a month plus VAT". */
export function emptyPriceLine(id: AdSlotId): string {
  const slot = AD_SLOTS[id];
  const o = AD_OPTIONS[slot.option];
  const name = slot.product ?? o.name;
  return o.monthly ? `${name} · from ${o.price} ${plusVat("a month")}` : `${name} · ${o.price} ${plusVat(o.per)}`;
}
