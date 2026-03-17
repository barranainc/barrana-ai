/**
 * BARRANA.AI NAVIGATION
 * Design: Operational Intelligence Aesthetic
 * Sticky top nav, navy primary, magenta CTA button
 * Mobile-responsive with hamburger menu
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, ChevronDown } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AI Agents", href: "/services/ai-agents" },
      { label: "Workflow Automation", href: "/services/workflow-automation" },
      { label: "Lead Automation", href: "/services/lead-automation" },
      { label: "Operations Automation", href: "/services/operations-automation" },
      { label: "AI Receptionist", href: "/services/ai-receptionist" },
    ],
  },
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Immigration Consultants", href: "/industries/immigration-consultants" },
      { label: "Accounting Firms", href: "/industries/accounting-firms" },
      { label: "Law Firms", href: "/industries/law-firms" },
      { label: "Contractors", href: "/industries/contractors" },
      { label: "Clinics", href: "/industries/clinics" },
      { label: "Real Estate Teams", href: "/industries/real-estate" },
    ],
  },
  {
    label: "Locations",
    href: "/locations",
    children: [
      { label: "Toronto", href: "/locations/toronto" },
      { label: "Vaughan", href: "/locations/vaughan" },
      { label: "Richmond Hill", href: "/locations/richmond-hill" },
      { label: "Markham", href: "/locations/markham" },
      { label: "Mississauga", href: "/locations/mississauga" },
      { label: "North York", href: "/locations/north-york" },
    ],
  },
  { label: "Resources", href: "/resources" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm border-b border-gray-100" : "bg-white/95 backdrop-blur-sm"
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 lg:h-[68px]">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 rounded-md flex items-center justify-center" style={{ backgroundColor: "#283891" }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 12L6 4L10 9L12 6L14 12H2Z" fill="white" opacity="0.9"/>
                  <circle cx="12" cy="5" r="1.5" fill="#7E0F4A"/>
                </svg>
              </div>
              <span className="font-bold text-lg tracking-tight" style={{ color: "#283891" }}>
                Barrana<span style={{ color: "#7E0F4A" }}>.ai</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <button
                    className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#283891] rounded-md transition-colors"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                  >
                    {item.label}
                    <ChevronDown size={14} className="opacity-60" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      location === item.href
                        ? "text-[#283891] font-semibold"
                        : "text-gray-700 hover:text-[#283891]"
                    }`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && (
                  <div
                    className={`absolute top-full left-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-1 transition-all duration-150 ${
                      openDropdown === item.label ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-1"
                    }`}
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#F7F8FB] hover:text-[#283891] transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact" className="btn-primary text-sm">
              Book Automation Audit
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#283891]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <div className="container py-4 space-y-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div>
                    <button
                      className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#283891] rounded-md"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openDropdown === item.label && (
                      <div className="ml-4 mt-1 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-[#283891] rounded-md"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2.5 text-sm font-medium text-gray-700 hover:text-[#283891] rounded-md"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <Link href="/contact" className="btn-primary w-full justify-center text-sm">
                Book Automation Audit
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
