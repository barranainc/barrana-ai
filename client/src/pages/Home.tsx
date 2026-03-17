/**
 * Home.tsx — Barrana.ai Homepage
 * Design: Premium Systems Consultancy inspired by ronasit.com
 * - Light backgrounds (#FFF, #F7F8FB, #F2F4F8)
 * - Diverse section layouts — no repeated card grids
 * - Scroll-based reveal animations
 * - Animated SVG workflow diagrams
 * - Navy #283891, Magenta #7E0F4A
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import HeroWorkflowDiagram from "@/components/diagrams/HeroWorkflowDiagram";
import SystemArchDiagram from "@/components/diagrams/SystemArchDiagram";
import MethodologyFlow from "@/components/diagrams/MethodologyFlow";
import PipelineDiagram, { PIPELINES } from "@/components/diagrams/PipelineDiagram";

// Scroll reveal hook
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// Animated counter
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal(0.5);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1200;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const hero = useReveal(0.05);
  const problemsReveal = useReveal();
  const solution = useReveal();
  const methodology = useReveal();
  const workflows = useReveal();
  const caseStudies = useReveal();
  const industriesReveal = useReveal();
  const stats = useReveal(0.3);
  const faq = useReveal();
  const cta = useReveal(0.2);

  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeWorkflow, setActiveWorkflow] = useState(0);

  const faqs = [
    { q: "What types of businesses do you work with?", a: "We work with small and medium businesses in the Toronto and GTA area with 2 to 50 staff. Our clients are typically professional service firms — immigration consultants, accounting firms, law firms, contractors, clinics, and real estate teams — who rely on client relationships and are losing time to manual coordination." },
    { q: "How long does it take to see results?", a: "Most clients see measurable operational improvements within 30 days of deployment. Our methodology is designed to prioritize the highest-impact, lowest-friction automations first, so you get ROI quickly before we build out the full system." },
    { q: "Do you replace our existing software?", a: "No. We integrate with the tools you already use — your CRM, calendar, email, invoicing system, and project management tools. We build automation layers that connect them together, not replace them." },
    { q: "What does fixed-price mean?", a: "Every engagement is scoped and priced before work begins. You know exactly what you are getting and what it costs. There are no hourly billing surprises. If scope changes, we discuss it openly before proceeding." },
    { q: "Is this PIPEDA compliant?", a: "Yes. We build all systems with Canadian privacy law in mind. Client data stays within Canadian-compliant infrastructure. We document data flows and ensure your automation systems meet PIPEDA requirements." },
    { q: "What happens after the system is deployed?", a: "We provide a monitoring and optimization phase where we track system performance, resolve edge cases, and refine based on real operational data. The system improves as your business evolves." },
  ];

  const workflowTabs = [
    { label: "Lead Capture", pipeline: PIPELINES.leadCapture },
    { label: "Client Intake", pipeline: PIPELINES.clientIntake },
    { label: "Document Collection", pipeline: PIPELINES.documentCollection },
  ];

  const problemsList = [
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Leads Going Cold",
      body: "A potential client fills out your contact form at 7pm on a Friday. By Monday morning, they have already booked with a competitor. Your response time is not a sales problem. It is a systems problem.",
      color: "#283891",
    },
    {
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01",
      title: "Admin Eating Hours",
      body: "Someone on your team is spending 2 to 3 hours every day copying information between systems: intake forms to CRMs, invoices to QuickBooks, schedules to project trackers. This work creates no value.",
      color: "#7E0F4A",
    },
    {
      icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
      title: "No Visibility Into Operations",
      body: "You are running a business, but you are not entirely sure which stage each client is in, whether your team is overloaded, or which tasks have been dropped. Manual operations are invisible operations.",
      color: "#283891",
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Missed Calls and Inquiries",
      body: "Your phone goes unanswered during busy hours. Messages come in through email, Instagram, and your website at the same time and no single system captures all of them.",
      color: "#7E0F4A",
    },
    {
      icon: "M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z",
      title: "Invoicing and Follow-Up Delays",
      body: "Invoices go out late. Payment reminders do not get sent until someone remembers. Cash flow suffers not because of bad clients, but because of inconsistent processes.",
      color: "#283891",
    },
    {
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z",
      title: "Staff Doing Work That Does Not Scale",
      body: "Your team is good at client work. But they are spending a significant portion of their time on coordination, scheduling, and administrative tasks that could be handled systematically.",
      color: "#7E0F4A",
    },
  ];

  const industriesList = [
    { emoji: "🛂", label: "Immigration Consultants", sub: "Client intake, document collection, file tracking", href: "/industries/immigration-consultants" },
    { emoji: "📊", label: "Accounting Firms", sub: "Document chase elimination, invoice automation", href: "/industries/accounting-firms" },
    { emoji: "⚖️", label: "Law Firms", sub: "Matter intake, billing cycles, client updates", href: "/industries/law-firms" },
    { emoji: "🔧", label: "Contractors", sub: "Lead capture, quote follow-up, job scheduling", href: "/industries/contractors" },
    { emoji: "🏥", label: "Clinics", sub: "Appointment reminders, patient intake, no-show reduction", href: "/industries/clinics" },
    { emoji: "🏠", label: "Real Estate Teams", sub: "Lead nurture, CRM automation, listing alerts", href: "/industries/real-estate" },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: "#FFFFFF" }}>
        {/* Dot grid background */}
        <div className="absolute inset-0 dot-grid-bg opacity-60 pointer-events-none" />
        {/* Gradient fade at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(to bottom, transparent, white)" }} />

        <div className="container relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div
              ref={hero.ref}
              style={{
                opacity: hero.visible ? 1 : 0,
                transform: hero.visible ? "translateY(0)" : "translateY(32px)",
                transition: "opacity 0.8s ease, transform 0.8s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <div className="section-divider mb-6">
                <span className="section-label">AI Automation Consultancy · Toronto & GTA</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight mb-6" style={{ color: "#111827", letterSpacing: "-0.03em" }}>
                Leads Slip Through.{" "}
                <span style={{ color: "#283891" }}>Admin Piles Up.</span>{" "}
                Your Systems Are Not Keeping Pace.
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed mb-4 max-w-xl">
                Barrana.ai builds AI automation systems that close response gaps, eliminate manual coordination, and give small businesses in Toronto and the GTA the operational backbone to grow without adding headcount.
              </p>

              <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-xl">
                A lead comes in at 7pm and sits unanswered until morning. A new client onboards and someone spends 40 minutes copying data between systems. An invoice goes out two weeks late because no one remembered to generate it. These are not isolated problems — they are symptoms of operations that depend on manual effort for tasks that should run automatically.
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link href="/contact" className="btn-primary">
                  Book a Free Automation Audit
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link href="/case-studies" className="btn-outline">
                  View Example Workflows
                </Link>
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  { label: "10+ years software delivery" },
                  { label: "PIPEDA-aware" },
                  { label: "Fixed-price engagements" },
                ].map((badge) => (
                  <div key={badge.label} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#7E0F4A" }} />
                    {badge.label}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Animated diagram */}
            <div
              style={{
                opacity: hero.visible ? 1 : 0,
                transform: hero.visible ? "translateX(0)" : "translateX(32px)",
                transition: "opacity 0.9s ease 0.2s, transform 0.9s cubic-bezier(0.4,0,0.2,1) 0.2s",
              }}
            >
              <div
                className="relative rounded-2xl p-6 lg:p-8"
                style={{
                  background: "#F7F8FB",
                  border: "1px solid rgba(40,56,145,0.08)",
                  boxShadow: "0 20px 60px rgba(40,56,145,0.08)",
                }}
              >
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Example: Small Business Automation System
                </p>
                <HeroWorkflowDiagram />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── STATS BAND ─── */}
      <section style={{ backgroundColor: "#283891" }}>
        <div className="container py-10">
          <div
            ref={stats.ref}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { value: 10, suffix: "+", label: "Years of software delivery" },
              { value: 6, suffix: "", label: "GTA cities served" },
              { value: 90, suffix: " days", label: "Max ROI recovery window" },
              { value: 100, suffix: "%", label: "Fixed-price engagements" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="text-center"
                style={{
                  opacity: stats.visible ? 1 : 0,
                  transform: stats.visible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease ${i * 0.1}s, transform 0.5s ease ${i * 0.1}s`,
                }}
              >
                <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1" style={{ letterSpacing: "-0.04em" }}>
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section style={{ backgroundColor: "#F7F8FB" }} className="py-20 lg:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-divider mb-4">
                <span className="section-label">Our Approach</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-6" style={{ color: "#111827" }}>
                Built for Operators,<br />Not Just Optimists
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                We have spent over a decade building software systems for businesses across industries. Barrana.ai was created because we kept seeing the same problem: small business owners were being sold AI tools with no plan for how those tools would actually fit into their day-to-day operations.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Before writing a single line of automation logic, we map your workflows, identify friction points, and build systems that reduce your team's cognitive load — not add to it.
              </p>
              <Link href="/about" className="btn-outline">
                About Barrana.ai
              </Link>
            </div>
            <div>
              <SystemArchDiagram />
            </div>
          </div>
        </div>
      </section>

      {/* ─── OPERATIONAL PROBLEMS ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div
            ref={problemsReveal.ref}
            style={{
              opacity: problemsReveal.visible ? 1 : 0,
              transform: problemsReveal.visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="section-divider mb-4">
              <span className="section-label">Common Operational Problems</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 lg:gap-8 items-end mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: "#111827" }}>
                If Your Business Has a Team,<br />It Has These Problems
              </h2>
              <p className="text-gray-500 leading-relaxed">
                These are not unique to your industry. They are symptoms of manual operations running at capacity.
              </p>
            </div>
          </div>

          {/* Asymmetric problem layout */}
          <div className="grid lg:grid-cols-3 gap-px bg-gray-100 rounded-2xl overflow-hidden">
            {problemsList.map((p, i: number) => (
              <div
                key={p.title}
                className="bg-white p-7 group hover:bg-[#F7F8FB] transition-colors"
                style={{
                opacity: problemsReveal.visible ? 1 : 0,
                    transform: problemsReveal.visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${0.1 + i * 0.07}s, transform 0.5s ease ${0.1 + i * 0.07}s`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors"
                  style={{ backgroundColor: `${p.color}10` }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={p.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-base">{p.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE BARRANA SOLUTION ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F2F4F8" }}>
        <div className="container">
          <div
            ref={solution.ref}
            className="grid lg:grid-cols-2 gap-16 items-center"
            style={{
              opacity: solution.visible ? 1 : 0,
              transform: solution.visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div>
              <div className="section-divider mb-4">
                <span className="section-label">The Barrana Solution</span>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extrabold mb-6" style={{ color: "#111827" }}>
                We Build Systems That Do the Operational Work for You
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Not software subscriptions. Not AI experiments. Working automation systems built around your actual business workflows.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Barrana.ai operates as a systems integrator. We take the tools your business already uses and build automation layers that connect them together.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                When a new lead comes in, the system responds immediately, logs it in your CRM, notifies the right person, and schedules the follow-up. When a client completes an intake form, the information routes directly to your project management system without anyone manually copying it.
              </p>

              <blockquote
                className="border-l-4 pl-5 py-1 mb-8 italic text-gray-700"
                style={{ borderColor: "#7E0F4A" }}
              >
                "This is not AI replacing your team. This is AI handling the coordination work your team should not be doing in the first place."
              </blockquote>

              <Link href="/services" className="btn-primary">
                View All Services
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </Link>
            </div>

            {/* Services list */}
            <div className="space-y-3">
              {[
                { title: "Operations Automation", desc: "Connect your CRM, calendar, email, and project management tools into one coordinated system.", href: "/services/operations-automation" },
                { title: "AI Receptionist", desc: "Never miss a lead. An AI system that responds to inquiries 24/7 across all your channels.", href: "/services/ai-receptionist" },
                { title: "Lead Capture & Follow-Up", desc: "Automated response, qualification, and booking sequences for every inbound lead.", href: "/services/lead-automation" },
                { title: "Client Intake Automation", desc: "From inquiry to onboarded client without manual data entry or coordination.", href: "/services/client-intake" },
                { title: "Document Collection", desc: "Automated checklists, reminders, and tracking so your team stops chasing documents.", href: "/services/document-collection" },
              ].map((service, i) => (
                <Link
                  key={service.title}
                  href={service.href}
                  className="flex items-start gap-4 p-4 bg-white rounded-xl border border-transparent hover:border-blue-100 hover:shadow-sm transition-all group"
                  style={{
                    opacity: solution.visible ? 1 : 0,
                    transform: solution.visible ? "translateX(0)" : "translateX(20px)",
                    transition: `opacity 0.5s ease ${0.1 + (i as number) * 0.08}s, transform 0.5s ease ${0.1 + (i as number) * 0.08}s`,
                  }}
                >
                  <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: i % 2 === 0 ? "#283891" : "#7E0F4A" }} />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-900 text-sm mb-0.5 group-hover:text-navy transition-colors">{service.title}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{service.desc}</div>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5 opacity-30 group-hover:opacity-70 transition-opacity">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="#283891" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── METHODOLOGY ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div
            ref={methodology.ref}
            style={{
              opacity: methodology.visible ? 1 : 0,
              transform: methodology.visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="section-divider mb-4">
              <span className="section-label">How We Work</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 items-end mb-14">
              <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: "#111827" }}>
                The Barrana<br />Automation Method
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Five stages. Fixed pricing. Clear deliverables at every step.
              </p>
            </div>
          </div>
          <MethodologyFlow />
          <div className="mt-12 text-center">
            <Link href="/contact" className="btn-primary">
              Start With a Free Automation Audit
            </Link>
          </div>
        </div>
      </section>

      {/* ─── WORKFLOW EXAMPLES ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F7F8FB" }}>
        <div className="container">
          <div
            ref={workflows.ref}
            style={{
              opacity: workflows.visible ? 1 : 0,
              transform: workflows.visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="section-divider mb-4">
              <span className="section-label">Real-World Examples</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 items-end mb-10">
              <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: "#111827" }}>
                What Automation Looks Like<br />in a Real Business
              </h2>
              <p className="text-gray-500 leading-relaxed">
                These are examples of the types of workflows we have built for GTA businesses.
              </p>
            </div>
          </div>

          {/* Tab selector */}
          <div className="flex gap-2 mb-8 flex-wrap">
            {workflowTabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveWorkflow(i)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: activeWorkflow === i ? "#283891" : "white",
                  color: activeWorkflow === i ? "white" : "#6B7280",
                  border: `1.5px solid ${activeWorkflow === i ? "#283891" : "#E5E7EB"}`,
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Pipeline display */}
          <div
            className="bg-white rounded-2xl p-8 border"
            style={{ borderColor: "rgba(40,56,145,0.08)" }}
          >
            {workflowTabs[activeWorkflow] && (
              <PipelineDiagram
                steps={workflowTabs[activeWorkflow].pipeline}
                title={workflowTabs[activeWorkflow].label + " Automation Pipeline"}
              />
            )}

            {/* Workflow descriptions */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              {activeWorkflow === 0 && (
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Contractor: Lead Response and Booking</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">A homeowner submits a quote request through the website at 9pm. Within 90 seconds, they receive a confirmation, a short questionnaire to qualify the job, and a link to book a site visit.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Result</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">The contractor wakes up the next morning with a qualified appointment already in Jobber. No one on the team needed to respond manually.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Outcome</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2"><span className="text-xs font-bold text-navy">90 sec</span><span className="text-xs text-gray-500">lead response time</span></div>
                      <div className="flex items-center gap-2"><span className="text-xs font-bold" style={{ color: "#7E0F4A" }}>+22%</span><span className="text-xs text-gray-500">quote conversion</span></div>
                      <div className="flex items-center gap-2"><span className="text-xs font-bold text-navy">100%</span><span className="text-xs text-gray-500">after-hours captured</span></div>
                    </div>
                  </div>
                </div>
              )}
              {activeWorkflow === 1 && (
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Immigration Consultant: Client Intake</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">A new client fills out a consultation request form. The system immediately sends a confirmation email, creates a client record in the CRM, assigns the file to a consultant based on visa type.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Result</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">No one on the team needs to touch this until the consultation date. A follow-up task is automatically scheduled for 24 hours later.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Outcome</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2"><span className="text-xs font-bold text-navy">87%</span><span className="text-xs text-gray-500">intake time reduction</span></div>
                      <div className="flex items-center gap-2"><span className="text-xs font-bold" style={{ color: "#7E0F4A" }}>0</span><span className="text-xs text-gray-500">manual data entry steps</span></div>
                      <div className="flex items-center gap-2"><span className="text-xs font-bold text-navy">45 days</span><span className="text-xs text-gray-500">ROI recovery</span></div>
                    </div>
                  </div>
                </div>
              )}
              {activeWorkflow === 2 && (
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Accounting Firm: Document Collection</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">When a client engagement starts, the system automatically sends a document request checklist, tracks which documents have been received, and sends reminders for outstanding items every 48 hours.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Result</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">Staff no longer chase documents manually. Files that are overdue are automatically flagged and escalated. The team focuses on filing, not chasing.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-2">Outcome</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2"><span className="text-xs font-bold text-navy">8 hrs</span><span className="text-xs text-gray-500">saved per week</span></div>
                      <div className="flex items-center gap-2"><span className="text-xs font-bold" style={{ color: "#7E0F4A" }}>100%</span><span className="text-xs text-gray-500">document tracking</span></div>
                      <div className="flex items-center gap-2"><span className="text-xs font-bold text-navy">60 days</span><span className="text-xs text-gray-500">ROI recovery</span></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link href="/case-studies" className="btn-outline">
              See Full Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* ─── INDUSTRIES ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div
            ref={industriesReveal.ref}
            style={{
              opacity: industriesReveal.visible ? 1 : 0,
              transform: industriesReveal.visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="section-divider mb-4">
              <span className="section-label">Industries We Serve</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-4 items-end mb-12">
              <h2 className="text-3xl lg:text-4xl font-extrabold" style={{ color: "#111827" }}>
                We Work With Operators,<br />Not Industries
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Every industry has different workflows. We have studied the operational patterns of each one. The businesses we work with share a common profile: 2 to 50 staff, client relationships, and bottlenecks in intake, follow-up, scheduling, and document management.
              </p>
            </div>
          </div>

          {/* Asymmetric industry layout */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            {industriesList.map((ind, i: number) => (
              <Link
                key={ind.label}
                href={ind.href}
                className="group relative overflow-hidden rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all bg-white"
                style={{
                opacity: industriesReveal.visible ? 1 : 0,
                    transform: industriesReveal.visible ? "translateY(0)" : "translateY(20px)",
                    transition: `opacity 0.5s ease ${0.05 + i * 0.07}s, transform 0.5s ease ${0.05 + i * 0.07}s`,
                }}
              >
                <div className="text-3xl mb-3">{ind.emoji}</div>
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-navy transition-colors">{ind.label}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{ind.sub}</p>
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: "#283891" }}
                />
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link href="/industries" className="btn-outline">
              Find Your Industry
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CASE STUDY HIGHLIGHT ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#F2F4F8" }}>
        <div className="container">
          <div
            ref={caseStudies.ref}
            style={{
              opacity: caseStudies.visible ? 1 : 0,
              transform: caseStudies.visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="section-divider mb-4">
              <span className="section-label">Case Study Highlights</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-12" style={{ color: "#111827" }}>
              Operational Results From Real Implementations
            </h2>
          </div>

          {/* Featured case study — narrative layout */}
          <div
            className="bg-white rounded-2xl overflow-hidden border"
            style={{ borderColor: "rgba(40,56,145,0.08)" }}
          >
            <div className="grid lg:grid-cols-2">
              {/* Left: Narrative */}
              <div className="p-8 lg:p-10">
                <div className="tag-navy mb-4">Case Study — General Contractor, Mississauga</div>
                <h3 className="text-xl font-extrabold text-gray-900 mb-4 leading-snug">
                  How a Mississauga Contractor Cut Lead Response Time and Increased Quote Conversion
                </h3>

                <div className="mb-5">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">The Problem</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A residential renovation contractor was generating 40 to 60 inbound leads per month. The owner was on job sites from 7am to 5pm — lead inquiries came in throughout the day but meaningful follow-up only happened during breaks. An estimated 8 to 12 qualified leads were being lost per month to slow response time alone.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">The Solution</div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    24/7 lead capture with 90-second automated response, qualification questions, Jobber booking integration, quote follow-up sequences, and after-hours voice AI capture.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  {[
                    { value: "90 sec", label: "Lead response time (from 4–6 hrs)" },
                    { value: "+22%", label: "Quote conversion rate in 60 days" },
                    { value: "100%", label: "After-hours leads captured" },
                    { value: "30 days", label: "Projected ROI recovery" },
                  ].map((stat: { value: string; label: string }) => (
                    <div key={stat.label} className="p-3 rounded-xl" style={{ backgroundColor: "#F7F8FB" }}>
                      <div className="text-xl font-extrabold mb-0.5" style={{ color: "#283891" }}>{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link href="/case-studies" className="btn-primary text-sm">
                  Read Full Case Study
                </Link>
              </div>

              {/* Right: Pipeline diagram */}
              <div
                className="p-8 lg:p-10 flex flex-col justify-center"
                style={{ backgroundColor: "#F7F8FB", borderLeft: "1px solid rgba(40,56,145,0.06)" }}
              >
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-6">Contractor Lead Automation System</p>
                <PipelineDiagram steps={PIPELINES.leadCapture} />

                {/* Second mini case study */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="tag-magenta mb-3">Immigration Firm, North York</div>
                  <h4 className="font-bold text-gray-900 text-sm mb-2">Client Intake Time Reduced by an Estimated 87%</h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3">
                    Intake time per new client dropped from approximately 45 minutes to under 6 minutes. The firm onboards clients faster and with fewer errors.
                  </p>
                  <div className="flex gap-4">
                    <div><span className="text-sm font-bold" style={{ color: "#283891" }}>87%</span><span className="text-xs text-gray-400 ml-1">time reduction</span></div>
                    <div><span className="text-sm font-bold" style={{ color: "#7E0F4A" }}>45 days</span><span className="text-xs text-gray-400 ml-1">ROI recovery</span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 lg:py-28" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="container">
          <div
            ref={faq.ref}
            style={{
              opacity: faq.visible ? 1 : 0,
              transform: faq.visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="section-divider mb-4">
                  <span className="section-label">Common Questions</span>
                </div>
                <h2 className="text-3xl lg:text-4xl font-extrabold mb-6" style={{ color: "#111827" }}>
                  Questions We Hear<br />From Every Client
                </h2>
                <p className="text-gray-500 leading-relaxed mb-8">
                  These are the questions that come up in almost every initial conversation. If yours is not here, book a free audit and we will answer it directly.
                </p>
                <Link href="/contact" className="btn-primary">
                  Book a Free Audit
                </Link>
              </div>

              <div className="space-y-3">
                {faqs.map((item, i) => (
                  <div
                    key={i}
                    className="border rounded-xl overflow-hidden transition-all"
                    style={{ borderColor: openFaq === i ? "rgba(40,56,145,0.2)" : "rgba(40,56,145,0.08)" }}
                  >
                    <button
                      className="w-full flex items-center justify-between p-5 text-left"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    >
                      <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        className="flex-shrink-0 transition-transform duration-200"
                        style={{ transform: openFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                      >
                        <path d="M3 6l5 5 5-5" stroke="#283891" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5">
                        <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BAND ─── */}
      <section
        className="py-20"
        style={{ background: "linear-gradient(135deg, #283891 0%, #1e2d7a 50%, #7E0F4A 100%)" }}
      >
        <div className="container text-center">
          <div
            ref={cta.ref}
            style={{
              opacity: cta.visible ? 1 : 0,
              transform: cta.visible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Ready to Recover Hours Every Week?
            </h2>
            <p className="text-blue-200 mb-8 max-w-xl mx-auto">
              Book a free 60-minute Automation Audit. We map your workflows, identify your highest-impact automation opportunities, and give you a clear picture of what is possible. No obligation.
            </p>
            <Link href="/contact" className="btn-accent">
              Book Free Automation Audit
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
