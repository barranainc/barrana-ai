"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";
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
  slideInLeft,
  slideInRight,
  useReducedMotion,
} from "@/lib/animations";

// ─── Utility: Animated Counter ───────────────────────────────────────────────

function CountUp({
  to,
  duration = 2200,
  inView,
}: {
  to: number;
  duration?: number;
  inView: boolean;
}) {
  const reduced = useReducedMotion();
  const [count, setCount] = useState(reduced ? to : 0);

  useEffect(() => {
    if (!inView || reduced) {
      setCount(to);
      return;
    }
    let startTime: number | null = null;
    function animate(ts: number) {
      if (!startTime) startTime = ts;
      const elapsed = ts - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [inView, to, duration, reduced]);

  return <>{count}</>;
}

// ─── CTA tracking ─────────────────────────────────────────────────────────────

function trackCTA(label: string) {
  if (typeof window !== "undefined" && typeof (window as Window & { gtag?: Function }).gtag === "function") {
    (window as Window & { gtag?: Function }).gtag!("event", "cta_click", { cta_label: label, page: "home" });
  }
}

// ─── Shared Components ────────────────────────────────────────────────────────

function AuditCTAButton({
  label = "Get Your Free 60-Minute Automation Audit",
  variant = "primary",
}: {
  label?: string;
  variant?: "primary" | "dark";
}) {
  const cls =
    variant === "dark"
      ? "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00B4D8] text-white font-semibold text-base lg:text-lg transition-all duration-300 hover:bg-[#0099b8] hover:shadow-[0_0_32px_rgba(0,180,216,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1628]"
      : "inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#00B4D8] text-white font-semibold text-base lg:text-lg transition-all duration-300 hover:bg-[#0099b8] hover:shadow-[0_0_32px_rgba(0,180,216,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2";
  return (
    <Link href="/book-audit" className={cls} onClick={() => trackCTA(label)}>
      {label}
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3.75 9h10.5M9.75 4.5l4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const TRUST_BADGES = [
  {
    value: "10",
    suffix: "+ Years",
    label: "Building Business Systems",
    supporting: "Production-grade software delivery across industries.",
    isNumeric: true,
  },
  {
    value: "90",
    suffix: " Seconds",
    label: "Lead Response Time",
    supporting: "Typical response improvement after automation deployment.",
    isNumeric: true,
  },
  {
    value: "15–20",
    suffix: " Hours",
    label: "Recovered Per Week",
    supporting: "Average staff admin time returned to billable work.",
    isNumeric: false,
  },
  {
    value: "Fixed",
    suffix: " Pricing",
    label: "You Pay for Outcomes",
    supporting: "Every engagement scoped and priced after a free audit. No hourly billing.",
    isNumeric: false,
  },
];

const OBJECTION_CARDS = [
  {
    title: "No New Software Required",
    body: "We build automation on top of your existing CRM, calendar, email, and accounting tools. Your team keeps working exactly how they work today.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="2" y="7" width="20" height="4" rx="1" stroke="#1A5276" strokeWidth="1.75" />
        <rect x="4" y="13" width="16" height="4" rx="1" stroke="#1A5276" strokeWidth="1.75" />
        <rect x="6" y="4" width="12" height="3" rx="1" stroke="#1A5276" strokeWidth="1.75" />
      </svg>
    ),
  },
  {
    title: "No Technical Knowledge Needed",
    body: "You understand your workflows. That is enough. We handle every technical decision, build, and deployment. You receive a working system and plain-language documentation.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="8" r="3.5" stroke="#1A5276" strokeWidth="1.75" />
        <path d="M4 20c0-4 3.582-7 8-7s8 3 8 7" stroke="#1A5276" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M16 11l1.5 1.5L20 10" stroke="#00B4D8" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "This Does Not Replace Your Staff",
    body: "Automation handles coordination: data entry, follow-up, reminders, routing. Your team handles judgment, expertise, and client relationships. They do less admin, more skilled work.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="9" cy="8" r="3" stroke="#1A5276" strokeWidth="1.75" />
        <path d="M2 20c0-3.314 3.134-6 7-6" stroke="#1A5276" strokeWidth="1.75" strokeLinecap="round" />
        <circle cx="17" cy="9" r="3" stroke="#1A5276" strokeWidth="1.75" />
        <path d="M14 20c0-3.314 1.343-6 3-6s3 2.686 3 6" stroke="#1A5276" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
  },
];

const COST_METRICS = [
  {
    figure: "$5,000–$15,000",
    period: "/month",
    label: "Lost Leads",
    body: "If you lose 5 leads per month because your response time is measured in hours, and your average client is worth $1,000 to $3,000, that is $5,000 to $15,000 walking out the door every month.",
  },
  {
    figure: "$19,500",
    period: "/year",
    label: "Wasted Staff Hours",
    body: "A staff member earning $25/hour who spends 15 hours per week on data entry and manual follow-up costs $19,500 per year in admin labor that generates zero revenue.",
  },
  {
    figure: "30+ Days",
    period: "",
    label: "Invoice Delays",
    body: "Invoices going out 2–3 weeks late because billing depends on someone remembering adds a month or more to your payment cycle. Invoice automation triggers billing the moment a project completes.",
  },
  {
    figure: "20–30%",
    period: "",
    label: "Missed Capacity",
    body: "The businesses that automate handle 20–30% more volume with the same headcount. If you are at capacity, automation is how you grow before you hire.",
  },
];

const PROBLEMS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <circle cx="11" cy="11" r="8.5" stroke="#EF4444" strokeWidth="1.75" />
        <path d="M11 7v4l2.5 2.5" stroke="#EF4444" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "Leads Going Cold",
    body: "A prospect inquires at 6pm. Your team sees it at 9am. By then, they have booked with the first business that responded. You never even knew you lost them.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M4 6h14M4 11h10M4 16h7" stroke="#EF4444" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "Staff Buried in Coordination",
    body: "Your team spends 2–3 hours per day copying data between systems, sending reminders, and chasing documents. That is 15+ hours per week of zero-revenue work.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M2 11s3.5-7 9-7 9 7 9 7-3.5 7-9 7-9-7-9-7z" stroke="#EF4444" strokeWidth="1.75" />
        <line x1="3" y1="3" x2="19" y2="19" stroke="#EF4444" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "Invisible Operations",
    body: "You cannot tell which files are complete, which invoices are overdue, or who is overloaded. You discover dropped tasks when the client complains.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M16 2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2" stroke="#EF4444" strokeWidth="1.75" />
        <path d="M9 2h4v4H9z" stroke="#EF4444" strokeWidth="1.75" />
        <path d="M7 14l3-3 2 2 3-3" stroke="#EF4444" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Calls and Messages Falling Through",
    body: "Phone goes to voicemail during busy hours. Instagram DMs sit for days. Website forms get answered tomorrow. No single system captures everything.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <rect x="2" y="6" width="18" height="13" rx="2" stroke="#EF4444" strokeWidth="1.75" />
        <path d="M15 6V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v1" stroke="#EF4444" strokeWidth="1.75" />
        <path d="M8 13h6M11 10v6" stroke="#EF4444" strokeWidth="1.75" strokeLinecap="round" />
      </svg>
    ),
    title: "Cash Flow Delayed by Process",
    body: "Invoices go out 2 weeks late. Payment reminders depend on someone remembering. Cash flow problems caused by inconsistent billing, not bad clients.",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
        <path d="M3 17l5-5 4 4 6-8" stroke="#EF4444" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="17" cy="6" r="3" stroke="#EF4444" strokeWidth="1.75" />
        <path d="M15.5 4.5L17 6l2.5-2" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Growth Blocked by Capacity",
    body: "Your team is good at their work. But 40% of their time goes to admin instead of clients. You cannot grow without more people or fewer manual tasks.",
  },
];

