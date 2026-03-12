import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import Image from "next/image";
import { CheckCircle2, ArrowRight, FlaskConical, Layers, Zap, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technology | Surface Energy Gradient Coating",
  description:
    "How Surnetics Surface Energy Gradient Coatings self-propel liquids through microfluidic channels without pumps, valves, or controllers. Technical capabilities, compatible materials, and process overview.",
};

const materials = [
  { category: "Plastics", items: ["Polyester", "COC", "Polypropylene", "Polyethylene", "Polycarbonate", "Nylon", "Acrylic", "Silicone Rubber"] },
  { category: "Metals", items: ["Gold", "Copper", "Silver", "Nickel", "Carbon Steel", "Stainless Steel"] },
  { category: "Glass & Metal Oxides", items: ["Silanized Glass", "Untreated Glass", "Silicon"] },
];

const analyticalCapabilities = [
  "Contact Angle Measurement",
  "Profilometry",
  "Ellipsometry",
  "Raman Spectroscopy",
  "FTIR Surface Analysis",
];

const capabilities = [
  {
    icon: <Zap size={20} />,
    title: "Self-Propelled Flow",
    description: "Liquid is driven through microchannels by the surface energy gradient alone — no pump, no pressure source, no wicking strip required.",
  },
  {
    icon: <Layers size={20} />,
    title: "Multi-Rate Control",
    description: "Multiple independent flow rates on a single device layer. Different channels can be tuned to different velocities without valves or electronics.",
  },
  {
    icon: <FlaskConical size={20} />,
    title: "Tunable Velocity",
    description: "Flow velocity is precisely controlled by adjusting the gradient coating composition — enabling exact flow parameters for each application.",
  },
  {
    icon: <CheckCircle2 size={20} />,
    title: "Passive Stop/Start",
    description: "The coating can be engineered to stop and restart fluid flow at defined locations — no valve required to hold or release a sample.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Feasibility Study",
    description: "We evaluate your microfluidic design, substrate materials, and flow requirements against our coating portfolio. Includes contact angle testing and flow characterization.",
  },
  {
    step: "02",
    title: "Coating Development",
    description: "Custom gradient formulation and deposition process development for your specific channel geometry, materials, and flow targets. Full analytical characterization.",
  },
  {
    step: "03",
    title: "Prototype Validation",
    description: "Functional prototype devices with gradient coatings. Flow performance validation, repeatability testing, and design iteration.",
  },
  {
    step: "04",
    title: "Manufacturing Scale-Up",
    description: "Process transfer to high-volume production. Compatible with standard microfluidic manufacturing processes and equipment.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      <NavBar />

      {/* Page Header */}
      <section className="bg-[#0A1628] pt-32 pb-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
                Core Technology
              </p>
              <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
                Surface Energy Gradient Coatings
              </h1>
              <p className="text-white/60 text-lg leading-relaxed">
                A patented platform technology that generates a net capillary force
                inside microfluidic channels — moving liquids passively without
                pumps, valves, or any external power source.
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="/microfluidics-chip.png"
                alt="Microfluidic chip with three input channels converging into a mixing chamber with optical detection zone"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              The Mechanism
            </p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              How It Works
            </h2>
            <div className="space-y-5 text-[#8892A4] text-base leading-relaxed">
              <p>
                Every liquid has a contact angle with every surface — the angle at
                which the liquid-vapor interface meets the solid surface. When this
                angle is high, the surface resists wetting. When it is low, the
                surface attracts the liquid.
              </p>
              <p>
                Surnetics coatings create a precise, continuous gradient in this
                contact angle along the channel wall — from a high contact angle at
                one end to a low contact angle at the other. This asymmetry in
                wettability creates an unbalanced capillary force.
              </p>
              <p>
                The result: the liquid experiences a net force toward the
                low-contact-angle end and self-propels — without any pump, wicking
                material, or external energy input. The velocity and stopping point
                are determined entirely by the coating design.
              </p>
              <p className="text-[#2D3748] font-medium">
                Surnetics is the only company that can offer this technology
                commercially.
              </p>
            </div>
          </div>

          {/* Channel diagram */}
          <div className="bg-[#F5F7FA] rounded-2xl p-8">
            <p className="text-[#8892A4] text-xs font-semibold uppercase tracking-widest text-center mb-6">
              Gradient Channel Cross-Section
            </p>
            <svg viewBox="0 0 400 200" className="w-full h-auto" aria-label="Surface energy gradient channel diagram">
              <defs>
                <linearGradient id="techWallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="1" />
                  <stop offset="100%" stopColor="#B3D4FF" stopOpacity="0.4" />
                </linearGradient>
                <linearGradient id="techFluid" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066FF" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.6" />
                </linearGradient>
              </defs>

              {/* Top wall */}
              <rect x="40" y="60" width="320" height="14" fill="url(#techWallGrad)" rx="2" />

              {/* Channel */}
              <rect x="40" y="74" width="320" height="52" fill="#E8F0FF" rx="0" />

              {/* Fluid */}
              <rect x="40" y="76" width="160" height="48" fill="url(#techFluid)" rx="2" />

              {/* Bottom wall */}
              <rect x="40" y="126" width="320" height="14" fill="url(#techWallGrad)" rx="2" />

              {/* Arrows showing force direction */}
              <defs>
                <marker id="arrowhead" markerWidth="6" markerHeight="4" refX="3" refY="2" orient="auto">
                  <polygon points="0 0, 6 2, 0 4" fill="#0066FF" />
                </marker>
              </defs>
              <line x1="190" y1="100" x2="310" y2="100" stroke="#0066FF" strokeWidth="2" markerEnd="url(#arrowhead)" />

              {/* Labels */}
              <text x="40" y="52" fill="#0066FF" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" letterSpacing="0.04em">HIGH ENERGY</text>
              <text x="360" y="52" fill="#8892A4" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="700" textAnchor="end" letterSpacing="0.04em">LOW ENERGY</text>

              <text x="245" y="95" fill="#ffffff" fontSize="8" fontFamily="Inter, sans-serif" fontWeight="600" textAnchor="middle">Capillary Force →</text>

              <text x="200" y="160" fill="#0A1628" fontSize="9" fontFamily="Inter, sans-serif" fontWeight="600" textAnchor="middle">Gradient Coating on Channel Wall</text>
              <text x="200" y="173" fill="#8892A4" fontSize="8" fontFamily="Inter, sans-serif" textAnchor="middle">Self-propelled — no pump required</text>
            </svg>
          </div>
        </div>
      </SectionWrapper>

      {/* What Makes It Unique */}
      <SectionWrapper gray>
        <div className="max-w-2xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
            Competitive Position
          </p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            The Only Commercial Source
          </h2>
          <p className="text-[#8892A4] text-base leading-relaxed">
            Surface Energy Gradient Coating technology is protected by an active US
            patent portfolio. No other company can commercialize this approach.
            Partners gain exclusive access to a patented platform with a 2034
            protection horizon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((cap) => (
            <div key={cap.title} className="bg-white rounded-xl border border-[#E2E8F0] p-6">
              <div className="w-10 h-10 rounded-lg bg-[#E8F0FF] flex items-center justify-center text-[#0066FF] mb-4">
                {cap.icon}
              </div>
              <h3 className="text-[#0A1628] font-bold text-base mb-2">{cap.title}</h3>
              <p className="text-[#8892A4] text-sm leading-relaxed">{cap.description}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Compatible Materials */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              Substrate Compatibility
            </p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              Compatible Materials
            </h2>
            <p className="text-[#8892A4] text-base leading-relaxed mb-8">
              Gradient coatings have been successfully developed and validated on
              a wide range of substrate materials used in microfluidic device
              manufacturing.
            </p>
            <div className="space-y-6">
              {materials.map((group) => (
                <div key={group.category}>
                  <h3 className="text-[#0A1628] font-semibold text-sm uppercase tracking-wide mb-2">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-[#F5F7FA] border border-[#E2E8F0] rounded-full text-xs text-[#2D3748] font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Analytical Capabilities */}
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              Characterization
            </p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              Analytical Capabilities
            </h2>
            <p className="text-[#8892A4] text-base leading-relaxed mb-8">
              Full characterization of gradient coatings from surface energy
              profiling to molecular spectroscopy ensures each coating meets
              precise performance specifications.
            </p>
            <ul className="space-y-3">
              {analyticalCapabilities.map((cap) => (
                <li key={cap} className="flex items-center gap-3 p-4 bg-[#F5F7FA] rounded-lg border border-[#E2E8F0]">
                  <CheckCircle2 size={16} className="text-[#0066FF] flex-shrink-0" />
                  <span className="text-[#2D3748] text-sm font-medium">{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* Process Flow */}
      <SectionWrapper dark>
        <div className="max-w-2xl mb-14">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
            Working With Us
          </p>
          <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            From Feasibility to Production
          </h2>
          <p className="text-white/60 text-base leading-relaxed">
            A structured engagement process from initial technical assessment
            through full-scale manufacturing transfer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {processSteps.map((step, i) => (
            <div key={step.step} className="relative">
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-5 z-10">
                  <ChevronRight size={16} className="text-white/20" />
                </div>
              )}
              <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full">
                <p className="text-[#0066FF] font-extrabold text-3xl mb-3">{step.step}</p>
                <h3 className="text-white font-bold text-base mb-3">{step.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
          >
            Start a Feasibility Discussion <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
