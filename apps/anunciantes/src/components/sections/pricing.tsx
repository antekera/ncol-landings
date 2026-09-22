import { Suspense } from "react";
import { PricingController } from "@/components/pricing/pricing-controller";

function PricingGateFallback() {
  return (
    <section id="tarifas" aria-busy="true" className="bg-background py-20 sm:py-24">
      <div className="mx-auto min-h-72 max-w-7xl px-5 sm:px-6 lg:px-8" />
    </section>
  );
}

export function Pricing() {
  return (
    <Suspense fallback={<PricingGateFallback />}>
      <PricingController />
    </Suspense>
  );
}
