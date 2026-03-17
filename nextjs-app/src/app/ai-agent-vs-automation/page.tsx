import type { Metadata } from "next";
import AIAgentVsAutomationClient from "./AIAgentVsAutomationClient";

export const metadata: Metadata = {
  title: "AI Agent vs. Automation: What's the Difference? | Barrana AI",
  description:
    "Traditional automation follows rules. AI agents make decisions. Learn the key differences and which approach fits your business workflows.",
};

export default function Page() {
  return <AIAgentVsAutomationClient />;
}
