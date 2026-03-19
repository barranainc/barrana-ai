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

export default function AiAgentsVsChatbotsClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="AI Agents vs. Chatbots"
        subtitle="Why the difference matters for your business"
        body={'Most "AI" tools marketed to businesses are glorified chatbots. Real AI agents do something fundamentally different — they take action.'}
        badge="Deep Dive"
        ctaText="See Real AI Agents"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="What is the difference between AI agents and chatbots?"
              answer="Chatbots follow pre-written scripts and answer questions within a fixed flow. AI agents understand natural language, make contextual decisions, connect to external tools and databases, and can execute multi-step tasks autonomously — like booking an appointment, updating a CRM, and sending a confirmation email in a single workflow."
              headingLevel="h2"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Problem / Pain Section */}
      <section className="py-20 bg-[#F7F9FC]" aria-labelledby="problems-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="problems-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              The problem with chatbots
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Most businesses that deploy chatbots end up frustrated. Here's why.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Chatbots frustrate customers with rigid scripts",
                description:
                  "When a customer asks something slightly unexpected, a chatbot breaks. AI agents handle natural variation.",
              },
              {
                title: "Chatbots can't take action — they just talk",
                description:
                  "A chatbot might tell someone how to book; an AI agent books it for them.",
              },
              {
                title: "Chatbots don't integrate with your real systems",
                description:
                  "AI agents connect to your CRM, calendar, email, and databases to actually do work.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                {...staggerChild}
                transition={{
                  ...staggerChild.transition,
                  delay: i * 0.12,
                }}
              >
                <ProblemCard title={card.title} description={card.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Comparison Table (replaces WorkflowDiagram as "How It Works" for this page) */}
      <section className="py-20 bg-white" aria-labelledby="comparison-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="comparison-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Head-to-head comparison
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              See exactly where AI agents go beyond what any chatbot can do.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <ComparisonTable
              caption="Comparison of chatbot capabilities vs AI agent capabilities"
              columns={[
                { key: "feature", label: "Capability" },
                { key: "chatbot", label: "Chatbot" },
                { key: "agent", label: "AI Agent", highlight: true },
              ]}
              rows={[
                {
                  feature: "Understands natural language",
                  values: { chatbot: "Partial", agent: true },
                },
                {
                  feature: "Handles unexpected inputs",
                  values: { chatbot: false, agent: true },
                },
                {
                  feature: "Takes action (books, emails, updates)",
                  values: { chatbot: false, agent: true },
                },
                {
                  feature: "Connects to external systems",
                  values: { chatbot: false, agent: true },
                },
                {
                  feature: "Multi-step task completion",
                  values: { chatbot: false, agent: true },
                },
                {
                  feature: "Learns from conversation context",
                  values: { chatbot: false, agent: true },
                },
                {
                  feature: "Works 24/7 without scripting",
                  values: { chatbot: "Limited", agent: true },
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
              Why the gap matters
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              The performance difference between chatbots and AI agents is measurable.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              value={68}
              suffix="%"
              label="Customer frustration with scripted bots"
              color="red"
              direction="down"
            />
            <MetricCard
              value={4.8}
              suffix="x"
              label="Higher resolution rate with agents vs. chatbots"
              color="green"
              decimals={1}
            />
            <MetricCard
              value={90}
              suffix="%"
              label="Tasks resolved without human handoff"
              color="green"
            />
            <MetricCard
              value={2}
              suffix="min"
              label="Average task completion time"
              color="blue"
            />
          </div>
        </div>
      </section>

      {/* 6. How It Works — WorkflowDiagram */}
      <section className="py-20 bg-white" aria-labelledby="workflow-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="workflow-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              See an agent in action
            </h2>
            <p className="text-[#6B7280] text-lg">
              This is what happens when a new lead reaches out — handled entirely by an AI agent.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <WorkflowDiagram
              title="How an AI Agent handles a new lead inquiry"
              orientation="vertical"
              steps={[
                {
                  id: "1",
                  label: "Client sends inquiry",
                  sublabel: "Via email, form, or SMS",
                  type: "trigger",
                },
                {
                  id: "2",
                  label: "Agent reads & categorizes",
                  sublabel: "Intent, urgency, service type",
                  type: "action",
                },
                {
                  id: "3",
                  label: "Agent qualifies the lead",
                  sublabel: "Asks clarifying questions",
                  type: "decision",
                },
                {
                  id: "4",
                  label: "Booking offered & confirmed",
                  sublabel: "Calendar synced in real time",
                  type: "action",
                },
                {
                  id: "5",
                  label: "CRM updated automatically",
                  sublabel: "Lead status, notes, next steps",
                  type: "outcome",
                },
              ]}
            />
          </motion.div>
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
              Common questions
            </h2>
            <p className="text-[#6B7280] text-lg">
              Straight answers to the questions business owners ask about AI agents.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <FAQAccordion
              schemaId="faq-ai-agents-vs-chatbots"
              items={[
                {
                  question: "Are AI chatbots and AI agents the same thing?",
                  answer:
                    "No. Chatbots are reactive — they respond to questions. Agents are proactive — they take action to complete goals.",
                },
                {
                  question: "Can't I just use ChatGPT as an agent?",
                  answer:
                    "ChatGPT is a conversational AI, not a business agent. It can't book appointments, update your CRM, or send emails on your behalf without custom integration work.",
                },
                {
                  question: "Do AI agents replace customer service staff?",
                  answer:
                    "They handle routine, repetitive requests so your team can focus on complex, high-value interactions.",
                },
                {
                  question: "What systems can AI agents integrate with?",
                  answer:
                    "CRMs (HubSpot, Salesforce), calendars (Google, Outlook), email, SMS, Slack, databases, and custom software via API.",
                },
                {
                  question: "Are AI agents reliable?",
                  answer:
                    "With proper design, yes. We build with fallback logic so complex or sensitive requests escalate to a human.",
                },
                {
                  question: "How much does it cost to deploy an AI agent?",
                  answer:
                    "Depends on complexity — see our pricing page. Most small business agents start around $1,500–$3,000 CDN.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Ready to go beyond chatbots?"
        subtext="See a live AI agent demo built for businesses like yours."
        primaryCta={{ text: "Book a Demo", href: "/contact" }}
        secondaryCta={{ text: "Read AI Automation Guide", href: "/what-is-ai-automation" }}
      />

      {/* 9. Internal Link Grid */}
      <InternalLinkGrid
        links={[
          {
            href: "/what-is-ai-automation",
            title: "What Is AI Automation?",
            description: "Start with the fundamentals before diving into agents.",
          },
          {
            href: "/how-businesses-use-ai-agents",
            title: "How Businesses Use AI Agents",
            description: "Real-world use cases across industries.",
          },
          {
            href: "/automate-lead-follow-up",
            title: "Automate Lead Follow-Up",
            description: "See how agents handle lead nurturing end-to-end.",
          },
        ]}
      />
    </main>
  );
}
