import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ApplicationAccordion from "@/components/ApplicationAccordion";
import type { ApplicationItem } from "@/components/ApplicationAccordion";
import { Battery, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Energy Storage & Generation | Passive Fluid Management",
  description: "Directional passive fluid management in fuel cells, batteries, and solar panels with no parasitic power draw. Surnetics Surface Energy Gradient Coating technology for energy applications.",
  keywords: ["fuel cell fluid management","battery thermal management","passive fluid control energy","solar panel water management","flow battery microfluidics","energy storage IP licensing","electrolyzer fluid management"],
};

const applications = [
  "Proton exchange membrane fuel cells",
  "Lithium and solid-state batteries",
  "Flow batteries",
  "Solar panel water management",
  "Electrolyzer systems",
];

const advantages = [
  { title: "Zero Parasitic Power Draw", description: "The fluid management system consumes no energy from the device it serves — critical for energy systems where every watt matters." },
  { title: "No Moving Parts", description: "Eliminates pump failures and maintenance requirements in remote, sealed, or continuously operating energy systems." },
  { title: "Directional Control", description: "Gradient coatings move fluid in a specific direction — enabling water removal, electrolyte distribution, and thermal management without external force." },
  { title: "Extreme Environment Tolerance", description: "Passive surface-driven flow is unaffected by vibration, orientation, or temperature extremes common in energy applications." },
];

