"use client";

import { Check, ShieldCheck, FileCheck, MapPin, Landmark } from "lucide-react";

interface HeroProps {
  onRequestAudit: () => void;
}

export default function Hero({ onRequestAudit }: HeroProps) {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center border-b border-brand-border overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#f8fafc] to-[#eef2f7] -z-10" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f0f4f8] to-transparent -z-10 hidden lg:block" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-brand-orange/5 blur-3xl -z-10" />

      <div className="max-w-[1440px] 2xl:max-w-[1600px] w-full mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">

          {/* Left Column */}
          <div className="lg:col-span-6 space-y-7">
            {/* Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 px-3 py-1.5 bg-white border border-brand-border rounded-full text-[11px] sm:text-xs font-semibold text-brand-navy shadow-sm">
              <span className="w-2 h-2 bg-brand-orange rounded-full animate-pulse" />
              <span>INDEPENDENT CIVIL QUALITY AUDITING</span>
              <span className="text-brand-border">•</span>
              <span className="inline-flex items-center gap-1 text-brand-orange">
                <Landmark className="w-3.5 h-3.5" /> Private &amp; Govt Works
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-[56px] lg:text-[52px] xl:text-[64px] font-bold text-brand-navy leading-[1.08] tracking-tight">
              Build with proof,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">not promises.</span>
                <span className="absolute bottom-1 left-0 right-0 h-3 bg-brand-orange/15 -z-0 rounded" />
              </span>
            </h1>

            <p className="text-sm sm:text-[16px] lg:text-[17px] text-brand-muted leading-relaxed max-w-lg">
              We sample construction materials on site, test them in ISO/IEC 17025 accredited labs, and deliver legally verifiable IS &amp; CPWD code reports for property owners, developers, and government infrastructure projects.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={onRequestAudit}
                className="cursor-pointer bg-brand-orange hover:bg-brand-orangeHover text-white text-sm sm:text-[15px] font-semibold px-7 py-3.5 rounded-[8px] transition-all text-center active:scale-[0.98] shadow-md shadow-brand-orange/25"
              >
                Request a Site Audit
              </button>
              <a
                className="border border-brand-border bg-white hover:bg-brand-bgLight text-brand-navy text-sm sm:text-[15px] font-semibold px-6 py-3.5 rounded-[8px] transition-colors text-center shadow-sm"
                href="#dashboard"
              >
                View Sample Audit
              </a>
            </div>

            {/* Metadata row */}
            <div className="pt-5 border-t border-brand-border grid grid-cols-1 sm:grid-cols-3 gap-5">
              {[
                { icon: ShieldCheck, label: "ISO/IEC 17025", sub: "NABL Accredited Labs" },
                { icon: FileCheck, label: "BIS & CPWD", sub: "IS 456, 1786, MoRTH" },
                { icon: MapPin, label: "GPS Geotagged", sub: "Vigilance-Ready Records" },
              ].map(({ icon: Icon, label, sub }, i) => (
                <div key={i} className={`flex items-start gap-2.5 ${i > 0 ? "sm:border-l border-brand-border sm:pl-5" : ""}`}>
                  <div className="w-9 h-9 rounded-[6px] bg-white border border-brand-border flex items-center justify-center shrink-0 text-brand-orange shadow-sm">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block font-bold text-brand-navy text-sm">{label}</span>
                    <span className="text-brand-muted text-[11px]">{sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[14px] overflow-hidden border border-brand-border shadow-xl shadow-brand-navy/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                alt="Site Engineer conducting reinforcement quality check"
                className="w-full h-[300px] sm:h-[420px] lg:h-[520px] xl:h-[580px] object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDt0ptGujnMdOUzGX_y5V4SEyC034jRRtzd8LGQOjLEZHmOxy-hykCJl10lAo-9fQqWbkyWjoA8V19f7OmBQ5hlHJOqypXokX6mKBP9QKxRB-cVw3AH5cgdnVkGO4RzqELIBCu2xLXOjd7ceNsAkqZkT-7gHJMgtKFzAWmIonEdym3yKO-BKGWuUqC9URuJfONiluLao0Fh0rttyK1JGt7lYzOG4k9MyDDUGWC0T02"
              />
              {/* Dark overlay gradient at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/50 to-transparent" />

              {/* Floating Technical Badge */}
              <div className="absolute bottom-5 left-5 right-5 xl:right-auto xl:w-[400px]">
                <div className="bg-white/95 backdrop-blur-md border border-white/60 rounded-[10px] p-4 shadow-2xl">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] sm:text-[11px] font-bold text-brand-muted uppercase tracking-wider">
                      Field &amp; Lab Verification
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold bg-brand-passBg text-brand-pass px-2 py-0.5 rounded-full border border-brand-pass/20">
                      <Check className="w-3 h-3 stroke-[3]" /> IS 456 &amp; CPWD PASSED
                    </span>
                  </div>
                  <div className="text-sm font-bold text-brand-navy">
                    M25 Slab Cube — 7-Day Compressive Test
                  </div>
                  <div className="mt-1.5 text-xs text-brand-muted flex items-center justify-between">
                    <span>
                      Strength: <strong className="text-brand-navy">21.4 N/mm²</strong> (Req: 17.0)
                    </span>
                    <span className="font-mono text-[11px] bg-brand-bgLight px-2 py-0.5 rounded border border-brand-border font-bold">
                      CUB-0142
                    </span>
                  </div>
                  <div className="mt-2.5 pt-2.5 border-t border-brand-border flex items-center justify-between text-[11px] text-brand-muted">
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
