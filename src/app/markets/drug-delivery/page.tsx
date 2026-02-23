import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import ApplicationAccordion from "@/components/ApplicationAccordion";
import type { ApplicationItem } from "@/components/ApplicationAccordion";
import { Pill, CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Drug Delivery | Passive Metered Flow for Controlled Release",
  description: "Metered passive flow enables controlled drug release without pumps or actuators — transdermal, implantable, and oral applications. Surnetics Surface Energy Gradient Coating technology.",
  keywords: ["drug delivery microfluidics","passive drug delivery","controlled release technology","transdermal drug delivery","pump-free drug delivery","microfluidic drug delivery licensing","implantable drug depot"],
};

const applications = [
  "Transdermal drug delivery patches",
  "Implantable drug depots",
  "Inhalation and pulmonary devices",
  "Oral controlled-release systems",
  "Microneedle drug delivery",
];

const advantages = [
  { title: "Precisely Metered Flow", description: "Flow rate and stopping points are programmed into the coating design — enabling reproducible, controlled drug release without active components." },
  { title: "No Pumps or Actuators", description: "Eliminates the mechanical complexity that limits miniaturization and reliability in conventional drug delivery devices." },
  { title: "Multiple Release Profiles", description: "Different gradient designs on the same device can deliver multiple drugs at different rates simultaneously." },
  { title: "Platform Compatibility", description: "Compatible with transdermal patches, implantable depots, inhalers, oral capsules, and microneedle arrays." },
];

