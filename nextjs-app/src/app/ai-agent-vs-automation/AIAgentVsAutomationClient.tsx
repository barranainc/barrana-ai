"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
import ProblemCard from "@/components/ProblemCard";
import ComparisonTable from "@/components/ComparisonTable";
import MetricCard from "@/components/MetricCard";
import WorkflowDiagram from "@/components/WorkflowDiagram";
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

const exampleCards = [
  {
    title: "Booking confirmation email",
    type: "rule-based" as const,
    explanation: "Structured, always the same — a perfect fit for rule-based automation.",
  },
  {
    title: "Qualifying a new lead by reading their inquiry",
    type: "ai-agent" as const,
    explanation: "Requires understanding intent, context, and making a judgment call.",
  },
  {
    title: "Sending invoice 30 days after project close",
    type: "rule-based" as const,
    explanation: "Time-based trigger with no variation — simple and reliable with rules.",
  },
  {
    title: "Routing a support email to the right department",
    type: "ai-agent" as const,
    explanation: "Requires intent classification from unstructured text — needs AI reasoning.",
  },
];

export default function AIAgentVsAutomationClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="AI Agent vs. Traditional Automation"
        subtitle="Rules-based tools vs. intelligent systems — what's the difference?"
        body="Not all 'automation' is the same. Understanding the difference between rule-based automation and AI agents will help you choose the right approach for each workflow."
        badge="Technology Guide"
        ctaText="Get Expert Guidance"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="What is the difference between an AI agent and traditional automation?"
              answer="Traditional automation follows pre-defined rules: 'if X then Y.' It's reliable for structured, predictable workflows but breaks when inputs vary. AI agents use large language models to understand context, handle variability, and make decisions — like understanding a client email, determining intent, and routing appropriately. The key difference: automation is deterministic (same input always produces same output), while AI agents are adaptive (they handle novel situations)."
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
              Where businesses get stuck
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Mismatching the tool to the workflow is the most common — and expensive — automation mistake.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Rule-based automation breaks on edge cases",
                description:
                  "Every business process has exceptions. Traditional automation fails when inputs don't match the predefined pattern — requiring manual intervention.",
              },
              {
                title: "Not knowing which approach to use costs time and money",
                description:
                  "Building an AI agent for a simple task wastes budget. Using rule-based automation for complex workflows creates constant maintenance.",
              },
              {
                title: "The market conflates 'automation' and 'AI'",
                description:
                  "Many tools marketed as 'AI automation' are just rule-based workflows with AI branding. Knowing the difference protects your investment.",
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

      {/* 4. Core Difference — 2-column inline comparison */}
      <section className="py-20 bg-white" aria-labelledby="core-diff-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="core-diff-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              The core difference
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Two fundamentally different approaches — each right for different workflows.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Rule-Based Automation */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0 }}
              className="rounded-2xl border-2 border-[#F59E0B] bg-[#FEF3C7] p-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#F59E0B] text-white font-bold text-lg">
                  R
                </span>
                <h3 className="text-xl font-bold text-[#92400E]">Rule-Based Automation</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Follows rigid if/then logic",
                  "Fails on unexpected inputs",
                  "Fast and cheap for simple flows",
                  "Zero AI reasoning",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[#1F2937] text-sm">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#D97706]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-2 pt-4 border-t border-[#F59E0B]/40">
                <p className="text-xs font-semibold text-[#92400E] uppercase tracking-wide mb-2">
                  Best for
                </p>
                <p className="text-sm text-[#1F2937]">
                  Data syncing, scheduled tasks, form processing
                </p>
              </div>
            </motion.div>

            {/* AI Agent */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
              className="rounded-2xl border-2 border-[#10B981] bg-[#ECFDF5] p-8 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#10B981] text-white font-bold text-lg">
                  AI
                </span>
                <h3 className="text-xl font-bold text-[#064e3b]">AI Agent</h3>
              </div>
              <ul className="flex flex-col gap-3">
                {[
                  "Understands natural language and context",
                  "Handles variation and edge cases",
                  "More powerful for complex workflows",
                  "Uses LLM reasoning",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-2 text-[#1F2937] text-sm">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0 text-[#10B981]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
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
              <div className="mt-2 pt-4 border-t border-[#10B981]/40">
                <p className="text-xs font-semibold text-[#064e3b] uppercase tracking-wide mb-2">
                  Best for
                </p>
                <p className="text-sm text-[#1F2937]">
                  Lead qualification, intake, customer communication
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. Decision Framework — WorkflowDiagram */}
      <section className="py-20 bg-[#F7F9FC]" aria-labelledby="decision-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="decision-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Which approach does your workflow need?
            </h2>
            <p className="text-[#6B7280] text-lg">
              Walk through this decision framework to find the right fit.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <WorkflowDiagram
              title="Which approach does your workflow need?"
              orientation="vertical"
              steps={[
                {
                  id: "1",
                  label: "Does your workflow have structured, predictable inputs?",
                  type: "trigger",
                },
                {
                  id: "2",
                  label: "Yes → Use Rule-Based Automation",
                  sublabel: "Zapier, n8n, or simple scripts",
                  type: "action",
                },
                {
                  id: "3",
                  label: "Does it require reading text or making judgment calls?",
                  type: "decision",
                },
                {
                  id: "4",
                  label: "Yes → You Need an AI Agent",
                  sublabel: "Natural language understanding required",
                  type: "action",
                },
                {
                  id: "5",
                  label: "Custom AI Agent Built by Barrana AI",
                  sublabel: "Handles complexity, scales with your business",
                  type: "outcome",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 6. Comparison Table */}
      <section className="py-20 bg-white" aria-labelledby="comparison-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="comparison-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Feature-by-feature comparison
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              How the two approaches stack up across the dimensions that matter most.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <ComparisonTable
              caption="Comparison of rule-based automation vs AI agent capabilities"
              columns={[
                { key: "feature", label: "Dimension" },
                { key: "rulebased", label: "Rule-Based Automation" },
                { key: "aiagent", label: "AI Agent", highlight: true },
              ]}
              rows={[
                {
                  feature: "Handles natural language input",
                  values: { rulebased: false, aiagent: true },
                },
                {
                  feature: "Works with structured data only",
                  values: { rulebased: true, aiagent: "Both" },
                },
                {
                  feature: "Makes contextual decisions",
                  values: { rulebased: false, aiagent: true },
                },
                {
                  feature: "Fails on unexpected input",
                  values: { rulebased: true, aiagent: false },
                },
                {
                  feature: "Understands email content",
                  values: { rulebased: false, aiagent: true },
                },
                {
                  feature: "Cost at simple scale",
                  values: { rulebased: "Low", aiagent: "Medium" },
                },
                {
                  feature: "Handles complex multi-step logic",
                  values: { rulebased: false, aiagent: true },
                },
                {
                  feature: "Setup complexity",
                  values: { rulebased: "Low", aiagent: "Medium (handled for you)" },
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 7. Metrics */}
      <section className="py-20 bg-[#F7F9FC]" aria-labelledby="metrics-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="metrics-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Why the distinction matters
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              The performance gap between rule-based and AI-powered automation is measurable.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              value={85}
              suffix="%"
              label="Of business workflows have exception cases"
              color="blue"
            />
            <MetricCard
              value={60}
              suffix="%"
              label="Of rule-based automations break within 6 months"
              color="red"
              direction="down"
            />
            <MetricCard
              value={4}
              suffix="x"
              label="More workflows AI agents handle reliably"
              color="green"
            />
            <MetricCard
              value={90}
              suffix="%"
              label="Of complex workflows suited to AI agents"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* 8. Real Examples — Inline staggered cards */}
      <section className="py-20 bg-white" aria-labelledby="examples-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="examples-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Real workflow examples
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              See which approach fits each type of workflow.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {exampleCards.map((card, i) => {
              const isAiAgent = card.type === "ai-agent";
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: i * 0.1,
                  }}
                  className={`rounded-2xl border p-6 flex flex-col gap-3 ${
                    isAiAgent
                      ? "bg-[#ECFDF5] border-[#10B981]"
                      : "bg-[#FEF3C7] border-[#F59E0B]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        isAiAgent ? "bg-[#10B981]" : "bg-[#F59E0B]"
                      }`}
                    >
                      {isAiAgent ? (
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-xs font-semibold px-3 py-1 rounded-full ${
                        isAiAgent
                          ? "bg-[#10B981] text-white"
                          : "bg-[#F59E0B] text-white"
                      }`}
                    >
                      {isAiAgent ? "AI Agent" : "Rule-Based"}
                    </span>
                  </div>
                  <h3
                    className={`text-base font-bold ${
                      isAiAgent ? "text-[#064e3b]" : "text-[#92400E]"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#1F2937]">{card.explanation}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="py-20 bg-[#F7F9FC]" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="faq-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Common questions
            </h2>
            <p className="text-[#6B7280] text-lg">
              Answers to what business owners ask when evaluating automation approaches.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <FAQAccordion
              schemaId="faq-ai-agent-vs-automation"
              items={[
                {
                  question: "Can I use both rule-based automation and AI agents?",
                  answer:
                    "Yes — and you should. Simple, structured tasks (reminders, data sync, form processing) are ideal for rule-based automation. Complex, variable tasks (lead qualification, document review, intake) benefit from AI agents. Most of our builds combine both.",
                },
                {
                  question: "Does my business need AI agents or basic automation?",
                  answer:
                    "Depends on your workflows. If your processes involve reading text, making decisions, or handling varied inputs — AI agents. If they're structured and predictable — rule-based is fine.",
                },
                {
                  question: "Are AI agents more expensive than rule-based automation?",
                  answer:
                    "Upfront, yes. But they handle workflows that rule-based systems can't — so the comparison isn't always apples-to-apples.",
                },
                {
                  question: "What's an example of a workflow that needs an AI agent?",
                  answer:
                    "Receiving a client inquiry email, understanding the service they need, qualifying their budget, and booking them appropriately — this requires reading comprehension and judgment that rule-based tools can't provide.",
                },
                {
                  question: "Can rule-based automation work alongside AI agents?",
                  answer:
                    "Absolutely. Our builds typically use n8n for the workflow backbone (rule-based routing, data handling) with AI layers added for the parts that require understanding.",
                },
                {
                  question: "What is an 'agent' specifically?",
                  answer:
                    "In AI terms, an agent is an autonomous system that perceives inputs, reasons about them using an LLM, and takes actions — potentially over multiple steps — to achieve a goal.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 10. CTA */}
      <CTASection
        headline="Not sure which approach your workflow needs?"
        subtext="Tell us what you're trying to automate — we'll recommend the right approach in a free 20-minute call."
        primaryCta={{ text: "Get Free Recommendation", href: "/contact" }}
        secondaryCta={{ text: "Compare Automation Tools", href: "/zapier-vs-n8n-vs-custom-ai" }}
      />

      {/* 11. Internal Link Grid */}
      <InternalLinkGrid
        links={[
          {
            href: "/zapier-vs-n8n-vs-custom-ai",
            title: "Zapier vs n8n vs Custom AI",
            description: "Compare specific automation tools and platforms.",
          },
          {
            href: "/ai-agents-vs-chatbots",
            title: "AI Agents vs. Chatbots",
            description: "Another key distinction in the AI landscape.",
          },
          {
            href: "/what-is-ai-automation",
            title: "What Is AI Automation?",
            description: "The complete beginner's guide.",
          },
        ]}
      />
    </main>
  );
}
