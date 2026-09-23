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
    suffix: " +",
    label: "Páginas vistas",
    context: "vistas cada mes",
    featured: true,
  },
  {
    value: 100000,
    suffix: " +",
    label: "Usuarios nuevos",
    context: "mensual",
  },
  {
    value: 80,
    suffix: "%",
    label: "Tráfico mobile",
    context: "una audiencia conectada desde su teléfono",
  },
  {
    value: 150000,
    suffix: " +",
    label: "Seguidores en redes sociales",
    context: "promedio de 8 millones de visitas en Instagram",
  },
];
