import type { Metadata } from "next";
import VaughanClient from "./VaughanClient";

export const metadata: Metadata = {
  title: "AI Automation for Vaughan Businesses | Barrana AI",
  description:
    "Barrana AI builds custom AI automation for Vaughan businesses — lead follow-up, AI receptionists, document automation, and more. Local team, local knowledge.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Barrana AI",
  description: "AI automation for Vaughan small businesses",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Vaughan",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: "Vaughan",
  url: "https://barrana.ai/ai-automation-vaughan",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <VaughanClient />
    </>
  );
}
