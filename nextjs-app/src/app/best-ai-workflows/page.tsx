import type { Metadata } from "next";
import BestAIWorkflowsClient from "./BestAIWorkflowsClient";

export const metadata: Metadata = {
  title: "Best AI Automation Workflows for Canadian Small Businesses | Barrana AI",
  description:
    "The 10 highest-ROI AI automation workflows for Canadian SMBs in 2025 — from lead follow-up to document processing. See time savings and implementation details.",
};

export default function Page() {
  return <BestAIWorkflowsClient />;
}
