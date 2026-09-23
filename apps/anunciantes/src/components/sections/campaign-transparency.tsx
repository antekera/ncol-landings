import { SectionHeading } from "@/components/ui/section-heading";
import { TRANSPARENCY_FEATURES } from "@/data/transparency";

function ReportPreview() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#142947] p-5 shadow-[0_28px_80px_-38px_rgba(0,0,0,0.9)] sm:p-7"
      aria-label="Representación de un informe de campaña con vistas, clics y período"
      role="img"
    >
      <div className="pointer-events-none absolute inset-0 opacity-20 editorial-grid" />
      <div className="relative">
        <div className="flex items-start justify-between gap-4 border-b border-white/15 pb-5">
          <div>
            <p className="text-[0.62rem] font-extrabold tracking-[0.16em] text-brand-orange uppercase">
              Sistema propio Noticiascol
            </p>
            <p className="mt-2 text-lg font-extrabold text-white">Informe de campaña</p>
          </div>
          <span className="rounded-full border border-brand-orange/60 bg-brand-orange/10 px-3 py-1 text-[0.58rem] font-extrabold tracking-[0.1em] text-brand-orange uppercase">
            Datos reales
          </span>
        </div>

        <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
          {[
            ["Vistas", "registradas"],
            ["Clics", "registrados"],
            ["CTR", "porcentaje de clics"],
          ].map(([label, detail]) => (
            <div key={label} className="rounded-xl border border-white/10 bg-white/5 p-3 sm:p-4">
              <p className="text-[0.58rem] font-extrabold tracking-[0.1em] text-white/50 uppercase">
                {label}
              </p>
              <div className="mt-4 h-2 w-4/5 rounded-full bg-brand-orange" />
              <p className="mt-2 text-[0.62rem] font-bold text-white/65">{detail}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-brand-navy/75 p-4">
          <div className="flex items-center justify-between gap-4 text-[0.62rem] font-extrabold tracking-[0.1em] text-white/55 uppercase">
            <span>Actividad del banner</span>
            <span>Reporte verificable</span>
          </div>
          <div className="mt-5 flex h-20 items-end gap-2 sm:h-28 sm:gap-3" aria-hidden="true">
            {[36, 55, 42, 72, 60, 88, 76, 96, 82, 100].map((height, index) => (
              <span
                key={height}
                className={`w-full rounded-t-sm ${index > 6 ? "bg-brand-orange" : "bg-brand-blue"}`}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function CampaignTransparency() {
  return (
    <section
      id="transparencia"
      aria-labelledby="transparencia-title"
      className="bg-brand-navy py-20 text-white sm:py-24"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20 lg:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="Transparencia de campaña"
            title="Vistas y clics que puedes comprobar."
            titleId="transparencia-title"
            description="Noticiascol cuenta con un sistema propio para registrar la actividad de los banners, lo que representa una ventaja frente a los reportes opacos que suelen acompañar a los medios tradicionales."
            inverted
          />

          <div className="mt-9 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {TRANSPARENCY_FEATURES.map((feature) => (
              <div key={feature.title} className="rounded-xl border border-white/15 bg-white/5 p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-xl font-extrabold text-brand-orange">
                    {feature.title}
                  </h3>
                  <span className="grid size-5 shrink-0 place-items-center rounded-full bg-brand-orange text-brand-navy" aria-label="Incluido">
                    <svg aria-hidden="true" className="size-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path d="m5 12 4 4L19 6" />
                    </svg>
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-white/65">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div data-reveal>
          <ReportPreview />
          <p className="mt-4 text-center text-xs leading-5 text-white/45">
            Representación del reporte de campaña. No muestra cifras de una campaña real.
          </p>
        </div>
      </div>
    </section>
  );
}
