import ScrollReveal from "@/components/ScrollReveal";

const FOTOS = [
  { src: "/images/prod-coronas-modelo.jpg", label: "Coronas anteriores", cat: "Cerámica" },
  { src: "/images/prod-puente-blanco.jpg", label: "Puente cerámico", cat: "CAD/CAM" },
  { src: "/images/prod-protesis-superior.jpg", label: "Prótesis completa superior", cat: "Resinas" },
  { src: "/images/prod-ferula.png", label: "Férula oclusal", cat: "Férulas" },
  { src: "/images/lab-protesis-manos.jpg", label: "Fabricación manual", cat: "Laboratorio" },
  { src: "/images/lab-uniforme.jpg", label: "Equipo Dental 78", cat: "Laboratorio" },
];

export default function GaleriaTrabajos() {
  return (
    <section className="py-32 border-b border-black/8 bg-[#f8f7f4]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <ScrollReveal>
          <p className="font-dm text-xs tracking-[0.3em] text-[#777] uppercase mb-4">Trabajos</p>
          <h2 className="font-syne font-800 text-3xl md:text-4xl tracking-tighter text-[#111] mb-16">
            Lo que sale de nuestro laboratorio
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-black/8">
          {FOTOS.map((foto, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <div className="group relative overflow-hidden bg-white aspect-square">
                <img
                  src={foto.src}
                  alt={foto.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-[#111]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <p className="font-dm text-xs text-[#777] tracking-widest uppercase mb-1">{foto.cat}</p>
                  <p className="font-syne font-600 text-sm text-white">{foto.label}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
