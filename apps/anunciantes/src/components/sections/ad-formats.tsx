import { SectionHeading } from "@/components/ui/section-heading";
import { VisibilityBadge } from "@/components/ui/visibility-badge";
import { ADVERTISING_FORMATS } from "@/data/advertising";
import { AdDemoButton } from "@/components/demo/ad-demo";

export function AdFormats() {
  return (
    <section
      id="formatos"
      aria-labelledby="formatos-title"
      className="bg-surface py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <SectionHeading
            eyebrow="Formatos publicitarios"
            title="Una ubicación para cada nivel de visibilidad."
            titleId="formatos-title"
          />
          <p className="max-w-xl text-sm leading-6 text-muted-foreground lg:justify-self-end lg:text-base lg:leading-7">
            Cada formato conserva sus medidas reales de Noticiascol. En mobile se
            utiliza la variante indicada para cuidar la lectura y el espacio de la
            campaña.
          </p>
        </div>

        <div className="mt-12 grid border-t border-l border-border sm:grid-cols-2 lg:mt-16">
          {ADVERTISING_FORMATS.map((format, index) => (
            <article
              key={format.id}
              id={`formato-${format.id}`}
              className={`relative border-r border-b p-5 sm:p-7 ${
                format.recommended
                  ? "border-brand-navy bg-brand-navy text-white sm:col-span-2"
                  : "border-border bg-surface"
              }`}
            >
              <div
                className={`grid gap-6 ${
                  format.recommended
                    ? "lg:grid-cols-[1fr_auto] lg:items-start"
                    : ""
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`font-serif text-sm font-extrabold ${
                        format.recommended
                          ? "text-brand-orange"
                          : "text-brand-gray"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {format.recommended ? (
                      <span className="border border-brand-orange px-2.5 py-1 text-[0.65rem] font-extrabold tracking-[0.1em] text-brand-orange uppercase">
                        Formato recomendado
                      </span>
                    ) : null}
                  </div>
                  <h3
                    className={`mt-4 font-serif text-2xl font-extrabold tracking-[-0.025em] sm:text-3xl ${
                      format.recommended ? "text-white" : "text-brand-navy"
                    }`}
                  >
                    {format.name}
                  </h3>
                  <p
                    className={`mt-3 max-w-xl text-sm leading-6 sm:text-base sm:leading-7 ${
                      format.recommended
                        ? "text-white/65"
                        : "text-muted-foreground"
                    }`}
                  >
                    {format.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 lg:justify-end">
                  <VisibilityBadge visibility={format.visibility} />
                </div>
              </div>

              <dl
                className={`mt-7 grid grid-cols-2 border-t pt-5 text-sm ${
                  format.recommended ? "border-white/15" : "border-border"
                }`}
              >
                <div>
                  <dt
                    className={`text-[0.65rem] font-extrabold tracking-[0.12em] uppercase ${
                      format.recommended
                        ? "text-white/45"
                        : "text-muted-foreground"
                    }`}
                  >
                    Desktop
                  </dt>
                  <dd className="mt-1 font-extrabold">{format.dimensions.desktop}</dd>
                </div>
                <div>
                  <dt
                    className={`text-[0.65rem] font-extrabold tracking-[0.12em] uppercase ${
                      format.recommended
                        ? "text-white/45"
                        : "text-muted-foreground"
                    }`}
                  >
                    Mobile
                  </dt>
                  <dd className="mt-1 font-extrabold">{format.dimensions.mobile}</dd>
                </div>
              </dl>

              {format.benefits.length > 0 ? (
                <ul
                  className={`mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold sm:text-sm ${
                    format.recommended
                      ? "text-white/80"
                      : "text-muted-foreground"
                  }`}
                >
                  {format.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2">
                      <span className="size-1.5 bg-brand-orange" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              ) : null}

              <AdDemoButton
                slot={format.demoTarget}
                className={`mt-7 inline-flex min-h-11 items-center border px-4 py-2 text-xs font-extrabold transition-colors ${
                  format.recommended
                    ? "border-brand-orange text-brand-orange hover:bg-white/10"
                    : "border-brand-navy text-brand-navy hover:bg-surface-muted"
                }`}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
