"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
import MetricCard from "@/components/MetricCard";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import InternalLinkGrid from "@/components/InternalLinkGrid";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const workflows = [
  {
    rank: 1,
    name: "Automated Lead Follow-Up",
    timeSaved: "8 hrs/wk",
    complexity: "Low" as const,
    description: "Instant personalized follow-up for every new lead, 24/7.",
  },
  {
    rank: 2,
    name: "Appointment Booking & Reminders",
    timeSaved: "7 hrs/wk",
    complexity: "Low" as const,
    description: "AI handles booking, rescheduling, and reminder sequences automatically.",
  },
  {
    rank: 3,
    name: "Client Intake & Document Collection",
    timeSaved: "10 hrs/wk",
    complexity: "Medium" as const,
    description: "Automated intake forms, document checklists, and completeness verification.",
  },
  {
    rank: 4,
    name: "Invoice & Payment Reminders",
    timeSaved: "5 hrs/wk",
    complexity: "Low" as const,
    description: "Scheduled reminders and follow-ups that reduce overdue invoices by 60%.",
  },
  {
    rank: 5,
    name: "FAQ & Support Triage",
    timeSaved: "12 hrs/wk",
    complexity: "Medium" as const,
    description: "AI answers routine questions and routes complex ones to the right person.",
  },
  {
    rank: 6,
    name: "Contract & Proposal Generation",
    timeSaved: "6 hrs/wk",
    complexity: "Medium" as const,
    description: "AI drafts contracts from templates using client data from your CRM.",
  },
  {
    rank: 7,
    name: "Social Media Scheduling",
    timeSaved: "4 hrs/wk",
    complexity: "Low" as const,
    description: "Content planned, written, and scheduled automatically.",
  },
  {
    rank: 8,
    name: "Employee Onboarding",
    timeSaved: "8 hrs/wk",
    complexity: "Medium" as const,
    description: "Automated document collection, IT provisioning requests, and check-ins.",
  },
  {
    rank: 9,
    name: "CRM Data Entry & Updating",
    timeSaved: "9 hrs/wk",
    complexity: "Low" as const,
    description: "Emails, calls, and forms automatically update CRM records.",
  },
  {
    rank: 10,
    name: "Internal Reporting",
    timeSaved: "5 hrs/wk",
    complexity: "Medium" as const,
    description: "Weekly KPI reports generated and sent automatically.",
  },
];

const complexityConfig = {
  Low: { label: "Low", bg: "bg-[#10B981]/10", text: "text-[#10B981]", border: "border-[#10B981]/20" },
  Medium: { label: "Medium", bg: "bg-[#F59E0B]/10", text: "text-[#F59E0B]", border: "border-[#F59E0B]/20" },
  High: { label: "High", bg: "bg-[#EF4444]/10", text: "text-[#EF4444]", border: "border-[#EF4444]/20" },
};

const faqItems = [
  {
    question: "Which workflow should I start with?",
    answer:
      "Start with whichever workflow costs you the most time right now. For most businesses, lead follow-up or appointment booking delivers the fastest payback.",
  },
  {
    question: "Can I automate multiple workflows at once?",
    answer:
      "Yes, but we recommend starting with one, optimizing it, then expanding. Most clients add workflows quarterly.",
  },
  {
    question: "Do these workflows require changes to my existing process?",
    answer:
      "Minimal. We design automations to fit your current tools and processes, not the other way around.",
  },
  {
    question: "What if a workflow doesn't work for my specific business?",
    answer:
      "We customize every workflow to your exact process. These are examples, not off-the-shelf templates.",
  },
  {
    question: "How do I measure if an automation is working?",
    answer:
      "We build dashboards into every automation so you can see leads processed, time saved, and errors caught in real time.",
  },
  {
    question: "Can AI automation work alongside my staff?",
    answer:
      "Absolutely. The best implementations pair AI with your team — AI handles routine steps, humans handle judgment calls.",
  },
];

