import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Patent Applications in Diagnostics, Drug Delivery & Biosensing | Surnetics",
  description:
    "Surnetics microfluidics IP portfolio covers point-of-care diagnostics, molecular diagnostics, immunoassays, drug delivery nanoparticles, clinical lab automation, and wearable biosensors. Available for licensing or acquisition by Abbott, Thermo Fisher, Danaher, Roche, and more.",
  keywords: [
    "microfluidics patent point-of-care diagnostics",
    "lab-on-a-chip patent applications",
    "molecular diagnostics PCR patent",
    "biosensor patent licensing",
    "drug delivery nanoparticle microfluidics patent",
    "clinical laboratory automation IP",
    "wearable biosensor patent",
    "IVD patent portfolio",
    "microfluidic immunoassay patent",
    "lateral flow assay IP",
  ],
};

const applications = [
  {
    id: "point-of-care",
    label: "Point-of-Care Diagnostics",
    headline: "Bring Lab-Quality Testing to the Patient's Side",
    body: `Our microfluidics IP portfolio includes patents directly applicable to
point-of-care (POC) testing devices. Miniaturized fluid handling,
integrated sample preparation, and on-chip detection methods enable
rapid diagnostic tests outside the central laboratory.

Passive flow eliminates the pump hardware that drives cost and complexity
in cartridge-reader systems — reducing bill-of-materials by 80%+ and
enabling truly battery-free test formats for resource-limited settings.`,
    buyers: "Abbott Diagnostics, Roche, bioMérieux, Siemens Healthineers, Becton Dickinson",
    color: "#0066FF",
  },
  {
    id: "molecular-diagnostics",
    label: "Molecular Diagnostics & PCR",
    headline: "Miniaturized Nucleic Acid Amplification",
    body: `Lab-on-a-chip architectures within this portfolio support nucleic acid
amplification, including PCR and isothermal amplification. Passive fluid
routing enables precise sample delivery to reaction chambers without
external fluidic pressure sources or pumps.

Applications include pathogen detection, genetic screening, liquid biopsy,
and next-generation sequencing (NGS) sample prep. Controlled, repeatable
flow profiles improve assay sensitivity and reduce reagent consumption.`,
    buyers: "Thermo Fisher Scientific, Qiagen, Hologic, Meridian Bioscience, GenMark Diagnostics",
    color: "#0080CC",
  },
  {
    id: "immunoassays-biosensing",
    label: "Immunoassays & Biosensing",
    headline: "Faster, Cheaper Immunoassay Platforms",
    body: `Microfluidic immunoassay platforms reduce reagent consumption and
turnaround time versus traditional ELISA. Our patents covering flow
control, surface functionalization, and detection chamber design are
directly relevant to lateral flow assay manufacturers and electrochemical
biosensor developers.

The ability to engineer precise flow velocities and passive stop/start
zones enables multi-step immunoassay protocols with no active timing
control — dramatically simplifying device architecture.`,
    buyers: "Abbott, Siemens Healthineers, Roche Diagnostics, bioMérieux, Luminex",
    color: "#0099AA",
  },
  {
    id: "drug-delivery",
    label: "Drug Delivery & Nanoparticle Synthesis",
    headline: "Microfluidic LNP and Nanoparticle Manufacturing",
    body: `Microfluidic synthesis of lipid nanoparticles (LNPs), polymeric
nanoparticles, and drug-loaded microcapsules is a rapidly growing
application of lab-on-a-chip technology. Our IP covering passive fluid
mixing and controlled flow profiles supports pharmaceutical companies
developing mRNA delivery platforms or targeted cancer therapeutics.

Precise flow control at microfluidic scales enables tighter nanoparticle
size distributions and higher encapsulation efficiencies than bulk
mixing processes.`,
    buyers: "Pfizer, Moderna, AstraZeneca, Evonik, Precision NanoSystems",
    color: "#00AA88",
  },
  {
    id: "laboratory-automation",
    label: "Clinical Laboratory Automation",
    headline: "High-Throughput Sample Processing on Chip",
    body: `High-throughput sample processing, parallel microfluidic operations,
and automated fluid routing are covered within this patent portfolio.
Applicable to clinical chemistry analyzers, automated immunoassay
systems, and next-generation sequencing (NGS) sample prep workflows.

Passive microfluidic routing eliminates solenoid valves and pneumatic
control systems, reducing instrument complexity and enabling a new
class of sample preparation modules.`,
    buyers: "Danaher (Beckman Coulter, Cepheid), Bio-Rad, Sysmex, Ortho Clinical Diagnostics",
    color: "#3366CC",
  },
  {
    id: "wearable-monitoring",
    label: "Wearable & Continuous Monitoring",
    headline: "Passive Microfluidics for Body-Worn Biosensors",
    body: `Miniaturized microfluidic architectures suitable for wearable biosensors
enable continuous monitoring of biomarkers from sweat, interstitial fluid,
or blood. Passive flow control — requiring no pump or battery-driven
fluidics — is a fundamental enabling technology for truly wearable,
disposable sensor patches.

Applications include glucose monitoring, electrolyte tracking, metabolite
sensing, and performance monitoring for sports, military, and clinical
remote patient monitoring.`,
    buyers: "Abbott (FreeStyle Libre), Dexcom, Medtronic, Philips, Biolinq",
    color: "#6644BB",
  },
];

