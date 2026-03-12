"use client";

import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import PatentViewerModal from "@/components/PatentViewerModal";
import { Shield, Globe, ArrowRight, FileText, CheckCircle, Clock } from "lucide-react";
import { useState } from "react";

const grantedPatents = [
  {
    number: "US 12,263,480",
    title: "Diagnostic Device with Integrated Sampler and Holder",
    pdfFile: "/patents/US12263480.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US12263480B2/en",
  },
  {
    number: "US 12,083,517",
    title: "Microfluidic Products with Controlled Fluid Flow",
    pdfFile: "/patents/US12083517.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US12083517B2/en",
  },
  {
    number: "US 11,583,858",
    title: "Microfluidic Diagnostics with Controlled Fluid Flow",
    pdfFile: "/patents/US11583858.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US11583858B2/en",
  },
  {
    number: "US 10,821,438",
    title: "Microfluidic Diagnostics with Controlled Fluid Flow",
    pdfFile: "/patents/US10821438.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US10821438B2/en",
  },
  {
    number: "US 9,968,930",
    title: "Microfluidic Products with Controlled Fluid Flow",
    pdfFile: "/patents/US9968930.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US9968930B2/en",
  },
];

const pendingApplications = [
  {
    number: "US Pat. Appl. 17/114,390",
    title: "Diagnostic Device with Integrated Sampler and Holder",
    note: "Allowed",
    pdfFile: null,
    googlePatentsUrl: "https://patents.google.com/patent/US20210205797A1/en",
  },
  {
    number: "US Pat. Appl. 18/826,821",
    title: "Microfluidic Products with Controlled Fluid Flow",
    note: null,
    pdfFile: null,
    googlePatentsUrl: "https://patents.google.com/patent/US20250010271A1/en",
  },
  {
    number: "US Patent Appl. 19/051,462",
    title: "Diagnostic Device with Integrated Sampler and Holder",
    note: null,
    pdfFile: null,
    googlePatentsUrl: "https://patents.google.com/",
  },
];

const technologyStatus = [
  "Programmable, automated system for large-scale manufacturing coating process designed and installed.",
  "Can be adapted to a variety of precision coating systems.",
  "Can easily be scaled for larger applications.",
  "Manufacturing costs and manufacturing quality established for the coating process.",
  "PFAS-free hydrophobic coatings developed.",
  "Coatings with FDA-approved chemistry developed.",
  "Products have been produced for and tested with diagnostic companies since 2014.",
  "Demonstrated that gradient coatings control flow rates to targeted flow rates with <10% variation across manufactured lots.",
  "Coatings have been used with blood, plasma, wash solutions, and other reagent liquids.",
];

const additionalIP = [
  "Coating formulations for metal, glass, and plastic surfaces.",
  "Coating processes and equipment specifications.",
  "Predictive flow model and material test data for product designs.",
  "Preferred materials and coating compositions with specific liquids.",
];

type ViewerState = {
  patentNumber: string;
  title: string;
  pdfFile: string | null;
  googlePatentsUrl: string;
} | null;

