"use client";

import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AEOBlock from "@/components/AEOBlock";
import ProblemCard from "@/components/ProblemCard";
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

interface PricingTier {
  name: string;
  price: string;
  tagline: string;
  features: string[];
  highlight?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "$1,500–$2,500 CDN",
    tagline: "Single workflow automation",
    features: [
      "One automated workflow",
      "Up to 3 tool integrations",
      "Email/SMS triggers",
      "2 weeks to deploy",
      "$200–$350/mo maintenance",
    ],
  },
  {
    name: "Growth",
    price: "$3,000–$6,000 CDN",
    tagline: "Multi-workflow system",
    features: [
      "3–5 automated workflows",
      "Up to 8 tool integrations",
      "AI decision logic",
      "3–4 weeks to deploy",
      "$400–$600/mo maintenance",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$7,000–$15,000 CDN",
    tagline: "Full AI agent suite",
    features: [
      "Unlimited workflows",
      "Custom integrations",
      "Voice AI + web agents",
      "5–8 weeks to deploy",
      "$600–$900/mo maintenance",
    ],
  },
];

export default function AiAutomationCostCanadaClient() {
  return (
    <main>
      {/* 1. Hero */}
      <PageHero
        variant="dark"
        title="What Does AI Automation Cost in Canada?"
        subtitle="Honest pricing. Real ROI. No surprises."
        body="Most AI automation costs $1,500–$8,000 CDN to build and $200–$800/month to run. For context, one hire costs $50,000+/year."
        badge="Pricing Guide"
        ctaText="Get a Custom Quote"
        ctaHref="/contact"
      />

      {/* 2. AEO Block */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp}>
            <AEOBlock
              question="How much does AI automation cost in Canada?"
              answer="Custom AI automation for Canadian small businesses typically costs $1,500–$8,000 CDN to build depending on complexity, plus $200–$800/month for hosting, APIs, and maintenance. Simple single-workflow automations start around $1,500; multi-agent systems for multiple departments run $5,000–$15,000. Most clients recover the investment within 60–90 days through time savings alone."
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
              Why the status quo costs more than you think
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              The real question isn't what AI automation costs — it's what not automating costs
              you.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Hiring is expensive — and slow",
                description:
                  "A full-time admin in Canada costs $45,000–$65,000/year in salary plus benefits. AI automation handles the same work at a fraction of the cost.",
              },
              {
                title: "Off-the-shelf tools don't solve your specific problem",
                description:
                  "Zapier and pre-built bots are cheap but rigid. They break when your workflow is non-standard — which it always is.",
              },
              {
                title: "You're paying for complexity you don't need",
                description:
                  "Enterprise AI platforms charge for hundreds of features. You need 5. We build exactly what you need.",
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProblemCard title={card.title} description={card.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Pricing Tiers */}
      <section className="py-20 bg-white" aria-labelledby="pricing-heading">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2
              id="pricing-heading"
              className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-4"
            >
              Transparent pricing tiers
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Fixed project quotes before we start. No retainers, no hidden costs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={[
                  "relative rounded-2xl p-8 flex flex-col",
                  tier.highlight
                    ? "bg-[#0A1628] border-2 border-[#00B4D8] shadow-[0_0_48px_rgba(0,180,216,0.15)]"
                    : "bg-white border-2 border-[#E8ECF1] hover:border-[#00B4D8] transition-colors duration-300",
                ].join(" ")}
              >
                {tier.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-[#00B4D8] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="mb-6">
                  <p
                    className={`text-xs font-bold uppercase tracking-widest mb-2 ${
                      tier.highlight ? "text-[#00B4D8]" : "text-[#6B7280]"
                    }`}
                  >
                    {tier.name}
                  </p>
                  <p
                    className={`text-2xl font-bold leading-tight mb-1 ${
                      tier.highlight ? "text-white" : "text-[#0A1628]"
                    }`}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={`text-sm ${
                      tier.highlight ? "text-[#9CADC4]" : "text-[#6B7280]"
                    }`}
                  >
                    {tier.tagline}
                  </p>
                </div>

                {/* Divider */}
                <div
                  className={`w-full h-px mb-6 ${
                    tier.highlight ? "bg-white/10" : "bg-[#E8ECF1]"
                  }`}
                  aria-hidden="true"
                />

                <ul className="space-y-3 flex-1 mb-8">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <svg
                        className={`w-4 h-4 shrink-0 mt-0.5 ${
                          tier.highlight ? "text-[#00B4D8]" : "text-[#10B981]"
                        }`}
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M3 8l3.5 3.5L13 4.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className={`text-sm ${
                          tier.highlight ? "text-[#D1D9E4]" : "text-[#374151]"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={[
                    "w-full text-center font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                    tier.highlight
                      ? "bg-[#00B4D8] hover:bg-[#0097B8] text-white shadow-[0_0_24px_rgba(0,180,216,0.3)] hover:shadow-[0_0_32px_rgba(0,180,216,0.45)] focus-visible:ring-[#00B4D8] focus-visible:ring-offset-[#0A1628]"
                      : "border-2 border-[#0A1628] text-[#0A1628] hover:bg-[#0A1628] hover:text-white focus-visible:ring-[#0A1628]",
                  ].join(" ")}
                >
                  Get a Quote
                </a>
              </motion.div>
            ))}
          </div>
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
              The ROI is measurable
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Typical outcomes from Barrana AI automation projects.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <MetricCard
              value={60}
              suffix=" days"
              label="Average payback period"
              color="blue"
            />
            <MetricCard
              value={85}
              suffix="%"
              label="Lower cost vs. full-time hire"
              color="green"
            />
            <MetricCard
              value={400}
              suffix="%"
              label="Average first-year ROI"
              color="green"
            />
            <MetricCard
              value={18}
              suffix=" hrs"
              label="Average weekly hours saved"
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
              The real cost comparison
            </h2>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto">
              Drag the slider to compare the true cost of manual work vs. automation.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <BeforeAfterSlider
              title="Cost of manual work vs. AI automation"
              beforeTitle="Current Cost (Manual)"
              afterTitle="After Automation"
              beforeItems={[
                { label: "Admin staff (part-time)", value: "$28,000", sublabel: "Annual salary" },
                { label: "Errors & rework", value: "$5,000", sublabel: "Estimated annual" },
                { label: "Missed leads (slow response)", value: "$15,000+", sublabel: "Revenue loss" },
                { label: "Overtime for busy periods", value: "$8,000", sublabel: "Annual" },
              ]}
              afterItems={[
                { label: "Custom AI automation", value: "$4,500", sublabel: "One-time build" },
                { label: "Monthly maintenance", value: "$500", sublabel: "Per month" },
                { label: "Zero errors on automated tasks", sublabel: "Built-in validation" },
                { label: "Instant lead response 24/7" },
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
              Pricing questions answered
            </h2>
            <p className="text-[#6B7280] text-lg">
              Everything you want to know before investing in AI automation.
            </p>
          </motion.div>
          <motion.div {...fadeInUp}>
            <FAQAccordion
              schemaId="faq-ai-automation-cost-canada"
              items={[
                {
                  question: "Are there hidden fees?",
                  answer:
                    "No. We provide a fixed project quote before we start. Maintenance fees cover API costs, hosting, and ongoing support.",
                },
                {
                  question: "What's the minimum budget to get started?",
                  answer:
                    "Our smallest projects start at $1,500 CDN. We recommend starting with one high-value workflow and expanding from there.",
                },
                {
                  question: "Do you offer payment plans?",
                  answer:
                    "Yes. We offer split billing — 50% at project start, 50% at launch.",
                },
                {
                  question: "What if I need to change the automation after it's built?",
                  answer:
                    "Minor changes are covered in maintenance. Significant additions are quoted separately.",
                },
                {
                  question: "Can I cancel the monthly maintenance?",
                  answer:
                    "Yes. The automation belongs to you. If you cancel maintenance, you keep the system but lose support and updates.",
                },
                {
                  question: "How do I calculate ROI for my business?",
                  answer:
                    "Multiply hours saved per week × your hourly rate (or staff cost) × 52 weeks. Most clients hit 300–500% first-year ROI.",
                },
              ]}
            />
          </motion.div>
        </div>
      </section>

      {/* 8. CTA */}
      <CTASection
        headline="Get a fixed-price quote for your automation"
        subtext="No surprises, no sales pitch. We'll assess your workflows and give you an honest cost estimate."
        primaryCta={{ text: "Get Free Quote", href: "/contact" }}
        secondaryCta={{ text: "See Workflow Examples", href: "/automation-workflows" }}
      />

      {/* 9. Internal Link Grid */}
      <InternalLinkGrid
        links={[
          {
            href: "/what-is-ai-automation",
            title: "What Is AI Automation?",
            description: "Start here if you're new to the concept.",
          },
          {
            href: "/zapier-vs-n8n-vs-custom-ai",
            title: "Zapier vs n8n vs Custom AI: Which Is Right?",
            description: "Compare your build options before investing.",
          },
          {
            href: "/best-ai-workflows",
            title: "Best AI Workflows for Canadian SMBs",
            description: "See which workflows deliver the best ROI.",
          },
        ]}
      />
    </main>
  );
}
