import type { Metadata } from "next";
import MississaugaClient from "./MississaugaClient";

export const metadata: Metadata = {
  title: "AI Automation for Mississauga Businesses | Barrana AI",
  description:
    "AI automation for Mississauga SMBs — real estate, construction, healthcare, and professional services. Custom AI agents built for Peel Region businesses.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Barrana AI",
  description: "AI automation for Mississauga small businesses",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mississauga",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: "Mississauga",
  url: "https://barrana.ai/ai-automation-mississauga",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <MississaugaClient />
    </>
  );
}