export default function IPPortfolioPage() {
  const [viewer, setViewer] = useState<ViewerState>(null);

  const openViewer = (patent: {
    number: string;
    title: string;
    pdfFile: string | null;
    googlePatentsUrl: string;
  }) => {
    setViewer({
      patentNumber: patent.number,
      title: patent.title,
      pdfFile: patent.pdfFile,
      googlePatentsUrl: patent.googlePatentsUrl,
    });
  };

  return (
    <>
      <NavBar />

      {/* Header */}
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              Intellectual Property — Updated March 3, 2026
            </p>
            <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
              Surface Gradient Coating IP Portfolio
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Surnetics technology is protected by a portfolio of 5 granted US
              patents with continuation applications extending protection through
              2041. Partners gain exclusive access to technology that cannot be
              commercially replicated.
            </p>
          </div>

          {/* Stats row */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "5", label: "Granted Patents" },
              { value: "3", label: "Pending Applications" },
              { value: "44", label: "Patent Citations" },
              { value: "2041", label: "Portfolio Extends To" },
            ].map((stat) => (
              <div key={stat.label} className="border border-white/10 rounded-xl px-5 py-5">
                <p className="text-[#0066FF] font-extrabold text-3xl md:text-4xl tracking-tight mb-1">
                  {stat.value}
                </p>
                <p className="text-white/50 text-xs font-semibold uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Granted Patents */}
      <SectionWrapper gray>
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={20} className="text-[#0066FF]" />
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
              Granted US Patents
            </p>
          </div>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            5 Active US Patents
          </h2>
          <p className="text-[#8892A4] text-base leading-relaxed">
            All patents are assigned to Surnetics LLC and cover the core methods,
            products, and devices built on Surface Energy Gradient Coating
            technology. Click any patent number to view the full document.
          </p>
        </div>

        <div className="space-y-4">
          {grantedPatents.map((patent, i) => (
            <button
              key={patent.number}
              onClick={() => openViewer(patent)}
              className="w-full text-left group"
            >
              <div className="flex overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm hover:shadow-xl hover:border-[#0066FF]/30 transition-all duration-300">

                {/* Left panel — patent number */}
                <div className="relative bg-[#0A1628] px-6 py-6 flex flex-col justify-between min-w-[180px] sm:min-w-[220px] flex-shrink-0 overflow-hidden">
                  {/* Background number watermark */}
                  <span className="absolute -right-3 -bottom-4 text-[80px] font-black text-white/5 leading-none select-none pointer-events-none">
                    {i + 1}
                  </span>

                  <div>
                    <p className="text-[#0066FF] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                      US Patent
                    </p>
                    <p className="text-white font-extrabold text-xl leading-tight tracking-tight group-hover:text-[#4DA3FF] transition-colors">
                      {patent.number}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <span className="text-green-400 text-[10px] font-bold uppercase tracking-widest">
                      Active · Granted
                    </span>
                  </div>
                </div>

                {/* Right panel — title + meta */}
                <div className="flex flex-1 items-center justify-between px-6 py-5 gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[#0A1628] font-semibold text-base leading-snug mb-1">
                      {patent.title}
                    </p>
                    <p className="text-[#8892A4] text-xs">
                      Assignee: Surnetics LLC
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-2">
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E8F0FF] text-[#0066FF] text-xs font-semibold group-hover:bg-[#0066FF] group-hover:text-white transition-colors">
                      <FileText size={12} />
                      View Patent
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#E2E8F0] group-hover:border-[#0066FF] group-hover:bg-[#E8F0FF] flex items-center justify-center transition-colors">
                      <ArrowRight size={14} className="text-[#8892A4] group-hover:text-[#0066FF] transition-colors" />
                    </div>
                  </div>
                </div>

              </div>
            </button>
          ))}
        </div>
      </SectionWrapper>

      {/* Pending Applications */}
      <SectionWrapper>
        <div className="max-w-2xl mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Clock size={20} className="text-[#0066FF]" />
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
              Pending US Applications
            </p>
          </div>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            3 Applications in Prosecution
          </h2>
          <p className="text-[#8892A4] text-base leading-relaxed">
            Continuation applications extend and expand the scope of protection,
            preserving priority dates while broadening the claim landscape through
            2041.
          </p>
        </div>

        <div className="space-y-4">
          {pendingApplications.map((app) => (
            <button
              key={app.number}
              onClick={() => openViewer(app)}
              className="w-full text-left group"
            >
              <div className="flex overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white shadow-sm hover:shadow-xl hover:border-[#D97706]/30 transition-all duration-300">

                {/* Left panel */}
                <div className="relative bg-[#2D1F0A] px-6 py-6 flex flex-col justify-between min-w-[180px] sm:min-w-[220px] flex-shrink-0 overflow-hidden">
                  {/* Background watermark */}
                  <span className="absolute -right-2 -bottom-3 text-[80px] font-black text-white/5 leading-none select-none pointer-events-none">
                    ⚖
                  </span>

                  <div>
                    <p className="text-[#D97706] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                      US Application
                    </p>
                    <p className="text-white font-extrabold text-sm leading-tight tracking-tight group-hover:text-[#F6C76A] transition-colors">
                      {app.number}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5">
                    {app.note ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-blue-400" />
                        <span className="text-blue-400 text-[10px] font-bold uppercase tracking-widest">
                          Allowed
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest">
                          In Prosecution
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Right panel */}
                <div className="flex flex-1 items-center justify-between px-6 py-5 gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="text-[#0A1628] font-semibold text-base leading-snug mb-1">
                      {app.title}
                    </p>
                    <p className="text-[#8892A4] text-xs">
                      Assignee: Surnetics LLC · Continuation Application
                    </p>
                  </div>

                  <div className="flex-shrink-0 flex items-center gap-2">
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#FFF7E8] text-[#D97706] text-xs font-semibold group-hover:bg-[#D97706] group-hover:text-white transition-colors">
                      <FileText size={12} />
                      View Filing
                    </span>
                    <div className="w-8 h-8 rounded-full border border-[#E2E8F0] group-hover:border-[#D97706] group-hover:bg-[#FFF7E8] flex items-center justify-center transition-colors">
                      <ArrowRight size={14} className="text-[#8892A4] group-hover:text-[#D97706] transition-colors" />
                    </div>
                  </div>
                </div>

              </div>
            </button>
          ))}
        </div>
      </SectionWrapper>

      {/* Citation Callout */}
      <section className="bg-[#0066FF] py-14">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center">
            <div className="md:col-span-2">
              <h2 className="text-white font-extrabold text-2xl md:text-3xl leading-tight tracking-tight mb-3">
                Cited by 44 Patents Across the Industry
              </h2>
              <p className="text-white/80 text-base leading-relaxed">
                When 44 subsequent patents from major industry players cite this
                work, it is evidence of broad technological relevance — validation
                that this is foundational IP, not a niche filing. This citation
                record demonstrates the core science underpins a wide range of
                downstream applications and commercial interests.
              </p>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white font-extrabold text-6xl md:text-7xl tracking-tight">44</p>
              <p className="text-white/70 text-sm font-semibold uppercase tracking-widest">Patent Citations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Status */}
      <SectionWrapper gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle size={20} className="text-[#0066FF]" />
              <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
                Technology Readiness
              </p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
              Technology Status
            </h2>
            <p className="text-[#8892A4] text-base leading-relaxed">
              The Surface Gradient Coating technology is production-ready with
              established manufacturing processes, proven quality metrics, and
              over a decade of real-world validation with diagnostic companies.
            </p>
          </div>

          <div className="space-y-3">
            {technologyStatus.map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white border border-[#E2E8F0] rounded-xl px-5 py-4">
                <CheckCircle size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-[#4A5568] text-sm leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Additional IP */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText size={20} className="text-[#0066FF]" />
              <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
                Additional Assets
              </p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
              Additional IP Available
            </h2>
            <p className="text-[#8892A4] text-base leading-relaxed mb-6">
              Beyond the patent portfolio, Surnetics offers access to valuable
              proprietary knowledge and trade secrets — available along with
              technical training for qualified partners.
            </p>
            <div className="p-4 bg-[#E8F0FF] rounded-xl">
              <p className="text-[#0066FF] text-xs font-semibold leading-relaxed">
                Technical training available with IP transfer or licensing agreements.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {additionalIP.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-5 bg-[#F5F7FA] border border-[#E2E8F0] rounded-xl">
                <div className="w-8 h-8 rounded-lg bg-[#E8F0FF] flex items-center justify-center text-[#0066FF] font-bold text-sm flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-[#4A5568] text-sm leading-relaxed pt-1">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Licensing CTA */}
      <SectionWrapper dark>
        <div className="text-center max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-[#0066FF]/20 flex items-center justify-center mx-auto mb-6">
            <Shield size={24} className="text-[#0066FF]" />
          </div>
          <h2 className="text-white font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-5">
            Patent Portfolio Available for Licensing
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            We are actively pursuing licensing partnerships, co-development
            agreements, and strategic partnerships across our six target markets.
            Patent protection active through 2041 provides a long runway for
            partners to build on this technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
            >
              Discuss Licensing <ArrowRight size={16} />
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

      <Footer />

      {/* Patent Viewer Modal */}
      {viewer && (
        <PatentViewerModal
          patentNumber={viewer.patentNumber}
          title={viewer.title}
          pdfFile={viewer.pdfFile}
          googlePatentsUrl={viewer.googlePatentsUrl}
          onClose={() => setViewer(null)}
        />
      )}
    </>
  );
}
