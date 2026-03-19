"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
import ProblemCard from "@/components/ProblemCard";
import ComparisonTable from "@/components/ComparisonTable";
import MetricCard from "@/components/MetricCard";
import TimelineDiagram from "@/components/TimelineDiagram";
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
    question: "Should I tell my team about AI automation?",
    answer:
      "Yes — and frame it positively. Lead with 'this will take the annoying work off your plate.' Teams that are involved in implementation have much better outcomes.",
  },
  {
    question: "What tasks should I never automate?",
    answer:
      "Anything requiring empathy, nuanced judgment, sensitive conversations, or where errors could cause harm. AI is not a replacement for thoughtful human interaction.",
  },
  {
    question: "Have any Barrana AI clients reduced headcount?",
    answer:
      "None of our current clients have reduced staff because of AI. Most have grown their teams while keeping costs stable — the automation handles the extra volume.",
  },
  {
    question: "How do I introduce AI automation to resistant staff?",
    answer:
      "Start by automating one task your team genuinely dislikes. When they see the relief it provides, adoption follows naturally.",
  },
  {
    question: "What if the AI makes a mistake with a client?",
    answer:
      "We build escalation logic. Sensitive messages, unusual requests, and anything the AI isn't confident about goes to a human before going to the client.",
  },
  {
    question: "Is AI automation ethical?",
    answer:
      "When deployed responsibly — with transparency, human oversight, and a focus on augmenting rather than replacing — yes. We're happy to discuss our ethical guidelines on a call.",
  },
];

export default function DoesAIReplaceStaffClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="Does AI Replace Your Staff?"
        subtitle="The honest answer most AI companies won't give you"
        body="Short answer: AI handles the repetitive work so your best people can focus on the work only humans can do."
        badge="Honest Perspective"
        ctaText="See What AI Can Automate"
        ctaHref="/what-is-ai-automation"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="Does AI automation replace employees?"
              answer="AI automation replaces specific repetitive tasks — not people. It handles data entry, scheduling, document chasing, follow-up emails, and FAQ answering. It does not replace roles requiring judgment, relationship-building, creative problem solving, or physical presence. Most businesses that implement AI automation reassign staff to higher-value work rather than reduce headcount."
              headingLevel="h2"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Problem / Fear Cards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628]">The common fears — and the reality</h2>
            <p className="mt-3 text-[#6B7280] max-w-2xl mx-auto">
              These worries are understandable. Here's what actually happens when Canadian businesses adopt AI automation.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Fear: 'AI will make my team redundant'",
                description:
                  "Reality: AI eliminates the tasks your team hates. Nobody's passion is copying data from email into a spreadsheet.",
              },
              {
                title: "Fear: 'Clients will notice and complain'",
                description:
                  "Reality: When implemented well, clients notice faster responses and fewer errors — not that a robot is involved.",
              },
              {
                title: "Fear: 'It will break and cause problems'",
                description:
                  "Reality: We build fallback logic so edge cases go to your team. The AI handles the predictable 90%.",
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

      {/* 4. Comparison Table: What AI can vs can't do */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A1628]">What AI does well vs. what humans do better</h2>
            <p className="mt-3 text-[#6B7280] max-w-2xl mx-auto">
              The goal is the right tool for the right job — not replacing one with the other entirely.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <ComparisonTable
              caption="AI vs Human task comparison"
              columns={[
                { key: "ai", label: "AI Does Well", highlight: true },
                { key: "human", label: "Humans Do Better" },
              ]}
              rows={[
                { feature: "Repetitive data entry", values: { ai: true, human: false } },
                { feature: "24/7 response to FAQs", values: { ai: true, human: false } },
                { feature: "Multi-step booking workflows", values: { ai: true, human: false } },
                { feature: "Complex negotiations", values: { ai: false, human: true } },
                { feature: "Building client relationships", values: { ai: false, human: true } },
                { feature: "Creative strategy", values: { ai: false, human: true } },
                { feature: "Handling emotional situations", values: { ai: false, human: true } },
                { feature: "Routine document processing", values: { ai: true, human: false } },
                { feature: "Judgment under ambiguity", values: { ai: false, human: true } },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Metrics */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628]">What the data shows</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <MetricCard
              value={40}
              suffix="%"
              label="Of work hours spent on automatable tasks"
              color="blue"
            />
            <MetricCard
              value={0}
              suffix=" staff"
              label="Replaced on average by our clients"
              color="green"
              direction="down"
            />
            <MetricCard
              value={85}
              suffix="%"
              label="Of clients report team morale improved"
              color="green"
            />
            <MetricCard
              value={15}
              suffix="h"
              label="Average hours returned to meaningful work"
              color="green"
            />
          </div>
        </div>
      </section>

      {/* 6. Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <TimelineDiagram
              title="What typically happens when businesses adopt AI automation"
              nodes={[
                {
                  label: "Week 1–2",
                  sublabel: "First automation live, team curious",
                  date: "Discovery",
                  color: "#00B4D8",
                },
                {
                  label: "Week 3–4",
                  sublabel: "Time savings noticed, team relieved",
                  date: "Relief",
                  color: "#10B981",
                },
                {
                  label: "Month 2",
                  sublabel: "Staff reassigned to higher-value work",
                  date: "Shift",
                  color: "#1A5276",
                },
                {
                  label: "Month 3",
                  sublabel: "Revenue impact measured, morale up",
                  date: "Results",
                  color: "#7C3AED",
                },
                {
                  label: "Month 6+",
                  sublabel: "Expansion to more workflows",
                  date: "Growth",
                  color: "#F59E0B",
                },
              ]}
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
            <FAQAccordion items={faqItems} schemaId="does-ai-replace-staff-faq" />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="See exactly what AI would and wouldn't handle in your business"
        subtext="A 20-minute discovery call will show you precisely which tasks should be automated — and which shouldn't."
        primaryCta={{ text: "Book Discovery Call", href: "/contact" }}
        secondaryCta={{ text: "What Is AI Automation?", href: "/what-is-ai-automation" }}
      />

      {/* 9. Internal Link Grid */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <InternalLinkGrid
              heading="Related resources"
              links={[
                {
                  href: "/how-businesses-use-ai-agents",
                  title: "How Businesses Use AI Agents",
                  description: "See real examples of AI + human collaboration.",
                },
                {
                  href: "/best-ai-workflows",
                  title: "Best AI Workflows for SMBs",
                  description: "The 10 tasks most worth automating.",
                },
                {
                  href: "/ai-agents-vs-chatbots",
                  title: "AI Agents vs. Chatbots",
                  description: "Understand the difference between real AI and scripted bots.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
