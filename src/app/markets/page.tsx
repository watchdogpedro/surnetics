import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight, FlaskConical, Cpu, Heart, Pill, Battery, Rocket, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Markets | Six Industries. One Platform Technology.",
  description:
    "Surnetics Surface Energy Gradient Coating technology addresses fluid management challenges across IVD diagnostics, electronics cooling, implantable devices, drug delivery, energy storage, and aerospace.",
};

const markets = [
  {
    id: "ivd",
    icon: <FlaskConical size={28} />,
    title: "In-Vitro Diagnostics & Point-of-Care",
    shortTitle: "IVD & POC",
    problem: {
      headline: "Pumps and controllers exceed 80% of system cost",
      detail:
        "Traditional cartridge-reader systems rely on pumps, valves, and electronic controllers to move samples through diagnostic channels. These components dominate system cost, limit portability, require calibration, and introduce failure points. Handheld field diagnostics require zero external hardware — a requirement that cannot be met with conventional pump-based architectures.",
    },
    solution: {
      headline: "Passive flow eliminates pumps entirely",
      detail:
        "Surnetics gradient coatings self-propel patient samples through diagnostic channels without any pumps, valves, or power source. Multiple flow rates on a single device layer eliminate channel stacking. Cartridge size shrinks dramatically. System BOM cost drops by 80% or more.",
    },
    applications: [
      "IVD cartridges and lateral flow devices",
      "Point-of-care handheld diagnostics",
      "Lab-on-chip platforms",
      "Field test kits",
      "PCR and amplification devices",
      "Microarrays and microplates",
      "Biosensors",
    ],
    accent: "#0066FF",
  },
  {
    id: "electronics",
    icon: <Cpu size={28} />,
    title: "Electronics Thermal Management",
    shortTitle: "Semiconductor",
    problem: {
      headline: "AI chips and high-density semiconductors generate extreme heat",
      detail:
        "The rapid growth of AI computing has created an acute thermal management crisis. AI chips generate heat densities that air cooling cannot address. Liquid cooling is required — but conventional liquid cooling systems require pumps, tubing, and controllers that add cost, occupy space, and introduce mechanical failure points.",
    },
    solution: {
      headline: "Passive pump-free liquid cooling",
      detail:
        "Surnetics coatings enable liquid to flow through cooling channels purely by surface energy gradient — no pump, no moving parts, no power draw from the cooling system itself. This approach is uniquely suited to embedded chip cooling, sealed modules, and applications where pump reliability is critical.",
    },
    applications: [
      "AI chip cooling modules",
      "Semiconductor wafer processing",
      "High-performance computing thermal management",
      "Data center liquid cooling",
      "Power electronics cooling",
      "Edge computing enclosures",
    ],
    accent: "#0066FF",
  },
  {
    id: "implants",
    icon: <Heart size={28} />,
    title: "Implantable Medical Devices",
    shortTitle: "Implantables",
    problem: {
      headline: "Implantable devices need fluid management without external power",
      detail:
        "Implantable devices must manage fluids — drug delivery, biosensing, waste management — inside the body without external power connections or mechanical components that add size, reduce biocompatibility, and shorten device life. Conventional pump mechanisms are impractical at implantable scale.",
    },
    solution: {
      headline: "Passive biocompatible coatings for in-vivo fluid control",
      detail:
        "Gradient coatings can be applied to biocompatible substrate materials to enable passive fluid control inside implanted devices — with no pump, no mechanical components, and no parasitic power draw. Smaller form factors and longer device operating life are achievable.",
    },
    applications: [
      "Implantable drug delivery systems",
      "In-vivo biosensors",
      "Neural interfaces",
      "Implantable diagnostics",
      "Chronic disease monitoring devices",
    ],
    accent: "#0066FF",
  },
  {
    id: "drug-delivery",
    icon: <Pill size={28} />,
    title: "Drug Delivery",
    shortTitle: "Drug Delivery",
    problem: {
      headline: "Precise, controlled, passive drug dosing is difficult without mechanical complexity",
      detail:
        "Controlled drug release — whether transdermal, implantable, or inhaled — requires precise, repeatable fluid metering. Achieving this passively, without pumps or actuators, has been a fundamental challenge that limits the design space for next-generation drug delivery systems.",
    },
    solution: {
      headline: "Metered passive flow for controlled release",
      detail:
        "Gradient coatings enable precisely metered passive flow for drug delivery applications. Flow rate and stopping points are programmed into the coating design — enabling controlled, reproducible drug release without any active components.",
    },
    applications: [
      "Transdermal drug delivery patches",
      "Implantable drug depots",
      "Inhalation and pulmonary devices",
      "Oral controlled-release systems",
      "Microneedle drug delivery",
    ],
    accent: "#0066FF",
  },
  {
    id: "energy",
    icon: <Battery size={28} />,
    title: "Energy Storage & Generation",
    shortTitle: "Energy",
    problem: {
      headline: "Batteries, fuel cells, and solar panels are sensitive to liquid management",
      detail:
        "Electrochemical energy devices depend critically on liquid management — water removal in fuel cells, electrolyte distribution in flow batteries, anti-icing and water management in solar panels. Conventional solutions require parasitic pumps that consume energy from the device they are meant to serve.",
    },
    solution: {
      headline: "Passive directional fluid control with no parasitic power draw",
      detail:
        "Gradient coatings enable passive directional fluid management in energy devices — moving water, electrolyte, or fuel precisely where it needs to go without consuming any device power. No pumps, no moving parts, no maintenance.",
    },
    applications: [
      "Proton exchange membrane fuel cells",
      "Lithium and solid-state batteries",
      "Flow batteries",
      "Solar panel water management",
      "Electrolyzer systems",
    ],
    accent: "#0066FF",
  },
  {
    id: "aerospace",
    icon: <Rocket size={28} />,
    title: "Aerospace & Defense",
    shortTitle: "Aerospace",
    problem: {
      headline: "Extreme environments demand zero-failure fluid management",
      detail:
        "Aerospace and defense fluid systems must perform in high-vibration, vacuum, extreme temperature, and zero-gravity environments where conventional pump-based systems fail or require impractical maintenance. Any mechanical component is a potential failure point in these applications.",
    },
    solution: {
      headline: "No mechanical components — inherently reliable",
      detail:
        "Passive surface-driven flow has no moving parts, requires no power, and is inherently immune to vibration, orientation, and vacuum environments. This represents a paradigm shift for fluid management in space, satellite, and defense applications.",
    },
    applications: [
      "Satellite thermal management systems",
      "UAV and drone fuel systems",
      "Defense sensor platforms",
      "Space life science instruments",
      "Spacecraft fluid loops",
      "High-altitude platform systems",
    ],
    accent: "#0066FF",
  },
];

