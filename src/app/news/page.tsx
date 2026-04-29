import type { Metadata } from "next";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "News & Updates | Surnetics Microfluidics IP",
  description:
    "Latest news from Surnetics LLC — microfluidics patent portfolio updates, technology insights, and industry commentary on passive fluid control, lab-on-a-chip IP, and point-of-care diagnostics.",
  alternates: { canonical: "/news" },
};

const articles = [
  {
    date: "April 2026",
    tag: "Press Release",
    title: "Liquid Control Without Pumps, Valves, or Hardware: Becker Transactions Unveils Breakthrough Diagnostics with Surface Energy Gradient Coatings for Fast and Accurate Condition Monitoring and Disease Detection",
    slug: "becker-transactions-diagnostics-press-release",
    excerpt:
      "Becker Transactions, a world-leading patent brokerage firm, today announces a high-value patent portfolio set to revolutionize at-home and point-of-care diagnostic testing — enabling liquid control without pumps, valves, or hardware using Surface Energy Gradient Coatings.",
    body: `Becker Transactions, a world-leading patent brokerage firm, today proudly announces the availability of a high-value patent portfolio that is set to revolutionize at-home and point-of-care diagnostic testing. No Lab, No Power, No Problem: Diagnostic devices with Surface Energy Gradient Coatings work anywhere.

As the demand continues to grow for rapid, accurate, and easy-to-use diagnostic tests — ranging from disease screening to chronic condition monitoring — in non-laboratory locations such as at-home and point-of-care environments, current tests struggle with limitations in accuracy, flow variability, and fluid handling. Tests that require additional fluid addition or mixing steps from the user can also be prone to failure.

This innovative diagnostic patent portfolio, developed by Brian Babcock, covers surface energy gradient coating technology and microfluidic product designs that fundamentally transform how diagnostic devices manage liquid flow and testing. A surface energy gradient coating changes the capillary pressure applied to a liquid as it flows down a channel. These coatings can be used to control multiple flow characteristics on a device including flow velocity and stop/start behavior. Multiple channels can have different flow velocities, allowing for multiple tests with different reaction times to be performed in a single device while simplifying the design. Time delays for introducing reactants can be designed into the product without requiring additional user input. The portfolio currently consists of 5 granted patents and 3 pending patent applications (1 allowed). The earliest cases have a priority date of 2013, with the later patents in the portfolio extending to 2041.

"Using surface energy gradient coatings on a diagnostic device creates many opportunities that cannot be achieved in current at-home and point-of-care devices. Different channels can have different coatings that control fluid flow velocity, allowing for multiple tests or timed delivery of fluids to a zone," Babcock said. "For example, diabetes patients often want to monitor HbA1c levels and glucose levels, but glucose levels can be obtained in seconds while HbA1c levels often take 3 minutes or more. Using our gradient coatings we were able to create a flow channel for glucose testing and a flow channel for HbA1c testing, allowing a single blood sample to be tested for both. In another example, our coatings have been used to delay the delivery of an on-board wash sample to a reaction zone, allowing time for antibodies to bind to proteins before non-bound species were washed away. This design improves the accuracy of lateral flow tests while also greatly reducing the chance of user error."

By precisely engineering surface energy gradients, fluids move at controlled rates and paths, enabling accurate and reproducible test results that are critical for both qualitative and quantitative diagnostics. Instead of relying on complex pumps, wicking structures, multiple reagent additions, or conventional hardware, the precision coatings passively control fluid movement — enabling faster, simpler, and more reliable diagnostics for at-home, point-of-care, lab-on-a-chip, and other remote testing environments.

Mr. Babcock founded Surnetics LLC to develop and commercialize the technology. Although his initial inspiration for the technology was rocket nozzle cooling, he quickly recognized the benefits it would provide in diagnostic and life science applications. "From the beginning, work on the gradient coating technology has been focused on developing coating formulations and coating processes that meet the cost and volume requirements for large-scale precision manufacturing. We have developed coating formulations for the preferred plastic, metal, and glass materials used in diagnostic and life science applications. Our automated precision manufacturing process can support companies' development and early commercialization efforts and is also scalable and can be integrated into their product manufacturing lines."

**About Brian Babcock**

Brian Babcock is the inventor on the gradient coating technology patents. A recognized expert in coating and polymer materials, he has over 30 years of expertise with surface modification, specialty coatings, and material development across multiple industries. He is a registered patent agent with previous Intellectual Property Manager roles at Donaldson Company (filtration), SunEdison/GCL Solar Materials (solar and semiconductors), and Johnson & Johnson (life science). He holds BS and MS degrees in chemical engineering from Vanderbilt University.

**About Becker Transactions**

Becker Transactions is a world-leading patent brokerage firm expertly led by Dean Becker and Olivia Becker, a father-daughter team who bring a rich family legacy of navigating complex intellectual property transactions. Our team has collectively facilitated over $11 billion USD in intellectual property transactions. With decades of experience collaborating with inventors, government agencies, top research institutes, universities, and major corporations, we specialize in technology monetization — identifying essential intellectual property assets and connecting them with strategic buyers seeking competitive advantages.`,
  },
  {
    date: "March 2026",
    tag: "Company News",
    title: "Surnetics Patent Portfolio Listed for Acquisition or License",
    slug: "portfolio-listed-march-2026",
    excerpt:
      "Surnetics LLC has formally listed its portfolio of 5 granted US microfluidics patents for acquisition or exclusive licensing. The portfolio — covering passive fluid control through Surface Energy Gradient Coatings — is available for outright sale, exclusive license, or field-of-use licensing to IVD manufacturers and medical device companies.",
    body: `Surnetics LLC today announced that its portfolio of 5 granted US patents is available for acquisition or exclusive licensing by strategic partners in the life sciences, diagnostics, and medical device industries.

The portfolio covers Surface Energy Gradient Coating technology — a patented method for moving liquids through microfluidic channels without pumps, valves, or external power. The technology has been validated with diagnostic companies since 2014 and is protected through 2041.

**Deal Structures Available:**
- Outright portfolio sale (full ownership transfer of all 5 patents and 3 pending applications)
- Exclusive license (upfront + royalties, exclusive commercialization rights)
- Field-of-use license (exclusive rights in one sector, e.g., diagnostics)
- Co-development agreement

Parties interested in receiving a confidential information memorandum should contact us at info@surnetics.com or submit an inquiry at surnetics.com/contact. NDA required for full portfolio details.`,
  },
  {
    date: "February 2026",
    tag: "Technology",
    title: "Surface Energy Gradient Coatings: How Passive Flow Is Reshaping Point-of-Care Diagnostics",
    slug: "passive-flow-point-of-care-diagnostics",
    excerpt:
      "The biggest hidden cost in cartridge-based diagnostic systems is the pump. Passive flow technology eliminates it entirely — enabling a new class of portable, low-cost diagnostic devices with no moving parts, no external power, and no electronic controllers.",
    body: `The diagnostic industry has known for decades that pumps are the primary cost driver in portable testing systems. They require power, they fail, and they demand control electronics that add cost and complexity. For truly passive, field-deployable devices — the kind needed in remote clinics, emergency settings, and point-of-care environments — the pump has always been the barrier.

Surface Energy Gradient Coating technology removes that barrier entirely.

**How It Works**

By applying a precise gradient of surface energy along the walls of a microfluidic channel, a net capillary force is generated that self-propels liquid through the channel — with no external input of any kind. The flow rate is controlled entirely by the coating composition, not by electronics or mechanical pressure.

Multiple independent flow rates can be run on a single device layer. Multiple channels. No pumps. No valves. No controllers.

**Why It Matters for POC Diagnostics**

The implications for cartridge-based diagnostics are significant:
- Hardware costs reduced by 80%+ (no pump, no controller electronics)
- Smaller device footprint — enables truly portable instruments
- Fewer failure modes — no moving parts to wear out
- Deployable anywhere — no power source required for fluid movement

The Surnetics patent portfolio protects this technology across IVD systems, point-of-care testing, lateral flow assays, immunoassays, and sample preparation — covering both the method and the commercial product embodiments.

With 44 subsequent industry patents citing this work, the technology's relevance to the diagnostics market has been independently validated by the industry itself.`,
  },
  {
    date: "January 2026",
    tag: "IP Intelligence",
    title: "Why 44 Industry Patents Cite Our Microfluidics IP — And What That Means for Buyers",
    slug: "44-citations-what-it-means",
    excerpt:
      "Patent citation count is one of the strongest signals of IP value in a technology acquisition. When 44 subsequent filings from major industry players cite a patent, it means they built on it. Here is what the Surnetics citation record says about the value of this portfolio.",
    body: `In patent valuation, citation count is more than a metric — it is evidence of technological relevance. When a subsequent patent cites an earlier one, it is saying, in legal terms, that the earlier work forms part of the prior art foundation for the new invention.

When 44 subsequent industry patents cite the same core IP, it means the industry has been building on that foundation for years.

**What 44 Citations Signals**

For corporate IP buyers and licensing teams, a high forward citation count tells you several things:

1. **The technology is foundational** — not a niche filing, but a core method that subsequent innovators needed to acknowledge.
2. **The IP has survived scrutiny** — each examiner who issued one of those 44 subsequent patents reviewed the prior art, including the cited patent, and still granted new claims.
3. **Competitors may have exposure** — if a company citing this work has since commercialized a product, there may be licensing conversations worth having.
4. **The field is active** — 44 citations across IVD manufacturers, medical device companies, and research institutions confirms this is not a dormant technology area.

**Who Is Citing This Work**

The citing patents span publicly traded medical device companies, diagnostic instrument manufacturers, academic research centers, and medical device startups — across IVD diagnostics, point-of-care testing, drug delivery, and biosensing.

The full list of citing patents and assignees is available for review under NDA as part of the Surnetics confidential information memorandum.

**For Buyers: What This Means Practically**

If you are a corporate IP counsel or VP of R&D at a diagnostics company evaluating this portfolio, the citation record is your first validation signal. It tells you the core science is real, the claims are defensible, and the industry has already acknowledged the relevance of this IP.

To request the confidential information memorandum — including the full citation analysis — contact us at info@surnetics.com.`,
  },
];

