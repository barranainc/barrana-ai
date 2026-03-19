import type { Metadata } from "next";
import AutomateLeadFollowUpClient from "./AutomateLeadFollowUpClient";

export const metadata: Metadata = {
  title: "Automate Lead Follow-Up with AI | Never Lose a Lead Again | Barrana AI",
  description:
    "AI-powered lead follow-up for Canadian businesses. Every inquiry gets an instant, personalized response — 24/7, without your team lifting a finger.",
};

export default function Page() {
  return <AutomateLeadFollowUpClient />;
}
