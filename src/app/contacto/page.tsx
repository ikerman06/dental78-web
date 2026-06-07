import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import { SITE } from "@/lib/content";
import ContactForm from "@/components/contacto/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta con Dental 78. Formulario para nuevas clínicas, horarios y información de envío de trabajos.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-40 pb-24 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-6">Contacto</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-syne font-800 text-5xl md:text-6xl lg:text-7xl tracking-tighter text-cream leading-[1.02] max-w-4xl">
              Hablemos de<br />tu clínica
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <p className="font-syne font-600 text-sm text-cream mb-2">Para nuevas clínicas</p>
                <p className="font-dm text-sm text-accent mb-10 leading-relaxed">
                  Cuéntanos qué tipo de trabajos necesitas. Analizamos tu caso y te explicamos sin compromiso cómo podríamos colaborar.
                </p>
              </ScrollReveal>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="lg:col-span-5 space-y-12">
              <ScrollReveal delay={0.1}>
                <div>
                  <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-6">
                    Información
                  </p>
                  <ul className="space-y-5">
                    <li>
                      <p className="font-syne text-xs text-brand/60 uppercase tracking-widest mb-1">Teléfono</p>
                      <a href={`tel:${SITE.phone}`} className="font-dm text-sm text-accent hover:text-cream transition-colors">
                        {SITE.phone}
                      </a>
                    </li>
                    <li>
                      <p className="font-syne text-xs text-brand/60 uppercase tracking-widest mb-1">Email</p>
                      <a href={`mailto:${SITE.email}`} className="font-dm text-sm text-accent hover:text-cream transition-colors">
                        {SITE.email}
                      </a>
                    </li>
                    <li>
                      <p className="font-syne text-xs text-brand/60 uppercase tracking-widest mb-1">Horario</p>
                      <p className="font-dm text-sm text-accent">{SITE.schedule}</p>
                    </li>
                    <li>
                      <p className="font-syne text-xs text-brand/60 uppercase tracking-widest mb-1">Ubicación</p>
                      <p className="font-dm text-sm text-accent">{SITE.location}</p>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="border border-white/5 p-8">
                  <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-5">
                    Envío de trabajos
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Mensajería concertada (acordamos recogida)",
                      "Servicio propio en área metropolitana de Barcelona",
                      "Envío digital para escáner intraoral (.stl / .ply)",
                      "Plataforma de transferencia de archivos segura",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 w-1 h-1 rounded-full bg-brand shrink-0" />
                        <span className="font-dm text-xs text-accent leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <div className="border border-white/5 p-8">
                  <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-3">
                    Clínicas actuales
                  </p>
                  <p className="font-dm text-xs text-accent leading-relaxed">
                    Si ya eres cliente de Dental 78, llámanos directamente o envía un email. Tu técnico asignado te responderá en el mismo día.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
