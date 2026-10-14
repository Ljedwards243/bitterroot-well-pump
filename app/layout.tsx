import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import { PhoneClickTracking } from "@/components/Analytics";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCallBar } from "@/components/MobileCallBar";
import { organizationSchema } from "@/lib/schema";
import { isConfigured, site } from "@/lib/site";
import "./globals.css";

// Self-hosted from app/fonts (OFL, latin subset, from Fontsource): no request to Google
// at build or run time. Bricolage is one variable file (41 KB); Plex Mono ships two
// weights only (brief §17). ~71 KB of fonts in total.
const bricolage = localFont({
  src: "./fonts/bricolage-grotesque-latin-wght-normal.woff2",
  variable: "--font-bricolage",
  weight: "200 800",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
  // Mono only styles small labels and numbers; not preloading it keeps bandwidth for the
  // hero photo and display font on slow phone connections (LCP, brief §17).
  preload: false,
});

// Verification tags render only once Luke supplies real values (standards §12).
const verification: Metadata["verification"] = {
  ...(isConfigured(site.gscVerification) ? { google: site.gscVerification } : {}),
  ...(isConfigured(site.bingVerification)
    ? { other: { "msvalidate.01": site.bingVerification } }
    : {}),
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  applicationName: site.name,
  title: { default: site.name, template: `%s | ${site.name}` },
  openGraph: { siteName: site.name, locale: "en_US", type: "website" },
  twitter: { card: "summary_large_image" },
  verification,
};

export const viewport: Viewport = {
  themeColor: "#111a21",
};

const ga4Enabled = isConfigured(site.ga4Id);

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${bricolage.variable} ${plexMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col pb-[4.25rem] font-sans md:pb-0">
        <JsonLd data={organizationSchema()} />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileCallBar />
        <PhoneClickTracking />
        {ga4Enabled && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${site.ga4Id}`}
              strategy="lazyOnload"
            />
            <Script id="ga4" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}window.gtag=gtag;gtag('js',new Date());gtag('config','${site.ga4Id}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
