import { useState, useEffect, useRef, useCallback } from "react";

// ═══════════════════════════════════════════════════════════════
// DENTAL 78 — Premium Corporate Website
// Aesthetic: Apple × Tesla × Porsche for dental technology
// ═══════════════════════════════════════════════════════════════

const FONT_URL = "https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600&display=swap";

// ── SVG Logo Component ──────────────────────────────────────
const Logo = ({ size = 40, color = "#999" }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="44" stroke={color} strokeWidth="5" fill="none"/>
    <path d="M35 18 C28 28, 24 42, 24 56 C24 68, 30 76, 38 76 L50 76" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M65 18 C72 28, 76 42, 76 56 C76 68, 70 76, 62 76 L50 76" stroke={color} strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// ── Intersection Observer Hook ──────────────────────────────
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setIsInView(true); obs.unobserve(el); }
    }, { threshold: 0.15, ...options });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, isInView];
}

// ── Animated Counter ────────────────────────────────────────
function Counter({ end, suffix = "", prefix = "", duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{prefix}{end > 99 ? count.toLocaleString("es-ES") : count}{suffix}</span>;
}

// ── Fade-in Section Wrapper ─────────────────────────────────
function FadeIn({ children, delay = 0, className = "", direction = "up" }) {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(60px)", down: "translateY(-60px)", left: "translateX(60px)", right: "translateX(-60px)", none: "none" };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[direction],
      transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}s, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
    }}>
      {children}
    </div>
  );
}

