/**
 * HeroWorkflowDiagram.tsx
 * Design: Barrana.ai — Premium Systems Consultancy
 * Animated SVG workflow diagram showing small business automation system.
 * Lines draw themselves in on mount. Nodes pulse subtly.
 * Colors: Navy #283891, Magenta #7E0F4A, Neutral #7B7B7B
 */

import { useEffect, useRef, useState } from "react";

const nodes = [
  { id: "lead", label: "Lead Form", x: 60, y: 80, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", color: "#283891" },
  { id: "agent", label: "AI Intake Agent", x: 220, y: 40, icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1", color: "#7E0F4A" },
  { id: "crm", label: "CRM", x: 380, y: 80, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z", color: "#283891" },
  { id: "calendar", label: "Calendar", x: 220, y: 160, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z", color: "#283891" },
  { id: "invoice", label: "Invoice System", x: 380, y: 200, icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", color: "#7E0F4A" },
  { id: "followup", label: "Follow-Up", x: 540, y: 120, icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15", color: "#283891" },
];

const edges = [
  { from: "lead", to: "agent" },
  { from: "agent", to: "crm" },
  { from: "agent", to: "calendar" },
  { from: "crm", to: "invoice" },
  { from: "crm", to: "followup" },
  { from: "calendar", to: "invoice" },
  { from: "invoice", to: "followup" },
];

function getNodeCenter(id: string) {
  const n = nodes.find((n) => n.id === id)!;
  return { x: n.x + 30, y: n.y + 30 };
}

export default function HeroWorkflowDiagram() {
  const [drawn, setDrawn] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setDrawn(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full select-none">
      <svg
        ref={svgRef}
        viewBox="0 0 620 260"
        className="w-full h-auto"
        aria-label="AI automation workflow diagram for small business Toronto showing Lead Form, AI Intake Agent, CRM, Calendar Scheduling, Invoice System, and Follow-Up Automation"
      >
        <defs>
          {edges.map((e, i) => (
            <marker
              key={`arrow-${i}`}
              id={`arrow-${i}`}
              markerWidth="6"
              markerHeight="6"
              refX="5"
              refY="3"
              orient="auto"
            >
              <path d="M0,0 L0,6 L6,3 z" fill={e.from === "agent" && e.to === "calendar" ? "#7E0F4A" : "#283891"} opacity="0.5" />
            </marker>
          ))}
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {edges.map((e, i) => {
          const from = getNodeCenter(e.from);
          const to = getNodeCenter(e.to);
          const isAccent = (e.from === "agent" && e.to === "calendar") || (e.from === "invoice" && e.to === "followup");
          const pathLen = Math.sqrt(Math.pow(to.x - from.x, 2) + Math.pow(to.y - from.y, 2)) * 1.5;
          return (
            <line
              key={`edge-${i}`}
              x1={from.x}
              y1={from.y}
              x2={to.x}
              y2={to.y}
              stroke={isAccent ? "#7E0F4A" : "#283891"}
              strokeWidth="1.5"
              strokeOpacity={drawn ? 0.35 : 0}
              strokeDasharray={pathLen}
              strokeDashoffset={drawn ? 0 : pathLen}
              markerEnd={`url(#arrow-${i})`}
              style={{
                transition: `stroke-dashoffset ${0.6 + i * 0.12}s cubic-bezier(0.4,0,0.2,1) ${0.2 + i * 0.1}s, stroke-opacity 0.3s ease ${0.2 + i * 0.1}s`,
              }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((node, i) => {
          const isActive = activeNode === node.id;
          return (
            <g
              key={node.id}
              transform={`translate(${node.x}, ${node.y})`}
              style={{
                opacity: drawn ? 1 : 0,
                transform: drawn
                  ? `translate(${node.x}px, ${node.y}px) scale(1)`
                  : `translate(${node.x}px, ${node.y + 10}px) scale(0.9)`,
                transition: `opacity 0.5s ease ${0.1 + i * 0.08}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.1 + i * 0.08}s`,
              }}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              className="cursor-pointer"
            >
              {/* Node background */}
              <rect
                width="60"
                height="60"
                rx="12"
                fill="white"
                stroke={node.color}
                strokeWidth={isActive ? 2 : 1}
                strokeOpacity={isActive ? 1 : 0.3}
                filter={isActive ? "url(#glow)" : undefined}
                style={{ transition: "stroke-width 0.2s, stroke-opacity 0.2s" }}
              />
              {/* Icon */}
              <svg x="18" y="10" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={node.color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={node.icon} />
              </svg>
              {/* Label */}
              <text
                x="30"
                y="76"
                textAnchor="middle"
                fontSize="8.5"
                fill="#4B5563"
                fontFamily="Inter, sans-serif"
                fontWeight="500"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Animated pulse on AI node */}
        {drawn && (
          <circle
            cx={nodes[1].x + 30}
            cy={nodes[1].y + 30}
            r="36"
            fill="none"
            stroke="#7E0F4A"
            strokeWidth="1"
            strokeOpacity="0.15"
            style={{
              animation: "pulse-ring 2.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite",
            }}
          />
        )}
      </svg>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.85); opacity: 0.5; }
          70% { transform: scale(1.1); opacity: 0; }
          100% { transform: scale(1.1); opacity: 0; }
        }
      `}</style>
    </div>
  );
}
