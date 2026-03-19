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
    title: "Filing season creates a document bottleneck",
    description:
      "Dozens of clients, each needing 10–20 documents. Chasing them all manually creates a January–April nightmare.",
  },
  {
    title: "Clients forget, ignore, and miss deadlines",
    description:
      "Without consistent follow-up, clients submit documents late — pushing your team into crunch mode.",
  },
  {
    title: "Your team spends hours on admin, not accounting",
    description:
      "Accountants should be doing tax planning and advisory, not sending the same email to 50 clients.",
  },
];

const workflowSteps = [
  {
    id: "1",
    label: "Filing Season Start / Client Trigger",
    sublabel: "Date-based or manual trigger",
    type: "trigger" as const,
  },
  {
    id: "2",
    label: "Personalized Document List Sent",
    sublabel: "T4s, receipts, statements per client",
    type: "action" as const,
  },
  {
    id: "3",
    label: "Secure Upload Portal Active",
    sublabel: "Easy for clients, organized for you",
    type: "action" as const,
  },
  {
    id: "4",
    label: "Automated Follow-Up Sequence",
    sublabel: "Day 3, 7, 14 reminders",
    type: "action" as const,
  },
  {
    id: "5",
    label: "AI Verifies Completeness",
    sublabel: "Flag missing items, categorize uploads",
    type: "decision" as const,
  },
  {
    id: "6",
    label: "Team Notified: File Ready",
    sublabel: "All docs received and organized",
    type: "outcome" as const,
  },
];

const faqItems = [
  {
    question: "Which accounting software do you integrate with?",
    answer:
      "TaxCycle, ProFile, Xero, QuickBooks, and most major platforms. We also connect to Google Sheets for smaller firms.",
  },
  {
    question: "Is the document portal secure?",
    answer:
      "Yes. We build with bank-grade encryption and PIPEDA compliance for client data.",
  },
  {
    question: "Can we customize the document list per client type?",
    answer:
      "Yes — personal, corporate, self-employed, rental income clients each get different tailored lists.",
  },
  {
    question: "Does this work year-round or just during filing season?",
    answer:
      "Both. The workflow can trigger for any document-collection need throughout the year.",
  },
  {
    question: "Can the AI flag documents that look incorrect?",
    answer:
      "Yes — with additional configuration, we can check for common issues like mismatched names or expired documents.",
  },
  {
    question: "How do smaller accounting firms afford this?",
    answer:
      "Our smallest accounting automations start at $1,500. For a 20-client firm, the time savings alone justify it in the first month.",
  },
];

export default function AccountingDocumentsClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="light"
        title="Accounting Document Collection Automation"
        subtitle="Stop chasing clients for T4s, receipts, and statements"
        body="Filing season is stressful enough. AI automation handles document requests, follow-ups, and completeness verification so your team can focus on the actual accounting."
        ctaText="Automate My Document Collection"
        ctaHref="/contact"
        breadcrumb={[
          { label: "Automation Workflows", href: "/automation-workflows" },
          { label: "Accounting Documents" },
        ]}
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="How do accounting firms automate document collection?"
              answer="Accounting firms automate document collection using AI agents that: (1) send personalized document request lists to each client based on their profile, (2) follow up automatically on day 3, 7, and 14 if documents are missing, (3) provide a secure client portal for uploads, (4) verify completeness and categorize documents as they arrive, and (5) alert the accounting team when a client file is ready for review — eliminating manual chasing entirely."
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
              title="Accounting document collection automation flow"
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
              title="Document collection: before and after"
              beforeItems={[
                { label: "Hours chasing documents per client", value: "2-3h" },
                { label: "Late filings due to missing docs", value: "15%", sublabel: "Average" },
                { label: "Client emails sent manually", value: "200+", sublabel: "Per filing season" },
                { label: "Documents categorized manually", value: "5h/wk" },
              ]}
              afterItems={[
                { label: "Automated follow-up sequences", sublabel: "Zero manual emails" },
                { label: "Documents organized on arrival", sublabel: "Automatic categorization" },
                { label: "Late filings from missing docs", value: "Near zero" },
                { label: "Team only acts when file is complete" },
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
              value={12}
              suffix="h"
              label="Saved per week during filing season"
              color="green"
            />
            <MetricCard
              value={85}
              suffix="%"
              label="Of clients submit by first deadline"
              color="green"
            />
            <MetricCard
              value={200}
              suffix="+"
              label="Automated emails per filing season"
              color="blue"
            />
            <MetricCard
              value={3}
              suffix="x"
              label="More clients serviced per accountant"
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
            <FAQAccordion items={faqItems} schemaId="accounting-documents-faq" />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="This filing season, stop chasing. Start accounting."
        subtext="Set up your document collection automation before the next filing season starts."
        primaryCta={{ text: "Set Up My Automation", href: "/contact" }}
        secondaryCta={{ text: "See Immigration Workflow", href: "/workflows/immigration-intake" }}
      />

      {/* 9. Internal Link Grid */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <InternalLinkGrid
              heading="Explore further"
              links={[
                {
                  href: "/automation-workflows",
                  title: "All Industry Workflows",
                  description: "Browse automations for other industries.",
                },
                {
                  href: "/best-ai-workflows",
                  title: "Best AI Workflows for SMBs",
                  description: "The 10 highest-ROI automations.",
                },
                {
                  href: "/ai-automation-cost-canada",
                  title: "Automation Pricing in Canada",
                  description: "What to expect and how ROI is calculated.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
