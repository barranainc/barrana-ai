"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
import ProblemCard from "@/components/ProblemCard";
import ComparisonTable from "@/components/ComparisonTable";
import MetricCard from "@/components/MetricCard";
import ToolStackDiagram from "@/components/ToolStackDiagram";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import InternalLinkGrid from "@/components/InternalLinkGrid";

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

const decisionCards = [
  {
    title: "Choose Zapier when...",
    color: "amber" as const,
    bgColor: "#FEF3C7",
    borderColor: "#F59E0B",
    headingColor: "#92400E",
    checkColor: "#D97706",
    points: [
      "You have simple if-then workflows",
      "You're connecting popular SaaS apps (Gmail, Slack, HubSpot)",
      "You want zero technical setup",
      "Your volume is low (<1,000 tasks/month)",
      "Budget is very tight initially",
    ],
  },
  {
    title: "Choose n8n when...",
    color: "blue" as const,
    bgColor: "#EFF6FF",
    borderColor: "#1A5276",
    headingColor: "#1e3a5f",
    checkColor: "#1A5276",
    points: [
      "You have technical staff who can maintain it",
      "You need complex branching without LLM",
      "You want open-source flexibility",
      "You have high task volume (cost matters)",
      "Integrations with custom APIs needed",
    ],
  },
  {
    title: "Choose Custom AI when...",
    color: "green" as const,
    bgColor: "#ECFDF5",
    borderColor: "#10B981",
    headingColor: "#064e3b",
    checkColor: "#10B981",
    points: [
      "Workflow requires natural language or judgment",
      "You want built & maintained by experts",
      "Your process is non-standard or complex",
      "You need voice AI or multi-step agent logic",
      "You want guaranteed ROI and support",
    ],
    highlight: true,
  },
];

