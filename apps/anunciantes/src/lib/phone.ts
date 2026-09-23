import { AsYouType, parsePhoneNumberFromString } from "libphonenumber-js";

const MAX_INTERNATIONAL_DIGITS = 15;

export function formatInternationalPhone(value: string) {
  const trimmed = value.trimStart();
  if (!trimmed) return "";

  const digits = value.replace(/\D/g, "").slice(0, MAX_INTERNATIONAL_DIGITS);
  // Don't infer a country code from a local number: require the user to enter `+`.
  if (!trimmed.startsWith("+")) return digits;
  if (!digits) return "+";

  return new AsYouType().input(`+${digits}`);
}

export function toInternationalPhone(value: string) {
  const trimmed = value.trim();
  if (!trimmed.startsWith("+")) return null;

  const phone = parsePhoneNumberFromString(trimmed, { extract: false });
  if (!phone?.isValid()) return null;

  // Reject obvious placeholders such as +1 111 111 1111.
  if (/^(\d)\1+$/.test(phone.nationalNumber)) return null;

  return phone.number;
}

export function isValidInternationalPhone(value: string) {
  return toInternationalPhone(value) !== null;
}
