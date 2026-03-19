"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  direction?: "up" | "down";
  color?: "green" | "red" | "blue";
  decimals?: number;
  description?: string;
}

export default function MetricCard({
  value,
  suffix = "",
  prefix = "",
  label,
  direction = "up",
  color = "green",
  decimals = 0,
  description,
}: MetricCardProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView) return;
    const duration = 2200;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      // easeOut: slows down near end
      const progress = 1 - Math.pow(1 - step / steps, 3);
      current = value * progress;
      setCount(current);
      if (step >= steps) {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  const colorMap = {
    green: "text-[#10B981]",
    red: "text-[#EF4444]",
    blue: "text-[#00B4D8]",
  };

  const bgMap = {
    green: "bg-[#10B981]/10 border-[#10B981]/20",
    red: "bg-[#EF4444]/10 border-[#EF4444]/20",
    blue: "bg-[#00B4D8]/10 border-[#00B4D8]/20",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
      className={`rounded-2xl border p-6 text-center ${bgMap[color]}`}
    >
      <div className={`text-4xl font-bold tabular-nums ${colorMap[color]} flex items-center justify-center gap-1`}>
        {direction === "down" ? (
          <TrendingDown className="w-6 h-6 opacity-70" />
        ) : (
          <TrendingUp className="w-6 h-6 opacity-70" />
        )}
        <span>
          {prefix}{decimals > 0 ? count.toFixed(decimals) : Math.round(count)}{suffix}
        </span>
      </div>
      <p className="mt-2 text-sm font-semibold text-[#1F2937]">{label}</p>
      {description && (
        <p className="mt-1 text-xs text-[#6B7280]">{description}</p>
      )}
    </motion.div>
  );
}
