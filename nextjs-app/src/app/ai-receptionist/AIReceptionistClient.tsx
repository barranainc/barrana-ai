"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
import ProblemCard from "@/components/ProblemCard";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import ComparisonTable from "@/components/ComparisonTable";
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

const faqItems = [
  {
    question: "Does the AI receptionist sound like a robot?",
    answer:
      "No. Modern voice AI uses natural speech synthesis that most callers can't distinguish from a human. We can also set expectations upfront with a brief intro.",
  },
  {
    question: "Can it handle calls in French?",
    answer:
      "Yes. We build bilingual (English/French) agents for clients serving French-speaking markets.",
  },
  {
    question: "What happens when a call is too complex for the AI?",
    answer:
      "The agent seamlessly transfers to your on-call staff with a brief summary of the conversation so far.",
  },
  {
    question: "Can it book into my existing calendar system?",
    answer:
      "Yes. We integrate with Google Calendar, Outlook, Cliniko, Jane App, and most booking platforms.",
  },
  {
    question: "Is the AI receptionist PIPEDA compliant?",
    answer:
      "Yes. We build with Canadian privacy law requirements in mind, including call recording consent.",
  },
  {
    question: "What does it cost per month?",
    answer:
      "AI receptionist services start at $350/month including setup. Compare this to $4,000+/month for a part-time human receptionist.",
  },
];

export default function AIReceptionistClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="AI Receptionist for Your Business"
        subtitle="Answers calls, books appointments, qualifies leads — 24/7"
        body="Never miss a call again. Your AI receptionist handles inquiries at 2am on a Saturday the same way it does at 9am on Monday."
        badge="Voice + Text AI"
        ctaText="Get Your AI Receptionist"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="What is an AI receptionist?"
              answer="An AI receptionist is a voice and text AI agent that answers inbound calls and messages, greets callers by name, asks qualifying questions, books appointments directly into your calendar, routes urgent requests to on-call staff, and handles FAQs — all without a human. It works 24/7 and costs significantly less than a full-time or part-time receptionist."
              headingLevel="h2"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. Problem Cards */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628]">
              The cost of missed calls and limited hours
            </h2>
            <p className="mt-3 text-[#6B7280] max-w-2xl mx-auto">
              Every unanswered call is a potential client — and a potential competitor's new customer.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Missed calls mean missed revenue",
                description:
                  "62% of calls to small businesses go unanswered. Each missed call is a potential client calling a competitor.",
              },
              {
                title: "Reception staff are expensive and limited",
                description:
                  "A full-time receptionist costs $45,000–$55,000/year and only works 40 hours a week.",
              },
              {
                title: "Clients expect 24/7 availability",
                description:
                  "Patients, leads, and clients don't stop needing help at 5pm. An AI receptionist never clocks out.",
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
              title="How your AI receptionist handles a call"
              orientation="vertical"
              steps={[
                {
                  id: "1",
                  label: "Inbound Call or Message",
                  sublabel: "Phone, SMS, web chat",
                  type: "trigger",
                },
                {
                  id: "2",
                  label: "AI Greets & Identifies Need",
                  sublabel: "Natural speech, no press-1 menus",
                  type: "action",
                },
                {
                  id: "3",
                  label: "Qualifies or Routes",
                  sublabel: "Urgent → staff alert, routine → AI handles",
                  type: "decision",
                },
                {
                  id: "4",
                  label: "Books Appointment or Answers FAQ",
                  sublabel: "Real-time calendar sync",
                  type: "action",
                },
                {
                  id: "5",
                  label: "Summary Sent to Staff",
                  sublabel: "Who called, why, what was resolved",
                  type: "outcome",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 5. Comparison Table */}
      <section className="py-20 bg-[#F7F9FC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-10">
            <h2 className="text-3xl font-bold text-[#0A1628]">
              AI Receptionist vs. Human Receptionist
            </h2>
            <p className="mt-3 text-[#6B7280] max-w-2xl mx-auto">
              See how an AI receptionist compares on the metrics that matter most.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <ComparisonTable
              caption="AI Receptionist vs Human Receptionist comparison"
              columns={[
                { key: "human", label: "Human Receptionist" },
                { key: "ai", label: "AI Receptionist", highlight: true },
              ]}
              rows={[
                { feature: "Available hours", values: { human: "40 hrs/wk", ai: "168 hrs/wk" } },
                { feature: "Annual cost", values: { human: "$50,000+", ai: "$3,600–$9,600" } },
                { feature: "Never misses a call", values: { human: false, ai: true } },
                { feature: "Books appointments instantly", values: { human: "Partial", ai: true } },
                { feature: "Handles 50+ simultaneous calls", values: { human: false, ai: true } },
                { feature: "Consistent every time", values: { human: false, ai: true } },
                { feature: "Complex relationship building", values: { human: true, ai: false } },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 6. Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1628]">The numbers behind the decision</h2>
          </motion.div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            <MetricCard
              value={62}
              suffix="%"
              label="Calls missed by average SMB"
              color="red"
              direction="down"
            />
            <MetricCard
              value={168}
              suffix="hrs"
              label="Your AI receptionist works per week"
              color="blue"
            />
            <MetricCard
              value={93}
              suffix="%"
              label="Cost savings vs. full-time receptionist"
              color="green"
            />
            <MetricCard
              value={40}
              suffix="%"
              label="Reduction in no-show appointments"
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
            <FAQAccordion items={faqItems} schemaId="ai-receptionist-faq" />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Stop missing calls. Start booking more clients."
        subtext="Your AI receptionist is ready to answer in under 2 weeks."
        primaryCta={{ text: "Get My AI Receptionist", href: "/contact" }}
        secondaryCta={{ text: "See How It Works", href: "/how-businesses-use-ai-agents" }}
      />

      {/* 9. Internal Link Grid */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <InternalLinkGrid
              heading="Related resources"
              links={[
                {
                  href: "/automate-lead-follow-up",
                  title: "Automate Lead Follow-Up",
                  description: "Pair your receptionist with automated lead nurturing.",
                },
                {
                  href: "/workflows/clinic-appointments",
                  title: "Clinic Appointment Automation",
                  description: "Medical clinic-specific receptionist and booking workflow.",
                },
                {
                  href: "/ai-automation-cost-canada",
                  title: "What Does AI Cost in Canada?",
                  description: "See full pricing breakdown and ROI analysis.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
