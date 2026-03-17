"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ToolItem {
  name: string;
  icon?: string;
}

interface ToolStackLayer {
  label: string;
  sublabel?: string;
  tools: ToolItem[];
  color: string;
  bgColor: string;
}

interface ToolStackDiagramProps {
  layers: ToolStackLayer[];
  title?: string;
}

export default function ToolStackDiagram({ layers, title }: ToolStackDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} aria-label={title || "Tool stack diagram"} role="img">
      {title && (
        <h3 className="text-lg font-semibold text-[#1F2937] mb-6 text-center">{title}</h3>
      )}
      <div className="flex flex-col gap-4">
        {[...layers].reverse().map((layer, i) => {
          const revI = layers.length - 1 - i;
          return (
            <motion.div
              key={layer.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: revI * 0.2,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
              }}
              className="rounded-2xl border-2 p-5"
              style={{ borderColor: layer.color, backgroundColor: layer.bgColor }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: layer.color }}
                />
                <span className="font-semibold text-sm" style={{ color: layer.color }}>
                  {layer.label}
                </span>
                {layer.sublabel && (
                  <span className="text-xs text-[#6B7280]">— {layer.sublabel}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {layer.tools.map((tool) => (
                  <span
                    key={tool.name}
                    className="inline-flex items-center gap-1.5 bg-white border border-[#E8ECF1] rounded-lg px-3 py-1.5 text-sm font-medium text-[#1F2937] shadow-sm"
                  >
                    {tool.icon && <span>{tool.icon}</span>}
                    {tool.name}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
        {/* Flow arrows between layers */}
        {layers.length > 1 && (
          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none">
            {layers.slice(0, -1).map((_, i) => (
              <svg key={i} width="24" height="16" viewBox="0 0 24 16" fill="none" className="my-1 opacity-40">
                <path d="M6 4L12 12L18 4" stroke="#00B4D8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
