"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
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

const industryWorkflows = [
  {
    href: "/workflows/immigration-intake",
    icon: "🏛️",
    industry: "Immigration Consultants",
    workflow: "Client Intake Automation",
    saves: "18 hrs/week",
    description:
      "Automate the entire intake process — from first inquiry to document collection to case file setup.",
    steps: [
      "Instant response to inquiry",
      "Automated document checklist",
      "Status updates without calls",
      "Case file created automatically",
    ],
  },
  {
    href: "/workflows/accounting-documents",
    icon: "📊",
    industry: "Accounting Firms",
    workflow: "Document Collection Agent",
    saves: "12 hrs/week",
    description:
      "Stop chasing clients for documents. AI agents collect, verify, and organize everything before filing season.",
    steps: [
      "Automated document requests",
      "Follow-up until complete",
      "Categorize uploads automatically",
      "Notify team when ready",
    ],
  },
  {
    href: "/workflows/contractor-leads",
    icon: "🔨",
    industry: "General Contractors",
    workflow: "Lead Qualification & Follow-Up",
    saves: "10 hrs/week",
    description:
      "Qualify leads, follow up on estimates, and book site visits — all automatically.",
    steps: [
      "Instant quote request response",
      "Qualify budget and timeline",
      "Send estimate with auto follow-up",
      "Book site visit automatically",
    ],
  },
  {
    href: "/workflows/clinic-appointments",
    icon: "🏥",
    industry: "Medical Clinics",
    workflow: "Appointment Management",
    saves: "15 hrs/week",
    description:
      "Patients book 24/7, reminders are automatic, and no-shows drop by 40%.",
    steps: [
      "24/7 patient booking",
      "Automated reminders",
      "Handle reschedules",
      "Post-visit follow-up",
    ],
  },
];

const faqItems = [
  {
    question: "What if my industry isn't listed here?",
    answer:
      "These are our most common use cases. We build custom automation for any industry — book a call to discuss your specific workflows.",
  },
  {
    question: "Can I implement more than one workflow at once?",
    answer:
      "Yes. Most clients start with one, then add workflows quarterly as they see results.",
  },
  {
    question: "Do these workflows work with my existing software?",
    answer:
      "Yes. We build on top of your existing tools — CRM, email, calendar, accounting software.",
  },
  {
    question: "Are these workflows customizable?",
    answer:
      "Completely. The examples here are templates. Every implementation is custom-built for your specific process.",
  },
  {
    question: "How do I know which workflow to start with?",
    answer:
      "The one that costs you the most time right now. Our discovery call helps identify this precisely.",
  },
  {
    question: "What's the implementation process?",
    answer:
      "Discovery call → process mapping → build (2 weeks) → testing → launch → 30-day optimization.",
  },
];

export default function AutomationWorkflowsClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="AI Automation Workflows"
        subtitle="Proven automations for 4 industries"
        body="Each workflow below is a real system we've built for Canadian businesses. Click through to see the full process, time savings, and implementation details."
        badge="Industry Playbooks"
        ctaText="Get Your Custom Workflow"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="What AI automation workflows are most effective for small businesses?"
              answer="The four most impactful AI automation workflows for Canadian small businesses are: (1) immigration client intake automation, saving 18+ hours/week for immigration consultants; (2) accounting document collection, saving 12+ hours/week; (3) contractor lead qualification and follow-up, saving 10+ hours/week; and (4) medical clinic appointment management, saving 15+ hours/week."
              headingLevel="h2"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Industry Workflow Cards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628] mb-3">
              Industry Workflow Playbooks
            </h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Click any workflow to see the full process, time savings, and implementation details.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industryWorkflows.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Link href={item.href} className="block h-full">
                  <div className="bg-white border-2 border-[#E8ECF1] rounded-2xl p-8 hover:border-[#00B4D8] hover:shadow-xl transition-all cursor-pointer h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <span className="text-4xl flex-shrink-0">{item.icon}</span>
                      <div>
                        <p className="text-sm font-semibold text-[#00B4D8] uppercase tracking-wide mb-1">
                          {item.industry}
                        </p>
                        <h3 className="text-xl font-bold text-[#0A1628]">{item.workflow}</h3>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20">
                        Saves {item.saves}
                      </span>
                    </div>

                    <p className="text-[#6B7280] mb-6 flex-1">{item.description}</p>

                    <ul className="space-y-2">
                      {item.steps.map((step) => (
                        <li key={step} className="flex items-center gap-2 text-sm text-[#1F2937]">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] flex-shrink-0" />
                          {step}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 pt-4 border-t border-[#E8ECF1]">
                      <span className="text-sm font-semibold text-[#1A5276] group-hover:text-[#00B4D8] transition-colors">
                        See full workflow →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628]">By the numbers</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <MetricCard
              value={55}
              suffix="h"
              label="Total hours saved across all 4 workflows"
              color="green"
            />
            <MetricCard
              value={4}
              suffix=" industries"
              label="With proven workflow templates"
              color="blue"
            />
            <MetricCard
              value={2}
              suffix=" wks"
              label="To first workflow live"
              color="blue"
            />
            <MetricCard
              value={300}
              suffix="%"
              label="Average first-year ROI"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* 5. FAQ */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A1628]">Common questions</h2>
          </motion.div>
          <motion.div {...fadeInUp}>
            <FAQAccordion items={faqItems} schemaId="automation-workflows-faq" />
          </motion.div>
        </div>
      </section>

      {/* 6. CTA */}
      <CTASection
        headline="Ready to implement your first workflow?"
        subtext="Book a discovery call and we'll map your top automation opportunity in 20 minutes."
        primaryCta={{ text: "Book Discovery Call", href: "/contact" }}
        secondaryCta={{ text: "What Does It Cost?", href: "/ai-automation-cost-canada" }}
      />

      {/* 7. Internal Link Grid */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <InternalLinkGrid
              heading="Explore further"
              links={[
                {
                  href: "/best-ai-workflows",
                  title: "Best AI Workflows for SMBs",
                  description: "The 10 highest-ROI automations across all industries.",
                },
                {
                  href: "/how-businesses-use-ai-agents",
                  title: "How Businesses Use AI Agents",
                  description: "Overview of AI agent applications.",
                },
                {
                  href: "/ai-automation-cost-canada",
                  title: "What Does Automation Cost?",
                  description: "Pricing breakdown and ROI analysis.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
