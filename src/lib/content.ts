// ═══════════════════════════════════════════════════════════
// DENTAL 78 — Content constants
// Edit here to update copy across the entire site.
// ═══════════════════════════════════════════════════════════

export const SITE = {
  name: "Dental 78",
  tagline: "Laboratorio de Prótesis Dental",
  location: "Maresme 286, Local 1, 08020 — Sant Martí, Barcelona",
  founded: 2006,
  phone: "640 606 621",
  email: "protesis.dental78@gmail.com",
  domain: "dental78.com",
  schedule: "Lunes a Viernes, 7:00–15:00",
} as const;

export const NAV_LINKS = [
  { label: "Laboratorio", href: "/laboratorio" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proceso", href: "/proceso" },
] as const;

export const HERO = {
  overline: "Barcelona · Desde 2006",
  title: "Precisión técnica\npara clínicas\nque no admiten\ncompromiso.",
  subtitle:
    "Laboratorio de prótesis dental B2B. Trabajamos exclusivamente con clínicas dentales que entienden que la calidad técnica no se negocia.",
  cta_primary: { label: "Conoce el laboratorio", href: "/laboratorio" },
  cta_secondary: { label: "Ver servicios", href: "/servicios" },
  stats: [
    { value: "+20", label: "años de actividad" },
    { value: "98%", label: "entregas en plazo" },
    { value: "ISO", label: "certificado" },
  ],
} as const;

export const MARQUEE_ITEMS = [
  "Cerámica de alta estética",
  "CAD/CAM de precisión",
  "Estructuras metálicas",
  "Resinas compuestas",
  "Férulas oclusales",
  "Implantología sobre implantes",
  "Zirconio multicapa",
  "Prótesis combinada",
];

export const INTRO = {
  overline: "Nuestra filosofía",
  title: "No somos un proveedor.\nSomos tu partner técnico.",
  body: "En Dental 78 entendemos que cada trabajo que sale de nuestro laboratorio lleva el nombre de tu clínica. Por eso tratamos cada caso con la misma exigencia que tú aplicas en el sillón. Precisión, comunicación y cumplimiento de plazos: no son promesas, son nuestro estándar de operación.",
} as const;

export const SERVICES_GRID = [
  {
    id: "ceramica",
    title: "Cerámica",
    short: "Coronas, carillas y estratificaciones con máxima reproducción del diente natural.",
    href: "/servicios#ceramica",
  },
  {
    id: "cadcam",
    title: "CAD/CAM",
    short: "Fresado de zirconio, PMMA, e-max y polímeros de alta resistencia con tolerancias de micra.",
    href: "/servicios#cadcam",
  },
  {
    id: "resinas",
    title: "Resinas",
    short: "Provisionales de alta calidad y prótesis completas en acrílico de inyección.",
    href: "/servicios#resinas",
  },
  {
    id: "metales",
    title: "Estructuras Metálicas",
    short: "Colado en cobalto-cromo y titanio para estructuras de máxima fiabilidad.",
    href: "/servicios#metales",
  },
  {
    id: "ferulas",
    title: "Férulas Oclusales",
    short: "Diseño y fabricación de férulas Michigan y de descarga para bruxismo.",
    href: "/servicios#ferulas",
  },
] as const;

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Recepción del pedido",
    description:
      "El trabajo llega al laboratorio con ficha técnica. Confirmamos recepción y asignamos técnico responsable en menos de 2 horas.",
  },
  {
    number: "02",
    title: "Análisis y planificación",
    description:
      "Revisamos impresiones, modelos o escáner digital. Si detectamos cualquier incidencia, te contactamos antes de iniciar.",
  },
  {
    number: "03",
    title: "Fabricación controlada",
    description:
      "Producción con trazabilidad completa. Cada fase tiene un responsable asignado y un punto de control de calidad.",
  },
  {
    number: "04",
    title: "Entrega y seguimiento",
    description:
      "Envío el día acordado. Seguimiento post-entrega y asistencia técnica para cualquier ajuste.",
  },
] as const;

export const TEAM_ROLES = [
  { role: "Ceramista Jefe", years: "+15 años en técnica de estratificación" },
  { role: "Técnico CAD/CAM", years: "Especialista en fresado digital" },
  { role: "Responsable de Metales", years: "Colado y soldadura de precisión" },
  { role: "Técnico en Resinas", years: "Provisionales y prótesis completas" },
] as const;

