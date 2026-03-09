import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
    types: {
      "application/rss+xml": `${BASE_URL}/feed`,
    },
  },
  title: {
    default: "The Lakes Wildlife — Birds, Nature & Wildlife in the Lake District",
    template: "%s | The Lakes Wildlife",
  },
  description:
    "Independent guide to wildlife in the Lake District — RSPB Haweswater, ospreys, red deer, red squirrels, and a database of birds, insects, plants and mammals.",
  openGraph: {
    title: "The Lakes Wildlife",
    description: "Birds, nature and wildlife in the Lake District — Haweswater, Grizedale and beyond.",
    url: "https://www.thelakeswildlife.co.uk",
    siteName: "The Lakes Wildlife",
    images: [
      {
        url: `${BASE_URL}/images/species/birds/osprey.jpg`,
        width: 1200,
        height: 630,
        alt: "Osprey at RSPB Haweswater, Lake District",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${BASE_URL}/images/species/birds/osprey.jpg`],
  },
  icons: {
    icon: [{ url: "/icon", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/icon", sizes: "32x32", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--mist)] text-[var(--peat)] antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