const BEFORE_ITEMS = [
  "Lead arrives → sits in inbox → response 4–8 hours later",
  "New client → manual intake → 40 minutes data entry",
  "Document needed → email → remind → remind again → call → 15 hrs/week",
  "Project done → someone notices → invoice 2–3 weeks late",
  "Operations → no visibility → find problems when client complains",
];

const AFTER_ITEMS = [
  "Lead arrives → AI responds in 90 seconds → qualifies → CRM updated → booked",
  "New client → AI intake agent → CRM auto-created → under 5 minutes",
  "Document needed → system sends checklist → tracks → reminds every 48hrs → zero staff time",
  "Project done → invoice auto-generated → sent → reminders at 7/14/21 days",
  "Operations → real-time dashboard → alerts → weekly summary automatic",
];

const METHOD_STEPS = [
  {
    num: "01",
    title: "Friction Mapping",
    tag: "Free",
    desc: "We map your workflows and score every friction point. You leave with a prioritized automation plan.",
    deliverables: ["Workflow map", "Friction analysis", "ROI projection", "Implementation timeline"],
  },
  {
    num: "02",
    title: "System Design",
    tag: "",
    desc: "We design the automation architecture. You approve before anything is built.",
    deliverables: ["Architecture diagram", "Integration specs", "Fixed-price proposal"],
  },
  {
    num: "03",
    title: "Build and Test",
    tag: "",
    desc: "We build, connect your tools, and test against real scenarios from your operations.",
    deliverables: ["Deployed systems", "Test documentation", "Error-handling configuration"],
  },
  {
    num: "04",
    title: "Deploy and Onboard",
    tag: "",
    desc: "We go live, train your team, and hand off documentation.",
    deliverables: ["Staff training", "System docs", "Monitoring dashboard"],
  },
  {
    num: "05",
    title: "Monitor and Optimize",
    tag: "",
    desc: "We monitor performance and refine based on real data.",
    deliverables: ["30-day review", "Optimization report", "Ongoing support if retained"],
  },
];

