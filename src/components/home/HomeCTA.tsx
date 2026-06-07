import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export default function HomeCTA() {
  return (
    <section className="py-40">
      <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <ScrollReveal>
          <p className="font-dm text-xs tracking-[0.3em] text-brand uppercase mb-8">
            Próximo paso
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-syne font-800 text-4xl md:text-5xl lg:text-6xl tracking-tighter text-cream leading-[1.05] mb-8">
            ¿Tu clínica merece<br />
            un laboratorio a su altura?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <p className="font-dm text-base text-accent mb-12 max-w-lg mx-auto">
            Cuéntanos qué necesitas. Sin compromiso. Analizamos tu caso y te proponemos cómo podemos trabajar juntos.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contacto"
              className="px-10 py-4 bg-brand/10 border border-brand/50 text-cream font-dm text-sm tracking-wider hover:bg-brand/20 hover:border-brand transition-all duration-300"
            >
              Contactar con el laboratorio
            </Link>
            <Link
              href="/proceso"
              className="px-10 py-4 text-accent font-dm text-sm tracking-wider hover:text-cream transition-colors"
            >
              Ver cómo trabajamos →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
