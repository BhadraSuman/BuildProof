"use client";

import { Check, ShieldCheck, FileCheck, MapPin } from "lucide-react";

interface HeroProps {
  onRequestAudit: () => void;
}

export default function Hero({ onRequestAudit }: HeroProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 border-b border-brand-border bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-brand-bgLight border border-brand-border rounded-[4px] text-[11px] font-semibold text-brand-navy">
              <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse"></span>
              INDEPENDENT CIVIL QUALITY AUDITING
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-brand-navy leading-[1.12] tracking-tight">
              Build with proof, not promises.
            </h1>

            <p className="text-sm sm:text-base text-brand-muted leading-relaxed">
              We sample construction materials on site, test them in ISO/IEC 17025 accredited labs, and deliver legally verifiable IS-code reports directly to property owners.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onRequestAudit}
                className="cursor-pointer bg-brand-orange hover:bg-brand-orangeHover text-white text-sm font-semibold px-5 py-2.5 rounded-[6px] transition-all text-center active:scale-98 shadow-xs"
              >
                Request a Site Audit
              </button>
              <a
                className="border border-brand-border hover:bg-brand-bgLight text-brand-navy text-sm font-semibold px-5 py-2.5 rounded-[6px] transition-colors text-center"
                href="#dashboard"
              >
                View Sample Audit
              </a>
            </div>

            {/* Concise Specs Grid */}
            <div className="pt-5 border-t border-brand-border grid grid-cols-3 gap-3 text-xs">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-brand-navy">ISO 17025</span>
                  <span className="text-brand-muted text-[11px]">NABL Accredited</span>
                </div>
              </div>
              <div className="flex items-start gap-2 border-l border-brand-border pl-3">
                <FileCheck className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-brand-navy">BIS Codes</span>
                  <span className="text-brand-muted text-[11px]">IS 456 / 1786</span>
                </div>
              </div>
              <div className="flex items-start gap-2 border-l border-brand-border pl-3">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <span className="block font-semibold text-brand-navy">GPS Tagged</span>
                  <span className="text-brand-muted text-[11px]">Verifiable Chain</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="relative border border-brand-border rounded-[8px] overflow-hidden bg-brand-bgLight shadow-xs">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Site Engineer conducting reinforcement quality check"
                className="w-full h-[260px] sm:h-[340px] md:h-[400px] object-cover grayscale-[10%]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDt0ptGujnMdOUzGX_y5V4SEyC034jRRtzd8LGQOjLEZHmOxy-hykCJl10lAo-9fQqWbkyWjoA8V19f7OmBQ5hlHJOqypXokX6mKBP9QKxRB-cVw3AH5cgdnVkGO4RzqELIBCu2xLXOjd7ceNsAkqZkT-7gHJMgtKFzAWmIonEdym3yKO-BKGWuUqC9URuJfONiluLao0Fh0rttyK1JGt7lYzOG4k9MyDDUGWC0T02"
              />

              {/* Floating Technical Badge */}
              <div className="p-3 sm:p-0 sm:absolute sm:bottom-4 sm:left-4 sm:right-4 md:right-auto md:w-[360px]">
                <div className="bg-white/95 backdrop-blur-xs border border-brand-border rounded-[6px] p-3.5 shadow-md">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="text-[10px] font-bold text-brand-muted uppercase tracking-wider">
                      Batch Verification
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold bg-brand-passBg text-brand-pass px-2 py-0.5 rounded border border-brand-pass/20">
                      <Check className="w-2.5 h-2.5 stroke-[3]" /> IS 456 PASSED
                    </span>
                  </div>
                  <div className="text-xs sm:text-[13px] font-bold text-brand-navy">
                    M25 Slab Cube — 7-Day Compressive Test
                  </div>
                  <div className="mt-1 text-[11px] text-brand-muted flex items-center justify-between">
                    <span>
                      Strength: <strong className="text-brand-navy">21.4 N/mm²</strong> (Req: 17.0)
                    </span>
                    <span className="font-mono text-[10px] bg-brand-bgLight px-1.5 py-0.5 rounded border border-brand-border">
                      CUB-0142
                    </span>
                  </div>
                  <div className="mt-2 pt-1.5 border-t border-brand-border flex items-center justify-between text-[10px] text-brand-muted">
                    <span>GPS: 22.5726° N, 88.3639° E</span>
                    <span className="font-medium text-brand-navy">14 Feb 2025 • 11:42 IST</span>
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
