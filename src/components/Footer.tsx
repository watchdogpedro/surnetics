import Link from "next/link";

const footerLinks = [
  { href: "/technology/", label: "Technology" },
  { href: "/ip-portfolio/", label: "IP Portfolio" },
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
              Surnetics technology is available for licensing, co-development, and
              strategic partnership. Patent protection active through 2034.
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
              <div className="flex items-center gap-2 mb-4">
                <div className="w-7 h-7 rounded bg-[#0066FF] flex items-center justify-center">
                  <span className="text-white font-black text-xs">S</span>
                </div>
                <span className="text-white font-bold text-base">Surnetics</span>
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
                Intellectual Property
              </h3>
              <p className="text-white/60 text-sm mb-2">
                US Patent No. 9,968,930 B2
              </p>
              <p className="text-white/40 text-xs leading-relaxed">
                &ldquo;Microfluidic Products with Controlled Fluid Flow&rdquo;
                <br />
                Granted May 15, 2018 · Active until 2034
              </p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 mt-10 pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <p className="text-white/30 text-xs">
              &copy; {new Date().getFullYear()} Surnetics LLC. All rights reserved.
            </p>
            <p className="text-white/20 text-xs">
              US Patent 9,968,930 B2 · surnetics.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
