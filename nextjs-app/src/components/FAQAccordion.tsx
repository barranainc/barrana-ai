"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  schemaId?: string;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Single accordion item                                               */
/* ------------------------------------------------------------------ */

function AccordionItem({
  item,
  isOpen,
  onToggle,
  index,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  const itemId = `faq-answer-${index}`;
  const triggerId = `faq-trigger-${index}`;

  return (
    <div
      className={[
        "border border-[#E8ECF1] rounded-xl overflow-hidden transition-colors duration-200",
        isOpen ? "border-[#00B4D8]/40" : "hover:border-[#D1D5DB]",
      ].join(" ")}
    >
      {/* Trigger button */}
      <button
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={itemId}
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 px-5 py-4 sm:px-6 sm:py-5 text-left bg-white hover:bg-[#FAFBFC] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#00B4D8]"
      >
        <span className="text-[#0A1628] font-semibold text-sm sm:text-base leading-snug">
          {item.question}
        </span>

        {/* Plus / X icon */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#F3F4F6] flex items-center justify-center text-[#6B7280]"
          aria-hidden="true"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </button>

      {/* Answer panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={itemId}
            role="region"
            aria-labelledby={triggerId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 bg-white border-t border-[#F3F4F6]">
              <p className="text-[#374151] text-sm sm:text-base leading-relaxed pt-4">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  FAQAccordion Component                                              */
/* ------------------------------------------------------------------ */

export default function FAQAccordion({
  items,
  schemaId = "faq-schema",
  className = "",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  function handleToggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index));
  }

  // Build JSON-LD FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      {/* JSON-LD structured data */}
      <script
        id={schemaId}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Accordion */}
      <div
        className={`space-y-3 ${className}`}
        role="list"
        aria-label="Frequently asked questions"
      >
        {items.map((item, index) => (
          <div key={index} role="listitem">
            <AccordionItem
              item={item}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              index={index}
            />
          </div>
        ))}
      </div>
    </>
  );
}
