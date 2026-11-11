import Link from "next/link";

import type { Metadata } from "next";

const BASE = "https://www.thelakeswildlife.co.uk";
const title = "Nature Reserves | The Lakes Wildlife";
const description = "Guides to nature reserves in and around the Lake District: RSPB Haweswater, Grizedale Forest, Foulshaw Moss, Leighton Moss and more.";
const url = `${BASE}/nature`;

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const pageJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": url,
      name: "Lake District Nature Reserves",
      description,
      url,
      publisher: { "@id": `${BASE}/#organization` },
      breadcrumb: { "@id": url + "#breadcrumb" },
    },
    {
      "@type": "BreadcrumbList",
      "@id": url + "#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BASE },
        { "@type": "ListItem", position: 2, name: "Nature Reserves", item: url },
      ],
    },
    {
      "@type": "ItemList",
      name: "Lake District Nature Reserves",
      numberOfItems: 5,
      itemListElement: [
        { "@type": "ListItem", position: 1, url: `${BASE}/nature/haweswater-rspb`, name: "RSPB Haweswater Reserve" },
        { "@type": "ListItem", position: 2, url: `${BASE}/nature/grizedale-forest`, name: "Grizedale Forest" },
        { "@type": "ListItem", position: 3, url: `${BASE}/nature/foulshaw-moss`, name: "Foulshaw Moss" },
        { "@type": "ListItem", position: 4, url: `${BASE}/nature/leighton-moss-rspb`, name: "Leighton Moss RSPB" },
        { "@type": "ListItem", position: 5, url: `${BASE}/nature/ullswater`, name: "Ullswater" },
      ],
    },
  ],
};

const reserves = [
  {
    href: "/nature/haweswater-rspb",
    name: "RSPB Haweswater Reserve",
    tag: "RSPB · Free entry · Haweswater",
    desc: "Red squirrels, ring ouzels and pied flycatchers in a remote valley restored by the RSPB and United Utilities. No public hides or facilities, so bring a map and food.",
  },
  {
    href: "/nature/grizedale-forest",
    name: "Grizedale Forest",
    tag: "Forestry England · Free entry · Grizedale",
    desc: "Red squirrels, deer and red kites in a large Forestry England forest.",
  },
  {
    href: "/nature/foulshaw-moss",
    name: "Foulshaw Moss",
    tag: "Cumbria Wildlife Trust · Free entry · Witherslack",
    desc: "Osprey viewing platform. Ospreys have nested here since at least 2014 and can be seen from the platform.",
  },
  {
    href: "/nature/leighton-moss-rspb",
    name: "Leighton Moss RSPB",
    tag: "RSPB · Entry charge · Silverdale",
    desc: "Bittern, marsh harrier, bearded tit. The largest reedbed in north-west England. A proper day out.",
  },
  {
    href: "/nature/ullswater",
    name: "Ullswater",
    tag: "Overview",
    desc: "Red deer, goldeneye, the Martindale valley. The second largest lake in the Lake District. Wildlife and landscape.",
  },
];

export default function NaturePage() {
  return (
    <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageJsonLd) }} />
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--fell)] mb-2">Nature Reserves</h1>
      <p className="text-[var(--slate)] mb-8 max-w-2xl">
        The Lake District and its fringes hold wildlife sites from raised bogs and reedbeds to ancient woodland. Here&apos;s where to go and what to see.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {reserves.map(({ href, name, tag, desc }) => (
          <Link
            key={href}
            href={href}
            className="block p-6 rounded-xl border border-[var(--fog)] bg-white hover:border-[var(--reed)] hover:shadow transition"
          >
            <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-1">{tag}</p>
            <h2 className="text-xl font-semibold text-[var(--fell)] mb-2">{name}</h2>
            <p className="text-[var(--slate)] text-sm leading-relaxed">{desc}</p>
          </Link>
        ))}
        <Link
          href="/birdwatching-guide"
          className="block p-6 rounded-xl border border-[var(--fog)] bg-white hover:border-[var(--reed)] hover:shadow transition"
        >
          <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-1">Guide</p>
          <h2 className="text-xl font-semibold text-[var(--fell)] mb-2">Birdwatching guide</h2>
          <p className="text-[var(--slate)] text-sm leading-relaxed">Best spots, seasons and kit for the Lake District.</p>
        </Link>
        <Link
          href="/seasonal"
          className="block p-6 rounded-xl border border-[var(--fog)] bg-white hover:border-[var(--reed)] hover:shadow transition"
        >
          <p className="text-[var(--lichen)] text-xs font-bold uppercase tracking-widest mb-1">Guide</p>
          <h2 className="text-xl font-semibold text-[var(--fell)] mb-2">Seasonal guides</h2>
          <p className="text-[var(--slate)] text-sm leading-relaxed">Ospreys, red deer rut, red squirrels and what to see when.</p>
        </Link>
      </div>
    </div>
    </>
  );
}
