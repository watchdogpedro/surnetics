import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroAnimation from "@/components/HeroAnimation";
import AnimatedCounter from "@/components/AnimatedCounter";
import MarketCard from "@/components/MarketCard";
import Image from "next/image";
import {
  FlaskConical,
  Cpu,
  Heart,
  Pill,
  Battery,
  Rocket,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Surnetics | The Only Patented Platform That Moves Liquids Without Pumps",
  description:
    "Surnetics holds patented Surface Energy Gradient Coating technology — the only platform that moves liquids through microfluidic channels without pumps, valves, or controllers. Licensed across six industries.",
};

const valueProps = [
  {
    label: "No Pumps",
    description:
      "Passive capillary force self-propels fluid through microchannels — eliminating the primary cost driver in cartridge-based systems.",
  },
  {
    label: "No Valves",
    description:
      "Flow can be started, stopped, and directed using only the surface coating — no mechanical components required.",
  },
  {
    label: "No Controllers",
    description:
      "Multiple independent flow rates on a single device layer with no external hardware, power, or electronic control.",
  },
];

const markets = [
  {
    icon: <FlaskConical size={20} />,
    title: "In-Vitro Diagnostics & POC",
    description:
      "Eliminate pumps from cartridge-reader systems. Passive flow reduces hardware cost by 80%+ and enables truly portable field diagnostics.",
  },
  {
    icon: <Cpu size={20} />,
    title: "Electronics Thermal Management",
    description:
      "Pump-free liquid cooling for AI chips, high-density semiconductors, and data center modules — passive, reliable, no moving parts.",
  },
  {
    icon: <Heart size={20} />,
    title: "Implantable Medical Devices",
    description:
      "Biocompatible passive coatings enable fluid control inside implants without pumps — smaller form factor, longer device life.",
  },
  {
    icon: <Pill size={20} />,
    title: "Drug Delivery",
    description:
      "Metered passive flow enables controlled drug release without pumps or actuators — transdermal, implantable, and oral applications.",
  },
  {
    icon: <Battery size={20} />,
    title: "Energy Storage & Generation",
    description:
      "Directional passive fluid management in fuel cells, batteries, and solar panels — no parasitic power draw.",
  },
  {
    icon: <Rocket size={20} />,
    title: "Aerospace & Defense",
    description:
      "No moving parts. No power requirements. Inherently reliable in high-vibration, vacuum, and zero-gravity environments.",
  },
];

const stats = [
  { value: 44, suffix: "", label: "Patent Citations", description: "Subsequent patents cite this work" },
  { value: 20, suffix: "", label: "Patent Claims", description: "Comprehensive protection scope" },
  { value: 6, suffix: "", label: "Target Markets", description: "Across five industries" },
  { value: 2034, suffix: "", label: "Active Until", description: "Long runway for licensing partners" },
];

