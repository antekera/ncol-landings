"use client";

import { useState, type FormEvent } from "react";
import type { PlanMonths } from "@/data/advertising";

type PricingLeadGateProps = {
  months: PlanMonths;
  onUnlocked: () => void;
};

export function PricingLeadGate({ months, onUnlocked }: PricingLeadGateProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitLead = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const response = await fetch("/api/commercial-leads", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        company: formData.get("company"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        website: formData.get("website"),
        planDuration: months,
      }),
    }).catch(() => null);

    setIsSubmitting(false);

    if (!response?.ok) {
      setError("No pudimos registrar tus datos. Inténtalo nuevamente.");
      return;
    }

    window.sessionStorage.setItem("ncol-advertisers-pricing-unlocked", "true");
    onUnlocked();
  };

  return (
    <div className="mt-10 max-w-2xl rounded-2xl border border-border bg-surface p-5 shadow-[0_22px_56px_-42px_rgba(16,32,57,0.7)] sm:mt-12 sm:p-8" data-reveal>
      <p className="text-xs font-extrabold tracking-[0.14em] text-brand-blue uppercase">
        Acceso a tarifas
      </p>
      <h2 className="mt-3 font-serif text-3xl font-extrabold tracking-[-0.035em] text-brand-navy sm:text-4xl">
        Cuéntanos de tu negocio para ver los precios.
      </h2>
      <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
        Déjanos tus datos de contacto y un asesor podrá orientarte según tu
        campaña. Al enviarlos se habilitarán las tarifas comerciales.
      </p>

      <form className="mt-7 grid gap-4 sm:grid-cols-2" onSubmit={submitLead}>
        <label className="grid gap-2 text-sm font-extrabold text-brand-navy">
          Nombre
          <input
            required
            name="name"
            autoComplete="name"
            className="min-h-12 rounded-xl border border-border bg-white px-3 text-base font-medium outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-brand-blue focus:ring-3 focus:ring-brand-blue/15"
            placeholder="Tu nombre"
          />
        </label>
        <label className="grid gap-2 text-sm font-extrabold text-brand-navy">
          Empresa
          <input
            required
            name="company"
            autoComplete="organization"
            className="min-h-12 rounded-xl border border-border bg-white px-3 text-base font-medium outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-brand-blue focus:ring-3 focus:ring-brand-blue/15"
            placeholder="Nombre de tu empresa"
          />
        </label>
        <label className="grid gap-2 text-sm font-extrabold text-brand-navy">
          Correo
          <input
            required
            type="email"
            name="email"
            autoComplete="email"
            className="min-h-12 rounded-xl border border-border bg-white px-3 text-base font-medium outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-brand-blue focus:ring-3 focus:ring-brand-blue/15"
            placeholder="correo@empresa.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-extrabold text-brand-navy">
          Teléfono o WhatsApp
          <input
            required
            type="tel"
            name="phone"
            autoComplete="tel"
            className="min-h-12 rounded-xl border border-border bg-white px-3 text-base font-medium outline-none transition-shadow placeholder:text-muted-foreground/70 focus:border-brand-blue focus:ring-3 focus:ring-brand-blue/15"
            placeholder="Tu número de contacto"
          />
        </label>
        <label className="sr-only" aria-hidden="true">
          Sitio web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-brand-orange px-5 text-sm font-extrabold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {isSubmitting ? "Enviando datos…" : "Ver precios"}
          </button>
          <p className="mt-3 text-xs leading-5 text-muted-foreground">
            Al enviar, autorizas que Noticiascol use estos datos para contactarte
            sobre publicidad.
          </p>
          {error ? (
            <p className="mt-3 text-sm font-bold text-red-700" role="alert">
              {error}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  );
}