export const SERVICES_DETAIL = [
  {
    id: "ceramica",
    title: "Cerámica",
    description:
      "La cerámica sigue siendo el material de referencia cuando la estética es el factor crítico. En Dental 78 trabajamos con sistemas de cocción de alta precisión y pigmentos calibrados para reproducir la translucidez, el croma y el valor del diente natural con fidelidad máxima.",
    items: [
      "Coronas de cerámica pura sobre muñón o implante",
      "Carillas de porcelana ultrafinas (0,3–0,5 mm)",
      "Estratificación sobre estructuras de zirconio",
      "Incrustaciones y overlays cerámicos",
      "Caracterizaciones y tinciones individualizadas",
    ],
  },
  {
    id: "cadcam",
    title: "CAD/CAM",
    description:
      "El fresado digital elimina la variabilidad humana de las fases críticas. Trabajamos con fresadoras de 5 ejes y software de diseño actualizado para garantizar ajustes de precisión que los métodos convencionales no pueden ofrecer.",
    items: [
      "Coronas de zirconio multicapa (monolítico y estratificado)",
      "Estructuras de zirconio para puentes y barras",
      "Coronas e-max CAD (disilicato de litio)",
      "Provisionales en PMMA y polímeros",
      "Compatibilidad con escáneres intraorales y modelos digitales",
    ],
  },
  {
    id: "resinas",
    title: "Resinas",
    description:
      "Los provisionales son la primera impresión del resultado final para el paciente. Fabricamos provisionales que funcionan como referencia estética y oclusal, con acabados que superan las expectativas de la clínica.",
    items: [
      "Provisionales de alta calidad en PMMA y resinas acrílicas",
      "Prótesis completas en acrílico de inyección",
      "Overdentures sobre implantes",
      "Prótesis flexibles y parciales removibles",
    ],
  },
  {
    id: "metales",
    title: "Estructuras Metálicas",
    description:
      "Las estructuras metálicas siguen siendo la opción más fiable para ciertos casos de prótesis fija y removible. Nuestro departamento de metales trabaja con aleaciones de calidad y técnicas de colado controladas.",
    items: [
      "Estructuras coladas en cobalto-cromo",
      "Estructuras en titanio para casos con alergias o implantes",
      "Barras de retención para sobredentaduras",
      "Soldaduras de precisión y reparaciones",
    ],
  },
  {
    id: "ferulas",
    title: "Férulas Oclusales",
    description:
      "El bruxismo afecta a una parte significativa de la población adulta. Las férulas fabricadas en laboratorio ofrecen una precisión de ajuste que los dispositivos prefabricados no pueden igualar.",
    items: [
      "Férulas Michigan en acrílico duro",
      "Férulas de descarga blandas",
      "Férulas de reposicionamiento mandibular",
      "Dispositivos de avance mandibular (DAM)",
    ],
  },
] as const;

export const FAQ = [
  {
    q: "¿Cómo envío mis trabajos al laboratorio?",
    a: "Aceptamos trabajos por mensajería concertada o servicio de recogida propio en área metropolitana de Barcelona. También trabajamos con escáner intraoral para casos digitales.",
  },
  {
    q: "¿Cuáles son los plazos habituales de entrega?",
    a: "Cerámica y CAD/CAM: 5–7 días laborables. Estructuras metálicas: 3–5 días. Férulas: 2–3 días. Provisionales urgentes: 24–48 horas. Siempre confirmamos plazo al recibir el trabajo.",
  },
  {
    q: "¿Trabajáis con escáner intraoral?",
    a: "Sí. Somos compatibles con los principales sistemas del mercado: iTero, 3Shape, Cerec, Medit. Envía el archivo .stl o .ply por nuestra plataforma de transferencia segura.",
  },
  {
    q: "¿Podéis hacer urgencias?",
    a: "En casos justificados, sí. Contacta directamente por teléfono para valorar el caso. Las urgencias tienen un suplemento que se informa antes de aceptar el trabajo.",
  },
  {
    q: "¿Tenéis seguro de responsabilidad civil?",
    a: "Sí. Contamos con seguro de responsabilidad civil profesional para el sector sanitario con cobertura completa.",
  },
] as const;

export const FOOTER_LINKS = [
  { label: "Laboratorio", href: "/laboratorio" },
  { label: "Servicios", href: "/servicios" },
  { label: "Proceso", href: "/proceso" },
  { label: "Contacto", href: "/contacto" },
] as const;
