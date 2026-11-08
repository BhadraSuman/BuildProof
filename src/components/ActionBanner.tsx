"use client";

import { Phone, Mail, Clock } from "lucide-react";

interface ActionBannerProps {
  onRequestAudit: () => void;
}

export default function ActionBanner({ onRequestAudit }: ActionBannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-brand-navy text-white" id="audit">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono text-brand-orange">
              <span className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-pulse"></span>
              PROTECT CAPITAL DISBURSEMENTS
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight leading-tight">
              Know what is going into your building.
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
              Schedule an unannounced site inspection or consult with our civil engineering desk prior to your next foundation or slab pour.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onRequestAudit}
                className="cursor-pointer bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-[6px] transition-colors text-center active:scale-98 shadow-xs"
              >
                Request a Site Audit
              </button>
              <a
                className="border border-white/20 hover:bg-white/10 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-[6px] transition-colors flex items-center justify-center gap-2 text-center"
                href="tel:+919830012345"
              >
                <Phone className="w-3.5 h-3.5" />
                +91 98300 12345
              </a>
            </div>
            <div className="flex items-center gap-1.5 text-[11px] text-slate-400 pt-1">
              <Clock className="w-3 h-3" />
              <span>Response within 2 business hours • Zero sales pressure</span>
            </div>
          </div>

          <div className="lg:col-span-4 bg-brand-navyDark border border-brand-borderDark p-4 sm:p-5 rounded-[6px] space-y-2">
            <div className="text-[10px] font-mono font-bold text-slate-400 uppercase">
              Civil QA Desk
            </div>
            <div className="text-sm sm:text-base font-bold text-white">Eastern India Regional Hub</div>
            <div className="text-xs text-slate-300">
              New Town, Action Area II, Kolkata, WB 700156
            </div>
            <div className="pt-2 border-t border-brand-borderDark flex items-center gap-1.5 text-[11px] text-slate-300">
              <Mail className="w-3 h-3 text-brand-orange" />
              <a className="hover:text-white hover:underline" href="mailto:desk@buildproof.in">
                desk@buildproof.in
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