const WORKFLOWS = [
  {
    tab: "Immigration",
    title: "Immigration Consultant — Client Intake",
    trigger: "Prospect submits inquiry",
    actions: [
      "AI qualifies the lead",
      "Categorizes visa type",
      "CRM record created",
      "Assigns consultant",
      "Sends document checklist",
      "Books consultation",
    ],
    outcome: "Intake from 45 min to under 5. Consultant gains 11+ hours/week.",
  },
  {
    tab: "Contractor",
    title: "Contractor — After-Hours Lead Capture",
    trigger: "Homeowner submits quote request at 9pm",
    actions: [
      "90-second AI response",
      "Qualifies project type",
      "CRM record created",
      "Books site visit into Jobber",
    ],
    outcome: "Contractor wakes up with booked appointments. Zero missed leads.",
  },
  {
    tab: "Accounting",
    title: "Accounting Firm — Document Collection",
    trigger: "Tax season engagement starts",
    actions: [
      "Personalized document request by type",
      "Upload portal link sent",
      "Progress tracked automatically",
      "48-hour reminders until complete",
      "Accountant notified on completion",
    ],
    outcome: "Chase time eliminated. Capacity up 30%. Same team.",
  },
  {
    tab: "Physiotherapy",
    title: "Physiotherapy Clinic — Appointments",
    trigger: "Patient requests booking",
    actions: [
      "Availability check and confirmation",
      "Digital intake forms sent",
      "48-hour reminder dispatched",
      "2-hour SMS reminder sent",
      "Cancellation fills from waitlist",
    ],
    outcome: "No-shows down 25–40%. Front desk calls cut 50–70%.",
  },
  {
    tab: "Law Firm",
    title: "Law Firm — Matter Intake",
    trigger: "Prospect submits contact form",
    actions: [
      "Categorize by practice area",
      "Route to correct lawyer",
      "Send response with timeline",
      "Create matter record",
      "Initiate document collection",
    ],
    outcome: "Every inquiry captured. Lawyer engages with full context.",
  },
];

const CASE_STUDIES = [
  {
    industry: "Immigration Firm",
    location: "North York",
    timeframe: "4 weeks",
    before: [
      { metric: "Intake time", value: "45 min" },
      { metric: "Lead response", value: "2–8 hours" },
      { metric: "Admin on intake", value: "18 hrs/week" },
      { metric: "Status inquiry calls", value: "25/week" },
    ],
    after: [
      { metric: "Intake time", value: "< 5 min" },
      { metric: "Lead response", value: "< 3 min" },
      { metric: "Admin on intake", value: "4 hrs/week" },
      { metric: "Status inquiry calls", value: "6/week" },
    ],
    keyResult: "14 staff hours recovered per week. 11 additional billable hours for consultants.",
    roi: "ROI achieved within first billing cycle.",
  },
  {
    industry: "Accounting Firm",
    location: "Vaughan",
    timeframe: "3 weeks",
    before: [
      { metric: "Document follow-up", value: "2–3 hrs/day" },
      { metric: "Collection time", value: "18 days" },
      { metric: "Invoice delay", value: "2–4 weeks" },
      { metric: "Tax season capacity", value: "215 files" },
    ],
    after: [
      { metric: "Document follow-up", value: "Zero (automated)" },
      { metric: "Collection time", value: "9 days" },
      { metric: "Invoice delay", value: "Same day" },
      { metric: "Tax season capacity", value: "280 files" },
    ],
    keyResult: "30% capacity increase. 65 additional clients the following season.",
    roi: "Full impact within first tax season.",
  },
  {
    industry: "General Contractor",
    location: "Mississauga",
    timeframe: "2 weeks",
    before: [
      { metric: "Response time", value: "4–6 hrs" },
      { metric: "Lost leads/month", value: "8–12" },
      { metric: "Quote follow-up", value: "40%" },
      { metric: "After-hours capture", value: "0%" },
    ],
    after: [
      { metric: "Response time", value: "< 90 sec" },
      { metric: "Lost leads/month", value: "1–2" },
      { metric: "Quote follow-up", value: "100%" },
      { metric: "After-hours capture", value: "100%" },
    ],
    keyResult: "Quote conversion up 22% in 60 days. Significant monthly revenue recovered.",
    roi: "ROI within first month.",
  },
];

const INDUSTRIES = [
  {
    name: "Immigration Consultants",
    desc: "Intake, document collection, client status updates, PIPEDA-compliant",
    icon: "🌐",
    href: "/ai-automation-immigration",
  },
  {
    name: "Accounting Firms",
    desc: "Tax document collection, invoice automation, seasonal capacity planning",
    icon: "📊",
    href: "/ai-automation-accounting",
  },
  {
    name: "Law Firms",
    desc: "Matter intake, retainer automation, billing cycles, conflict check initiation",
    icon: "⚖️",
    href: "/ai-automation-law-firms",
  },
  {
    name: "Contractors",
    desc: "After-hours lead capture, 90-second response, quote follow-up, Jobber integration",
    icon: "🔧",
    href: "/ai-automation-contractors",
  },
  {
    name: "Physiotherapy Clinics",
    desc: "Booking, dual reminders, waitlist management, Jane App integration",
    icon: "🏥",
    href: "/ai-automation-physiotherapy",
  },
  {
    name: "Real Estate Teams",
    desc: "Lead capture, buyer nurture sequences, listing follow-up",
    icon: "🏠",
    href: "/how-businesses-use-ai-agents",
  },
  {
    name: "Service Businesses",
    desc: "Onboarding, scheduling, invoicing, review and referral requests",
    icon: "⚡",
    href: "/how-businesses-use-ai-agents",
  },
];

