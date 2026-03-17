import type { Metadata } from "next";
import ContractorLeadsClient from "./ContractorLeadsClient";

export const metadata: Metadata = {
  title: "Contractor Lead Automation | AI Follow-Up for Trades & Construction | Barrana AI",
  description:
    "Automate lead follow-up, estimate follow-up, and site visit booking for general contractors. Save 10 hours per week and win more jobs.",
};

export default function Page() {
  return <ContractorLeadsClient />;
}
