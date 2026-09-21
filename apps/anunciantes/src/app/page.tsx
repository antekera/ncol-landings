import { AudienceStats } from "@/components/sections/audience-stats";
import { Benefits } from "@/components/sections/benefits";
import { AdFormats } from "@/components/sections/ad-formats";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-[100] bg-brand-navy px-4 py-3 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido">
        <Hero />
        <AudienceStats />
        <Benefits />
        <AdFormats />
      </main>
    </>
  );
}
