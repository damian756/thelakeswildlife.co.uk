import type { Species, SpeciesCategory } from "@/lib/types";
import { speciesDescription, speciesTitle } from "@/lib/types";
import { creditFor } from "@/lib/photo-credits";
import { ORG_REF, PAGES_UPDATED, SITE_LAUNCHED, SITE_URL, WEBSITE_ID, breadcrumbList, imageObject } from "@/lib/schema";

// The trail the page's breadcrumb shows (components/SpeciesDetail.tsx).
const categoryLabels: Record<SpeciesCategory, string> = {
  birds: "Birds",
  insects: "Insects",
  plants: "Plants",
  mammals: "Mammals & Wildlife",
};

interface SpeciesJsonLdProps {
  species: Species;
  category: SpeciesCategory;
  slug: string;
}

/**
 * One JSON-LD graph per species page: the page (a WebPage, or an FAQPage when it shows
 * questions), the species it is about (Taxon, with the family and order the page lists),
 * the photo with the credit printed under it, and the breadcrumb the page shows. No byline
 * is shown, so there is no author; the dates are the site's (lib/schema.ts).
 */
export function SpeciesJsonLd({ species, category, slug }: SpeciesJsonLdProps) {
  const pageUrl = `${SITE_URL}/${category}/${slug}`;
  const taxonId = `${pageUrl}#taxon`;
  const imageId = `${pageUrl}#image`;
  const faq = species.faq ?? [];

  const wikipedia =
    species.externalLinks?.wikipedia ??
    (species.wikipediaTitle ? `https://en.wikipedia.org/wiki/${encodeURIComponent(species.wikipediaTitle.replace(/ /g, "_"))}` : undefined);

  const order = species.order ? { "@type": "Taxon", name: species.order, taxonRank: "order" } : undefined;
  const parentTaxon = species.family
    ? { "@type": "Taxon", name: species.family, taxonRank: "family", ...(order && { parentTaxon: order }) }
    : order;

  const graph: object[] = [
    {
      "@type": faq.length > 0 ? "FAQPage" : "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: speciesTitle(species),
      description: speciesDescription(species),
      inLanguage: "en-GB",
      isPartOf: { "@id": WEBSITE_ID },
      breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
      about: { "@id": taxonId },
      ...(species.localImage && { primaryImageOfPage: { "@id": imageId } }),
      datePublished: SITE_LAUNCHED,
      dateModified: PAGES_UPDATED,
      publisher: ORG_REF,
      ...(faq.length > 0 && {
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }),
    },
    {
      "@type": "Taxon",
      "@id": taxonId,
      name: species.scientificName,
      alternateName: species.commonName,
      taxonRank: "species",
      ...(parentTaxon && { parentTaxon }),
      ...(wikipedia && { sameAs: wikipedia }),
      ...(species.localImage && { image: { "@id": imageId } }),
    },
    breadcrumbList(
      [
        ["Home", SITE_URL],
        [categoryLabels[category], `${SITE_URL}/${category}`],
        [species.commonName, pageUrl],
      ],
      `${pageUrl}#breadcrumb`
    ),
  ];
  if (species.localImage) {
    graph.push({ ...imageObject(species.localImage, creditFor(species.localImage)), "@id": imageId });
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }}
    />
  );
}
