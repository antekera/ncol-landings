export type AudienceStat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  context: string;
  featured?: boolean;
};

export const AUDIENCE_STATS: readonly AudienceStat[] = [
  {
    value: 270000,
    prefix: "Más de ",
    label: "Páginas vistas",
    context: "en los últimos 30 días",
    featured: true,
  },
  {
    value: 128000,
    prefix: "Más de ",
    label: "Usuarios nuevos",
    context: "en el período reciente",
  },
  {
    value: 80,
    prefix: "Aprox. ",
    suffix: "%",
    label: "Tráfico mobile",
    context: "una audiencia conectada desde su teléfono",
  },
  {
    value: 127000,
    prefix: "Aprox. ",
    label: "Seguidores en Instagram",
    context: "comunidad actual; no implica alcance garantizado",
  },
];
