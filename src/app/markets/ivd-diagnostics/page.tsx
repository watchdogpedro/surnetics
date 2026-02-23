import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ApplicationAccordion from "@/components/ApplicationAccordion";
import type { ApplicationItem } from "@/components/ApplicationAccordion";
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

const deepDiveApplications: ApplicationItem[] = [
  {
    title: "Lateral Flow Immunoassays",
    tagline: "The most widely deployed rapid diagnostic format — pregnancy tests, COVID antigen tests, cardiac markers.",
    fluidRole: "Sample fluid (blood, saliva, urine) must wick through a nitrocellulose membrane at a precise, consistent rate to bind with detection antibodies. Too fast and sensitivity drops. Too slow and the test takes too long or gives false results.",
    criticality: "Flow rate directly determines test sensitivity and specificity. Inconsistent flow is the #1 cause of false negatives in lateral flow assays. Current wicking-based flow control is crude — once the membrane is manufactured, flow rate cannot be tuned.",
    impact: "Surnetics coatings replace passive wicking with engineered flow. Each channel can be tuned to an exact velocity after manufacturing. This enables multi-analyte tests on a single strip with different flow rates per channel — impossible with conventional lateral flow.",
    details: [
      "Replaces nitrocellulose wicking with precision-engineered capillary flow",
      "Enables multi-analyte panels on a single test strip (e.g., flu A + flu B + COVID on one device)",
      "Flow rate can be adjusted post-manufacturing by changing the coating formulation",
      "Eliminates the batch-to-batch variability inherent in membrane-based wicking",
      "Applicable to blood, saliva, urine, and nasal swab sample types",
    ],
  },
  {
    title: "Molecular Diagnostics (PCR & Amplification)",
    tagline: "Nucleic acid testing for infectious disease, genetic screening, and cancer detection — the gold standard in diagnostic accuracy.",
    fluidRole: "PCR cartridges must move a sample through multiple temperature zones and reagent mixing chambers in exact sequence and at precise volumes. Current systems use syringe pumps or pneumatic actuators — the most expensive components in the system.",
    criticality: "If fluid delivery is off by even microliters, amplification fails or gives quantitatively inaccurate results. The pumps and actuators required for this precision make cartridge-reader systems cost $5,000–$50,000+, limiting deployment to central labs.",
    impact: "Passive gradient flow can move precise volumes through sequential chambers without any pump. This could collapse the cost of a molecular diagnostic reader from tens of thousands of dollars to hundreds — enabling true point-of-care molecular testing.",
    details: [
      "Eliminates syringe pumps and pneumatic actuators from cartridge-reader systems",
      "Passive sequential delivery through lysis, amplification, and detection chambers",
      "Could reduce molecular diagnostic reader cost from $15,000+ to under $500",
      "Enables field-deployable molecular testing for infectious disease surveillance",
      "Compatible with isothermal amplification methods (LAMP, RPA) for simplified thermal design",
    ],
  },
  {
    title: "Blood Chemistry & Metabolic Panels",
    tagline: "Comprehensive metabolic panels, liver function, kidney function, electrolytes — currently requiring centralized lab analyzers.",
    fluidRole: "Whole blood must be separated into plasma, then routed to multiple reagent pads simultaneously — each measuring a different analyte. Current portable analyzers use complex pump-and-valve manifolds to split and direct the sample.",
    criticality: "Precise volume delivery to each reagent pad is essential for quantitative accuracy. Over- or under-filling a chamber by even 10% produces clinically misleading results. The fluid handling system is the complexity bottleneck preventing miniaturization.",
    impact: "A single Surnetics-coated channel layer can split a blood sample into 8–12 parallel paths, each at a different calibrated flow rate, with no pump or valve. This enables a complete metabolic panel on a credit-card-sized cartridge read by a handheld device.",
    details: [
      "Parallel multi-channel flow splitting from a single sample input — no manifold required",
      "Each channel independently calibrated to deliver the exact volume for its reagent pad",
      "Enables complete basic or comprehensive metabolic panels on a disposable cartridge",
      "Handheld reader replaces $100,000+ benchtop analyzers for routine blood chemistry",
      "Critical for emergency departments, ambulances, rural clinics, and military field medicine",
    ],
  },
  {
    title: "Infectious Disease Rapid Tests",
    tagline: "Malaria, HIV, tuberculosis, dengue, hepatitis — the highest-volume diagnostic need in global health.",
    fluidRole: "Sample must flow through capture and detection zones at controlled speed to achieve adequate binding time with target antigens or antibodies. In resource-limited settings, the device must work with no electricity, no refrigeration, and no trained operator.",
    criticality: "In low-resource settings, any requirement for external power, pumps, or reader hardware makes a diagnostic test unusable. The device must be entirely self-contained. Current lateral flow tests work but lack sensitivity for early-stage infections where treatment intervention is most effective.",
    impact: "Surnetics enables a new class of self-powered diagnostic devices with flow precision far beyond conventional lateral flow — achieving near-lab sensitivity in a format that requires nothing but the sample. Potential to detect infections days earlier than current rapid tests.",
    details: [
      "Fully self-contained — no power, no reader, no cold chain required",
      "Engineered flow rates increase antibody-antigen binding time for higher sensitivity",
      "Multi-stage sample processing (lysis, mixing, detection) on a single passive device",
      "Applicable to finger-prick blood, oral fluid, and urine samples",
      "WHO ASSURED criteria alignment: Affordable, Sensitive, Specific, User-friendly, Rapid, Equipment-free, Deliverable",
    ],
  },
  {
    title: "Continuous Glucose & Biomarker Monitoring",
    tagline: "Wearable biosensors for real-time glucose, lactate, cortisol, and other biomarker tracking.",
    fluidRole: "Interstitial fluid or sweat must be continuously drawn into a microfluidic sensing chamber, measured, and flushed — creating a real-time monitoring loop. Current wearable biosensors rely on osmotic or electrochemical pumping that degrades over days.",
    criticality: "Continuous monitoring requires continuous fluid flow. If flow stops or becomes irregular, readings become unreliable. Sensor fouling from stagnant fluid is the primary failure mode in wearable biosensors. Current solutions last 10–14 days before flow degradation forces replacement.",
    impact: "Surnetics coatings could maintain consistent passive flow through wearable sensor chambers for the full device lifetime — extending sensor accuracy duration and eliminating the need for on-board micro-pumps that drain battery and add bulk.",
    details: [
      "Maintains consistent flow through wearable sensing chambers without micro-pumps",
      "Reduces sensor fouling by preventing fluid stagnation in the measurement chamber",
      "Could extend continuous glucose monitor accuracy from 10 days to 14+ days",
      "Eliminates battery drain from on-board fluid management — extending wearable device life",
      "Applicable to interstitial fluid, sweat, and tear-based biosensing platforms",
    ],
  },
  {
    title: "Microarray & High-Throughput Screening",
    tagline: "Genomic microarrays, protein arrays, and drug screening platforms processing thousands of samples.",
    fluidRole: "Reagents and samples must be delivered to thousands of individual reaction spots on an array surface with uniform volume and timing. Current systems use robotic liquid handlers costing $50,000–$500,000.",
    criticality: "Non-uniform fluid delivery across an array produces spot-to-spot variability that corrupts data. Robotic liquid handlers are precise but expensive, slow, and require dedicated lab space and trained operators. Throughput is limited by the mechanical speed of the handler.",
    impact: "Passive gradient-driven flow across array surfaces could deliver uniform reagent volumes to thousands of spots simultaneously — no robotics required. This could dramatically reduce the cost and size of array-based screening platforms.",
    details: [
      "Uniform passive reagent delivery across array surfaces — no robotic handler required",
      "Thousands of reaction spots served simultaneously by gradient-driven flow",
      "Could reduce array platform cost from $100,000+ to under $10,000",
      "Enables portable array-based screening for field genomics and proteomics",
      "Compatible with DNA, RNA, protein, and small-molecule array formats",
    ],
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

      {/* Problem / Solution */}
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

      {/* Applications Deep Dive */}
      <SectionWrapper>
        <div className="max-w-3xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
            Applications Deep Dive
          </p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            How Fluid Control Shapes Every IVD Application
          </h2>
          <p className="text-[#8892A4] text-base leading-relaxed">
            Click any application to explore how precise fluid management
            determines diagnostic performance — and how Surnetics technology
            transforms what is possible.
          </p>
        </div>
        <ApplicationAccordion items={deepDiveApplications} />
      </SectionWrapper>

      {/* Applications List */}
      <SectionWrapper gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
              Full Application Scope
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
                className="flex items-center gap-3 p-4 bg-white rounded-lg border border-[#E2E8F0]"
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
