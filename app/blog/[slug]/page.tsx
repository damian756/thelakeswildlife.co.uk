import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS, getPostBySlug } from "@/content/blog/posts";
import { creditFor, wikipediaHero } from "@/lib/photo-credits";
import { CreditText } from "@/components/PhotoCredit";
import { ClickableImage } from "@/components/ClickableImage";
import { siteImage } from "@/lib/site-image";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://www.thelakeswildlife.co.uk/blog/${slug}`;
  // Served through this site: Wikimedia refuses some crawlers (Facebook gets 403).
  const remoteHero = !post.heroLocalSrc && post.heroWikipediaTitle
    ? wikipediaHero(post.heroWikipediaTitle)?.src
    : undefined;
  const ogImage = post.heroLocalSrc
    ? `https://www.thelakeswildlife.co.uk${post.heroLocalSrc}`
    : remoteHero
      ? `https://www.thelakeswildlife.co.uk${siteImage(remoteHero, 1200)}`
      : undefined;
  const images = ogImage ? [{ url: ogImage, alt: post.heroAlt }] : undefined;
  return {
    title: post.title,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      siteName: "The Lakes Wildlife",
      type: "article",
      publishedTime: post.date,
      images,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.metaDescription, images },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // The hero is the stored photo, or the Commons file recorded for the Wikipedia
  // article in content/species/photo-credits.json, with its credit.
  const wikiHero = post.heroLocalSrc == null && post.heroWikipediaTitle != null ? wikipediaHero(post.heroWikipediaTitle) : null;
  const heroSrc = post.heroLocalSrc ?? wikiHero?.src ?? null;
  const heroCredit = post.heroLocalSrc ? creditFor(post.heroLocalSrc) : wikiHero;
  const url = `https://www.thelakeswildlife.co.uk/blog/${slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
    {
      "@type": "Article",
      "@id": url + "#article",
      headline: post.title,
      description: post.metaDescription,
      url,
      mainEntityOfPage: url,
      datePublished: post.date,
      dateModified: post.updated ?? post.date,
      author: { "@id": "https://www.churchtownmedia.co.uk/about#founder" },
      publisher: { "@id": "https://www.thelakeswildlife.co.uk/#organization" },
      keywords: post.tags.join(", "),
      ...(heroSrc && {
        image: {
          "@type": "ImageObject",
          url: heroSrc.startsWith("/") ? `https://www.thelakeswildlife.co.uk${heroSrc}` : heroSrc,
          width: 800,
        },
      }),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.thelakeswildlife.co.uk" },
        { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.thelakeswildlife.co.uk/blog" },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />

      {heroSrc && (
        <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[var(--fog)]">
          <ClickableImage
            src={heroSrc}
            alt={post.heroAlt}
            className="w-full h-full object-cover object-center"
            fill
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 sm:px-6 pointer-events-none">
            <p className="text-xs text-white/85 [&_a]:pointer-events-auto [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
              <CreditText credit={heroCredit} />
            </p>
          </div>
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--slate)] mb-6 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[var(--lichen)] transition">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[var(--lichen)] transition">Blog</Link>
          <span>/</span>
          <span className="text-[var(--slate)]">{post.categoryLabel}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-[var(--lichen)]">{post.categoryLabel}</span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--fell)] mt-2 mb-3 leading-tight">{post.title}</h1>
          <p className="text-sm text-[var(--slate)]">{formatDate(post.date)}</p>
        </div>

        {/* Intro */}
        <p className="text-lg text-[var(--slate)] mb-8 leading-relaxed">{post.intro}</p>

        {/* Sections */}
        {post.sections.map((section) => (
          <div key={section.heading} className="mb-8">
            <h2 className="font-display text-xl font-bold text-[var(--fell)] mb-3">{section.heading}</h2>
            {section.body.map((para, i) => (
              <p key={i} className="text-[var(--slate)] text-sm leading-relaxed mb-3">{para}</p>
            ))}
            {section.imageAfter && (
              <div className="mt-5 rounded-xl overflow-hidden border border-[var(--reed)]">
                <div className="relative w-full h-72 sm:h-80 md:h-96">
                  <ClickableImage
                    src={section.imageAfter.src}
                    alt={section.imageAfter.alt}
                    caption={section.imageAfter.caption}
                    fill
                    className="w-full h-full object-cover"
                    style={{ objectPosition: section.imageAfter.objectPosition ?? "center center" }}
                  />
                </div>
                {section.imageAfter.caption && (
                  <p className="text-xs text-[var(--slate)] px-4 py-2 bg-[var(--fog)]/40 text-center leading-relaxed">
                    {section.imageAfter.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Internal links */}
        {post.links && post.links.length > 0 && (
          <div className="mt-10 rounded-xl bg-[var(--fog)] p-5">
            <h2 className="font-display text-lg font-bold text-[var(--fell)] mb-3">More on this site</h2>
            <ul className="space-y-2 text-sm">
              {post.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-[var(--lichen)] hover:underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-[var(--fog)]">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-[var(--fog)] text-[var(--slate)] px-2.5 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Author bio */}
        <div className="mt-8 p-5 rounded-xl bg-[var(--fog)] border border-[var(--reed)]">
          <p className="text-xs font-bold uppercase tracking-wider text-[var(--lichen)] mb-1">About the author</p>
          <p className="text-sm font-semibold text-[var(--fell)]">Damian</p>
          <p className="text-sm text-[var(--slate)] mt-1 leading-relaxed">
            Damian has been walking the Lake District fells for decades. Ex-army, outdoor enthusiast. Keeps a yearly bird tally. Still gets up at five.
          </p>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link href="/blog" className="text-[var(--lichen)] font-medium hover:underline text-sm">← Back to all posts</Link>
        </div>
      </div>
    </>
  );
}
