import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { TEAM_ROLES, SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "El Laboratorio",
  description:
    "Más de 20 años fabricando prótesis dentales en Barcelona. Conoce nuestra historia, equipo y filosofía de trabajo.",
};

const MILESTONES = [
  { year: "2005", text: "Fundación del laboratorio en Barcelona." },
  { year: "2009", text: "Incorporación de las primeras tecnologías CAD/CAM." },
  { year: "2013", text: "Certificación ISO y ampliación de instalaciones." },
  { year: "2018", text: "Implantación de flujo digital completo con escáneres intraorales." },
  { year: "2024", text: "Renovación completa del departamento de cerámica." },
];

const TECH = [
  "Fresadoras de 5 ejes de alta precisión",
  "Hornos de cocción cerámica de última generación",
  "Escáneres de modelos y articuladores digitales",
  "Software CAD/CAM: exocad y 3Shape",
  "Sistemas de colado por inducción",
  "Equipos de polimerización por presión",
];

export default function LaboratorioPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-6">
              El laboratorio
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-syne font-800 text-5xl md:text-6xl lg:text-7xl tracking-tighter text-cream leading-[1.02] max-w-4xl">
              Veinte años construyendo precisión
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Historia */}
      <section className="py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <ScrollReveal>
              <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-6">Historia</p>
              <h2 className="font-syne font-700 text-3xl tracking-tighter text-cream mb-8">
                Barcelona, desde {SITE.founded}
              </h2>
              <div className="space-y-4 font-dm text-sm text-accent leading-relaxed">
                <p>
                  Dental 78 nace en 2005 en Barcelona con una premisa clara: construir un laboratorio que se diferencie por organización interna y rigor técnico, no por volumen de producción.
                </p>
                <p>
                  Durante dos décadas hemos desarrollado una metodología de trabajo que pone la trazabilidad y la comunicación con la clínica en el centro de cada proceso. Cada trabajo que sale de nuestro laboratorio tiene un responsable asignado, un plazo acordado y un punto de control de calidad antes de la entrega.
                </p>
                <p>
                  Trabajamos exclusivamente con clínicas dentales. No vendemos al público, no fabricamos para distribuidores y no aceptamos trabajos que no cumplan los estándares mínimos de documentación clínica.
                </p>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal delay={0.15}>
              <div className="space-y-0">
                {MILESTONES.map((m, i) => (
                  <div key={m.year} className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                      <div className="w-px flex-1 bg-white/5 group-first:hidden" />
                      <div className="w-2 h-2 rounded-full bg-brand/50 my-2 shrink-0" />
                      <div className="w-px flex-1 bg-white/5 group-last:hidden" />
                    </div>
                    <div className="pb-8 pt-1">
                      <p className="font-syne font-700 text-sm text-brand mb-1">{m.year}</p>
                      <p className="font-dm text-sm text-accent">{m.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-6">Filosofía</p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {[
              {
                n: "01",
                title: "Precisión antes que velocidad",
                body: "Cuando el plazo no es compatible con la calidad, negociamos el plazo. Nunca comprometemos el resultado.",
              },
              {
                n: "02",
                title: "Comunicación proactiva",
                body: "Si hay una incidencia, llamamos antes de que lo note la clínica. No esperamos a que el problema llegue al sillón.",
              },
              {
                n: "03",
                title: "Mejora continua",
                body: "Invertimos en formación y tecnología de forma regular. Un laboratorio que no evoluciona, retrocede.",
              },
            ].map((item, i) => (
              <ScrollReveal key={item.n} delay={i * 0.1}>
                <div className="bg-[#080808] p-10 h-full">
                  <span className="font-syne font-800 text-5xl text-white/5 block mb-6">{item.n}</span>
                  <div className="w-6 h-px bg-brand mb-6" />
                  <h3 className="font-syne font-600 text-base text-cream mb-4">{item.title}</h3>
                  <p className="font-dm text-sm text-accent leading-relaxed">{item.body}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-32 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-4">Equipo</p>
            <h2 className="font-syne font-700 text-3xl tracking-tighter text-cream mb-16">
              Técnicos especializados,<br />no generalistas
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
            {TEAM_ROLES.map((member, i) => (
              <ScrollReveal key={member.role} delay={i * 0.08}>
                <div className="bg-[#080808] p-8 h-full">
                  {/* Placeholder avatar */}
                  <div className="w-16 h-16 border border-brand/20 mb-6 flex items-center justify-center">
                    <div className="w-8 h-8 border border-brand/40 rotate-45" />
                  </div>
                  <h3 className="font-syne font-600 text-sm text-cream mb-2">{member.role}</h3>
                  <p className="font-dm text-xs text-brand">{member.years}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnología */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <ScrollReveal>
              <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-6">Instalaciones</p>
              <h2 className="font-syne font-700 text-3xl tracking-tighter text-cream mb-8">
                Tecnología al servicio<br />del técnico, no al revés
              </h2>
              <p className="font-dm text-sm text-accent leading-relaxed">
                Nuestra inversión en equipamiento responde siempre a una necesidad técnica concreta, no a tendencias del mercado. Cada pieza de tecnología en nuestro laboratorio tiene un propósito específico y un operario formado para sacarle el máximo rendimiento.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <ul className="space-y-0">
                {TECH.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0"
                  >
                    <span className="w-1 h-1 rounded-full bg-brand shrink-0" />
                    <span className="font-dm text-sm text-accent">{item}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
