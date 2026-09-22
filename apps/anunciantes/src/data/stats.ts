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
    value: 250000,
    prefix: "Más de ",
    label: "Páginas vistas",
    context: "vistas cada mes",
    featured: true,
  },
  {
    value: 100000,
    prefix: "Más de ",
    label: "Usuarios nuevos",
    context: "mensual",
  },
  {
    value: 80,
    prefix: "Aprox. ",
    suffix: "%",
    label: "Tráfico mobile",
    context: "una audiencia conectada desde su teléfono",
  },
  {
    value: 150000,
    prefix: "Aprox. más de ",
    label: "Seguidores en redes sociales",
    context: "promedio de 8 millones de visitas en Instagram",
  },
];
