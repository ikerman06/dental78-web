import ScrollReveal from "@/components/ScrollReveal";
import { PROCESS_STEPS } from "@/lib/content";

export default function ProcessSteps() {
  return (
    <section className="py-32 border-b border-black/8 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p className="font-dm text-xs tracking-[0.3em] text-[#777] uppercase mb-4">Proceso</p>
          <h2 className="font-syne font-800 text-3xl md:text-4xl tracking-tighter text-[#111] mb-20">
            Cómo trabajamos
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
          {PROCESS_STEPS.map((step, i) => (
            <ScrollReveal key={step.number} delay={i * 0.1}>
              <div className="bg-[#f8f7f4] p-8 h-full">
                <span className="font-syne font-800 text-6xl text-black/5 block mb-6">{step.number}</span>
                <div className="w-8 h-px bg-[#777] mb-6" />
                <h3 className="font-syne font-600 text-base text-[#111] mb-4">{step.title}</h3>
                <p className="font-dm text-sm text-[#555] leading-relaxed">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
