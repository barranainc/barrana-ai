import type { Metadata } from "next";
import RichmondHillClient from "./RichmondHillClient";

export const metadata: Metadata = {
  title: "AI Automation for Richmond Hill Businesses | Barrana AI",
  description:
    "AI automation for Richmond Hill and Oak Ridges businesses. Local team, fast turnaround, custom AI agents for York Region professionals.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Barrana AI",
  description: "AI automation for Richmond Hill businesses",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Richmond Hill",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: "Richmond Hill",
  url: "https://barrana.ai/ai-automation-richmond-hill",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <RichmondHillClient />
    </>
  );
}
