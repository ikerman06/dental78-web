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
      <section className="pt-40 pb-24 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="font-dm text-xs tracking-[0.3em] text-[#777] uppercase mb-6">
              Metodología
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-syne font-800 text-5xl md:text-6xl lg:text-7xl tracking-tighter text-[#111] leading-[1.02] max-w-4xl">
              Organización como<br />ventaja competitiva
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="font-dm text-base text-[#555] leading-relaxed max-w-xl mt-8">
              En el sector dental, la mayoría de problemas no vienen del oficio del técnico — vienen de la falta de comunicación. Nuestro proceso está diseñado para eliminar esa variable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Steps detail */}
      <div>
        {DETAIL_STEPS.map((step, i) => (
          <section key={step.number} className="py-28 border-b border-black/8">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                <div className="lg:col-span-3">
                  <ScrollReveal>
                    <span className="font-syne font-800 text-8xl text-black/5 block">{step.number}</span>
                    <div className="w-8 h-px bg-brand mt-4 mb-4" />
                    <h2 className="font-syne font-700 text-xl tracking-tighter text-[#111]">{step.title}</h2>
                    <p className="font-dm text-xs text-[#777] mt-2 tracking-wider">{step.subtitle}</p>
                  </ScrollReveal>
                </div>

                <div className="lg:col-span-5">
                  <ScrollReveal delay={0.1}>
                    <p className="font-dm text-sm text-[#555] leading-relaxed">{step.description}</p>
                  </ScrollReveal>
                </div>

                <div className="lg:col-span-4">
                  <ScrollReveal delay={0.2}>
                    <div className="flex flex-wrap gap-2">
                      {step.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-dm text-xs text-[#777] border border-[#777]/20 px-3 py-1.5"
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
      <section className="py-28 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-black/8">
            {[
              { value: "98%", label: "Entregas en plazo" },
              { value: "< 2h", label: "Confirmación de recepción" },
              { value: "+20", label: "Años de experiencia" },
              { value: "0", label: "Trabajos sin técnico asignado" },
            ].map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.08}>
                <div className="bg-[#f8f7f4] p-10 text-center">
                  <p className="font-syne font-800 text-4xl text-[#111] mb-3">{stat.value}</p>
                  <p className="font-dm text-xs text-[#777] tracking-wider">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vevi Dental */}
      <section className="py-28 border-b border-black/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <p className="font-dm text-xs tracking-[0.3em] text-[#777] uppercase mb-4">
                Gestión digital
              </p>
              <h2 className="font-syne font-700 text-3xl tracking-tighter text-[#111] mb-6">
                Seguimiento de pedidos<br />en tiempo real
              </h2>
              <p className="font-dm text-sm text-[#555] leading-relaxed mb-8">
                Trabajamos con <strong className="text-[#111] font-400">Vevi Dental</strong>, el software de gestión de referencia en el sector. Las clínicas que ya usan Vevi pueden consultar el estado de sus trabajos, historial de pedidos y comunicarse con el laboratorio directamente desde la plataforma.
              </p>
              <a
                href="https://www.vevidental.com/ddental/home"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-3.5 border border-[#777]/50 text-[#111] font-dm text-sm tracking-wider hover:border-[#777] hover:bg-[#777]/10 transition-all duration-300"
              >
                <img
                  src="https://www.vevidental.com/assets/logo/logo-1f2c27692524d5673402b642b3adf84e1632f7e77529c10c1f1d4c72045ee6ad.svg"
                  alt="Vevi Dental"
                  className="h-4 invert opacity-70"
                />
                Acceder a Vevi Dental
              </a>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="border border-black/8 p-10 space-y-6">
                {[
                  { title: "Estado en tiempo real", body: "Consulta en qué fase está cada trabajo sin llamar al laboratorio." },
                  { title: "Historial completo", body: "Acceso a todos los pedidos anteriores, especificaciones y entregas." },
                  { title: "Comunicación directa", body: "Mensajería integrada con el técnico asignado a tu caso." },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-brand shrink-0" />
                    <div>
                      <p className="font-syne font-600 text-sm text-[#111] mb-1">{item.title}</p>
                      <p className="font-dm text-xs text-[#555] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQSection />
    </>
  );
}
