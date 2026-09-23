export const PHONE_COUNTRIES = {
  VE: { name: "Venezuela", dialCode: "+58", groups: [3, 7] },
  CL: { name: "Chile", dialCode: "+56", groups: [3, 6] },
  US: { name: "Estados Unidos", dialCode: "+1", groups: [3, 3, 4] },
} as const;

export type PhoneCountry = keyof typeof PHONE_COUNTRIES;

export function formatNationalPhone(value: string, country: PhoneCountry) {
  const groups = PHONE_COUNTRIES[country].groups;
  const maxDigits = groups.reduce((total, length) => total + length, 0);
  const digits = value.replace(/\D/g, "").slice(0, maxDigits);
  const parts: string[] = [];
  let cursor = 0;

  for (const length of groups) {
    const part = digits.slice(cursor, cursor + length);
    if (!part) break;
    parts.push(part);
    cursor += length;
  }

  return parts.join("-");
}

export function getPhonePlaceholder(country: PhoneCountry) {
  return PHONE_COUNTRIES[country].groups
    .map((length) => "0".repeat(length))
    .join("-");
}

export function getPhonePattern(country: PhoneCountry) {
  return PHONE_COUNTRIES[country].groups
    .map((length) => `[0-9]{${length}}`)
    .join("-");
}

export function toInternationalPhone(value: string, country: PhoneCountry) {
  const digits = value.replace(/\D/g, "");
  const expectedDigits = PHONE_COUNTRIES[country].groups.reduce(
    (total, length) => total + length,
    0,
  );

  if (digits.length !== expectedDigits) return null;
  return `${PHONE_COUNTRIES[country].dialCode}${digits}`;
}

export function isValidInternationalPhone(value: string) {
  return Object.values(PHONE_COUNTRIES).some(({ dialCode, groups }) => {
    const expectedDigits = groups.reduce((total, length) => total + length, 0);
    const pattern = new RegExp(`^\\${dialCode}[0-9]{${expectedDigits}}$`);
    return pattern.test(value);
  });
}
