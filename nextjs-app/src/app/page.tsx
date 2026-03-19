import type { Metadata } from "next";
import HomeClient from "@/components/HomeClient";

// ─── SEO Metadata ─────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "AI Automation for Small Business Toronto | Respond in 90 Seconds, Not 4 Hours | Barrana.ai",
  description:
    "Barrana.ai builds AI automation systems that respond to leads in 90 seconds, recover 15+ staff hours per week, and increase capacity by 30%. Serving Toronto and the GTA. Free audit.",
  alternates: {
    canonical: "https://barrana.ai",
  },
  openGraph: {
    title: "AI Automation for Small Business Toronto | Respond in 90 Seconds | Barrana.ai",
    description:
      "Barrana.ai builds AI automation systems that respond to leads in 90 seconds, recover 15+ staff hours per week, and increase capacity by 30%. Free audit.",
    url: "https://barrana.ai",
    type: "website",
    images: [
      {
        url: "https://barrana.ai/og-default.png",
        width: 1200,
        height: 630,
        alt: "Barrana.ai — AI Automation for Small Business in Toronto and the GTA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Small Business Toronto | Barrana.ai",
    description:
      "Respond to every lead in 90 seconds. Recover 15+ hours of admin per week. Grow without hiring. Free automation audit.",
    images: ["https://barrana.ai/og-default.png"],
  },
};

// ─── JSON-LD Schema ───────────────────────────────────────────────────────────

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://barrana.ai/#webpage",
      url: "https://barrana.ai",
      name: "AI Automation for Small Business Toronto | Respond in 90 Seconds, Not 4 Hours | Barrana.ai",
      description:
        "Barrana.ai builds AI automation systems that respond to leads in 90 seconds, recover 15+ staff hours per week, and increase capacity by 30%. Serving Toronto and the GTA.",
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
      description:
        "AI automation consultancy for small businesses in Toronto and the Greater Toronto Area. We build systems that respond to leads in 90 seconds, recover 15+ staff hours per week, and increase capacity by 30%.",
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
      areaServed: [
        { "@type": "City", name: "Toronto" },
        { "@type": "City", name: "Vaughan" },
        { "@type": "City", name: "Markham" },
        { "@type": "City", name: "Mississauga" },
        { "@type": "City", name: "Richmond Hill" },
        { "@type": "City", name: "North York" },
      ],
      sameAs: ["https://www.linkedin.com/company/barranaai"],
    },
    {
      "@type": "Service",
      "@id": "https://barrana.ai/#service",
      name: "AI Automation Consultancy",
      provider: { "@id": "https://barrana.ai/#localbusiness" },
      description:
        "We design and build AI automation systems for small and medium-sized businesses in Toronto and the GTA. Services include lead response automation, client intake automation, document collection, invoice automation, and appointment management.",
      areaServed: "Greater Toronto Area",
      serviceType: "AI Automation Consultancy",
      offers: {
        "@type": "Offer",
        description: "Fixed-price AI automation systems. Single workflow: $1,500–$4,000 CAD. Multi-workflow systems: $5,000–$15,000 CAD. Free 60-minute audit included.",
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "CAD",
          minPrice: "1500",
          maxPrice: "15000",
        },
      },
    },
    {
      "@type": "FAQPage",
      "@id": "https://barrana.ai/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much does AI automation cost?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Single workflow: $1,500–$4,000 CAD. Multi-workflow systems: $5,000–$15,000 CAD. Fixed pricing after free audit. No hourly billing.",
          },
        },
        {
          "@type": "Question",
          name: "How long until I see results?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "First automation live within 2–3 weeks. Measurable improvement within 30 days. Full multi-workflow systems in 4–8 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need to replace my current software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. We build on top of your existing tools. Your team keeps using the same systems.",
          },
        },
        {
          "@type": "Question",
          name: "Will AI automation replace my employees?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Automation handles data entry, follow-up, reminders, routing. Your staff handle judgment, expertise, and client relationships.",
          },
        },
        {
          "@type": "Question",
          name: "Is my client data secure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Data stays in your systems. PIPEDA-aware design. Every data flow documented. We do not retain access after project completion unless retained.",
          },
        },
        {
          "@type": "Question",
          name: "What if something breaks?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Every system includes error handling, failure alerts, retry logic, and human escalation. Nothing fails silently.",
          },
        },
        {
          "@type": "Question",
          name: "What happens in the free audit?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "60-minute working session. We map 2–3 workflows, identify friction points, and deliver a prioritized plan with timelines and fixed pricing. You keep the plan whether or not you proceed.",
          },
        },
        {
          "@type": "Question",
          name: "What if automation is not right for my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We will tell you. We have told clients to wait when their primary constraint was not operational. You get an honest assessment, not a pitch.",
          },
        },
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <HomeClient />
    </>
  );
}