export default function HomePage() {
  return (
    <>
      <NavBar />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section className="relative min-h-screen bg-[#0A1628] flex flex-col justify-center overflow-hidden">
        {/* Hero background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.png')" }}
        />
        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-[#0A1628]/70" />


        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#0066FF]/30 bg-[#0066FF]/10 mb-8 animate-fade-up">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0066FF]" />
                <span className="text-[#60A5FA] text-xs font-semibold uppercase tracking-widest">
                  US Patent 9,968,930 B2 · Active
                </span>
              </div>

              <h1 className="text-white font-extrabold text-4xl md:text-5xl xl:text-6xl leading-[1.08] tracking-tight mb-6 animate-fade-up delay-100">
                Eliminate the Instrument.{" "}
                <span className="text-[#0066FF]">Own the Market.</span>
              </h1>

              <p className="text-white text-lg md:text-xl leading-relaxed mb-10 max-w-lg animate-fade-up delay-200">
                The only passive fluid technology that enables true lab-on-a-chip
                diagnostics — no pumps, no readers, no barriers to adoption.
              </p>

              <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
                >
                  Explore Licensing <ArrowRight size={16} />
                </Link>
                <Link
                  href="/technology/"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-white/20 text-white font-semibold text-sm hover:border-white/50 hover:bg-white/5 transition-colors duration-200"
                >
                  View Technology
                </Link>
              </div>
            </div>

            {/* Animation */}
            <div className="animate-fade-up delay-400">
              <HeroAnimation />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-white/40" />
        </div>
      </section>

      {/* ─── Value Props ──────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {valueProps.map((vp) => (
              <div key={vp.label} className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-[#0066FF] flex-shrink-0" />
                  <h3 className="text-[#0A1628] font-bold text-xl">{vp.label}</h3>
                </div>
                <p className="text-[#8892A4] text-sm leading-relaxed">{vp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Patent Callout Bar ───────────────────────────────── */}
      <section className="bg-[#0066FF] py-5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-white text-sm font-semibold">
            <span>US Patent 9,968,930 B2</span>
            <span className="text-white/40 hidden md:inline">·</span>
            <span>Active Until 2034</span>
            <span className="text-white/40 hidden md:inline">·</span>
            <span>Cited by 44 Patents</span>
            <span className="text-white/40 hidden md:inline">·</span>
            <span>6 Target Markets</span>
            <span className="text-white/40 hidden md:inline">·</span>
            <Link href="/ip-portfolio/" className="underline underline-offset-2 hover:text-white/80">
              View IP Portfolio →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Stats ────────────────────────────────────────────── */}
      <section className="bg-[#F5F7FA] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-4xl md:text-5xl font-extrabold text-[#0A1628] tracking-tight mb-1">
                  <AnimatedCounter target={s.value} suffix={s.suffix} />
                </div>
                <p className="text-[#0A1628] font-semibold text-sm mb-1">{s.label}</p>
                <p className="text-[#8892A4] text-xs">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Lab Image Banner ─────────────────────────────────── */}
      <section className="relative w-full h-[420px] md:h-[520px] overflow-hidden">
        <Image
          src="/lab-hero.png"
          alt="Surnetics biomedical research laboratory"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F7FA]/60 via-transparent to-[#ffffff]/60" />
      </section>

      {/* ─── Markets Grid ─────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
              Platform Technology
            </p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
              One Technology. Six Industries.
            </h2>
            <p className="text-[#8892A4] text-base leading-relaxed">
              Surface Energy Gradient Coating technology addresses a fundamental
              engineering challenge — fluid management without mechanical
              complexity — across a broad range of high-value markets.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {markets.map((m) => (
              <MarketCard key={m.title} {...m} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/markets/"
              className="inline-flex items-center gap-2 text-[#0066FF] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Explore all markets <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Technology Teaser ────────────────────────────────── */}
      <section className="bg-[#0A1628] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
                The Technology
              </p>
              <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
                Surface Energy Gradient Coatings — A Breakthrough in Passive
                Fluid Control
              </h2>
              <p className="text-white/60 text-base leading-relaxed mb-6">
                A precise gradient in surface energy along microfluidic channel
                walls generates a net capillary force that self-propels liquid
                through passages — with no external input of any kind. Multiple
                flow rates, multiple channels, single device layer.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Tunable flow velocity via coating composition",
                  "Compatible with plastics, metals, glass, and silicon",
                  "Scalable to high-volume manufacturing",
                  "Reduce system hardware costs by 80% or more",
                  "The only company that can offer this commercially",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/70 text-sm">
                    <CheckCircle2 size={15} className="text-[#0066FF] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/technology/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
              >
                View Full Technology Overview <ArrowRight size={16} />
              </Link>
            </div>

            {/* Specs grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Compatible Materials", value: "14+" },
                { label: "Flow Rate Control", value: "100%" },
                { label: "Hardware Reduction", value: "80%+" },
                { label: "Moving Parts", value: "Zero" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-white/5 border border-white/10 rounded-xl p-6 text-center"
                >
                  <p className="text-white font-extrabold text-3xl mb-1">{s.value}</p>
                  <p className="text-white/50 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Team Strip ───────────────────────────────────────── */}
      <section className="bg-[#F5F7FA] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-[#8892A4] text-xs font-semibold uppercase tracking-widest text-center mb-8">
            The Team Behind the Technology
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { initials: "BB", name: "Brian Babcock", role: "Inventor & President", credential: "Registered US Patent Agent · Vanderbilt B.S./M.S. ChemE · Argonne National Laboratory" },
              { initials: "PD", name: "Paul Denman", role: "Co-Founder & Business Dev", credential: "20+ yrs life sciences, medical device, semiconductor, defense" },
            ].map((m) => (
              <div key={m.name} className="text-center">
                <div className="w-14 h-14 rounded-full bg-[#0A1628] flex items-center justify-center mx-auto mb-3">
                  <span className="text-white font-bold text-sm">{m.initials}</span>
                </div>
                <p className="text-[#0A1628] font-semibold text-sm">{m.name}</p>
                <p className="text-[#0066FF] text-xs mb-2">{m.role}</p>
                <p className="text-[#8892A4] text-xs leading-relaxed">{m.credential}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/about/" className="text-[#0066FF] text-sm font-semibold hover:underline">
              Full team bios →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
