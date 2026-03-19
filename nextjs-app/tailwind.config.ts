/**
 * Barrana.ai — Tailwind CSS Configuration
 *
 * NOTE: This project uses Tailwind v4 with @tailwindcss/postcss.
 * In Tailwind v4, the canonical theme is defined via CSS @theme blocks in globals.css.
 * This file is kept for IDE tooling, editor plugins, and any tooling that
 * reads the JS/TS config. The CSS @theme in globals.css is the source of truth.
 */

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        navy: {
          DEFAULT: "#0A1628",
          50: "#E8EDF5",
          100: "#C5D0E3",
          200: "#9FB0CF",
          300: "#7891BB",
          400: "#5A78AB",
          500: "#3C5F9B",
          600: "#2E4A7A",
          700: "#1F3459",
          800: "#121F38",
          900: "#0A1628",
        },
        blue: {
          DEFAULT: "#1A5276",
          50: "#E8F1F7",
          100: "#C3DAEA",
          200: "#9AC2DC",
          300: "#6FAACE",
          400: "#4D97C4",
          500: "#2E84B9",
          600: "#236999",
          700: "#1A5276",
          800: "#113752",
          900: "#081D2D",
        },
        teal: {
          DEFAULT: "#00B4D8",
          50: "#E0F7FB",
          100: "#B3ECF5",
          200: "#80DFEE",
          300: "#4DD2E7",
          400: "#26C7E2",
          500: "#00B4D8",
          600: "#009DBD",
          700: "#007E99",
          800: "#005F75",
          900: "#003F4F",
        },
        charcoal: {
          DEFAULT: "#1F2937",
          50: "#F9FAFB",
          100: "#F3F4F6",
          200: "#E5E7EB",
          300: "#D1D5DB",
          400: "#9CA3AF",
          500: "#6B7280",
          600: "#4B5563",
          700: "#374151",
          800: "#1F2937",
          900: "#111827",
        },
        // Semantic / utility
        "off-white": "#F7F9FC",
        "light-grey": "#E8ECF1",
        "mid-grey": "#6B7280",
        success: "#10B981",
        danger: "#EF4444",
        warning: "#F59E0B",
        purple: {
          DEFAULT: "#7C3AED",
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
        },
      },
      fontFamily: {
        inter: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "Cascadia Code", "monospace"],
      },
      fontSize: {
        "display-lg": ["clamp(40px, 5vw, 56px)", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-md": ["clamp(28px, 3.5vw, 40px)", { lineHeight: "1.15", letterSpacing: "-0.01em", fontWeight: "600" }],
        "display-sm": ["clamp(20px, 2.5vw, 28px)", { lineHeight: "1.2", letterSpacing: "-0.005em", fontWeight: "600" }],
        body: ["17px", { lineHeight: "1.7", fontWeight: "400" }],
      },
      animation: {
        "fadeIn": "fadeIn 0.6s ease forwards",
        "slideUp": "slideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slideInLeft": "slideInLeft 0.6s ease forwards",
        "float": "float 4s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "shimmer": "shimmer 2.5s ease-in-out infinite",
        "draw-line": "drawLine 1.5s ease forwards",
        "count-up": "countUp 0.5s ease forwards",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(0, 180, 216, 0.4)" },
          "50%": { boxShadow: "0 0 0 16px rgba(0, 180, 216, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        drawLine: {
          from: { strokeDashoffset: "1000" },
          to: { strokeDashoffset: "0" },
        },
        countUp: {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        card: "0 4px 6px -1px rgba(0,0,0,0.07), 0 2px 4px -1px rgba(0,0,0,0.04)",
        "card-hover": "0 20px 40px -8px rgba(10,22,40,0.18), 0 8px 16px -4px rgba(10,22,40,0.10)",
        "glow-teal": "0 0 32px rgba(0,180,216,0.30)",
        "glow-teal-lg": "0 0 64px rgba(0,180,216,0.25)",
        "inner-navy": "inset 0 0 60px rgba(10,22,40,0.5)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-mesh": "radial-gradient(ellipse 80% 80% at 20% 40%, rgba(0,180,216,0.15) 0%, transparent 60%), radial-gradient(ellipse 60% 60% at 80% 20%, rgba(26,82,118,0.2) 0%, transparent 60%)",
        "card-shine": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 50%)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.16, 1, 0.3, 1)",
        "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
        "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "30": "7.5rem",
        "section": "clamp(60px, 8vw, 120px)",
      },
    },
  },
  plugins: [],
};

export default config;