const deepDiveApplications: ApplicationItem[] = [
  {
    title: "PEM Fuel Cell Water Management",
    tagline: "Proton Exchange Membrane fuel cells for vehicles, backup power, and portable generators — where water balance determines performance and lifetime.",
    fluidRole: "Water is produced at the cathode during the electrochemical reaction and must be removed continuously to prevent flooding — while the membrane must remain hydrated for proton conductivity. This delicate water balance requires precise, continuous fluid management across thousands of micro-channels in the bipolar plate.",
    criticality: "Water flooding reduces fuel cell output by 30–50% and can permanently damage the membrane. Membrane dehydration causes irreversible performance degradation. Current water management relies on gas flow patterns and wicking materials that provide inconsistent results across the cell area. This is the #1 operational challenge limiting PEM fuel cell reliability and lifetime.",
    impact: "Surnetics coatings on bipolar plate micro-channels can directionally move water away from the cathode catalyst layer while maintaining membrane hydration — with zero parasitic power. This provides cell-wide uniform water management that current flow field designs cannot achieve, potentially extending fuel cell stack lifetime by 2–3x.",
    details: [
      "Directional water removal from cathode prevents flooding without consuming stack power",
      "Maintains optimal membrane hydration across the full cell area for peak proton conductivity",
      "Could extend PEM fuel cell stack lifetime from 5,000 hours to 15,000+ hours",
      "Eliminates the need for external humidification systems — reducing balance-of-plant cost by 15–20%",
      "Compatible with graphite and metal bipolar plate substrates",
      "Applicable to automotive (Toyota Mirai, Hyundai NEXO class), stationary, and portable fuel cells",
    ],
  },
  {
    title: "Lithium-Ion Battery Thermal Management",
    tagline: "Cell-level and pack-level thermal management for EV batteries, grid storage, and consumer electronics — where temperature uniformity determines safety and longevity.",
    fluidRole: "Coolant must flow through channels between battery cells or around cell modules, maintaining every cell within a 2–3°C temperature window. Hot spots cause accelerated degradation. Extreme hot spots cause thermal runaway — the catastrophic failure mode responsible for EV battery fires.",
    criticality: "Battery cell life is halved for every 10°C increase in operating temperature. A 5°C temperature gradient across a battery pack means some cells age twice as fast as others — limiting pack life to the weakest cell. Current pump-based cooling adds 3–5% parasitic load to the battery, reducing effective range. Pump failure in an EV battery is a safety-critical event.",
    impact: "Passive gradient-driven cooling eliminates the parasitic power draw of battery cooling pumps — recovering 3–5% of battery capacity as usable range. No pump means no pump failure — removing a safety-critical failure mode from the battery system. Uniform passive flow provides inherently even temperature distribution across the pack.",
    details: [
      "Recovers 3–5% of battery capacity currently lost to cooling pump parasitic draw",
      "Eliminates pump failure — a safety-critical failure mode in EV battery systems",
      "Provides inherently uniform temperature distribution without active flow balancing",
      "Could extend battery pack life by 20–30% through improved thermal uniformity",
      "Compatible with glycol-water, dielectric fluids, and direct immersion cooling architectures",
      "Applicable to EVs, grid storage (Tesla Megapack class), and high-discharge-rate applications",
    ],
  },
  {
    title: "Redox Flow Battery Electrolyte Management",
    tagline: "Grid-scale energy storage using liquid electrolytes pumped through electrochemical cells — where pump energy consumption directly reduces round-trip efficiency.",
    fluidRole: "Liquid electrolyte (typically vanadium or iron-based) must circulate from external tanks through the electrochemical cell stack, react at the electrodes, and return to the tanks. Current systems use large circulation pumps consuming 5–15% of the stored energy — directly reducing round-trip efficiency.",
    criticality: "Round-trip efficiency is the key economic metric for grid storage. Current vanadium flow batteries achieve 65–75% efficiency — with 5–15% lost to pump parasitic load. Improving efficiency by even 5 percentage points changes the economics of grid storage. Pump maintenance is also a major operational cost for utility-scale installations expected to operate for 20+ years.",
    impact: "Passive gradient-driven electrolyte flow could reduce or eliminate the 5–15% parasitic pump loss — pushing flow battery round-trip efficiency from 70% toward 80–85%. Over a 20-year utility installation lifetime with zero pump maintenance, the total cost savings could be transformative for flow battery economics.",
    details: [
      "Could improve round-trip efficiency from 70% to 80–85% by eliminating pump parasitic losses",
      "Zero maintenance electrolyte circulation over 20+ year utility installation lifetimes",
      "Eliminates the largest single parasitic load in flow battery systems",
      "Compatible with vanadium, iron-chromium, zinc-bromine, and organic electrolyte chemistries",
      "No pump noise — advantageous for residential and commercial behind-the-meter installations",
      "Addresses the #1 economic disadvantage of flow batteries vs. lithium-ion for grid storage",
    ],
  },
  {
    title: "Solar Panel Anti-Soiling & Water Management",
    tagline: "Self-cleaning and condensation management on photovoltaic panels — where soiling reduces output by 5–30% depending on environment.",
    fluidRole: "Dust, pollen, bird droppings, and mineral deposits accumulate on solar panel surfaces, reducing light transmission. Water condensation and dew cycles create mud that further adheres soiling. Current solutions include robotic cleaning systems, manual washing, and hydrophobic coatings that degrade within 1–2 years.",
    criticality: "Soiling losses average 5–7% globally but reach 25–30% in desert environments (Middle East, North Africa, India, Australia) where solar irradiance is highest. A 600MW solar farm losing 10% to soiling loses $15–20M in annual revenue. Manual and robotic cleaning costs $5–15/panel/year and consumes scarce water in desert environments.",
    impact: "Surface energy gradient coatings on panel glass could directionally move water droplets across the surface — carrying dust and debris to the edge for removal. This is self-cleaning without water jets, robots, or power. For panels in humid environments, gradient coatings could manage condensation to prevent dew-cycle soiling entirely.",
    details: [
      "Self-cleaning panel surfaces that directionally move water and debris without power or robotics",
      "Could recover 5–30% soiling losses worth $15–20M annually on a 600MW farm",
      "Eliminates water consumption for panel cleaning in water-scarce desert environments",
      "Gradient coatings on glass are durable — significantly longer-lasting than hydrophobic coatings",
      "Manages dew-cycle condensation to prevent mud formation from overnight humidity",
      "Applicable to utility-scale, commercial rooftop, and residential solar installations",
    ],
  },
  {
    title: "Electrolyzer Membrane Hydration",
    tagline: "PEM and AEM electrolyzers for green hydrogen production — where membrane hydration directly determines hydrogen production efficiency and stack lifetime.",
    fluidRole: "Electrolyzer membranes must maintain precise hydration levels for optimal proton or anion conductivity. Too dry and resistance increases, reducing efficiency. Too wet and gas crossover increases, producing impure hydrogen and creating safety risks. Water must be distributed uniformly across the membrane active area.",
    criticality: "Green hydrogen is projected to be a $500B+ market by 2050. Electrolyzer efficiency and lifetime are the two critical cost drivers. Membrane dehydration at high current densities reduces efficiency by 10–20%. Non-uniform hydration causes localized membrane degradation that limits stack lifetime. Current water management relies on circulation pumps consuming 2–5% of system power.",
    impact: "Passive gradient-driven water distribution across electrolyzer membranes could maintain optimal hydration uniformity without parasitic pump power. This addresses both efficiency (eliminating pump load) and lifetime (preventing localized dehydration damage). For a technology that will produce a significant fraction of the world's energy carrier, even small efficiency gains have enormous cumulative impact.",
    details: [
      "Uniform membrane hydration without circulation pumps — eliminating 2–5% parasitic power loss",
      "Prevents localized membrane dehydration that limits electrolyzer stack lifetime",
      "Could improve overall electrolyzer system efficiency by 3–7%",
      "Compatible with PEM (Nafion-based) and AEM (anion exchange) membrane architectures",
      "Reduces balance-of-plant complexity — fewer pumps, valves, and sensors",
      "Addresses the two critical cost drivers in green hydrogen: efficiency and stack lifetime",
    ],
  },
  {
    title: "Solid-State Battery Electrolyte Interfaces",
    tagline: "Next-generation solid-state batteries for EVs and consumer electronics — where the solid electrolyte-electrode interface is the critical performance bottleneck.",
    fluidRole: "During manufacturing, liquid electrolyte precursors must infiltrate the porous electrode structures uniformly before solidification. During operation, some solid-state designs incorporate thin liquid interlayers at the electrolyte-electrode interface to reduce impedance. Precise control of these micro-scale liquid films is essential for cell performance.",
    criticality: "Solid-state batteries promise 2x energy density over lithium-ion, but interfacial impedance limits real-world performance to 50–70% of theoretical. The electrode-electrolyte interface quality is determined by how uniformly the liquid precursor wets the electrode surface during manufacturing. Non-uniform wetting creates dead zones that reduce capacity and create stress concentrators that cause cracking.",
    impact: "Gradient coatings on electrode surfaces could ensure uniform liquid precursor infiltration during manufacturing — eliminating dead zones and reducing interfacial impedance. For designs using liquid interlayers, gradient coatings could maintain the ultra-thin liquid film at optimal thickness. This manufacturing and operational improvement could help solid-state batteries finally achieve their theoretical performance advantage.",
    details: [
      "Ensures uniform liquid precursor infiltration during solid-state battery manufacturing",
      "Eliminates dead zones that reduce capacity and cause mechanical failures",
      "Could close the gap between theoretical and actual solid-state battery performance (50–70% → 85–95%)",
      "Maintains optimal liquid interlayer thickness at electrolyte-electrode interfaces",
      "Compatible with sulfide, oxide, and polymer solid electrolyte systems",
      "Addresses the #1 manufacturing challenge limiting solid-state battery commercialization",
    ],
  },
];