const FAQ_ITEMS = [
  {
    q: "How much does AI automation cost?",
    a: "Single workflow: $1,500–$4,000 CAD. Multi-workflow systems: $5,000–$15,000 CAD. Fixed pricing after free audit. No hourly billing.",
  },
  {
    q: "How long until I see results?",
    a: "First automation live within 2–3 weeks. Measurable improvement within 30 days. Full multi-workflow systems in 4–8 weeks.",
  },
  {
    q: "Do I need to replace my current software?",
    a: "No. We build on top of your existing tools. Your team keeps using the same systems.",
  },
  {
    q: "Will this replace my employees?",
    a: "No. Automation handles data entry, follow-up, reminders, routing. Your staff handle judgment, expertise, and client relationships.",
  },
  {
    q: "Is my client data secure?",
    a: "Data stays in your systems. PIPEDA-aware design. Every data flow documented. We do not retain access after project completion unless retained.",
  },
  {
    q: "What if something breaks?",
    a: "Every system includes error handling, failure alerts, retry logic, and human escalation. Nothing fails silently.",
  },
  {
    q: "What happens in the free audit?",
    a: "60-minute working session. We map 2–3 workflows, identify friction points, and deliver a prioritized plan with timelines and fixed pricing. You keep the plan whether or not you proceed.",
  },
  {
    q: "What if automation is not right for my business?",
    a: "We will tell you. We have told clients to wait when their primary constraint was not operational. You get an honest assessment, not a pitch.",
  },
];

// ─── Section 1: Hero ──────────────────────────────────────────────────────────

