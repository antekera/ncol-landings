export type CommercialBenefit = {
  title: string;
  description: string;
  icon: "audience" | "news" | "mobile" | "report" | "visibility" | "channels";
};

export const COMMERCIAL_BENEFITS: readonly CommercialBenefit[] = [
  {
    title: "Audiencia local",
    icon: "audience",
    description:
      "Tu mensaje aparece frente a personas que siguen la actualidad de su comunidad.",
  },
  {
    title: "Contexto informativo",
    icon: "news",
    description:
      "La marca se integra en un entorno editorial reconocible y en ubicaciones definidas.",
  },
  {
    title: "Diseñado para mobile",
    icon: "mobile",
    description:
      "Los formatos contemplan primero la experiencia donde se concentra la mayor parte del tráfico.",
  },
  {
    title: "Informes con datos reales",
    icon: "report",
    description:
      "Recibe informes con vistas y clics reales de tu campaña durante el período de publicación.",
  },
  {
    title: "Visibilidad conocida",
    icon: "visibility",
    description:
      "Antes de contratar puedes revisar el tamaño, la ubicación y el comportamiento de cada espacio.",
  },
  {
    title: "Web, redes y contenido",
    icon: "channels",
    description:
      "Combina presencia en el sitio web, redes sociales y artículos patrocinados según el formato.",
  },
];
