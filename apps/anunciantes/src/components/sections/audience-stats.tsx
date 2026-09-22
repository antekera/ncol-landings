import { SectionHeading } from "@/components/ui/section-heading";
import { StatCounter } from "@/components/ui/stat-counter";
import { AUDIENCE_STATS } from "@/data/stats";

export function AudienceStats() {
  return (
    <section
      id="audiencia"
      aria-labelledby="audiencia-title"
      className="relative isolate overflow-hidden bg-brand-navy py-20 text-white sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20 editorial-grid" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 border-b border-white/15 pb-10 lg:grid-cols-[1fr_0.7fr] lg:items-end" data-reveal>
          <div>
            <SectionHeading
              eyebrow="Una audiencia que ya está aquí"
              title="Alcance reciente, presentado con contexto."
              titleId="audiencia-title"
              inverted
            />
          </div>
          <p className="max-w-xl text-sm leading-6 text-white/65 lg:justify-self-end lg:text-base lg:leading-7">
            Estas cifras describen períodos recientes de Noticiascol. Sirven como
            referencia comercial y no representan un volumen mensual garantizado
            para cada campaña.
          </p>
        </div>

        <dl className="mt-10 grid grid-cols-2 border-t border-l border-white/15 lg:grid-cols-12">
          {AUDIENCE_STATS.map((stat) => (
            <div
              key={stat.label}
              data-reveal
              className={`border-r border-b border-white/15 p-4 sm:p-6 lg:p-7 ${
                stat.featured
                  ? "col-span-2 bg-brand-blue lg:col-span-6"
                  : "col-span-1 lg:col-span-2"
              }`}
            >
              <dt className="text-xs leading-5 font-extrabold tracking-[0.1em] text-white/60 uppercase">
                {stat.label}
              </dt>
              <dd
                className={`mt-4 font-serif leading-none font-extrabold tracking-[-0.04em] ${
                  stat.featured
                    ? "text-4xl text-white sm:text-5xl"
                    : "text-2xl text-brand-orange sm:text-3xl"
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
      </div>
    </section>
  );
}
