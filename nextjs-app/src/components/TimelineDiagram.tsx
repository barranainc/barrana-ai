"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface TimelineNode {
  label: string;
  sublabel?: string;
  date?: string;
  color?: string;
}

interface TimelineDiagramProps {
  nodes: TimelineNode[];
  title?: string;
}

export default function TimelineDiagram({ nodes, title }: TimelineDiagramProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} aria-label={title || "Timeline"} role="img" className="w-full">
      {title && (
        <h3 className="text-lg font-semibold text-[#1F2937] mb-8 text-center">{title}</h3>
      )}
      {/* Desktop: horizontal */}
      <div className="hidden md:flex items-start gap-0">
        {nodes.map((node, i) => {
          const color = node.color || "#00B4D8";
          return (
            <div key={node.label} className="flex flex-1 flex-col items-center">
              {/* Top label / date */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.4 }}
                className="text-xs font-semibold text-[#6B7280] mb-2 text-center"
              >
                {node.date}
              </motion.div>
              {/* Connector line + dot */}
              <div className="flex w-full items-center">
                {i > 0 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: i * 0.2 - 0.1, duration: 0.3 }}
                    style={{ originX: 0 }}
                    className="flex-1 h-0.5 bg-[#E8ECF1]"
                  />
                )}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.4, type: "spring", stiffness: 200 }}
                  className="w-4 h-4 rounded-full border-2 border-white flex-shrink-0 shadow-md"
                  style={{ backgroundColor: color }}
                />
                {i < nodes.length - 1 && (
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={inView ? { scaleX: 1 } : {}}
                    transition={{ delay: i * 0.2 + 0.1, duration: 0.3 }}
                    style={{ originX: 0 }}
                    className="flex-1 h-0.5 bg-[#E8ECF1]"
                  />
                )}
              </div>
              {/* Bottom label */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.2 + 0.1, duration: 0.4 }}
                className="mt-2 text-center px-1"
              >
                <div className="text-sm font-semibold text-[#1F2937]">{node.label}</div>
                {node.sublabel && (
                  <div className="text-xs text-[#6B7280] mt-0.5">{node.sublabel}</div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* Mobile: vertical */}
      <div className="flex md:hidden flex-col gap-0">
        {nodes.map((node, i) => {
          const color = node.color || "#00B4D8";
          return (
            <div key={node.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.2, duration: 0.4, type: "spring" }}
                  className="w-4 h-4 rounded-full border-2 border-white flex-shrink-0 shadow-md mt-1"
                  style={{ backgroundColor: color }}
                />
                {i < nodes.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={inView ? { scaleY: 1 } : {}}
                    transition={{ delay: i * 0.2 + 0.2, duration: 0.4 }}
                    style={{ originY: 0 }}
                    className="w-0.5 flex-1 bg-[#E8ECF1] my-1"
                  />
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.2, duration: 0.4 }}
                className="pb-6"
              >
                {node.date && (
                  <div className="text-xs font-semibold text-[#6B7280]">{node.date}</div>
                )}
                <div className="text-sm font-semibold text-[#1F2937]">{node.label}</div>
                {node.sublabel && (
                  <div className="text-xs text-[#6B7280] mt-0.5">{node.sublabel}</div>
                )}
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
