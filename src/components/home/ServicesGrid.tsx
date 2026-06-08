import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICES_GRID } from "@/lib/content";

export default function ServicesGrid() {
  return (
    <section className="py-32 border-b border-black/8 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-dm text-xs tracking-[0.3em] text-[#777] uppercase mb-4">Especialidades</p>
              <h2 className="font-syne font-800 text-3xl md:text-4xl tracking-tighter text-[#111]">
                Lo que fabricamos
              </h2>
            </div>
            <Link href="/servicios" className="hidden md:flex items-center gap-2 font-dm text-sm text-[#777] hover:text-[#111] transition-colors">
              Ver todos los servicios <span>→</span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/8">
          {SERVICES_GRID.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.08}>
              <Link
                href={service.href}
                className="group relative block bg-white p-8 hover:bg-[#f8f7f4] transition-colors duration-300 overflow-hidden"
              >
                <span className="font-syne text-5xl font-800 text-black/5 group-hover:text-[#777]/15 transition-colors duration-300 block mb-6">
                  0{i + 1}
                </span>
                <h3 className="font-syne font-700 text-lg text-[#111] mb-3">{service.title}</h3>
                <p className="font-dm text-sm text-[#555] leading-relaxed">{service.short}</p>
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-4 h-px bg-[#777]" />
                  <span className="font-dm text-xs text-[#777] tracking-wider">Ver más</span>
                </div>
                {/* Top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-[#777] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </ScrollReveal>
          ))}

          {/* CTA card */}
          <ScrollReveal delay={SERVICES_GRID.length * 0.08}>
            <Link
              href="/contacto"
              className="group block bg-[#111] p-8 flex flex-col justify-between h-full hover:bg-[#222] transition-colors duration-300"
            >
              <div>
                <p className="font-syne font-800 text-5xl text-white/10 mb-6">→</p>
                <h3 className="font-syne font-700 text-lg text-white mb-3">
                  ¿Tu clínica aún no trabaja con nosotros?
                </h3>
                <p className="font-dm text-sm text-white/60">
                  Escríbenos y estudiamos cómo podemos incorporarte.
                </p>
              </div>
              <div className="mt-8">
                <span className="font-dm text-sm text-white/70 tracking-wider border-b border-white/20 pb-1 group-hover:border-white/50 transition-colors">
                  Contactar
                </span>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
