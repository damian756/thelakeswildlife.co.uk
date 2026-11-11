// JSON-LD identities shared by every page. The WebSite and Organization are described in
// full on the home page only; other pages refer to them by @id, so no page repeats them
// with different data.
//
// The Lakes Guide, Hike The Lakes and thelakes.network are sister sites, not profiles of
// this organisation, so they are not in sameAs: the footer links to them instead.
// Churchtown Media Ltd publishes the site: it is the parentOrganization, with the @id
// churchtownmedia.co.uk and the other Lakes sites use for it.
import type { PhotoCredit } from "./photo-credits";

export const SITE_URL = "https://www.thelakeswildlife.co.uk";
export const SITE_NAME = "The Lakes Wildlife";
export const WEBSITE_ID = `${SITE_URL}/#website`;
export const ORG_ID = `${SITE_URL}/#organization`;
export const PUBLISHER_ID = "https://www.churchtownmedia.co.uk/#organization";

/** The site, by reference (publisher of every page; author where no byline is shown). */
export const ORG_REF = { "@type": "Organization", "@id": ORG_ID, name: SITE_NAME, url: SITE_URL };

export const CHURCHTOWN_MEDIA = {
  "@type": "Organization",
  "@id": PUBLISHER_ID,
  name: "Churchtown Media",
  legalName: "Churchtown Media Ltd",
  url: "https://www.churchtownmedia.co.uk",
  // Company No. 16960442 (Companies House).
  sameAs: ["https://find-and-update.company-information.service.gov.uk/company/16960442"],
};

export const ORGANIZATION = {
  "@type": "Organization",
  "@id": ORG_ID,
  name: SITE_NAME,
  url: SITE_URL,
  // The site icon (app/icon.svg); there is no other logo file.
  logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.svg` },
  parentOrganization: { "@id": PUBLISHER_ID },
};

export const WEBSITE = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  description: "Independent guide to wildlife in the Lake District: birds, insects, plants and mammals.",
  publisher: { "@id": ORG_ID },
  inLanguage: "en-GB",
};

/**
 * The author a page shows. Pass the name exactly as the page's byline or author box
 * prints it ("Damian" on posts, "Damian Roche" on the fishing and seasonal guides).
 */
export function personAuthor(name: string) {
  return { "@type": "Person", name, url: "https://www.churchtownmedia.co.uk/about" };
}

/**
 * Dates for the guide and species pages, from git: the site went live as The Lakes Wildlife
 * on 9 Mar 2026 (commit f8ae510), and every one of these pages last changed on 11 Nov 2026.
 * The earlier "2024-04-01" and "2025-03-01" were invented.
 */
export const SITE_LAUNCHED = "2026-03-09";
export const PAGES_UPDATED = "2026-11-11";

/** A BreadcrumbList for the trail a page shows: [name, absolute URL] from Home onwards. */
export function breadcrumbList(trail: [string, string][], id?: string) {
  return {
    "@type": "BreadcrumbList",
    ...(id && { "@id": id }),
    itemListElement: trail.map(([name, item], i) => ({ "@type": "ListItem", position: i + 1, name, item })),
  };
}

/**
 * An ImageObject for a stored photo. The credit fields repeat the visible credit line
 * (components/PhotoCredit.tsx) and are left out when the page shows no author or licence.
 */
export function imageObject(src: string, credit: PhotoCredit | null) {
  const url = src.startsWith("/") ? `${SITE_URL}${src}` : src;
  const img: Record<string, unknown> = { "@type": "ImageObject", url, contentUrl: url };
  if (credit?.artist && credit.licence) {
    img.creator = { "@type": "Person", name: credit.artist };
    img.creditText = creditText(credit);
    if (credit.licenceUrl) img.license = credit.licenceUrl;
    img.acquireLicensePage = credit.page;
  }
  return img;
}

/** The credit line as plain text, worded as components/PhotoCredit.tsx shows it. */
export function creditText(c: PhotoCredit): string {
  const who = c.title
    ? `“${c.title}” by ${c.artist}`
    : c.kind === "illustration"
      ? `Illustration: ${c.artist}${c.source ? `, ${c.source}${c.year ? ` (${c.year})` : ""}` : ""}`
      : `Photo: ${c.artist}`;
  return `${who}, ${c.licence}, via Wikimedia Commons`;
}
