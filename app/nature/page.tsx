import Link from "next/link";

import type { Metadata } from "next";

const title = "Nature Reserves — The Lakes Wildlife";
const description = "Guides to the Lake District's best nature reserves — RSPB Haweswater, Grizedale Forest, Foulshaw Moss, Leighton Moss and more.";
const url = "https://www.thelakeswildlife.co.uk/nature";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

const reserves = [
  {
    href: "/nature/haweswater-rspb",
    name: "RSPB Haweswater Reserve",
    tag: "RSPB · Free entry · Haweswater",
    desc: "Ospreys, pied flycatchers and red squirrels. The flagship Lake District wildlife site. Get there before 10am for a spot at the osprey hide.",
  },
  {
    href: "/nature/grizedale-forest",
    name: "Grizedale Forest",
    tag: "Forestry England · Free entry · Grizedale",
    desc: "Red squirrels, red deer, red kites. The visitor centre has feeders. One of the best places in England to see red squirrels.",
  },
  {
    href: "/nature/foulshaw-moss",
    name: "Foulshaw Moss",
    tag: "Cumbria Wildlife Trust · Free entry · Grange-over-Sands",
    desc: "Osprey viewing platform. Nest visible from the hide. Foulshaw is one of the Lake District's osprey reintroduction success stories.",
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
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--forest)] mb-2">Nature Reserves</h1>
      <p className="text-[var(--slate)] mb-8 max-w-2xl">
        The Lake District has some of the best wildlife sites in England — from RSPB osprey reserves to ancient woodland. Here&apos;s where to go and what to see.
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {reserves.map(({ href, name, tag, desc }) => (
          <Link
            key={href}
            href={href}
            className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
          >
            <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">{tag}</p>
            <h2 className="text-xl font-semibold text-[var(--forest)] mb-2">{name}</h2>
            <p className="text-[var(--slate)] text-sm leading-relaxed">{desc}</p>
          </Link>
        ))}
        <Link
          href="/birdwatching-guide"
          className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
        >
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">Guide</p>
          <h2 className="text-xl font-semibold text-[var(--forest)] mb-2">Birdwatching guide</h2>
          <p className="text-[var(--slate)] text-sm leading-relaxed">Best spots, seasons and kit for the Lake District.</p>
        </Link>
        <Link
          href="/seasonal"
          className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
        >
          <p className="text-[var(--marsh)] text-xs font-bold uppercase tracking-widest mb-1">Guide</p>
          <h2 className="text-xl font-semibold text-[var(--forest)] mb-2">Seasonal guides</h2>
          <p className="text-[var(--slate)] text-sm leading-relaxed">Ospreys, red deer rut, red squirrels and what to see when.</p>
        </Link>
      </div>
    </div>
  );
}
