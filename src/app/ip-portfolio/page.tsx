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
    summary: "Covers a complete sample collection and testing device that integrates the sampler and holder into a single unit — enabling fully self-contained point-of-care diagnostics with no separate fluid handling components.",
    relevance: "POC Testing · Sample Collection · Cartridge Design",
    pdfFile: "/patents/US12263480.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US12263480B2/en",
  },
  {
    number: "US 12,083,517",
    title: "Microfluidic Products with Controlled Fluid Flow",
    summary: "Protects the commercial product embodiments of surface energy gradient coatings applied to microfluidic channels — covering the manufactured devices that use the coating to move fluids without pumps.",
    relevance: "Microfluidic Devices · Passive Flow · Commercial Products",
    pdfFile: "/patents/US12083517.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US12083517B2/en",
  },
  {
    number: "US 11,583,858",
    title: "Microfluidic Diagnostics with Controlled Fluid Flow",
    summary: "Covers the application of gradient flow control specifically to diagnostic devices — protecting the use of this technology in lateral flow assays, immunoassays, and cartridge-based diagnostic systems.",
    relevance: "IVD · Lateral Flow · Immunoassay · Diagnostics",
    pdfFile: "/patents/US11583858.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US11583858B2/en",
  },
  {
    number: "US 10,821,438",
    title: "Microfluidic Diagnostics with Controlled Fluid Flow",
    summary: "An earlier foundational patent covering the diagnostic application of controlled fluid flow through surface energy gradients — establishes priority and broad claim scope for this entire technology family.",
    relevance: "Foundational Patent · IVD Systems · Fluid Management",
    pdfFile: "/patents/US10821438.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US10821438B2/en",
  },
  {
    number: "US 9,968,930",
    title: "Microfluidic Products with Controlled Fluid Flow",
    summary: "The original core patent — protects the fundamental method of using a surface energy gradient coating to self-propel liquid through a microchannel. This is the foundational claim that all subsequent patents build upon.",
    relevance: "Core Method · Surface Energy Gradient · Foundational IP",
    pdfFile: "/patents/US9968930.pdf",
    googlePatentsUrl: "https://patents.google.com/patent/US9968930B2/en",
  },
];

