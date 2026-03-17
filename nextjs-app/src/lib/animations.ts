"use client";

import { useEffect, useState } from "react";
import type { Variants } from "framer-motion";

// ─── Core Animation Variants ──────────────────────────────────────────────────

/**
 * Fade in while sliding up — primary entrance animation for content blocks.
 * Uses a spring-like easing for a natural feel.
 */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Simple fade in — for subtle reveals (images, overlays, dividers).
 */
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

/**
 * Slide in from the left — for side content, process steps, nav items.
 */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

/**
 * Slide in from the right — for complementary content or side panels.
 */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

/**
 * Stagger children — wrap a list of items to animate them one by one.
 *
 * @example
 * <motion.ul variants={staggerChildren} initial="hidden" animate="visible">
 *   {items.map(item => <motion.li key={item.id} variants={fadeInUp}>{item.text}</motion.li>)}
 * </motion.ul>
 */
export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

/**
 * Stagger children with a faster cadence — for dense grids (feature cards, logos).
 */
export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

// ─── Hero Variants ────────────────────────────────────────────────────────────

/**
 * Hero section variants with per-element delay support.
 * Pass `custom={i}` to each child to stagger by index.
 *
 * @example
 * <motion.h1 custom={0} variants={heroVariants} initial="hidden" animate="visible">...</motion.h1>
 * <motion.p  custom={1} variants={heroVariants} initial="hidden" animate="visible">...</motion.p>
 * <motion.div custom={2} variants={heroVariants} initial="hidden" animate="visible">...</motion.div>
 */
export const heroVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/**
 * Hero background/graphic entrance — slower, more cinematic.
 */
export const heroBackgroundVariants: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ─── Section / Scroll-triggered Variants ─────────────────────────────────────

/**
 * Standard section entrance — used with viewport-triggered animations.
 * Pair with `whileInView="visible"` and `viewport={{ once: true, margin: "-80px" }}`.
 */
export const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/**
 * Section header — slightly more pronounced lift for headings.
 */
export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ─── Card Variants ────────────────────────────────────────────────────────────

/**
 * Card hover — subtle lift and shadow on hover.
 * Apply to interactive card wrappers with `whileHover="hover"`.
 */
export const cardVariants: Variants = {
  rest: {
    y: 0,
    boxShadow: "0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.04)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
  hover: {
    y: -6,
    boxShadow: "0 20px 40px -8px rgba(10,22,40,0.18), 0 8px 16px -4px rgba(10,22,40,0.10)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

/**
 * Card entrance — for grid animations (combine with staggerChildren on parent).
 */
export const cardEntranceVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ─── Button / CTA Variants ────────────────────────────────────────────────────

/**
 * Button tap animation — provides tactile feedback on click.
 */
export const buttonVariants: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
  tap: { scale: 0.97, transition: { duration: 0.1 } },
};

// ─── Number / Counter Variants ────────────────────────────────────────────────

/**
 * Stat counter container — triggers number animations as a group.
 */
export const statContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/**
 * Individual stat — pops up for impact.
 */
export const statVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

// ─── Line / Divider Variants ──────────────────────────────────────────────────

/**
 * Horizontal line draw — for decorative SVG lines or section dividers.
 */
export const lineDrawVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 1.5, ease: "easeInOut" },
      opacity: { duration: 0.3 },
    },
  },
};

// ─── Overlay / Modal Variants ─────────────────────────────────────────────────

/**
 * Modal backdrop — fade in/out.
 */
export const backdropVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
};

/**
 * Modal panel — slide up from bottom.
 */
export const modalVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.97,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

// ─── Utility: useReducedMotion Hook ──────────────────────────────────────────

/**
 * Returns true if the user has enabled the "prefer reduced motion" accessibility setting.
 * Use this to conditionally skip or simplify animations.
 *
 * @example
 * const prefersReduced = useReducedMotion();
 * const variants = prefersReduced ? {} : fadeInUp;
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReduced(mql.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  return prefersReduced;
}
