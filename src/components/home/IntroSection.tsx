import ScrollReveal from "@/components/ScrollReveal";
import { INTRO } from "@/lib/content";

export default function IntroSection() {
  return (
    <section className="py-32 border-b border-black/8 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <ScrollReveal>
            <p className="font-dm text-xs tracking-[0.3em] text-[#777] uppercase mb-6">
              {INTRO.overline}
            </p>
            <h2 className="font-syne font-800 text-3xl md:text-4xl lg:text-5xl leading-[1.1] tracking-tighter text-[#111] whitespace-pre-line">
              {INTRO.title}
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div className="pt-12 lg:pt-16">
              <p className="font-dm text-base text-[#555] leading-relaxed">{INTRO.body}</p>

              <div className="mt-12 grid grid-cols-2 gap-px bg-black/8">
                {[
                  ["Cerámica", "Prótesis fija"],
                  ["CAD/CAM", "Digital"],
                  ["Metales", "Estructuras"],
                  ["Resinas", "Removible"],
                ].map(([title, sub]) => (
                  <div key={title} className="bg-[#f8f7f4] p-6">
                    <p className="font-syne font-600 text-sm text-[#111]">{title}</p>
                    <p className="font-dm text-xs text-[#777] mt-1">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