const deepDiveApplications: ApplicationItem[] = [
  {
    title: "Transdermal Patches with Controlled Penetration",
    tagline: "Next-generation skin patches that deliver drugs through the skin at precisely controlled rates — replacing oral medications with steady-state delivery.",
    fluidRole: "Drug formulation must migrate from a reservoir through micro-channels to the skin surface at a controlled rate, then penetrate the stratum corneum. Current transdermal patches rely on simple diffusion through a membrane — offering limited control over delivery rate and no ability to deliver multiple drugs at different rates.",
    criticality: "Most drugs cannot be delivered transdermally because passive diffusion through the skin is too slow or too variable. Only ~20 drugs have FDA-approved transdermal patches. The ability to actively push drug through micro-channels at controlled rates would expand the transdermal-eligible drug universe by 10x or more.",
    impact: "Surnetics gradient-driven flow through micro-channel arrays on the patch surface actively moves drug formulation to the skin — bypassing the diffusion limitation. Multiple channel zones with different gradients can deliver combination therapies. This could make hundreds of drugs eligible for transdermal delivery that currently require injection or oral dosing.",
    details: [
      "Active gradient-driven delivery bypasses the passive diffusion limitation of current patches",
      "Could expand the transdermal-eligible drug universe from ~20 drugs to 200+",
      "Multiple gradient zones enable combination therapy from a single patch",
      "Steady-state delivery avoids the peak-trough pattern of oral medications",
      "No batteries, electronics, or moving parts — the patch is entirely passive",
      "Applicable to pain management, hormone therapy, cardiovascular drugs, and CNS medications",
    ],
  },
  {
    title: "Microneedle Drug Delivery Arrays",
    tagline: "Painless micro-needle arrays that penetrate the outer skin layer and deliver drugs directly to the dermis — the fastest-growing drug delivery platform.",
    fluidRole: "Drug must flow from a backing reservoir through hundreds of hollow micro-needles (50–500 microns long) and into the dermal layer. Each needle must deliver a uniform dose. Current hollow microneedle systems use external pressure or spring-loaded mechanisms to drive fluid through the needles.",
    criticality: "Non-uniform delivery across the needle array causes dosing inconsistency — some needles deliver too much, others too little. External pressure sources make the device bulky and non-portable. The fluid delivery system is the primary barrier to making microneedle devices as simple as applying a bandage.",
    impact: "Passive gradient flow through each hollow microneedle enables uniform, self-powered drug delivery across the entire array. No external pressure source needed. The device becomes a simple patch — apply it to the skin and the gradient does the rest. This is the enabling technology for true bandage-format microneedle delivery.",
    details: [
      "Uniform passive delivery across hundreds of hollow microneedles without external pressure",
      "Eliminates spring mechanisms and pressure sources — device is as simple as a bandage",
      "Each microneedle can be independently tuned for flow rate via its gradient coating",
      "Enables painless vaccine delivery — huge potential for needle-phobic populations and pediatrics",
      "Compatible with biologics, peptides, vaccines, and small-molecule drugs",
      "Applicable to self-administered drugs, eliminating clinic visits for injections",
    ],
  },
  {
    title: "Inhalation & Pulmonary Delivery Devices",
    tagline: "Precision aerosol and liquid drug delivery to the lungs — for asthma, COPD, cystic fibrosis, and emerging inhaled biologics.",
    fluidRole: "Liquid drug must be metered in exact micro-doses, atomized into fine droplets (1–5 micron diameter), and delivered in sync with the patient's inhalation. Current metered-dose inhalers use propellant-driven systems with poor dose consistency. Nebulizers use piezoelectric meshes with complex electronics.",
    criticality: "Lung deposition efficiency for current inhalers is only 10–30% — most of the drug impacts the throat and is swallowed. Precise micro-dosing with optimal droplet size could push lung deposition to 60–80%, cutting the required drug dose in half while improving therapeutic outcomes. This is especially critical for expensive biologics where drug cost per dose is $100–$1000+.",
    impact: "Passive gradient flow can meter exact micro-volumes of drug liquid to an atomization surface without mechanical pumps. This enables a simpler, more consistent metering system that delivers the exact volume needed for optimal droplet generation. Fewer moving parts means more reliable, more portable inhaler devices.",
    details: [
      "Precise passive micro-volume metering for consistent dose delivery",
      "Could improve lung deposition from 10–30% to 60–80% with optimal droplet sizing",
      "Reduces required drug dose by up to 50% — critical for expensive biologics",
      "No propellants — eliminates environmental concerns of HFA propellant inhalers",
      "Simpler device architecture enables more portable and reliable inhalers",
      "Applicable to asthma, COPD, cystic fibrosis, inhaled insulin, and inhaled antibiotics",
    ],
  },
  {
    title: "Oral Controlled-Release Capsules",
    tagline: "Smart oral capsules that release drugs at specific locations in the GI tract at controlled rates — targeting the small intestine, colon, or specific disease sites.",
    fluidRole: "Drug must be released from a capsule reservoir through micro-channels at a rate that is independent of GI pH, motility, and fed/fasted state. Current controlled-release capsules use polymer erosion or osmotic pressure — both of which are highly variable and cannot be precisely tuned post-manufacturing.",
    criticality: "Oral bioavailability for many drugs is limited by first-pass metabolism and non-targeted release. Delivering drug directly to the disease site in the GI tract (e.g., inflamed colon for Crohn's disease) at a controlled rate could dramatically improve efficacy while reducing systemic side effects. Current oral systems lack the precision to achieve this reliably.",
    impact: "Gradient coatings inside capsule micro-channels can provide precise, pH-independent drug release that is determined by the coating design rather than the GI environment. This enables reliable site-specific delivery in the GI tract — something current polymer-based systems cannot achieve consistently.",
    details: [
      "pH-independent release rate — drug delivery is controlled by the coating, not the GI environment",
      "Site-specific delivery to small intestine, ileum, or colon regardless of GI variability",
      "Eliminates the fed/fasted variability that plagues current controlled-release formulations",
      "Enables oral delivery of drugs that currently require injection due to bioavailability issues",
      "Multiple channels can release different drugs at different GI locations from one capsule",
      "Applicable to inflammatory bowel disease, oral peptides, and GI-targeted therapeutics",
    ],
  },
  {
    title: "Intrathecal & Epidural Drug Delivery",
    tagline: "Implanted pumps delivering pain medication, antispasmodics, or chemotherapy directly to the spinal canal — bypassing the blood-brain barrier.",
    fluidRole: "Drug must be delivered from an implanted reservoir into the intrathecal or epidural space at precisely controlled rates — often as low as 0.1 mL/day. The delivery must be pulsation-free because pressure fluctuations in the spinal canal cause headaches and neurological symptoms.",
    criticality: "Current intrathecal pumps (like Medtronic SynchroMed) cost $20,000–$30,000 and require surgical refills every 1–3 months. Pump stalls and motor failures require emergency surgery. These devices serve 50,000+ chronic pain patients in the US alone. A simpler, more reliable delivery mechanism would dramatically improve patient outcomes and reduce healthcare costs.",
    impact: "Passive gradient flow provides pulsation-free drug delivery at micro-liter-per-day rates without any mechanical pump. No motor to stall, no battery to deplete, no gears to wear out. This could extend device lifetime, eliminate emergency pump-failure surgeries, and reduce the cost of intrathecal therapy by 50%+.",
    details: [
      "Pulsation-free delivery prevents headaches and neurological symptoms from CSF pressure fluctuations",
      "No motor, gears, or battery — eliminates the three primary failure modes of current intrathecal pumps",
      "Could reduce intrathecal therapy device cost from $25,000+ to under $10,000",
      "Extends refill intervals by enabling more concentrated drug formulations",
      "Applicable to baclofen (spasticity), morphine/ziconotide (chronic pain), and intrathecal chemotherapy",
      "Serves 50,000+ chronic pain patients in the US alone — significant market opportunity",
    ],
  },
  {
    title: "Ocular Drug Delivery Implants",
    tagline: "Sustained drug delivery to the posterior segment of the eye for age-related macular degeneration, diabetic retinopathy, and glaucoma.",
    fluidRole: "Anti-VEGF drugs or corticosteroids must be released from a micro-reservoir implanted in or near the eye at sustained, controlled rates over months. Current treatment requires monthly intravitreal injections — a needle into the eye every 4–8 weeks.",
    criticality: "Age-related macular degeneration affects 200M+ people worldwide. Monthly eye injections cost $1,000–$2,000 each, are painful, carry infection risk, and have poor patient compliance. An implant that delivers drug continuously for 6–12 months would transform treatment. Current port delivery systems (like Genentech's Susvimo) still require refills and have had complications from mechanical components.",
    impact: "A Surnetics-coated micro-reservoir could release anti-VEGF drugs at precisely controlled rates for 6–12 months with no moving parts, no refill port, and no mechanical failure risk. This is the simplest possible architecture for sustained ocular drug delivery — just a coated reservoir that releases drug passively until depleted, then is replaced in a simple procedure.",
    details: [
      "Replaces monthly eye injections with a single implant lasting 6–12 months",
      "No refill port, no mechanical valve — simplest possible sustained-delivery architecture",
      "Precisely controlled release rate maintains therapeutic drug levels continuously",
      "Eliminates the infection risk associated with repeated intravitreal injections",
      "Applicable to anti-VEGF (ranibizumab, aflibercept), corticosteroids, and emerging biologics",
      "Addresses a 200M+ patient population with age-related macular degeneration alone",
    ],
  },
];