export default function NewsPage() {
  return (
    <>
      <NavBar />

      {/* Header */}
      <section className="bg-[#0A1628] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-[#0066FF] text-xs font-semibold uppercase tracking-widest mb-4">
              News &amp; Updates
            </p>
            <h1 className="text-white font-extrabold text-4xl md:text-5xl leading-tight tracking-tight mb-6">
              Latest from Surnetics
            </h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Technology insights, IP updates, and industry commentary on passive
              microfluidics, patent licensing, and the diagnostics market.
            </p>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-[#F5F7FA] py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-10">
            {articles.map((article) => (
              <article
                key={article.slug}
                className="bg-white border border-[#E2E8F0] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="px-7 py-7 md:px-10 md:py-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-2.5 py-1 bg-[#E8F0FF] text-[#0066FF] text-[10px] font-bold uppercase tracking-widest rounded-full">
                      {article.tag}
                    </span>
                    <span className="flex items-center gap-1.5 text-[#8892A4] text-xs">
                      <Calendar size={11} />
                      {article.date}
                    </span>
                  </div>
                  <h2 className="text-[#0A1628] font-extrabold text-xl md:text-2xl leading-tight tracking-tight mb-3">
                    {article.title}
                  </h2>
                  <p className="text-[#8892A4] text-sm leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="max-w-3xl mt-16 bg-[#0A1628] rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <p className="text-white font-bold text-base mb-1">Ready to explore the portfolio?</p>
              <p className="text-white/50 text-sm">Contact us to request the confidential information memorandum.</p>
            </div>
            <Link
              href="/contact/"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
            >
              Get in Touch <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