const pendingApplications = [
  {
    number: "US 20210170405",
    title: "Diagnostic Device with Integrated Sampler and Holder",
    note: "Allowed",
    pdfFile: null,
    googlePatentsUrl: "https://patents.google.com/patent/US20210170405A1/en",
  },
  {
    number: "US 20240428117",
    title: "Microfluidic Products with Controlled Fluid Flow",
    note: null,
    pdfFile: null,
    googlePatentsUrl: "https://patents.google.com/patent/US20240428117A1/en",
  },
  {
    number: "US 20250177980",
    title: "Diagnostic Device with Integrated Sampler and Holder",
    note: null,
    pdfFile: null,
    googlePatentsUrl: "https://patents.google.com/patent/US20250177980A1/en",
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
                <div className="relative bg-[#0A1628] px-6 py-6 flex flex-col justify-between min-w-[160px] sm:min-w-[200px] flex-shrink-0 overflow-hidden">
                  <span className="absolute -right-3 -bottom-4 text-[80px] font-black text-white/5 leading-none select-none pointer-events-none">
                    {i + 1}
                  </span>
                  <div>
                    <p className="text-[#0066FF] text-[10px] font-bold uppercase tracking-[0.2em] mb-2">
                      US Patent
                    </p>
                    <p className="text-white font-extrabold text-lg leading-tight tracking-tight group-hover:text-[#4DA3FF] transition-colors">
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

                {/* Right panel — title + summary + tags */}
                <div className="flex flex-1 flex-col justify-between px-6 py-5 gap-3">
                  <div>
                    <p className="text-[#0A1628] font-bold text-base leading-snug mb-1.5">
                      {patent.title}
                    </p>
                    <p className="text-[#8892A4] text-xs leading-relaxed">
                      {patent.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {patent.relevance.split(" · ").map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-[#E8F0FF] text-[#0066FF] text-[10px] font-semibold rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E8F0FF] text-[#0066FF] text-xs font-semibold group-hover:bg-[#0066FF] group-hover:text-white transition-colors flex-shrink-0">
                      <FileText size={12} />
                      View Patent
                    </span>
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
              <p className="text-white/80 text-base leading-relaxed mb-6">
                When 44 subsequent patents from major industry players cite this
                work, it is evidence of broad technological relevance — validation
                that this is foundational IP, not a niche filing. This citation
                record demonstrates the core science underpins a wide range of
                downstream applications and commercial interests.
              </p>
              <div className="bg-white/10 rounded-xl px-5 py-4 border border-white/20">
                <p className="text-white font-semibold text-sm mb-3">Who Is Citing This Work</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { type: "IVD & Diagnostics Manufacturers", detail: "Publicly traded medical device companies developing cartridge-based diagnostic systems" },
                    { type: "Academic & Research Institutions", detail: "University laboratories and national research centers advancing microfluidic science" },
                    { type: "Medical Device Companies", detail: "Instrument manufacturers and diagnostic platform developers across POC and lab settings" },
                  ].map((item) => (
                    <div key={item.type} className="bg-white/10 rounded-lg px-4 py-3">
                      <p className="text-white font-semibold text-xs mb-1">{item.type}</p>
                      <p className="text-white/70 text-xs leading-relaxed">{item.detail}</p>
                    </div>
                  ))}
                </div>
                <p className="text-white/60 text-xs mt-3 italic">
                  Full list of citing patents and assignees available for review under NDA.
                </p>
              </div>
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

      {/* Target Acquirers + Deal Structures */}
      <SectionWrapper gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Target Acquirers */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Globe size={20} className="text-[#0066FF]" />
              <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
                Ideal Partners &amp; Acquirers
              </p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-2xl md:text-3xl leading-tight tracking-tight mb-4">
              Who Should Own This Portfolio
            </h2>
            <p className="text-[#8892A4] text-sm leading-relaxed mb-6">
              The microfluidics diagnostics market is{" "}
              <strong className="text-[#0A1628]">$12B+ and growing at 20% annually</strong>.
              The companies below are the primary commercial universe
              for this technology — each actively developing or acquiring
              microfluidic and point-of-care diagnostic IP.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[
                { name: "Abbott Laboratories", note: "i-STAT · BinaxNOW POC" },
                { name: "Thermo Fisher Scientific", note: "Molecular Diagnostics" },
                { name: "Becton Dickinson", note: "Diagnostics Systems" },
                { name: "Danaher / Cepheid", note: "Rapid Molecular Testing" },
                { name: "Bio-Rad Laboratories", note: "Clinical Diagnostics" },
                { name: "Hologic", note: "Women&rsquo;s Health IVD" },
                { name: "Qiagen", note: "Sample Prep &amp; Assays" },
                { name: "Illumina", note: "Genomics Platforms" },
              ].map((co) => (
                <div key={co.name} className="bg-white border border-[#E2E8F0] rounded-xl px-4 py-3">
                  <p className="text-[#0A1628] font-bold text-xs leading-tight mb-0.5">{co.name}</p>
                  <p className="text-[#8892A4] text-[11px]" dangerouslySetInnerHTML={{ __html: co.note }} />
                </div>
              ))}
            </div>
          </div>

          {/* Deal Structures */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield size={20} className="text-[#0066FF]" />
              <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
                Deal Structures Available
              </p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-2xl md:text-3xl leading-tight tracking-tight mb-4">
              How to Acquire or License
            </h2>
            <p className="text-[#8892A4] text-sm leading-relaxed mb-6">
              We are open to multiple deal structures depending on the partner&apos;s needs and strategic objectives.
            </p>
            <div className="space-y-3 mb-8">
              {[
                {
                  label: "Outright Portfolio Sale",
                  desc: "One-time payment for full ownership transfer of all 5 granted patents and 3 pending applications. Simplest structure for a strategic acquirer.",
                  highlight: true,
                },
                {
                  label: "Exclusive License",
                  desc: "Upfront payment plus royalties. You gain exclusive rights to commercialize across agreed fields of use — we retain nominal ownership.",
                  highlight: false,
                },
                {
                  label: "Field-of-Use License",
                  desc: "Exclusive rights in one sector (e.g., diagnostics) while we license separately to non-competing markets (e.g., aerospace). Maximizes value for both parties.",
                  highlight: false,
                },
                {
                  label: "Co-Development Agreement",
                  desc: "Joint development partnership to extend the technology into your specific product platform — with milestone payments and licensing terms.",
                  highlight: false,
                },
              ].map((deal) => (
                <div
                  key={deal.label}
                  className={`rounded-xl px-5 py-4 border ${deal.highlight ? "bg-[#E8F0FF] border-[#0066FF]/30" : "bg-white border-[#E2E8F0]"}`}
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle size={15} className={`mt-0.5 flex-shrink-0 ${deal.highlight ? "text-[#0066FF]" : "text-green-500"}`} />
                    <div>
                      <p className={`font-bold text-sm mb-0.5 ${deal.highlight ? "text-[#0066FF]" : "text-[#0A1628]"}`}>{deal.label}</p>
                      <p className="text-[#8892A4] text-xs leading-relaxed">{deal.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Valuation & Pricing */}
            <div className="bg-[#0A1628] rounded-xl px-6 py-6 border border-white/5">
              <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-2">Valuation &amp; Pricing</p>
              <p className="text-white font-bold text-base mb-2">Pricing Available to Qualified Parties</p>
              <p className="text-white/60 text-sm leading-relaxed mb-4">
                Portfolio valuation and pricing details are available to qualified parties following NDA execution.
                To receive our confidential information memorandum, please{" "}
                <Link href="/contact/" className="text-[#0066FF] hover:underline">contact us</Link>{" "}
                or email us directly at{" "}
                <a href="mailto:info@surnetics.com" className="text-[#0066FF] hover:underline">info@surnetics.com</a>.
              </p>
              <Link
                href="/contact/?ref=summary"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-[#0066FF] text-white font-semibold text-xs hover:bg-blue-500 transition-colors duration-200"
              >
                Request One-Page Summary <ArrowRight size={13} />
              </Link>
            </div>
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
