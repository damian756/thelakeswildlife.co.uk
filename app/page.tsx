import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getAllSpecies } from "@/lib/species";
import { getWikipediaImage } from "@/lib/wikipedia";
import { BLOG_POSTS } from "@/content/blog/posts";
import { PhotoGallery } from "@/components/PhotoGallery";

const title = "The Lakes Wildlife | Birds, Nature & Wildlife in the Lake District";
const description =
  "Independent guide to wildlife in the Lake District: RSPB Haweswater, ospreys, red deer, red squirrels, and a database of birds, insects, plants and mammals.";
const url = "https://www.thelakeswildlife.co.uk";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.thelakeswildlife.co.uk/#website",
      url: "https://www.thelakeswildlife.co.uk",
      name: "The Lakes Wildlife",
      description: "Independent guide to wildlife in the Lake District: birds, insects, plants and mammals.",
      publisher: { "@id": "https://www.thelakeswildlife.co.uk/#organization" },
      inLanguage: "en-GB",
    },
    {
      "@type": "Organization",
      "@id": "https://www.thelakeswildlife.co.uk/#organization",
      name: "The Lakes Wildlife",
      url: "https://www.thelakeswildlife.co.uk",
      logo: {
        "@type": "ImageObject",
        url: "https://www.thelakeswildlife.co.uk/og-default.png",
        width: 1200,
        height: 630,
      },
      sameAs: [
        "https://www.thelakesguide.co.uk",
        "https://www.hikethelakes.com",
        "https://thelakes.network",
        "https://www.linkedin.com/company/churchtownmedia",
        "https://churchtownmedia.co.uk",
      ],
    },
  ],
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

