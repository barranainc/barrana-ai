import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const columns: FooterColumn[] = [
  {
    heading: "Solutions",
    links: [
      { label: "AI Automation", href: "/what-is-ai-automation" },
      { label: "AI Agents", href: "/ai-agents-vs-chatbots" },
      { label: "Lead Follow-Up", href: "/automate-lead-follow-up" },
      { label: "AI Receptionist", href: "/ai-receptionist" },
      { label: "Workflows Overview", href: "/automation-workflows" },
      { label: "Zapier vs n8n vs Custom AI", href: "/zapier-vs-n8n-vs-custom-ai" },
    ],
  },
  {
    heading: "Industries",
    links: [
      { label: "How Businesses Use AI Agents", href: "/how-businesses-use-ai-agents" },
      { label: "Immigration Intake Workflow", href: "/workflows/immigration-intake" },
      { label: "Accounting Documents", href: "/workflows/accounting-documents" },
      { label: "Contractor Leads", href: "/workflows/contractor-leads" },
      { label: "Clinic Appointments", href: "/workflows/clinic-appointments" },
      { label: "Does AI Replace Staff?", href: "/does-ai-replace-staff" },
    ],
  },
  {
    heading: "Locations",
    links: [
      { label: "AI Automation Vaughan", href: "/ai-automation-vaughan" },
      { label: "AI Automation Toronto", href: "/ai-automation-toronto" },
      { label: "AI Automation Markham", href: "/ai-automation-markham" },
      { label: "AI Automation Mississauga", href: "/ai-automation-mississauga" },
      { label: "AI Automation Richmond Hill", href: "/ai-automation-richmond-hill" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Pricing", href: "/ai-automation-cost-canada" },
      { label: "Best AI Workflows", href: "/best-ai-workflows" },
      { label: "AI Agent vs Automation", href: "/ai-agent-vs-automation" },
      { label: "Book a Free Audit", href: "/book-audit" },
    ],
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/barrana-ai",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/barranaai",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Footer Component (Server Component)                                */
/* ------------------------------------------------------------------ */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-[#0A1628] text-white"
      role="contentinfo"
      aria-label="Site footer"
    >
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top section: logo + tagline + columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-1">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Barrana.ai — Home"
              className="inline-flex items-center mb-4 group"
            >
              <span className="text-2xl font-bold text-white group-hover:text-[#E8ECF1] transition-colors">
                Barrana
              </span>
              <span className="text-2xl font-bold text-[#00B4D8]">.</span>
              <span className="text-2xl font-bold text-white group-hover:text-[#E8ECF1] transition-colors">
                ai
              </span>
            </Link>

            {/* Tagline */}
            <p className="text-[#9CADC4] text-sm leading-relaxed mb-6">
              AI automation for small and mid-size businesses across the Greater Toronto Area.
            </p>

            {/* Contact */}
            <address className="not-italic space-y-2 text-sm text-[#9CADC4]">
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 text-[#00B4D8]"
                >
                  <path
                    d="M2 4l6 5 6-5M2 4h12v9a1 1 0 01-1 1H3a1 1 0 01-1-1V4z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <a
                  href="mailto:hello@barrana.ai"
                  className="hover:text-[#00B4D8] transition-colors"
                >
                  hello@barrana.ai
                </a>
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                  className="shrink-0 text-[#00B4D8]"
                >
                  <path
                    d="M8 1.5a5 5 0 100 10A5 5 0 008 1.5zm0 0V8m0 0l3 2M2.5 14.5l2-2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Based in Vaughan, Ontario</span>
              </div>
            </address>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Barrana.ai on ${social.label}`}
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#00B4D8]/20 hover:text-[#00B4D8] text-[#9CADC4] flex items-center justify-center transition-all duration-200 border border-white/10 hover:border-[#00B4D8]/30"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <nav
            className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8"
            aria-label="Footer navigation"
          >
            {columns.map((col) => (
              <div key={col.heading}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#00B4D8] mb-4">
                  {col.heading}
                </h3>
                <ul className="space-y-2.5" role="list">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#9CADC4] hover:text-white transition-colors duration-150 leading-snug"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            {/* Copyright + PIPEDA */}
            <div className="space-y-1">
              <p className="text-[#9CADC4] text-xs">
                &copy; {currentYear} Barrana.ai. All rights reserved.
              </p>
              <p className="text-[#6B7F99] text-xs">
                We handle all client data in compliance with PIPEDA (Canada's Personal Information Protection and Electronic Documents Act).
              </p>
            </div>

            {/* Legal links */}
            <nav
              className="flex items-center gap-4"
              aria-label="Legal navigation"
            >
              <Link
                href="/privacy-policy"
                className="text-xs text-[#9CADC4] hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <span className="text-[#3D5A78]" aria-hidden="true">·</span>
              <Link
                href="/terms"
                className="text-xs text-[#9CADC4] hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
