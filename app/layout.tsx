import type { Metadata } from "next";
import { Instrument_Serif, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { site } from "@/lib/site-data";
import { brandAssets } from "@/lib/brand-assets";

const display = Instrument_Serif({
 subsets: ["latin"],
 weight: ["400"],
 style: ["normal", "italic"],
 variable: "--font-display",
 display: "swap"
});

const sans = Inter({
 subsets: ["latin"],
 weight: ["400", "500"],
 variable: "--font-sans",
 display: "swap"
});

const mono = JetBrains_Mono({
 subsets: ["latin"],
 weight: ["400", "500"],
 variable: "--font-mono",
 display: "swap"
});

export const metadata: Metadata = {
 metadataBase: new URL(site.url),
 title: {
 default: `${site.name} — ${site.tagline}`,
 template: `%s — ${site.name}`
 },
 description: site.description,
 applicationName: site.name,
 keywords: [
 "AI agency",
 "AI lab",
 "AI agents",
 "RAG systems",
 "LLM applications",
 "AI automation",
 "AI consulting",
 "production AI",
 "Aavish AI"
 ],
 authors: [{ name: site.name }],
  openGraph: {
    type: "website",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    siteName: site.name,
    url: site.url,
    images: [{ url: brandAssets.logo.dark, width: 117, height: 48, alt: site.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — ${site.tagline}`,
    description: site.description,
    images: [brandAssets.logo.dark]
  },
  alternates: {
    canonical: site.url
  },
  icons: {
    icon: [{ url: brandAssets.favicon, type: "image/svg+xml" }],
    shortcut: brandAssets.favicon,
    apple: brandAssets.favicon
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
 <body>
 <a
 href="#main"
 className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-xl focus:bg-bg-dark focus:px-4 focus:py-2 focus:text-ink-inverse"
 >
 Skip to content
 </a>
 <SchemaMarkup type="organization" />
 <SchemaMarkup type="website" />
 <Navbar />
 <main id="main">{children}</main>
  
 <Footer />
 </body>
 </html>
 );
}
