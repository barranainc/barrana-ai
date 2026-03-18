"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------------------------------------------------------ */
/*  Types                                                               */
/* ------------------------------------------------------------------ */

interface NavItem {
  label: string;
  href: string;
}

interface DropdownGroup {
  label: string;
  items: NavItem[];
}

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const solutionsItems: NavItem[] = [
  { label: "AI Automation", href: "/what-is-ai-automation" },
  { label: "AI Agents", href: "/ai-agents-vs-chatbots" },
  { label: "Lead Follow-Up", href: "/automate-lead-follow-up" },
  { label: "AI Receptionist", href: "/ai-receptionist" },
  { label: "Workflows Overview", href: "/automation-workflows" },
];

const locationsItems: NavItem[] = [
  { label: "Vaughan", href: "/ai-automation-vaughan" },
  { label: "Toronto", href: "/ai-automation-toronto" },
  { label: "Markham", href: "/ai-automation-markham" },
  { label: "Mississauga", href: "/ai-automation-mississauga" },
  { label: "Richmond Hill", href: "/ai-automation-richmond-hill" },
];

const topLevelLinks: NavItem[] = [
  { label: "Industries", href: "/how-businesses-use-ai-agents" },
  { label: "Resources", href: "/best-ai-workflows" },
  { label: "Pricing", href: "/ai-automation-cost-canada" },
];

/* ------------------------------------------------------------------ */
/*  Dropdown Component                                                  */
/* ------------------------------------------------------------------ */

