import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ApplicationAccordion from "@/components/ApplicationAccordion";
import type { ApplicationItem } from "@/components/ApplicationAccordion";
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

const deepDiveApplications: ApplicationItem[] = [
  {
    title: "AI & GPU Chip Package Cooling",
    tagline: "NVIDIA H100/B200-class chips generating 700W+ per die — the most acute thermal challenge in computing today.",
    fluidRole: "Coolant must flow through micro-channels etched directly into or bonded onto the chip package, absorbing heat at the die surface and transporting it to a heat exchanger. Flow must be continuous, uniform across the die, and reliable for 5+ years of 24/7 operation.",
    criticality: "AI chip performance throttles at thermal limits. Every degree of cooling improvement translates to higher clock speeds, longer chip life, and more compute per watt. A single pump failure in a liquid-cooled AI cluster can take down hundreds of GPUs and cost millions in lost compute time.",
    impact: "Surnetics eliminates the pump — the single most common failure point in liquid-cooled AI infrastructure. Passive flow through chip-level micro-channels provides continuous, maintenance-free cooling with zero power overhead. No pump means no pump failure, no pump replacement, no pump power draw.",
    details: [
      "Direct-to-chip cooling channels with no external pump — coolant self-circulates",
      "Eliminates the #1 failure mode in liquid-cooled AI infrastructure (pump failure)",
      "Zero parasitic power consumption — every watt goes to compute, not cooling",
      "Compatible with copper, silicon, and aluminum micro-channel substrates",
      "Enables fully sealed chip cooling modules with no maintenance access required",
      "Applicable to NVIDIA, AMD, Intel, and custom ASIC AI accelerators",
    ],
  },
  {
    title: "Data Center Rack-Level Cooling",
    tagline: "Full-rack liquid cooling for hyperscale data centers running 40–100kW per rack.",
    fluidRole: "Coolant must be distributed from a rack manifold to individual server nodes, absorbing heat from CPUs, GPUs, memory, and storage, then returning to a central heat exchanger. Current systems use centralized pumps with complex plumbing manifolds.",
    criticality: "Data center liquid cooling is a $15B+ market growing 25%+ annually driven by AI workloads. Pump and plumbing complexity is the primary barrier to adoption — every fitting is a potential leak point, every pump is a potential failure. Downtime in a hyperscale rack costs $10,000–$100,000 per hour.",
    impact: "Passive rack-level cooling eliminates centralized pumps and reduces plumbing complexity dramatically. Each server node can have self-contained passive cooling with no shared pump infrastructure. This reduces leak risk, eliminates pump maintenance, and simplifies rack deployment.",
    details: [
      "Self-contained passive cooling per server node — no shared pump infrastructure",
      "Eliminates centralized pump systems and complex plumbing manifolds",
      "Reduces leak risk by eliminating pump seals and high-pressure fittings",
      "Zero maintenance cooling — no pump replacements over 10+ year facility lifetime",
      "Compatible with both direct-to-chip and immersion cooling architectures",
      "Addresses the #1 barrier to liquid cooling adoption in enterprise data centers",
    ],
  },
  {
    title: "Power Electronics & EV Inverters",
    tagline: "SiC and GaN power modules in electric vehicles, industrial drives, and grid infrastructure generating extreme heat in compact packages.",
    fluidRole: "Power semiconductors operate at junction temperatures up to 175°C and must be cooled continuously during operation. Coolant flows through cold plates bonded to the power module, absorbing heat and preventing thermal runaway. Flow interruption causes immediate device failure.",
    criticality: "Power electronics cooling is safety-critical — thermal runaway in an EV inverter can cause vehicle shutdown or fire. Pump reliability in automotive applications must meet 15-year/150,000-mile requirements. Pump failures account for a significant portion of EV cooling system warranty claims.",
    impact: "Passive cooling for power electronics eliminates the pump from a safety-critical system. No moving parts means no wear-out failure mode over the vehicle lifetime. Surnetics coatings on cold plate micro-channels enable self-circulating coolant with automotive-grade reliability.",
    details: [
      "Eliminates the pump from safety-critical automotive cooling systems",
      "No wear-out failure mode — passive flow maintains cooling for the full vehicle lifetime",
      "Compatible with SiC and GaN power module cold plate architectures",
      "Reduces EV cooling system complexity, weight, and warranty exposure",
      "Applicable to inverters, DC-DC converters, on-board chargers, and battery packs",
      "Meets automotive reliability requirements without mechanical maintenance",
    ],
  },
  {
    title: "5G & Edge Computing Enclosures",
    tagline: "Sealed outdoor enclosures housing 5G base stations and edge compute nodes in harsh environments with no HVAC access.",
    fluidRole: "Electronics in sealed outdoor enclosures must dissipate heat without exposing internals to dust, moisture, or contamination. Liquid cooling loops inside sealed enclosures must operate maintenance-free for 10+ years in temperature extremes from -40°C to +55°C.",
    criticality: "5G small cells and edge compute nodes are deployed on poles, rooftops, and remote locations with no physical access for maintenance. Any cooling system that requires periodic pump replacement or servicing is impractical. Passive air cooling is insufficient for the power densities involved.",
    impact: "Surnetics enables sealed, maintenance-free liquid cooling for outdoor electronics. No pump means nothing to replace over the 10–15 year deployment lifetime. Passive flow is unaffected by orientation (pole-mounted, wall-mounted, inverted) and operates across the full temperature range.",
    details: [
      "Fully sealed liquid cooling with zero maintenance for 10–15 year deployments",
      "Operates in any orientation — pole-mounted, wall-mounted, inverted, tilted",
      "Functions across -40°C to +55°C ambient temperature range",
      "No pump noise — critical for residential and urban 5G deployments",
      "Eliminates the most common failure point in outdoor electronics cooling",
      "Compatible with single-phase and two-phase cooling architectures",
    ],
  },
  {
    title: "LED & Laser Diode Thermal Management",
    tagline: "High-power LEDs and laser diodes in industrial, medical, and defense applications where thermal performance determines output quality.",
    fluidRole: "LED and laser diode performance degrades linearly with junction temperature. Coolant must maintain the junction within a tight thermal window — often within 2–3°C — to preserve wavelength stability, output power, and device lifetime.",
    criticality: "In medical lasers and industrial cutting systems, wavelength drift from thermal instability causes treatment failures or cut quality degradation. In LiDAR and defense lasers, thermal drift degrades targeting accuracy. Current micro-pump cooling adds cost, complexity, and a vibration source that can affect beam quality.",
    impact: "Vibration-free passive cooling maintains laser junction temperature within tight tolerances without introducing mechanical vibration from pumps. This is uniquely valuable for precision laser applications where both thermal stability and vibration isolation are required simultaneously.",
    details: [
      "Vibration-free cooling for precision laser and optical applications",
      "Maintains junction temperature within 2–3°C tolerance bands",
      "Eliminates pump-induced vibration that degrades beam quality in precision lasers",
      "Extends LED and laser diode lifetime by maintaining optimal thermal conditions",
      "Applicable to medical lasers, industrial cutting, LiDAR, and defense systems",
      "Passive flow simplifies integration into compact laser module housings",
    ],
  },
  {
    title: "Semiconductor Wafer Processing",
    tagline: "Temperature control during lithography, etching, deposition, and chemical-mechanical planarization — where nanometer-scale precision demands thermal stability.",
    fluidRole: "Process fluids and coolants must maintain wafer temperature uniformity within fractions of a degree across a 300mm wafer surface during multi-step fabrication. Temperature non-uniformity causes linewidth variation, overlay errors, and yield loss.",
    criticality: "At 3nm and below, a 0.5°C temperature variation across the wafer can cause critical dimension variation that scraps the die. Current thermal management uses complex pump-and-valve systems that require constant recalibration. Pump vibration is transmitted to the wafer stage, degrading overlay accuracy.",
    impact: "Passive micro-channel cooling on wafer chucks and process chambers eliminates pump vibration transmission to the wafer stage. Uniform gradient-driven flow across the wafer surface provides inherently even temperature distribution without the flow pulsation characteristic of mechanical pumps.",
    details: [
      "Eliminates pump vibration transmission to the wafer stage — critical for sub-5nm overlay",
      "Pulsation-free flow provides inherently uniform thermal distribution across 300mm wafers",
      "No pump calibration drift — passive flow is determined by the coating, not mechanical settings",
      "Applicable to lithography chucks, etch chambers, and CMP platens",
      "Compatible with ultra-pure DI water and specialty process coolants",
      "Reduces fab tool downtime from cooling system pump maintenance",
    ],
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

      {/* Problem / Solution */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <p className="text-red-500 text-xs font-bold uppercase tracking-wide">The Problem</p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              AI Chips Generate Extreme Heat That Air Cooling Cannot Address
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>The rapid growth of AI computing has created an acute thermal management crisis. AI chips generate heat densities that air cooling cannot address. Liquid cooling is required — but conventional liquid cooling systems require pumps, tubing, and controllers that add cost, occupy space, and introduce mechanical failure points.</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <p className="text-[#0066FF] text-xs font-bold uppercase tracking-wide">The Surnetics Solution</p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              Passive Pump-Free Liquid Cooling
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>Surnetics coatings enable liquid to flow through cooling channels purely by surface energy gradient — no pump, no moving parts, no power draw from the cooling system itself.</p>
              <p>This approach is uniquely suited to embedded chip cooling, sealed modules, and applications where pump reliability is critical.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Advantages */}
      <SectionWrapper gray>
        <div className="max-w-2xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Competitive Advantages</p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Why This Matters for Electronics</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {advantages.map((adv) => (
            <div key={adv.title} className="bg-white rounded-xl border border-[#E2E8F0] p-6">
              <h3 className="text-[#0A1628] font-bold text-base mb-2">{adv.title}</h3>
              <p className="text-[#8892A4] text-sm leading-relaxed">{adv.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Applications Deep Dive */}
      <SectionWrapper>
        <div className="max-w-3xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Applications Deep Dive</p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            How Fluid Control Shapes Every Cooling Application
          </h2>
          <p className="text-[#8892A4] text-base leading-relaxed">
            Click any application to explore how precise fluid management determines thermal performance — and how Surnetics technology transforms what is possible.
          </p>
        </div>
        <ApplicationAccordion items={deepDiveApplications} />
      </SectionWrapper>

      {/* Applications List */}
      <SectionWrapper gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Full Application Scope</p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Where It Applies</h2>
            <p className="text-[#8892A4] text-base leading-relaxed">From individual chip packages to full data center cooling infrastructure, passive surface-driven flow eliminates the mechanical complexity of traditional liquid cooling systems.</p>
          </div>
          <ul className="space-y-3">
            {applications.map((app) => (
              <li key={app} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#E2E8F0]">
                <CheckCircle2 size={16} className="text-[#0066FF] flex-shrink-0" />
                <span className="text-[#2D3748] text-sm font-medium">{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper dark>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-5">Interested in Electronics Cooling Licensing?</h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">We are actively seeking licensing partners and co-development agreements in electronics thermal management.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200">
              Start a Conversation <ArrowRight size={16} />
            </Link>
            <Link href="/technology/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-white/20 text-white font-semibold text-sm hover:border-white/50 transition-colors duration-200">
              View Technology
            </Link>
          </div>
        </div>
      </SectionWrapper>

      {/* Other Markets */}
      <SectionWrapper gray>
        <div className="max-w-2xl mb-8">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Explore Other Markets</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: "IVD & Diagnostics", href: "/markets/ivd-diagnostics/" },
            { label: "Implantable Devices", href: "/markets/implantable-devices/" },
            { label: "Drug Delivery", href: "/markets/drug-delivery/" },
            { label: "Energy Storage", href: "/markets/energy-storage/" },
            { label: "Aerospace & Defense", href: "/markets/aerospace-defense/" },
          ].map((m) => (
            <Link key={m.href} href={m.href} className="px-4 py-3 rounded-lg border border-[#E2E8F0] text-center text-[#2D3748] text-xs font-semibold hover:border-[#0066FF] hover:text-[#0066FF] transition-colors duration-200">
              {m.label}
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
