"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
import ProblemCard from "@/components/ProblemCard";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import MetricCard from "@/components/MetricCard";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import InternalLinkGrid from "@/components/InternalLinkGrid";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const problemCards = [
  {
    title: "Booking calls consume reception staff hours",
    description:
      "For busy clinics, 40–60% of staff time is spent on booking, confirming, and rescheduling — not on patient care.",
  },
  {
    title: "No-shows cost $150–$400 per empty slot",
    description:
      "Every missed appointment is lost revenue. Without automated reminders, no-show rates average 10–15%.",
  },
  {
    title: "After-hours booking requests go unanswered",
    description:
      "Patients who can't book during business hours often choose a competitor who makes it easier.",
  },
];

const workflowSteps = [
  {
    id: "1",
    label: "Patient Requests Appointment",
    sublabel: "Phone, SMS, web form, 24/7",
    type: "trigger" as const,
  },
  {
    id: "2",
    label: "AI Confirms Availability",
    sublabel: "Real-time calendar sync",
    type: "action" as const,
  },
  {
    id: "3",
    label: "Appointment Booked & Confirmed",
    sublabel: "Email + SMS confirmation sent",
    type: "action" as const,
  },
  {
    id: "4",
    label: "48-Hour Reminder Sent",
    sublabel: "With reschedule option if needed",
    type: "action" as const,
  },
  {
    id: "5",
    label: "2-Hour Reminder Sent",
    sublabel: "Last chance to confirm or reschedule",
    type: "action" as const,
  },
  {
    id: "6",
    label: "Post-Visit Follow-Up",
    sublabel: "Satisfaction check, next appointment",
    type: "action" as const,
  },
  {
    id: "7",
    label: "Waitlist Filled Automatically",
    sublabel: "Cancelled slots offered to waitlist",
    type: "outcome" as const,
  },
];

const faqItems = [
  {
    question: "Which booking platforms does this integrate with?",
    answer:
      "Jane App, Cliniko, Oscar Pro, TELUS Health, and custom systems. We connect to whatever you use.",
  },
  {
    question: "Is this HIPAA/PHIPA compliant?",
    answer:
      "Yes. We build with Canadian health privacy law (PHIPA) requirements in mind, including proper patient consent and data handling.",
  },
  {
    question: "Can patients reschedule on their own?",
    answer:
      "Yes. Patients can reschedule via the SMS or email link without calling — reducing staff interruptions.",
  },
  {
    question: "Can the AI handle new patient intake forms?",
    answer:
      "Yes. We can send digital intake forms automatically when a new patient books, with reminders to complete before the visit.",
  },
  {
    question: "Does this work for specialist clinics?",
    answer:
      "Yes — we customize booking logic for specialist workflows including referral requirements and multi-provider scheduling.",
  },
  {
    question: "What happens if the AI can't book what the patient needs?",
    answer:
      "The agent flags it and prompts a staff callback with full context about what the patient requested.",
  },
];

export default function ClinicAppointmentsClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="light"
        title="Clinic Appointment Automation"
        subtitle="24/7 patient booking. 40% fewer no-shows. Zero extra staff."
        body="Clinics spend enormous staff time on booking calls, reminder calls, and rescheduling. AI automation handles all of it."
        ctaText="Automate My Clinic Bookings"
        ctaHref="/contact"
        breadcrumb={[
          { label: "Automation Workflows", href: "/automation-workflows" },
          { label: "Clinic Appointments" },
        ]}
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="How do medical clinics automate appointment management?"
              answer="Medical clinics automate appointment management using AI agents that: (1) accept patient bookings 24/7 via phone, SMS, or web; (2) send automated confirmation and reminder sequences (48-hour and 2-hour reminders); (3) allow patients to reschedule without staff involvement; (4) send post-visit follow-up messages; and (5) fill cancelled slots from a waitlist automatically — reducing no-shows by 40% and freeing 15+ hours per week."
              headingLevel="h2"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-3">
              The problems this workflow solves
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {problemCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProblemCard title={card.title} description={card.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Workflow Diagram */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <WorkflowDiagram
              title="Clinic appointment automation workflow"
              steps={workflowSteps}
              orientation="vertical"
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Before/After */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <BeforeAfterSlider
              title="Clinic operations: before and after automation"
              beforeItems={[
                { label: "No-show rate", value: "12%", sublabel: "Industry average" },
                { label: "Staff hours on booking calls", value: "15h/wk" },
                { label: "After-hours bookings captured", value: "0%" },
                { label: "Waitlist fill rate", value: "40%", sublabel: "Manual only" },
              ]}
              afterItems={[
                { label: "No-show rate", value: "5%", sublabel: "40% reduction" },
                { label: "Staff hours freed from booking", value: "15h/wk" },
                { label: "After-hours bookings captured", value: "100%", sublabel: "24/7" },
                { label: "Waitlist fill rate", value: "85%", sublabel: "Automatic" },
              ]}
              beforeTitle="Without Automation"
              afterTitle="With Barrana AI"
            />
          </motion.div>
        </div>
      </section>

      {/* 6. Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628]">Results after automation</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <MetricCard
              value={40}
              suffix="%"
              label="Reduction in no-shows"
              color="green"
            />
            <MetricCard
              value={15}
              suffix="h"
              label="Staff hours freed per week"
              color="green"
            />
            <MetricCard
              value={24}
              suffix="/7"
              label="Patient booking availability"
              color="blue"
            />
            <MetricCard
              value={85}
              suffix="%"
              label="Waitlist fill rate"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A1628]">Common questions</h2>
          </motion.div>
          <motion.div {...fadeInUp}>
            <FAQAccordion items={faqItems} schemaId="clinic-appointments-faq" />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Fill your schedule. Reduce no-shows. Serve patients 24/7."
        subtext="Set up your clinic appointment automation in 2 weeks."
        primaryCta={{ text: "Automate My Clinic", href: "/contact" }}
        secondaryCta={{ text: "See All Workflows", href: "/automation-workflows" }}
      />

      {/* 9. Internal Link Grid */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <InternalLinkGrid
              heading="Explore further"
              links={[
                {
                  href: "/ai-receptionist",
                  title: "AI Receptionist Service",
                  description: "Full AI call handling to complement appointment automation.",
                },
                {
                  href: "/ai-automation-markham",
                  title: "AI Automation Markham",
                  description: "Serving Markham's healthcare sector.",
                },
                {
                  href: "/automation-workflows",
                  title: "All Industry Workflows",
                  description: "Browse automations for other industries.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
