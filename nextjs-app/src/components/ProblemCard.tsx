import { ReactNode } from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface ProblemCardProps {
  title: string;
  description: string;
  icon?: ReactNode;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Alert Triangle Icon                                                 */
/* ------------------------------------------------------------------ */

function AlertTriangleIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="text-[#EF4444] shrink-0"
    >
      <path
        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 9v4M12 17h.01"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  ProblemCard Component (Server Component)                           */
/* ------------------------------------------------------------------ */

export default function ProblemCard({
  title,
  description,
  icon,
  className = "",
}: ProblemCardProps) {
  return (
    <div
      className={[
        "group relative bg-white rounded-xl p-6 cursor-default",
        "border border-[#F3F4F6]",
        "transition-all duration-300 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_20px_40px_-8px_rgba(10,22,40,0.14),0_8px_16px_-4px_rgba(10,22,40,0.08)]",
        "shadow-[0_2px_8px_rgba(10,22,40,0.06)]",
        className,
      ].join(" ")}
      style={{ borderLeft: "4px solid #EF4444" }}
      role="article"
    >
      {/* Icon row */}
      <div className="flex items-start gap-3 mb-3">
        {icon ? (
          <div className="shrink-0 mt-0.5 text-[#EF4444]">{icon}</div>
        ) : (
          <AlertTriangleIcon />
        )}

        {/* Title */}
        <h3 className="text-[#0A1628] font-bold text-base sm:text-lg leading-snug">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-[#6B7280] text-sm sm:text-base leading-relaxed pl-[34px]">
        {description}
      </p>

      {/* Subtle red tint on hover */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{ background: "linear-gradient(135deg, rgba(239,68,68,0.02) 0%, transparent 60%)" }}
      />
    </div>
  );
}
