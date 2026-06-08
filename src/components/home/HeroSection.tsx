"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import VideoPlayer from "@/components/VideoPlayer";
import { HERO } from "@/lib/content";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#f8f7f4]">
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 w-full py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.p {...fadeUp(0.1)} className="font-dm text-xs tracking-[0.3em] text-[#777] uppercase mb-8">
              {HERO.overline}
            </motion.p>

            <motion.h1 {...fadeUp(0.25)} className="font-syne font-800 text-4xl md:text-5xl lg:text-6xl leading-[1.05] tracking-tighter text-[#111] mb-8 whitespace-pre-line">
              {HERO.title}
            </motion.h1>

            <motion.p {...fadeUp(0.4)} className="font-dm text-base text-[#555] leading-relaxed max-w-md mb-10">
              {HERO.subtitle}
            </motion.p>

            <motion.div {...fadeUp(0.55)} className="flex flex-wrap gap-4 mb-16">
              <Link
                href={HERO.cta_primary.href}
                className="px-7 py-3.5 bg-[#111] text-[#f8f7f4] font-dm text-sm tracking-wider hover:bg-[#333] transition-all duration-300"
              >
                {HERO.cta_primary.label}
              </Link>
              <Link
                href={HERO.cta_secondary.href}
                className="px-7 py-3.5 text-[#777] font-dm text-sm tracking-wider hover:text-[#111] transition-colors duration-200"
              >
                {HERO.cta_secondary.label} →
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(0.7)} className="flex gap-10">
              {HERO.stats.map((s) => (
                <div key={s.label}>
                  <p className="font-syne font-700 text-2xl text-[#111]">{s.value}</p>
                  <p className="font-dm text-xs text-[#777] tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — video */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full"
          >
            <VideoPlayer />
            <div className="absolute -bottom-6 right-0 flex items-center gap-2">
              <span className="w-6 h-px bg-[#777]/40" />
              <span className="font-dm text-xs text-[#777] tracking-widest uppercase">Laboratorio — Barcelona</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-dm text-[10px] tracking-[0.3em] text-[#999] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-8 bg-[#777]/30"
        />
      </motion.div>
    </section>
  );
}
