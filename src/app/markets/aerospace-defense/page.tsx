import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ApplicationAccordion from "@/components/ApplicationAccordion";
import type { ApplicationItem } from "@/components/ApplicationAccordion";
import { Rocket, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Aerospace & Defense | Zero-Failure Passive Fluid Management",
  description: "No moving parts. No power requirements. Inherently reliable in high-vibration, vacuum, and zero-gravity environments. Surnetics Surface Energy Gradient Coating technology for aerospace and defense.",
  keywords: ["aerospace microfluidics","satellite thermal management","space fluid management","defense microfluidic technology","zero gravity fluid control","passive aerospace cooling","military microfluidics licensing"],
};

const applications = [
  "Satellite thermal management systems",
  "UAV and drone fuel systems",
  "Defense sensor platforms",
  "Space life science instruments",
  "Spacecraft fluid loops",
  "High-altitude platform systems",
];

const advantages = [
  { title: "Zero Moving Parts", description: "No pumps, valves, or mechanical components — eliminating the primary failure mode in aerospace fluid systems." },
  { title: "Zero Power Requirements", description: "Passive flow requires no electrical power, preserving critical power budgets on satellites, UAVs, and remote platforms." },
  { title: "Vibration & Orientation Immune", description: "Surface-driven flow is unaffected by vibration, g-forces, or orientation changes — performing identically in any attitude." },
  { title: "Vacuum & Zero-G Compatible", description: "Capillary-driven flow operates in vacuum and zero-gravity environments where conventional pumps cannot function reliably." },
];

