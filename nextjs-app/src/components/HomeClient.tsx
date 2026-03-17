"use client";

import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";
import {
  fadeInUp,
  fadeIn,
  heroVariants,
  staggerChildren,
  cardVariants,
  cardEntranceVariants,
  sectionVariants,
  staggerFast,
  statContainerVariants,
  statVariants,
  useReducedMotion,
} from "@/lib/animations";

// ─── Data ─────────────────────────────────────────────────────────────────────

const NAV_CARDS = [
  {
    href: "/what-is-ai-automation",
    icon: "🤖",
    label: "Learn",
    title: "What is AI Automation?",
    description:
      "Understand how AI automation works, what it can do for your business, and what separates hype from real ROI.",
    color: "from-[#00B4D8]/20 to-[#1A5276]/10",
    borderColor: "border-[#00B4D8]/30",
    hoverBorder: "hover:border-[#00B4D8]/60",
  },
  {
    href: "/ai-automation-for-small-business",
    icon: "🏢",
    label: "Small Business",
    title: "AI for Small Business",
    description:
      "Practical automation strategies built for businesses with under 50 staff — no enterprise budget required.",
    color: "from-[#1A5276]/20 to-[#0A1628]/10",
    borderColor: "border-[#1A5276]/30",
    hoverBorder: "hover:border-[#1A5276]/60",
  },
  {
    href: "/ai-automation-gta",
    icon: "📍",
    label: "Local",
    title: "GTA & Vaughan Focus",
    description:
      "We work exclusively with businesses in the Greater Toronto Area — Vaughan, Mississauga, Brampton, Markham, and beyond.",
    color: "from-[#7C3AED]/20 to-[#1A5276]/10",
    borderColor: "border-[#7C3AED]/30",
    hoverBorder: "hover:border-[#7C3AED]/60",
  },
  {
    href: "/automation-use-cases",
    icon: "⚡",
    label: "Use Cases",
    title: "Automation Use Cases",
    description:
      "From lead follow-up to invoice processing — real examples of what businesses like yours are automating right now.",
    color: "from-[#10B981]/20 to-[#1A5276]/10",
    borderColor: "border-[#10B981]/30",
    hoverBorder: "hover:border-[#10B981]/60",
  },
  {
    href: "/ai-audit",
    icon: "📋",
    label: "Get Started",
    title: "Free Automation Audit",
    description:
      "Book a 30-minute call and walk away with a prioritized list of automation opportunities specific to your business.",
    color: "from-[#F59E0B]/20 to-[#1A5276]/10",
    borderColor: "border-[#F59E0B]/30",
    hoverBorder: "hover:border-[#F59E0B]/60",
    featured: true,
  },
];

const STATS = [
  { value: "40%", label: "Avg. reduction in manual work", suffix: "+" },
  { value: "3×", label: "Faster lead response time", suffix: "" },
  { value: "8hrs", label: "Saved per employee per week", suffix: "+" },
  { value: "90d", label: "Typical time to first ROI", suffix: "" },
];

