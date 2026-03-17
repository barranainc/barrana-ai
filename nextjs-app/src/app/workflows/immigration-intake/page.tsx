import type { Metadata } from "next";
import ImmigrationIntakeClient from "./ImmigrationIntakeClient";

export const metadata: Metadata = {
  title: "Immigration Client Intake Automation | Save 18 Hours/Week | Barrana AI",
  description:
    "Automate your immigration client intake process — from first inquiry to document collection to case file setup. Save 18+ hours per week.",
};

export default function Page() {
  return <ImmigrationIntakeClient />;
}
