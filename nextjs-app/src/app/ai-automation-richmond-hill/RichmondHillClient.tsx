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
    icon: "⚖️",
    title: "Legal & Professional Intake Automation",
    description:
      "Automate client intake, document requests, and appointment scheduling for professional service firms.",
  },
  {
    icon: "🏥",
    title: "Healthcare Appointment Automation",
    description:
      "Richmond Hill clinics and specialists benefit from AI booking, reminders, and patient intake.",
  },
  {
    icon: "📞",
    title: "AI Receptionist",
    description:
      "24/7 call handling for Richmond Hill's busy professional offices.",
  },
  {
    icon: "📋",
    title: "Document & Follow-Up Automation",
    description:
      "Chase documents, send reminders, and keep clients updated automatically.",
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
    question: "Can you meet clients in Richmond Hill?",
    answer:
      "Yes — we offer in-person consultations in Richmond Hill and throughout York Region.",
  },
  {
    question: "Do you work with Richmond Hill's immigrant professional community?",
    answer:
      "Yes. We serve many Richmond Hill professional services firms and can build multilingual automations.",
  },
  {
    question: "How is Barrana AI different from offshore automation services?",
    answer:
      "We're local — based in Vaughan. We understand Ontario's regulatory environment, speak to you directly, and are accountable to the same business community you operate in.",
  },
  {
    question: "Do you have experience with professional services in Richmond Hill?",
    answer:
      "Yes. Legal, accounting, healthcare, and real estate are our core sectors throughout York Region.",
  },
  {
    question: "What's the setup time for a Richmond Hill business?",
    answer:
      "Typically 2 weeks from our initial call to your first automation going live.",
  },
];

const internalLinks = [
  {
    href: "/ai-automation-vaughan",
    title: "AI Automation Vaughan",
    description: "Our home base — serving all of York Region.",
  },
  {
    href: "/ai-automation-markham",
    title: "AI Automation Markham",
    description: "Serving Markham's tech and healthcare businesses.",
  },
  {
    href: "/ai-automation-toronto",
    title: "AI Automation Toronto",
    description: "GTA-wide coverage for Toronto businesses.",
  },
];

export default function RichmondHillClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="AI Automation for Richmond Hill Businesses"
        subtitle="York Region's most personalized AI automation service"
        body="Richmond Hill businesses get the same AI capabilities as enterprise companies — delivered by a local team that knows your market."
        badge="Richmond Hill, ON"
        ctaText="Book Richmond Hill Consultation"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AEOBlock
            question="Is there an AI automation company serving Richmond Hill?"
            answer="Yes — Barrana AI serves Richmond Hill businesses from our nearby Vaughan office. We provide AI automation for professional services, healthcare, real estate, and service businesses throughout York Region including Richmond Hill, Oak Ridges, and Elgin Mills. In-person consultations available within 48 hours."
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
              Built for Richmond Hill's Professional Community
            </h2>
            <p className="text-[#374151] text-base leading-relaxed">
              Richmond Hill is home to a strong professional services community — accountants,
              lawyers, healthcare providers, and service businesses serving one of Ontario's
              fastest-growing residential communities. These businesses are often high-volume but
              lean — great candidates for AI automation that multiplies the capacity of a small team.
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
            <h2 className="text-3xl font-bold text-[#0A1628]">What We Build for Richmond Hill Businesses</h2>
            <p className="mt-3 text-[#6B7280] text-lg">Tailored automation for York Region's professional services community.</p>
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
            <h2 className="text-3xl font-bold text-[#0A1628]">Results for Richmond Hill Businesses</h2>
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
              title="Typical first automation for Richmond Hill businesses"
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
          <FAQAccordion items={faqItems} schemaId="richmond-hill-faq-schema" />
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Richmond Hill's local AI automation partner"
        subtext="Fast, personal service from a team that knows York Region."
        primaryCta={{ text: "Book Richmond Hill Consultation", href: "/contact" }}
        secondaryCta={{ text: "Professional Services Automation", href: "/how-businesses-use-ai-agents" }}
      />

      {/* 9. Internal Links */}
      <InternalLinkGrid links={internalLinks} heading="Explore More" />
    </main>
  );
}
