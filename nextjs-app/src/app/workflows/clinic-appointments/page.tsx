import type { Metadata } from "next";
import ClinicAppointmentsClient from "./ClinicAppointmentsClient";

export const metadata: Metadata = {
  title: "Medical Clinic Appointment Automation | Reduce No-Shows 40% | Barrana AI",
  description:
    "AI appointment booking and management for medical clinics — 24/7 patient booking, automated reminders, and post-visit follow-up. Reduce no-shows by 40%.",
};

export default function Page() {
  return <ClinicAppointmentsClient />;
}
