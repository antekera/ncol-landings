export type AudienceStat = {
  value: string;
  label: string;
  context: string;
  featured?: boolean;
};

export const AUDIENCE_STATS: readonly AudienceStat[] = [
  {
    value: "Más de 270.000",
    label: "Páginas vistas",
    context: "en los últimos 30 días",
    featured: true,
  },
  {
    value: "Más de 187.000",
    label: "Sesiones",
    context: "en el período reciente",
  },
  {
    value: "Más de 128.000",
    label: "Usuarios nuevos",
    context: "en el período reciente",
  },
  {
    value: "Aprox. 80%",
    label: "Tráfico mobile",
    context: "una audiencia conectada desde su teléfono",
  },
  {
    value: "Aprox. 127.000",
    label: "Seguidores en Instagram",
    context: "comunidad actual; no implica alcance garantizado",
  },
];
