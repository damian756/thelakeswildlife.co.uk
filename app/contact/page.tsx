import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

const title = "Contact | The Lakes Wildlife";
const description = "Get in touch with The Lakes Wildlife: questions, species records, local knowledge or listing enquiries.";
const url = "https://www.thelakeswildlife.co.uk/contact";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: "The Lakes Wildlife", type: "website" },
};

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[var(--fell)] text-white">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <p className="text-[var(--copper)] text-xs font-bold uppercase tracking-widest mb-3">
            Get in touch
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
            Contact us
          </h1>
          <p className="text-white/75 text-lg leading-relaxed max-w-2xl">
            Species records, questions about the site, listing enquiries or just something you&apos;ve spotted in the Lake District. We&apos;d like to hear from you.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <div className="grid md:grid-cols-5 gap-10">
          {/* Form */}
          <div className="md:col-span-3">
            <ContactForm />
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-2 space-y-6">
            <div className="rounded-xl bg-[var(--fog)] p-5">
              <h2 className="font-semibold text-[var(--fell)] mb-3 text-sm">About the site</h2>
              <p className="text-sm text-[var(--slate)] leading-relaxed">
                The Lakes Wildlife is an independent guide built by{" "}
                <a href="https://churchtownmedia.co.uk" target="_blank" rel="noopener" className="text-[var(--lichen)] hover:underline">
                  Churchtown Media
                </a>{" "}
                , part of the{" "}
                <a href="https://thelakes.network" target="_blank" rel="noopener" className="text-[var(--lichen)] hover:underline">
                  The Lakes Network
                </a>.
              </p>
            </div>

            <div className="rounded-xl bg-[var(--fog)] p-5">
              <h2 className="font-semibold text-[var(--fell)] mb-3 text-sm">Network sites</h2>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "https://www.thelakesguide.co.uk", label: "The Lakes Guide" },
                  { href: "https://www.thelakeswildlife.co.uk", label: "The Lakes Wildlife" },
                  { href: "https://www.hikethelakes.com", label: "Hike The Lakes" },
                  { href: "https://thelakes.network", label: "TheLakes.network" },
                ].map(({ href, label }) => (
                  <li key={href}>
                    <a href={href} target="_blank" rel="noopener" className="text-[var(--lichen)] hover:underline">
                      {label} →
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
}