export default function BestAIWorkflowsClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="Best AI Automation Workflows for Canadian SMBs"
        subtitle="The 10 highest-ROI automations — ranked by time savings"
        body="Not all automations are equal. These 10 workflows consistently deliver the fastest payback for Canadian small businesses."
        badge="2025 Guide"
        ctaText="Automate Your Top Workflow"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="What are the best AI automation workflows for small businesses?"
              answer="The highest-ROI AI automation workflows for Canadian small businesses are: (1) automated lead follow-up, (2) appointment booking and reminders, (3) client intake and document collection, (4) invoice and payment reminders, (5) FAQ answering and support triage, (6) contract and proposal generation, (7) social media scheduling, (8) employee onboarding, (9) data entry and CRM updating, and (10) internal report generation. Most businesses start with lead follow-up or appointment booking for the fastest payback."
              headingLevel="h2"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Workflow Cards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-3">
              The 10 Highest-ROI Workflows
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Ranked by weekly time savings. Each workflow is production-ready and customized to your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {workflows.map((workflow, index) => {
              const complexity = complexityConfig[workflow.complexity];
              return (
                <motion.div
                  key={workflow.rank}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.07, duration: 0.5 }}
                  className="bg-white border border-[#E8ECF1] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex gap-4"
                >
                  <div className="flex-shrink-0">
                    <span className="text-4xl font-extrabold text-[#00B4D8] leading-none">
                      {workflow.rank}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-base font-bold text-[#1F2937]">{workflow.name}</h3>
                    </div>
                    <p className="text-sm text-[#6B7280] mb-3">{workflow.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                        {workflow.timeSaved} saved
                      </span>
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border ${complexity.bg} ${complexity.text} ${complexity.border}`}
                      >
                        {complexity.label} complexity
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628]">The impact of automation at scale</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <MetricCard
              value={74}
              suffix="h"
              label="Total potential hours saved/week"
              color="green"
            />
            <MetricCard
              value={2}
              suffix="wk"
              label="Average time to first automation live"
              color="blue"
            />
            <MetricCard
              value={300}
              suffix="%"
              label="Average first-year ROI"
              color="green"
            />
            <MetricCard
              value={10}
              suffix="x"
              label="Scale without extra headcount"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* 5. Before/After */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <BeforeAfterSlider
              title="Top workflow: Lead follow-up automation"
              beforeItems={[
                { label: "Leads go cold waiting for follow-up", value: "67%", sublabel: "Never get a response" },
                { label: "Response time", value: "4-48h", sublabel: "Average" },
                { label: "Manual follow-up emails written", value: "25+", sublabel: "Per week" },
              ]}
              afterItems={[
                { label: "Every lead gets instant follow-up", sublabel: "Within 60 seconds" },
                { label: "Response time", value: "<1min", sublabel: "24/7" },
                { label: "Personalized emails sent automatically" },
              ]}
              beforeTitle="Without Automation"
              afterTitle="With Barrana AI"
            />
          </motion.div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A1628]">Common questions</h2>
          </motion.div>
          <motion.div {...fadeInUp}>
            <FAQAccordion items={faqItems} schemaId="best-ai-workflows-faq" />
          </motion.div>
        </div>
      </section>

      {/* 7. CTA */}
      <CTASection
        headline="Which of these 10 workflows fits your business?"
        subtext="Book a 20-minute call and we'll identify your top 3 automation opportunities."
        primaryCta={{ text: "Get My Automation Plan", href: "/contact" }}
        secondaryCta={{ text: "Browse Industry Workflows", href: "/automation-workflows" }}
      />

      {/* 8. Internal Link Grid */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <InternalLinkGrid
              heading="Explore further"
              links={[
                {
                  href: "/automate-lead-follow-up",
                  title: "Automate Lead Follow-Up",
                  description: "Deep dive into workflow #1 — the most impactful automation for most businesses.",
                },
                {
                  href: "/automation-workflows",
                  title: "Industry Workflow Examples",
                  description: "See detailed workflows for immigration, accounting, contracting, and clinics.",
                },
                {
                  href: "/ai-automation-cost-canada",
                  title: "How Much Does This Cost?",
                  description: "Transparent pricing and ROI calculator.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
