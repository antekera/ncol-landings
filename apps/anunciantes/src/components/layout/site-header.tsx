import { NoticiascolLogo } from "@/components/brand/noticiascol-logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import {
  DEFAULT_WHATSAPP_PHONE,
  EDITORIAL_CONTACT_URL,
  getWhatsAppAdvisorUrl,
} from "@/lib/contact";

export function SiteHeader() {
  const whatsappUrl = getWhatsAppAdvisorUrl(
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? DEFAULT_WHATSAPP_PHONE,
  )!;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a
          href="#inicio"
          aria-label="Noticiascol para Anunciantes, ir al inicio"
          className="flex min-w-0 items-center gap-3"
        >
          <NoticiascolLogo className="h-auto w-[9.25rem] sm:w-[12rem]" />
          <span className="hidden border-l border-border pl-3 text-[0.68rem] leading-none font-extrabold tracking-[0.16em] text-brand-navy uppercase min-[430px]:block">
            Para
            <br />
            anunciantes
          </span>
        </a>

        <a
          href={EDITORIAL_CONTACT_URL}
          className="ml-auto hidden min-h-11 shrink-0 items-center justify-center rounded-xl bg-brand-orange px-5 text-sm font-extrabold text-white transition-colors hover:bg-brand-navy lg:inline-flex"
        >
          Contáctanos
        </a>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="ml-auto inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-3 text-xs font-extrabold text-white transition-colors hover:bg-[#1ebe5b] sm:px-4 sm:text-sm lg:hidden"
        >
          <WhatsAppIcon className="size-4" />
          Contactar asesor
        </a>
      </div>
    </header>
  );
}
