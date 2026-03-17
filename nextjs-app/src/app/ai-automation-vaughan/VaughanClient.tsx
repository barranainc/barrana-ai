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
      "Every inquiry from your website, Kijiji ads, or referrals gets an instant, personalized response — 24/7.",
  },
  {
    icon: "🗓️",
    title: "AI Receptionist",
    description:
      "Handle inbound calls and appointment bookings without hiring extra staff.",
  },
  {
    icon: "📋",
    title: "Document Automation",
    description:
      "Automate intake forms, document collection, and verification for compliance-heavy industries.",
  },
  {
    icon: "⚙️",
    title: "Custom Workflow Automation",
    description:
      "Any repetitive process your team does weekly — we can automate it.",
  },
];

const metrics = [
  {
    value: 15,
    suffix: "h",
    label: "Average hours saved/week for Vaughan clients",
    color: "green" as const,
  },
  {
    value: 48,
    suffix: "h",
    label: "Typical setup time for first automation",
    color: "blue" as const,
  },
  {
    value: 100,
    suffix: "%",
    label: "Local clients in York Region",
    color: "green" as const,
  },
  {
    value: 5,
    suffix: " min",
    label: "Average discovery call booking time",
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
    question: "Do you serve businesses outside of Vaughan?",
    answer:
      "Yes — we serve all of York Region and the GTA, including Toronto, Markham, Mississauga, and Richmond Hill.",
  },
  {
    question: "Can you meet in person in Vaughan?",
    answer:
      "Yes. We're available for in-person consultations in Vaughan and the surrounding area.",
  },
  {
    question: "What industries do you serve in Vaughan?",
    answer:
      "Construction, real estate, healthcare, legal, accounting, and any service-based business.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "We typically book discovery calls within 48 hours and can have your first automation live in 2 weeks.",
  },
  {
    question: "Is there a contract?",
    answer:
      "No long-term contracts for project work. Monthly maintenance is month-to-month after a 3-month initial commitment.",
  },
];

const internalLinks = [
  {
    href: "/what-is-ai-automation",
    title: "What Is AI Automation?",
    description: "New to AI automation? Start here.",
  },
  {
    href: "/ai-automation-toronto",
    title: "AI Automation Toronto",
    description: "We also serve Toronto businesses.",
  },
  {
    href: "/automation-workflows",
    title: "Browse Automation Workflows",
    description: "See what we build for different industries.",
  },
];

export default function VaughanClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="AI Automation for Vaughan Businesses"
        subtitle="Built by a local team that understands the York Region market"
        body="Barrana AI is based in Vaughan. We build custom AI automations for local businesses across construction, healthcare, legal, and professional services."
        badge="Vaughan, ON"
        ctaText="Book Free Local Consultation"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AEOBlock
            question="Is there an AI automation company in Vaughan, Ontario?"
            answer="Yes — Barrana AI is a Vaughan-based AI automation company serving businesses across York Region including Vaughan, Woodbridge, Maple, and Kleinburg. We build custom AI agents for local businesses in construction, healthcare, legal services, and professional services, with same-week consultation availability."
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
              Built for Vaughan's Business Landscape
            </h2>
            <p className="text-[#374151] text-base leading-relaxed">
              Vaughan's business landscape is diverse — from construction and real estate along
              Highway 400 to healthcare and professional services near Maple and Woodbridge. Local
              businesses here share a common challenge: they're growing fast but their admin systems
              haven't kept up. Whether you're a contractor managing multiple job sites or a clinic
              handling appointment volume, AI automation gives you the infrastructure of a larger
              business at a fraction of the cost.
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
            <h2 className="text-3xl font-bold text-[#0A1628]">What We Build for Vaughan Businesses</h2>
            <p className="mt-3 text-[#6B7280] text-lg">Custom automations for the workflows that slow you down.</p>
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
            <h2 className="text-3xl font-bold text-[#0A1628]">Results for Vaughan Businesses</h2>
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
              title="Typical first automation for Vaughan businesses"
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
          <FAQAccordion items={faqItems} schemaId="vaughan-faq-schema" />
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Serving Vaughan businesses, in person and online"
        subtext="Book a free 20-minute consultation with our local team."
        primaryCta={{ text: "Book Local Consultation", href: "/contact" }}
        secondaryCta={{ text: "See Our Services", href: "/automation-workflows" }}
      />

      {/* 9. Internal Links */}
      <InternalLinkGrid links={internalLinks} heading="Explore More" />
    </main>
  );
}
