import type { CommercialBenefit } from "@/data/benefits";

type BenefitIconProps = {
  name: CommercialBenefit["icon"];
  className?: string;
};

export function BenefitIcon({ name, className }: BenefitIconProps) {
  const common = {
    "aria-hidden": true,
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
  };

  if (name === "audience") {
    return <svg {...common}><path d="M12 21a8.4 8.4 0 0 0 7-3.7M5 17.3A8.4 8.4 0 0 0 12 21M12 3a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" /><path d="M4.5 20c.3-3 2.8-5.4 5.8-5.4h3.4c3 0 5.5 2.4 5.8 5.4" /></svg>;
  }

  if (name === "news") {
    return <svg {...common}><path d="M5 4h14v16H5z" /><path d="M8 8h8M8 12h8M8 16h5" /><path d="M3 7v12a1 1 0 0 0 1 1h1" /></svg>;
  }

  if (name === "mobile") {
    return <svg {...common}><rect width="11" height="18" x="6.5" y="3" rx="2" /><path d="M10 6h4M11.3 18h1.4" /></svg>;
  }

  if (name === "report") {
    return <svg {...common}><path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /><path d="m4 8 5-4 6 5 5-6" /></svg>;
  }

  if (name === "visibility") {
    return <svg {...common}><path d="M2.5 12S6 6.5 12 6.5 21.5 12 21.5 12 18 17.5 12 17.5 2.5 12 2.5 12Z" /><circle cx="12" cy="12" r="2.5" /></svg>;
  }

  return <svg {...common}><circle cx="6" cy="12" r="2" /><circle cx="18" cy="6" r="2" /><circle cx="18" cy="18" r="2" /><path d="m7.8 11 8.4-4M7.8 13l8.4 4" /></svg>;
}
