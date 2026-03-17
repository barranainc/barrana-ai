"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
import ProblemCard from "@/components/ProblemCard";
import WorkflowDiagram from "@/components/WorkflowDiagram";
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

const faqItems = [
  {
    question: "Will automated responses feel impersonal?",
    answer:
      "No. We personalize messages using the lead's name, service interest, and source. Most clients report their automated responses feel more attentive than their old manual ones.",
  },
  {
    question: "What lead sources can this connect to?",
    answer:
      "Web forms, Facebook Lead Ads, Google Ads, Calendly, phone calls, SMS, email, and more.",
  },
  {
    question: "Can the AI qualify leads before my team talks to them?",
    answer:
      "Yes. The agent asks 2-3 qualifying questions and scores leads before routing them to your calendar.",
  },
  {
    question: "What happens if a lead asks a question the AI can't answer?",
    answer:
      "The agent flags it and either asks for clarification or routes to your team — with full context.",
  },
  {
    question: "How does this connect to my CRM?",
    answer:
      "We integrate with HubSpot, Salesforce, Pipedrive, Go High Level, and most other CRMs via API.",
  },
  {
    question: "Can I see what the AI is saying to my leads?",
    answer:
      "Yes. Every message is logged and you get weekly summary reports plus real-time alerts for hot leads.",
  },
];

export default function AutomateLeadFollowUpClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="Automate Lead Follow-Up"
        subtitle="Every lead. Instant response. Zero effort from your team."
        body="67% of leads never get a response because businesses are too busy. An AI follow-up agent changes that permanently."
        badge="Most Popular Workflow"
        ctaText="Automate My Follow-Up"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="How do you automate lead follow-up?"
              answer="AI lead follow-up automation works by connecting your lead sources (website form, Facebook Ads, Google Ads, email) to an AI agent that instantly sends a personalized response, qualifies the lead with a few questions, updates your CRM, and books a call if appropriate — all within seconds of the inquiry, 24 hours a day."
              headingLevel="h2"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Problem Cards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628]">Why leads fall through the cracks</h2>
            <p className="mt-3 text-[#6B7280] max-w-2xl mx-auto">
              Most businesses lose 30–67% of their leads to slow follow-up. Here's why it happens.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Slow response loses the sale",
                description:
                  "Leads are 21x more likely to convert when contacted within 5 minutes. Most businesses respond in 4–48 hours.",
              },
              {
                title: "Manual follow-up is inconsistent",
                description:
                  "Some leads get 3 follow-ups. Others get none. An AI agent never forgets, never skips.",
              },
              {
                title: "Your team is too busy to follow up properly",
                description:
                  "Between client work and admin, follow-up gets deprioritized. Until a competitor steals the lead.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
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
              title="How AI lead follow-up works"
              orientation="vertical"
              steps={[
                {
                  id: "1",
                  label: "New Lead Arrives",
                  sublabel: "Form, ad, SMS, email, call",
                  type: "trigger",
                },
                {
                  id: "2",
                  label: "AI Sends Instant Response",
                  sublabel: "Personalized within 60 seconds",
                  type: "action",
                },
                {
                  id: "3",
                  label: "Lead Qualifies Themselves",
                  sublabel: "AI asks 2-3 smart questions",
                  type: "decision",
                },
                {
                  id: "4",
                  label: "Hot Lead → Booking Offered",
                  sublabel: "Calendar link or direct booking",
                  type: "action",
                },
                {
                  id: "5",
                  label: "CRM Updated Automatically",
                  sublabel: "Score, notes, status",
                  type: "action",
                },
                {
                  id: "6",
                  label: "Follow-Up Sequence Starts",
                  sublabel: "Day 1, 3, 7 automated",
                  type: "outcome",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Metrics */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628]">What the numbers say</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <MetricCard
              value={21}
              suffix="x"
              label="Higher conversion with <5min response"
              color="green"
            />
            <MetricCard
              value={67}
              suffix="%"
              label="Of leads that never get followed up"
              color="red"
              direction="down"
            />
            <MetricCard
              value={100}
              suffix="%"
              label="Of leads that get instant response with AI"
              color="green"
            />
            <MetricCard
              value={8}
              suffix="h"
              label="Weekly hours saved on follow-up"
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* 6. Before/After */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <BeforeAfterSlider
              title="Lead follow-up: before and after"
              beforeItems={[
                { label: "Response time", value: "4-48h", sublabel: "Average" },
                { label: "Follow-up sequence", value: "0-3", sublabel: "Inconsistent" },
                { label: "Leads that fall through", value: "67%" },
                { label: "CRM updated manually", value: "Rarely" },
              ]}
              afterItems={[
                { label: "Response time", value: "<60s", sublabel: "24/7" },
                { label: "Follow-up sequence", value: "Always", sublabel: "Days 1, 3, 7 automatically" },
                { label: "Every lead tracked and followed up" },
                { label: "CRM updated on every interaction" },
              ]}
              beforeTitle="Without Automation"
              afterTitle="With Barrana AI"
            />
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A1628]">Common questions</h2>
          </motion.div>
          <motion.div {...fadeInUp}>
            <FAQAccordion items={faqItems} schemaId="automate-lead-follow-up-faq" />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Stop losing leads to slow response times"
        subtext="Get an AI agent that responds to every lead in under 60 seconds, 24/7."
        primaryCta={{ text: "Automate My Follow-Up", href: "/contact" }}
        secondaryCta={{ text: "See All Workflows", href: "/best-ai-workflows" }}
      />

      {/* 9. Internal Link Grid */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <InternalLinkGrid
              heading="Related resources"
              links={[
                {
                  href: "/ai-receptionist",
                  title: "AI Receptionist for Inbound Calls",
                  description: "Handle inbound calls the same way — with AI.",
                },
                {
                  href: "/automation-workflows/contractor-leads",
                  title: "Contractor Lead Automation",
                  description: "Industry-specific lead follow-up for trades businesses.",
                },
                {
                  href: "/best-ai-workflows",
                  title: "Best AI Workflows for SMBs",
                  description: "See the 10 highest-ROI automations for Canadian businesses.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
