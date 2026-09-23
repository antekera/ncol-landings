import type { Metadata } from "next";
import Link from "next/link";
import { NoticiascolLogo } from "@/components/brand/noticiascol-logo";

const REPORT_URL =
  "https://datastudio.google.com/embed/reporting/b0f574a8-8adc-419c-96fd-40fd31559bdd/page/xvQcF";

export const metadata: Metadata = {
  title: "Panel de visitas",
  description: "Consulta el panel de visitas de Noticiascol.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function VisitsPage() {
  return (
    <main className="flex min-h-[100dvh] flex-1 flex-col bg-[#f7f8fa]">
      <header className="relative z-10 flex min-h-14 shrink-0 items-center justify-between gap-3 border-b border-border bg-surface px-4 sm:px-6">
        <Link
          href="/"
          aria-label="Noticiascol para anunciantes, volver al inicio"
          className="flex min-w-0 items-center gap-3"
        >
          <NoticiascolLogo className="h-auto w-36 sm:w-40" />
          <span className="hidden border-l border-border pl-3 text-xs font-bold text-muted-foreground sm:block">
            Panel de visitas
          </span>
        </Link>

        <nav aria-label="Acciones del panel" className="flex shrink-0 items-center gap-2">
          <a
            href={REPORT_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-10 items-center rounded-full border border-border px-4 text-xs font-extrabold text-brand-navy transition-colors hover:border-brand-blue hover:text-brand-blue sm:inline-flex"
          >
            Abrir informe
          </a>
          <Link
            href="/"
            className="inline-flex min-h-10 items-center rounded-full bg-brand-orange px-4 text-xs font-extrabold text-white transition-colors hover:bg-brand-navy"
          >
            Volver al sitio
          </Link>
        </nav>
      </header>

      <section
        aria-label="Informe de visitas de Noticiascol"
        className="min-h-0 flex-1 bg-white"
      >
        <iframe
          title="Panel de visitas de Noticiascol en Looker Studio"
          src={REPORT_URL}
          className="block h-[calc(100dvh-3.5rem)] min-h-[24rem] w-full border-0 sm:min-h-[30rem]"
          loading="eager"
          allowFullScreen
          sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </section>
    </main>
  );
}
