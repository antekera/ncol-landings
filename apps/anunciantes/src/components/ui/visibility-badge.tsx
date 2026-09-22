import type { AdVisibility } from "@/data/advertising";

const VISIBILITY_STYLES: Record<AdVisibility, string> = {
  "Media-baja": "border-brand-gray/60 bg-brand-gray/10 text-brand-navy",
  Media: "border-brand-blue/30 bg-brand-blue/10 text-brand-blue",
  Alta: "border-emerald-500/50 bg-emerald-500/10 text-emerald-800",
  "Alta / continua": "border-emerald-600 bg-emerald-600 text-white",
  Máxima: "border-brand-navy bg-brand-navy text-white",
};

type VisibilityBadgeProps = {
  visibility: AdVisibility;
};

export function VisibilityBadge({ visibility }: VisibilityBadgeProps) {
  return (
    <span
      className={`inline-flex min-h-7 items-center rounded-full border px-3 py-1 text-[0.65rem] font-extrabold tracking-[0.08em] uppercase ${VISIBILITY_STYLES[visibility]}`}
    >
      Visibilidad: {visibility}
    </span>
  );
}
