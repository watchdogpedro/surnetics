import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { FlaskConical, Cpu, Heart, Pill, Battery, Rocket, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Markets | Six Industries. One Platform Technology.",
  description:
    "Surnetics Surface Energy Gradient Coating technology addresses fluid management challenges across IVD diagnostics, electronics cooling, implantable devices, drug delivery, energy storage, and aerospace.",
  keywords: [
    "microfluidic technology markets",
    "pump-free microfluidics applications",
    "passive fluid control industries",
    "microfluidic IP licensing",
    "surface energy gradient applications",
  ],
};

const markets = [
  {
    icon: <FlaskConical size={28} />,
    title: "In-Vitro Diagnostics & Point-of-Care",
    description:
      "Eliminate pumps from cartridge-reader systems. Passive flow reduces hardware cost by 80%+ and enables truly portable field diagnostics.",
    href: "/markets/ivd-diagnostics/",
    highlight: "80%+ cost reduction",
  },
  {
    icon: <Cpu size={28} />,
    title: "Electronics Thermal Management",
    description:
      "Pump-free liquid cooling for AI chips, high-density semiconductors, and data center modules — passive, reliable, no moving parts.",
    href: "/markets/electronics-cooling/",
    highlight: "Zero parasitic power",
  },
  {
    icon: <Heart size={28} />,
    title: "Implantable Medical Devices",
    description:
      "Biocompatible passive coatings enable fluid control inside implants without pumps — smaller form factor, longer device life.",
    href: "/markets/implantable-devices/",
    highlight: "No power required",
  },
  {
    icon: <Pill size={28} />,
    title: "Drug Delivery",
    description:
      "Metered passive flow enables controlled drug release without pumps or actuators — transdermal, implantable, and oral applications.",
    href: "/markets/drug-delivery/",
    highlight: "Precisely metered flow",
  },
  {
    icon: <Battery size={28} />,
    title: "Energy Storage & Generation",
    description:
      "Directional passive fluid management in fuel cells, batteries, and solar panels — no parasitic power draw.",
    href: "/markets/energy-storage/",
    highlight: "No parasitic draw",
  },
  {
    icon: <Rocket size={28} />,
    title: "Aerospace & Defense",
    description:
      "No moving parts. No power requirements. Inherently reliable in high-vibration, vacuum, and zero-gravity environments.",
    href: "/markets/aerospace-defense/",
    highlight: "Zero failure points",
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
        </div>
      </section>

      {/* Markets Grid */}
      <SectionWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {markets.map((market) => (
            <Link
              key={market.href}
              href={market.href}
              className="group bg-white rounded-2xl border border-[#E2E8F0] p-8 hover:border-[#0066FF]/40 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-[#E8F0FF] flex items-center justify-center text-[#0066FF] mb-6 group-hover:bg-[#0066FF] group-hover:text-white transition-colors duration-300">
                {market.icon}
              </div>
              <h2 className="text-[#0A1628] font-bold text-lg mb-3 group-hover:text-[#0066FF] transition-colors duration-200">
                {market.title}
              </h2>
              <p className="text-[#8892A4] text-sm leading-relaxed mb-4">
                {market.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-[#0066FF] text-xs font-bold uppercase tracking-wide">
                  {market.highlight}
                </span>
                <span className="inline-flex items-center gap-1 text-[#0066FF] text-sm font-semibold group-hover:gap-2 transition-all duration-200">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      {/* Patent Bar */}
      <section className="bg-[#0066FF] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white text-sm font-semibold">
            <span>US Patent 9,968,930 B2</span>
            <span className="text-white/40 hidden md:inline">·</span>
            <span>Active Until 2034</span>
            <span className="text-white/40 hidden md:inline">·</span>
            <span>Cited by 44 Patents</span>
            <span className="text-white/40 hidden md:inline">·</span>
            <Link href="/ip-portfolio/" className="underline underline-offset-2 hover:text-white/80">
              View IP Portfolio →
            </Link>
          </div>
        </div>
      </section>

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
