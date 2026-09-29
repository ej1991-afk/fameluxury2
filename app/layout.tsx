import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { CompareProvider } from "@/components/CompareProvider";
import { CurrencyProvider } from "@/components/CurrencyProvider";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileNav } from "@/components/MobileNav";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { localBusinessJsonLd, websiteJsonLd, defaultKeywords } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const metaDomainVerification =
  process.env.NEXT_PUBLIC_META_DOMAIN_VERIFICATION?.trim();
const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();

export const metadata: Metadata = {
  title: {
    default: "Luxury Car Rental Dubai | Supercars & Self-Drive | Fame Luxury",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: defaultKeywords,
  metadataBase: new URL(siteConfig.url),
  ...(metaDomainVerification
    ? {
        other: {
          "facebook-domain-verification": metaDomainVerification,
        },
      }
    : {}),
  ...(googleSiteVerification
    ? {
        verification: {
          google: googleSiteVerification,
        },
      }
    : {}),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.legalEntity }],
  creator: siteConfig.name,
  publisher: siteConfig.legalEntity,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Luxury Car Rental Dubai | Fame Luxury",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Fame Luxury supercar rental in Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luxury Car Rental Dubai | Fame Luxury",
    description: siteConfig.description,
    images: ["/hero.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    // One stable PNG (Google does not use SVG) plus a real bitmap .ico.
    // The old favicon.ico was a PNG wrapped as ICO, which Google's favicon
    // fetcher often rejects and then shows the default globe.
    icon: [
      { url: "/favicon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#050504",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-AE" className={`${plusJakarta.variable} ${cormorant.variable} h-full`}>
      <head>
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </head>
      <body className="flex min-h-full flex-col antialiased">
        <Analytics />
        <JsonLd data={localBusinessJsonLd()} />
        <JsonLd data={websiteJsonLd()} />
        <MobileNav />
        <CompareProvider>
          <CurrencyProvider>
            <Header />
            <main className="flex-1 pb-24 md:pb-0">{children}</main>
            <Footer />
            <WhatsAppButton />
          </CurrencyProvider>
        </CompareProvider>
      </body>
    </html>
  );
}
