import type { Metadata } from "next";
import AIReceptionistClient from "./AIReceptionistClient";

export const metadata: Metadata = {
  title: "AI Receptionist for Small Business | 24/7 Call & Inquiry Handling | Barrana AI",
  description:
    "An AI receptionist answers calls, qualifies callers, books appointments, and routes urgent requests — 24/7, for a fraction of the cost of a human receptionist.",
};

export default function Page() {
  return <AIReceptionistClient />;
}
