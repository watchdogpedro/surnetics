import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Cpu, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Electronics Thermal Management | Pump-Free Liquid Cooling",
  description:
    "Passive pump-free liquid cooling for AI chips, high-density semiconductors, and data center modules. Surnetics Surface Energy Gradient Coatings eliminate pumps and moving parts from thermal management systems.",
  keywords: [
    "AI chip cooling",
    "pump-free liquid cooling",
    "semiconductor thermal management",
    "passive liquid cooling",
    "data center cooling technology",
    "microfluidic cooling",
    "electronics cooling IP",
  ],
};

const applications = [
  "AI chip cooling modules",
  "Semiconductor wafer processing",
  "High-performance computing thermal management",
  "Data center liquid cooling",
  "Power electronics cooling",
  "Edge computing enclosures",
];

const advantages = [
  {
    title: "Zero Parasitic Power Draw",
    description:
      "The cooling system consumes no electrical power — all fluid movement is driven by the surface energy gradient alone.",
  },
  {
    title: "No Moving Parts",
    description:
      "Eliminates pump failures, the leading cause of liquid cooling system downtime in data centers and computing environments.",
  },
  {
    title: "Sealed Module Compatible",
    description:
      "Passive flow enables fully sealed cooling loops with no external connections, tubing, or maintenance access required.",
  },
  {
    title: "Scales to Chip Level",
    description:
      "Coatings can be applied at the chip package level, enabling embedded cooling channels directly in semiconductor modules.",
  },
];

export default function ElectronicsCoolingPage() {
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
              <Cpu size={28} />
            </div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
              Market
            </p>
          </div>
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6 max-w-3xl">
            Electronics Thermal Management
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            Pump-free liquid cooling for AI chips, high-density semiconductors,
            and data center modules — passive, reliable, no moving parts.
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
              AI Chips Generate Extreme Heat That Air Cooling Cannot Address
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>
                The rapid growth of AI computing has created an acute thermal
                management crisis. AI chips generate heat densities that air
                cooling cannot address. Liquid cooling is required — but
                conventional liquid cooling systems require pumps, tubing, and
                controllers that add cost, occupy space, and introduce mechanical
                failure points.
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
              Passive Pump-Free Liquid Cooling
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>
                Surnetics coatings enable liquid to flow through cooling channels
                purely by surface energy gradient — no pump, no moving parts, no
                power draw from the cooling system itself.
              </p>
              <p>
                This approach is uniquely suited to embedded chip cooling, sealed
                modules, and applications where pump reliability is critical.
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
            Why This Matters for Electronics
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
              From individual chip packages to full data center cooling
              infrastructure, passive surface-driven flow eliminates the
              mechanical complexity of traditional liquid cooling systems.
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
            Interested in Electronics Cooling Licensing?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            We are actively seeking licensing partners and co-development
            agreements in electronics thermal management.
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
            { label: "IVD & Diagnostics", href: "/markets/ivd-diagnostics/" },
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
