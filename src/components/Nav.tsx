"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/content";
import Logo from "./Logo";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "bg-[#f8f7f4]/95 backdrop-blur-xl border-b border-black/8"
            : "bg-[#f8f7f4]/80 backdrop-blur-md border-b border-black/5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Logo size={32} color="#777777" />
            <span className="font-syne font-700 text-sm tracking-widest text-[#111] uppercase">
              Dental 78
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-dm text-sm tracking-wider transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#111]"
                    : "text-[#777] hover:text-[#111]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.vevidental.com/ddental/home"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#999] hover:text-[#777] transition-colors duration-200"
            >
              <svg width="6" height="6" viewBox="0 0 8 8" fill="currentColor">
                <circle cx="4" cy="4" r="3" />
              </svg>
              <span className="font-dm text-xs tracking-widest uppercase">Acceso clientes</span>
            </a>
            <Link
              href="/contacto"
              className="ml-2 px-5 py-2 border border-[#777]/40 text-[#111] text-sm font-dm tracking-wider hover:border-[#777] hover:bg-[#777]/8 transition-all duration-200"
            >
              Contacto
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menú"
          >
            <span className={`block w-5 h-px bg-[#111] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-px bg-[#111] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-[#111] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[#f8f7f4] flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                <Link href={link.href} className="font-syne text-3xl font-700 text-[#111] hover:text-[#777] transition-colors">
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}>
              <Link href="/contacto" className="mt-4 px-8 py-3 border border-[#777]/40 text-[#111] font-dm tracking-wider hover:bg-[#777]/10 transition-all">
                Contacto
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
