import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";
import { AUDIENCE_STATS } from "@/data/stats";
import styles from "./commercial-surfaces.module.css";

export function AudienceStats() {
  return (
    <section
      id="audiencia"
      aria-labelledby="audiencia-title"
      className={`${styles.darkSurface} relative isolate overflow-hidden py-20 text-white sm:py-24`}
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 editorial-grid" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div data-reveal>
          <div>
            <SectionHeading
              eyebrow="Una audiencia consolidada"
              title="Alcance medible con métricas transparentes"
              titleId="audiencia-title"
              inverted
            />
          </div>
        </div>

        <dl className="mt-10 grid auto-rows-fr grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {AUDIENCE_STATS.map((stat) => (
            <div
              key={stat.label}
              data-reveal
              className={`${styles.stat} rounded-2xl border border-white/15 p-4 sm:p-6 lg:p-7 ${
                stat.featured
                  ? styles.statFeatured
                  : ""
              }`}
            >
              <dt className="min-h-10 text-[0.65rem] leading-5 font-extrabold tracking-[0.08em] text-white/75 uppercase sm:text-xs">
                {stat.label}
              </dt>
              <dd
                className={`mt-4 font-sans text-xl leading-none font-extrabold tracking-[-0.04em] whitespace-nowrap min-[375px]:text-2xl sm:text-4xl lg:text-3xl xl:text-4xl ${
                  stat.featured
                    ? "text-white"
                    : "text-brand-orange"
                }`}
              >
                <StatCounter
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </dd>
              <dd className="mt-3 max-w-[18rem] text-xs leading-5 text-white/60 sm:text-sm">
                {stat.context}
              </dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 max-w-3xl text-xs leading-5 text-white/45 sm:text-sm">
          Estas cifras describen períodos recientes de Noticiascol. Sirven como
          referencia comercial y no representan un volumen mensual garantizado
          para cada campaña.
        </p>
        <a
          href="/visitas"
          className="mt-5 inline-flex min-h-11 items-center gap-2 rounded-full border border-white/25 px-5 text-sm font-extrabold text-white transition-colors hover:border-white hover:bg-white/10"
        >
          Explorar panel de visitas
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
