import type { Metadata } from "next";
import AccountingDocumentsClient from "./AccountingDocumentsClient";

export const metadata: Metadata = {
  title: "Accounting Document Collection Automation | Stop Chasing Clients | Barrana AI",
  description:
    "AI automation for accounting firms — automated document requests, follow-up sequences, and completeness verification. Save 12 hours/week before filing season.",
};

export default function Page() {
  return <AccountingDocumentsClient />;
}
