import { SectionHeading } from "@/components/ui/section-heading";
import { BenefitIcon } from "@/components/ui/benefit-icon";
import { COMMERCIAL_BENEFITS } from "@/data/benefits";
import styles from "./commercial-surfaces.module.css";

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
            description="Una campaña puede combinar visibilidad editorial y formatos adaptados a dispositivos móviles, con medición útil para dirigir a la audiencia hacia tu sitio web, app o redes sociales."
          />
        </div>

        <ol className="mt-12 grid gap-x-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
          {COMMERCIAL_BENEFITS.map((benefit) => (
            <li
              key={benefit.title}
              data-reveal
              className={`${styles.benefit} grid grid-cols-[3.25rem_1fr] gap-4 border-t border-brand-navy/15 py-6 sm:py-8`}
            >
              <span className={`${styles.benefitIcon} grid size-11 place-items-center rounded-xl border border-brand-blue/20 bg-brand-blue/8 text-brand-blue`}>
                <BenefitIcon name={benefit.icon} className="size-5" />
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
