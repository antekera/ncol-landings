import { SectionHeading } from "@/components/ui/section-heading";
import { COMMERCIAL_BENEFITS } from "@/data/benefits";

export function Benefits() {
  return (
    <section
      id="beneficios"
      aria-labelledby="beneficios-title"
      className="bg-background py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="Por qué Noticiascol"
            title="Presencia comercial dentro de la conversación local."
            titleId="beneficios-title"
            description="Una campaña puede unir visibilidad editorial, formatos adaptados a mobile y medición útil, sin promesas que el medio no pueda sostener."
          />
        </div>

        <ol className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {COMMERCIAL_BENEFITS.map((benefit, index) => (
            <li
              key={benefit.title}
              data-reveal
              className="grid grid-cols-[2.25rem_1fr] gap-4 border-t border-brand-navy/20 py-6 sm:py-8"
            >
              <span className="font-serif text-sm font-extrabold text-brand-orange">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-extrabold text-brand-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
                  {benefit.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
