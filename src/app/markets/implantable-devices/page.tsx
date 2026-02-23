import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { Heart, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Implantable Medical Devices | Passive Biocompatible Fluid Control",
  description:
    "Biocompatible passive coatings enable fluid control inside implantable medical devices without pumps — smaller form factor, longer device life. Surnetics Surface Energy Gradient Coating technology.",
  keywords: [
    "implantable device microfluidics",
    "biocompatible fluid control",
    "passive implant technology",
    "pump-free implantable device",
    "in-vivo microfluidics",
    "medical device IP licensing",
    "implantable drug delivery",
  ],
};

const applications = [
  "Implantable drug delivery systems",
  "In-vivo biosensors",
  "Neural interfaces",
  "Implantable diagnostics",
  "Chronic disease monitoring devices",
];

const advantages = [
  {
    title: "No Power Required",
    description:
      "Passive flow eliminates the need for batteries or external power connections for fluid management inside the body.",
  },
  {
    title: "Smaller Form Factor",
    description:
      "Removing pumps and actuators dramatically reduces device size — critical for implantable applications where every millimeter matters.",
  },
  {
    title: "Longer Device Life",
    description:
      "No mechanical wear components means longer operating life and reduced revision surgery risk for patients.",
  },
  {
    title: "Biocompatible Substrates",
    description:
      "Gradient coatings are compatible with biocompatible materials including silicone rubber, medical-grade plastics, and metals.",
  },
];

export default function ImplantableDevicesPage() {
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
              <Heart size={28} />
            </div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
              Market
            </p>
          </div>
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6 max-w-3xl">
            Implantable Medical Devices
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            Biocompatible passive coatings enable fluid control inside implants
            without pumps — smaller form factor, longer device life.
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
              Implantable Devices Need Fluid Management Without External Power
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>
                Implantable devices must manage fluids — drug delivery, biosensing,
                waste management — inside the body without external power
                connections or mechanical components that add size, reduce
                biocompatibility, and shorten device life.
              </p>
              <p>
                Conventional pump mechanisms are impractical at implantable scale.
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
              Passive Biocompatible Coatings for In-Vivo Fluid Control
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>
                Gradient coatings can be applied to biocompatible substrate
                materials to enable passive fluid control inside implanted devices —
                with no pump, no mechanical components, and no parasitic power draw.
              </p>
              <p>
                Smaller form factors and longer device operating life are
                achievable.
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
            Why This Matters for Implantables
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
              Any implantable device that requires controlled fluid movement —
              from drug delivery to biosensing — can benefit from passive,
              pump-free flow control.
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
            Interested in Medical Device Licensing?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            We are actively seeking licensing partners and co-development
            agreements in implantable medical devices.
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
