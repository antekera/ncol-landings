export const PLAN_PERIODS = [1, 3, 6] as const;

export type PlanMonths = (typeof PLAN_PERIODS)[number];
export type AdSlotId =
  | "article-bottom"
  | "sidebar"
  | "inline"
  | "article-top"
  | "header"
  | "sticky-bottom"
  | "popup";

export type AdVisibility =
  | "Media-baja"
  | "Media"
  | "Alta"
  | "Alta / continua"
  | "Máxima";

export type AdvertisingFormat = {
  id: AdSlotId;
  name: string;
  description: string;
  dimensions: {
    desktop: string;
    mobile: string;
  };
  visibility: AdVisibility;
  prices: Record<PlanMonths, number>;
  benefits: readonly string[];
  demoTarget: AdSlotId;
  recommended?: boolean;
};

export const ADVERTISING_FORMATS: readonly AdvertisingFormat[] = [
  {
    id: "article-bottom",
    name: "Article Bottom",
    description:
      "Presencia al cierre de la lectura, ideal para acompañar al usuario al completar la noticia.",
    dimensions: { desktop: "728 × 90", mobile: "320 × 100" },
    visibility: "Media-baja",
    prices: { 1: 250, 3: 210, 6: 190 },
    benefits: [],
    demoTarget: "article-bottom",
  },
  {
    id: "sidebar",
    name: "Sidebar",
    description:
      "Formato vertical en la columna lateral de desktop, con una adaptación rectangular para mobile.",
    dimensions: { desktop: "300 × 600", mobile: "300 × 250" },
    visibility: "Media",
    prices: { 1: 300, 3: 255, 6: 225 },
    benefits: ["1 Story mensual"],
    demoTarget: "sidebar",
  },
  {
    id: "inline",
    name: "Inline",
    description:
      "Se integra dentro del cuerpo de la noticia y acompaña de forma natural el recorrido de lectura.",
    dimensions: { desktop: "300 × 250", mobile: "300 × 250" },
    visibility: "Media",
    prices: { 1: 350, 3: 300, 6: 260 },
    benefits: [],
    demoTarget: "inline",
  },
  {
    id: "article-top",
    name: "Article Top",
    description:
      "Ubicación de alta exposición antes del contenido principal de cada noticia.",
    dimensions: { desktop: "728 × 90", mobile: "320 × 100" },
    visibility: "Alta",
    prices: { 1: 600, 3: 510, 6: 450 },
    benefits: ["1 Story mensual"],
    demoTarget: "article-top",
  },
  {
    id: "header",
    name: "Header",
    description:
      "Un lienzo amplio en la cabecera para campañas de marca y mensajes visuales de alto impacto.",
    dimensions: { desktop: "970 × 250", mobile: "300 × 250" },
    visibility: "Alta",
    prices: { 1: 750, 3: 640, 6: 560 },
    benefits: ["2 Stories mensuales", "1 publicación Feed mensual"],
    demoTarget: "header",
  },
  {
    id: "sticky-bottom",
    name: "Sticky Bottom",
    description:
      "Permanece visible en el borde inferior durante la navegación y mantiene presencia continua.",
    dimensions: { desktop: "970 × 90", mobile: "320 × 100" },
    visibility: "Alta / continua",
    prices: { 1: 900, 3: 765, 6: 675 },
    benefits: ["1 Story semanal", "1 publicación Feed mensual"],
    demoTarget: "sticky-bottom",
    recommended: true,
  },
  {
    id: "popup",
    name: "Popup",
    description:
      "Formato superpuesto de máxima presencia, con una experiencia adaptada a cada pantalla.",
    dimensions: { desktop: "900 × 500", mobile: "320 × 480" },
    visibility: "Máxima",
    prices: { 1: 1000, 3: 850, 6: 750 },
    benefits: ["Stories semanales", "1 publicación Feed o Reel mensual"],
    demoTarget: "popup",
  },
];
