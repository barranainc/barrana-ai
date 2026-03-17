/**
 * BARRANA.AI FOOTER
 * Design: Operational Intelligence Aesthetic
 * Dark navy background, organized link columns
 */
import { Link } from "wouter";
import { MapPin, Mail, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1a2460" }} className="text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-md flex items-center justify-center" style={{ backgroundColor: "#283891" }}>
                <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
                  <path d="M2 12L6 4L10 9L12 6L14 12H2Z" fill="white" opacity="0.9"/>
                  <circle cx="12" cy="5" r="1.5" fill="#7E0F4A"/>
                </svg>
              </div>
              <span className="font-bold text-xl tracking-tight">
                Barrana<span style={{ color: "#c4427a" }}>.ai</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6 max-w-xs">
              AI automation systems for small and medium businesses in Toronto and the GTA. We build the operational backbone that lets your team grow without burning out.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <MapPin size={14} style={{ color: "#c4427a" }} />
                <span>Vaughan, Ontario (Serving GTA)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={14} style={{ color: "#c4427a" }} />
                <a href="mailto:hello@barrana.ai" className="hover:text-white transition-colors">hello@barrana.ai</a>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Services</h4>
            <ul className="space-y-2.5">
              {[
                { label: "AI Agents", href: "/services/ai-agents" },
                { label: "Workflow Automation", href: "/services/workflow-automation" },
                { label: "Lead Automation", href: "/services/lead-automation" },
                { label: "Operations Automation", href: "/services/operations-automation" },
                { label: "AI Receptionist", href: "/services/ai-receptionist" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Industries</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Immigration Consultants", href: "/industries/immigration-consultants" },
                { label: "Accounting Firms", href: "/industries/accounting-firms" },
                { label: "Law Firms", href: "/industries/law-firms" },
                { label: "Contractors", href: "/industries/contractors" },
                { label: "Clinics", href: "/industries/clinics" },
                { label: "Real Estate Teams", href: "/industries/real-estate" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations + Company Column */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Locations</h4>
            <ul className="space-y-2.5 mb-6">
              {[
                { label: "Toronto", href: "/locations/toronto" },
                { label: "Vaughan", href: "/locations/vaughan" },
                { label: "Richmond Hill", href: "/locations/richmond-hill" },
                { label: "Markham", href: "/locations/markham" },
                { label: "Mississauga", href: "/locations/mississauga" },
                { label: "North York", href: "/locations/north-york" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-sm uppercase tracking-wider text-gray-400 mb-4">Company</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About", href: "/about" },
                { label: "Case Studies", href: "/case-studies" },
                { label: "Resources", href: "/resources" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-lg">Ready to recover hours every week?</p>
              <p className="text-gray-300 text-sm">Book a free 60-minute Automation Audit. No obligation.</p>
            </div>
            <Link href="/contact" className="btn-accent flex-shrink-0 flex items-center gap-2">
              Book Free Audit <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Barrana.ai. All rights reserved. Serving Toronto, Vaughan, Markham, Richmond Hill, Mississauga, and North York.</p>
          <p>PIPEDA-aware implementations for Canadian businesses.</p>
        </div>
      </div>
    </footer>
  );
}
