import type { Metadata } from "next";
import WhatIsAIAutomationClient from "./WhatIsAIAutomationClient";

export const metadata: Metadata = {
  title: "What Is AI Automation? A Plain-English Guide for Canadian Businesses",
  description:
    "AI automation uses intelligent software agents to handle repetitive business tasks 24/7 — without replacing your staff. Learn how it works, what it costs, and whether it fits your business.",
  keywords:
    "what is ai automation, ai automation canada, business automation, ai agents canada",
};

export default function Page() {
  return <WhatIsAIAutomationClient />;
}
