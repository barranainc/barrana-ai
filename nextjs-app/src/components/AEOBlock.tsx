"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "p";

interface AEOBlockProps {
  question: string;
  answer: string | ReactNode;
  headingLevel?: HeadingLevel;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Magnifying Glass Icon                                               */
/* ------------------------------------------------------------------ */

function MagnifyingGlassIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <circle
        cx="7"
        cy="7"
        r="4.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M10.5 10.5L14 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  AEOBlock Component                                                  */
/* ------------------------------------------------------------------ */

export default function AEOBlock({
  question,
  answer,
  headingLevel = "p",
  className = "",
}: AEOBlockProps) {
  const HeadingTag = headingLevel;

  return (
    <motion.div
      initial={{ opacity: 0, x: -24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      role="region"
      aria-label={`Quick answer: ${question}`}
      className={`relative rounded-lg overflow-hidden ${className}`}
      style={{
        background: "#F7F9FC",
        borderLeft: "4px solid #00B4D8",
        padding: "32px",
      }}
    >
      {/* Label */}
      <div
        className="flex items-center gap-1.5 text-[#00B4D8] mb-3"
        aria-hidden="true"
      >
        <MagnifyingGlassIcon />
        <span className="text-[10px] font-bold uppercase tracking-[0.15em]">
          Quick Answer
        </span>
      </div>

      {/* Question */}
      <HeadingTag className="text-[#0A1628] font-bold text-lg sm:text-xl leading-snug mb-3">
        {question}
      </HeadingTag>

      {/* Answer */}
      <div className="text-[#374151] text-base leading-relaxed">
        {typeof answer === "string" ? <p>{answer}</p> : answer}
      </div>
    </motion.div>
  );
}
