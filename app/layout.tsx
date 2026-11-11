import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { VisitCount } from "@/components/VisitCount";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const BASE_URL = "https://www.thelakeswildlife.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: BASE_URL,
    types: {
      "application/rss+xml": `${BASE_URL}/feed`,
    },
  },
  title: {
    default: "The Lakes Wildlife | Birds, Nature & Wildlife in the Lake District",
    template: "%s | The Lakes Wildlife",
  },
  description:
    "Independent guide to wildlife in the Lake District: ospreys, red deer, red squirrels, nature reserves, and a database of birds, insects, plants and mammals.",
  openGraph: {
    title: "The Lakes Wildlife",
    description: "Birds, nature and wildlife in the Lake District: Haweswater, Grizedale and beyond.",
    url: "https://www.thelakeswildlife.co.uk",
    siteName: "The Lakes Wildlife",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: `${BASE_URL}/images/species/birds/osprey.jpg`,
        width: 1200,
        height: 630,
        alt: "An osprey, the bird of prey that nests in and around the Lake District in summer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${BASE_URL}/images/species/birds/osprey.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="xOo9IjOVu15HATFXVbk5mA" async></script>
      </head>
      <body className="min-h-screen flex flex-col bg-[var(--mist)] text-[var(--peat)] antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-[var(--fell)] focus:shadow"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">{children}</main>
        <Footer />
        {/* Plain visit counts (path and day only), production only. */}
        {process.env.VERCEL_ENV === "production" ? <VisitCount /> : null}
      </body>
    </html>
  );
}
