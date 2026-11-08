# BuildProof | Independent Civil Quality Verification & Material Testing

A Next.js 16 (App Router) + TypeScript + Tailwind CSS application for **BuildProof**, an independent civil quality auditing platform that tests construction materials in NABL-accredited civil laboratories (ISO/IEC 17025) and delivers verifiable IS-code reports directly to property owners.

---

## 🏗️ Key Features

- **Split 12-Column Hero & Field Badge**: Highlighted M25 7-day compressive test specs with real GPS coordinates and ISO/IEC 17025 badges.
- **Critical Vulnerability Breakdown**: Plain-language civil risk explanations (OPC 53 substitution, unverified curing, and delayed efflorescence).
- **Sequential 4-Phase Workflow**: Timeline track detailing unannounced lot sampling, NABL destructive tests, geotagged audits, and dispute notices.
- **Interactive Client Portal**:
  - Active build tracker for Sharma Residence (Plot 42, New Town Zone 1).
  - Milestone progress indicator (Excavation → Foundation → Plinth → Slab L1 Active → Brickwork → Finishing).
  - Material Non-Conformance Alert (#NCR-04 Red Clay Bricks).
  - Filterable Certified Lab Test Registry (All, Passed, Failed).
  - Geotagged Field Verification Gallery with interactive lightbox inspection.
- **Bureau of Indian Standards (BIS) Matrix**: IS 456/516, IS 1786/1608, IS 12269/4031, IS 1077/3495, IS 6403/2720 specs.
- **Interactive Modals**:
  - **Site Audit Booking Modal**: Collects site metro, construction stage, and contact details with instant token generation.
  - **Document & Certificate Preview Modal**: Realistic NABL lab certificate & non-conformance dispute letter viewer with PDF download simulation.
- **Fully Responsive & Clean**: Mobile navigation drawer, accessible accordion FAQ, and crisp 1px borders.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 with custom brand tokens (`brand.navy`, `brand.orange`, `brand.pass`, `brand.fail`, etc.)
- **Typography & Icons**: Inter Font & Google Material Symbols Outlined

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### 3. Build for production
```bash
npm run build
npm start
```
