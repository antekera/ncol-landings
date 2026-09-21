import { BRAND } from "@/config/brand";

export const CAMPAIGN_EMAIL_URL = `mailto:${BRAND.commercialEmail}?subject=${encodeURIComponent(
  "Solicitud de campaña en Noticiascol",
)}`;
