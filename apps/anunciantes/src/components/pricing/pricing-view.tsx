import { SectionHeading } from "@/components/ui/section-heading";
import { VisibilityBadge } from "@/components/ui/visibility-badge";
import {
  ADVERTISING_FORMATS,
  PLAN_PERIODS,
  RECOMMENDED_AD_FORMAT,
  type PlanMonths,
} from "@/data/advertising";
import {
  formatUsd,
  getPlanLabel,
  getPlanPricing,
} from "@/lib/pricing";
import { AdDemoButton } from "@/components/demo/ad-demo";

type PricingViewProps = {
  months: PlanMonths;
  onPeriodChange?: (months: PlanMonths) => void;
};

function PeriodSelector({ months, onPeriodChange }: PricingViewProps) {
  return (
    <div>
      <div
        role="radiogroup"
        aria-label="Duración de la campaña"
        className="grid grid-cols-3 border border-brand-navy bg-surface"
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
        <span className="mt-2 inline-flex bg-brand-orange px-2 py-1 text-[0.65rem] font-extrabold text-brand-navy">
          Ahorra {savingsPercent}%
        </span>
      ) : null}
    </div>
  );
}

function DesktopPricingTable({ months }: Pick<PricingViewProps, "months">) {
  return (
    <div className="mt-12 hidden overflow-hidden border border-border lg:block">
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
                      <span className="bg-brand-orange px-2 py-1 text-[0.55rem] font-extrabold tracking-[0.08em] text-brand-navy uppercase">
                        Recomendado
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-2 text-xs leading-5 font-normal text-muted-foreground">
                    Desktop {format.dimensions.desktop}
                    <br />
                    Mobile {format.dimensions.mobile}
                  </p>
                  <a
                    href={`#formato-${format.id}`}
                    className="mt-3 inline-flex text-xs font-extrabold text-brand-blue underline decoration-brand-orange underline-offset-4"
                  >
                    Ver ubicación
                  </a>
                  <AdDemoButton
                    slot={format.demoTarget}
                    className="mt-3 ml-4 inline-flex min-h-11 items-center border border-brand-navy px-3 py-2 text-xs font-extrabold text-brand-navy hover:bg-surface-muted"
                  />
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
    <div className="mt-10 grid border-t border-l border-border lg:hidden">
      {ADVERTISING_FORMATS.map((format) => {
        const pricing = getPlanPricing(format, months);
        return (
          <article
            key={format.id}
            className={`border-r border-b border-border p-5 sm:p-7 ${
              format.recommended ? "bg-[#fff7ed]" : "bg-surface"
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-serif text-2xl font-extrabold text-brand-navy">
                  {format.name}
                </h3>
                {format.recommended ? (
                  <span className="mt-2 inline-flex bg-brand-orange px-2 py-1 text-[0.6rem] font-extrabold tracking-[0.08em] text-brand-navy uppercase">
                    Formato recomendado
                  </span>
                ) : null}
              </div>
              <VisibilityBadge visibility={format.visibility} />
            </div>

            <div className="mt-6">
              <Price formatId={format.id} months={months} {...pricing} />
            </div>

            <dl className="mt-6 grid grid-cols-2 border-t border-border pt-4 text-xs">
              <div>
                <dt className="font-extrabold tracking-[0.08em] text-muted-foreground uppercase">
                  Desktop
                </dt>
                <dd className="mt-1 font-bold text-brand-navy">
                  {format.dimensions.desktop}
                </dd>
              </div>
              <div>
                <dt className="font-extrabold tracking-[0.08em] text-muted-foreground uppercase">
                  Mobile
                </dt>
                <dd className="mt-1 font-bold text-brand-navy">
                  {format.dimensions.mobile}
                </dd>
              </div>
            </dl>

            {format.benefits.length > 0 ? (
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
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

            <AdDemoButton
              slot={format.demoTarget}
              className="mt-6 inline-flex min-h-11 items-center border border-brand-navy px-4 py-2 text-xs font-extrabold text-brand-navy"
            />
          </article>
        );
      })}
    </div>
  );
}

function RecommendedSticky({ months }: Pick<PricingViewProps, "months">) {
  const pricing = getPlanPricing(RECOMMENDED_AD_FORMAT, months);

  return (
    <section
      id="sticky-recomendado"
      aria-labelledby="sticky-title"
      className="overflow-hidden bg-brand-navy text-white"
    >
      <div className="mx-auto grid max-w-7xl lg:grid-cols-[0.9fr_1.1fr]">
        <div className="px-5 py-20 sm:px-6 sm:py-24 lg:px-8">
          <span className="inline-flex border border-brand-orange px-3 py-1.5 text-[0.65rem] font-extrabold tracking-[0.12em] text-brand-orange uppercase">
            Formato recomendado
          </span>
          <h2
            id="sticky-title"
            className="mt-6 font-serif text-4xl leading-tight font-extrabold tracking-[-0.04em] sm:text-5xl"
          >
            Sticky Bottom
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
            Presencia persistente durante la navegación, diseñada para sostener
            visibilidad sin perder la adaptación mobile.
          </p>

          <div className="mt-8">
            <Price
              formatId={RECOMMENDED_AD_FORMAT.id}
              months={months}
              inverted
              {...pricing}
            />
          </div>

          <ul className="mt-8 space-y-3 border-t border-white/15 pt-6 text-sm font-bold text-white/80">
            <li className="flex gap-3">
              <span className="text-brand-orange" aria-hidden="true">
                +
              </span>
              Alta visibilidad / continua
            </li>
            {RECOMMENDED_AD_FORMAT.benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3">
                <span className="text-brand-orange" aria-hidden="true">
                  +
                </span>
                {benefit}
              </li>
            ))}
          </ul>

          <AdDemoButton
            slot={RECOMMENDED_AD_FORMAT.demoTarget}
            className="mt-8 inline-flex min-h-12 items-center border border-brand-orange px-5 py-3 text-sm font-extrabold text-brand-orange hover:bg-white/10"
          >
            Verlo funcionando
          </AdDemoButton>
        </div>

        <div className="relative min-h-[25rem] border-t border-white/15 bg-[#0b172a] p-5 sm:min-h-[32rem] sm:p-10 lg:border-t-0 lg:border-l">
          <div className="absolute inset-0 opacity-20 editorial-grid" />
          <div className="relative mx-auto h-full max-w-xl border border-white/20 bg-surface p-4 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] sm:p-6">
            <div className="flex items-center justify-between border-b border-brand-navy pb-3">
              <span className="text-xs font-black text-brand-blue">
                noticias<span className="text-brand-orange">col</span>
                <span className="text-brand-gray">.com</span>
              </span>
              <span className="h-1.5 w-14 bg-brand-navy/15" />
            </div>
            <div className="mt-5 h-4 w-4/5 bg-brand-navy" />
            <div className="mt-2 h-4 w-3/5 bg-brand-navy" />
            <div className="mt-5 aspect-[16/7] bg-surface-muted editorial-grid" />
            <div className="mt-5 space-y-2">
              <div className="h-2 w-full bg-brand-navy/10" />
              <div className="h-2 w-11/12 bg-brand-navy/10" />
              <div className="h-2 w-4/5 bg-brand-navy/10" />
            </div>
            <div className="absolute right-4 bottom-4 left-4 grid min-h-16 place-items-center border-2 border-brand-orange bg-[#fff3e6] px-4 text-center shadow-[0_16px_36px_-18px_rgba(16,32,57,0.8)] sm:right-6 sm:bottom-6 sm:left-6">
              <div>
                <span className="block text-xs font-extrabold tracking-[0.12em] text-brand-orange uppercase">
                  Sticky Bottom
                </span>
                <span className="mt-1 block text-[0.65rem] font-bold text-brand-navy/60">
                  970 × 90 · 320 × 100
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PricingView({ months, onPeriodChange }: PricingViewProps) {
  return (
    <>
      <section
        id="tarifas"
        aria-labelledby="tarifas-title"
        className="bg-background py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
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

          <DesktopPricingTable months={months} />
          <MobilePricingCards months={months} />
        </div>
      </section>

      <RecommendedSticky months={months} />
    </>
  );
}
