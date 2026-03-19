import type { Metadata } from "next";
import AiAgentsVsChatbotsClient from "./AiAgentsVsChatbotsClient";

export const metadata: Metadata = {
  title: "AI Agents vs. Chatbots: What's the Difference? | Barrana AI",
  description:
    "Chatbots follow scripts. AI agents understand context, take action, and complete multi-step tasks. Learn the real difference and why it matters for your business.",
};

export default function Page() {
  return <AiAgentsVsChatbotsClient />;
}
