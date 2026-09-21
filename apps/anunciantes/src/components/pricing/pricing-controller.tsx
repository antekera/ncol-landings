"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import type { PlanMonths } from "@/data/advertising";
import { getPlanMonths, getPlanParam } from "@/lib/pricing";
import { PricingView } from "./pricing-view";

export function PricingController() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedMonths = getPlanMonths(searchParams.get("plan"));

  const selectPeriod = (months: PlanMonths) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("plan", getPlanParam(months));
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <PricingView months={selectedMonths} onPeriodChange={selectPeriod} />
  );
}
