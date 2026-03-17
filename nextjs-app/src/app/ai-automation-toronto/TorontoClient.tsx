"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
import MetricCard from "@/components/MetricCard";
import WorkflowDiagram from "@/components/WorkflowDiagram";
import FAQAccordion from "@/components/FAQAccordion";
import CTASection from "@/components/CTASection";
import InternalLinkGrid from "@/components/InternalLinkGrid";

const services = [
  {
    icon: "📞",
    title: "AI Lead Follow-Up",
    description:
      "In Toronto's competitive market, a 4-hour response loses to a 60-second one. AI agents respond instantly.",
  },
  {
    icon: "🗓️",
    title: "AI Receptionist",
    description:
      "Handle the volume of Toronto's busy business environment without hiring extra reception staff.",
  },
  {
    icon: "📋",
    title: "Document Automation",
    description:
      "Toronto's regulated industries — finance, law, healthcare — need compliant, reliable document handling.",
  },
  {
    icon: "⚙️",
    title: "Custom Workflow Automation",
    description:
      "Whatever your team does repeatedly, we can automate it to fit Toronto's pace.",
  },
];

const metrics = [
  {
    value: 21,
    suffix: "x",
    label: "Higher conversion with <5min lead response",
    color: "green" as const,
  },
  {
    value: 50,
    suffix: "k+",
    label: "Toronto SMBs competing for the same clients",
    color: "blue" as const,
  },
  {
    value: 40,
    suffix: "%",
    label: "Typical admin reduction after automation",
    color: "green" as const,
  },
  {
    value: 2,
    suffix: " wks",
    label: "Average time to first automation live",
    color: "blue" as const,
  },
];

const workflowSteps = [
  {
    id: "1",
    label: "New Inquiry Arrives",
    sublabel: "Web, phone, or referral",
    type: "trigger" as const,
  },
  {
    id: "2",
    label: "AI Responds Instantly",
    sublabel: "Personalized message",
    type: "action" as const,
  },
  {
    id: "3",
    label: "Lead Qualified",
    sublabel: "Service, budget, timeline",
    type: "decision" as const,
  },
  {
    id: "4",
    label: "Call Booked",
    sublabel: "Into your calendar",
    type: "action" as const,
  },
  {
    id: "5",
    label: "CRM Updated",
    sublabel: "Ready for your follow-up",
    type: "outcome" as const,
  },
];

const faqItems = [
  {
    question: "Do you come to Toronto for meetings?",
    answer:
      "Yes. We serve all of Toronto and the GTA and are available for in-person consultations in the city.",
  },
  {
    question: "What Toronto industries do you specialize in?",
    answer:
      "Finance, legal, healthcare, real estate, and professional services — all sectors with high admin volume and regulatory requirements.",
  },
  {
    question: "Is there a Toronto-specific setup fee?",
    answer: "No. Our pricing is consistent across the GTA.",
  },
  {
    question: "How do you handle Toronto's bilingual requirements?",
    answer:
      "We build bilingual (English/French) automations for clients serving both language communities.",
  },
  {
    question: "Can you integrate with Toronto-specific platforms?",
    answer:
      "Yes — including platforms common in Toronto's finance and legal sectors.",
  },
];

const internalLinks = [
  {
    href: "/ai-automation-vaughan",
    title: "AI Automation Vaughan",
    description: "Our home base — serving York Region.",
  },
  {
    href: "/ai-automation-markham",
    title: "AI Automation Markham",
    description: "Serving Markham and Scarborough businesses.",
  },
  {
    href: "/ai-receptionist",
    title: "AI Receptionist Service",
    description: "24/7 call and inquiry handling for Toronto businesses.",
  },
];

export default function TorontoClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="AI Automation for Toronto Businesses"
        subtitle="GTA-wide coverage, built by a local team"
        body="Toronto's competitive market rewards businesses that respond faster and operate more efficiently. AI automation gives you both."
        badge="Toronto & GTA"
        ctaText="Book Free GTA Consultation"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AEOBlock
            question="Where can I find AI automation services in Toronto?"
            answer="Barrana AI, based in Vaughan, provides AI automation services throughout Toronto and the GTA. We build custom AI agents for Toronto businesses in finance, healthcare, legal, real estate, and professional services — with same-week consultations available and in-person meetings across the city."
            headingLevel="h2"
          />
        </div>
      </section>

      {/* 3. Local context */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-2xl font-bold text-[#0A1628] mb-4">
              Compete in Toronto's Market
            </h2>
            <p className="text-[#374151] text-base leading-relaxed">
              Toronto's business landscape is one of the most competitive in North America. With
              100,000+ SMBs competing for the same clients, speed of response and operational
              efficiency are no longer advantages — they're table stakes. Toronto businesses using AI
              automation are responding to leads in under 60 seconds, handling 3x the client volume
              without extra staff, and competing on service quality rather than just price.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 4. Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-[#0A1628]">What We Build for Toronto Businesses</h2>
            <p className="mt-3 text-[#6B7280] text-lg">Enterprise-grade automation for Toronto's competitive market.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className="bg-[#F7F9FC] rounded-xl p-6 border border-[#E8ECF1] hover:border-[#00B4D8] hover:shadow-md transition-all duration-300"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-[#0A1628] font-bold text-base mb-2">{service.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Metrics */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-[#0A1628]">The Toronto Opportunity</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <MetricCard key={metric.label} {...metric} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. Workflow Diagram */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <WorkflowDiagram
              title="Typical first automation for Toronto businesses"
              steps={workflowSteps}
              orientation="vertical"
            />
          </motion.div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-16 bg-[#F7F9FC]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-[#0A1628]">Frequently Asked Questions</h2>
          </motion.div>
          <FAQAccordion items={faqItems} schemaId="toronto-faq-schema" />
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Compete faster in Toronto's market"
        subtext="Book a free consultation with our GTA team."
        primaryCta={{ text: "Book GTA Consultation", href: "/contact" }}
        secondaryCta={{ text: "See Workflow Examples", href: "/automation-workflows" }}
      />

      {/* 9. Internal Links */}
      <InternalLinkGrid links={internalLinks} heading="Explore More" />
    </main>
  );
}
