"use client";

import { useEffect, useRef, useState } from "react";

const COLORS = {
  blue: "#1A5276",
  teal: "#00B4D8",
  green: "#10B981",
  amber: "#F59E0B",
  purple: "#7C3AED",
  navy: "#0A1628",
};

interface Node {
  x: number;
  y: number;
  color: string;
  label: string;
  sublabel: string;
  icon: "bell" | "brain" | "fan" | "check";
}

const nodes: Node[] = [
  { x: 90, y: 80, color: COLORS.amber, label: "Trigger Event", sublabel: "Lead, form, message", icon: "bell" },
  { x: 290, y: 80, color: COLORS.purple, label: "AI Processing", sublabel: "Reasoning & decision", icon: "brain" },
  { x: 510, y: 80, color: COLORS.blue, label: "Actions Execute", sublabel: "CRM, email, calendar", icon: "fan" },
  { x: 710, y: 80, color: COLORS.green, label: "Monitoring", sublabel: "Alerts & reporting", icon: "check" },
];

function NodeIcon({ type, cx, cy }: { type: Node["icon"]; cx: number; cy: number }) {
  if (type === "bell") {
    return (
      <g>
        <path d={`M${cx} ${cy - 14} C${cx - 10} ${cy - 14} ${cx - 14} ${cy - 6} ${cx - 14} ${cy + 2} L${cx - 16} ${cy + 6} L${cx + 16} ${cy + 6} L${cx + 14} ${cy + 2} C${cx + 14} ${cy - 6} ${cx + 10} ${cy - 14} ${cx} ${cy - 14}Z`}
          fill="none" stroke="white" strokeWidth="1.8" strokeLinejoin="round" />
        <line x1={cx - 5} y1={cy + 6} x2={cx + 5} y2={cy + 6} stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx={cx} cy={cy + 9} r="2" fill="white" />
      </g>
    );
  }
  if (type === "brain") {
    return (
      <g>
        <ellipse cx={cx} cy={cy} rx="14" ry="12" fill="none" stroke="white" strokeWidth="1.8" />
        <line x1={cx} y1={cy - 12} x2={cx} y2={cy + 12} stroke="white" strokeWidth="1.5" />
        <path d={`M${cx - 14} ${cy} C${cx - 20} ${cy - 8} ${cx - 20} ${cy + 8} ${cx - 14} ${cy}`} fill="none" stroke="white" strokeWidth="1.5" />
        <path d={`M${cx + 14} ${cy} C${cx + 20} ${cy - 8} ${cx + 20} ${cy + 8} ${cx + 14} ${cy}`} fill="none" stroke="white" strokeWidth="1.5" />
        <circle cx={cx - 5} cy={cy - 4} r="2" fill="white" />
        <circle cx={cx + 5} cy={cy + 3} r="2" fill="white" />
      </g>
    );
  }
  if (type === "fan") {
    const fanLines = [-24, -12, 0, 12, 24];
    return (
      <g>
        {fanLines.map((offset, i) => (
          <line key={i} x1={cx - 12} y1={cy} x2={cx + 14} y2={cy + offset} stroke="white" strokeWidth="1.6" strokeLinecap="round" />
        ))}
        <circle cx={cx - 12} cy={cy} r="3" fill="white" />
      </g>
    );
  }
  if (type === "check") {
    return (
      <g>
        <circle cx={cx} cy={cy} r="14" fill="none" stroke="white" strokeWidth="1.8" />
        <polyline points={`${cx - 7},${cy} ${cx - 2},${cy + 6} ${cx + 8},${cy - 6}`} fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    );
  }
  return null;
}

export default function ProcessFlowDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          nodes.forEach((_, i) => {
            setTimeout(() => setVisibleCount(i + 1), i * 400);
          });
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const arrowPaths = [
    { x1: 148, y1: 80, x2: 232, y2: 80, length: 84 },
    { x1: 348, y1: 80, x2: 452, y2: 80, length: 104 },
    { x1: 568, y1: 80, x2: 652, y2: 80, length: 84 },
  ];

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 800 200"
      width="100%"
      aria-label="Process Flow Diagram: Trigger Event to AI Processing to Actions Execute to Monitoring"
      style={{ display: "block" }}
    >
      <title>Automation Process Flow</title>

      <defs>
        <marker id="pf-arrow" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={COLORS.teal} />
        </marker>
      </defs>

      <rect width="800" height="200" fill={COLORS.navy} rx="12" />

      {/* Animated arrows */}
      {arrowPaths.map((a, i) => (
        <line
          key={i}
          x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}
          stroke={COLORS.teal}
          strokeWidth="2"
          strokeDasharray={a.length}
          strokeDashoffset={visibleCount >= i + 2 ? 0 : a.length}
          markerEnd="url(#pf-arrow)"
          style={{ transition: "stroke-dashoffset 0.5s ease-in-out" }}
        />
      ))}

      {/* Nodes */}
      {nodes.map((node, i) => (
        <g
          key={node.label}
          opacity={visibleCount > i ? 1 : 0}
          style={{
            transition: "opacity 0.4s, transform 0.4s",
            transform: visibleCount > i ? "scale(1)" : "scale(0.8)",
            transformOrigin: `${node.x}px ${node.y}px`,
          }}
        >
          <circle cx={node.x} cy={node.y} r="52" fill={node.color} opacity="0.15" />
          <circle cx={node.x} cy={node.y} r="42" fill={node.color} />
          <NodeIcon type={node.icon} cx={node.x} cy={node.y} />
          <text x={node.x} y={node.y + 62} textAnchor="middle" fill="white" fontSize="12" fontWeight="700">{node.label}</text>
          <text x={node.x} y={node.y + 78} textAnchor="middle" fill="#9CA3AF" fontSize="10">{node.sublabel}</text>
        </g>
      ))}

      {/* Step numbers */}
      {nodes.map((node, i) => (
        <g key={`step-${i}`} opacity={visibleCount > i ? 1 : 0} style={{ transition: "opacity 0.4s" }}>
          <circle cx={node.x - 38} cy={node.y - 38} r="10" fill={node.color} stroke={COLORS.navy} strokeWidth="2" />
          <text x={node.x - 38} y={node.y - 34} textAnchor="middle" fill="white" fontSize="10" fontWeight="700">{i + 1}</text>
        </g>
      ))}
    </svg>
  );
}