const deepDiveApplications: ApplicationItem[] = [
  {
    title: "Satellite Thermal Management",
    tagline: "Heat dissipation and temperature regulation for communication, Earth observation, and navigation satellites operating in the extreme thermal environment of space.",
    fluidRole: "Coolant must circulate between heat-generating electronics and radiator panels to reject waste heat to space. Satellites experience temperature swings from -150°C in shadow to +150°C in direct sunlight. The thermal management loop must function continuously for 15–20 year mission lifetimes with zero maintenance access.",
    criticality: "Satellite thermal management failure is the #2 cause of satellite mission loss (after power system failure). Current mechanical pumped loops require redundant pumps because a single pump failure ends the mission. Redundant pumps add 5–10 kg of mass — at $10,000–$50,000 per kg to orbit, this represents $50K–$500K in launch cost for backup hardware that hopefully never activates.",
    impact: "Passive gradient-driven thermal loops eliminate the pump entirely — removing the #1 mechanical failure risk and saving 5–10 kg of redundant pump mass per satellite. With no moving parts, the thermal system has no wear-out mechanism over the full 15–20 year mission. This is a paradigm shift from 'redundant pumps hoping neither fails' to 'no pump to fail.'",
    details: [
      "Eliminates the #1 mechanical failure risk in satellite thermal management systems",
      "Saves 5–10 kg of redundant pump mass — worth $50K–$500K in launch costs",
      "No wear-out mechanism over 15–20 year satellite mission lifetimes",
      "Functions in vacuum, zero-gravity, and -150°C to +150°C temperature extremes",
      "Compatible with ammonia, propylene, and specialty space-rated coolants",
      "Applicable to GEO communications, LEO constellations (Starlink class), and deep space missions",
    ],
  },
  {
    title: "Zero-Gravity Propellant Management",
    tagline: "Fuel and oxidizer positioning in spacecraft tanks during zero-gravity coast phases — where liquid settles randomly without gravity to hold it in place.",
    fluidRole: "In zero gravity, propellant floats freely inside tanks, forming random blobs that may not cover the tank outlet when an engine burn is needed. Current solutions use surface tension tanks (metal vanes and screens) that are expensive, heavy, and only partially effective. Ullage motors burn small amounts of propellant just to settle the main propellant — wasting fuel.",
    criticality: "If propellant is not positioned over the tank outlet at ignition, the engine ingests gas instead of liquid — causing a hard start, combustion instability, or engine failure. This is a mission-critical risk for every spacecraft that performs multiple burns. Current propellant management devices add significant mass and cost while providing imperfect liquid positioning.",
    impact: "Gradient coatings on the interior of propellant tanks could continuously direct liquid toward the outlet — maintaining propellant positioning without ullage burns, heavy metal vanes, or screen devices. This provides continuous, passive propellant settling with zero mass penalty beyond the coating itself and zero propellant waste.",
    details: [
      "Continuous passive propellant positioning toward tank outlet in zero gravity",
      "Eliminates ullage motor burns that waste propellant for liquid settling",
      "Replaces heavy metal vane and screen propellant management devices",
      "Near-zero mass penalty — the coating adds grams, not kilograms",
      "Applicable to hydrazine, MMH/NTO, LOX/LH2, and methane propellant systems",
      "Critical for deep-space missions where ullage propellant waste reduces mission delta-V",
    ],
  },
  {
    title: "UAV & Drone Fuel Distribution",
    tagline: "Fuel management for long-endurance military and commercial UAVs operating in extreme attitude and vibration environments.",
    fluidRole: "Fuel must flow from wing tanks to the engine feed system reliably during aggressive maneuvers, steep climbs/dives, and inverted flight. Small UAVs have minimal space and weight budget for fuel pumps. Current small UAV fuel systems use gravity feed with check valves — limiting operational flight envelope.",
    criticality: "Fuel starvation during aggressive maneuvers is a leading cause of UAV loss-of-vehicle events. For military UAVs, the ability to fly the full flight envelope without fuel management limitations directly affects mission capability. For commercial delivery drones, fuel reliability determines FAA certification status. Adding redundant fuel pumps to small UAVs is impractical due to weight and power constraints.",
    impact: "Passive gradient-driven fuel flow provides continuous, orientation-independent fuel delivery from wing tanks to the engine. No pump weight, no pump power draw, no pump failure risk. The UAV can fly any attitude, any maneuver, with reliable fuel delivery — expanding the operational envelope while reducing system weight and complexity.",
    details: [
      "Orientation-independent fuel delivery during any flight attitude or maneuver",
      "Zero weight penalty for fuel management — critical for small UAV payload capacity",
      "Zero power draw — preserves battery/generator capacity for mission systems",
      "Eliminates fuel starvation risk during aggressive maneuvers",
      "Applicable to fixed-wing, rotary-wing, and hybrid VTOL UAV platforms",
      "Supports FAA certification by eliminating mechanical fuel system failure modes",
    ],
  },
  {
    title: "Spacecraft Life Support Fluid Recycling",
    tagline: "Water recovery, air humidity management, and waste fluid processing for crewed spacecraft and space stations.",
    fluidRole: "Life support systems must continuously process wastewater (urine, humidity condensate, hygiene water), remove contaminants, and return potable water — all in zero gravity where conventional liquid-gas separation is impossible without centrifuges or membranes. Current ISS water recovery uses a complex system of pumps, centrifugal separators, and catalytic reactors.",
    criticality: "The ISS Water Recovery System recovers ~93% of water but requires constant maintenance — crew members spend significant hours per week on WRS maintenance. For Mars missions (3+ year duration), water recovery must approach 98%+ with minimal maintenance and spare parts. Current pump-based systems are too maintenance-intensive for deep space missions.",
    impact: "Passive gradient-driven fluid processing could move wastewater through filtration and treatment stages without mechanical pumps. In zero gravity, where conventional gravity-driven separation doesn't work, surface energy gradients provide the only passive driving force for directional fluid movement. This could dramatically simplify life support systems for deep space exploration.",
    details: [
      "Passive fluid movement through water treatment stages without mechanical pumps",
      "The only passive driving force for directional fluid movement in zero gravity",
      "Could reduce life support system maintenance from hours/week to minutes/week",
      "Enables higher water recovery rates (98%+) needed for Mars-class missions",
      "Compatible with membrane filtration, ion exchange, and catalytic oxidation stages",
      "Applicable to ISS upgrades, Lunar Gateway, Mars transit vehicles, and commercial space stations",
    ],
  },
  {
    title: "Hypersonic Vehicle Thermal Protection",
    tagline: "Active cooling for hypersonic missile and aircraft leading edges experiencing temperatures above 2,000°C during sustained Mach 5+ flight.",
    fluidRole: "Coolant must flow through micro-channels embedded in leading edge structures, absorbing extreme heat loads and transporting thermal energy to heat exchangers or fuel heat sinks. Flow must be continuous and uniform across the leading edge surface — any flow interruption causes immediate structural failure from localized overheating.",
    criticality: "Hypersonic thermal protection is the #1 technical challenge limiting sustained hypersonic flight. Passive materials (ceramic composites, ablatives) degrade during flight. Active cooling is required for sustained Mach 5+ operation, but pumps must survive the same extreme vibration and acceleration environment. Pump failure during hypersonic flight is catastrophic and unrecoverable.",
    impact: "Passive gradient-driven cooling in leading edge micro-channels eliminates the pump from a system where pump failure is catastrophic. Surface-driven flow is inherently immune to the extreme vibration and g-forces of hypersonic flight. This addresses the fundamental reliability concern that limits current active cooling approaches for hypersonic vehicles.",
    details: [
      "Eliminates pumps from a system where pump failure is immediately catastrophic",
      "Immune to extreme vibration and g-forces during Mach 5+ flight",
      "Provides uniform cooling across leading edge surfaces preventing localized hot spots",
      "Compatible with refractory metal and ceramic matrix composite leading edge structures",
      "Applicable to hypersonic missiles, hypersonic cruise vehicles, and scramjet engine components",
      "Addresses the #1 technical barrier to sustained hypersonic flight capability",
    ],
  },
  {
    title: "Military Sensor Platform Cooling",
    tagline: "Thermal management for infrared sensors, radar arrays, and electronic warfare systems on ships, aircraft, and ground vehicles operating in extreme environments.",
    fluidRole: "High-power sensor electronics (IR focal planes, AESA radar T/R modules, EW receivers) must be cooled to specific operating temperatures for optimal sensitivity. IR sensors require cryogenic cooling to -200°C. Radar modules generate extreme heat densities. Coolant flow must be vibration-isolated from the sensor to prevent detection signature and measurement degradation.",
    criticality: "Sensor performance degrades linearly with temperature in IR and radar systems. A 1°C reduction in IR focal plane temperature can improve detection range by 5–10%. Current cooling systems use Stirling coolers and pump loops that introduce vibration (detectable by adversaries) and consume significant power from the platform's electrical budget. Pump failures in combat degrade situational awareness.",
    impact: "Passive gradient-driven cooling provides vibration-free thermal management for sensitive military sensors. Zero vibration signature means the cooling system doesn't contribute to the platform's detectability. Zero power draw preserves the platform's electrical budget for sensors and communications. No mechanical failure mode means cooling is maintained throughout extended combat operations.",
    details: [
      "Vibration-free cooling prevents detection signature from cooling system mechanical noise",
      "Zero power consumption preserves platform electrical budget for sensors and communications",
      "No mechanical failure mode — cooling maintained throughout extended combat operations",
      "Compatible with cryogenic temperature ranges required for IR focal plane arrays",
      "Reduces platform acoustic and vibration signatures for stealth applications",
      "Applicable to shipboard, airborne, ground vehicle, and man-portable sensor systems",
    ],
  },
];

