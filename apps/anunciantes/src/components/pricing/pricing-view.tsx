import { SectionHeading } from "@/components/ui/section-heading";
import { VisibilityBadge } from "@/components/ui/visibility-badge";
import {
  ADVERTISING_FORMATS,
  PLAN_PERIODS,
  type PlanMonths,
} from "@/data/advertising";
import {
  formatUsd,
  getPlanLabel,
  getPlanPricing,
} from "@/lib/pricing";
import { FrequentlyAskedQuestions } from "@/components/sections/faq";

type PricingViewProps = {
  months: PlanMonths;
  onPeriodChange?: (months: PlanMonths) => void;
};

function PeriodSelector({ months, onPeriodChange }: PricingViewProps) {
  return (
    <div className="sticky top-[4.5rem] z-30 -mx-1 rounded-2xl bg-background/95 px-1 py-2 shadow-[0_14px_32px_-26px_rgba(16,32,57,0.8)] backdrop-blur-sm lg:static lg:mx-0 lg:rounded-none lg:bg-transparent lg:p-0 lg:shadow-none">
      <div
        role="radiogroup"
        aria-label="Duración de la campaña"
        className="grid grid-cols-3 overflow-hidden rounded-xl border border-brand-navy bg-surface"
      >
        {PLAN_PERIODS.map((period) => {
          const selected = months === period;
          const periodLabel = period === 1 ? "1 mes" : `${period} meses`;

          return (
            <button
              key={period}
              type="button"
              role="radio"
              aria-checked={selected}
              disabled={!onPeriodChange}
              onClick={
                onPeriodChange ? () => onPeriodChange(period) : undefined
              }
              className={`min-h-16 border-r border-brand-navy px-2 py-2 text-center text-sm font-extrabold transition-colors last:border-r-0 disabled:cursor-wait sm:min-w-32 sm:px-4 ${
                selected
                  ? "bg-brand-navy text-white"
                  : "bg-surface text-brand-navy hover:bg-surface-muted"
              }`}
            >
              <span className="block">{periodLabel}</span>
              {period === 3 ? (
                <span
                  className={`mt-1 block text-[0.58rem] tracking-[0.08em] uppercase ${
                    selected ? "text-brand-orange" : "text-brand-blue"
                  }`}
                >
                  Recomendado
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
      <p className="mt-2 text-center text-xs text-muted-foreground">
        Precio mensual según duración
      </p>
    </div>
  );
}

function Price({
  formatId,
  monthly,
  total,
  savingsPercent,
  months,
  inverted = false,
}: {
  formatId: string;
  monthly: number;
  total: number;
  savingsPercent: number;
  months: PlanMonths;
  inverted?: boolean;
}) {
  return (
    <div>
      <div className="flex items-end gap-1.5">
        <span
          key={`${formatId}-${months}`}
          className={`price-change font-serif text-3xl leading-none font-extrabold tracking-[-0.04em] sm:text-4xl ${
            inverted ? "text-white" : "text-brand-navy"
          }`}
        >
          {formatUsd(monthly)}
        </span>
        <span
          className={`pb-0.5 text-xs font-bold ${
            inverted ? "text-white/55" : "text-muted-foreground"
          }`}
        >
          /mes
        </span>
      </div>
      <p
        className={`mt-2 text-xs leading-5 ${
          inverted ? "text-white/60" : "text-muted-foreground"
        }`}
      >
        {getPlanLabel(months)} · {formatUsd(total)} total
      </p>
      {savingsPercent > 0 ? (
        <span className="mt-2 inline-flex rounded-md bg-brand-orange px-2 py-1 text-[0.65rem] font-extrabold text-brand-navy">
          Ahorra {savingsPercent}%
        </span>
      ) : null}
    </div>
  );
}

function DesktopPricingTable({ months }: Pick<PricingViewProps, "months">) {
  return (
    <div className="mt-12 hidden overflow-hidden rounded-2xl border border-border shadow-[0_20px_54px_-42px_rgba(16,32,57,0.55)] lg:block">
      <table className="w-full border-collapse text-left">
        <thead className="bg-brand-navy text-white">
          <tr className="text-[0.65rem] font-extrabold tracking-[0.12em] uppercase">
            <th scope="col" className="w-[29%] px-6 py-4">
              Formato
            </th>
            <th scope="col" className="w-[19%] px-6 py-4">
              Visibilidad
            </th>
            <th scope="col" className="w-[24%] px-6 py-4">
              Incluye
            </th>
            <th scope="col" className="w-[28%] px-6 py-4">
              Precio
            </th>
          </tr>
        </thead>
        <tbody>
          {ADVERTISING_FORMATS.map((format) => {
            const pricing = getPlanPricing(format, months);
            return (
              <tr
                key={format.id}
                className={`border-b border-border align-top last:border-b-0 ${
                  format.recommended ? "bg-[#fff7ed]" : "bg-surface"
                }`}
              >
                <th scope="row" className="px-6 py-6">
                  <div className="flex items-center gap-2">
                    <span className="font-serif text-xl font-extrabold text-brand-navy">
                      {format.name}
                    </span>
                    {format.recommended ? (
                      <span className="rounded-md bg-brand-orange px-2 py-1 text-[0.55rem] font-extrabold tracking-[0.08em] text-brand-navy uppercase">
                        Recomendado
                      </span>
                    ) : null}
                  </div>
                </th>
                <td className="px-6 py-6">
                  <VisibilityBadge visibility={format.visibility} />
                </td>
                <td className="px-6 py-6 text-sm leading-6 text-muted-foreground">
                  {format.benefits.length > 0 ? (
                    <ul className="space-y-1.5">
                      {format.benefits.map((benefit) => (
                        <li key={benefit} className="flex gap-2">
                          <span className="text-brand-orange" aria-hidden="true">
                            +
                          </span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <span aria-label="Sin beneficios sociales adicionales">—</span>
                  )}
                </td>
                <td className="px-6 py-6">
                  <Price formatId={format.id} months={months} {...pricing} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function MobilePricingCards({ months }: Pick<PricingViewProps, "months">) {
  return (
    <div className="mt-10 grid gap-4 lg:hidden">
      {ADVERTISING_FORMATS.map((format) => {
        const pricing = getPlanPricing(format, months);
        return (
          <article
            key={format.id}
            className={`rounded-2xl border border-border p-5 shadow-[0_18px_42px_-38px_rgba(16,32,57,0.7)] sm:p-7 ${
              format.recommended ? "bg-[#fff7ed]" : "bg-surface"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-serif text-2xl font-extrabold text-brand-navy">
                  {format.name}
                </h3>
                {format.recommended ? (
                  <span className="mt-2 inline-flex rounded-md bg-brand-orange px-2 py-1 text-[0.6rem] font-extrabold tracking-[0.08em] text-brand-navy uppercase">
                    Formato recomendado
                  </span>
                ) : null}
              </div>
              <VisibilityBadge visibility={format.visibility} />
            </div>

            <div className="mt-6">
              <Price formatId={format.id} months={months} {...pricing} />
            </div>

            {format.benefits.length > 0 ? (
              <ul className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted-foreground">
                {format.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="font-bold text-brand-orange" aria-hidden="true">
                      +
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
            ) : null}

          </article>
        );
      })}
    </div>
  );
}

export function PricingView({ months, onPeriodChange }: PricingViewProps) {
  return (
    <>
      <section id="tarifas" aria-labelledby="tarifas-title" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end" data-reveal>
            <SectionHeading
              eyebrow="Tarifas"
              title="Elige una duración. Compara un solo precio."
              titleId="tarifas-title"
              description="El valor mostrado es mensual. Debajo verás siempre el compromiso total del plan seleccionado."
            />
            <PeriodSelector months={months} onPeriodChange={onPeriodChange} />
          </div>

          <p className="sr-only" aria-live="polite">
            Tarifas actualizadas para {getPlanLabel(months).toLowerCase()}.
          </p>

          <div data-reveal><DesktopPricingTable months={months} /></div>
          <div data-reveal><MobilePricingCards months={months} /></div>
        </div>
      </section>

      <FrequentlyAskedQuestions />
    </>
  );
}