export default function MarketsPage() {
  return (
    <>
      <NavBar />

      {/* Header */}
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              Platform Technology
            </p>
            <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
              Six Industries. One Platform Technology.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Surface Energy Gradient Coating technology addresses a fundamental
              engineering problem — passive fluid management without mechanical
              complexity — across a broad range of high-value markets.
            </p>
          </div>

          {/* Market quick links */}
          <div className="flex flex-wrap gap-2 mt-10">
            {markets.map((m) => (
              <a
                key={m.id}
                href={`#${m.id}`}
                className="px-4 py-1.5 rounded-full border border-white/20 text-white/70 text-xs font-medium hover:border-[#0066FF] hover:text-[#60A5FA] transition-colors duration-200"
              >
                {m.shortTitle}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Market Sections */}
      {markets.map((market, i) => (
        <SectionWrapper key={market.id} id={market.id} gray={i % 2 !== 0}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Problem + Solution */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-[#E8F0FF] flex items-center justify-center text-[#0066FF]">
                  {market.icon}
                </div>
                <div>
                  <p className="text-[#8892A4] text-xs font-semibold uppercase tracking-wide">Market</p>
                  <h2 className="text-[#0A1628] font-extrabold text-xl leading-tight tracking-tight">
                    {market.title}
                  </h2>
                </div>
              </div>

              {/* Problem */}
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  <p className="text-red-500 text-xs font-bold uppercase tracking-wide">The Problem</p>
                </div>
                <h3 className="text-[#0A1628] font-bold text-base mb-2">{market.problem.headline}</h3>
                <p className="text-[#8892A4] text-sm leading-relaxed">{market.problem.detail}</p>
              </div>

              {/* Solution */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                  <p className="text-[#0066FF] text-xs font-bold uppercase tracking-wide">The Surnetics Solution</p>
                </div>
                <h3 className="text-[#0A1628] font-bold text-base mb-2">{market.solution.headline}</h3>
                <p className="text-[#8892A4] text-sm leading-relaxed">{market.solution.detail}</p>
              </div>
            </div>

            {/* Right: Applications */}
            <div>
              <p className="text-[#0A1628] font-bold text-sm uppercase tracking-wide mb-4">
                Applications
              </p>
              <ul className="space-y-2.5">
                {market.applications.map((app) => (
                  <li key={app} className="flex items-start gap-3">
                    <CheckCircle2 size={15} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
                    <span className="text-[#2D3748] text-sm">{app}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-[#E8F0FF] border border-[#0066FF]/20 rounded-xl">
                <p className="text-[#0A1628] text-xs font-semibold mb-1">
                  Interested in this market?
                </p>
                <p className="text-[#8892A4] text-xs leading-relaxed mb-3">
                  We are actively seeking licensing partners and co-development
                  agreements in this sector.
                </p>
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-1.5 text-[#0066FF] text-xs font-bold hover:gap-2.5 transition-all duration-200"
                >
                  Start a conversation <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* Bottom CTA */}
      <SectionWrapper dark>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-white font-extrabold text-3xl leading-tight tracking-tight mb-4">
            Your Market Not Listed?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            Surface Energy Gradient Coatings are a platform technology. If your
            application involves fluid management in microchannels, contact us to
            discuss feasibility.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
          >
            Contact Our Team <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
