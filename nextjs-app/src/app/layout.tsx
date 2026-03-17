import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// ─── Font ────────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  metadataBase: new URL("https://barrana.ai"),
  title: {
    template: "%s | Barrana.ai",
    default: "Barrana.ai — AI Automation for Small Business in the GTA",
  },
  description:
    "Barrana.ai helps small and medium businesses in the Greater Toronto Area reduce manual work, cut costs, and grow faster with practical AI automation. Based in Vaughan, Ontario.",
  keywords: [
    "AI automation",
    "small business automation",
    "GTA AI consultant",
    "Vaughan Ontario AI",
    "workflow automation",
    "business process automation",
    "AI consulting Toronto",
    "marketing automation",
    "customer service automation",
    "AI for SMB",
  ],
  authors: [{ name: "Barrana.ai", url: "https://barrana.ai" }],
  creator: "Barrana.ai",
  publisher: "Barrana.ai",
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
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://barrana.ai",
    siteName: "Barrana.ai",
    title: "Barrana.ai — AI Automation for Small Business in the GTA",
    description:
      "Practical AI automation for GTA small businesses. Reduce manual work, cut costs, and scale faster. Based in Vaughan, Ontario.",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "Barrana.ai — AI Automation for Small Business in the GTA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Barrana.ai — AI Automation for Small Business in the GTA",
    description:
      "Practical AI automation for GTA small businesses. Reduce manual work, cut costs, and scale faster.",
    images: ["/og-default.png"],
    creator: "@barranaai",
  },
  alternates: {
    canonical: "https://barrana.ai",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// ─── JSON-LD Organization Schema ──────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Barrana.ai",
  alternateName: "Barrana AI",
  url: "https://barrana.ai",
  logo: "https://barrana.ai/logo.png",
  description:
    "AI automation consultancy helping small and medium businesses in the Greater Toronto Area streamline operations, reduce manual work, and scale with confidence.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vaughan",
    addressRegion: "Ontario",
    addressCountry: "CA",
  },
  areaServed: [
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 43.8361,
        longitude: -79.4983,
      },
      geoRadius: "80000",
      description: "Greater Toronto Area, Ontario, Canada",
    },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@barrana.ai",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/barranaai",
    "https://twitter.com/barranaai",
  ],
  knowsAbout: [
    "AI Automation",
    "Business Process Automation",
    "Workflow Automation",
    "Small Business Technology",
    "Marketing Automation",
    "Customer Service Automation",
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      suppressHydrationWarning
      className={`${inter.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="antialiased bg-white text-[#1F2937]" style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Navigation />

        <main id="main-content">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
