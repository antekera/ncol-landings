const CURRENT_YEAR = new Date().getFullYear();

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-navy/10 bg-surface py-5 text-center text-[0.6rem] font-bold tracking-[0.03em] text-muted-foreground sm:text-xs">
      <p className="whitespace-nowrap px-3">
        Noticiascol © 2012–{CURRENT_YEAR} ·{" "}
        <a
          href="https://www.noticiascol.com/terminos-y-condiciones/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-blue underline decoration-brand-orange underline-offset-3"
        >
          Términos y condiciones
        </a>{" "}
        ·{" "}
        <a
          href="https://www.noticiascol.com/privacidad/"
          target="_blank"
          rel="noreferrer"
          className="text-brand-blue underline decoration-brand-orange underline-offset-3"
        >
          Privacidad
        </a>
      </p>
    </footer>
  );
}
