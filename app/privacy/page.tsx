import type { Metadata } from "next";
import Link from "next/link";

const title = "Privacy Policy | The Lakes Wildlife";
const description = "Privacy policy for thelakeswildlife.co.uk: how we handle your data.";
const url = "https://www.thelakeswildlife.co.uk/privacy";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  robots: { index: false },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="font-display text-3xl font-bold text-[var(--fell)] mb-6">Privacy Policy</h1>
      <p className="text-sm text-[var(--slate)]/60 mb-8">Last updated: November 2026</p>

      <div className="space-y-8 text-sm text-[var(--slate)] leading-relaxed">
        <section>
          <h2 className="font-display text-lg font-bold text-[var(--fell)] mb-2">Who we are</h2>
          <p>
            The Lakes Wildlife (<a href="https://www.thelakeswildlife.co.uk" className="text-[var(--lichen)] hover:underline">thelakeswildlife.co.uk</a>) is
            operated by Churchtown Media. Part of{" "}
            <a href="https://thelakes.network" target="_blank" rel="noopener" className="text-[var(--lichen)] hover:underline">
              The Lakes Network
            </a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--fell)] mb-2">What data we collect</h2>
          <p className="mb-3">We keep data collection to a minimum:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Contact form</strong>: if you use the contact form, we receive your name, email address and message. This is sent to us via Resend and is used solely to reply to your enquiry.</li>
            <li><strong>Ahrefs Web Analytics</strong>: page view statistics without cookies. It records the page, referrer, browser, device, language, screen size and approximate location (city level), and counts visitors with a daily pseudonymous identifier that is not kept across days.</li>
            <li><strong>Visit counts</strong>: our own server keeps a count of views for each page: the page, the day and a number. Nothing about you is stored with it.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--fell)] mb-2">Cookies</h2>
          <p>
            This site does not set any cookies, and Ahrefs Web Analytics works without them. No consent banner is required.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--fell)] mb-2">Third-party services</h2>
          <ul className="list-disc pl-5 space-y-1.5">
            <li><strong>Ahrefs Web Analytics</strong>: page view statistics without cookies. <a href="https://ahrefs.com/legal/privacy-policy" target="_blank" rel="noopener" className="text-[var(--lichen)] hover:underline">Ahrefs privacy policy</a></li>
            <li><strong>Resend</strong>: email delivery for the contact form. <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener" className="text-[var(--lichen)] hover:underline">Resend privacy policy</a></li>
            <li><strong>Vercel</strong>: website hosting. <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener" className="text-[var(--lichen)] hover:underline">Vercel privacy policy</a></li>
            <li><strong>Wikipedia / Wikimedia Commons</strong>: species images are loaded from Wikipedia&apos;s REST API. No personal data is sent to Wikipedia by this site.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--fell)] mb-2">Your rights</h2>
          <p>
            If you&apos;ve submitted a contact form and would like your data deleted, use the{" "}
            <Link href="/contact" className="text-[var(--lichen)] hover:underline">contact form</Link> or write to Churchtown Media Ltd, Suite RA01, <span className="whitespace-nowrap">195-197 Wood Street</span>, London, E17 3NU.
          </p>
        </section>

        <section>
          <h2 className="font-display text-lg font-bold text-[var(--fell)] mb-2">Contact</h2>
          <p>
            For any privacy-related questions, use the{" "}
            <Link href="/contact" className="text-[var(--lichen)] hover:underline">contact form</Link> or write to Churchtown Media Ltd, Suite RA01, <span className="whitespace-nowrap">195-197 Wood Street</span>, London, E17 3NU.
          </p>
        </section>
      </div>
    </div>
  );
}
