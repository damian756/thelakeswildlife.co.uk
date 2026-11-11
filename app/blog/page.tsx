import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS } from "@/content/blog/posts";
import { wikipediaHero } from "@/lib/photo-credits";
import { PhotoCredits } from "@/components/PhotoCredit";
import { BlogListClient } from "@/components/BlogListClient";

const title = "Wildlife Blog";
const description =
  "Damian's notes from the Lake District: conservation news, species spotlights, seasonal watching guides, habitat guides and wildlife photography tips.";
const url = "https://www.thelakeswildlife.co.uk/blog";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "website", images: [{ url: "/images/species/mammals/badger.jpg", alt: "A badger in long grass" }] },
  twitter: { card: "summary_large_image", title, description },
};

export default async function BlogIndexPage() {
  const postsWithImages = await Promise.all(
    BLOG_POSTS.map(async (post) => ({
      slug: post.slug,
      category: post.category,
      categoryLabel: post.categoryLabel,
      title: post.title,
      date: post.date,
      metaDescription: post.metaDescription,
      heroAlt: post.heroAlt,
      tags: post.tags,
      heroSrc: post.heroLocalSrc != null
          ? post.heroLocalSrc
          : post.heroWikipediaTitle != null
            ? wikipediaHero(post.heroWikipediaTitle)?.src ?? null
            : null,
    }))
  );

  return (
    <div>
      {/* Header */}
      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <nav className="text-sm text-white/80 mb-4 flex items-center gap-1.5">
            <Link href="/" className="hover:text-white/80 transition">Home</Link>
            <span>/</span>
            <span className="text-white/80">Blog</span>
          </nav>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">Wildlife Blog</h1>
          <p className="text-white/70 max-w-2xl leading-relaxed">
            Notes from the Lake District: conservation, species spotlights, seasonal guides, habitat and photography.
          </p>
        </div>
      </div>

      {/* Interactive list: client component handles search + filter */}
      <BlogListClient posts={postsWithImages} />
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <PhotoCredits
          items={BLOG_POSTS.map((p) =>
            p.heroLocalSrc
              ? { label: p.heroAlt, src: p.heroLocalSrc }
              : { label: p.heroAlt, credit: p.heroWikipediaTitle ? wikipediaHero(p.heroWikipediaTitle) : null }
          )}
        />
      </div>
    </div>
  );
}