export default function DrugDeliveryPage() {
  return (
    <>
      <NavBar />
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link href="/markets/" className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-white/80 transition-colors mb-8"><ArrowLeft size={14} /> All Markets</Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#0066FF]/20 flex items-center justify-center text-[#60A5FA]"><Pill size={28} /></div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">Market</p>
          </div>
          <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6 max-w-3xl">Drug Delivery</h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl">Metered passive flow enables controlled drug release without pumps or actuators — transdermal, implantable, and oral applications.</p>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-full bg-red-400" /><p className="text-red-500 text-xs font-bold uppercase tracking-wide">The Problem</p></div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">Precise Passive Drug Dosing Is Difficult Without Mechanical Complexity</h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>Controlled drug release — whether transdermal, implantable, or inhaled — requires precise, repeatable fluid metering. Achieving this passively, without pumps or actuators, has been a fundamental challenge that limits the design space for next-generation drug delivery systems.</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-4"><div className="w-2 h-2 rounded-full bg-[#0066FF]" /><p className="text-[#0066FF] text-xs font-bold uppercase tracking-wide">The Surnetics Solution</p></div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">Metered Passive Flow for Controlled Release</h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>Gradient coatings enable precisely metered passive flow for drug delivery applications. Flow rate and stopping points are programmed into the coating design — enabling controlled, reproducible drug release without any active components.</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      <SectionWrapper gray>
        <div className="max-w-2xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Competitive Advantages</p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Why This Matters for Drug Delivery</h2>
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
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">How Fluid Control Shapes Every Drug Delivery Application</h2>
          <p className="text-[#8892A4] text-base leading-relaxed">Click any application to explore how precise fluid management determines therapeutic outcomes — and how Surnetics technology transforms what is possible.</p>
        </div>
        <ApplicationAccordion items={deepDiveApplications} />
      </SectionWrapper>

      <SectionWrapper gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">Full Application Scope</p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">Where It Applies</h2>
            <p className="text-[#8892A4] text-base leading-relaxed">From transdermal patches to implantable depots, passive surface-driven flow enables a new generation of drug delivery devices that are simpler, smaller, and more reliable.</p>
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
          <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-5">Interested in Drug Delivery Licensing?</h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">We are actively seeking licensing partners and co-development agreements in drug delivery systems.</p>
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
