export const EDITORIAL_CONTACT_URL = "https://www.noticiascol.com/contacto/";

export const WHATSAPP_ADVISOR_MESSAGE = "Contactar un asesor";

// Mismo canal público usado por la aplicación de Legales. El entorno puede
// sustituirlo sin cambiar el código del landing.
export const DEFAULT_WHATSAPP_PHONE = "584226500651";

export function getWhatsAppAdvisorUrl(phoneNumber?: string) {
  const phone = phoneNumber?.replace(/\D/g, "");

  if (!phone) {
    return null;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_ADVISOR_MESSAGE)}`;
}
