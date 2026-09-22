import { Suspense } from "react";
import { PricingController } from "@/components/pricing/pricing-controller";
import { SectionHeading } from "@/components/ui/section-heading";

function PricingGateFallback() {
  return (
    <section id="tarifas" aria-labelledby="tarifas-title" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Tarifas"
          title="Conoce las tarifas para tu campaña."
          titleId="tarifas-title"
          description="Comparte tus datos de contacto para acceder a los precios comerciales."
        />
        <div className="mt-10 max-w-2xl rounded-2xl border border-border bg-surface p-5 shadow-[0_22px_56px_-42px_rgba(16,32,57,0.7)] sm:mt-12 sm:p-8">
          <p className="text-sm font-bold text-muted-foreground">
            Cargando formulario de acceso…
          </p>
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <Suspense fallback={<PricingGateFallback />}>
      <section id="tarifas" aria-labelledby="tarifas-title" className="bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Tarifas"
            title="Conoce las tarifas para tu campaña."
            titleId="tarifas-title"
            description="Comparte tus datos de contacto para acceder a los precios comerciales."
          />
          <PricingController />
        </div>
      </section>
    </Suspense>
  );
}
