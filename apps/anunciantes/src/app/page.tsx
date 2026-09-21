import { NoticiascolLogo } from "@/components/brand/noticiascol-logo";

export default function Home() {
  return (
    <main className="flex min-h-dvh items-center justify-center px-5 py-16 sm:px-8">
      <div className="w-full max-w-xl border-t-4 border-brand-orange bg-surface px-6 py-10 shadow-[0_24px_80px_-48px_rgba(16,32,57,0.5)] sm:px-10">
        <NoticiascolLogo priority className="h-auto w-full max-w-80" />
        <div className="mt-8 border-l-2 border-brand-blue pl-5">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-blue uppercase">
            Landings · Anunciantes
          </p>
          <h1 className="mt-3 font-serif text-3xl leading-tight font-extrabold text-brand-navy sm:text-4xl">
            Base visual oficial preparada.
          </h1>
          <p className="mt-4 max-w-md text-sm leading-6 text-muted-foreground sm:text-base sm:leading-7">
            Logo, colores y tipografías de Noticiascol ya están disponibles para
            construir la experiencia comercial.
          </p>
        </div>
      </div>
    </main>
  );
}
