import type { Metadata } from "next";
import DoesAIReplaceStaffClient from "./DoesAIReplaceStaffClient";

export const metadata: Metadata = {
  title: "Does AI Replace Staff? The Honest Answer for Canadian Business Owners | Barrana AI",
  description:
    "AI automation handles repetitive tasks — it doesn't replace people who think, build relationships, or solve complex problems. Here's the honest breakdown.",
};

export default function Page() {
  return <DoesAIReplaceStaffClient />;
}
