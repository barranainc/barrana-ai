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
    icon: "🏠",
    title: "Real Estate Lead Automation",
    description:
      "Mississauga's real estate market moves fast. AI agents qualify leads and book viewings instantly.",
  },
  {
    icon: "🔨",
    title: "Contractor Lead Follow-Up",
    description:
      "Automate quote requests, lead qualification, and follow-up for Mississauga's construction market.",
  },
  {
    icon: "📋",
    title: "Document & Compliance Automation",
    description:
      "Automate document collection for Mississauga's regulated financial and legal services.",
  },
  {
    icon: "📞",
    title: "AI Receptionist",
    description:
      "24/7 call and inquiry handling for Mississauga businesses with high inbound volume.",
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
    question: "Do you serve Port Credit, Streetsville, and Clarkson businesses?",
    answer: "Yes — we serve all of Mississauga and Peel Region.",
  },
  {
    question: "Do you specialize in Mississauga real estate automation?",
    answer:
      "Yes. Real estate is one of our most common use cases, including lead nurturing, viewing booking, and document processing.",
  },
  {
    question: "Can you help a Mississauga contractor business?",
    answer:
      "Yes. We have specific workflows for contractors — lead qualification, estimate follow-up, and project coordination automation.",
  },
  {
    question: "What's the minimum investment for a Mississauga business?",
    answer:
      "Our smallest projects start at $1,500 CDN. We recommend starting with your highest-volume workflow.",
  },
  {
    question: "Do you offer on-site consultations in Mississauga?",
    answer:
      "Yes. We're available for in-person meetings across Mississauga and the Peel Region.",
  },
];

const internalLinks = [
  {
    href: "/ai-automation-toronto",
    title: "AI Automation Toronto",
    description: "GTA-wide coverage.",
  },
  {
    href: "/workflows/contractor-leads",
    title: "Contractor Lead Automation",
    description: "Industry-specific workflows for Mississauga contractors.",
  },
  {
    href: "/automate-lead-follow-up",
    title: "Automate Lead Follow-Up",
    description: "The most impactful automation for Mississauga businesses.",
  },
];

export default function MississaugaClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="AI Automation for Mississauga Businesses"
        subtitle="Peel Region's fastest-growing businesses deserve smarter operations"
        body="From Square One to the Airport Corporate Centre — Mississauga businesses are using AI automation to do more without hiring more."
        badge="Mississauga, ON"
        ctaText="Book Mississauga Consultation"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AEOBlock
            question="Where can I find AI automation services in Mississauga?"
            answer="Barrana AI provides AI automation services to Mississauga businesses across Peel Region. We specialize in workflows for Mississauga's prominent real estate, construction, healthcare, and financial services sectors. Consultations are available in-person or online, with first automations typically live within 2 weeks."
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
              Compete at Mississauga's Pace
            </h2>
            <p className="text-[#374151] text-base leading-relaxed">
              Mississauga is one of Canada's busiest business hubs — home to major corporate
              headquarters, a growing SMB sector, and a highly competitive real estate and
              construction market. Businesses here face intense competition, high client
              expectations, and tight margins. AI automation helps Mississauga businesses respond
              faster to leads, process documents more reliably, and operate at scale without
              proportional staffing increases.
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
            <h2 className="text-3xl font-bold text-[#0A1628]">What We Build for Mississauga Businesses</h2>
            <p className="mt-3 text-[#6B7280] text-lg">Automation built for Peel Region's real estate, construction, and professional services.</p>
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
            <h2 className="text-3xl font-bold text-[#0A1628]">Results for Mississauga Businesses</h2>
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
              title="Typical first automation for Mississauga businesses"
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
          <FAQAccordion items={faqItems} schemaId="mississauga-faq-schema" />
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Compete at Mississauga's pace — without burning out your team"
        subtext="Book a free consultation with our team."
        primaryCta={{ text: "Book Mississauga Consultation", href: "/contact" }}
        secondaryCta={{ text: "Contractor Lead Automation", href: "/workflows/contractor-leads" }}
      />

      {/* 9. Internal Links */}
      <InternalLinkGrid links={internalLinks} heading="Explore More" />
    </main>
  );
}
