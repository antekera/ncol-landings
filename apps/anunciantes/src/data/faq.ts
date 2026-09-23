export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "¿El valor corresponde a un mes de presencia en el formato seleccionado?",
    answer:
      "Sí. El precio indicado es mensual y corresponde a la presencia en el formato seleccionado. La tabla también muestra el compromiso total del plan elegido, de 30, 90 o 180 días.",
  },
  {
    question: "¿Las tarifas garantizan una cantidad de impresiones?",
    answer:
      "Sí. Garantizamos un mínimo de impresiones según el tiempo contratado. El banner se mantendrá publicado hasta alcanzar el mínimo de impresiones correspondiente.",
  },
  {
    question: "¿Qué beneficios en redes sociales incluye cada formato?",
    answer:
      "Los beneficios adicionales aparecen especificados en cada formato. Su programación se coordina previamente y no implica una garantía de alcance determinado.",
  },
  {
    question: "¿Cómo preparo las piezas de mi campaña?",
    answer:
      "Cada formato indica sus dimensiones para desktop y mobile. Aceptamos imágenes en formato JPG, PNG o GIF. Antes de iniciar la campaña, el equipo comercial coordina contigo las piezas y los requisitos técnicos aplicables.",
  },
  {
    question: "¿Qué medios de pago aceptan?",
    answer:
      "Aceptamos pago móvil, Zelle, Binance y PayPal como medios de pago.",
  },
  {
    question: "¿Recibiré informes sobre mi campaña?",
    answer:
      "Sí. Registramos todas las vistas y los clics de cada banner. Recibirás informes periódicos con las estadísticas de actividad de tu campaña.",
  },
] as const;
