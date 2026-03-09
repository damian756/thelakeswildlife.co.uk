import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { BLOG_POSTS, getPostBySlug } from "@/content/blog/posts";
import { getWikipediaImage } from "@/lib/wikipedia";
import { ClickableImage } from "@/components/ClickableImage";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  const url = `https://www.thelakeswildlife.co.uk/blog/${slug}`;
  return {
    title: `${post.title} | The Lakes Wildlife`,
    description: post.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description: post.metaDescription,
      url,
      siteName: "The Lakes Wildlife",
      type: "article",
      publishedTime: post.date,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.metaDescription },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const heroImage = (post.heroLocalSrc != null || post.heroWikipediaTitle == null)
    ? null
    : await getWikipediaImage(post.heroWikipediaTitle);
  const heroSrc = post.heroLocalSrc ?? heroImage?.src ?? null;
  const heroPageUrl = heroImage?.pageUrl ?? null;
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
      dateModified: post.date,
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
          {heroPageUrl && (
            <div className="absolute bottom-0 left-0 right-0 p-6 pointer-events-none">
              <p className="text-xs text-white/60">
                Image:{" "}
                <a href={heroPageUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white/80 pointer-events-auto">
                  Wikimedia Commons
                </a>
              </p>
            </div>
          )}
        </div>
      )}

      <div className="mx-auto max-w-3xl px-4 py-10">
        {/* Breadcrumb */}
        <nav className="text-sm text-[var(--slate)]/60 mb-6 flex items-center gap-1.5 flex-wrap">
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
          <p className="text-sm text-[var(--slate)]/60">{formatDate(post.date)}</p>
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
                  <p className="text-xs text-[var(--slate)]/60 px-4 py-2 bg-[var(--fog)]/40 text-center leading-relaxed">
                    {section.imageAfter.caption}
                  </p>
                )}
              </div>
            )}
          </div>
        ))}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-6 border-t border-[var(--fog)]">
            {post.tags.map((tag) => (
              <span key={tag} className="text-xs bg-[var(--fog)] text-[var(--slate)]/70 px-2.5 py-1 rounded-full">
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
