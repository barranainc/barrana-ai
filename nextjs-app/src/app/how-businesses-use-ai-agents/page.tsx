import type { Metadata } from "next";
import HowBusinessesUseAiAgentsClient from "./HowBusinessesUseAiAgentsClient";

export const metadata: Metadata = {
  title: "How Canadian Businesses Use AI Agents | Real Examples | Barrana AI",
  description:
    "From law firms to clinics to contractors — see how Canadian businesses are using AI agents to save 15–40 hours per week on admin, follow-up, and scheduling.",
};

export default function Page() {
  return <HowBusinessesUseAiAgentsClient />;
}