export default function AerospaceDefensePage() {
  return (
    <>
      <NavBar />
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/markets/" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white/80 transition-colors mb-8"><ArrowLeft size={14} /> All Markets</Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#0066FF]/20 flex items-center justify-center text-[#60A5FA]"><Rocket size={28} /></div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">Market</p>
          </div>
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6 max-w-3xl">Aerospace &amp; Defense</h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">No moving parts. No power requirements. Inherently reliable in high-vibration, vacuum, and zero-gravity environments.</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-full bg-red-400" /><p className="text-red-500 text-xs font-bold uppercase tracking-wide">The Problem</p></div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">Extreme Environments Demand Zero-Failure Fluid Management</h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>Aerospace and defense fluid systems must perform in high-vibration, vacuum, extreme temperature, and zero-gravity environments where conventional pump-based systems fail or require impractical maintenance.</p>
              <p>Any mechanical component is a potential failure point in these applications.</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-full bg-[#0066FF]" /><p className="text-[#0066FF] text-xs font-bold uppercase tracking-wide">The Surnetics Solution</p></div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">No Mechanical Components — Inherently Reliable</h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>Passive surface-driven flow has no moving parts, requires no power, and is inherently immune to vibration, orientation, and vacuum environments.</p>
              <p>This represents a paradigm shift for fluid management in space, satellite, and defense applications.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper gray>
        <div className="max-w-2xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Competitive Advantages</p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Why This Matters for Aerospace</h2>
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
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">How Fluid Control Shapes Every Aerospace Application</h2>
          <p className="text-[#8892A4] text-base leading-relaxed">Click any application to explore how precise fluid management determines mission success — and how Surnetics technology transforms what is possible.</p>
        </div>
        <ApplicationAccordion items={deepDiveApplications} />
      </SectionWrapper>

      <SectionWrapper gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Full Application Scope</p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Where It Applies</h2>
            <p className="text-[#8892A4] text-base leading-relaxed">Any aerospace or defense platform that requires fluid management in environments where mechanical systems are impractical, unreliable, or prohibited.</p>
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
          <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-5">Interested in Aerospace Licensing?</h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">We are actively seeking licensing partners and co-development agreements in aerospace and defense applications.</p>
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
            { label: "Energy Storage", href: "/markets/energy-storage/" },
          ].map((m) => (
            <Link key={m.href} href={m.href} className="px-4 py-3 rounded-lg border border-[#E2E8F0] text-center text-[#2D3748] text-xs font-semibold hover:border-[#0066FF] hover:text-[#0066FF] transition-colors duration-200">{m.label}</Link>
          ))}
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
