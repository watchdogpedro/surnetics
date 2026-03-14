import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lab-on-a-Chip Patent Portfolio for Sale or License — Surnetics",
  description:
    "Surnetics holds 5 granted US microfluidics patents covering lab-on-a-chip devices, passive fluid control, and point-of-care diagnostics. Cited by 44 industry patents. Available for sale or exclusive license. Active through 2041.",
  keywords: [
    "microfluidics patents for sale",
    "lab-on-a-chip IP acquisition",
    "passive microfluidic flow IP",
    "point-of-care diagnostics patent license",
    "lateral flow assay patent portfolio",
    "IVD patent licensing",
  ],
};

export default function IPPortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
