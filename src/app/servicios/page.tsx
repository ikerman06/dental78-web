import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICES_DETAIL } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Cerámica, CAD/CAM, resinas, estructuras metálicas y férulas oclusales. Servicios de laboratorio dental de alta precisión en Barcelona.",
};

export default function ServiciosPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="font-dm text-xs tracking-[0.3em] text-[#777] uppercase mb-6">
              Especialidades
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-syne font-800 text-5xl md:text-6xl lg:text-7xl tracking-tighter text-[#111] leading-[1.02] max-w-4xl">
              Lo que fabricamos,<br />y cómo lo hacemos
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Services list */}
      <div>
        {SERVICES_DETAIL.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className="py-28 border-b border-black/8 scroll-mt-20"
          >
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                {/* Number + title */}
                <div className="lg:col-span-3">
                  <ScrollReveal>
                    <span className="font-syne font-800 text-7xl text-black/5 block mb-4">
                      0{index + 1}
                    </span>
                    <div className="w-8 h-px bg-brand mb-4" />
                    <h2 className="font-syne font-700 text-2xl tracking-tighter text-[#111]">
                      {service.title}
                    </h2>
                  </ScrollReveal>
                </div>

                {/* Description */}
                <div className="lg:col-span-5">
                  <ScrollReveal delay={0.1}>
                    <p className="font-dm text-sm text-[#555] leading-relaxed">
                      {service.description}
                    </p>
                  </ScrollReveal>
                </div>

                {/* Items */}
                <div className="lg:col-span-4">
                  <ScrollReveal delay={0.2}>
                    <ul className="space-y-3">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-2 w-1 h-1 rounded-full bg-brand shrink-0" />
                          <span className="font-dm text-sm text-[#555] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* BRUX-OUT teaser */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="border border-[#777]/20 p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <span className="font-dm text-xs tracking-[0.3em] text-[#777] uppercase block mb-3">
                  Próximamente
                </span>
                <h2 className="font-syne font-700 text-2xl tracking-tighter text-[#111] mb-2">
                  BRUX-OUT
                </h2>
                <p className="font-dm text-sm text-[#555] max-w-md">
                  Nuestra submarca especializada en soluciones para el bruxismo. Protocolo propio, materiales exclusivos y seguimiento individualizado.
                </p>
              </div>
              <div className="shrink-0">
                <span className="font-dm text-xs text-[#777] tracking-wider border border-[#777]/30 px-4 py-2">
                  En desarrollo
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