export default function ZapierVsClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="Zapier vs n8n vs Custom AI"
        subtitle="Which automation tool is actually right for your business?"
        body="The honest comparison most vendors won't give you — including when not to choose custom AI."
        badge="Tool Comparison"
        ctaText="Get a Recommendation"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="What is the difference between Zapier, n8n, and custom AI agents?"
              answer="Zapier is a no-code tool ideal for simple, linear automations between popular SaaS apps — easy to set up but expensive at scale and limited in logic. n8n is an open-source workflow automation platform that's more flexible and cheaper at volume, but requires technical setup. Custom AI agents are purpose-built systems using large language models and your specific data — best for complex, non-linear workflows that require judgment, natural language understanding, or integration with non-standard systems."
              headingLevel="h2"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Problem Section */}
      <section className="py-20 bg-[#F7F9FC]" aria-labelledby="problems-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="problems-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Common decision mistakes
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Most businesses choose the wrong tool because of these avoidable traps.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Using Zapier for complex workflows it can't handle",
                description:
                  "Zapier is excellent for simple 'if this then that' logic. When your workflow needs conditional branching or AI judgment, it breaks.",
              },
              {
                title: "Over-engineering with custom AI when Zapier would do",
                description:
                  "Not everything needs a custom AI agent. Simple automations between standard apps are faster and cheaper with off-the-shelf tools.",
              },
              {
                title: "Choosing a tool based on price alone",
                description:
                  "The cheapest tool that doesn't solve your problem is the most expensive decision. The right tool depends on your workflow complexity.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                {...staggerChild}
                transition={{
                  ...staggerChild.transition,
                  delay: i * 0.12,
                }}
                viewport={{ once: true }}
              >
                <ProblemCard title={card.title} description={card.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table */}
      <section className="py-20 bg-white" aria-labelledby="comparison-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="comparison-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Head-to-head comparison
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Every key dimension, side by side — no marketing spin.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <ComparisonTable
              caption="Comparison of Zapier, n8n, and Custom AI Agent capabilities"
              columns={[
                { key: "feature", label: "" },
                { key: "zapier", label: "Zapier" },
                { key: "n8n", label: "n8n" },
                { key: "custom", label: "Custom AI Agent", highlight: true },
              ]}
              rows={[
                {
                  feature: "Best for",
                  values: {
                    zapier: "Simple app-to-app connections",
                    n8n: "Technical teams, complex flows",
                    custom: "Business-critical, judgment-heavy",
                  },
                },
                {
                  feature: "Handles natural language",
                  values: { zapier: false, n8n: false, custom: true },
                },
                {
                  feature: "Non-linear decision logic",
                  values: { zapier: false, n8n: "Partial", custom: true },
                },
                {
                  feature: "Integrates with non-standard systems",
                  values: { zapier: false, n8n: "Partial", custom: true },
                },
                {
                  feature: "Setup complexity",
                  values: { zapier: "Low", n8n: "Medium-High", custom: "Handled for you" },
                },
                {
                  feature: "Requires technical staff",
                  values: { zapier: false, n8n: true, custom: false },
                },
                {
                  feature: "Monthly cost (small business)",
                  values: { zapier: "$50–$250/mo", n8n: "$20–$80/mo", custom: "$200–$800/mo" },
                },
                {
                  feature: "Upfront cost",
                  values: { zapier: "$0", n8n: "$0–$500", custom: "$1,500–$8,000" },
                },
                {
                  feature: "Scales without per-task fees",
                  values: { zapier: false, n8n: true, custom: true },
                },
                {
                  feature: "Customizable to your exact workflow",
                  values: { zapier: false, n8n: "Partial", custom: true },
                },
                {
                  feature: "Works with AI/LLM capabilities",
                  values: { zapier: "Add-on", n8n: "Add-on", custom: true },
                },
                {
                  feature: "Maintenance required",
                  values: { zapier: "Low", n8n: "Medium", custom: "Handled by Barrana AI" },
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 5. When to Use Each — Decision Cards */}
      <section className="py-20 bg-[#F7F9FC]" aria-labelledby="decision-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="decision-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Which tool is right for you?
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Use these criteria to match your workflow to the right platform.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {decisionCards.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.12,
                }}
                className={`rounded-2xl border-2 p-6 flex flex-col gap-4 ${card.highlight ? "ring-2 ring-[#10B981] shadow-lg" : ""}`}
                style={{
                  backgroundColor: card.bgColor,
                  borderColor: card.borderColor,
                }}
              >
                {card.highlight && (
                  <span
                    className="self-start text-xs font-semibold px-3 py-1 rounded-full text-white"
                    style={{ backgroundColor: card.checkColor }}
                  >
                    Recommended
                  </span>
                )}
                <h3
                  className="text-xl font-bold"
                  style={{ color: card.headingColor }}
                >
                  {card.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {card.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-[#1F2937] text-sm">
                      <svg
                        className="w-4 h-4 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ color: card.checkColor }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Metrics */}
      <section className="py-20 bg-white" aria-labelledby="metrics-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="metrics-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              The numbers behind the decision
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              What businesses actually experience with each approach.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              value={80}
              suffix="%"
              label="Of Zapier users hit limits within 6 months"
              color="red"
              direction="down"
            />
            <MetricCard
              value={3}
              suffix="x"
              label="More workflows custom AI handles vs. Zapier"
              color="green"
            />
            <MetricCard
              value={0}
              suffix=" hrs"
              label="Your team spends on maintenance with us"
              color="blue"
            />
            <MetricCard
              value={300}
              suffix="%"
              label="Average ROI on custom AI automation"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* 7. Tool Stack Diagram */}
      <section className="py-20 bg-[#F7F9FC]" aria-labelledby="stack-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="stack-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              How Barrana AI builds custom automation
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              We combine the best of each layer — n8n for workflow logic, LLMs for intelligence, your existing apps at the base.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <ToolStackDiagram
              title="How Barrana AI uses n8n + LLMs + your existing tools"
              layers={[
                {
                  label: "Your Existing Apps",
                  sublabel: "No changes to your stack",
                  tools: [
                    { name: "Gmail" },
                    { name: "HubSpot" },
                    { name: "Google Calendar" },
                    { name: "Stripe" },
                    { name: "Salesforce" },
                  ],
                  color: "#6B7280",
                  bgColor: "#F7F9FC",
                },
                {
                  label: "n8n Workflow Engine",
                  sublabel: "Open-source backbone",
                  tools: [
                    { name: "Workflow Logic" },
                    { name: "API Connectors" },
                    { name: "Error Handling" },
                    { name: "Data Transform" },
                  ],
                  color: "#1A5276",
                  bgColor: "#EFF6FF",
                },
                {
                  label: "AI Intelligence Layer",
                  sublabel: "Makes it actually smart",
                  tools: [
                    { name: "GPT-4 / Claude" },
                    { name: "Custom Prompts" },
                    { name: "Memory Store" },
                    { name: "Conversation Logic" },
                  ],
                  color: "#00B4D8",
                  bgColor: "#E0F7FA",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Common questions
            </h2>
            <p className="text-[#6B7280] text-lg">
              Straight answers about choosing the right automation platform.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <FAQAccordion
              schemaId="faq-zapier-vs-n8n-vs-custom-ai"
              items={[
                {
                  question: "Does Barrana AI use Zapier or n8n?",
                  answer:
                    "We primarily build on n8n as our workflow engine, with custom AI layers on top. For simple client needs, we sometimes recommend Zapier as a starting point.",
                },
                {
                  question: "Can you migrate a Zapier workflow to a custom AI system?",
                  answer:
                    "Yes. If your Zapier automations have outgrown the platform, we can migrate and enhance them.",
                },
                {
                  question: "What if I already have n8n set up?",
                  answer:
                    "We can build on top of your existing n8n instance or migrate it to a managed setup.",
                },
                {
                  question: "Is n8n actually free?",
                  answer:
                    "The open-source version is free, but it requires a server to host ($5–$20/month on DigitalOcean) and technical knowledge to maintain.",
                },
                {
                  question: "When is Zapier the right choice?",
                  answer:
                    "When you need to connect two or three popular SaaS apps with simple logic and volume under 1,000 tasks/month.",
                },
                {
                  question: "How do I know if my workflow is too complex for Zapier?",
                  answer:
                    "If you've tried to build it in Zapier and it keeps breaking, or if it requires reading text and making decisions — it needs a custom AI agent.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 9. CTA */}
      <CTASection
        headline="Not sure which approach is right for you?"
        subtext="A 20-minute call will give you a clear recommendation — no sales pressure."
        primaryCta={{ text: "Get a Free Recommendation", href: "/contact" }}
        secondaryCta={{ text: "See Custom AI Pricing", href: "/ai-automation-cost-canada" }}
      />

      {/* 10. Internal Link Grid */}
      <InternalLinkGrid
        links={[
          {
            href: "/ai-agent-vs-automation",
            title: "AI Agent vs. Basic Automation",
            description: "Another dimension of the same decision.",
          },
          {
            href: "/ai-automation-cost-canada",
            title: "What Does Custom AI Cost?",
            description: "Transparent pricing for custom AI automation in Canada.",
          },
          {
            href: "/what-is-ai-automation",
            title: "What Is AI Automation?",
            description: "Start with the fundamentals.",
          },
        ]}
      />
    </main>
  );
}