export default function ApplicationsPage() {
  return (
    <>
      <NavBar />

      {/* Page Header */}
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              Commercial Applications
            </p>
            <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
              Where This IP Creates Value
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Surnetics&rsquo; microfluidics patent portfolio addresses six high-growth
              application areas in life science, diagnostics, and medical devices.
              Each represents an active market where corporate IP buyers are acquiring
              and licensing foundational technology.
            </p>
          </div>
        </div>
      </section>

      {/* Applications */}
      {applications.map((app, i) => (
        <SectionWrapper key={app.id} gray={i % 2 === 1}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" id={app.id}>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: app.color }}>
                {app.label}
              </p>
              <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
                {app.headline}
              </h2>
              <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
                {app.body.trim().split("\n\n").map((para, j) => (
                  <p key={j}>{para.replace(/\n/g, " ")}</p>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <div className="bg-white rounded-xl border border-[#E2E8F0] p-6">
                <h3 className="text-[#0A1628] font-bold text-sm uppercase tracking-wide mb-3">
                  Target Acquirers &amp; Licensees
                </h3>
                <p className="text-[#8892A4] text-sm leading-relaxed">{app.buyers}</p>
              </div>

              <div className="bg-[#0A1628] rounded-xl p-6">
                <h3 className="text-white/60 font-bold text-xs uppercase tracking-widest mb-3">
                  Relevant Patent Portfolio
                </h3>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li>US 12,263,480 — Diagnostic Device with Integrated Sampler</li>
                  <li>US 12,083,517 — Microfluidic Products with Controlled Fluid Flow</li>
                  <li>US 11,583,858 — Microfluidic Diagnostics with Controlled Fluid Flow</li>
                  <li>US 10,821,438 — Microfluidic Diagnostics with Controlled Fluid Flow</li>
                  <li>US 9,968,930 — Microfluidic Products with Controlled Fluid Flow</li>
                </ul>
                <Link
                  href="/ip-portfolio/"
                  className="mt-4 inline-flex items-center gap-2 text-[#60A5FA] text-sm font-semibold hover:text-white transition-colors"
                >
                  View Full Portfolio <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </SectionWrapper>
      ))}

      {/* CTA */}
      <SectionWrapper dark>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-white font-extrabold text-3xl leading-tight tracking-tight mb-4">
            Interested in Licensing or Acquiring This IP?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            We offer outright sale, exclusive license, non-exclusive license, and
            field-of-use licensing structures. Contact us to discuss which model
            fits your organization.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
          >
            Inquire About Licensing <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
