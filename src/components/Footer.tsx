import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  { href: "/technology/", label: "Technology" },
  { href: "/ip-portfolio/", label: "IP Portfolio" },
  { href: "/applications/", label: "Applications" },
  { href: "/markets/", label: "Markets" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white">
      {/* CTA Band */}
      <div className="border-t border-white/10 bg-[#112040]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Explore Licensing Opportunities
            </h2>
            <p className="text-white/60 text-base mb-8 max-w-lg">
              A portfolio of 5 granted US patents in microfluidics — available for
              outright sale, exclusive license, or field-of-use licensing. Patent
              protection active through 2041.
            </p>
            <Link
              href="/contact/"
              className="inline-flex items-center px-7 py-3 rounded bg-[#0066FF] text-white font-semibold text-sm hover:bg-blue-500 transition-colors duration-200"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Brand */}
            <div>
              <div className="mb-4">
                <Image
                  src="/surnetics-logo-tagline.png"
                  alt="Surnetics — Patented Microfluidics IP"
                  width={240}
                  height={78}
                  className="h-12 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white/50 text-sm leading-relaxed max-w-xs">
                Patented Surface Energy Gradient Coating technology — the only
                commercial source for pump-free microfluidic flow control.
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/60 text-sm hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* IP Info */}
            <div>
              <h3 className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-4">
                Patent Portfolio
              </h3>
              <ul className="space-y-1 text-white/50 text-xs leading-relaxed mb-4">
                <li>US 12,263,480 · US 12,083,517 · US 11,583,858</li>
                <li>US 10,821,438 · US 9,968,930</li>
              </ul>
              <p className="text-white/40 text-xs leading-relaxed">
                Microfluidics &amp; Lab-on-a-Chip IP
                <br />
                Available for Sale or License · Active through 2041
              </p>
            </div>
          </div>

          {/* Keyword text for SEO */}
          <div className="border-t border-white/10 mt-10 pt-8">
            <p className="text-white/20 text-xs leading-relaxed mb-3">
              Surnetics | Microfluidics Patent Portfolio · Patents available for sale, exclusive license, or non-exclusive license.
              Applications: Point-of-Care Diagnostics · Molecular Diagnostics · Lab-on-a-Chip · Biosensors · Drug Delivery · Clinical Laboratory Automation · Wearable Devices
            </p>
            <p className="text-white/15 text-xs leading-relaxed mb-6">
              Relevant industry buyers: Abbott · Thermo Fisher Scientific · Danaher · Bio-Rad Laboratories · Becton Dickinson · Hologic · Qiagen · Agilent Technologies · Siemens Healthineers · Roche Diagnostics · bioMérieux · 10x Genomics · Illumina
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <p className="text-white/30 text-xs">
                &copy; {new Date().getFullYear()} Surnetics LLC. All rights reserved.
              </p>
              <p className="text-white/20 text-xs">
                5 Granted US Patents · surnetics.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
