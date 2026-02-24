import { notFound } from "next/navigation";
import Link from "next/link";

const seasonalPages: Record<string, { title: string; period: string }> = {
  "pink-footed-geese": { title: "Pink-footed geese", period: "October–March" },
  "wader-migration": { title: "Wader migration", period: "Spring & autumn" },
  "breeding-birds": { title: "Breeding birds", period: "April–July" },
  "winter-wildfowl": { title: "Winter wildfowl", period: "November–February" },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return Object.keys(seasonalPages).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const page = seasonalPages[slug];
  if (!page) return {};
  return {
    title: `${page.title} — Sefton Coast`,
    description: `${page.title} on the Sefton Coast. ${page.period}. When and where to see them.`,
  };
}

export default async function SeasonalSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = seasonalPages[slug];
  if (!page) notFound();
  return (
    <div className="mx-auto max-w-3xl px-4 py-10">
      <nav className="text-sm text-[var(--slate)]/80 mb-6">
        <Link href="/seasonal" className="hover:text-[var(--marsh)]">Seasonal guides</Link>
        <span className="mx-2">/</span>
        <span className="text-[var(--ink)]">{page.title}</span>
      </nav>
      <h1 className="text-3xl font-bold text-[var(--forest)]">{page.title}</h1>
      <p className="text-[var(--slate)] mt-2">{page.period}</p>
      <section className="prose prose-[var(--slate)] max-w-none mt-8">
        <p>Content to come for this season.</p>
      </section>
    </div>
  );
}
