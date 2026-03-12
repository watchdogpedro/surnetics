"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/technology/", label: "Technology" },
  { href: "/ip-portfolio/", label: "IP Portfolio" },
  { href: "/applications/", label: "Applications" },
  { href: "/markets/", label: "Markets" },
  { href: "/about/", label: "About" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start group">
            <Image
              src="/surnetics-logo.png"
              alt="Surnetics"
              width={480}
              height={156}
              className="h-[100px] w-auto object-contain"
              priority
            />
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#8892A4] ml-1">
              Patented Microfluidics IP
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#0066FF]"
                    : "text-gray-700 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              className="inline-flex items-center px-5 py-2 rounded bg-[#0066FF] text-white text-sm font-semibold hover:bg-blue-500 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-gray-700 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
            className="md:hidden bg-white border-t border-gray-100"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`text-base font-medium py-1 ${
                    pathname === link.href ? "text-[#0066FF]" : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact/"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center justify-center px-5 py-2.5 rounded bg-[#0066FF] text-white text-sm font-semibold mt-2"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
