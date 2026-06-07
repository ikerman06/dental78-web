import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import { SERVICES_GRID } from "@/lib/content";

export default function ServicesGrid() {
  return (
    <section className="py-32 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <div className="flex items-end justify-between mb-16">
            <div>
              <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-4">
                Especialidades
              </p>
              <h2 className="font-syne font-800 text-3xl md:text-4xl tracking-tighter text-cream">
                Lo que fabricamos
              </h2>
            </div>
            <Link
              href="/servicios"
              className="hidden md:flex items-center gap-2 font-dm text-sm text-accent hover:text-cream transition-colors"
            >
              Ver todos los servicios <span>→</span>
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES_GRID.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.08}>
              <Link
                href={service.href}
                className="group block bg-[#080808] p-8 hover:bg-dark-1 transition-colors duration-300"
              >
                {/* Number */}
                <span className="font-syne text-5xl font-800 text-white/5 group-hover:text-brand/20 transition-colors duration-300 block mb-6">
                  0{i + 1}
                </span>

                <h3 className="font-syne font-700 text-lg text-cream mb-3 group-hover:text-cream">
                  {service.title}
                </h3>
                <p className="font-dm text-sm text-accent leading-relaxed">{service.short}</p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="w-4 h-px bg-brand" />
                  <span className="font-dm text-xs text-brand tracking-wider">Ver más</span>
                </div>

                {/* Top border on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            </ScrollReveal>
          ))}

          {/* CTA card */}
          <ScrollReveal delay={SERVICES_GRID.length * 0.08}>
            <Link
              href="/contacto"
              className="group block bg-dark-1 border border-brand/20 hover:border-brand/50 p-8 flex flex-col justify-between h-full transition-colors duration-300"
            >
              <div>
                <p className="font-syne font-800 text-5xl text-white/5 mb-6">→</p>
                <h3 className="font-syne font-700 text-lg text-cream mb-3">
                  ¿Tu clínica aún no trabaja con nosotros?
                </h3>
                <p className="font-dm text-sm text-accent">
                  Escríbenos y estudiamos cómo podemos incorporarte.
                </p>
              </div>
              <div className="mt-8">
                <span className="font-dm text-sm text-brand tracking-wider border-b border-brand/30 pb-1 group-hover:border-brand transition-colors">
                  Contactar
                </span>
              </div>
            </Link>
          </ScrollReveal>
        </div>

        <div className="mt-8 md:hidden">
          <Link
            href="/servicios"
            className="font-dm text-sm text-accent hover:text-cream transition-colors"
          >
            Ver todos los servicios →
          </Link>
        </div>
      </div>
    </section>
  );
}
