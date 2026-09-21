import { Suspense } from "react";
import { PricingController } from "@/components/pricing/pricing-controller";
import { PricingView } from "@/components/pricing/pricing-view";

export function Pricing() {
  return (
    <Suspense fallback={<PricingView months={3} />}>
      <PricingController />
    </Suspense>
  );
}
