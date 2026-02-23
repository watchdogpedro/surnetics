import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import PatentCard from "@/components/PatentCard";
import { Shield, Globe, ArrowRight, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "IP Portfolio | Patented Microfluidic Technology",
  description:
    "Surnetics holds an active US patent portfolio protecting Surface Energy Gradient Coating technology. US Patent 9,968,930 B2, active until 2034, cited by 44 subsequent patents.",
};

const worldwideApps = [
  { year: "2014", label: "PCT Application Filed", description: "International Patent Cooperation Treaty application filing establishes worldwide priority." },
  { year: "2018", label: "US Patent Granted", description: "US 9,968,930 B2 granted May 15, 2018. Core claims covering microfluidic products with controlled fluid flow." },
  { year: "2020", label: "Continuation Application", description: "US continuation application filed, extending patent family with additional claim scope." },
  { year: "2023", label: "Continuation Application", description: "Additional US continuation application filed, further broadening the protected claim landscape." },
];

export default function IPPortfolioPage() {
  return (
    <>
      <NavBar />

      {/* Header */}
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              Intellectual Property
            </p>
            <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
              A Deep Patent Portfolio Built to Protect Your Investment
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Surnetics technology is protected by an active US patent portfolio
              with continuation applications extending protection through 2034 and
              beyond. Partners gain exclusive access to technology that cannot be
              commercially replicated.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Patent */}
      <SectionWrapper gray>
        <div className="max-w-2xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
            Core Patent
          </p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            The Foundation of the Portfolio
          </h2>
          <p className="text-[#8892A4] text-base leading-relaxed">
            The core issued patent covers the fundamental method and apparatus for
            creating surface energy gradients that passively control fluid flow in
            microfluidic channels.
          </p>
        </div>

        <div className="max-w-2xl">
          <PatentCard
            number="US 9,968,930 B2"
            title="Microfluidic Products with Controlled Fluid Flow"
            inventor="Brian David Babcock"
            assignee="Surnetics LLC"
            filed="March 26, 2014"
            granted="May 15, 2018"
            expires="2034"
            claims={20}
            citations={44}
            status="ACTIVE"
          />
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

      {/* Worldwide Applications Timeline */}
      <SectionWrapper>
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Globe size={20} className="text-[#0066FF]" />
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
              Worldwide Coverage
            </p>
          </div>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Patent Family Timeline
          </h2>
          <p className="text-[#8892A4] text-base leading-relaxed">
            The portfolio spans international filings and multiple US continuation
            applications, reflecting a deliberate strategy to maximize protection
            scope and longevity.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-[#E2E8F0] hidden md:block" />

          <div className="space-y-6">
            {worldwideApps.map((app, i) => (
              <div key={i} className="relative md:pl-20">
                {/* Dot */}
                <div className="hidden md:flex absolute left-0 top-4 w-16 items-center justify-end">
                  <div className="w-4 h-4 rounded-full bg-[#0066FF] border-4 border-white shadow-sm" />
                </div>

                <div className="bg-[#F5F7FA] border border-[#E2E8F0] rounded-xl p-6">
                  <div className="flex flex-wrap items-start gap-4 justify-between mb-2">
                    <span className="text-[#0066FF] font-extrabold text-xl">{app.year}</span>
                    <span className="text-[#0A1628] font-semibold text-sm">{app.label}</span>
                  </div>
                  <p className="text-[#8892A4] text-sm leading-relaxed">{app.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Continuation Applications */}
      <SectionWrapper gray>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <FileText size={20} className="text-[#0066FF]" />
              <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest">
                Portfolio Depth
              </p>
            </div>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              Continuation Applications
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>
                Beyond the core issued patent, the Surnetics portfolio includes
                issued patents and continuation applications that extend and expand
                the scope of protection.
              </p>
              <p>
                Continuation applications preserve priority dates while allowing
                claim refinement — a deliberate IP strategy that strengthens the
                portfolio and increases the difficulty of designing around the
                protected technology.
              </p>
              <p>
                The portfolio has been developed and is maintained by Brian
                Babcock, a Registered US Patent Agent with direct expertise in
                patent portfolio development, analysis, and commercial valuation.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { icon: <Shield size={16} />, title: "Active Core Patent", desc: "US 9,968,930 B2 — issued and actively maintained. Full prosecution history available under NDA." },
              { icon: <FileText size={16} />, title: "Continuation Applications", desc: "Multiple US continuation applications extending claim scope beyond the core patent." },
              { icon: <Globe size={16} />, title: "International Priority", desc: "PCT filing establishes worldwide priority date from 2014." },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-5 bg-white border border-[#E2E8F0] rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-[#E8F0FF] flex items-center justify-center text-[#0066FF] flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[#0A1628] font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-[#8892A4] text-xs leading-relaxed">{item.desc}</p>
                </div>
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
            Patent protection active through 2034 provides a long runway for
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
    </>
  );
}
