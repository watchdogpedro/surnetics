import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ApplicationAccordion from "@/components/ApplicationAccordion";
import type { ApplicationItem } from "@/components/ApplicationAccordion";
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
    description: "Passive flow eliminates the need for batteries or external power connections for fluid management inside the body.",
  },
  {
    title: "Smaller Form Factor",
    description: "Removing pumps and actuators dramatically reduces device size — critical for implantable applications where every millimeter matters.",
  },
  {
    title: "Longer Device Life",
    description: "No mechanical wear components means longer operating life and reduced revision surgery risk for patients.",
  },
  {
    title: "Biocompatible Substrates",
    description: "Gradient coatings are compatible with biocompatible materials including silicone rubber, medical-grade plastics, and metals.",
  },
];

const deepDiveApplications: ApplicationItem[] = [
  {
    title: "Implantable Insulin Delivery",
    tagline: "Continuous subcutaneous insulin delivery for Type 1 and advanced Type 2 diabetes — replacing external pump systems with fully implanted devices.",
    fluidRole: "Insulin must be metered from an internal reservoir through micro-channels to a subcutaneous delivery site at precisely controlled basal and bolus rates. Current implantable pumps use electromechanical micro-pumps that consume battery, generate heat, and wear out mechanically.",
    criticality: "Insulin dosing errors of even 10% can cause life-threatening hypoglycemia or dangerous hyperglycemia. The pump is the most failure-prone component in implantable insulin systems. Pump failure inside the body requires surgical revision — a $30,000+ procedure with significant patient risk.",
    impact: "Surnetics coatings enable precisely metered insulin delivery with no mechanical pump. Basal rate is determined by the coating gradient. This eliminates the primary failure mode, extends device lifetime from 5–7 years to potentially 10+ years, and dramatically reduces the need for revision surgery.",
    details: [
      "Eliminates the electromechanical pump — the #1 failure mode in implantable insulin systems",
      "Basal insulin delivery rate is set by the coating design — no moving parts to wear out",
      "Could extend implant lifetime from 5–7 years to 10+ years without surgical revision",
      "Reduces device size by removing pump, motor, and associated battery capacity",
      "Compatible with concentrated insulin formulations (U-200, U-500) for smaller reservoir size",
      "Applicable to both peritoneal and subcutaneous delivery architectures",
    ],
  },
  {
    title: "Implantable Continuous Glucose Monitors",
    tagline: "Long-term implanted glucose sensors eliminating the need for frequent external sensor replacements.",
    fluidRole: "Interstitial fluid must continuously flow across the sensor surface to provide real-time glucose readings. Biofouling and fibrotic encapsulation progressively block fluid access to the sensor, degrading accuracy over weeks to months.",
    criticality: "Current CGMs last 10–14 days before sensor fouling requires replacement. Fully implantable CGMs (like Eversense) last 90–180 days but still degrade due to fluid stagnation around the sensor. Maintaining consistent fluid flow across the sensing surface is the fundamental challenge limiting implantable CGM longevity.",
    impact: "Passive gradient flow across the sensor surface continuously refreshes the interstitial fluid sample, reducing biofouling accumulation and extending sensor accuracy. This could push implantable CGM lifetime from 6 months toward 1–2+ years — transforming the economics and patient experience of continuous glucose monitoring.",
    details: [
      "Continuous passive fluid refresh across the sensor surface reduces biofouling",
      "Could extend implantable CGM lifetime from 6 months to 1–2+ years",
      "No battery drain from fluid management — preserving power for sensing and telemetry",
      "Reduces the frequency of sensor replacement procedures for patients",
      "Compatible with enzymatic (glucose oxidase) and non-enzymatic sensing approaches",
      "Applicable to glucose, lactate, pH, and multi-analyte implantable sensors",
    ],
  },
  {
    title: "Neural Interface Cooling & Fluid Management",
    tagline: "Brain-computer interfaces and deep brain stimulation devices requiring thermal management and fluid control in neural tissue.",
    fluidRole: "Active neural implants generate heat from stimulation electronics that must be dissipated to prevent thermal damage to surrounding neural tissue. Simultaneously, cerebrospinal fluid dynamics around the implant affect device stability and long-term biocompatibility.",
    criticality: "Neural tissue is extremely temperature-sensitive — even a 1°C rise above 37°C causes protein denaturation and cell death. Current neural implants are power-limited specifically because they cannot dissipate heat fast enough. Better thermal management would enable more stimulation channels, higher data rates, and more capable neural interfaces.",
    impact: "Passive micro-channel cooling integrated into the implant substrate could dissipate waste heat from stimulation electronics without adding power draw or mechanical complexity. This could enable next-generation neural interfaces with 10x more channels while staying within the thermal safety envelope for neural tissue.",
    details: [
      "Passive heat dissipation prevents thermal damage to surrounding neural tissue",
      "No additional power draw — critical for battery-limited neural implants",
      "Could enable 10x more stimulation/recording channels within thermal safety limits",
      "No vibration from cooling system — vibration is contraindicated in neural applications",
      "Compatible with platinum, titanium, and polymer neural implant substrates",
      "Applicable to cortical implants, deep brain stimulators, and spinal cord stimulators",
    ],
  },
  {
    title: "Implantable Chemotherapy Delivery",
    tagline: "Localized tumor treatment delivering chemotherapy agents directly to solid tumors — maximizing local concentration while minimizing systemic toxicity.",
    fluidRole: "Chemotherapy agents must be released from an implanted reservoir at a precisely controlled rate over days to weeks. The drug must penetrate the tumor microenvironment uniformly. Current implantable chemo devices use osmotic pumps with limited rate control and drug compatibility.",
    criticality: "Systemic chemotherapy delivers only 1–5% of the drug to the actual tumor — the rest causes systemic toxicity (nausea, immunosuppression, organ damage). Localized implantable delivery can achieve 100x higher drug concentration at the tumor while reducing systemic exposure by 90%+. But the delivery rate must be precisely controlled — too fast causes local tissue necrosis, too slow allows tumor regrowth.",
    impact: "Surnetics coatings enable precisely programmed drug release rates without mechanical pumps. Multiple channels with different gradients can deliver combination therapies (multiple drugs at different rates) from a single implant. No moving parts means the device can remain implanted for the full treatment course without maintenance.",
    details: [
      "Precisely controlled local drug release — 100x higher tumor concentration than systemic chemo",
      "90%+ reduction in systemic drug exposure reduces side effects dramatically",
      "Multiple gradient channels enable combination therapy from a single implant",
      "No mechanical pump means the device functions for the full treatment course without intervention",
      "Compatible with a wide range of chemotherapy agents and biologics",
      "Applicable to brain tumors (glioblastoma), pancreatic cancer, and other solid tumors",
    ],
  },
  {
    title: "Cochlear & Middle Ear Implants",
    tagline: "Next-generation hearing implants incorporating fluid-based drug delivery to preserve residual hearing during and after implantation.",
    fluidRole: "Anti-inflammatory and neuroprotective agents must be delivered to the cochlea at precisely controlled rates to reduce insertion trauma and preserve residual hearing. The fluid delivery system must operate within the confined space of the middle and inner ear without generating pressure spikes that damage delicate cochlear structures.",
    criticality: "Cochlear implant insertion destroys residual hearing in 30–50% of patients due to inflammation and trauma. Controlled local drug delivery during and after insertion could preserve residual hearing in the majority of patients — a transformative outcome. But the delivery system must be extremely small, extremely gentle (no pressure pulsation), and completely maintenance-free once implanted.",
    impact: "Passive gradient flow delivers drugs to the cochlea with no pressure pulsation, no pump vibration (which would be perceived as noise), and no mechanical components in the tiny middle ear space. This enables a new category of hearing-preserving cochlear implants.",
    details: [
      "Pulsation-free drug delivery prevents pressure damage to delicate cochlear structures",
      "No pump vibration — vibration in the middle ear would be perceived as noise by the patient",
      "Fits within the extremely confined anatomy of the middle and inner ear",
      "Could preserve residual hearing in 80%+ of cochlear implant recipients (vs. 50–70% today)",
      "Delivers anti-inflammatory agents (dexamethasone) and neuroprotective agents over weeks to months",
      "Zero maintenance after implantation — the device operates for its full lifetime passively",
    ],
  },
  {
    title: "Glaucoma Drainage & Drug Delivery Implants",
    tagline: "Micro-drainage devices that control intraocular pressure while simultaneously delivering anti-fibrotic drugs to prevent scarring and device failure.",
    fluidRole: "Aqueous humor must drain from the anterior chamber of the eye through the implant at a precisely controlled rate to maintain target intraocular pressure (IOP). Simultaneously, anti-fibrotic drugs must be delivered to the drainage site to prevent fibrotic encapsulation — the primary failure mode of all current glaucoma drainage devices.",
    criticality: "Glaucoma is the leading cause of irreversible blindness worldwide (80M+ patients). Current drainage implants fail in 30–50% of patients within 5 years due to fibrotic scarring that blocks the drainage pathway. No existing implant combines precision drainage with sustained anti-fibrotic drug delivery — this is the critical unmet need.",
    impact: "Surnetics coatings can precisely control aqueous humor drainage rate (maintaining target IOP) while simultaneously delivering anti-fibrotic agents through a separate gradient channel — all in a single passive micro-device. This dual-function approach could dramatically extend implant longevity and prevent the fibrotic failure that limits current devices.",
    details: [
      "Dual-function: precision drainage + sustained anti-fibrotic drug delivery in one device",
      "Addresses the #1 failure mode of glaucoma implants (fibrotic encapsulation)",
      "Passive flow control maintains target IOP without pressure sensors or active valves",
      "Could extend implant longevity from 3–5 years to 10+ years",
      "No power required — critical for long-term ocular implants",
      "Applicable to both tube shunt and micro-stent glaucoma device architectures",
    ],
  },
];

