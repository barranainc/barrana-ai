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
    title: "Document chasing eats your week",
    description:
      "Sending reminder after reminder for missing documents takes hours every week — and clients still miss deadlines.",
  },
  {
    title: "Clients call constantly for status updates",
    description:
      "Every 'where is my case?' call takes 5 minutes. Multiply that by 30 clients and you've lost 2.5 hours.",
  },
  {
    title: "Manual case file setup introduces errors",
    description:
      "Manually entering client data into your case management system leads to mistakes that create compliance risk.",
  },
];

const workflowSteps = [
  {
    id: "1",
    label: "Client Signs Agreement",
    sublabel: "Trigger: contract signature or deposit",
    type: "trigger" as const,
  },
  {
    id: "2",
    label: "Welcome Email + Document Checklist Sent",
    sublabel: "Personalized by visa type",
    type: "action" as const,
  },
  {
    id: "3",
    label: "Document Portal Created",
    sublabel: "Secure upload link generated",
    type: "action" as const,
  },
  {
    id: "4",
    label: "Follow-Up Sequence Begins",
    sublabel: "Day 3, 7, 14 reminders if incomplete",
    type: "action" as const,
  },
  {
    id: "5",
    label: "Documents Verified by AI",
    sublabel: "Completeness check, flag issues",
    type: "decision" as const,
  },
  {
    id: "6",
    label: "Case File Created Automatically",
    sublabel: "In your CRM or case management system",
    type: "action" as const,
  },
  {
    id: "7",
    label: "Client Notified, Team Alerted",
    sublabel: "Ready for consultant review",
    type: "outcome" as const,
  },
];

const faqItems = [
  {
    question: "Which case management software does this integrate with?",
    answer:
      "We integrate with IMMItrax, Salesforce, HubSpot, and custom spreadsheet-based systems. Tell us what you use and we'll connect it.",
  },
  {
    question: "Is client data stored securely?",
    answer:
      "Yes. We build with PIPEDA-compliant security and can deploy on Canadian servers if required.",
  },
  {
    question: "Can the AI verify specific immigration documents?",
    answer:
      "Yes — we can configure checks for specific document types (passports, police certificates, transcripts) with expiry date validation.",
  },
  {
    question: "What happens if a client misses all the deadlines?",
    answer:
      "The agent flags the case for urgent consultant follow-up after the final automated reminder.",
  },
  {
    question: "Can this work for RCIC firms with multiple consultants?",
    answer:
      "Yes. Cases are assigned to the right consultant automatically based on visa type or assignment rules.",
  },
  {
    question: "How long does setup take?",
    answer:
      "2–3 weeks from our initial call. We map your current intake process, then automate it step by step.",
  },
];

export default function ImmigrationIntakeClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="light"
        title="Immigration Client Intake Automation"
        subtitle="Save 18 hours per week. Never miss a document. Never miss a deadline."
        body="Immigration consultants spend hours every week chasing documents, answering status questions, and manually setting up case files. This workflow automates all of it."
        ctaText="Automate My Intake"
        ctaHref="/contact"
        breadcrumb={[
          { label: "Automation Workflows", href: "/automation-workflows" },
          { label: "Immigration Intake" },
        ]}
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="How do immigration consultants automate client intake?"
              answer="Immigration consultant intake automation works by: (1) sending an automated welcome and document checklist when a new client signs, (2) following up automatically until all documents are received, (3) verifying document completeness with AI, (4) setting up the case file in your management system automatically, and (5) providing clients with automated status updates — eliminating the most time-consuming manual workflows."
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
              title="The complete immigration intake automation workflow"
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
              title="Immigration intake: before and after automation"
              beforeItems={[
                { label: "Document follow-up calls per week", value: "15+" },
                { label: "Time spent on manual case setup", value: "6h", sublabel: "Per week" },
                { label: "Client status update calls", value: "12+", sublabel: "Per week" },
                { label: "Document errors missed", value: "3-5", sublabel: "Per filing season" },
              ]}
              afterItems={[
                { label: "Automated follow-up sequences sent" },
                { label: "Case files created automatically", sublabel: "Zero manual data entry" },
                { label: "Clients get automated status updates", sublabel: "No calls needed" },
                { label: "AI flags missing/incorrect documents" },
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
              value={18}
              suffix="h"
              label="Saved per week"
              color="green"
            />
            <MetricCard
              value={100}
              suffix="%"
              label="Of documents tracked to completion"
              color="green"
            />
            <MetricCard
              value={60}
              suffix="%"
              label="Fewer 'status update' client calls"
              color="green"
            />
            <MetricCard
              value={0}
              suffix=" missed"
              label="Deadlines with automated reminders"
              color="blue"
              direction="down"
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
            <FAQAccordion items={faqItems} schemaId="immigration-intake-faq" />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Stop chasing documents. Start closing cases."
        subtext="Book a discovery call and we'll map your intake automation in 20 minutes."
        primaryCta={{ text: "Automate My Intake", href: "/contact" }}
        secondaryCta={{ text: "Other Industry Workflows", href: "/automation-workflows" }}
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
                  title: "All Automation Workflows",
                  description: "Browse workflows for other industries.",
                },
                {
                  href: "/workflows/accounting-documents",
                  title: "Accounting Document Automation",
                  description: "Similar document-collection automation for accountants.",
                },
                {
                  href: "/ai-automation-cost-canada",
                  title: "What Does This Cost?",
                  description: "Pricing and ROI breakdown.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