const INDUSTRIES = [
  "Real Estate",
  "Legal",
  "Healthcare",
  "Accounting",
  "Home Services",
  "Retail",
  "Restaurants",
  "Insurance",
  "Mortgage",
  "Marketing Agencies",
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function HeroSection({ reduced }: { reduced: boolean }) {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #0f1f3d 50%, #0A1628 100%)" }}
      aria-label="Hero"
    >
      {/* Mesh gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 15% 50%, rgba(0,180,216,0.12) 0%, transparent 65%), radial-gradient(ellipse 50% 50% at 85% 20%, rgba(26,82,118,0.18) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 70% 80%, rgba(124,58,237,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
        aria-hidden="true"
      />

      {/* Glowing orb */}
      {!reduced && (
        <div
          className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 container-custom w-full py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            custom={0}
            variants={reduced ? {} : heroVariants}
            initial="hidden"
            animate="visible"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#00B4D8] text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" aria-hidden="true" />
            <span>AI Automation Consultancy — Vaughan, Ontario</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            custom={1}
            variants={reduced ? {} : heroVariants}
            initial="hidden"
            animate="visible"
            className="text-white mb-6"
          >
            AI Automation for{" "}
            <span
              className="text-[#00B4D8]"
              style={{
                textShadow: "0 0 40px rgba(0,180,216,0.4)",
              }}
            >
              Small Business
            </span>
            <br />
            in the GTA
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            custom={2}
            variants={reduced ? {} : heroVariants}
            initial="hidden"
            animate="visible"
            className="text-xl text-[#E8ECF1]/80 max-w-2xl mb-10 leading-relaxed"
          >
            Stop doing repetitive work by hand. Barrana.ai builds practical automations
            that handle your follow-ups, scheduling, reporting, and more — so you can
            focus on growing the business.
          </motion.p>

          {/* CTA row */}
          <motion.div
            custom={3}
            variants={reduced ? {} : heroVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/ai-audit"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00B4D8] text-white font-semibold text-lg transition-all duration-300 hover:bg-[#0099b8] hover:shadow-[0_0_32px_rgba(0,180,216,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1628]"
            >
              Book Free Audit
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/what-is-ai-automation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40"
            >
              Learn How It Works
            </Link>
          </motion.div>

          {/* Social proof */}
          <motion.div
            custom={4}
            variants={reduced ? {} : heroVariants}
            initial="hidden"
            animate="visible"
            className="mt-12 flex flex-wrap gap-6 items-center"
          >
            <span className="text-[#6B7280] text-sm">Trusted by GTA businesses in:</span>
            {["Real Estate", "Legal", "Healthcare", "Home Services", "Retail"].map((industry) => (
              <span key={industry} className="text-[#E8ECF1]/60 text-sm font-medium">
                {industry}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #ffffff)" }}
        aria-hidden="true"
      />
    </section>
  );
}

function StatsSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-[#F7F9FC] border-y border-[#E8ECF1]"
      aria-label="Key metrics"
    >
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : statContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={reduced ? {} : statVariants}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[#0A1628] tabular-nums mb-2">
                {stat.value}
                <span className="text-[#00B4D8]">{stat.suffix}</span>
              </div>
              <div className="text-[#6B7280] text-sm leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function NavCardsSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-white"
      aria-label="Explore Barrana.ai"
    >
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">
            Where to Start
          </p>
          <h2 className="text-[#0A1628] mb-4">
            Everything you need to know about AI automation
          </h2>
          <p className="text-[#6B7280] text-lg">
            Whether you&apos;re just learning or ready to start, we&apos;ve got a clear path forward.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={reduced ? {} : staggerFast}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {NAV_CARDS.map((card) => (
            <motion.div
              key={card.href}
              variants={reduced ? {} : cardEntranceVariants}
              whileHover={reduced ? {} : "hover"}
              initial="rest"
              animate="rest"
              className={`group relative ${card.featured ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <motion.div
                variants={reduced ? {} : cardVariants}
                className={`
                  h-full flex flex-col p-8 rounded-2xl border bg-white
                  transition-colors duration-300 cursor-pointer
                  ${card.borderColor} ${card.hoverBorder}
                  ${card.featured ? "ring-2 ring-[#F59E0B]/40" : ""}
                `}
              >
                {/* Card gradient bg */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon + label */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl" role="img" aria-hidden="true">
                      {card.icon}
                    </span>
                    <span
                      className={`text-xs font-semibold uppercase tracking-wider px-2 py-1 rounded-full ${
                        card.featured
                          ? "bg-[#F59E0B]/15 text-[#F59E0B]"
                          : "bg-[#E8ECF1] text-[#6B7280]"
                      }`}
                    >
                      {card.label}
                    </span>
                    {card.featured && (
                      <span className="ml-auto text-xs font-semibold text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-1 rounded-full">
                        Free
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#1F2937] mb-3 group-hover:text-[#0A1628] transition-colors">
                    {card.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#6B7280] text-[15px] leading-relaxed flex-1 mb-6">
                    {card.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={card.href}
                    className={`inline-flex items-center gap-2 font-semibold text-sm transition-colors duration-200 ${
                      card.featured
                        ? "text-[#F59E0B] hover:text-[#d97706]"
                        : "text-[#00B4D8] hover:text-[#0099b8]"
                    }`}
                    aria-label={`Go to ${card.title}`}
                  >
                    {card.featured ? "Book Your Free Audit" : "Learn More"}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8h10M7 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function IndustriesSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      className="section-padding bg-[#F7F9FC]"
      aria-label="Industries we serve"
    >
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">
            Industries
          </p>
          <h2 className="text-[#0A1628] mb-4">We work across GTA industries</h2>
          <p className="text-[#6B7280] text-lg">
            AI automation works for almost any business with repetitive processes.
            Here&apos;s where we have the most experience.
          </p>
        </motion.div>

        <motion.div
          variants={reduced ? {} : staggerFast}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center gap-3"
        >
          {INDUSTRIES.map((industry) => (
            <motion.span
              key={industry}
              variants={reduced ? {} : fadeInUp}
              className="px-5 py-2.5 rounded-full border border-[#E8ECF1] bg-white text-[#1F2937] text-sm font-medium hover:border-[#00B4D8]/50 hover:text-[#00B4D8] transition-colors duration-200 cursor-default"
            >
              {industry}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTASection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #0f1f3d 100%)" }}
      aria-label="Call to action"
    >
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : staggerChildren}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.p
            variants={reduced ? {} : fadeInUp}
            className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-4"
          >
            Ready to start?
          </motion.p>

          <motion.h2
            variants={reduced ? {} : fadeInUp}
            className="text-white mb-6"
          >
            Get a free automation audit for your business
          </motion.h2>

          <motion.p
            variants={reduced ? {} : fadeInUp}
            className="text-[#E8ECF1]/70 text-xl mb-10 leading-relaxed"
          >
            In 30 minutes, we&apos;ll map out exactly where automation can save your team
            time and what ROI you can realistically expect in the first 90 days.
          </motion.p>

          <motion.div
            variants={reduced ? {} : fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/ai-audit"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full bg-[#00B4D8] text-white font-semibold text-lg transition-all duration-300 hover:bg-[#0099b8] hover:shadow-[0_0_40px_rgba(0,180,216,0.5)]"
            >
              Book Your Free Audit
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M4 10h12M10 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 rounded-full border border-white/20 text-white font-semibold text-lg transition-all duration-300 hover:bg-white/10"
            >
              See Case Studies
            </Link>
          </motion.div>

          <motion.p
            variants={reduced ? {} : fadeIn}
            className="mt-6 text-[#6B7280] text-sm"
          >
            No obligation. No sales pitch. Just a clear picture of what&apos;s possible.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main HomeClient Component ────────────────────────────────────────────────

export default function HomeClient() {
  const reduced = useReducedMotion();

  return (
    <>
      <HeroSection reduced={reduced} />
      <StatsSection reduced={reduced} />
      <NavCardsSection reduced={reduced} />
      <IndustriesSection reduced={reduced} />
      <CTASection reduced={reduced} />
    </>
  );
}
