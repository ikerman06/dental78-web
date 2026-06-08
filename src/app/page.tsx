import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";
import ScrollReveal from "@/components/ScrollReveal";
import VideoPlayer from "@/components/VideoPlayer";
import { HERO, INTRO, SERVICES_GRID, PROCESS_STEPS } from "@/lib/content";
import HeroSection from "@/components/home/HeroSection";
import ServicesGrid from "@/components/home/ServicesGrid";
import ProcessSteps from "@/components/home/ProcessSteps";
import IntroSection from "@/components/home/IntroSection";
import HomeCTA from "@/components/home/HomeCTA";
import GaleriaTrabajos from "@/components/home/GaleriaTrabajos";

export const metadata: Metadata = {
  title: "Dental 78 — Laboratorio de Prótesis Dental en Barcelona",
  description:
    "Laboratorio de prótesis dental B2B en Barcelona. Más de 20 años de precisión técnica en cerámica, CAD/CAM, estructuras metálicas y férulas oclusales.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Marquee />
      <IntroSection />
      <ServicesGrid />
      <ProcessSteps />
      <GaleriaTrabajos />
      <HomeCTA />
    </>
  );
}
