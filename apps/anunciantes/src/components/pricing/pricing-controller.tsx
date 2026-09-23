"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PlanMonths } from "@/data/advertising";
import { getPlanMonths, getPlanParam } from "@/lib/pricing";
import { PricingView } from "./pricing-view";
import { PricingLeadGate } from "./pricing-lead-gate";
import { SectionHeading } from "@/components/ui/section-heading";
import { trackAnalyticsEvent } from "@/lib/analytics";

export function PricingController() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedMonths = getPlanMonths(searchParams.get("plan"));
  const isPricingPreview = searchParams.get("prices") === "visible";
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setIsUnlocked(
        window.sessionStorage.getItem("ncol-advertisers-pricing-unlocked") === "true",
      );
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const selectPeriod = (months: PlanMonths) => {
    trackAnalyticsEvent("pricing_period_change", {
      plan_months: months,
      plan_duration_days: months * 30,
    });
    const params = new URLSearchParams(searchParams.toString());
    params.set("plan", getPlanParam(months));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (!isUnlocked && !isPricingPreview) {
    return (
      <section id="tarifas" aria-labelledby="tarifas-title" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tarifas"
            title="Conoce las tarifas para tu campaña."
            titleId="tarifas-title"
            description="Comparte tus datos de contacto para acceder a los precios comerciales."
          />
          <PricingLeadGate months={selectedMonths} onUnlocked={() => setIsUnlocked(true)} />
        </div>
      </section>
    );
  }

  return <PricingView months={selectedMonths} onPeriodChange={selectPeriod} />;
}
