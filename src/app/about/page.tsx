import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import TeamCard from "@/components/TeamCard";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "About | Team & Company",
  description:
    "Surnetics LLC — inventors and commercializers of patented Surface Energy Gradient Coating technology. Meet the team: Brian Babcock (inventor), Paul Denman, Jeff Shonkwiler, and Terry Rusch.",
};

const team = [
  {
    initials: "BB",
    name: "Brian Babcock",
    title: "Inventor & President",
    bio: "Brian invented all of Surnetics' Surface Energy Gradient Coating technology and is the lead inventor on the core US patent. As a Registered US Patent Agent with deep experience in IP strategy and commercial valuation, he oversees the company's technical development and patent portfolio.",
    credentials: [
      "Inventor, US Patent 9,968,930 B2",
      "Registered US Patent Agent",
      "Former IP Manager, Donaldson Company",
      "B.S. & M.S. Chemical Engineering, Vanderbilt University",
      "7 years, Argonne National Laboratory — nuclear reactor design",
      "Specialty electrodeposited coatings for NASA and Department of Defense",
      "Expert in patent portfolio development, analysis, and commercial valuation",
    ],
  },
  {
    initials: "PD",
    name: "Paul Denman",
    title: "Co-Founder & Director of Business Development",
    bio: "Paul brings 20+ years of industry experience across life sciences, medical devices, semiconductor, manufacturing automation, and defense. He leads Surnetics' commercialization strategy and business development, drawing on extensive global industry contacts and a track record in technology partnerships and M&A.",
    credentials: [
      "Engineering and biomedical engineering background",
      "20+ years across life sciences, medical device, semiconductor, defense",
      "Global technology scout and commercialization expert",
      "Experience in M&A, joint development, and technology partnerships",
      "Extensive global industry contacts across target markets",
    ],
  },
  {
    initials: "JS",
    name: "Jeff Shonkwiler",
    title: "Director of Manufacturing",
    bio: "Jeff is a recognized expert in microfluidic IVD device manufacturing and scale-up. His experience spans the full commercialization journey from prototype through high-volume production, with tenures at leading medical device and technology companies.",
    credentials: [
      "Expert in microfluidic IVD device manufacturing and scale-up",
      "Medtronic",
      "St. Jude Medical",
      "IBM",
      "3M",
      "Ativa Medical",
    ],
  },
  {
    initials: "TR",
    name: "Terry Rusch",
    title: "Senior Advisor",
    bio: "Terry brings over 20 years of experience in DNA diagnostics and genetic testing, including hands-on work with some of the most demanding microfluidic assay platforms in the industry. His invention work and cost reduction achievements are a benchmark for what precision engineering can accomplish.",
    credentials: [
      "20+ years in DNA diagnostics and genetic testing",
      "Marshfield Clinic",
      "Prevention Genetics",
      "Douglas Scientific",
      "Lead inventor on genotyping patents",
      "Reduced genotype test cost from $2.50 to $0.05",
    ],
  },
];

const milestones = [
  { year: "2014", event: "PCT Application Filed", detail: "International patent application filed, establishing worldwide priority for Surface Energy Gradient Coating technology." },
  { year: "2018", event: "US Patent Granted", detail: "US Patent 9,968,930 B2 granted. Core claims covering microfluidic products with controlled fluid flow." },
  { year: "2018–2023", event: "Portfolio Development", detail: "Continuation applications filed, expanding and deepening the claim portfolio while maintaining priority dates." },
  { year: "2024", event: "Commercialization Begins", detail: "Surnetics LLC formally established. Active pursuit of licensing partnerships and co-development agreements across six target markets." },
];

export default function AboutPage() {
  return (
    <>
      <NavBar />

      {/* Header */}
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              About Surnetics
            </p>
            <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
              Inventors. Patent Agents. Industry Veterans.
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Surnetics LLC is a patented technology company founded to
              commercialize a breakthrough platform that moves liquids through
              microfluidic channels without any pump, valve, or controller.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-6">
              Enabling the Next Generation of Microfluidic Products
            </h2>
            <div className="space-y-4 text-[#8892A4] text-base leading-relaxed">
              <p>
                For decades, microfluidic systems have been held back by a
                fundamental constraint: moving liquids requires pumps. Pumps add
                cost. Pumps fail. Pumps require power and control electronics.
                They are the primary cost driver in portable diagnostic systems
                and a critical barrier to truly passive device architectures.
              </p>
              <p>
                Surnetics was founded to change that. Our Surface Energy Gradient
                Coating technology removes the pump from the equation — enabling
                a new class of microfluidic products that are simpler, cheaper,
                more reliable, and deployable in environments where powered
                systems are impractical.
              </p>
              <p>
                We are not building products. We are enabling partners to build
                better ones — through licensing, co-development, and technology
                partnerships anchored by a deep, active patent portfolio.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Core Patent", value: "US 9,968,930 B2" },
              { label: "Protection Horizon", value: "2034" },
              { label: "Patent Citations", value: "44" },
              { label: "Target Markets", value: "6" },
            ].map((s) => (
              <div key={s.label} className="bg-[#F5F7FA] border border-[#E2E8F0] rounded-xl p-5 text-center">
                <p className="text-[#0A1628] font-extrabold text-xl md:text-2xl tracking-tight mb-1">{s.value}</p>
                <p className="text-[#8892A4] text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Team */}
      <SectionWrapper gray>
        <div className="max-w-2xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
            The Team
          </p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
            Deep Expertise Across Technology, IP, and Industry
          </h2>
          <p className="text-[#8892A4] text-base leading-relaxed">
            The Surnetics team combines the inventor of the technology with
            seasoned industry veterans across manufacturing, diagnostics, and
            business development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {team.map((member) => (
            <TeamCard key={member.name} {...member} />
          ))}
        </div>
      </SectionWrapper>

      {/* Timeline */}
      <SectionWrapper>
        <div className="max-w-2xl mb-12">
          <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-3">
            Company History
          </p>
          <h2 className="text-[#0A1628] font-extrabold text-3xl md:text-4xl leading-tight tracking-tight">
            Key Milestones
          </h2>
        </div>

        <div className="relative max-w-3xl">
          <div className="absolute left-16 top-0 bottom-0 w-px bg-[#E2E8F0]" />
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div key={i} className="relative pl-24">
                <span className="absolute left-0 top-3 text-[#0066FF] font-bold text-xs w-14 text-right">
                  {m.year}
                </span>
                <div className="absolute left-[61px] top-4 w-3 h-3 rounded-full bg-[#0066FF] border-2 border-white shadow-sm" />
                <div className="bg-[#F5F7FA] border border-[#E2E8F0] rounded-xl p-5">
                  <h3 className="text-[#0A1628] font-bold text-sm mb-1.5">{m.event}</h3>
                  <p className="text-[#8892A4] text-xs leading-relaxed">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper dark>
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-white font-extrabold text-3xl leading-tight tracking-tight mb-4">
            Ready to Explore a Partnership?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-8">
            We are actively seeking licensing partners and co-development
            agreements. Contact us to start a conversation.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </SectionWrapper>

      <Footer />
    </>
  );
}
