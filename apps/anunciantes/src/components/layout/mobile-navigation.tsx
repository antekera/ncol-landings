"use client";

import { useEffect, useState } from "react";
import { PRIMARY_NAVIGATION } from "@/data/navigation";
import { EDITORIAL_CONTACT_URL } from "@/lib/contact";

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setIsOpen((current) => !current)}
        className="grid size-11 place-items-center border border-border bg-surface text-brand-navy transition-colors hover:border-brand-blue hover:text-brand-blue"
      >
        <span className="sr-only">{isOpen ? "Cerrar" : "Menú"}</span>
        <span aria-hidden="true" className="relative block h-4 w-5">
          <span
            className={`absolute left-0 h-0.5 w-5 bg-current transition-transform ${
              isOpen ? "top-[7px] rotate-45" : "top-1"
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-5 bg-current transition-transform ${
              isOpen ? "top-[7px] -rotate-45" : "top-3"
            }`}
          />
        </span>
      </button>

      <div
        id="mobile-navigation"
        hidden={!isOpen}
        className="absolute inset-x-0 top-full border-y border-border bg-surface px-5 py-5 shadow-[0_20px_50px_-30px_rgba(16,32,57,0.55)]"
      >
        <nav aria-label="Navegación móvil">
          <ul className="divide-y divide-border">
            {PRIMARY_NAVIGATION.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-12 items-center justify-between py-3 text-base font-bold text-brand-navy hover:text-brand-blue"
                >
                  {item.label}
                  <span aria-hidden="true" className="text-brand-orange">
                    ↘
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <a
          href={EDITORIAL_CONTACT_URL}
            onClick={() => setIsOpen(false)}
            className="mt-5 flex min-h-12 items-center justify-center bg-brand-orange px-5 py-3 text-sm font-extrabold text-brand-navy hover:bg-brand-navy hover:text-white"
          >
            Solicitar campaña
          </a>
        </nav>
      </div>
    </div>
  );
}
