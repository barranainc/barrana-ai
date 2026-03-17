"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface BeforeAfterItem {
  label: string;
  value?: string | number;
  sublabel?: string;
}

interface BeforeAfterSliderProps {
  title?: string;
  beforeTitle?: string;
  afterTitle?: string;
  beforeItems: BeforeAfterItem[];
  afterItems: BeforeAfterItem[];
}

export default function BeforeAfterSlider({
  title,
  beforeTitle = "Before Automation",
  afterTitle = "After Automation",
  beforeItems,
  afterItems,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 5), 95);
    setPosition(pct);
  };

  return (
    <div aria-label={title || "Before and after comparison"} role="img">
      {title && (
        <h3 className="text-lg font-semibold text-[#1F2937] mb-4 text-center">{title}</h3>
      )}
      <div
        ref={containerRef}
        className="relative rounded-2xl overflow-hidden border border-[#E8ECF1] select-none cursor-col-resize h-auto min-h-[280px]"
        onMouseMove={(e) => {
          if (e.buttons === 1) handleMove(e.clientX);
        }}
        onMouseDown={(e) => handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* Before (full width, red tint) */}
        <div className="absolute inset-0 bg-[#FEF2F2] flex flex-col p-6 overflow-hidden">
          <div className="text-sm font-bold text-[#EF4444] uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#EF4444]" />
            {beforeTitle}
          </div>
          <div className="space-y-3 flex-1">
            {beforeItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#EF4444]/20 text-[#EF4444] flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✕</span>
                <div>
                  {item.value && (
                    <span className="font-bold text-[#EF4444] tabular-nums mr-1">{item.value}</span>
                  )}
                  <span className="text-sm text-[#1F2937] font-medium">{item.label}</span>
                  {item.sublabel && (
                    <p className="text-xs text-[#6B7280]">{item.sublabel}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* After (clipped to right of slider, green tint) */}
        <div
          className="absolute inset-0 bg-[#F0FDF4] flex flex-col p-6 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <div className="text-sm font-bold text-[#10B981] uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#10B981]" />
            {afterTitle}
          </div>
          <div className="space-y-3 flex-1">
            {afterItems.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-[#10B981]/20 text-[#10B981] flex items-center justify-center text-xs flex-shrink-0 mt-0.5">✓</span>
                <div>
                  {item.value && (
                    <span className="font-bold text-[#10B981] tabular-nums mr-1">{item.value}</span>
                  )}
                  <span className="text-sm text-[#1F2937] font-medium">{item.label}</span>
                  {item.sublabel && (
                    <p className="text-xs text-[#6B7280]">{item.sublabel}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Draggable divider */}
        <motion.div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-col-resize z-10 flex items-center justify-center"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="w-8 h-8 rounded-full bg-white border-2 border-[#00B4D8] shadow-md flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M4 7H10M4 7L2 5M4 7L2 9M10 7L12 5M10 7L12 9" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </div>
      <p className="text-center text-xs text-[#6B7280] mt-2">← Drag to compare →</p>
    </div>
  );
}
