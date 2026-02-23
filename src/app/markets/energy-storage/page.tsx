import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Battery, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Energy Storage & Generation | Passive Fluid Management",
  description:
    "Directional passive fluid management in fuel cells, batteries, and solar panels with no parasitic power draw. Surnetics Surface Energy Gradient Coating technology for energy applications.",
  keywords: [
    "fuel cell fluid management",
    "battery thermal management",
    "passive fluid control energy",
    "solar panel water management",
    "flow battery microfluidics",
    "energy storage IP licensing",
    "electrolyzer fluid management",
  ],
};

const applications = [
  "Proton exchange membrane fuel cells",
  "Lithium and solid-state batteries",
  "Flow batteries",
  "Solar panel water management",
  "Electrolyzer systems",
];

const advantages = [
  {
    title: "Zero Parasitic Power Draw",
    description:
      "The fluid management system consumes no energy from the device it serves — critical for energy systems where every watt matters.",
  },
  {
    title: "No Moving Parts",
    description:
      "Eliminates pump failures and maintenance requirements in remote, sealed, or continuously operating energy systems.",
  },
  {
    title: "Directional Control",
    description:
      "Gradient coatings move fluid in a specific direction — enabling water removal, electrolyte distribution, and thermal management without external force.",
  },
  {
    title: "Extreme Environment Tolerance",
    description:
      "Passive surface-driven flow is unaffected by vibration, orientation, or temperature extremes common in energy applications.",
  },
];

export default function EnergyStoragePage() {
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
              <Battery size={28} />
            </div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
              Market
            </p>
          </div>
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6 max-w-3xl">
            Energy Storage &amp; Generation
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            Directional passive fluid management in fuel cells, batteries, and
            solar panels — no parasitic power draw.
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
              Energy Devices Are Sensitive to Liquid Management
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>
                Electrochemical energy devices depend critically on liquid
                management — water removal in fuel cells, electrolyte distribution
                in flow batteries, anti-icing and water management in solar panels.
              </p>
              <p>
                Conventional solutions require parasitic pumps that consume energy
                from the device they are meant to serve.
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
              Passive Directional Fluid Control With No Power Draw
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>
                Gradient coatings enable passive directional fluid management in
                energy devices — moving water, electrolyte, or fuel precisely where
                it needs to go without consuming any device power.
              </p>
              <p>
                No pumps, no moving parts, no maintenance.
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
            Why This Matters for Energy
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
              Anywhere energy devices require controlled fluid movement —
              water removal, electrolyte transport, or thermal regulation —
              without consuming device power.
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
            Interested in Energy Licensing?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            We are actively seeking licensing partners and co-development
            agreements in energy storage and generation.
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
            { label: "Electronics Cooling", href: "/markets/electronics-cooling/" },
            { label: "Implantable Devices", href: "/markets/implantable-devices/" },
            { label: "Drug Delivery", href: "/markets/drug-delivery/" },
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