export default async function HomePage() {
  const birdCount = getAllSpecies("birds").length;
  const insectCount = getAllSpecies("insects").length;
  const plantCount = getAllSpecies("plants").length;
  const mammalCount = getAllSpecies("mammals").length;
  const totalCount = birdCount + insectCount + plantCount + mammalCount;

  // Fetch 3 recent blog post hero images
  const recentPosts = BLOG_POSTS.slice(-3).reverse();
  const blogImages = await Promise.all(
    recentPosts.map((p) =>
      p.heroLocalSrc
        ? Promise.resolve(p.heroLocalSrc)
        : p.heroWikipediaTitle != null
          ? getWikipediaImage(p.heroWikipediaTitle).then((img) => img?.src ?? null)
          : Promise.resolve(null)
    )
  );

  const speciesCategories = [
    {
      href: "/birds",
      label: "Birds",
      count: birdCount,
      desc: "Waders, wildfowl, raptors and passerines",
      localImage: "/images/species/birds/goldeneye.jpg",
    },
    {
      href: "/insects",
      label: "Insects",
      count: insectCount,
      desc: "Butterflies, moths and invertebrates",
      localImage: "/images/species/insects/emperor-moth.jpg",
    },
    {
      href: "/plants",
      label: "Plants",
      count: plantCount,
      desc: "Upland and moorland flora",
      localImage: "/images/species/plants/heather.jpg",
    },
    {
      href: "/mammals",
      label: "Mammals",
      count: mammalCount,
      desc: "Including red squirrels at Grizedale",
      localImage: "/images/species/mammals/red-squirrel.jpg",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[520px]">
          {/* Left panel */}
          <div className="bg-[var(--fell)] flex flex-col justify-center px-8 md:px-14 py-16 lg:py-20 relative z-10">
            <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-4">
              Haweswater · Grizedale · Martindale
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Wildlife in the<br />
              <span className="text-[var(--copper)]">Lake District.</span>
            </h1>
            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-lg">
              {totalCount}+ species recorded. An independent guide to the birds, insects, plants
              and mammals of the Lake District.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/nature/haweswater-rspb"
                className="rounded-lg bg-[var(--copper)] px-6 py-3 text-sm font-semibold text-[var(--fell)] hover:opacity-90 transition"
              >
                RSPB Haweswater →
              </Link>
              <Link
                href="/birds"
                className="rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Species database
              </Link>
            </div>
          </div>

          {/* Right panel — hero image */}
          <div className="relative min-h-[300px] lg:min-h-0 overflow-hidden bg-[var(--fell)]">
            <Image
              src="/images/species/birds/osprey.jpg"
              alt="Osprey in flight over the Lake District"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--fell)]/40 via-transparent to-transparent lg:from-transparent" />
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-8 lg:h-10">
            <path d="M0 40 Q360 0 720 20 Q1080 40 1440 10 L1440 40 Z" fill="var(--mist)" />
          </svg>
        </div>
      </section>

      {/* ── STATS STRIP ──────────────────────────────────────── */}
      <section className="bg-[var(--fog)] border-b border-[var(--reed)]/30">
        <div className="mx-auto max-w-6xl px-4 py-5">
          <div className="flex flex-wrap gap-6 md:gap-10 items-center justify-center md:justify-start text-sm text-[var(--slate)]">
            <span className="flex items-center gap-2">
              <strong className="text-[var(--fell)] font-bold">{totalCount}+</strong> species recorded
            </span>
            <span className="flex items-center gap-2">
              <strong className="text-[var(--fell)] font-bold">Ospreys</strong> at RSPB Haweswater
            </span>
            <span className="flex items-center gap-2">
              <strong className="text-[var(--fell)] font-bold">Free entry</strong> to RSPB Haweswater
            </span>
            <span className="flex items-center gap-2">
              <strong className="text-[var(--fell)] font-bold">214</strong> Wainwright fells
            </span>
          </div>
        </div>
      </section>

      {/* ── SPECIES DATABASE ─────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-12">
        <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">
          Species database
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--fell)] mb-3">
          What lives here
        </h2>
        <p className="text-[var(--slate)] max-w-2xl mb-8 leading-relaxed">
          From ospreys at RSPB Haweswater to red deer in Martindale and red squirrels in Grizedale, the Lake District holds some of the most important wildlife in England.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {speciesCategories.map(({ href, label, count, desc, localImage }) => (
            <Link
              key={href}
              href={href}
              className="card-hover group relative rounded-2xl overflow-hidden border border-[var(--fog)] bg-white block"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-[var(--fog)]">
                <Image
                  src={localImage}
                  alt={label}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 25vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <span className="absolute bottom-3 left-4 text-2xl font-bold text-white">
                  {count}
                </span>
              </div>
              {/* Text */}
              <div className="p-4">
                <h3 className="font-semibold text-[var(--fell)] mb-0.5">{label}</h3>
                <p className="text-sm text-[var(--slate)]/80 leading-snug">{desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── NATURE & COAST ───────────────────────────────────── */}
      <section className="bg-[var(--fog)] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">
            Reserves & guides
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--fell)] mb-8">
            Nature & coast
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                href: "/nature/haweswater-rspb",
                title: "RSPB Haweswater",
                desc: "Ospreys, goldeneye, red deer. The flagship Lake District wildlife site. Get there early at weekends.",
                tag: "Reserve guide",
              },
              {
                href: "/nature/grizedale-forest",
                title: "Grizedale Forest",
                desc: "Red squirrels, red deer, woodland birds. Miles of trails through Forestry England woodland.",
                tag: "Reserve guide",
              },
              {
                href: "/birdwatching-guide",
                title: "Birdwatching Guide",
                desc: "Best spots by season, what to bring, and how to get started.",
                tag: "Practical guide",
              },
              {
                href: "/seasonal",
                title: "Seasonal Guides",
                desc: "Osprey season, red deer rut, red squirrel watching, winter wildfowl. When to come and what to expect.",
                tag: "4 guides",
              },
            ].map(({ href, title, desc, tag }) => (
              <Link
                key={href}
                href={href}
                className="card-hover group block rounded-2xl border border-[var(--reed)]/40 bg-white p-5 hover:border-[var(--lichen)]/50"
              >
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[var(--lichen)] bg-[var(--lichen)]/10 px-2 py-0.5 rounded-full mb-3">
                  {tag}
                </span>
                <h3 className="font-semibold text-[var(--fell)] mb-2 group-hover:text-[var(--lichen)] transition">
                  {title}
                </h3>
                <p className="text-sm text-[var(--slate)]/80 leading-relaxed">{desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BLOG ─────────────────────────────────────────────── */}
      {recentPosts.length > 0 && (
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">
              From the blog
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--fell)]">
              Damian&apos;s notes
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm font-medium text-[var(--lichen)] hover:text-[var(--fell)] transition hidden sm:block"
          >
            All posts →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card-hover group block rounded-2xl border border-[var(--fog)] bg-white overflow-hidden"
            >
              <div className="relative h-44 overflow-hidden bg-[var(--fog)]">
                {blogImages[i] ? (
                  <Image
                    src={blogImages[i]!}
                    alt={post.heroAlt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[var(--lichen)] to-[var(--fell)]" />
                )}
              </div>
              <div className="p-5">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--lichen)]">
                  {post.categoryLabel}
                </span>
                <h3 className="mt-1 font-semibold text-[var(--fell)] leading-snug mb-2 group-hover:text-[var(--lichen)] transition">
                  {post.title}
                </h3>
                <p className="text-xs text-[var(--slate)]/60">{formatDate(post.date)}</p>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-6 sm:hidden">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--lichen)] hover:text-[var(--fell)] transition"
          >
            All posts →
          </Link>
        </div>
      </section>
      )}

      {/* ── GALLERY ──────────────────────────────────────────── */}
      <section className="bg-[var(--fog)] py-14">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-2">
                From the fells
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[var(--fell)] mb-1">
                Photos from the Lake District
              </h2>
              <p className="text-[var(--slate)] text-sm">Real shots. No stock, no AI. Click any photo to enlarge.</p>
            </div>
            <Link
              href="/nature/haweswater-rspb"
              className="text-sm font-medium text-[var(--lichen)] hover:text-[var(--fell)] transition hidden sm:block"
            >
              Reserve guide →
            </Link>
          </div>
          <PhotoGallery
            photos={[
              { src: "/images/species/birds/osprey.jpg", alt: "Osprey in flight over the Lake District", caption: "Osprey at RSPB Haweswater. The reintroduction has been a success." },
              { src: "/images/species/mammals/red-squirrel.jpg", alt: "Red squirrel in Grizedale Forest", caption: "Red squirrel in Grizedale. One of the last strongholds in England." },
              { src: "/images/species/birds/goldeneye.jpg", alt: "Goldeneye on a Lake District tarn", caption: "Goldeneye and other winter wildfowl at Haweswater and Ullswater." },
              { src: "/images/species/plants/heather.jpg", alt: "Heather moorland in the Lake District", caption: "Heather moorland. The fells hold rare plants in the right habitats." },
              { src: "/images/species/insects/emperor-moth.jpg", alt: "Emperor moth on upland heath", caption: "Emperor moth. Common on heather moorland in spring and summer." },
              { src: "/images/species/mammals/red-squirrel.jpg", alt: "Red squirrel in woodland", caption: "Red squirrels at Grizedale and Foulshaw Moss. Go early for the best chance." },
            ]}
          />
          <div className="mt-5 sm:hidden text-center">
            <Link href="/nature/haweswater-rspb" className="text-sm text-[var(--lichen)] font-medium">Reserve guide →</Link>
          </div>
        </div>
      </section>

      {/* ── NETWORK BANNER ───────────────────────────────────── */}
      <section className="bg-[var(--fell)] text-white py-10">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-2">
            The Lakes Network
          </p>
          <p className="text-white/80 text-sm max-w-2xl mb-5">
            Three guides covering the Lake District. Wildlife, walks, villages and accommodation.
          </p>
          <div className="flex flex-wrap gap-3 text-sm">
            {[
              { href: "https://www.thelakesguide.co.uk", label: "The Lakes Guide" },
              { href: "https://www.hikethelakes.com", label: "Hike The Lakes" },
              { href: "https://thelakes.network", label: "TheLakes.network" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 rounded-lg px-4 py-2 text-white/70 hover:text-white hover:border-white/40 transition"
              >
                {label} →
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
