"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
import ToolStackDiagram from "@/components/ToolStackDiagram";
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

interface IndustryCard {
  icon: string;
  industry: string;
  workflow: string;
  saves: string;
  bullets: string[];
}

const industryCards: IndustryCard[] = [
  {
    icon: "🏛️",
    industry: "Immigration Consultant",
    workflow: "Automated Client Intake",
    saves: "18 hrs/week",
    bullets: [
      "Document checklist sent automatically",
      "Status updates without staff calls",
      "Deadline reminders for clients",
    ],
  },
  {
    icon: "📊",
    industry: "Accounting Firm",
    workflow: "Document Collection Agent",
    saves: "12 hrs/week",
    bullets: [
      "Chase missing documents automatically",
      "Categorize uploads as they arrive",
      "Confirm completeness before filing",
    ],
  },
  {
    icon: "🔨",
    industry: "General Contractor",
    workflow: "Lead Qualification & Estimate Follow-Up",
    saves: "10 hrs/week",
    bullets: [
      "Qualify leads before office hours",
      "Send estimate follow-ups on schedule",
      "Book site visits automatically",
    ],
  },
  {
    icon: "🏥",
    industry: "Medical Clinic",
    workflow: "Appointment Management Agent",
    saves: "15 hrs/week",
    bullets: [
      "24/7 booking via SMS or web form",
      "Automated reminders cut no-shows 40%",
      "Handle reschedules without staff calls",
    ],
  },
];

export default function HowBusinessesUseAiAgentsClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="How Businesses Use AI Agents"
        subtitle="Real workflows. Real time savings. No fluff."
        body="From immigration consultants to contractors to clinics — here's how Canadian businesses are deploying AI agents right now."
        badge="Use Cases"
        ctaText="See My Industry"
        ctaHref="/automation-workflows"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="How do businesses use AI agents?"
              answer="Canadian businesses use AI agents for five main workflows: (1) automated lead follow-up and qualification, (2) client intake and onboarding, (3) appointment scheduling and reminders, (4) document collection and processing, and (5) answering routine client questions 24/7. These agents connect to existing tools like CRMs, email, and calendars without replacing staff."
              headingLevel="h2"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Industry Use Cases */}
      <section className="py-20 bg-[#F7F9FC]" aria-labelledby="use-cases-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="use-cases-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Industry use cases
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Real workflows deployed for Canadian businesses across four industries.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industryCards.map((card, i) => (
              <motion.div
                key={card.industry}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="bg-white rounded-2xl border border-[#E8ECF1] p-6 flex flex-col hover:border-[#00B4D8] hover:shadow-lg transition-all duration-300"
              >
                {/* Icon + industry */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl leading-none" aria-hidden="true">
                    {card.icon}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest text-[#6B7280]">
                      {card.industry}
                    </p>
                    <p className="text-sm font-semibold text-[#0A1628] leading-snug mt-0.5">
                      {card.workflow}
                    </p>
                  </div>
                </div>

                {/* Saves badge */}
                <div className="inline-flex items-center gap-1.5 bg-[#10B981]/10 border border-[#10B981]/20 rounded-full px-3 py-1 text-xs font-semibold text-[#065F46] mb-4 self-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" aria-hidden="true" />
                  Saves {card.saves}
                </div>

                {/* Bullet list */}
                <ul className="space-y-2 mt-auto">
                  {card.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-sm text-[#374151]">
                      <svg
                        className="w-4 h-4 text-[#00B4D8] shrink-0 mt-0.5"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works — ToolStackDiagram */}
      <section className="py-20 bg-white" aria-labelledby="tool-stack-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="tool-stack-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              What&apos;s under the hood
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Every business AI agent is built on three layers — and works with the tools you
              already use.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <ToolStackDiagram
              title="The 3 layers behind a business AI agent"
              layers={[
                {
                  label: "Your Existing Tools",
                  sublabel: "No replacement needed",
                  tools: [
                    { name: "Gmail" },
                    { name: "Google Calendar" },
                    { name: "HubSpot" },
                    { name: "Stripe" },
                    { name: "Custom CRM" },
                  ],
                  color: "#6B7280",
                  bgColor: "#F7F9FC",
                },
                {
                  label: "AI Orchestration Layer",
                  sublabel: "Built by Barrana AI",
                  tools: [
                    { name: "n8n Workflows" },
                    { name: "LLM Reasoning" },
                    { name: "Memory Store" },
                    { name: "API Connectors" },
                  ],
                  color: "#1A5276",
                  bgColor: "#EFF6FF",
                },
                {
                  label: "Your Client Interface",
                  sublabel: "How clients interact",
                  tools: [
                    { name: "Email" },
                    { name: "SMS" },
                    { name: "Web Form" },
                    { name: "Phone (IVR)" },
                  ],
                  color: "#00B4D8",
                  bgColor: "#E0F7FA",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Metrics */}
      <section className="py-20 bg-[#F7F9FC]" aria-labelledby="metrics-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="metrics-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Results Canadian businesses are seeing
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Measured outcomes from live AI agent deployments.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              value={15}
              suffix="h"
              label="Average hours saved per week"
              color="green"
            />
            <MetricCard
              value={40}
              suffix="%"
              label="Reduction in no-shows"
              color="green"
            />
            <MetricCard
              value={3}
              suffix="x"
              label="Faster client onboarding"
              color="blue"
            />
            <MetricCard
              value={30}
              suffix="%"
              label="More leads converted"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* 6. Before / After — inline comparison cards (no BeforeAfterSlider needed, but adding for completeness) */}
      <section className="py-20 bg-white" aria-labelledby="before-after-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="before-after-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              What changes when you automate
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              A side-by-side look at the day-to-day impact across common business workflows.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl border-2 border-[#EF4444]/30 bg-[#FEF2F2] p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#EF4444]" aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#EF4444]">
                  Before Automation
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Staff answer the same questions 20+ times per week",
                  "Leads go cold because follow-up is manual and slow",
                  "Clients get missed appointments due to no reminder system",
                  "Documents arrive late or incomplete, delaying work",
                  "Team works overtime during busy periods",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#374151] text-sm">
                    <svg
                      className="w-4 h-4 text-[#EF4444] shrink-0 mt-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 4l8 8M12 4l-8 8"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="rounded-2xl border-2 border-[#10B981]/30 bg-[#F0FDF4] p-8"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="w-3 h-3 rounded-full bg-[#10B981]" aria-hidden="true" />
                <h3 className="text-sm font-bold uppercase tracking-widest text-[#10B981]">
                  After Automation
                </h3>
              </div>
              <ul className="space-y-4">
                {[
                  "FAQs answered instantly, around the clock, every day",
                  "Leads followed up within seconds of inquiry",
                  "Reminders sent automatically — no-shows drop 40%",
                  "Document requests triggered automatically on intake",
                  "Team handles only complex, high-value work",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#374151] text-sm">
                    <svg
                      className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 8l3.5 3.5L13 4.5"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 bg-[#F7F9FC]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Frequently asked questions
            </h2>
          </motion.div>
          <motion.div {...fadeInUp}>
            <FAQAccordion
              schemaId="faq-how-businesses-use-ai-agents"
              items={[
                {
                  question: "Do I need to be tech-savvy to use AI agents?",
                  answer: "No. We handle the full build and maintenance. You use the results.",
                },
                {
                  question: "Can AI agents work with my existing software?",
                  answer:
                    "Yes. We connect to most common business tools — CRMs, email, calendars, accounting software — via API.",
                },
                {
                  question: "What if a client asks something unusual?",
                  answer:
                    "We design agents with fallback logic. Unusual requests are flagged and routed to your team.",
                },
                {
                  question: "Can AI agents handle phone calls?",
                  answer:
                    "Yes. We deploy voice AI agents that can answer, qualify, and book calls using natural speech.",
                },
                {
                  question: "How quickly can I see results?",
                  answer:
                    "Most clients report time savings within the first week of deployment.",
                },
                {
                  question: "Is there a risk of the AI making mistakes?",
                  answer:
                    "We build in review triggers for sensitive decisions. The agent handles the routine; humans handle the exceptions.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Find your highest-value automation opportunity"
        subtext="Book a free call and we'll show you exactly what AI agents could do for your business."
        primaryCta={{ text: "Book Free Discovery Call", href: "/contact" }}
        secondaryCta={{ text: "View Industry Workflows", href: "/automation-workflows" }}
      />

      {/* 9. Internal Link Grid */}
      <InternalLinkGrid
        links={[
          {
            href: "/automation-workflows",
            title: "Browse Automation Workflows",
            description: "See detailed workflow breakdowns for 4 industries.",
          },
          {
            href: "/ai-automation-cost-canada",
            title: "AI Automation Cost in Canada",
            description: "What to expect to invest and what ROI looks like.",
          },
          {
            href: "/best-ai-workflows",
            title: "Best AI Workflows for Small Business",
            description: "The 10 most impactful workflows Canadian SMBs are using today.",
          },
        ]}
      />
    </main>
  );
}
