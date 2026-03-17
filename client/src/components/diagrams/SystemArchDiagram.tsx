/**
 * SystemArchDiagram.tsx
 * Barrana.ai — Animated system architecture diagram
 * Shows the Barrana automation layer connecting business tools
 * Connections animate in when scrolled into view
 */

import { useEffect, useRef, useState } from "react";

const CENTER = { x: 220, y: 150 };
const RADIUS = 100;

const satellites = [
  { id: "crm", label: "CRM", angle: -90, icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
  { id: "email", label: "Email", angle: -30, icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { id: "calendar", label: "Calendar", angle: 30, icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
  { id: "invoice", label: "Invoicing", angle: 90, icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
  { id: "leads", label: "Lead Capture", angle: 150, icon: "M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" },
  { id: "pm", label: "Project Mgmt", angle: 210, icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
];

function polarToXY(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  };
}

export default function SystemArchDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="w-full">
      <svg
        viewBox="0 0 440 300"
        className="w-full h-auto"
        aria-label="Barrana.ai automation architecture diagram connecting CRM, email, calendar, invoicing, lead capture, and project management through central automation layer"
      >
        <defs>
          <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#283891" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#283891" stopOpacity="0.03" />
          </radialGradient>
          <filter id="softGlow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Orbit ring */}
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={RADIUS}
          fill="none"
          stroke="#283891"
          strokeWidth="0.5"
          strokeOpacity={visible ? 0.12 : 0}
          strokeDasharray="4 6"
          style={{ transition: "stroke-opacity 1s ease 0.2s" }}
        />

        {/* Connection lines */}
        {satellites.map((sat, i) => {
          const pos = polarToXY(CENTER.x, CENTER.y, RADIUS, sat.angle);
          const isActive = activeId === sat.id;
          const len = Math.sqrt(Math.pow(pos.x - CENTER.x, 2) + Math.pow(pos.y - CENTER.y, 2));
          return (
            <line
              key={`line-${sat.id}`}
              x1={CENTER.x}
              y1={CENTER.y}
              x2={pos.x}
              y2={pos.y}
              stroke={isActive ? "#7E0F4A" : "#283891"}
              strokeWidth={isActive ? 1.5 : 1}
              strokeOpacity={visible ? (isActive ? 0.6 : 0.2) : 0}
              strokeDasharray={len}
              strokeDashoffset={visible ? 0 : len}
              style={{
                transition: `stroke-dashoffset 0.7s cubic-bezier(0.4,0,0.2,1) ${0.3 + i * 0.1}s, stroke-opacity 0.3s ease ${0.3 + i * 0.1}s, stroke 0.2s, stroke-width 0.2s`,
              }}
            />
          );
        })}

        {/* Center node — Barrana Automation Layer */}
        <circle
          cx={CENTER.x}
          cy={CENTER.y}
          r={42}
          fill="url(#centerGrad)"
          stroke="#283891"
          strokeWidth={visible ? 1.5 : 0}
          filter="url(#softGlow)"
          style={{ transition: "stroke-width 0.5s ease 0.2s" }}
        />
        <text x={CENTER.x} y={CENTER.y - 8} textAnchor="middle" fontSize="9" fill="#283891" fontWeight="700" fontFamily="Inter, sans-serif">BARRANA</text>
        <text x={CENTER.x} y={CENTER.y + 5} textAnchor="middle" fontSize="8" fill="#283891" fontFamily="Inter, sans-serif">Automation</text>
        <text x={CENTER.x} y={CENTER.y + 17} textAnchor="middle" fontSize="8" fill="#283891" fontFamily="Inter, sans-serif">Layer</text>

        {/* Satellite nodes */}
        {satellites.map((sat, i) => {
          const pos = polarToXY(CENTER.x, CENTER.y, RADIUS, sat.angle);
          const isActive = activeId === sat.id;
          return (
            <g
              key={sat.id}
              transform={`translate(${pos.x - 24}, ${pos.y - 24})`}
              style={{
                opacity: visible ? 1 : 0,
                transform: visible
                  ? `translate(${pos.x - 24}px, ${pos.y - 24}px) scale(1)`
                  : `translate(${pos.x - 24}px, ${pos.y - 24}px) scale(0.7)`,
                transition: `opacity 0.4s ease ${0.4 + i * 0.09}s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) ${0.4 + i * 0.09}s`,
              }}
              onMouseEnter={() => setActiveId(sat.id)}
              onMouseLeave={() => setActiveId(null)}
              className="cursor-pointer"
            >
              <rect
                width="48"
                height="48"
                rx="10"
                fill="white"
                stroke={isActive ? "#7E0F4A" : "#283891"}
                strokeWidth={isActive ? 1.5 : 0.8}
                strokeOpacity={isActive ? 1 : 0.3}
                style={{ transition: "stroke 0.2s, stroke-width 0.2s, stroke-opacity 0.2s" }}
              />
              <svg x="12" y="8" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={isActive ? "#7E0F4A" : "#283891"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={sat.icon} />
              </svg>
              <text x="24" y="62" textAnchor="middle" fontSize="7.5" fill="#6B7280" fontFamily="Inter, sans-serif" fontWeight="500">
                {sat.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}
