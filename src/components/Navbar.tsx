"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Paket Wisata", href: "/paket" },
    { name: "Armada", href: "/armada" },
    { name: "Pemesanan", href: "/booking" },
    { name: "Kontak & Alamat", href: "/lokasi" },
  ];

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`absolute top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isHome
            ? "bg-transparent border-white/10"
            : "bg-[#0e1b2e] border-white/10 shadow-md"
        }`}
      >
        <div className="mx-auto flex items-center justify-between max-w-7xl p-4 md:px-8">
          {/* Left: Logo Transparan */}
          <Link
            href="/"
            className="flex items-center gap-3 transition-opacity hover:opacity-90"
            aria-label="Trip Banua Kita - Kembali ke Beranda"
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white p-1.5 shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Asset/LOGO BANUA.png"
                alt="Trip Banua Kita Logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="font-nunito font-semibold text-lg tracking-tight text-white leading-none">
              Trip Banua Kita
            </span>
          </Link>

          {/* Center: Desktop nav links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 relative py-1 after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-brand-accent after:transition-all after:duration-300 ${
                    active
                      ? "text-white after:w-1/2"
                      : "text-white/80 hover:text-white after:w-0 hover:after:w-1/2"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Right: Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/booking"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-2 text-xs font-bold transition-all duration-300 bg-brand-accent text-white hover:bg-brand-accent-light shadow-sm"
            >
              <span>Booking Sekarang</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          {/* Mobile: Hamburger / X toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center p-2 md:hidden text-white relative w-10 h-10 focus:outline-none"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Tutup menu" : "Buka menu"}
          >
            <div className="w-6 h-5 flex flex-col justify-between relative">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center ${
                  isOpen ? "rotate-45 translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 transform origin-center ${
                  isOpen ? "-rotate-45 -translate-y-[9px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* === MOBILE FULLSCREEN POPUP MENU === */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-[#0e1b2e]/60 backdrop-blur-sm z-[998] md:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            <nav
              id="mobile-menu"
              className="fixed inset-0 z-[999] flex items-center justify-center md:hidden"
              aria-label="Mobile Navigation"
              onClick={() => setIsOpen(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 32, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 32, opacity: 0 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-[#0e1b2e] border border-white/10 rounded-3xl shadow-2xl w-[85vw] max-w-sm p-8 flex flex-col items-center gap-5"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-white p-1.5 shadow-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/Asset/LOGO BANUA.png"
                      alt="Trip Banua Kita Logo"
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <span className="font-nunito font-semibold text-lg text-white tracking-tight">
                    Trip Banua Kita
                  </span>
                </div>

                <div className="w-12 h-0.5 bg-brand-accent/20 rounded-full" />

                {navLinks.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`text-base font-semibold tracking-wide transition-all duration-200 py-1.5 ${
                        active
                          ? "text-brand-accent font-bold"
                          : "text-white/70 hover:text-brand-accent"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}

                <div className="w-12 h-0.5 bg-brand-accent/20 rounded-full" />

                <Link
                  href="/booking"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center justify-center gap-2 w-full rounded-2xl bg-brand-accent py-3 text-sm font-bold text-white hover:bg-brand-accent-light transition-colors duration-200"
                >
                  <span>Booking Sekarang</span>
                </Link>
              </motion.div>
            </nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