function HeroSection({ reduced }: { reduced: boolean }) {
  return (
    <section
      className="relative min-h-[90vh] flex items-center overflow-hidden"
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
          className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,180,216,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />
      )}

      <div className="relative z-10 container-custom w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            {/* Badge */}
            <motion.div
              custom={0}
              variants={reduced ? {} : heroVariants}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#00B4D8]/30 bg-[#00B4D8]/10 text-[#00B4D8] text-sm font-medium mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#00B4D8] animate-pulse" aria-hidden="true" />
              <span>AI Automation for Small Business — Toronto &amp; GTA</span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              custom={1}
              variants={reduced ? {} : heroVariants}
              initial="hidden"
              animate="visible"
              className="text-white mb-6 leading-tight"
            >
              Respond to Every Lead in{" "}
              <span className="text-[#00B4D8]" style={{ textShadow: "0 0 40px rgba(0,180,216,0.4)" }}>
                90 Seconds.
              </span>{" "}
              Recover 15+ Hours of Admin Per Week. Grow Without Hiring.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              custom={2}
              variants={reduced ? {} : heroVariants}
              initial="hidden"
              animate="visible"
              className="text-xl text-[#E8ECF1]/80 mb-4 leading-relaxed"
            >
              Barrana.ai builds AI automation systems that run your operations while your team does the work
              that actually generates revenue. Not tools. Not chatbots. Working systems with governance built in.
            </motion.p>

            {/* Body */}
            <motion.div
              custom={3}
              variants={reduced ? {} : heroVariants}
              initial="hidden"
              animate="visible"
              className="text-[#E8ECF1]/60 text-base leading-relaxed mb-8 space-y-2"
            >
              <p>
                Right now, your business is losing leads to 4-hour response times, burning staff hours on manual
                data entry, and sending invoices weeks late because someone forgot.
              </p>
              <p>
                Each of these problems has a systematic fix that works inside your existing tools, requires no
                technical knowledge from your team, and pays for itself within 30 to 90 days.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={reduced ? {} : heroVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-4"
            >
              <AuditCTAButton variant="dark" />
              <a
                href="#workflows"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base lg:text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40"
                onClick={() => trackCTA("See How It Works")}
              >
                See How It Works
              </a>
            </motion.div>

            {/* Microcopy */}
            <motion.p
              custom={5}
              variants={reduced ? {} : heroVariants}
              initial="hidden"
              animate="visible"
              className="mt-4 text-[#6B7280] text-sm"
            >
              Walk away with a clear plan to automate your business in 30 days. No pitch. No obligation.
            </motion.p>
          </div>

          {/* Right: Workflow visualization */}
          <div className="hidden lg:block">
            <motion.div
              custom={3}
              variants={reduced ? {} : heroVariants}
              initial="hidden"
              animate="visible"
              className="relative"
              aria-hidden="true"
            >
              {/* Dashboard card */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-white font-semibold text-sm">Automation Live</span>
                  <span className="flex items-center gap-1.5 text-[#10B981] text-xs font-medium">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    Active
                  </span>
                </div>

                {[
                  { icon: "📨", label: "Lead Inquiry Received", time: "Just now", color: "#1A5276" },
                  { icon: "🤖", label: "AI Response Sent", time: "00:00:47", color: "#00B4D8" },
                  { icon: "📊", label: "CRM Record Created", time: "00:00:48", color: "#1A5276" },
                  { icon: "📅", label: "Meeting Auto-Booked", time: "00:01:12", color: "#10B981" },
                ].map((step, i) => (
                  <motion.div
                    key={step.label}
                    initial={reduced ? false : { opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.25, duration: 0.5 }}
                    className="flex items-center gap-3 py-3 border-b border-white/5 last:border-0"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                      style={{ background: `${step.color}33` }}
                    >
                      {step.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-white text-sm font-medium truncate">{step.label}</div>
                    </div>
                    <div className="text-[#6B7280] text-xs tabular-nums flex-shrink-0">{step.time}</div>
                  </motion.div>
                ))}

                <div className="mt-5 p-3 rounded-xl bg-[#10B981]/10 border border-[#10B981]/20">
                  <div className="text-[#10B981] text-xs font-semibold uppercase tracking-wide mb-1">Response time today</div>
                  <div className="text-white text-2xl font-bold tabular-nums">
                    47<span className="text-[#10B981] text-base font-medium ml-1">seconds avg</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
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

// ─── Section 2: Trust Badges ──────────────────────────────────────────────────

function TrustBadgesSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 bg-white border-b border-[#E8ECF1]" aria-label="Key metrics">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : statContainerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10"
        >
          {TRUST_BADGES.map((badge) => (
            <motion.div
              key={badge.label}
              variants={reduced ? {} : statVariants}
              className="text-center p-4"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#0A1628] tabular-nums mb-1">
                {badge.isNumeric ? (
                  <>
                    <CountUp to={Number(badge.value)} inView={inView} />
                    <span className="text-[#00B4D8]">{badge.suffix}</span>
                  </>
                ) : (
                  <span>
                    {badge.value}
                    <span className="text-[#00B4D8]">{badge.suffix}</span>
                  </span>
                )}
              </div>
              <div className="text-[#1F2937] font-semibold text-sm mb-1">{badge.label}</div>
              <div className="text-[#6B7280] text-xs leading-snug">{badge.supporting}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={reduced ? {} : fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center text-[#6B7280] text-sm mt-8"
        >
          Serving Toronto, Vaughan, Markham, Mississauga, Richmond Hill, and North York.{" "}
          <span className="font-medium text-[#1F2937]">PIPEDA-aware implementations.</span>
        </motion.p>
      </div>
    </section>
  );
}

// ─── Section 3: Objection Cards ───────────────────────────────────────────────

function ObjectionCardsSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-16 bg-[#F7F9FC]" aria-label="What to know before you scroll">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-2">Before You Scroll</p>
          <h2 className="text-[#0A1628] text-2xl md:text-3xl font-bold">Three Things to Know</h2>
        </motion.div>

        <motion.div
          variants={reduced ? {} : staggerFast}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {OBJECTION_CARDS.map((card) => (
            <motion.div
              key={card.title}
              variants={reduced ? {} : cardEntranceVariants}
              className="bg-white border border-[#E8ECF1] rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-[#EEF6FF] flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-[#0A1628] font-bold text-base mb-2">{card.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 4: Cost of Inaction ──────────────────────────────────────────────

function CostOfInactionSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-[#F7F9FC]" aria-label="Cost of manual operations">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">The Hidden Cost</p>
          <h2 className="text-[#0A1628] mb-3">What Manual Operations Are Costing You Right Now</h2>
          <p className="text-[#6B7280] text-lg">The math most business owners have never done:</p>
        </motion.div>

        <motion.div
          variants={reduced ? {} : staggerFast}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
        >
          {COST_METRICS.map((m) => (
            <motion.div
              key={m.label}
              variants={reduced ? {} : cardEntranceVariants}
              className="bg-white border border-[#E8ECF1] rounded-2xl p-6"
            >
              <div className="flex items-baseline gap-1 mb-1">
                <span className="text-2xl md:text-3xl font-bold text-[#EF4444] tabular-nums">{m.figure}</span>
                {m.period && <span className="text-[#EF4444] font-semibold text-sm">{m.period}</span>}
              </div>
              <div className="text-[#0A1628] font-bold text-base mb-2">{m.label}</div>
              <p className="text-[#6B7280] text-sm leading-relaxed">{m.body}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Totals callout */}
        <motion.div
          variants={reduced ? {} : fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="rounded-2xl p-6 md:p-8 mb-10"
          style={{ background: "linear-gradient(135deg, #0A1628 0%, #0f1f3d 100%)" }}
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">Bottom Line</p>
          <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
            For a typical 5-person service business, the annual cost of manual operations is{" "}
            <span className="text-[#EF4444] font-bold">$50,000 to $100,000</span> in lost revenue, wasted labor,
            and missed capacity.
          </p>
        </motion.div>

        <motion.div
          variants={reduced ? {} : fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <AuditCTAButton />
          <p className="mt-3 text-[#6B7280] text-sm">
            We will calculate the exact cost of inaction for your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 5: Problems ──────────────────────────────────────────────────────

function ProblemsSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding bg-white" aria-label="Common business problems">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">Sound Familiar?</p>
          <h2 className="text-[#0A1628] mb-4">The Six Problems Every Growing Service Business Hits</h2>
          <p className="text-[#6B7280] text-lg">
            These are not bad luck. They are operational patterns that have systematic fixes.
          </p>
        </motion.div>

        <motion.div
          variants={reduced ? {} : staggerFast}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {PROBLEMS.map((p) => (
            <motion.div
              key={p.title}
              variants={reduced ? {} : cardEntranceVariants}
              className="bg-white border border-[#E8ECF1] border-l-4 border-l-[#EF4444] rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="mb-4">{p.icon}</div>
              <h3 className="text-[#0A1628] font-bold text-base mb-2">{p.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 6: Before / After ────────────────────────────────────────────────

function BeforeAfterSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-[#F7F9FC]" aria-label="Before and after automation">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">The Transformation</p>
          <h2 className="text-[#0A1628] mb-4">We Build Systems That Do the Operational Work for You</h2>
          <p className="text-[#6B7280] text-lg">
            Not software subscriptions. Not chatbot installs. Working automation systems built around your actual workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
          {/* Before */}
          <motion.div
            variants={reduced ? {} : slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-2xl p-6 md:p-8"
            style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
              <span className="font-bold text-[#EF4444] uppercase text-xs tracking-widest">Before — Manual Operations</span>
            </div>
            <ul className="space-y-4">
              {BEFORE_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 w-4 h-4 rounded-full border-2 border-[#EF4444] flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                  </span>
                  <span className="text-[#1F2937] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* After */}
          <motion.div
            variants={reduced ? {} : slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="rounded-2xl p-6 md:p-8"
            style={{ background: "rgba(16,185,129,0.05)", border: "1px solid rgba(16,185,129,0.15)" }}
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#10B981]" />
              <span className="font-bold text-[#10B981] uppercase text-xs tracking-widest">After — Automated Systems</span>
            </div>
            <ul className="space-y-4">
              {AFTER_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="flex-shrink-0 mt-0.5 w-4 h-4 text-[#10B981]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-[#1F2937] text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          variants={reduced ? {} : fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <p className="text-[#6B7280] text-base mb-6 max-w-2xl mx-auto">
            Your tools stay the same. What changes is the coordination layer between them. That layer is now automated, monitored, and reliable.
          </p>
          <AuditCTAButton />
          <p className="mt-3 text-[#6B7280] text-sm">
            See exactly what your operations look like before and after. Personalized to your business.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 7: Method ────────────────────────────────────────────────────────

function MethodSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white" aria-label="The Barrana Automation Method">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
          <h2 className="text-[#0A1628] mb-4">The Barrana Automation Method</h2>
          <p className="text-[#6B7280] text-lg">Five stages. Fixed pricing. Your first automation live in 2–3 weeks.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12 relative">
          {/* Connecting line desktop */}
          <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-[#E8ECF1] z-0" aria-hidden="true" />

          {METHOD_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              variants={reduced ? {} : fadeInUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              transition={{ delay: reduced ? 0 : i * 0.12 }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Node */}
              <div className="w-14 h-14 rounded-full bg-[#0A1628] border-4 border-[#00B4D8] flex items-center justify-center mb-4 flex-shrink-0">
                <span className="text-[#00B4D8] font-bold text-sm tabular-nums">{step.num}</span>
              </div>

              <div className="text-[#0A1628] font-bold text-sm mb-1">
                {step.title}
                {step.tag && (
                  <span className="ml-1.5 text-xs font-semibold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded-full">
                    {step.tag}
                  </span>
                )}
              </div>
              <p className="text-[#6B7280] text-xs leading-relaxed mb-3">{step.desc}</p>

              <div className="text-left w-full">
                <p className="text-[#0A1628] text-xs font-semibold mb-1 text-center">You get:</p>
                <ul className="space-y-1">
                  {step.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-1.5">
                      <svg className="flex-shrink-0 mt-0.5 w-3 h-3 text-[#00B4D8]" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-[#6B7280] text-xs">{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={reduced ? {} : fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <AuditCTAButton />
          <p className="mt-3 text-[#6B7280] text-sm">Stage 1 is free. You keep the plan even if you do not proceed.</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 8: Workflows ─────────────────────────────────────────────────────

function WorkflowsSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState(0);
  const active = WORKFLOWS[activeTab];

  return (
    <section id="workflows" ref={ref} className="section-padding bg-[#F7F9FC]" aria-label="Workflow examples">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">Real Workflows</p>
          <h2 className="text-[#0A1628] mb-4">What Automation Looks Like in a Real Business</h2>
          <p className="text-[#6B7280] text-lg">
            Trigger → action chain → measurable outcome. Every workflow below is live in a real business.
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          variants={reduced ? {} : fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-wrap gap-2 justify-center mb-8"
          role="tablist"
          aria-label="Business type tabs"
        >
          {WORKFLOWS.map((w, i) => (
            <button
              key={w.tab}
              role="tab"
              aria-selected={activeTab === i}
              aria-controls={`workflow-panel-${i}`}
              onClick={() => {
                setActiveTab(i);
                trackCTA(`Workflow Tab: ${w.tab}`);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === i
                  ? "bg-[#00B4D8] text-white shadow-sm"
                  : "bg-white border border-[#E8ECF1] text-[#6B7280] hover:border-[#00B4D8]/40 hover:text-[#1F2937]"
              }`}
            >
              {w.tab}
            </button>
          ))}
        </motion.div>

        {/* Panel */}
        <motion.div
          variants={reduced ? {} : fadeIn}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              id={`workflow-panel-${activeTab}`}
              role="tabpanel"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="bg-white border border-[#E8ECF1] rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-[#0A1628] font-bold text-lg mb-6">{active.title}</h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Trigger */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold uppercase tracking-wide mb-4">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 6l2.5-4 5 4-5 4z" fill="currentColor" />
                    </svg>
                    Trigger
                  </div>
                  <p className="text-[#1F2937] text-sm font-medium leading-relaxed">{active.trigger}</p>
                </div>

                {/* Actions */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1A5276] text-xs font-semibold uppercase tracking-wide mb-4">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <circle cx="6" cy="6" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M4 6l1.5 1.5L8 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Action Chain
                  </div>
                  <ol className="space-y-2">
                    {active.actions.map((action, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-4 h-4 rounded-full bg-[#EEF6FF] border border-[#1A5276]/20 text-[#1A5276] text-[10px] font-bold flex items-center justify-center mt-0.5 tabular-nums">
                          {i + 1}
                        </span>
                        <span className="text-[#6B7280] text-sm">{action}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Outcome */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-[#10B981] text-xs font-semibold uppercase tracking-wide mb-4">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2 8l3-3 2 2 3-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Outcome
                  </div>
                  <p className="text-[#1F2937] text-sm font-semibold leading-relaxed">{active.outcome}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        <motion.div
          variants={reduced ? {} : fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mt-10"
        >
          <AuditCTAButton />
          <p className="mt-3 text-[#6B7280] text-sm">
            We will map one of your workflows in the audit and show you the automated version.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 9: Case Studies ──────────────────────────────────────────────────

function CaseStudiesSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="section-padding bg-white" aria-label="Operational results">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">Proven Results</p>
          <h2 className="text-[#0A1628] mb-4">Operational Results from Real Implementations</h2>
          <p className="text-[#6B7280] text-lg">Before, after, timeframe, key result. No marketing language.</p>
        </motion.div>

        <motion.div
          variants={reduced ? {} : staggerFast}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
        >
          {CASE_STUDIES.map((cs) => (
            <motion.div
              key={cs.industry}
              variants={reduced ? {} : cardEntranceVariants}
              className="border border-[#E8ECF1] rounded-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="bg-[#F7F9FC] px-6 py-4 flex items-center justify-between border-b border-[#E8ECF1]">
                <div>
                  <div className="text-[#0A1628] font-bold text-sm">{cs.industry}</div>
                  <div className="text-[#6B7280] text-xs">{cs.location}</div>
                </div>
                <span className="text-xs font-semibold text-[#1A5276] bg-[#EEF6FF] px-2.5 py-1 rounded-full">
                  {cs.timeframe}
                </span>
              </div>

              {/* Before / After */}
              <div className="grid grid-cols-2 divide-x divide-[#E8ECF1]">
                <div className="p-4">
                  <div className="text-[#EF4444] text-[10px] font-bold uppercase tracking-widest mb-3">Before</div>
                  <ul className="space-y-2.5">
                    {cs.before.map((b) => (
                      <li key={b.metric}>
                        <div className="text-[#6B7280] text-[10px] uppercase tracking-wide">{b.metric}</div>
                        <div className="text-[#EF4444] font-bold text-sm tabular-nums">{b.value}</div>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-4">
                  <div className="text-[#10B981] text-[10px] font-bold uppercase tracking-widest mb-3">After</div>
                  <ul className="space-y-2.5">
                    {cs.after.map((a) => (
                      <li key={a.metric}>
                        <div className="text-[#6B7280] text-[10px] uppercase tracking-wide">{a.metric}</div>
                        <div className="text-[#10B981] font-bold text-sm tabular-nums">{a.value}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Key result */}
              <div className="px-6 py-4 border-t border-[#E8ECF1]">
                <div className="text-[#00B4D8] text-xs font-semibold uppercase tracking-wide mb-1">Key Result</div>
                <p className="text-[#1F2937] text-sm font-medium leading-snug">{cs.keyResult}</p>
                <p className="text-[#6B7280] text-xs mt-1">{cs.roi}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={reduced ? {} : fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center"
        >
          <AuditCTAButton />
          <p className="mt-3 text-[#6B7280] text-sm">
            Your audit includes a personalized before/after projection based on your actual workflows.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 10: Industries ───────────────────────────────────────────────────

function IndustriesSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="section-padding bg-[#F7F9FC]" aria-label="Industries we serve">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">Industries</p>
          <h2 className="text-[#0A1628] mb-4">Built for the Businesses That Need It Most</h2>
          <p className="text-[#6B7280] text-lg">
            Common profile: 2–50 staff. Client-dependent. Operational bottlenecks in intake, follow-up, scheduling, billing.
          </p>
        </motion.div>

        <motion.div
          variants={reduced ? {} : staggerFast}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {INDUSTRIES.map((ind) => (
            <motion.div key={ind.name} variants={reduced ? {} : cardEntranceVariants}>
              <Link
                href={ind.href}
                className="flex items-start gap-3 p-4 bg-white border border-[#E8ECF1] rounded-xl hover:border-[#00B4D8]/40 hover:-translate-y-1 transition-all duration-200 group"
              >
                <span className="text-2xl flex-shrink-0" role="img" aria-hidden="true">{ind.icon}</span>
                <div>
                  <div className="text-[#0A1628] font-semibold text-sm group-hover:text-[#1A5276] transition-colors">
                    {ind.name}
                  </div>
                  <div className="text-[#6B7280] text-xs leading-snug mt-0.5">{ind.desc}</div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 11: AEO Block ────────────────────────────────────────────────────

function AEOSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section ref={ref} className="py-12 bg-white" aria-label="Quick answer">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : fadeInUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div
            className="rounded-2xl p-6 md:p-8"
            style={{
              background: "#F7F9FC",
              borderLeft: "4px solid #00B4D8",
            }}
          >
            <div className="flex items-center gap-2 mb-4">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <circle cx="10" cy="10" r="8.5" stroke="#00B4D8" strokeWidth="1.5" />
                <path d="M7 8.5C7 7.12 8.12 6 9.5 6h.5a2 2 0 0 1 .5 3.93V11" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="10.5" cy="13.5" r=".75" fill="#00B4D8" />
              </svg>
              <span className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest">Quick Answer</span>
            </div>

            <h2 className="text-[#0A1628] font-bold text-lg mb-3">What is AI automation for small business?</h2>

            <p className="text-[#1F2937] text-base leading-relaxed">
              AI automation for small business uses software to perform rule-based operational tasks without manual
              effort: responding to leads, qualifying inquiries, creating CRM records, collecting documents,
              scheduling appointments, generating invoices, and sending follow-up communications. The AI component
              adds language understanding, enabling systems to categorize inquiries, personalize responses, and
              extract information from unstructured inputs. The goal is to automate the coordination layer of
              business operations so teams focus on work that requires professional judgment and client relationships.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 12: FAQ ──────────────────────────────────────────────────────────

function FAQSection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? null : i));
    trackCTA(`FAQ: ${FAQ_ITEMS[i].q}`);
  }

  return (
    <section ref={ref} className="section-padding bg-[#F7F9FC]" aria-label="Frequently asked questions">
      <div className="container-custom">
        <motion.div
          variants={reduced ? {} : sectionVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <p className="text-[#00B4D8] font-semibold text-sm uppercase tracking-widest mb-3">FAQ</p>
          <h2 className="text-[#0A1628] mb-4">Questions Business Owners Ask Before Starting</h2>
        </motion.div>

        <motion.div
          variants={reduced ? {} : staggerChildren}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto space-y-3"
        >
          {FAQ_ITEMS.map((item, i) => (
            <motion.div
              key={item.q}
              variants={reduced ? {} : fadeInUp}
              className="bg-white border border-[#E8ECF1] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                aria-expanded={openIndex === i}
                className="w-full flex items-center justify-between p-5 text-left gap-4"
              >
                <span className="text-[#0A1628] font-semibold text-sm md:text-base">{item.q}</span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.25, type: "spring", stiffness: 300, damping: 25 }}
                  className="flex-shrink-0 w-6 h-6 rounded-full border border-[#E8ECF1] flex items-center justify-center text-[#6B7280]"
                  aria-hidden="true"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-[#6B7280] text-sm leading-relaxed">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── Section 13: Final CTA ────────────────────────────────────────────────────

function FinalCTASection({ reduced }: { reduced: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="section-padding"
      style={{ background: "linear-gradient(135deg, #0A1628 0%, #0f1f3d 100%)" }}
      aria-label="Final call to action"
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
            Ready to Start?
          </motion.p>

          <motion.h2
            variants={reduced ? {} : fadeInUp}
            className="text-white mb-6"
          >
            Your Operations Will Not Fix Themselves. The Audit Takes 60 Minutes.
          </motion.h2>

          <motion.p
            variants={reduced ? {} : fadeInUp}
            className="text-[#E8ECF1]/70 text-lg mb-10 leading-relaxed"
          >
            Every week you wait, your business loses leads to slow response, burns staff hours on admin, and delays
            revenue through inconsistent processes.
          </motion.p>

          <motion.div
            variants={reduced ? {} : fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <AuditCTAButton variant="dark" />
            <Link
              href="/ai-automation-guide"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base lg:text-lg transition-all duration-300 hover:bg-white/10 hover:border-white/40"
              onClick={() => trackCTA("Download Guide")}
            >
              Download: 5 Workflows to Automate First
            </Link>
          </motion.div>

          <motion.div variants={reduced ? {} : fadeIn} className="mt-6 space-y-1">
            <p className="text-[#6B7280] text-sm">
              Walk away with a clear plan to automate your business in 30 days.
            </p>
            <p className="text-[#6B7280] text-sm">
              A free guide for business owners still researching automation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Main HomeClient ───────────────────────────────────────────────────────────

export default function HomeClient() {
  const reduced = useReducedMotion();

  return (
    <>
      <HeroSection reduced={reduced} />
      <TrustBadgesSection reduced={reduced} />
      <ObjectionCardsSection reduced={reduced} />
      <CostOfInactionSection reduced={reduced} />
      <ProblemsSection reduced={reduced} />
      <BeforeAfterSection reduced={reduced} />
      <MethodSection reduced={reduced} />
      <WorkflowsSection reduced={reduced} />
      <CaseStudiesSection reduced={reduced} />
      <IndustriesSection reduced={reduced} />
      <AEOSection reduced={reduced} />
      <FAQSection reduced={reduced} />
      <FinalCTASection reduced={reduced} />
    </>
  );
}
