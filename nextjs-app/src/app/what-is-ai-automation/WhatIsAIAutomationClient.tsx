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

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
  viewport: { once: true, amount: 0.15 },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
};

export default function WhatIsAIAutomationClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="What Is AI Automation?"
        subtitle="A plain-English guide for Canadian business owners"
        body="AI automation uses software agents to handle repetitive tasks around the clock — so your team can focus on work that actually needs a human."
        badge="Educational Guide"
        ctaText="See It in Action"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="What is AI automation?"
              answer="AI automation is the use of intelligent software agents to handle repetitive business tasks — such as answering client inquiries, routing leads, processing documents, or booking appointments — without human intervention. Unlike basic automation tools, AI agents can understand natural language, make context-aware decisions, and adapt to varied inputs."
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
              Why manual processes hold you back
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              These are the most common operational problems Canadian businesses face before
              automating.
            </p>
          </motion.div>

          <motion.div
            {...stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: "Your team wastes hours on repetitive tasks",
                description:
                  "Answering the same questions, manually routing leads, chasing documents — these tasks eat 30–40% of your team's time every week.",
              },
              {
                title: "Errors creep in when humans do repetitive work",
                description:
                  "Tired staff make mistakes on data entry, follow-up, and scheduling. Automation doesn't get tired.",
              },
              {
                title: "You can't scale without hiring more people",
                description:
                  "Adding headcount for each new client isn't sustainable. Automation lets you grow without proportional staff costs.",
              },
            ].map((card) => (
              <motion.div key={card.title} {...staggerChild}>
                <ProblemCard title={card.title} description={card.description} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. How It Works — WorkflowDiagram */}
      <section className="py-20 bg-white" aria-labelledby="how-it-works-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="how-it-works-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              How AI automation works
            </h2>
            <p className="text-[#6B7280] text-lg">
              Every automation follows a five-step cycle — from trigger to outcome.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <WorkflowDiagram
              orientation="vertical"
              steps={[
                {
                  id: "1",
                  label: "Trigger Event",
                  sublabel: "New lead, email, form, call",
                  type: "trigger",
                },
                {
                  id: "2",
                  label: "AI Reads & Understands",
                  sublabel: "Natural language processing",
                  type: "action",
                },
                {
                  id: "3",
                  label: "Agent Decides Next Step",
                  sublabel: "Context-aware routing",
                  type: "decision",
                },
                {
                  id: "4",
                  label: "Task Executed Automatically",
                  sublabel: "Email sent, form filled, record updated",
                  type: "action",
                },
                {
                  id: "5",
                  label: "Outcome Logged & Reported",
                  sublabel: "Full audit trail",
                  type: "outcome",
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
              The impact of AI automation
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Numbers from real automation deployments across Canadian SMBs.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              value={40}
              suffix="%"
              label="Reduction in admin work"
              color="green"
            />
            <MetricCard
              value={24}
              suffix="/7"
              label="Hours your agent works"
              color="blue"
            />
            <MetricCard
              value={3}
              suffix="x"
              label="Faster lead response time"
              color="green"
            />
            <MetricCard
              value={80}
              suffix="%"
              label="Lower cost vs. hiring"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* 6. Before / After */}
      <section className="py-20 bg-white" aria-labelledby="before-after-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="before-after-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              See the difference
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Drag the slider to compare your typical week before and after automation.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <BeforeAfterSlider
              title="Your week, before and after AI automation"
              beforeItems={[
                { label: "Answering repetitive emails", value: "8h", sublabel: "Every week" },
                { label: "Manual lead follow-up", value: "5h" },
                { label: "Booking & rescheduling", value: "4h" },
                { label: "Errors from manual entry", value: "3+", sublabel: "Per week" },
              ]}
              afterItems={[
                { label: "All repetitive emails answered", sublabel: "Automatically, 24/7" },
                { label: "Leads followed up instantly", sublabel: "Within seconds" },
                { label: "Appointments fully automated" },
                { label: "Data always clean & correct" },
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
              Frequently asked questions
            </h2>
            <p className="text-[#6B7280] text-lg">
              Answers to the questions Canadian business owners ask most.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <FAQAccordion
              schemaId="faq-what-is-ai-automation"
              items={[
                {
                  question: "Does AI automation require technical staff?",
                  answer:
                    "No. At Barrana AI, we build, deploy, and maintain your automation system. You describe the problem; we build the solution.",
                },
                {
                  question: "Is AI automation the same as traditional software?",
                  answer:
                    "No. Traditional software follows rigid rules. AI agents understand context, handle varied inputs, and can make judgment calls — like deciding which leads are high priority.",
                },
                {
                  question: "What tasks can AI automation handle?",
                  answer:
                    "Lead follow-up, appointment booking, document collection, client intake, invoice processing, answering FAQs, routing support requests, and more.",
                },
                {
                  question: "How long does it take to get started?",
                  answer:
                    "Most clients have their first automation live within 2–3 weeks of our discovery call.",
                },
                {
                  question: "Is AI automation safe for client data?",
                  answer:
                    "Yes. We build with privacy-first architecture and can comply with PIPEDA requirements for Canadian businesses.",
                },
                {
                  question: "Does AI automation work for small businesses?",
                  answer:
                    "Absolutely. Many of our clients are 1–10 person teams who save 15–20 hours per week.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="See how AI automation would work for your business"
        subtext="Book a free 20-minute discovery call. We'll identify your top 3 automation opportunities."
        primaryCta={{ text: "Book Free Discovery Call", href: "/contact" }}
        secondaryCta={{ text: "View Automation Examples", href: "/automation-workflows" }}
      />

      {/* 9. Internal Link Grid */}
      <InternalLinkGrid
        heading="Learn More"
        links={[
          {
            href: "/ai-agents-vs-chatbots",
            title: "AI Agents vs. Chatbots: What's the Difference?",
            description:
              "Understand why agents are fundamentally different from chatbots and why it matters.",
          },
          {
            href: "/how-businesses-use-ai-agents",
            title: "How Canadian Businesses Use AI Agents",
            description: "Real examples of automation workflows across industries.",
          },
          {
            href: "/ai-automation-cost-canada",
            title: "What Does AI Automation Cost in Canada?",
            description: "Transparent pricing breakdown and ROI analysis.",
          },
        ]}
      />
    </main>
  );
}
