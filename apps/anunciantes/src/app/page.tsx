import { AudienceStats } from "@/components/sections/audience-stats";
import { Benefits } from "@/components/sections/benefits";
import { AdFormats } from "@/components/sections/ad-formats";
import { Pricing } from "@/components/sections/pricing";
import { SiteHeader } from "@/components/layout/site-header";
import { Hero } from "@/components/sections/hero";
import { AdDemoProvider } from "@/components/demo/ad-demo";
import { MotionObserver } from "@/components/ui/motion-observer";
import { CampaignTransparency } from "@/components/sections/campaign-transparency";

export default function Home() {
  return (
    <>
      <a
        href="#contenido"
        className="sr-only z-[100] bg-brand-navy px-4 py-3 text-sm font-bold text-white focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
      >
        Saltar al contenido
      </a>
      <AdDemoProvider>
        <MotionObserver />
        <SiteHeader />
        <main id="contenido">
          <Hero />
          <AudienceStats />
          <Benefits />
          <CampaignTransparency />
          <AdFormats />
          <Pricing />
        </main>
      </AdDemoProvider>
    </>
  );
}
