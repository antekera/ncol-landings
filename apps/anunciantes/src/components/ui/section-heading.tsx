import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleId?: string;
  description?: ReactNode;
  inverted?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  description,
  inverted = false,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p
        className={`flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] uppercase sm:text-sm ${
          inverted ? "text-brand-orange" : "text-brand-blue"
        }`}
      >
        <span
          className={`h-px w-8 ${inverted ? "bg-white/50" : "bg-brand-orange"}`}
          aria-hidden="true"
        />
        {eyebrow}
      </p>
      <h2
        id={titleId}
        className={`mt-5 font-serif text-3xl leading-tight font-extrabold tracking-[-0.035em] sm:text-5xl ${
          inverted ? "text-white" : "text-brand-navy"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <div
          className={`mt-5 text-base leading-7 sm:text-lg sm:leading-8 ${
            inverted ? "text-white/70" : "text-muted-foreground"
          }`}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}
