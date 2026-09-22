export const EDITORIAL_CONTACT_URL = "https://www.noticiascol.com/contacto/";

export const WHATSAPP_ADVISOR_MESSAGE = "Hola, quiero contactar un asesor.";

export function getWhatsAppAdvisorUrl(phoneNumber?: string) {
  const phone = phoneNumber?.replace(/\D/g, "");

  if (!phone) {
    return null;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(WHATSAPP_ADVISOR_MESSAGE)}`;
}
