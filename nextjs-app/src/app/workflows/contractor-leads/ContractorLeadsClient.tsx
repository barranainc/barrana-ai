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
    title: "You're too busy on the job to call leads back fast",
    description:
      "The best contractors are often the slowest to respond because they're working. Leads call the next company on the list.",
  },
  {
    title: "Unqualified leads waste your time on-site",
    description:
      "Driving to estimate a job that was never going to convert costs 3+ hours. AI qualification filters these out upfront.",
  },
  {
    title: "Estimate follow-up gets missed when you're busy",
    description:
      "Sending estimates is step one. Following up is where jobs are won or lost — and it's easy to forget.",
  },
];

const workflowSteps = [
  {
    id: "1",
    label: "Quote Request Arrives",
    sublabel: "Website, Kijiji, HomeStars, referral",
    type: "trigger" as const,
  },
  {
    id: "2",
    label: "Instant Response Sent",
    sublabel: "Within 60 seconds, any hour",
    type: "action" as const,
  },
  {
    id: "3",
    label: "AI Qualifies the Lead",
    sublabel: "Project type, budget, timeline, location",
    type: "decision" as const,
  },
  {
    id: "4",
    label: "High-value lead → Site Visit Booked",
    sublabel: "Into your calendar automatically",
    type: "action" as const,
  },
  {
    id: "5",
    label: "Estimate Sent After Visit",
    sublabel: "AI generates draft from template",
    type: "action" as const,
  },
  {
    id: "6",
    label: "Follow-Up Sequence Starts",
    sublabel: "Day 2, 5, 10 if no response",
    type: "action" as const,
  },
  {
    id: "7",
    label: "Lead Won or Filed for Future",
    sublabel: "CRM updated automatically",
    type: "outcome" as const,
  },
];

const faqItems = [
  {
    question: "Can this connect to HomeStars, Kijiji, or Google Ads?",
    answer:
      "Yes — we connect to all common lead sources for contractors including HomeStars, Kijiji, Google Ads, and Facebook Ads.",
  },
  {
    question: "What does the AI ask to qualify a lead?",
    answer:
      "Project type, approximate square footage or scope, timeline, location, and budget range. You define the qualifying criteria.",
  },
  {
    question: "Does it work if I don't have a CRM?",
    answer:
      "Yes. We can start with a simple Google Sheet or set up a free CRM for you as part of the project.",
  },
  {
    question: "Can the AI draft my estimates?",
    answer:
      "Yes — we can build estimate templates so the AI generates a draft estimate based on the job type, ready for your review.",
  },
  {
    question: "What if a lead asks a complex technical question?",
    answer:
      "Technical questions beyond the AI's scope are flagged and forwarded to you with full context.",
  },
  {
    question: "Is this useful in the off-season?",
    answer:
      "Yes — the follow-up and pipeline management continues year-round, keeping leads warm for spring.",
  },
];

export default function ContractorLeadsClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="light"
        title="Contractor Lead Qualification & Follow-Up Automation"
        subtitle="Win more jobs without chasing more leads"
        body="Contractors lose jobs every week because leads don't get called back fast enough. AI automation responds instantly, qualifies the lead, and books the site visit — while you're on the job."
        ctaText="Automate My Lead Follow-Up"
        ctaHref="/contact"
        breadcrumb={[
          { label: "Automation Workflows", href: "/automation-workflows" },
          { label: "Contractor Leads" },
        ]}
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="How do contractors automate lead follow-up?"
              answer="Contractors automate lead follow-up with an AI agent that: (1) instantly responds to quote requests from the website, Kijiji, HomeStars, or referrals; (2) asks qualifying questions about the project scope, timeline, and budget; (3) sends the estimate or books a site visit once qualified; (4) follows up automatically if no response; and (5) updates the CRM with all lead information — without any manual work from the contractor."
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
              title="Contractor lead automation workflow"
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
              title="Contractor lead process: before and after"
              beforeItems={[
                { label: "Response time to new quote requests", value: "4-24h" },
                { label: "Unqualified site visits per month", value: "4-6" },
                { label: "Estimate follow-ups sent", value: "30%", sublabel: "Only sometimes" },
                { label: "Leads lost to slow response", value: "40%+" },
              ]}
              afterItems={[
                { label: "Response time to new quote requests", value: "<60s", sublabel: "24/7" },
                { label: "All leads pre-qualified before site visit" },
                { label: "100% of estimates get follow-up", sublabel: "Automatically" },
                { label: "Every lead tracked and followed up" },
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
              value={10}
              suffix="h"
              label="Saved per week on lead admin"
              color="green"
            />
            <MetricCard
              value={35}
              suffix="%"
              label="Higher lead-to-job conversion"
              color="green"
            />
            <MetricCard
              value={60}
              suffix="s"
              label="Time to first response (vs. 4-24 hours)"
              color="blue"
            />
            <MetricCard
              value={4}
              suffix=" hrs"
              label="Saved per unqualified site visit avoided"
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
            <FAQAccordion items={faqItems} schemaId="contractor-leads-faq" />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Stop losing jobs because you were too busy to call back"
        subtext="AI answers every lead in 60 seconds while you focus on the actual work."
        primaryCta={{ text: "Automate My Leads", href: "/contact" }}
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
                  href: "/automate-lead-follow-up",
                  title: "Lead Follow-Up Automation",
                  description: "Full deep-dive on automated lead follow-up.",
                },
                {
                  href: "/ai-automation-mississauga",
                  title: "AI Automation Mississauga",
                  description: "Serving Mississauga's construction market.",
                },
                {
                  href: "/automation-workflows",
                  title: "All Industry Workflows",
                  description: "See workflows for other industries.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
