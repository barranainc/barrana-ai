import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface CTALink {
  text: string;
  href: string;
}

interface CTASectionProps {
  headline: string;
  subtext?: string;
  primaryCta: CTALink;
  secondaryCta?: CTALink;
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  CTASection Component (Server Component)                            */
/* ------------------------------------------------------------------ */

export default function CTASection({
  headline,
  subtext,
  primaryCta,
  secondaryCta,
  className = "",
}: CTASectionProps) {
  return (
    <section
      className={`relative overflow-hidden ${className}`}
      style={{ background: "#0A1628" }}
      aria-labelledby="cta-headline"
    >
      {/* Radial gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 80% at 50% 120%, rgba(0,180,216,0.12) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 80% 20%, rgba(26,82,118,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #00B4D8 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        {/* Teal accent line */}
        <div
          aria-hidden="true"
          className="mx-auto mb-8 w-12 h-0.5 rounded-full"
          style={{ background: "#00B4D8" }}
        />

        {/* Headline */}
        <h2
          id="cta-headline"
          className="text-white font-bold leading-tight tracking-tight mb-5"
          style={{ fontSize: "clamp(28px, 4vw, 44px)" }}
        >
          {headline}
        </h2>

        {/* Subtext */}
        {subtext && (
          <p className="text-[#9CADC4] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            {subtext}
          </p>
        )}

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 ${
            subtext ? "" : "mt-8"
          }`}
        >
          {/* Primary CTA */}
          <Link
            href={primaryCta.href}
            className="inline-flex items-center gap-2 bg-[#00B4D8] hover:bg-[#0097B8] text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 shadow-[0_0_32px_rgba(0,180,216,0.28)] hover:shadow-[0_0_48px_rgba(0,180,216,0.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1628]"
          >
            {primaryCta.text}
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M3.75 9h10.5M10 4.75l4.25 4.25L10 13.25"
                stroke="currentColor"
                strokeWidth="1.75"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Secondary CTA (ghost) */}
          {secondaryCta && (
            <Link
              href={secondaryCta.href}
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white hover:text-white font-semibold text-base px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A1628]"
            >
              {secondaryCta.text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
