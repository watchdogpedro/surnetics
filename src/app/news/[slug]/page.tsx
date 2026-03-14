import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowLeft, ArrowRight, Calendar } from "lucide-react";

const articles = [
  {
    date: "March 2026",
    tag: "Company News",
    title: "Surnetics Patent Portfolio Listed for Acquisition or License",
    slug: "portfolio-listed-march-2026",
    excerpt:
      "Surnetics LLC has formally listed its portfolio of 5 granted US microfluidics patents for acquisition or exclusive licensing.",
    body: [
      "Surnetics LLC today announced that its portfolio of 5 granted US patents is available for acquisition or exclusive licensing by strategic partners in the life sciences, diagnostics, and medical device industries.",
      "The portfolio covers Surface Energy Gradient Coating technology — a patented method for moving liquids through microfluidic channels without pumps, valves, or external power. The technology has been validated with diagnostic companies since 2014 and is protected through 2041.",
      "Deal structures available include outright portfolio sale (full ownership transfer of all 5 patents and 3 pending applications), exclusive license with upfront payment plus royalties, field-of-use license for one sector such as diagnostics, and co-development agreement with milestone payments and licensing terms.",
      "Parties interested in receiving a confidential information memorandum should contact Surnetics directly. NDA required for full portfolio details and pricing.",
    ],
  },
  {
    date: "February 2026",
    tag: "Technology",
    title: "Surface Energy Gradient Coatings: How Passive Flow Is Reshaping Point-of-Care Diagnostics",
    slug: "passive-flow-point-of-care-diagnostics",
    excerpt:
      "The biggest hidden cost in cartridge-based diagnostic systems is the pump. Passive flow technology eliminates it entirely.",
    body: [
      "The diagnostic industry has known for decades that pumps are the primary cost driver in portable testing systems. They require power, they fail, and they demand control electronics that add cost and complexity. For truly passive, field-deployable devices — the kind needed in remote clinics, emergency settings, and point-of-care environments — the pump has always been the barrier.",
      "Surface Energy Gradient Coating technology removes that barrier entirely. By applying a precise gradient of surface energy along the walls of a microfluidic channel, a net capillary force is generated that self-propels liquid through the channel — with no external input of any kind. The flow rate is controlled entirely by the coating composition, not by electronics or mechanical pressure.",
      "Multiple independent flow rates can be run on a single device layer. Multiple channels. No pumps. No valves. No controllers.",
      "The implications for cartridge-based diagnostics are significant. Hardware costs are reduced by 80% or more with no pump and no controller electronics. Devices are smaller, enabling truly portable instruments. With fewer moving parts, there are fewer failure modes. And devices can be deployed anywhere — no power source required for fluid movement.",
      "The Surnetics patent portfolio protects this technology across IVD systems, point-of-care testing, lateral flow assays, immunoassays, and sample preparation — covering both the method and the commercial product embodiments. With 44 subsequent industry patents citing this work, the technology's relevance to the diagnostics market has been independently validated by the industry itself.",
    ],
  },
  {
    date: "January 2026",
    tag: "IP Intelligence",
    title: "Why 44 Industry Patents Cite Our Microfluidics IP — And What That Means for Buyers",
    slug: "44-citations-what-it-means",
    excerpt:
      "Patent citation count is one of the strongest signals of IP value in a technology acquisition. Here is what the Surnetics citation record means for buyers.",
    body: [
      "In patent valuation, citation count is more than a metric — it is evidence of technological relevance. When a subsequent patent cites an earlier one, it is saying, in legal terms, that the earlier work forms part of the prior art foundation for the new invention. When 44 subsequent industry patents cite the same core IP, it means the industry has been building on that foundation for years.",
      "For corporate IP buyers and licensing teams, a high forward citation count tells you several things. The technology is foundational — not a niche filing, but a core method that subsequent innovators needed to acknowledge. The IP has survived scrutiny — each examiner who issued one of those 44 subsequent patents reviewed the prior art and still granted new claims. Competitors may have exposure — if a company citing this work has since commercialized a product, there may be licensing conversations worth having. And the field is active — 44 citations across IVD manufacturers, medical device companies, and research institutions confirms this is not a dormant technology area.",
      "The citing patents span publicly traded medical device companies, diagnostic instrument manufacturers, academic research centers, and medical device startups — across IVD diagnostics, point-of-care testing, drug delivery, and biosensing. The full list of citing patents and assignees is available for review under NDA as part of the Surnetics confidential information memorandum.",
      "If you are a corporate IP counsel or VP of R&D at a diagnostics company evaluating this portfolio, the citation record is your first validation signal. It tells you the core science is real, the claims are defensible, and the industry has already acknowledged the relevance of this IP.",
    ],
  },
];

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) return {};
  return {
    title: `${article.title} | Surnetics`,
    description: article.excerpt,
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <>
      <NavBar />

      <section className="bg-[#0A1628] pt-32 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/news/"
            className="inline-flex items-center gap-1.5 text-white/40 hover:text-white/70 text-xs font-semibold mb-8 transition-colors"
          >
            <ArrowLeft size={12} /> Back to News
          </Link>
          <div className="flex items-center gap-3 mb-5">
            <span className="px-2.5 py-1 bg-[#0066FF]/20 text-[#4DA3FF] text-[10px] font-bold uppercase tracking-widest rounded-full">
              {article.tag}
            </span>
            <span className="flex items-center gap-1.5 text-white/40 text-xs">
              <Calendar size={11} />
              {article.date}
            </span>
          </div>
          <h1 className="text-white font-extrabold text-3xl md:text-4xl leading-tight tracking-tight">
            {article.title}
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none">
            {article.body.map((para, i) => (
              <p key={i} className="text-[#4A5568] text-base leading-relaxed mb-5">
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-[#E2E8F0] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            <div>
              <p className="text-[#0A1628] font-bold text-sm mb-1">Interested in the portfolio?</p>
              <p className="text-[#8892A4] text-xs">Contact us to request a confidential information memorandum.</p>
            </div>
            <Link
              href="/contact/"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/news/"
              className="inline-flex items-center gap-1.5 text-[#8892A4] hover:text-[#0066FF] text-sm font-semibold transition-colors"
            >
              <ArrowLeft size={13} /> All articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