// ── Horizontal Rule ─────────────────────────────────────────
const Divider = () => <div style={{ width: "100%", height: 1, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)", margin: "0 auto" }} />;

// ═══════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════
export default function Dental78() {
  const [scrollY, setScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", clinica: "", email: "", telefono: "", mensaje: "" });
  const [formSent, setFormSent] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = FONT_URL;
    link.rel = "stylesheet";
    document.head.appendChild(link);
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "Filosofía", id: "manifesto" },
    { label: "Tecnología", id: "tech" },
    { label: "Servicios", id: "services" },
    { label: "Proceso", id: "process" },
    { label: "Contacto", id: "contact" },
  ];

  const services = [
    { title: "Coronas y Puentes", subtitle: "Zirconio monolítico y estratificado", desc: "Fresado de alta precisión con ajuste marginal inferior a 30μm. Estética natural con resistencia industrial.", icon: "◇" },
    { title: "Implantología", subtitle: "Pilares y estructuras CAD/CAM", desc: "Pilares personalizados, barras y estructuras sobre implantes con conexión perfecta a todos los sistemas.", icon: "⬡" },
    { title: "Diseño Digital", subtitle: "Flujo 100% digital", desc: "Recepción de escáneres intraorales, diseño CAD avanzado y planificación digital del caso completo.", icon: "◈" },
    { title: "Impresión 3D", subtitle: "Modelos, férulas y provisionales", desc: "Tecnología de impresión de última generación para guías quirúrgicas, modelos y restauraciones provisionales.", icon: "△" },
    { title: "Prótesis Removible", subtitle: "Digital y convencional", desc: "Esqueléticos, completas y flexibles con diseño digital para un ajuste superior.", icon: "○" },
    { title: "Ortodoncia", subtitle: "Alineadores y aparatología", desc: "Planificación digital de tratamientos ortodónticos, alineadores transparentes y aparatología personalizada.", icon: "◻" },
  ];

  const processSteps = [
    { num: "01", title: "Escaneo", desc: "Recepción del archivo digital" },
    { num: "02", title: "Diseño", desc: "Modelado CAD de precisión" },
    { num: "03", title: "Producción", desc: "Fresado y/o impresión 3D" },
    { num: "04", title: "Control", desc: "Verificación micrométrica" },
    { num: "05", title: "Entrega", desc: "Envío en 24–48h" },
  ];

  const testimonials = [
    { text: "Desde que trabajamos con Dental 78, la precisión de nuestras restauraciones ha mejorado significativamente. Nuestros pacientes lo notan.", author: "Dr. García-Vidal", role: "Director Clínico · Barcelona" },
    { text: "El flujo digital es impecable. Envío el escáner y en 48 horas tengo el trabajo terminado con un ajuste perfecto.", author: "Dra. Martínez", role: "Implantóloga · Madrid" },
    { text: "No es solo un laboratorio, es un partner tecnológico. Han transformado nuestra forma de trabajar.", author: "Dr. Fernández", role: "Protesista · Valencia" },
  ];
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActiveTestimonial(p => (p + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  // ── Styles ──────────────────────────────────────────────────
  const css = `
    *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior: smooth; }
    body { background: #000; color: #e5e5e5; overflow-x: hidden; }
    ::selection { background: rgba(255,255,255,0.15); color: #fff; }
    ::-webkit-scrollbar { width: 4px; }
    ::-webkit-scrollbar-track { background: #000; }
    ::-webkit-scrollbar-thumb { background: #333; border-radius: 2px; }

    @keyframes heroGlow {
      0%, 100% { opacity: 0.3; transform: scale(1); }
      50% { opacity: 0.5; transform: scale(1.05); }
    }
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 0.4; }
      50% { opacity: 1; }
    }
    @keyframes lineGrow {
      from { transform: scaleX(0); }
      to { transform: scaleX(1); }
    }
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    @keyframes spinSlow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }

    .nav-link { position: relative; color: #888; transition: color 0.3s; cursor: pointer; font-size: 13px; letter-spacing: 0.5px; text-transform: uppercase; }
    .nav-link:hover { color: #fff; }
    .nav-link::after { content: ''; position: absolute; bottom: -4px; left: 0; width: 0; height: 1px; background: #fff; transition: width 0.3s; }
    .nav-link:hover::after { width: 100%; }

    .btn-primary {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 32px; background: #fff; color: #000;
      font-family: 'Outfit', sans-serif; font-weight: 500; font-size: 14px;
      border: none; border-radius: 0; cursor: pointer;
      letter-spacing: 1px; text-transform: uppercase;
      transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
      position: relative; overflow: hidden;
    }
    .btn-primary:hover { background: #e0e0e0; transform: translateY(-2px); box-shadow: 0 10px 40px rgba(255,255,255,0.1); }

    .btn-ghost {
      display: inline-flex; align-items: center; gap: 8px;
      padding: 14px 32px; background: transparent; color: #fff;
      font-family: 'Outfit', sans-serif; font-weight: 400; font-size: 14px;
      border: 1px solid rgba(255,255,255,0.2); border-radius: 0; cursor: pointer;
      letter-spacing: 1px; text-transform: uppercase;
      transition: all 0.4s cubic-bezier(0.16,1,0.3,1);
    }
    .btn-ghost:hover { border-color: rgba(255,255,255,0.6); background: rgba(255,255,255,0.05); }

    .input-field {
      width: 100%; padding: 16px 0; background: transparent;
      border: none; border-bottom: 1px solid rgba(255,255,255,0.12);
      color: #fff; font-family: 'Outfit', sans-serif; font-size: 15px;
      outline: none; transition: border-color 0.3s;
    }
    .input-field:focus { border-bottom-color: rgba(255,255,255,0.5); }
    .input-field::placeholder { color: #555; }

    .grain {
      position: fixed; top: -50%; left: -50%; width: 200%; height: 200%;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
      pointer-events: none; z-index: 9999; opacity: 0.5;
    }

    .marquee-track {
      display: flex; gap: 80px; animation: marquee 30s linear infinite;
      white-space: nowrap;
    }

    .service-card {
      cursor: pointer; padding: 32px; border: 1px solid rgba(255,255,255,0.06);
      transition: all 0.5s cubic-bezier(0.16,1,0.3,1); position: relative;
      background: rgba(255,255,255,0.01);
    }
    .service-card:hover, .service-card.active {
      border-color: rgba(255,255,255,0.15);
      background: rgba(255,255,255,0.03);
    }
    .service-card.active::before {
      content: ''; position: absolute; top: 0; left: 0; width: 2px; height: 100%;
      background: #fff;
    }

    @media (max-width: 768px) {
      .hero-headline { font-size: 36px !important; }
      .section-title { font-size: 32px !important; }
      .stats-grid { grid-template-columns: 1fr 1fr !important; }
      .tech-grid { grid-template-columns: 1fr !important; }
      .services-layout { flex-direction: column !important; }
      .process-grid { grid-template-columns: 1fr !important; }
      .footer-grid { grid-template-columns: 1fr !important; }
      .nav-desktop { display: none !important; }
      .mobile-menu-btn { display: flex !important; }
    }
  `;

  return (
    <div style={{ fontFamily: "'Outfit', sans-serif", background: "#000", minHeight: "100vh", color: "#e5e5e5" }}>
      <style>{css}</style>
      <div className="grain" />

      {/* ════════════════════ NAVIGATION ════════════════════ */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        padding: "0 48px", height: 72,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrollY > 100 ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrollY > 100 ? "blur(20px) saturate(180%)" : "none",
        borderBottom: scrollY > 100 ? "1px solid rgba(255,255,255,0.05)" : "1px solid transparent",
        transition: "all 0.5s",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Logo size={32} color={scrollY > 100 ? "#aaa" : "#888"} />
          <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 18, color: "#fff", letterSpacing: 3, textTransform: "uppercase" }}>
            Dental 78
          </span>
        </div>

        <div className="nav-desktop" style={{ display: "flex", gap: 36, alignItems: "center" }}>
          {navItems.map(item => (
            <span key={item.id} className="nav-link" onClick={() => scrollTo(item.id)}>{item.label}</span>
          ))}
          <button className="btn-primary" onClick={() => scrollTo("contact")} style={{ padding: "10px 24px", fontSize: 12 }}>
            Colaborar
          </button>
        </div>

        <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)} style={{
          display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 8,
        }}>
          <span style={{ width: 24, height: 1.5, background: "#fff", transition: "0.3s", transform: menuOpen ? "rotate(45deg) translateY(6.5px)" : "none" }} />
          <span style={{ width: 24, height: 1.5, background: "#fff", transition: "0.3s", opacity: menuOpen ? 0 : 1 }} />
          <span style={{ width: 24, height: 1.5, background: "#fff", transition: "0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6.5px)" : "none" }} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.97)", zIndex: 999,
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40,
        }}>
          {navItems.map(item => (
            <span key={item.id} style={{ fontFamily: "'Syne', sans-serif", fontSize: 28, fontWeight: 600, color: "#fff", cursor: "pointer", letterSpacing: 2 }}
              onClick={() => scrollTo(item.id)}>{item.label}</span>
          ))}
        </div>
      )}

      {/* ════════════════════ HERO ════════════════════ */}
      <section style={{
        position: "relative", height: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", overflow: "hidden",
        padding: "0 24px", textAlign: "center",
      }}>
        {/* Background Effects */}
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(40,40,45,0.5) 0%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", top: "20%", left: "50%", transform: "translate(-50%, -50%)",
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(80,80,90,0.15) 0%, transparent 70%)",
          animation: "heroGlow 6s ease-in-out infinite",
        }} />

        {/* Grid Lines */}
        {[...Array(5)].map((_, i) => (
          <div key={i} style={{
            position: "absolute", top: 0, bottom: 0,
            left: `${20 + i * 15}%`, width: 1,
            background: "rgba(255,255,255,0.015)",
          }} />
        ))}

        {/* Central Logo */}
        <FadeIn delay={0.1}>
          <div style={{ marginBottom: 48, opacity: 0.2 }}>
            <Logo size={80} color="#666" />
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={0.3}>
          <h1 className="hero-headline" style={{
            fontFamily: "'Syne', sans-serif", fontSize: 72, fontWeight: 800,
            color: "#fff", lineHeight: 1.05, letterSpacing: -2,
            maxWidth: 900, marginBottom: 24,
          }}>
            Precisión que se convierte en confianza.
          </h1>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p style={{
            fontSize: 17, color: "#777", lineHeight: 1.7,
            maxWidth: 520, marginBottom: 48, fontWeight: 300,
          }}>
            Laboratorio de prótesis dental digital diseñado para clínicas que exigen excelencia.
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}>
            <button className="btn-primary" onClick={() => scrollTo("contact")}>Solicitar colaboración</button>
            <button className="btn-ghost" onClick={() => scrollTo("manifesto")}>Conocer el laboratorio</button>
          </div>
        </FadeIn>

        {/* Scroll Indicator */}
        <div style={{
          position: "absolute", bottom: 40, display: "flex", flexDirection: "column",
          alignItems: "center", gap: 8, animation: "float 3s ease-in-out infinite",
        }}>
          <span style={{ fontSize: 10, color: "#555", letterSpacing: 3, textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #555, transparent)" }} />
        </div>
      </section>

      {/* ════════════════════ MARQUEE ════════════════════ */}
      <section style={{ padding: "40px 0", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", overflow: "hidden" }}>
        <div className="marquee-track">
          {[...Array(2)].map((_, rep) => (
            ["CAD/CAM", "Zirconio", "Diseño Digital", "Impresión 3D", "Fresado CNC", "Implantología", "Control de Calidad", "Escáner Intraoral"].map((t, i) => (
              <span key={`${rep}-${i}`} style={{
                fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600,
                color: "#333", letterSpacing: 4, textTransform: "uppercase",
                display: "flex", alignItems: "center", gap: 80,
              }}>
                {t}<span style={{ color: "#222" }}>✦</span>
              </span>
            ))
          )).flat()}
        </div>
      </section>

      {/* ════════════════════ MANIFESTO ════════════════════ */}
      <section id="manifesto" style={{ padding: "160px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 120, alignItems: "center" }}>
          <FadeIn>
            <div>
              <span style={{ fontSize: 11, letterSpacing: 4, color: "#555", textTransform: "uppercase", fontWeight: 500 }}>Nuestra filosofía</span>
              <h2 className="section-title" style={{
                fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800,
                color: "#fff", lineHeight: 1.1, marginTop: 20, letterSpacing: -1,
              }}>
                Donde la tecnología<br />encuentra la artesanía.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div>
              <p style={{ fontSize: 16, lineHeight: 2, color: "#777", fontWeight: 300, marginBottom: 24 }}>
                Cada restauración que sale de Dental 78 es el resultado de combinar ingeniería de precisión con un profundo conocimiento de la odontología. No fabricamos productos. Creamos soluciones que los profesionales más exigentes confían a sus pacientes.
              </p>
              <p style={{ fontSize: 16, lineHeight: 2, color: "#777", fontWeight: 300 }}>
                Nuestro laboratorio está diseñado desde cero para el flujo digital completo: desde la recepción del escáner intraoral hasta la entrega de la restauración final, cada paso está controlado con tecnología de última generación.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Divider />

      {/* ════════════════════ STATS ════════════════════ */}
      <section style={{ padding: "120px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <div className="stats-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 48 }}>
          {[
            { value: 250, prefix: "+", suffix: "", label: "Clínicas colaboradoras" },
            { value: 100000, prefix: "+", suffix: "", label: "Trabajos realizados" },
            { value: 99.8, prefix: "", suffix: "%", label: "Precisión de ajuste" },
            { value: 48, prefix: "", suffix: "h", label: "Producción digital" },
          ].map((s, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 56, fontWeight: 800,
                  color: "#fff", lineHeight: 1, marginBottom: 12,
                  background: "linear-gradient(135deg, #fff 30%, #555)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  <Counter end={s.value} prefix={s.prefix} suffix={s.suffix} />
                </div>
                <span style={{ fontSize: 13, color: "#555", letterSpacing: 2, textTransform: "uppercase", fontWeight: 400 }}>
                  {s.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Divider />

      {/* ════════════════════ TECHNOLOGY ════════════════════ */}
      <section id="tech" style={{ padding: "160px 48px", maxWidth: 1400, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 100 }}>
            <span style={{ fontSize: 11, letterSpacing: 4, color: "#555", textTransform: "uppercase", fontWeight: 500 }}>Tecnología</span>
            <h2 className="section-title" style={{
              fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800,
              color: "#fff", marginTop: 20, letterSpacing: -1,
            }}>
              Ingeniería sin compromiso.
            </h2>
          </div>
        </FadeIn>

        <div className="tech-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
          {[
            { title: "CAD/CAM", desc: "Diseño y fabricación asistida por ordenador con precisión micrométrica.", detail: "Software de última generación para modelado 3D y planificación digital del caso completo." },
            { title: "Fresado CNC", desc: "Fresadoras de 5 ejes para zirconio, titanio y materiales híbridos.", detail: "Tolerancias de ajuste inferiores a 20μm en cada restauración." },
            { title: "Impresión 3D", desc: "Fabricación aditiva para modelos, guías y provisionales.", detail: "Resolución de capa de 25μm para el máximo detalle." },
            { title: "Escáner Digital", desc: "Compatibilidad total con todos los sistemas de escáner intraoral.", detail: "Integración directa con iTero, 3Shape, Meditlink, DEXIS y más." },
            { title: "Control de Calidad", desc: "Verificación óptica de cada trabajo antes de su envío.", detail: "Protocolo de 12 puntos de control para garantizar la perfección." },
            { title: "Materiales", desc: "Zirconio, disilicato de litio, PMMA, titanio y composites de alta gama.", detail: "Solo trabajamos con materiales certificados de los principales fabricantes." },
          ].map((tech, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              <div style={{
                padding: "56px 40px", border: "1px solid rgba(255,255,255,0.04)",
                background: "rgba(255,255,255,0.01)", position: "relative", overflow: "hidden",
                transition: "all 0.5s", cursor: "default", minHeight: 280,
                display: "flex", flexDirection: "column", justifyContent: "space-between",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.01)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; }}
              >
                <div>
                  <span style={{ fontSize: 11, color: "#444", fontWeight: 500, letterSpacing: 3 }}>0{i + 1}</span>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700,
                    color: "#fff", marginTop: 16, marginBottom: 16,
                  }}>
                    {tech.title}
                  </h3>
                  <p style={{ fontSize: 14, color: "#666", lineHeight: 1.7, fontWeight: 300 }}>{tech.desc}</p>
                </div>
                <p style={{ fontSize: 13, color: "#444", lineHeight: 1.6, marginTop: 24, fontWeight: 300 }}>{tech.detail}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ════════════════════ SERVICES ════════════════════ */}
      <section id="services" style={{ padding: "160px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ marginBottom: 80 }}>
            <span style={{ fontSize: 11, letterSpacing: 4, color: "#555", textTransform: "uppercase", fontWeight: 500 }}>Servicios</span>
            <h2 className="section-title" style={{
              fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800,
              color: "#fff", marginTop: 20, letterSpacing: -1,
            }}>
              Soluciones completas.
            </h2>
          </div>
        </FadeIn>

        <div className="services-layout" style={{ display: "flex", gap: 2 }}>
          <div style={{ flex: "0 0 420px", display: "flex", flexDirection: "column" }}>
            {services.map((s, i) => (
              <div key={i} className={`service-card ${activeService === i ? "active" : ""}`} onClick={() => setActiveService(i)}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: activeService === i ? 12 : 0 }}>
                  <span style={{ fontSize: 20, color: activeService === i ? "#fff" : "#444", transition: "0.3s" }}>{s.icon}</span>
                  <h3 style={{
                    fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 600,
                    color: activeService === i ? "#fff" : "#666", transition: "0.3s",
                  }}>
                    {s.title}
                  </h3>
                </div>
                {activeService === i && (
                  <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, fontWeight: 300, paddingLeft: 36 }}>{s.subtitle}</p>
                )}
              </div>
            ))}
          </div>

          <div style={{
            flex: 1, display: "flex", flexDirection: "column", justifyContent: "center",
            padding: "80px 60px",
            background: "linear-gradient(135deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.005) 100%)",
            border: "1px solid rgba(255,255,255,0.04)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", top: 40, right: 40, fontSize: 120,
              fontFamily: "'Syne', sans-serif", fontWeight: 800, color: "rgba(255,255,255,0.02)",
            }}>
              {services[activeService].icon}
            </div>
            <span style={{ fontSize: 11, letterSpacing: 4, color: "#444", textTransform: "uppercase", fontWeight: 500, marginBottom: 20 }}>
              {services[activeService].subtitle}
            </span>
            <h3 style={{
              fontFamily: "'Syne', sans-serif", fontSize: 36, fontWeight: 700,
              color: "#fff", marginBottom: 24, letterSpacing: -0.5,
            }}>
              {services[activeService].title}
            </h3>
            <p style={{ fontSize: 16, color: "#666", lineHeight: 1.9, fontWeight: 300, maxWidth: 480 }}>
              {services[activeService].desc}
            </p>
            <button className="btn-ghost" style={{ marginTop: 40, alignSelf: "flex-start", padding: "12px 24px", fontSize: 12 }}
              onClick={() => scrollTo("contact")}>
              Solicitar información →
            </button>
          </div>
        </div>
      </section>

      <Divider />

      {/* ════════════════════ FACILITIES — Visual Break ════════════════════ */}
      <section style={{
        padding: "160px 48px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 70% 50% at 50% 50%, rgba(30,30,35,0.6) 0%, transparent 70%)",
        }} />
        <FadeIn>
          <span style={{ fontSize: 11, letterSpacing: 4, color: "#555", textTransform: "uppercase", fontWeight: 500, position: "relative" }}>Instalaciones</span>
          <h2 className="section-title" style={{
            fontFamily: "'Syne', sans-serif", fontSize: 56, fontWeight: 800,
            color: "#fff", marginTop: 20, letterSpacing: -1, position: "relative",
            maxWidth: 700, margin: "20px auto 0",
          }}>
            Diseñado para la perfección.
          </h2>
          <p style={{ fontSize: 15, color: "#555", marginTop: 24, position: "relative", maxWidth: 500, margin: "24px auto 0", fontWeight: 300 }}>
            Un espacio donde cada detalle está pensado para la producción de alta precisión.
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div style={{
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2,
            maxWidth: 1200, margin: "80px auto 0",
          }}>
            {["Laboratorio CAD/CAM", "Zona de Fresado", "Control de Calidad", "Impresión 3D", "Diseño Digital", "Logística"].map((label, i) => (
              <div key={i} style={{
                aspectRatio: i < 3 ? "4/3" : "4/3",
                background: `linear-gradient(135deg, rgba(${20 + i * 8},${20 + i * 8},${25 + i * 6},1) 0%, rgba(${10 + i * 5},${10 + i * 5},${15 + i * 4},1) 100%)`,
                display: "flex", flexDirection: "column", justifyContent: "flex-end",
                padding: 28, position: "relative", overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.03)",
              }}>
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                  width: 80, height: 80, border: "1px solid rgba(255,255,255,0.05)", borderRadius: "50%",
                }} />
                <span style={{ fontSize: 11, color: "#444", letterSpacing: 3, textTransform: "uppercase", fontWeight: 500, position: "relative" }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      <Divider />

      {/* ════════════════════ PROCESS ════════════════════ */}
      <section id="process" style={{ padding: "160px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 100 }}>
            <span style={{ fontSize: 11, letterSpacing: 4, color: "#555", textTransform: "uppercase", fontWeight: 500 }}>Proceso</span>
            <h2 className="section-title" style={{
              fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800,
              color: "#fff", marginTop: 20, letterSpacing: -1,
            }}>
              Del escáner a la restauración.
            </h2>
          </div>
        </FadeIn>

        <div className="process-grid" style={{
          display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0,
          position: "relative",
        }}>
          {/* Connecting line */}
          <div style={{
            position: "absolute", top: 40, left: "10%", right: "10%", height: 1,
            background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), rgba(255,255,255,0.08), transparent)",
          }} />
          {processSteps.map((step, i) => (
            <FadeIn key={i} delay={i * 0.12}>
              <div style={{ textAlign: "center", position: "relative", padding: "0 16px" }}>
                <div style={{
                  width: 80, height: 80, borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 24px", background: "rgba(255,255,255,0.02)",
                  position: "relative", zIndex: 1,
                }}>
                  <span style={{ fontFamily: "'Syne', sans-serif", fontSize: 20, fontWeight: 700, color: "#fff" }}>{step.num}</span>
                </div>
                <h3 style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 16, fontWeight: 600,
                  color: "#fff", marginBottom: 8,
                }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: 13, color: "#555", fontWeight: 300 }}>{step.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Divider />

      {/* ════════════════════ TESTIMONIALS ════════════════════ */}
      <section style={{
        padding: "160px 48px", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(25,25,30,0.5) 0%, transparent 70%)",
        }} />
        <FadeIn>
          <span style={{ fontSize: 11, letterSpacing: 4, color: "#555", textTransform: "uppercase", fontWeight: 500, position: "relative" }}>Testimonios</span>
        </FadeIn>

        <div style={{ maxWidth: 700, margin: "60px auto 0", position: "relative", minHeight: 220 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              position: i === activeTestimonial ? "relative" : "absolute",
              top: 0, left: 0, right: 0,
              opacity: i === activeTestimonial ? 1 : 0,
              transform: i === activeTestimonial ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
              pointerEvents: i === activeTestimonial ? "auto" : "none",
            }}>
              <p style={{
                fontSize: 22, color: "#999", lineHeight: 1.8, fontWeight: 300,
                fontStyle: "italic", marginBottom: 40,
              }}>
                "{t.text}"
              </p>
              <p style={{ fontFamily: "'Syne', sans-serif", fontSize: 14, fontWeight: 600, color: "#fff", marginBottom: 4 }}>{t.author}</p>
              <p style={{ fontSize: 12, color: "#555", fontWeight: 300 }}>{t.role}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 48, position: "relative" }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActiveTestimonial(i)} style={{
              width: i === activeTestimonial ? 32 : 8, height: 3,
              background: i === activeTestimonial ? "#fff" : "rgba(255,255,255,0.15)",
              border: "none", cursor: "pointer", borderRadius: 0,
              transition: "all 0.4s",
            }} />
          ))}
        </div>
      </section>

      <Divider />

      {/* ════════════════════ WHY DENTAL 78 ════════════════════ */}
      <section style={{ padding: "160px 48px", maxWidth: 1200, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 100 }}>
            <span style={{ fontSize: 11, letterSpacing: 4, color: "#555", textTransform: "uppercase", fontWeight: 500 }}>Ventajas</span>
            <h2 className="section-title" style={{
              fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800,
              color: "#fff", marginTop: 20, letterSpacing: -1,
            }}>
              Por qué Dental 78.
            </h2>
          </div>
        </FadeIn>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}>
          {[
            { title: "Precisión micrométrica", desc: "Cada restauración pasa un control de calidad de 12 puntos antes de salir del laboratorio." },
            { title: "Entrega en 24–48h", desc: "Producción digital optimizada para tiempos de respuesta que no comprometen la calidad." },
            { title: "Tecnología punta", desc: "Inversión continua en la maquinaria y software más avanzados del sector." },
            { title: "Soporte técnico", desc: "Equipo de diseñadores CAD disponible para consulta y planificación de casos complejos." },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div style={{
                padding: "56px 48px", border: "1px solid rgba(255,255,255,0.04)",
                background: "rgba(255,255,255,0.01)",
                transition: "all 0.5s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.01)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.04)"; }}
              >
                <h3 style={{
                  fontFamily: "'Syne', sans-serif", fontSize: 22, fontWeight: 700,
                  color: "#fff", marginBottom: 16,
                }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 14, color: "#666", lineHeight: 1.8, fontWeight: 300 }}>{item.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <Divider />

      {/* ════════════════════ CTA SECTION ════════════════════ */}
      <section style={{
        padding: "160px 48px", textAlign: "center", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 500, height: 500, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.03)",
          animation: "spinSlow 60s linear infinite",
        }} />
        <div style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 350, height: 350, borderRadius: "50%",
          border: "1px solid rgba(255,255,255,0.02)",
          animation: "spinSlow 40s linear infinite reverse",
        }} />
        <FadeIn>
          <h2 style={{
            fontFamily: "'Syne', sans-serif", fontSize: 56, fontWeight: 800,
            color: "#fff", lineHeight: 1.1, letterSpacing: -1,
            maxWidth: 600, margin: "0 auto 32px", position: "relative",
          }}>
            El futuro de tu clínica empieza aquí.
          </h2>
          <p style={{ fontSize: 16, color: "#555", marginBottom: 48, position: "relative", fontWeight: 300 }}>
            Únete a más de 250 clínicas que ya confían en Dental 78.
          </p>
          <button className="btn-primary" onClick={() => scrollTo("contact")} style={{ position: "relative" }}>
            Solicitar colaboración →
          </button>
        </FadeIn>
      </section>

      <Divider />

      {/* ════════════════════ CONTACT ════════════════════ */}
      <section id="contact" style={{ padding: "160px 48px", maxWidth: 800, margin: "0 auto" }}>
        <FadeIn>
          <div style={{ textAlign: "center", marginBottom: 80 }}>
            <span style={{ fontSize: 11, letterSpacing: 4, color: "#555", textTransform: "uppercase", fontWeight: 500 }}>Contacto</span>
            <h2 className="section-title" style={{
              fontFamily: "'Syne', sans-serif", fontSize: 48, fontWeight: 800,
              color: "#fff", marginTop: 20, letterSpacing: -1,
            }}>
              Hablemos.
            </h2>
          </div>
        </FadeIn>

        {formSent ? (
          <FadeIn>
            <div style={{ textAlign: "center", padding: "80px 0" }}>
              <div style={{
                width: 64, height: 64, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.15)",
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px", fontSize: 24, color: "#fff",
              }}>✓</div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 12 }}>
                Mensaje enviado
              </h3>
              <p style={{ color: "#555", fontWeight: 300 }}>Nuestro equipo se pondrá en contacto contigo en menos de 24 horas.</p>
            </div>
          </FadeIn>
        ) : (
          <FadeIn delay={0.2}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 48px" }}>
              <div>
                <input className="input-field" placeholder="Nombre" value={formData.nombre}
                  onChange={e => setFormData(p => ({ ...p, nombre: e.target.value }))} />
              </div>
              <div>
                <input className="input-field" placeholder="Clínica" value={formData.clinica}
                  onChange={e => setFormData(p => ({ ...p, clinica: e.target.value }))} />
              </div>
              <div>
                <input className="input-field" placeholder="Email" type="email" value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
              </div>
              <div>
                <input className="input-field" placeholder="Teléfono" value={formData.telefono}
                  onChange={e => setFormData(p => ({ ...p, telefono: e.target.value }))} />
              </div>
              <div style={{ gridColumn: "1 / -1", marginTop: 24 }}>
                <textarea className="input-field" placeholder="Cuéntanos sobre tu clínica y tus necesidades"
                  rows={4} style={{ resize: "none", fontFamily: "'Outfit', sans-serif" }}
                  value={formData.mensaje} onChange={e => setFormData(p => ({ ...p, mensaje: e.target.value }))} />
              </div>
              <div style={{ gridColumn: "1 / -1", marginTop: 40, display: "flex", justifyContent: "center" }}>
                <button className="btn-primary" onClick={() => setFormSent(true)}>Enviar solicitud →</button>
              </div>
            </div>
          </FadeIn>
        )}
      </section>

      {/* ════════════════════ FOOTER ════════════════════ */}
      <footer style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "80px 48px 40px",
      }}>
        <div className="footer-grid" style={{
          maxWidth: 1200, margin: "0 auto",
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48,
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <Logo size={28} color="#555" />
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: 16, color: "#fff", letterSpacing: 3, textTransform: "uppercase" }}>
                Dental 78
              </span>
            </div>
            <p style={{ fontSize: 13, color: "#444", lineHeight: 1.8, maxWidth: 280, fontWeight: 300 }}>
              Laboratorio de prótesis dental digital. Precisión, tecnología e innovación al servicio de la odontología.
            </p>
          </div>

          <div>
            <h4 style={{ fontSize: 11, letterSpacing: 3, color: "#666", textTransform: "uppercase", marginBottom: 20, fontWeight: 500 }}>Navegación</h4>
            {navItems.map(item => (
              <p key={item.id} style={{ fontSize: 13, color: "#444", marginBottom: 12, cursor: "pointer", transition: "color 0.3s", fontWeight: 300 }}
                onClick={() => scrollTo(item.id)}
                onMouseEnter={e => e.target.style.color = "#999"}
                onMouseLeave={e => e.target.style.color = "#444"}>
                {item.label}
              </p>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 11, letterSpacing: 3, color: "#666", textTransform: "uppercase", marginBottom: 20, fontWeight: 500 }}>Servicios</h4>
            {["Coronas", "Puentes", "Zirconio", "Implantología", "Diseño Digital"].map(s => (
              <p key={s} style={{ fontSize: 13, color: "#444", marginBottom: 12, fontWeight: 300 }}>{s}</p>
            ))}
          </div>

          <div>
            <h4 style={{ fontSize: 11, letterSpacing: 3, color: "#666", textTransform: "uppercase", marginBottom: 20, fontWeight: 500 }}>Contacto</h4>
            <p style={{ fontSize: 13, color: "#444", marginBottom: 12, fontWeight: 300 }}>info@dental78.com</p>
            <p style={{ fontSize: 13, color: "#444", marginBottom: 12, fontWeight: 300 }}>+34 900 000 000</p>
            <p style={{ fontSize: 13, color: "#444", marginBottom: 12, fontWeight: 300 }}>España</p>
          </div>
        </div>

        <div style={{
          maxWidth: 1200, margin: "60px auto 0", paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.04)",
          display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16,
        }}>
          <p style={{ fontSize: 11, color: "#333", fontWeight: 300 }}>© 2026 Dental 78. Todos los derechos reservados.</p>
          <div style={{ display: "flex", gap: 24 }}>
            {["Privacidad", "Legal", "Cookies"].map(link => (
              <span key={link} style={{ fontSize: 11, color: "#333", cursor: "pointer", fontWeight: 300, transition: "color 0.3s" }}
                onMouseEnter={e => e.target.style.color = "#666"}
                onMouseLeave={e => e.target.style.color = "#333"}>
                {link}
              </span>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
