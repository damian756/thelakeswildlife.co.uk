import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center">
      <h1 className="text-3xl font-bold text-[var(--forest)] mb-2">Page not found</h1>
      <p className="text-[var(--slate)] mb-6">That species or page doesn’t exist.</p>
      <Link href="/" className="text-[var(--marsh)] font-medium hover:underline">Back to home</Link>
    </div>
  );
}
