import type { AdVisibility } from "@/data/advertising";

const VISIBILITY_STYLES: Record<AdVisibility, string> = {
  "Media-baja": "border-brand-gray/60 bg-brand-gray/10 text-brand-navy",
  Media: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
  Alta: "border-brand-orange/40 bg-brand-orange/10 text-[#9a4a00]",
  "Alta / continua": "border-brand-orange bg-brand-orange text-brand-navy",
  Máxima: "border-brand-navy bg-brand-navy text-white",
};

type VisibilityBadgeProps = {
  visibility: AdVisibility;
};

export function VisibilityBadge({ visibility }: VisibilityBadgeProps) {
  return (
    <span
      className={`inline-flex min-h-7 items-center border px-2.5 py-1 text-[0.65rem] font-extrabold tracking-[0.08em] uppercase ${VISIBILITY_STYLES[visibility]}`}
    >
      Visibilidad: {visibility}
    </span>
  );
}
