import type { Metadata } from "next";
import ZapierVsClient from "./ZapierVsClient";

export const metadata: Metadata = {
  title: "Zapier vs n8n vs Custom AI: Which Automation Tool Is Right? | Barrana AI",
  description:
    "Honest comparison of Zapier, n8n, and custom AI agents for Canadian businesses. Understand the tradeoffs before you invest.",
};

export default function Page() {
  return <ZapierVsClient />;
}
