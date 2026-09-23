export const PLAN_DURATIONS = {
  oneMonth: 1,
  threeMonths: 3,
  sixMonths: 6,
} as const;

export const PLAN_PERIODS = [
  PLAN_DURATIONS.oneMonth,
  PLAN_DURATIONS.threeMonths,
  PLAN_DURATIONS.sixMonths,
] as const;

export type PlanMonths = (typeof PLAN_PERIODS)[number];

// These labels are presentation-only. The numeric values above remain the
// source of truth for calculating each plan's monthly price and total.
export const PLAN_PERIOD_LABELS = {
  1: "30 días",
  3: "90 días",
  6: "180 días",
} as const satisfies Record<PlanMonths, string>;
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
  minimumGuaranteedVisitsPerMonth: number;
  prices: Record<PlanMonths, number>;
  benefits: readonly string[];
  demoTarget: AdSlotId;
  recommended?: boolean;
};

export const AD_SLOT_NAMES = {
  "article-bottom": "Banner al final de la noticia",
  sidebar: "Banner en columna lateral",
  inline: "Banner dentro de la noticia",
  "article-top": "Banner al inicio de la noticia",
  header: "Banner superior",
  "sticky-bottom": "Banner fijo en pantalla",
  popup: "Ventana destacada",
} as const satisfies Record<AdSlotId, string>;

export const AD_SLOT_PRICES = {
  "article-bottom": { 1: 250, 3: 210, 6: 190 },
  sidebar: { 1: 300, 3: 255, 6: 225 },
  inline: { 1: 350, 3: 300, 6: 260 },
  "article-top": { 1: 600, 3: 510, 6: 450 },
  header: { 1: 750, 3: 640, 6: 560 },
  "sticky-bottom": { 1: 900, 3: 765, 6: 675 },
  popup: { 1: 1000, 3: 850, 6: 750 },
} as const satisfies Record<AdSlotId, Record<PlanMonths, number>>;

export const ADVERTISING_FORMATS: readonly AdvertisingFormat[] = [
  {
    id: "article-bottom",
    name: AD_SLOT_NAMES["article-bottom"],
    description:
      "Presencia al cierre de la lectura, ideal para acompañar al usuario al completar la noticia.",
    dimensions: { desktop: "728 × 90 px", mobile: "320 × 100 px" },
    visibility: "Media-baja",
    minimumGuaranteedVisitsPerMonth: 85_000,
    prices: AD_SLOT_PRICES["article-bottom"],
    benefits: [],
    demoTarget: "article-bottom",
  },
  {
    id: "sidebar",
    name: AD_SLOT_NAMES.sidebar,
    description:
      "Formato vertical en la columna lateral de desktop, con una adaptación rectangular para mobile.",
    dimensions: { desktop: "300 × 600 px", mobile: "300 × 250 px" },
    visibility: "Media",
    minimumGuaranteedVisitsPerMonth: 100_000,
    prices: AD_SLOT_PRICES.sidebar,
    benefits: ["1 Story mensual"],
    demoTarget: "sidebar",
  },
  {
    id: "inline",
    name: AD_SLOT_NAMES.inline,
    description:
      "Se integra dentro del cuerpo de la noticia y acompaña de forma natural el recorrido de lectura.",
    dimensions: { desktop: "300 × 250 px", mobile: "300 × 250 px" },
    visibility: "Media",
    minimumGuaranteedVisitsPerMonth: 120_000,
    prices: AD_SLOT_PRICES.inline,
    benefits: ["2 Stories mensuales"],
    demoTarget: "inline",
  },
  {
    id: "article-top",
    name: AD_SLOT_NAMES["article-top"],
    description:
      "Ubicación de alta exposición antes del contenido principal de cada noticia.",
    dimensions: { desktop: "728 × 90 px", mobile: "320 × 100 px" },
    visibility: "Alta",
    minimumGuaranteedVisitsPerMonth: 170_000,
    prices: AD_SLOT_PRICES["article-top"],
    benefits: ["2 Stories mensuales"],
    demoTarget: "article-top",
  },
  {
    id: "header",
    name: AD_SLOT_NAMES.header,
    description:
      "Un lienzo amplio en la cabecera para campañas de marca y mensajes visuales de alto impacto.",
    dimensions: { desktop: "970 × 250 px", mobile: "300 × 250 px" },
    visibility: "Alta",
    minimumGuaranteedVisitsPerMonth: 200_000,
    prices: AD_SLOT_PRICES.header,
    benefits: ["2 Stories mensuales", "1 publicación Feed mensual"],
    demoTarget: "header",
  },
  {
    id: "sticky-bottom",
    name: AD_SLOT_NAMES["sticky-bottom"],
    description:
      "Permanece visible en el borde inferior durante la navegación y mantiene presencia continua.",
    dimensions: { desktop: "970 × 90 px", mobile: "320 × 100 px" },
    visibility: "Alta / continua",
    minimumGuaranteedVisitsPerMonth: 200_000,
    prices: AD_SLOT_PRICES["sticky-bottom"],
    benefits: ["1 Story semanal", "1 publicación Feed mensual"],
    demoTarget: "sticky-bottom",
    recommended: true,
  },
  {
    id: "popup",
    name: AD_SLOT_NAMES.popup,
    description:
      "Formato superpuesto de máxima presencia, con una experiencia adaptada a cada pantalla.",
    dimensions: { desktop: "900 × 500 px", mobile: "320 × 480 px" },
    visibility: "Máxima",
    minimumGuaranteedVisitsPerMonth: 150_000,
    prices: AD_SLOT_PRICES.popup,
    benefits: ["1 Story semanal", "1 publicación Feed o Reel mensual"],
    demoTarget: "popup",
  },
];

export const RECOMMENDED_AD_FORMAT = ADVERTISING_FORMATS.find(
  (format) => format.recommended,
)!;