export default function EnergyStoragePage() {
  return (
    <>
      <NavBar />
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/markets/" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white/80 transition-colors mb-8"><ArrowLeft size={14} /> All Markets</Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#0066FF]/20 flex items-center justify-center text-[#60A5FA]"><Battery size={28} /></div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">Market</p>
          </div>
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6 max-w-3xl">Energy Storage &amp; Generation</h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">Directional passive fluid management in fuel cells, batteries, and solar panels — no parasitic power draw.</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-full bg-red-400" /><p className="text-red-500 text-xs font-bold uppercase tracking-wide">The Problem</p></div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">Energy Devices Are Sensitive to Liquid Management</h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>Electrochemical energy devices depend critically on liquid management — water removal in fuel cells, electrolyte distribution in flow batteries, anti-icing and water management in solar panels.</p>
              <p>Conventional solutions require parasitic pumps that consume energy from the device they are meant to serve.</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-full bg-[#0066FF]" /><p className="text-[#0066FF] text-xs font-bold uppercase tracking-wide">The Surnetics Solution</p></div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">Passive Directional Fluid Control With No Power Draw</h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>Gradient coatings enable passive directional fluid management in energy devices — moving water, electrolyte, or fuel precisely where it needs to go without consuming any device power.</p>
              <p>No pumps, no moving parts, no maintenance.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper gray>
        <div className="max-w-2xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Competitive Advantages</p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Why This Matters for Energy</h2>
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

      <SectionWrapper>
        <div className="max-w-3xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Applications Deep Dive</p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">How Fluid Control Shapes Every Energy Application</h2>
          <p className="text-[#8892A4] text-base leading-relaxed">Click any application to explore how precise fluid management determines energy system performance — and how Surnetics technology transforms what is possible.</p>
        </div>
        <ApplicationAccordion items={deepDiveApplications} />
      </SectionWrapper>

      <SectionWrapper gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Full Application Scope</p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Where It Applies</h2>
            <p className="text-[#8892A4] text-base leading-relaxed">Anywhere energy devices require controlled fluid movement — water removal, electrolyte transport, or thermal regulation — without consuming device power.</p>
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

      <SectionWrapper dark>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-5">Interested in Energy Licensing?</h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">We are actively seeking licensing partners and co-development agreements in energy storage and generation.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200">Start a Conversation <ArrowRight size={16} /></Link>
            <Link href="/technology/" className="inline-flex items-center gap-2 px-7 py-3.5 rounded border border-white/20 text-white font-semibold text-sm hover:border-white/50 transition-colors duration-200">View Technology</Link>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper gray>
        <div className="max-w-2xl mb-8"><p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Explore Other Markets</p></div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: "IVD & Diagnostics", href: "/markets/ivd-diagnostics/" },
            { label: "Electronics Cooling", href: "/markets/electronics-cooling/" },
            { label: "Implantable Devices", href: "/markets/implantable-devices/" },
            { label: "Drug Delivery", href: "/markets/drug-delivery/" },
            { label: "Aerospace & Defense", href: "/markets/aerospace-defense/" },
          ].map((m) => (
            <Link key={m.href} href={m.href} className="px-4 py-3 rounded-lg border border-[#E2E8F0] text-center text-[#2D3748] text-xs font-semibold hover:border-[#0066FF] hover:text-[#0066FF] transition-colors duration-200">{m.label}</Link>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
