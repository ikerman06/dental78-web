import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { PROCESS_STEPS, FAQ } from "@/lib/content";
import FAQSection from "@/components/proceso/FAQSection";

export const metadata: Metadata = {
  title: "Proceso",
  description:
    "Conoce cómo trabajamos: desde la recepción del pedido hasta la entrega. Trazabilidad y comunicación como argumento diferencial.",
};

const DETAIL_STEPS = [
  {
    number: "01",
    title: "Recepción del pedido",
    subtitle: "Confirmación en < 2 horas",
    description:
      "El trabajo llega al laboratorio con ficha técnica completa. Revisamos que la documentación sea suficiente para iniciar la fabricación. Si falta información, contactamos a la clínica antes de empezar — no interpretamos, preguntamos.",
    tags: ["Ficha técnica", "Asignación de técnico", "Confirmación de plazo"],
  },
  {
    number: "02",
    title: "Análisis y planificación",
    subtitle: "Sin supuestos",
    description:
      "Revisamos impresiones, modelos o escáner digital. En casos complejos, realizamos un análisis previo antes de iniciar la fabricación. Si detectamos cualquier incidencia, la comunicamos de inmediato. El inicio de la fabricación es nuestra confirmación de que todo es correcto.",
    tags: ["Revisión de modelos", "Verificación digital", "Planificación técnica"],
  },
  {
    number: "03",
    title: "Fabricación controlada",
    subtitle: "Trazabilidad total",
    description:
      "Cada fase tiene un técnico responsable asignado. Aplicamos puntos de control internos entre departamentos. Nada pasa de cerámica a entrega sin revisión. En casos con varias fases (p.ej. prueba de bizcocho), coordinamos con la clínica el protocolo completo.",
    tags: ["Técnico asignado", "Control de calidad", "Coordinación entre departamentos"],
  },
  {
    number: "04",
    title: "Entrega y seguimiento",
    subtitle: "Puntualidad como estándar",
    description:
      "Entregamos el día acordado. Si por alguna razón excepcional no es posible, la clínica lo sabe con al menos 24 horas de antelación. Hacemos seguimiento post-entrega y estamos disponibles para cualquier ajuste técnico necesario.",
    tags: ["Entrega en plazo", "Mensajería controlada", "Asistencia post-entrega"],
  },
];

export default function ProcesoPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-6">
              Metodología
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-syne font-800 text-5xl md:text-6xl lg:text-7xl tracking-tighter text-cream leading-[1.02] max-w-4xl">
              Organización como<br />ventaja competitiva
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-dm text-base text-accent leading-relaxed max-w-xl mt-8">
              En el sector dental, la mayoría de problemas no vienen del oficio del técnico — vienen de la falta de comunicación. Nuestro proceso está diseñado para eliminar esa variable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps detail */}
      <div>
        {DETAIL_STEPS.map((step, i) => (
          <section key={step.number} className="py-28 border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-3">
                  <ScrollReveal>
                    <span className="font-syne font-800 text-8xl text-white/5 block">{step.number}</span>
                    <div className="w-8 h-px bg-brand mt-4 mb-4" />
                    <h2 className="font-syne font-700 text-xl tracking-tighter text-cream">{step.title}</h2>
                    <p className="font-dm text-xs text-brand mt-2 tracking-wider">{step.subtitle}</p>
                  </ScrollReveal>
                </div>

                <div className="lg:col-span-5">
                  <ScrollReveal delay={0.1}>
                    <p className="font-dm text-sm text-accent leading-relaxed">{step.description}</p>
                  </ScrollReveal>
                </div>

                <div className="lg:col-span-4">
                  <ScrollReveal delay={0.2}>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-dm text-xs text-brand border border-brand/20 px-3 py-1.5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Key metrics */}
      <section className="py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5">
            {[
              { value: "98%", label: "Entregas en plazo" },
              { value: "< 2h", label: "Confirmación de recepción" },
              { value: "+20", label: "Años de experiencia" },
              { value: "0", label: "Trabajos sin técnico asignado" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="bg-[#080808] p-10 text-center">
                  <p className="font-syne font-800 text-4xl text-cream mb-3">{stat.value}</p>
                  <p className="font-dm text-xs text-brand tracking-wider">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </>
  );
}
