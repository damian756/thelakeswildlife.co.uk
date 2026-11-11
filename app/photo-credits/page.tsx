import type { Metadata } from "next";
import Link from "next/link";
import { getAllSpecies } from "@/lib/species";
import { BLOG_POSTS } from "@/content/blog/posts";
import { allPhotoCredits, creditFor, wikipediaHero } from "@/lib/photo-credits";
import { CreditText } from "@/components/PhotoCredit";
import type { SpeciesCategory } from "@/lib/types";

const title = "Photo Credits";
const description = "Authors and licences of the Wikimedia Commons photographs and botanical plates used on The Lakes Wildlife.";
const url = "https://www.thelakeswildlife.co.uk/photo-credits";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: {
    title,
    description,
    url,
    siteName: "The Lakes Wildlife",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/images/species/birds/osprey.jpg", width: 600, height: 400, alt: "Osprey perched on a branch" }],
  },
  twitter: { card: "summary_large_image", title, description },
};

const SECTIONS: { category: SpeciesCategory; label: string }[] = [
  { category: "birds", label: "Birds" },
  { category: "insects", label: "Insects" },
  { category: "plants", label: "Plants" },
  { category: "mammals", label: "Mammals & Wildlife" },
];

export default function PhotoCreditsPage() {
  const heroes = BLOG_POSTS.filter((p) => p.heroWikipediaTitle && !p.heroLocalSrc);
  const speciesPhotos = new Set(
    SECTIONS.flatMap(({ category }) => getAllSpecies(category).map((s) => s.localImage).filter(Boolean) as string[])
  );
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-[var(--fell)] mb-4">Photo credits</h1>
      <p className="text-sm text-[var(--slate)] leading-relaxed mb-8">
        The species photographs and botanical plates on this site come from Wikimedia Commons. Each credit below
        (author, licence and a link to the file) is taken from the file&rsquo;s own Commons page. Where its metadata gives
        the author only as a link, we name the person the file page names, and each plate is credited with the book and
        year the file page gives. If you are the author of a photo and something here is wrong, please use the{" "}
        <Link href="/contact" className="text-[var(--lichen)] hover:underline">contact form</Link>.
      </p>

      {SECTIONS.map(({ category, label }) => {
        const species = getAllSpecies(category).filter((s) => s.localImage);
        const seen = new Set<string>();
        return (
          <section key={category} id={category} className="mb-10 scroll-mt-20">
            <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">{label}</h2>
            <ul className="space-y-1.5 text-sm text-[var(--slate)]">
              {species
                .filter((s) => (seen.has(s.localImage!) ? false : (seen.add(s.localImage!), true)))
                .map((s) => (
                  <li key={s.id}>
                    <Link href={`/${category}/${s.id}`} className="font-medium text-[var(--fell)] hover:underline">
                      {s.commonName}
                    </Link>
                    . <CreditText credit={creditFor(s.localImage!)} />
                  </li>
                ))}
            </ul>
          </section>
        );
      })}

      <section id="places" className="mb-10 scroll-mt-20">
        <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">Reserve and other photos</h2>
        <ul className="space-y-1.5 text-sm text-[var(--slate)]">
          {Object.entries(allPhotoCredits())
            .filter(([src]) => !speciesPhotos.has(src))
            .map(([src, credit]) => (
              <li key={src}>
                <CreditText credit={credit} />
              </li>
            ))}
        </ul>
      </section>

      <section id="blog" className="mb-10 scroll-mt-20">
        <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">Blog photos</h2>
        <ul className="space-y-1.5 text-sm text-[var(--slate)]">
          {heroes.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="font-medium text-[var(--fell)] hover:underline">
                {p.title}
              </Link>
              . <CreditText credit={wikipediaHero(p.heroWikipediaTitle!)} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
