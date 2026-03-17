import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Automation for Small Business in the GTA | Barrana.ai",
  description:
    "Barrana.ai helps small businesses in Vaughan, Toronto, and the GTA eliminate repetitive work with practical AI automation. Book a free automation audit today.",
  alternates: {
    canonical: "https://barrana.ai",
  },
  openGraph: {
    title: "AI Automation for Small Business in the GTA | Barrana.ai",
    description:
      "Practical AI automation for GTA small businesses. Reduce manual work by 40%+, cut costs, and scale faster. Based in Vaughan, Ontario.",
    url: "https://barrana.ai",
  },
};

// ─── JSON-LD: WebPage + LocalBusiness ────────────────────────────────────────

const webPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://barrana.ai/#webpage",
      url: "https://barrana.ai",
      name: "AI Automation for Small Business in the GTA | Barrana.ai",
      description:
        "Barrana.ai helps small businesses in Vaughan, Toronto, and the GTA eliminate repetitive work with practical AI automation.",
      isPartOf: { "@id": "https://barrana.ai/#website" },
      about: { "@id": "https://barrana.ai/#organization" },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://barrana.ai",
          },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://barrana.ai/#localbusiness",
      name: "Barrana.ai",
      image: "https://barrana.ai/og-default.png",
      url: "https://barrana.ai",
      email: "hello@barrana.ai",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vaughan",
        addressRegion: "Ontario",
        postalCode: "L4K",
        addressCountry: "CA",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 43.8361,
        longitude: -79.4983,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "18:00",
      },
      priceRange: "$$",
      areaServed: "Greater Toronto Area",
      sameAs: [
        "https://www.linkedin.com/company/barranaai",
      ],
    },
  ],
};

// ─── Page Component (Server) ──────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <HomeClient />
    </>
  );
}
