import type { Metadata } from "next";
import AiAutomationCostCanadaClient from "./AiAutomationCostCanadaClient";

export const metadata: Metadata = {
  title: "AI Automation Cost in Canada: What to Expect in 2025 | Barrana AI",
  description:
    "Honest breakdown of AI automation pricing in Canada. Learn what a custom AI agent costs, how ROI is calculated, and why it's cheaper than hiring.",
};

export default function Page() {
  return <AiAutomationCostCanadaClient />;
}
