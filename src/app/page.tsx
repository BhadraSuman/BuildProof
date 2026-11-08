"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InspectionReality from "@/components/InspectionReality";
import HowItWorks from "@/components/HowItWorks";
import ClientPortal from "@/components/ClientPortal";
import StandardsMatrix from "@/components/StandardsMatrix";
import Governance from "@/components/Governance";
import AudienceSegments from "@/components/AudienceSegments";
import MetricsTestimonial from "@/components/MetricsTestimonial";
import TechnicalFAQ from "@/components/TechnicalFAQ";
import ActionBanner from "@/components/ActionBanner";
import Footer from "@/components/Footer";
import AuditRequestModal from "@/components/AuditRequestModal";
import DocumentPreviewModal from "@/components/DocumentPreviewModal";

export default function Home() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const [docModalState, setDocModalState] = useState<{
    isOpen: boolean;
    title: string;
    id: string;
  }>({
    isOpen: false,
    title: "",
    id: "",
  });

  const handleOpenDocModal = (title: string, id: string) => {
    setDocModalState({
      isOpen: true,
      title,
      id,
    });
  };

  const handleCloseDocModal = () => {
    setDocModalState({
      isOpen: false,
      title: "",
      id: "",
    });
  };

  return (
    <div className="min-h-screen bg-white text-brand-textMain">
      <Navbar onRequestAudit={() => setIsAuditModalOpen(true)} />
      <main className="w-full">
        <Hero onRequestAudit={() => setIsAuditModalOpen(true)} />
        <InspectionReality />
        <HowItWorks />
        <ClientPortal onOpenDocModal={handleOpenDocModal} />
        <StandardsMatrix />
        <Governance />
        <AudienceSegments />
        <MetricsTestimonial />
        <TechnicalFAQ />
        <ActionBanner onRequestAudit={() => setIsAuditModalOpen(true)} />
      </main>
      <Footer />

      {/* Interactive Modals */}
      <AuditRequestModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />

      <DocumentPreviewModal
        isOpen={docModalState.isOpen}
        docTitle={docModalState.title}
        docId={docModalState.id}
        onClose={handleCloseDocModal}
      />
    </div>
  );
}
