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
      "Markham's competitive professional services market demands fast response. AI agents respond instantly, 24/7.",
  },
  {
    icon: "🗓️",
    title: "Healthcare Appointment Automation",
    description:
      "Markham's large healthcare sector benefits significantly from automated booking and patient follow-up.",
  },
  {
    icon: "📋",
    title: "Document Processing",
    description:
      "Automate intake, document collection, and compliance workflows for regulated Markham industries.",
  },
  {
    icon: "⚙️",
    title: "Tech-Stack Integration",
    description:
      "Markham businesses use sophisticated tools. We integrate your AI agents with your existing tech stack.",
  },
];

const metrics = [
  {
    value: 15,
    suffix: "h",
    label: "Average weekly hours saved",
    color: "green" as const,
  },
  {
    value: 3,
    suffix: "x",
    label: "Faster client onboarding",
    color: "blue" as const,
  },
  {
    value: 40,
    suffix: "%",
    label: "Reduction in missed appointments",
    color: "green" as const,
  },
  {
    value: 2,
    suffix: " wks",
    label: "To first automation live",
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
    question: "Do you serve businesses in Unionville and Stouffville?",
    answer:
      "Yes — we serve all of York Region including Markham, Unionville, Stouffville, and surrounding areas.",
  },
  {
    question: "Can you handle the tech requirements of Markham's software companies?",
    answer:
      "Absolutely. We're comfortable with complex API integrations and custom technical implementations.",
  },
  {
    question: "Do you serve Markham's healthcare sector specifically?",
    answer:
      "Yes. We have specific workflows for medical clinics, dentists, and healthcare providers in Markham.",
  },
  {
    question: "What's the typical timeline for a Markham business?",
    answer:
      "Most clients have their first automation live within 2 weeks of our initial call.",
  },
  {
    question: "Can you integrate with Markham healthcare platforms like Jane App or Cliniko?",
    answer:
      "Yes — we integrate with both Jane App and Cliniko for Markham's healthcare providers.",
  },
];

const internalLinks = [
  {
    href: "/ai-automation-toronto",
    title: "AI Automation Toronto",
    description: "GTA-wide coverage for Toronto businesses.",
  },
  {
    href: "/ai-automation-vaughan",
    title: "AI Automation Vaughan",
    description: "Our Vaughan home base.",
  },
  {
    href: "/ai-receptionist",
    title: "AI Receptionist",
    description: "24/7 call handling for Markham practices.",
  },
];

export default function MarkhamClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="AI Automation for Markham Businesses"
        subtitle="York Region's tech hub deserves tech-forward operations"
        body="Markham's business community is tech-savvy and growth-oriented. AI automation matches that ambition."
        badge="Markham, ON"
        ctaText="Book Markham Consultation"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AEOBlock
            question="Are there AI automation services in Markham, Ontario?"
            answer="Yes — Barrana AI serves Markham businesses from our Vaughan office, with in-person consultations available. Markham's strong tech and healthcare sectors benefit particularly from AI automation in client intake, document processing, and lead management. We specialize in workflows for Markham's diverse professional service industry."
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
              Built for Markham's Growth
            </h2>
            <p className="text-[#374151] text-base leading-relaxed">
              Markham has one of the highest concentrations of tech companies and healthcare providers
              outside of downtown Toronto. Businesses here often have sophisticated operations but
              still rely on manual admin processes that haven't kept pace with their growth. AI
              automation bridges that gap — bringing enterprise-level efficiency to growing Markham
              businesses.
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
            <h2 className="text-3xl font-bold text-[#0A1628]">What We Build for Markham Businesses</h2>
            <p className="mt-3 text-[#6B7280] text-lg">Tailored automation for Markham's tech and healthcare sectors.</p>
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
            <h2 className="text-3xl font-bold text-[#0A1628]">Results for Markham Businesses</h2>
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
              title="Typical first automation for Markham businesses"
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
          <FAQAccordion items={faqItems} schemaId="markham-faq-schema" />
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Bring your operations up to speed with your growth"
        subtext="Book a free consultation with our Markham team."
        primaryCta={{ text: "Book Markham Consultation", href: "/contact" }}
        secondaryCta={{ text: "Healthcare Workflow Examples", href: "/workflows/clinic-appointments" }}
      />

      {/* 9. Internal Links */}
      <InternalLinkGrid links={internalLinks} heading="Explore More" />
    </main>
  );
}
