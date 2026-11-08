"use client";

import { useState } from "react";
import { ShieldCheck, CheckCircle2, Info, X } from "lucide-react";

interface AuditRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditRequestModal({ isOpen, onClose }: AuditRequestModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [token, setToken] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    sector: "Individual Villa / Private Residence",
    city: "Kolkata (New Town, Salt Lake, South)",
    stage: "Upcoming Slab / Beam Casting",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setToken(`REQ-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-[8px] max-w-lg w-full overflow-hidden shadow-2xl border border-brand-border my-auto">
        {/* Header */}
        <div className="px-5 sm:px-6 py-4 bg-brand-navy text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-brand-orange flex items-center justify-center rounded text-white shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm sm:text-[15px] leading-tight">Request an Independent Site Audit</h3>
              <p className="text-[10px] sm:text-[11px] text-slate-300">NABL Lab Testing • Private &amp; Government Projects</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer text-slate-300 hover:text-white transition-colors p-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-6 sm:p-8 text-center space-y-4">
            <div className="w-12 h-12 bg-brand-passBg text-brand-pass rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-brand-navy">Audit Request Logged</h4>
            <p className="text-xs sm:text-[14px] text-brand-muted leading-relaxed">
              Thank you, <strong className="text-brand-navy">{formData.name || "Client"}</strong>. Our senior civil engineering desk has received your request for <strong>{formData.sector}</strong> in <strong>{formData.city}</strong> ({formData.stage}).
            </p>
            <div className="p-3 bg-brand-bgLight rounded text-xs text-brand-navy font-medium text-left space-y-1">
              <div>
                Reference Token: <span className="font-mono font-bold text-brand-orange">{token}</span>
              </div>
              <div className="text-[11px] text-brand-muted">
                Audit engineer dispatch coordinator will contact you within 2 business hours.
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-3 px-6 py-2.5 bg-brand-navy text-white text-xs sm:text-[13px] font-semibold rounded-[6px] hover:bg-brand-navyDark transition-colors w-full sm:w-auto"
            >
              Back to Overview
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-3.5 sm:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold text-brand-navy mb-1">
                  Full Name / Officer Designation *
                </label>
                <input
                  required
                  type="text"
                  placeholder="e.g. Rahul Sen / Er. P. Das"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs sm:text-[13px] px-3 py-2 border border-brand-border rounded-[4px] focus:outline-none focus:border-brand-navy transition-colors"
                />
              </div>
              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold text-brand-navy mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  required
                  type="tel"
                  placeholder="+91 98300 00000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full text-xs sm:text-[13px] px-3 py-2 border border-brand-border rounded-[4px] focus:outline-none focus:border-brand-navy transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold text-brand-navy mb-1">
                  Project Sector *
                </label>
                <select
                  value={formData.sector}
                  onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  className="w-full text-xs sm:text-[13px] px-3 py-2 border border-brand-border rounded-[4px] focus:outline-none focus:border-brand-navy bg-white transition-colors"
                >
                  <option value="Individual Villa / Private Residence">Individual Villa / Residence</option>
                  <option value="NRI Remote Property Build">NRI Remote Property Build</option>
                  <option value="Boutique Developer / Commercial">Boutique / Developer Project</option>
                  <option value="Government / State PWD Infrastructure">Government / PWD / Municipal Infrastructure</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] sm:text-[12px] font-bold text-brand-navy mb-1">
                  Site Metro / Location
                </label>
                <select
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full text-xs sm:text-[13px] px-3 py-2 border border-brand-border rounded-[4px] focus:outline-none focus:border-brand-navy bg-white transition-colors"
                >
                  <option value="Kolkata (New Town, Salt Lake, South)">Kolkata &amp; Suburbs</option>
                  <option value="Bengaluru Urban">Bengaluru Urban</option>
                  <option value="Delhi NCR">Delhi NCR</option>
                  <option value="Mumbai MMR">Mumbai MMR</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Other Metro / State Infrastructure">Other Location / State Works</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] sm:text-[12px] font-bold text-brand-navy mb-1">
                Upcoming Milestone / Testing Requirement
              </label>
              <select
                value={formData.stage}
                onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                className="w-full text-xs sm:text-[13px] px-3 py-2 border border-brand-border rounded-[4px] focus:outline-none focus:border-brand-navy bg-white transition-colors"
              >
                <option value="Upcoming Slab / Beam Casting">Upcoming Slab / Beam / Deck Casting</option>
                <option value="Foundation & Soil Bearing">Foundation, Piles &amp; SBC</option>
                <option value="Rebar & Steel Verification">Rebar Batch Verification (IS 1786)</option>
                <option value="Road Sub-Base & Bitumen Testing">Road Sub-Base, Aggregates &amp; Bitumen (MoRTH)</option>
                <option value="Pre-Handover Full Audit">Pre-Handover Full Audit &amp; Vigilance File</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] sm:text-[12px] font-bold text-brand-navy mb-1">
                Project Notes / Specific Inspection Scope (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="e.g. Require third-party NABL cube testing and core sampling for upcoming 400m deck slab..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full text-xs sm:text-[13px] px-3 py-2 border border-brand-border rounded-[4px] focus:outline-none focus:border-brand-navy resize-none transition-colors"
              />
            </div>

            <div className="bg-brand-bgLight p-3 rounded text-[11px] text-brand-muted flex items-start gap-2">
              <Info className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <span>Our civil engineers sample unannounced directly on site. Complete chain of custody with GPS geotagging.</span>
            </div>

            <div className="pt-2 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-end gap-2 sm:gap-3 border-t border-brand-border">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs sm:text-[13px] font-semibold text-brand-muted hover:text-brand-navy text-center"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="cursor-pointer bg-brand-orange hover:bg-brand-orangeHover text-white text-xs sm:text-[13px] font-semibold px-5 py-2.5 rounded-[6px] transition-colors text-center active:scale-98 shadow-sm"
              >
                Submit Audit Booking
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
