"use client";

import { Check } from "lucide-react";

interface HeroProps {
  onRequestAudit: () => void;
}

export default function Hero({ onRequestAudit }: HeroProps) {
  return (
    <section className="py-12 sm:py-16 md:py-24 border-b border-brand-border bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-10 items-center">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-bgLight border border-brand-border rounded-[4px] text-[11px] sm:text-[12px] font-semibold text-brand-navy">
              <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse"></span>
              INDEPENDENT CIVIL QUALITY AUDITING
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-bold text-brand-navy leading-[1.14] sm:leading-[1.12] tracking-tight">
              Build with proof, not promises.
            </h1>
            <p className="text-sm sm:text-[16px] text-brand-muted leading-relaxed">
              We test construction materials in NABL-accredited civil laboratories, audit contractor execution on site, and deliver verifiable IS-code reports directly to property owners.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onRequestAudit}
                className="cursor-pointer bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-semibold px-5 py-3 rounded-[6px] transition-all text-center active:scale-98 shadow-sm"
              >
                Request a Site Audit
              </button>
              <a
                className="border border-brand-border hover:bg-brand-bgLight text-brand-navy text-sm font-semibold px-5 py-3 rounded-[6px] transition-colors text-center"
                href="#dashboard"
              >
                View Inspection Sample
              </a>
            </div>

            {/* Horizontal Metadata Spec */}
            <div className="pt-6 border-t border-brand-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-[12px] text-brand-muted">
              <div className="pb-2 sm:pb-0 border-b sm:border-b-0 border-brand-border/60">
                <span className="block font-semibold text-brand-navy text-xs sm:text-[13px]">
                  ISO/IEC 17025
                </span>
                NABL Accredited Labs
              </div>
              <div className="sm:border-l border-brand-border sm:pl-4 pb-2 sm:pb-0 border-b sm:border-b-0 border-brand-border/60">
                <span className="block font-semibold text-brand-navy text-xs sm:text-[13px]">
                  BIS Protocols
                </span>
                IS 456, 1786, 1077, 12269
              </div>
              <div className="sm:border-l border-brand-border sm:pl-4">
                <span className="block font-semibold text-brand-navy text-xs sm:text-[13px]">
                  Audit Trail
                </span>
                GPS Geotagged Records
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative border border-brand-border rounded-[8px] overflow-hidden bg-brand-bgLight">
              {/* Responsive Image Height */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Site Engineer conducting reinforcement quality check"
                className="w-full h-[260px] sm:h-[340px] md:h-[420px] object-cover grayscale-[15%] contrast-[1.05]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDt0ptGujnMdOUzGX_y5V4SEyC034jRRtzd8LGQOjLEZHmOxy-hykCJl10lAo-9fQqWbkyWjoA8V19f7OmBQ5hlHJOqypXokX6mKBP9QKxRB-cVw3AH5cgdnVkGO4RzqELIBCu2xLXOjd7ceNsAkqZkT-7gHJMgtKFzAWmIonEdym3yKO-BKGWuUqC9URuJfONiluLao0Fh0rttyK1JGt7lYzOG4k9MyDDUGWC0T02"
              />

              {/* Responsive Floating Technical Badge */}
              <div className="p-4 sm:p-0 sm:absolute sm:bottom-4 sm:left-4 sm:right-4 md:right-auto md:w-[380px]">
                <div className="bg-white border border-brand-border rounded-[6px] p-3.5 sm:p-4 shadow-md sm:shadow-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] sm:text-[11px] font-semibold text-brand-muted uppercase tracking-wider">
                      Field Lab Verification
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-semibold bg-brand-passBg text-brand-pass px-2 py-0.5 rounded-[4px] border border-brand-pass/20">
                      <Check className="w-3 h-3 stroke-[2.5]" /> IS 456 PASSED
                    </span>
                  </div>
                  <div className="text-xs sm:text-[13px] font-semibold text-brand-navy">
                    M25 Grade Slab Cube — 7-Day Compressive Test
                  </div>
                  <div className="mt-1 text-[11px] sm:text-[12px] text-brand-muted flex flex-wrap items-center justify-between gap-1">
                    <span>
                      Measured: <strong className="text-brand-navy">21.4 N/mm²</strong> (Min req: 17.0 N/mm²)
                    </span>
                    <span className="font-mono text-[11px]">ID: CUB-0142</span>
                  </div>
                  <div className="mt-2 pt-2 border-t border-brand-border flex flex-wrap items-center justify-between text-[10px] sm:text-[11px] text-brand-muted gap-1">
                    <span>GPS: 22.5726° N, 88.3639° E</span>
                    <span className="font-medium text-brand-navy">14 Feb 2025, 11:42 IST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
