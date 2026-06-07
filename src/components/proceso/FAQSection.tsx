"use client";
import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { FAQ } from "@/lib/content";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <ScrollReveal>
              <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-4">FAQ</p>
              <h2 className="font-syne font-700 text-3xl tracking-tighter text-cream">
                Preguntas frecuentes de clínicas nuevas
              </h2>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-8">
            <div className="space-y-0">
              {FAQ.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="border-b border-white/5">
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full flex items-center justify-between py-6 text-left gap-4"
                    >
                      <span className="font-syne font-600 text-sm text-cream pr-4">{item.q}</span>
                      <span className="shrink-0 w-5 h-5 flex items-center justify-center border border-brand/30 text-brand text-xs">
                        {open === i ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        open === i ? "max-h-48 pb-6" : "max-h-0"
                      }`}
                    >
                      <p className="font-dm text-sm text-accent leading-relaxed">{item.a}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
