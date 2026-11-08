import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BuildProof | Independent Civil Quality Verification & Material Testing",
  description:
    "We test construction materials in NABL-accredited civil laboratories, audit contractor execution on site, and deliver verifiable IS-code reports directly to property owners.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-brand-textMain font-sans antialiased selection:bg-brand-orange/20 selection:text-brand-navy">
        {children}
      </body>
    </html>
  );
}
