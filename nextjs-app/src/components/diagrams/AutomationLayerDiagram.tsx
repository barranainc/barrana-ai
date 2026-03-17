"use client";

import { useEffect, useRef, useState } from "react";

const COLORS = {
  blue: "#1A5276",
  teal: "#00B4D8",
  green: "#10B981",
  red: "#EF4444",
  amber: "#F59E0B",
  purple: "#7C3AED",
  navy: "#0A1628",
};

export default function AutomationLayerDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);

  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          setPhase(1);
          setTimeout(() => setPhase(2), 500);
          setTimeout(() => setPhase(3), 1500);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const toolBoxes = [
    { label: "CRM", x: 60 },
    { label: "Calendar", x: 185 },
    { label: "Email", x: 310 },
    { label: "QuickBooks", x: 435 },
    { label: "Slack", x: 560 },
  ];

  const automationItems = [
    { label: "Lead Response", x: 60 },
    { label: "Intake", x: 185 },
    { label: "Scheduling", x: 310 },
    { label: "Invoicing", x: 435 },
    { label: "Follow-up", x: 560 },
  ];

  const teamBoxes = [
    { label: "Client Calls", x: 105 },
    { label: "Site Visits", x: 280 },
    { label: "Strategy", x: 455 },
    { label: "Delivery", x: 580 },
  ];

  const arrowXPositions = [107, 232, 357, 482, 607];

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 700 400"
      width="100%"
      aria-label="Automation Layer Diagram showing three horizontal layers: Your Tools at bottom, Automation Layer in middle, and Your Team at top"
      style={{ display: "block" }}
    >
      <title>Automation Layer Architecture</title>

      <defs>
        <style>{`
          @keyframes pulseTeal {
            0%, 100% { filter: drop-shadow(0 0 4px ${COLORS.teal}); }
            50% { filter: drop-shadow(0 0 12px ${COLORS.teal}); }
          }
          .automation-glow {
            animation: pulseTeal 2s ease-in-out infinite;
          }
          @keyframes drawLine {
            from { stroke-dashoffset: 60; }
            to { stroke-dashoffset: 0; }
          }
        `}</style>
        <marker id="al-arrowhead" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
          <polygon points="0 0, 8 3, 0 6" fill={COLORS.teal} />
        </marker>
      </defs>

      {/* Background */}
      <rect width="700" height="400" fill={COLORS.navy} rx="12" />

      {/* Layer backgrounds */}
      {/* Bottom - Tools */}
      <rect
        x="20" y="295" width="660" height="80"
        rx="8" fill="#111827" stroke="#1F2937" strokeWidth="1"
        opacity={phase >= 1 ? 1 : 0}
        style={{ transition: "opacity 0.5s" }}
      />
      {/* Middle - Automation */}
      <rect
        x="20" y="165" width="660" height="100"
        rx="8" fill="#0d2035" stroke={COLORS.teal} strokeWidth="1.5"
        opacity={phase >= 2 ? 1 : 0}
        style={{ transition: "opacity 0.5s" }}
      />
      {/* Top - Team */}
      <rect
        x="20" y="30" width="660" height="100"
        rx="8" fill="#111827" stroke="#1F2937" strokeWidth="1"
        opacity={phase >= 3 ? 1 : 0}
        style={{ transition: "opacity 0.8s" }}
      />

      {/* Layer Labels */}
      <text
        x="350" y="338"
        textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="600"
        letterSpacing="2"
        opacity={phase >= 1 ? 1 : 0}
        style={{ transition: "opacity 0.5s" }}
      >
        YOUR TOOLS
      </text>
      <text
        x="350" y="205"
        textAnchor="middle" fill={COLORS.teal} fontSize="11" fontWeight="700"
        letterSpacing="2"
        opacity={phase >= 2 ? 1 : 0}
        style={{ transition: "opacity 0.5s" }}
      >
        AUTOMATION LAYER
      </text>
      <text
        x="350" y="52"
        textAnchor="middle" fill="#9CA3AF" fontSize="11" fontWeight="600"
        letterSpacing="2"
        opacity={phase >= 3 ? 1 : 0}
        style={{ transition: "opacity 0.8s" }}
      >
        YOUR TEAM
      </text>

      {/* Tool boxes */}
      {toolBoxes.map((tool, i) => (
        <g key={tool.label} opacity={phase >= 1 ? 1 : 0} style={{ transition: `opacity 0.4s ${i * 80}ms` }}>
          <rect x={tool.x} y="308" width="95" height="42" rx="6" fill="#1F2937" stroke="#374151" strokeWidth="1" />
          <text x={tool.x + 47} y="334" textAnchor="middle" fill="#D1D5DB" fontSize="11" fontWeight="500">{tool.label}</text>
        </g>
      ))}

      {/* Automation items */}
      {automationItems.map((item, i) => (
        <g
          key={item.label}
          className={phase >= 2 ? "automation-glow" : ""}
          opacity={phase >= 2 ? 1 : 0}
          style={{ transition: `opacity 0.4s ${i * 100}ms` }}
        >
          {/* Gear icon */}
          <circle cx={item.x + 47} cy="237" r="10" fill="none" stroke={COLORS.teal} strokeWidth="2" />
          <circle cx={item.x + 47} cy="237" r="4" fill={COLORS.teal} />
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x1 = item.x + 47 + Math.cos(rad) * 10;
            const y1 = 237 + Math.sin(rad) * 10;
            const x2 = item.x + 47 + Math.cos(rad) * 14;
            const y2 = 237 + Math.sin(rad) * 14;
            return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke={COLORS.teal} strokeWidth="3" strokeLinecap="round" />;
          })}
          <text x={item.x + 47} y="258" textAnchor="middle" fill={COLORS.teal} fontSize="9.5" fontWeight="600">{item.label}</text>
        </g>
      ))}

      {/* Team boxes */}
      {teamBoxes.map((box, i) => (
        <g key={box.label} opacity={phase >= 3 ? 1 : 0} style={{ transition: `opacity 0.4s ${i * 120}ms` }}>
          <rect x={box.x} y="58" width="110" height="48" rx="6" fill={COLORS.blue} stroke="#2563EB" strokeWidth="1" />
          {/* Person icon */}
          <circle cx={box.x + 18} cy="74" r="6" fill="#93C5FD" />
          <path d={`M${box.x + 8} 90 Q${box.x + 18} 84 ${box.x + 28} 90`} fill="none" stroke="#93C5FD" strokeWidth="2" />
          <text x={box.x + 60} y="82" textAnchor="middle" fill="white" fontSize="10" fontWeight="600">{box.label}</text>
        </g>
      ))}

      {/* Vertical arrows between layers */}
      {arrowXPositions.map((x, i) => (
        <g key={i} opacity={phase >= 2 ? 1 : 0} style={{ transition: `opacity 0.3s ${i * 80 + 300}ms` }}>
          {/* Tools to Automation */}
          <line
            x1={x} y1="293" x2={x} y2="267"
            stroke={COLORS.teal} strokeWidth="1.5"
            strokeDasharray="60" strokeDashoffset={phase >= 2 ? 0 : 60}
            markerEnd="url(#al-arrowhead)"
            style={{ transition: `stroke-dashoffset 0.4s ${i * 80 + 300}ms` }}
          />
        </g>
      ))}
      {arrowXPositions.map((x, i) => (
        <g key={`top-${i}`} opacity={phase >= 3 ? 1 : 0} style={{ transition: `opacity 0.3s ${i * 80}ms` }}>
          {/* Automation to Team */}
          <line
            x1={x} y1="163" x2={x} y2="133"
            stroke={COLORS.teal} strokeWidth="1.5"
            strokeDasharray="60" strokeDashoffset={phase >= 3 ? 0 : 60}
            markerEnd="url(#al-arrowhead)"
            style={{ transition: `stroke-dashoffset 0.4s ${i * 80}ms` }}
          />
        </g>
      ))}
    </svg>
  );
}
