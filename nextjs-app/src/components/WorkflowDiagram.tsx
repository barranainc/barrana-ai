"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type NodeType = "trigger" | "action" | "decision" | "outcome";

export interface WorkflowStep {
  id: string;
  label: string;
  sublabel?: string;
  type: NodeType;
}

interface WorkflowDiagramProps {
  steps: WorkflowStep[];
  title?: string;
  orientation?: "horizontal" | "vertical";
}

const nodeColors: Record<NodeType, { bg: string; border: string; text: string; dot: string }> = {
  trigger: { bg: "#FEF3C7", border: "#F59E0B", text: "#92400E", dot: "#F59E0B" },
  action: { bg: "#EFF6FF", border: "#1A5276", text: "#1A5276", dot: "#1A5276" },
  decision: { bg: "#F3E8FF", border: "#7C3AED", text: "#5B21B6", dot: "#7C3AED" },
  outcome: { bg: "#ECFDF5", border: "#10B981", text: "#065F46", dot: "#10B981" },
};

const nodeLabels: Record<NodeType, string> = {
  trigger: "Trigger",
  action: "Action",
  decision: "AI Decision",
  outcome: "Outcome",
};

export default function WorkflowDiagram({
  steps,
  title,
  orientation = "vertical",
}: WorkflowDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const isHorizontal = orientation === "horizontal";

  return (
    <div ref={ref} aria-label={title || "Workflow diagram"} role="img">
      {title && (
        <h3 className="text-lg font-semibold text-[#1F2937] mb-6 text-center">
          {title}
        </h3>
      )}

      {/* Legend */}
      <div className="flex flex-wrap gap-3 justify-center mb-6">
        {(Object.keys(nodeColors) as NodeType[]).map((type) => (
          <div key={type} className="flex items-center gap-1.5 text-xs text-[#6B7280]">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: nodeColors[type].dot }}
            />
            {nodeLabels[type]}
          </div>
        ))}
      </div>

      <div
        className={`flex ${isHorizontal ? "flex-row items-center overflow-x-auto" : "flex-col items-stretch"} gap-0`}
      >
        {steps.map((step, i) => {
          const colors = nodeColors[step.type];
          return (
            <div
              key={step.id}
              className={`flex ${isHorizontal ? "flex-row items-center" : "flex-col items-center"}`}
            >
              {/* Node */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: i * 0.15,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
                }}
                className="relative flex-shrink-0"
                style={{
                  minWidth: isHorizontal ? "160px" : undefined,
                  maxWidth: isHorizontal ? "180px" : undefined,
                }}
              >
                <div
                  className="rounded-xl border-2 p-4 text-center"
                  style={{
                    backgroundColor: colors.bg,
                    borderColor: colors.border,
                  }}
                >
                  <div
                    className="text-xs font-bold uppercase tracking-widest mb-1"
                    style={{ color: colors.dot }}
                  >
                    {i + 1}. {nodeLabels[step.type]}
                  </div>
                  <div
                    className="text-sm font-semibold leading-snug"
                    style={{ color: colors.text }}
                  >
                    {step.label}
                  </div>
                  {step.sublabel && (
                    <div className="text-xs text-[#6B7280] mt-1">{step.sublabel}</div>
                  )}
                </div>
              </motion.div>

              {/* Connector */}
              {i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, scaleY: isHorizontal ? 1 : 0, scaleX: isHorizontal ? 0 : 1 }}
                  animate={inView ? { opacity: 1, scaleY: 1, scaleX: 1 } : {}}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.3 }}
                  className={`flex items-center justify-center ${
                    isHorizontal ? "mx-1 flex-shrink-0" : "my-1"
                  }`}
                  style={{ originX: isHorizontal ? 0 : 0.5, originY: isHorizontal ? 0.5 : 0 }}
                >
                  {isHorizontal ? (
                    <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                      <line x1="0" y1="12" x2="24" y2="12" stroke="#00B4D8" strokeWidth="2" />
                      <path d="M20 6L28 12L20 18" stroke="#00B4D8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg width="24" height="32" viewBox="0 0 24 32" fill="none">
                      <line x1="12" y1="0" x2="12" y2="24" stroke="#00B4D8" strokeWidth="2" />
                      <path d="M6 20L12 28L18 20" stroke="#00B4D8" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
