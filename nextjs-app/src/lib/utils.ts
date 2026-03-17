import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS class names intelligently, resolving conflicts.
 * Uses clsx for conditional logic and tailwind-merge for deduplication.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a number for display in counter animations.
 * Supports K/M suffixes and locale-aware formatting.
 *
 * @example
 * formatNumber(1500)        // "1,500"
 * formatNumber(1500, 'K')   // "1.5K"
 * formatNumber(2000000, 'M') // "2M"
 */
export function formatNumber(
  value: number,
  suffix?: "K" | "M" | "B",
  decimals = 0
): string {
  if (suffix === "K") {
    return `${(value / 1_000).toFixed(decimals)}K`;
  }
  if (suffix === "M") {
    return `${(value / 1_000_000).toFixed(decimals)}M`;
  }
  if (suffix === "B") {
    return `${(value / 1_000_000_000).toFixed(decimals)}B`;
  }
  return new Intl.NumberFormat("en-CA", {
    maximumFractionDigits: decimals,
    minimumFractionDigits: decimals,
  }).format(value);
}

/**
 * Converts a string into a URL-safe slug.
 *
 * @example
 * slugify("AI Automation for Small Business") // "ai-automation-for-small-business"
 * slugify("What is AI?  (A Guide)")           // "what-is-ai-a-guide"
 */
export function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")   // remove non-word chars (except spaces and hyphens)
    .replace(/[\s_]+/g, "-")    // spaces and underscores → hyphens
    .replace(/-+/g, "-")        // collapse multiple hyphens
    .replace(/^-|-$/g, "");     // strip leading/trailing hyphens
}

/**
 * Clamps a number between a min and max value.
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Linear interpolation between two values.
 */
export function lerp(start: number, end: number, t: number): number {
  return start + (end - start) * t;
}

/**
 * Formats a percentage value for display.
 *
 * @example
 * formatPercent(0.85) // "85%"
 * formatPercent(1.2)  // "120%"
 */
export function formatPercent(value: number, decimals = 0): string {
  return `${(value * 100).toFixed(decimals)}%`;
}

/**
 * Truncates a string to a maximum length, appending an ellipsis if needed.
 */
export function truncate(str: string, maxLength: number, ellipsis = "…"): string {
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - ellipsis.length).trimEnd() + ellipsis;
}
