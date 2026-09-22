import { NoticiascolLogo } from "@/components/brand/noticiascol-logo";
import { MobileNavigation } from "@/components/layout/mobile-navigation";
import { PRIMARY_NAVIGATION } from "@/data/navigation";
import { CAMPAIGN_EMAIL_URL } from "@/lib/contact";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a
          href="#inicio"
          aria-label="Noticiascol para Anunciantes, ir al inicio"
          className="flex min-w-0 items-center gap-3"
        >
          <NoticiascolLogo className="h-auto w-[8.75rem] sm:w-[11.5rem]" />
          <span className="hidden border-l border-border pl-3 text-[0.68rem] leading-none font-extrabold tracking-[0.16em] text-brand-navy uppercase min-[430px]:block">
            Para
            <br />
            anunciantes
          </span>
        </a>

        <nav aria-label="Navegación principal" className="ml-auto hidden lg:block">
          <ul className="flex items-center gap-7">
            {PRIMARY_NAVIGATION.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-bold text-brand-navy transition-colors hover:text-brand-blue"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={CAMPAIGN_EMAIL_URL}
          className="ml-auto inline-flex min-h-11 shrink-0 items-center justify-center bg-brand-orange px-3 text-xs font-extrabold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white sm:px-5 sm:text-sm lg:ml-3"
        >
          <span className="sm:hidden">Solicitar</span>
          <span className="hidden sm:inline">Solicitar campaña</span>
        </a>

        <MobileNavigation />
      </div>
    </header>
  );
}