function Dropdown({
  group,
  pathname,
  scrolled,
}: {
  group: DropdownGroup;
  pathname: string;
  scrolled: boolean;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isActive = group.items.some((item) => pathname === item.href);
  const baseColor = scrolled ? "text-[#1F2937] hover:text-[#00B4D8]" : "text-white/90 hover:text-white";

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 px-1 py-2 text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded ${
          isActive ? "text-[#00B4D8]" : baseColor
        }`}
      >
        {group.label}
        <motion.svg
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M4 6l4 4 4-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-[0_8px_30px_rgba(10,22,40,0.12)] border border-[#E8ECF1] overflow-hidden z-50"
            role="menu"
          >
            {group.items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                role="menuitem"
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-colors duration-150 ${
                  pathname === item.href
                    ? "text-[#00B4D8] bg-[#F0FAFE]"
                    : "text-[#1F2937] hover:bg-[#F7F9FC] hover:text-[#00B4D8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Mobile Menu                                                         */
/* ------------------------------------------------------------------ */

function MobileMenu({
  open,
  onClose,
  pathname,
}: {
  open: boolean;
  onClose: () => void;
  pathname: string;
}) {
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  // Lock body scroll when open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-[#E8ECF1]">
              <Link href="/" onClick={onClose} className="flex items-center gap-1">
                <span className="text-xl font-bold text-[#0A1628]">Barrana</span>
                <span className="text-xl font-bold text-[#00B4D8]">.</span>
                <span className="text-xl font-bold text-[#0A1628]">ai</span>
              </Link>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 rounded-lg hover:bg-[#F7F9FC] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path
                    d="M15 5L5 15M5 5l10 10"
                    stroke="#1F2937"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto p-5 space-y-1" aria-label="Mobile navigation">
              <Link
                href="/"
                onClick={onClose}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/" ? "text-[#00B4D8] bg-[#F0FAFE]" : "text-[#1F2937] hover:bg-[#F7F9FC]"
                }`}
              >
                Home
              </Link>

              {/* Solutions accordion */}
              <div>
                <button
                  onClick={() => setSolutionsOpen((v) => !v)}
                  aria-expanded={solutionsOpen}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#1F2937] hover:bg-[#F7F9FC] transition-colors"
                >
                  Solutions
                  <motion.svg
                    animate={{ rotate: solutionsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {solutionsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 mt-1 space-y-0.5">
                        {solutionsItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                              pathname === item.href
                                ? "text-[#00B4D8] bg-[#F0FAFE]"
                                : "text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F7F9FC]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/how-businesses-use-ai-agents"
                onClick={onClose}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/how-businesses-use-ai-agents"
                    ? "text-[#00B4D8] bg-[#F0FAFE]"
                    : "text-[#1F2937] hover:bg-[#F7F9FC]"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/best-ai-workflows"
                onClick={onClose}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/best-ai-workflows"
                    ? "text-[#00B4D8] bg-[#F0FAFE]"
                    : "text-[#1F2937] hover:bg-[#F7F9FC]"
                }`}
              >
                Resources
              </Link>

              {/* Locations accordion */}
              <div>
                <button
                  onClick={() => setLocationsOpen((v) => !v)}
                  aria-expanded={locationsOpen}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-[#1F2937] hover:bg-[#F7F9FC] transition-colors"
                >
                  Locations
                  <motion.svg
                    animate={{ rotate: locationsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 6l4 4 4-4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>
                <AnimatePresence>
                  {locationsOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 mt-1 space-y-0.5">
                        {locationsItems.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                              pathname === item.href
                                ? "text-[#00B4D8] bg-[#F0FAFE]"
                                : "text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F7F9FC]"
                            }`}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/ai-automation-cost-canada"
                onClick={onClose}
                className={`block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === "/ai-automation-cost-canada"
                    ? "text-[#00B4D8] bg-[#F0FAFE]"
                    : "text-[#1F2937] hover:bg-[#F7F9FC]"
                }`}
              >
                Pricing
              </Link>
            </nav>

            {/* CTA */}
            <div className="p-5 border-t border-[#E8ECF1]">
              <Link
                href="/book-audit"
                onClick={onClose}
                className="block w-full text-center bg-[#00B4D8] text-white font-semibold text-sm py-3 rounded-lg hover:bg-[#0097B8] transition-colors"
              >
                Book a Free Audit
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Navigation Component                                           */
/* ------------------------------------------------------------------ */

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const linkColor = scrolled ? "text-[#1F2937] hover:text-[#00B4D8]" : "text-white/90 hover:text-white";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 80);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <motion.header
        initial={false}
        animate={
          scrolled
            ? { backgroundColor: "rgba(255,255,255,0.97)", boxShadow: "0 1px 20px rgba(10,22,40,0.08)" }
            : { backgroundColor: "rgba(255,255,255,0)", boxShadow: "0 0 0 rgba(0,0,0,0)" }
        }
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-40 backdrop-blur-sm"
        role="banner"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link
              href="/"
              aria-label="Barrana.ai — Home"
              className="flex items-center"
            >
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-[#0A1628]" : "text-white"
                }`}
              >
                Barrana
              </span>
              <span className="text-xl font-bold text-[#00B4D8]">.</span>
              <span
                className={`text-xl font-bold transition-colors duration-300 ${
                  scrolled ? "text-[#0A1628]" : "text-white"
                }`}
              >
                ai
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav
              className="hidden lg:flex items-center gap-6"
              aria-label="Main navigation"
            >
              <Dropdown
                group={{ label: "Solutions", items: solutionsItems }}
                pathname={pathname}
                scrolled={scrolled}
              />

              {topLevelLinks.map((link) => {
                // Insert Locations dropdown before Pricing
                if (link.label === "Pricing") {
                  return (
                    <div key="locations-pricing" className="flex items-center gap-6">
                      <Dropdown
                        group={{ label: "Locations", items: locationsItems }}
                        pathname={pathname}
                        scrolled={scrolled}
                      />
                      <Link
                        href={link.href}
                        className={`px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                          pathname === link.href
                            ? "text-[#00B4D8]"
                            : linkColor
                        }`}
                        aria-current={pathname === link.href ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-1 py-2 text-sm font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? "text-[#00B4D8]"
                        : linkColor
                    }`}
                    aria-current={pathname === link.href ? "page" : undefined}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <Link
                href="/book-audit"
                className="inline-flex items-center gap-2 bg-[#00B4D8] text-white font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#0097B8] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2"
              >
                Book a Free Audit
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[#F7F9FC] transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                <path
                  d="M3 6h16M3 11h16M3 16h16"
                  stroke="#1F2937"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        pathname={pathname}
      />
    </>
  );
}
