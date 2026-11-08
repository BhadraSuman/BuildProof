"use client";

import { Check, ShieldCheck, FileCheck, MapPin, Landmark } from "lucide-react";

interface HeroProps {
  onRequestAudit: () => void;
}

export default function Hero({ onRequestAudit }: HeroProps) {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center py-10 lg:py-16 border-b border-brand-border bg-white">
      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-4 sm:px-6 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column (6 Cols on wide screens) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 bg-brand-bgLight border border-brand-border rounded-[4px] text-[11px] sm:text-xs font-semibold text-brand-navy">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse"></span>
              <span>INDEPENDENT CIVIL QUALITY AUDITING</span>
              <span className="text-brand-border">•</span>
              <span className="inline-flex items-center gap-1 text-brand-orange">
                <Landmark className="w-3.5 h-3.5" /> Private &amp; Govt Works
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-bold text-brand-navy leading-[1.1] tracking-tight">
              Build with proof, <br className="hidden sm:inline" />
              not promises.
            </h1>

            <p className="text-sm sm:text-base lg:text-[17px] text-brand-muted leading-relaxed max-w-xl">
              We sample construction materials on site, test them in ISO/IEC 17025 accredited labs, and deliver legally verifiable IS &amp; CPWD code reports for property owners, developers, and government infrastructure projects.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <button
                type="button"
                onClick={onRequestAudit}
                className="cursor-pointer bg-brand-orange hover:bg-brand-orangeHover text-white text-sm sm:text-[15px] font-semibold px-6 py-3.5 rounded-[6px] transition-all text-center active:scale-98 shadow-sm"
              >
                Request a Site Audit
              </button>
              <a
                className="border border-brand-border hover:bg-brand-bgLight text-brand-navy text-sm sm:text-[15px] font-semibold px-6 py-3.5 rounded-[6px] transition-colors text-center"
                href="#dashboard"
              >
                View Sample Audit
              </a>
            </div>

            {/* Expansive Metadata Grid */}
            <div className="pt-6 border-t border-brand-border grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="flex items-start gap-2.5">
                <div className="w-8 h-8 rounded bg-brand-bgLight flex items-center justify-center shrink-0 text-brand-orange">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-brand-navy text-sm">ISO/IEC 17025</span>
                  <span className="text-brand-muted text-[11px]">NABL Accredited Labs</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:border-l border-brand-border sm:pl-4">
                <div className="w-8 h-8 rounded bg-brand-bgLight flex items-center justify-center shrink-0 text-brand-orange">
                  <FileCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-brand-navy text-sm">BIS &amp; CPWD</span>
                  <span className="text-brand-muted text-[11px]">IS 456, 1786, MoRTH</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 sm:border-l border-brand-border sm:pl-4">
                <div className="w-8 h-8 rounded bg-brand-bgLight flex items-center justify-center shrink-0 text-brand-orange">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block font-bold text-brand-navy text-sm">GPS Geotagged</span>
                  <span className="text-brand-muted text-[11px]">Vigilance-Ready Records</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 Cols on wide screens) */}
          <div className="lg:col-span-6">
            <div className="relative border border-brand-border rounded-[10px] overflow-hidden bg-brand-bgLight shadow-sm">
              {/* Responsive expansive height */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Site Engineer conducting reinforcement quality check"
                className="w-full h-[320px] sm:h-[400px] lg:h-[480px] xl:h-[530px] object-cover grayscale-[10%]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDt0ptGujnMdOUzGX_y5V4SEyC034jRRtzd8LGQOjLEZHmOxy-hykCJl10lAo-9fQqWbkyWjoA8V19f7OmBQ5hlHJOqypXokX6mKBP9QKxRB-cVw3AH5cgdnVkGO4RzqELIBCu2xLXOjd7ceNsAkqZkT-7gHJMgtKFzAWmIonEdym3yKO-BKGWuUqC9URuJfONiluLao0Fh0rttyK1JGt7lYzOG4k9MyDDUGWC0T02"
              />

              {/* Floating Technical Badge */}
              <div className="p-3 sm:p-0 sm:absolute sm:bottom-5 sm:left-5 sm:right-5 xl:right-auto xl:w-[410px]">
                <div className="bg-white/95 backdrop-blur-md border border-brand-border rounded-[8px] p-4 shadow-lg">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-brand-muted uppercase tracking-wider">
                      Field &amp; Lab Verification
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold bg-brand-passBg text-brand-pass px-2 py-0.5 rounded border border-brand-pass/20">
                      <Check className="w-3 h-3 stroke-[3]" /> IS 456 &amp; CPWD PASSED
                    </span>
                  </div>
                  <div className="text-xs sm:text-[14px] font-bold text-brand-navy">
                    M25 Slab Cube — 7-Day Compressive Test
                  </div>
                  <div className="mt-1 text-xs text-brand-muted flex items-center justify-between">
                    <span>
                      Strength: <strong className="text-brand-navy">21.4 N/mm²</strong> (Req: 17.0 N/mm²)
                    </span>
                    <span className="font-mono text-[11px] bg-brand-bgLight px-2 py-0.5 rounded border border-brand-border font-bold">
                      CUB-0142
                    </span>
                  </div>
                  <div className="mt-2.5 pt-2 border-t border-brand-border flex items-center justify-between text-[11px] text-brand-muted">
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