export default function ImplantableDevicesPage() {
  return (
    <>
      <NavBar />

      {/* Header */}
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/markets/" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white/80 transition-colors mb-8">
            <ArrowLeft size={14} /> All Markets
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#0066FF]/20 flex items-center justify-center text-[#60A5FA]">
              <Heart size={28} />
            </div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">Market</p>
          </div>
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6 max-w-3xl">
            Implantable Medical Devices
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">
            Biocompatible passive coatings enable fluid control inside implants without pumps — smaller form factor, longer device life.
          </p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-red-400" />
              <p className="text-red-500 text-xs font-bold uppercase tracking-wide">The Problem</p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">Implantable Devices Need Fluid Management Without External Power</h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>Implantable devices must manage fluids — drug delivery, biosensing, waste management — inside the body without external power connections or mechanical components that add size, reduce biocompatibility, and shorten device life.</p>
              <p>Conventional pump mechanisms are impractical at implantable scale.</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <p className="text-[#0066FF] text-xs font-bold uppercase tracking-wide">The Surnetics Solution</p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">Passive Biocompatible Coatings for In-Vivo Fluid Control</h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>Gradient coatings can be applied to biocompatible substrate materials to enable passive fluid control inside implanted devices — with no pump, no mechanical components, and no parasitic power draw.</p>
              <p>Smaller form factors and longer device operating life are achievable.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper gray>
        <div className="max-w-2xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Competitive Advantages</p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Why This Matters for Implantables</h2>
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
            How Fluid Control Shapes Every Implantable Application
          </h2>
          <p className="text-[#8892A4] text-base leading-relaxed">
            Click any application to explore how precise fluid management determines device performance — and how Surnetics technology transforms what is possible inside the human body.
          </p>
        </div>
        <ApplicationAccordion items={deepDiveApplications} />
      </SectionWrapper>

      <SectionWrapper gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Full Application Scope</p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Where It Applies</h2>
            <p className="text-[#8892A4] text-base leading-relaxed">Any implantable device that requires controlled fluid movement — from drug delivery to biosensing — can benefit from passive, pump-free flow control.</p>
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
          <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-5">Interested in Medical Device Licensing?</h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">We are actively seeking licensing partners and co-development agreements in implantable medical devices.</p>
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

      <SectionWrapper gray>
        <div className="max-w-2xl mb-8">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Explore Other Markets</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {[
            { label: "IVD & Diagnostics", href: "/markets/ivd-diagnostics/" },
            { label: "Electronics Cooling", href: "/markets/electronics-cooling/" },
            { label: "Drug Delivery", href: "/markets/drug-delivery/" },
            { label: "Energy Storage", href: "/markets/energy-storage/" },
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
