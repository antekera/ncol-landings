"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PlanMonths } from "@/data/advertising";
import { getPlanMonths, getPlanParam } from "@/lib/pricing";
import { PricingView } from "./pricing-view";
import { PricingLeadGate } from "./pricing-lead-gate";

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
    const params = new URLSearchParams(searchParams.toString());
    params.set("plan", getPlanParam(months));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  if (!isUnlocked && !isPricingPreview) {
    return <PricingLeadGate months={selectedMonths} onUnlocked={() => setIsUnlocked(true)} />;
  }

  return <PricingView months={selectedMonths} onPeriodChange={selectPeriod} />;
}
