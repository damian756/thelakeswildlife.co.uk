import Link from "next/link";

export const metadata = {
  title: "Nature & Coast",
  description: "Marshside RSPB Reserve, the Sefton Coast, birdwatching and seasonal wildlife guides.",
};

export default function NaturePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold text-[var(--forest)] mb-6">Nature & Coast</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Link
          href="/nature/marshside-rspb"
          className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
        >
          <h2 className="text-xl font-semibold text-[var(--forest)]">Marshside RSPB Reserve</h2>
          <p className="mt-2 text-[var(--slate)]">Parking, access, what to bring and when to visit.</p>
        </Link>
        <Link
          href="/nature/sefton-coast"
          className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
        >
          <h2 className="text-xl font-semibold text-[var(--forest)]">The Sefton Coast</h2>
          <p className="mt-2 text-[var(--slate)]">Geography, habitats and how the marshes fit in.</p>
        </Link>
        <Link
          href="/birdwatching-guide"
          className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
        >
          <h2 className="text-xl font-semibold text-[var(--forest)]">Birdwatching guide</h2>
          <p className="mt-2 text-[var(--slate)]">Best spots, seasons and kit for the Sefton Coast.</p>
        </Link>
        <Link
          href="/seasonal"
          className="block p-6 rounded-xl border border-[var(--dune)] bg-white hover:border-[var(--foam)] hover:shadow transition"
        >
          <h2 className="text-xl font-semibold text-[var(--forest)]">Seasonal guides</h2>
          <p className="mt-2 text-[var(--slate)]">Pink-footed geese, waders, migration and what to see when.</p>
        </Link>
      </div>
    </div>
  );
}
