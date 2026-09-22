import { EDITORIAL_CONTACT_URL } from "@/lib/contact";

function AdPlacementShowcase() {
  return (
    <div
      className="relative mx-auto min-h-[25rem] w-full max-w-[39rem] sm:min-h-[32rem]"
      aria-label="Representación de anuncios dentro de una noticia de Noticiascol"
      role="img"
    >
      <div className="absolute top-2 right-1 left-0 overflow-hidden rounded-2xl border border-brand-navy/15 bg-surface shadow-[0_28px_70px_-36px_rgba(16,32,57,0.6)] sm:right-12">
        <div className="flex h-8 items-center gap-1.5 border-b border-border bg-surface-muted px-3 sm:h-10">
          <span className="size-2 bg-brand-orange" />
          <span className="size-2 bg-brand-blue" />
          <span className="size-2 bg-brand-gray" />
          <span className="ml-2 h-2 w-24 bg-brand-navy/10 sm:w-36" />
        </div>

        <div className="p-3 sm:p-5">
          <div className="flex items-center justify-between border-b border-brand-navy pb-2">
            <span className="text-[0.65rem] font-black tracking-[-0.04em] text-brand-blue sm:text-sm">
              noticias<span className="text-brand-orange">col</span>
              <span className="text-brand-gray">.com</span>
            </span>
            <div className="flex gap-2" aria-hidden="true">
              <span className="h-1.5 w-8 bg-brand-navy/15" />
              <span className="h-1.5 w-5 bg-brand-navy/15" />
            </div>
          </div>

          <div className="mt-3 grid min-h-14 place-items-center border border-dashed border-brand-orange bg-[#fff8f0] px-3 text-center sm:min-h-20">
            <div>
              <span className="block text-[0.55rem] font-extrabold tracking-[0.18em] text-brand-orange uppercase sm:text-[0.65rem]">
                Espacio publicitario
              </span>
              <span className="mt-1 block text-[0.55rem] font-bold text-brand-navy/65 sm:text-xs">
                HEADER · 970 × 250
              </span>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-[1fr_5.2rem] gap-3 sm:grid-cols-[1fr_8rem] sm:gap-5">
            <div>
              <span className="text-[0.55rem] font-extrabold tracking-[0.16em] text-brand-blue uppercase sm:text-[0.65rem]">
                Actualidad
              </span>
              <div className="mt-2 h-3 w-[92%] bg-brand-navy sm:h-4" />
              <div className="mt-1.5 h-3 w-[68%] bg-brand-navy sm:h-4" />
              <div className="mt-3 aspect-[16/7] bg-surface-muted editorial-grid" />
              <div className="mt-3 space-y-1.5" aria-hidden="true">
                <div className="h-1.5 w-full bg-brand-navy/15" />
                <div className="h-1.5 w-[94%] bg-brand-navy/15" />
                <div className="h-1.5 w-[78%] bg-brand-navy/15" />
              </div>
            </div>
            <div className="grid min-h-40 place-items-center border border-dashed border-brand-blue bg-[#f3f9fd] p-2 text-center sm:min-h-56">
              <div>
                <span className="block text-[0.5rem] font-extrabold tracking-[0.12em] text-brand-blue uppercase sm:text-[0.6rem]">
                  Sidebar
                </span>
                <span className="mt-1 block text-[0.5rem] text-brand-navy/60 sm:text-[0.6rem]">
                  300 × 600
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-[42%] min-w-[8.25rem] max-w-[11.5rem] overflow-hidden rounded-[1.35rem] border-[0.35rem] border-brand-navy bg-surface shadow-[0_24px_52px_-22px_rgba(16,32,57,0.75)] sm:border-[0.45rem]">
        <div className="mx-auto h-1.5 w-8 bg-brand-navy sm:h-2 sm:w-10" />
        <div className="border-t border-brand-navy/10 p-2 sm:p-3">
          <div className="flex items-center justify-between border-b border-border pb-1.5">
            <span className="text-[0.44rem] font-black text-brand-blue sm:text-[0.58rem]">
              noticias<span className="text-brand-orange">col</span>
            </span>
            <span className="h-1 w-4 bg-brand-navy/20" />
          </div>
          <div className="mt-2 h-1.5 w-10 bg-brand-blue" />
          <div className="mt-1.5 h-2 w-full bg-brand-navy" />
          <div className="mt-1 h-2 w-4/5 bg-brand-navy" />
          <div className="mt-2 aspect-[4/3] bg-surface-muted editorial-grid" />
          <div className="mt-2 space-y-1" aria-hidden="true">
            <div className="h-1 w-full bg-brand-navy/15" />
            <div className="h-1 w-5/6 bg-brand-navy/15" />
          </div>
        </div>
        <div className="grid min-h-12 place-items-center border-t-2 border-brand-orange bg-[#fff3e6] p-2 text-center sm:min-h-16">
          <span className="text-[0.48rem] leading-tight font-extrabold tracking-[0.1em] text-brand-orange uppercase sm:text-[0.6rem]">
            Sticky Bottom
            <small className="mt-1 block font-bold tracking-normal text-brand-navy/60">
              320 × 100
            </small>
          </span>
        </div>
      </div>

      <div className="absolute bottom-9 left-0 border-l-4 border-brand-orange bg-brand-navy px-3 py-2 text-[0.58rem] font-extrabold tracking-[0.14em] text-white uppercase shadow-lg sm:bottom-16 sm:px-4 sm:py-3 sm:text-xs">
        Diseñado para ser visto
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-surface">
      <div className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[42%] border-l border-brand-blue/10 editorial-grid lg:block" />
      <div className="mx-auto grid min-h-[calc(100dvh-4rem)] max-w-7xl items-center gap-12 px-5 py-14 sm:px-6 sm:py-20 lg:min-h-[calc(100dvh-4.5rem)] lg:grid-cols-[0.88fr_1.12fr] lg:gap-10 lg:px-8 lg:py-16">
        <div className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-extrabold tracking-[0.18em] text-brand-blue uppercase sm:text-sm" data-reveal data-hero-step="2">
            <span className="h-px w-8 bg-brand-orange" aria-hidden="true" />
            Publicidad digital en Noticiascol
          </p>
          <h1 className="mt-6 max-w-[12ch] font-serif text-[2.65rem] leading-[1.02] font-extrabold tracking-[-0.045em] text-brand-navy min-[375px]:text-5xl sm:text-6xl lg:text-[4.4rem]" data-reveal data-hero-step="1">
            Tu marca, donde está la noticia.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8" data-reveal data-hero-step="3">
            Conecta tu negocio con la audiencia de Noticiascol mediante espacios
            publicitarios visibles, contenido patrocinado y campañas pensadas
            primero para mobile.
          </p>

          <div className="mt-8 flex flex-col gap-3 min-[390px]:flex-row" data-reveal data-hero-step="4">
            <a
              href="#formatos"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-brand-blue px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-brand-navy"
            >
              Ver formatos
              <span
                aria-hidden="true"
                className="text-brand-orange transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href={EDITORIAL_CONTACT_URL}
              className="inline-flex min-h-12 items-center justify-center rounded-xl border border-brand-navy px-6 py-3 text-sm font-extrabold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
            >
              Solicitar campaña
            </a>
          </div>

          <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 border-t border-border pt-5 text-xs font-bold text-muted-foreground sm:text-sm" data-reveal data-hero-step="5">
            <li className="flex items-center gap-2">
              <span className="size-1.5 bg-brand-orange" aria-hidden="true" />
              Audiencia local
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 bg-brand-orange" aria-hidden="true" />
              Web + redes
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 bg-brand-orange" aria-hidden="true" />
              Informes reales de vistas y clics
            </li>
          </ul>
        </div>

        <div className="relative -mx-1 sm:mx-0" data-reveal data-hero-step="6">
          <span className="absolute -top-7 right-0 hidden text-xs font-extrabold tracking-[0.2em] text-brand-gray uppercase [writing-mode:vertical-rl] sm:-right-4 sm:block">
            Espacios reales
          </span>
          <AdPlacementShowcase />
        </div>
      </div>
    </section>
  );
}
