import type { Metadata } from "next";
import MarkhamClient from "./MarkhamClient";

export const metadata: Metadata = {
  title: "AI Automation for Markham Businesses | Barrana AI",
  description:
    "AI automation for Markham and York Region businesses. Custom AI agents for tech companies, healthcare, and professional services.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Barrana AI",
  description: "AI automation for Markham businesses",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Markham",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: "Markham",
  url: "https://barrana.ai/ai-automation-markham",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <MarkhamClient />
    </>
  );
}
