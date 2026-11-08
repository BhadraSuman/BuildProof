"use client";

import { useState } from "react";
import Link from "next/link";
import { ShieldCheck, Menu, X, ArrowRight, Landmark } from "lucide-react";

interface NavbarProps {
  onRequestAudit: () => void;
}

export default function Navbar({ onRequestAudit }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Inspection Reality", href: "#problem" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Client Portal", href: "#dashboard" },
    { label: "IS & CPWD Scope", href: "#standards" },
    { label: "Governance", href: "#governance" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full h-16 bg-white/80 backdrop-blur-md border-b border-brand-border/70 shadow-xs">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] h-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 flex items-center justify-between">
        <div className="flex items-center gap-8 xl:gap-12">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <div className="w-8 h-8 bg-brand-navy flex items-center justify-center rounded-[6px] text-white shadow-xs">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-base sm:text-[18px] tracking-tight text-brand-navy leading-none">
                BuildProof
              </span>
              <span className="text-[9px] uppercase tracking-wider font-semibold text-brand-orange mt-0.5">
                Private &amp; Govt QA
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-7 text-[13px] xl:text-[14px] font-medium text-brand-muted">
            {navLinks.map((link) => (
              <a
                key={link.href}
                className="hover:text-brand-navy transition-colors whitespace-nowrap"
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-brand-navy bg-brand-bgLight hover:bg-brand-border/60 px-2.5 py-1.5 rounded transition-colors"
            href="#standards"
          >
            <Landmark className="w-3.5 h-3.5 text-brand-orange" />
            <span>Govt &amp; PWD Empanelled</span>
          </a>
          <a
            className="hidden md:inline-block text-[13px] sm:text-[14px] font-medium text-brand-muted hover:text-brand-navy transition-colors px-2"
            href="#dashboard"
          >
            Client Login
          </a>
          <button
            type="button"
            onClick={onRequestAudit}
            className="cursor-pointer inline-flex items-center justify-center bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-[13px] font-semibold px-3 py-2 sm:px-4 sm:py-2 rounded-[6px] transition-colors shadow-xs active:scale-95 whitespace-nowrap"
          >
            Request a Site Audit
          </button>
          <button
            type="button"
            className="lg:hidden text-brand-navy p-2 rounded-md hover:bg-brand-bgLight transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-brand-border px-6 py-5 shadow-xl space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-medium text-brand-navy hover:text-brand-orange py-2 border-b border-brand-border/40 last:border-b-0 transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 flex items-center justify-between">
            <span className="text-xs text-brand-muted">Client Portal Access</span>
            <a
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-brand-navy hover:text-brand-orange"
            >
              Sign In <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
