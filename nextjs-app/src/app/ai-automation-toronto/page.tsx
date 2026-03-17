import type { Metadata } from "next";
import TorontoClient from "./TorontoClient";

export const metadata: Metadata = {
  title: "AI Automation for Toronto Businesses | Barrana AI",
  description:
    "AI automation built for Toronto SMBs — lead follow-up, AI receptionists, document processing, and custom workflows. Serving the GTA from our Vaughan office.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Barrana AI",
  description: "AI automation for Toronto small businesses",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: "Toronto",
  url: "https://barrana.ai/ai-automation-toronto",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <TorontoClient />
    </>
  );
}
