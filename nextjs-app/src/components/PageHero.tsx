"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface DarkHeroProps {
  variant: "dark";
  title: string;
  subtitle: string;
  body?: string;
  ctaText: string;
  ctaHref: string;
  badge?: string;
}

interface LightHeroProps {
  variant: "light";
  title: string;
  subtitle: string;
  body?: string;
  ctaText: string;
  ctaHref: string;
  breadcrumb?: BreadcrumbItem[];
}

type PageHeroProps = DarkHeroProps | LightHeroProps;

/* ------------------------------------------------------------------ */
/*  Animation variants                                                  */
/* ------------------------------------------------------------------ */

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

/* ------------------------------------------------------------------ */
/*  Geometric background shapes (dark variant)                          */
/* ------------------------------------------------------------------ */

function GeometricShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large circle top-right */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full border border-white/[0.03]"
        style={{ background: "radial-gradient(circle, rgba(0,180,216,0.03) 0%, transparent 70%)" }}
      />
      {/* Medium circle bottom-left */}
      <div
        className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full border border-white/[0.03]"
        style={{ background: "radial-gradient(circle, rgba(26,82,118,0.05) 0%, transparent 70%)" }}
      />
      {/* Small accent top-left */}
      <div className="absolute top-24 left-16 w-24 h-24 rounded-full border border-[#00B4D8]/[0.06]" />
      {/* Grid dots */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #00B4D8 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Diagonal line accent */}
      <svg
        className="absolute right-0 top-0 h-full w-1/3 opacity-[0.03]"
        viewBox="0 0 400 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <line x1="400" y1="0" x2="0" y2="800" stroke="#00B4D8" strokeWidth="1" />
        <line x1="350" y1="0" x2="-50" y2="800" stroke="#00B4D8" strokeWidth="1" />
        <line x1="450" y1="0" x2="50" y2="800" stroke="#1A5276" strokeWidth="1" />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Dark Variant                                                        */
/* ------------------------------------------------------------------ */

function DarkHero({ title, subtitle, body, ctaText, ctaHref, badge }: Omit<DarkHeroProps, "variant">) {
  return (
    <section
      className="relative flex items-center overflow-hidden"
      style={{
        minHeight: "85vh",
        background: "linear-gradient(160deg, #0A1628 0%, #0F1D30 60%, #0A1628 100%)",
      }}
      aria-label="Page hero"
    >
      <GeometricShapes />

      {/* Teal glow blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[120px]"
        style={{ background: "radial-gradient(ellipse, rgba(0,180,216,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Badge / section label */}
          {badge && (
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 text-[#00B4D8] text-xs font-semibold uppercase tracking-widest bg-[#00B4D8]/10 border border-[#00B4D8]/20 rounded-full px-4 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] animate-pulse" aria-hidden="true" />
                {badge}
              </span>
            </motion.div>
          )}

          {/* H1 */}
          <motion.h1
            variants={itemVariants}
            className="text-white font-bold leading-[1.08] tracking-tight mb-6"
            style={{ fontSize: "clamp(36px, 5vw, 60px)" }}
          >
            {title}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[#9CADC4] text-lg sm:text-xl leading-relaxed mb-4 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          {/* Body */}
          {body && (
            <motion.p
              variants={itemVariants}
              className="text-[#7A90A8] text-base leading-relaxed mb-8 max-w-xl"
            >
              {body}
            </motion.p>
          )}

          {/* CTA */}
          <motion.div variants={itemVariants} className={body ? "" : "mt-8"}>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0097B8] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_32px_rgba(0,180,216,0.3)] hover:shadow-[0_0_48px_rgba(0,180,216,0.45)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1628]"
            >
              {ctaText}
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                <path
                  d="M3.75 9h10.5M10 4.75l4.25 4.25L10 13.25"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Breadcrumb sub-component (light variant)                           */
/* ------------------------------------------------------------------ */

function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-5">
      <ol className="flex items-center flex-wrap gap-1.5 text-sm text-[#6B7280]" role="list">
        <li>
          <Link href="/" className="hover:text-[#1A5276] transition-colors">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1.5">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              aria-hidden="true"
              className="text-[#D1D5DB]"
            >
              <path
                d="M5 3l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {item.href && i < items.length - 1 ? (
              <Link href={item.href} className="hover:text-[#1A5276] transition-colors">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="text-[#374151] font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Light Variant                                                       */
/* ------------------------------------------------------------------ */

function LightHero({ title, subtitle, body, ctaText, ctaHref, breadcrumb }: Omit<LightHeroProps, "variant">) {
  return (
    <section
      className="relative overflow-hidden bg-white"
      style={{ maxHeight: "60vh" }}
      aria-label="Page hero"
    >
      {/* Subtle gradient fade to off-white */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F7F9FC 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {/* Breadcrumb */}
          {breadcrumb && breadcrumb.length > 0 && (
            <motion.div variants={itemVariants}>
              <Breadcrumb items={breadcrumb} />
            </motion.div>
          )}

          {/* H1 with left accent bar */}
          <motion.div variants={itemVariants} className="flex items-start gap-4 mb-5">
            <div
              className="shrink-0 mt-2 w-1 rounded-full self-stretch"
              style={{
                background: "#1A5276",
                minHeight: "48px",
              }}
              aria-hidden="true"
            />
            <h1
              className="text-[#0A1628] font-bold leading-tight tracking-tight"
              style={{ fontSize: "clamp(28px, 4vw, 48px)" }}
            >
              {title}
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-[#374151] text-lg leading-relaxed mb-3 max-w-2xl pl-5"
          >
            {subtitle}
          </motion.p>

          {/* Body */}
          {body && (
            <motion.p
              variants={itemVariants}
              className="text-[#6B7280] text-base leading-relaxed mb-6 max-w-xl pl-5"
            >
              {body}
            </motion.p>
          )}

          {/* CTA */}
          <motion.div variants={itemVariants} className={`pl-5 ${body || subtitle ? "mt-6" : "mt-6"}`}>
            <Link
              href={ctaHref}
              className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0097B8] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
            >
              {ctaText}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Export                                                         */
/* ------------------------------------------------------------------ */

export default function PageHero(props: PageHeroProps) {
  if (props.variant === "dark") {
    const { variant: _v, ...rest } = props;
    return <DarkHero {...rest} />;
  }
  const { variant: _v, ...rest } = props;
  return <LightHero {...rest} />;
}
