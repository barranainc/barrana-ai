import type { Metadata } from "next";
import AutomationWorkflowsClient from "./AutomationWorkflowsClient";

export const metadata: Metadata = {
  title: "AI Automation Workflows for Canadian Businesses | Barrana AI",
  description:
    "Browse proven AI automation workflows for immigration consultants, accountants, contractors, and medical clinics. See how each workflow saves 10–20 hours per week.",
};

export default function Page() {
  return <AutomationWorkflowsClient />;
}
