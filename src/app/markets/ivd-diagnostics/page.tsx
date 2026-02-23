import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { FlaskConical, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "IVD & Point-of-Care Diagnostics | Pump-Free Microfluidic Technology",
  description:
    "Eliminate pumps from cartridge-reader systems with Surnetics Surface Energy Gradient Coatings. Passive flow reduces IVD hardware cost by 80%+ and enables truly portable point-of-care diagnostics.",
  keywords: [
    "IVD microfluidics",
    "point-of-care diagnostics",
    "pump-free diagnostics",
    "passive microfluidic cartridge",
    "lab on chip",
    "lateral flow device",
    "microfluidic IVD licensing",
  ],
};

const applications = [
  "IVD cartridges and lateral flow devices",
  "Point-of-care handheld diagnostics",
  "Lab-on-chip platforms",
  "Field test kits",
  "PCR and amplification devices",
  "Microarrays and microplates",
  "Biosensors",
];

const advantages = [
  {
    title: "80%+ Hardware Cost Reduction",
    description:
      "Eliminating pumps, valves, and controllers removes the dominant cost driver in cartridge-based diagnostic systems.",
  },
  {
    title: "True Portability",
    description:
      "No external power or hardware required for fluid management — enabling genuinely handheld field diagnostics.",
  },
  {
    title: "Multi-Rate Single Layer",
    description:
      "Multiple independent flow rates on a single device layer eliminate complex channel stacking and reduce cartridge size.",
  },
  {
    title: "No Calibration Required",
    description:
      "Flow behavior is determined by the coating, not by mechanical components — eliminating pump calibration and drift.",
  },
];

export default function IVDDiagnosticsPage() {
  return (
    <>
      <NavBar />

      {/* Header */}
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/markets/"
            className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white/80 transition-colors mb-8"
          >
            <ArrowLeft size={14} /> All Markets
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#0066FF]/20 flex items-center justify-center text-[#60A5FA]">
              <FlaskConical size={28} />
            </div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
              Market
            </p>
          </div>
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6 max-w-3xl">
            In-Vitro Diagnostics &amp; Point-of-Care
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            Eliminate pumps from cartridge-reader systems. Passive flow reduces
            hardware cost by 80%+ and enables truly portable field diagnostics.
          </p>
        </div>
      </section>

      {/* Problem */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <p className="text-red-500 text-xs font-bold uppercase tracking-wide">
                The Problem
              </p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              Pumps and Controllers Exceed 80% of System Cost
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>
                Traditional cartridge-reader systems rely on pumps, valves, and
                electronic controllers to move samples through diagnostic channels.
                These components dominate system cost, limit portability, require
                calibration, and introduce failure points.
              </p>
              <p>
                Handheld field diagnostics require zero external hardware — a
                requirement that cannot be met with conventional pump-based
                architectures.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <p className="text-[#0066FF] text-xs font-bold uppercase tracking-wide">
                The Surnetics Solution
              </p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              Passive Flow Eliminates Pumps Entirely
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>
                Surnetics gradient coatings self-propel patient samples through
                diagnostic channels without any pumps, valves, or power source.
                Multiple flow rates on a single device layer eliminate channel
                stacking.
              </p>
              <p>
                Cartridge size shrinks dramatically. System BOM cost drops by 80%
                or more.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Advantages */}
      <SectionWrapper gray>
        <div className="max-w-2xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
            Competitive Advantages
          </p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Why This Matters for IVD
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {advantages.map((adv) => (
            <div
              key={adv.title}
              className="bg-white rounded-xl border border-[#E2E8F0] p-6"
            >
              <h3 className="text-[#0A1628] font-bold text-base mb-2">
                {adv.title}
              </h3>
              <p className="text-[#8892A4] text-sm leading-relaxed">
                {adv.description}
              </p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Applications */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
              Applications
            </p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
              Where It Applies
            </h2>
            <p className="text-[#8892A4] text-base leading-relaxed">
              Surface Energy Gradient Coatings are applicable across the full
              range of microfluidic diagnostic platforms — from simple lateral
              flow strips to complex multi-channel lab-on-chip systems.
            </p>
          </div>
          <ul className="space-y-3">
            {applications.map((app) => (
              <li
                key={app}
                className="flex items-center gap-3 p-4 bg-[#F5F7FA] rounded-lg border border-[#E2E8F0]"
              >
                <CheckCircle2
                  size={16}
                  className="text-[#0066FF] flex-shrink-0"
                />
                <span className="text-[#2D3748] text-sm font-medium">
                  {app}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper dark>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-5">
            Interested in IVD Licensing?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            We are actively seeking licensing partners and co-development
            agreements in the IVD and point-of-care diagnostics space.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
            >
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link
              href="/technology/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-white/20 text-white font-semibold text-sm hover:border-white/50 transition-colors duration-200"
            >
              View Technology
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Other Markets */}
      <SectionWrapper gray>
        <div className="max-w-2xl mb-8">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
            Explore Other Markets
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: "Electronics Cooling", href: "/markets/electronics-cooling/" },
            { label: "Implantable Devices", href: "/markets/implantable-devices/" },
            { label: "Drug Delivery", href: "/markets/drug-delivery/" },
            { label: "Energy Storage", href: "/markets/energy-storage/" },
            { label: "Aerospace & Defense", href: "/markets/aerospace-defense/" },
          ].map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="px-4 py-3 rounded-lg border border-[#E2E8F0] text-center text-[#2D3748] text-xs font-semibold hover:border-[#0066FF] hover:text-[#0066FF] transition-colors duration-200"
            >
              {m.label}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
