"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { FAQ_ITEMS } from "@/data/faq";
import {
  DEFAULT_WHATSAPP_PHONE,
  EDITORIAL_CONTACT_URL,
  getWhatsAppAdvisorUrl,
} from "@/lib/contact";

export function FrequentlyAskedQuestions() {
  const [openItems, setOpenItems] = useState<Set<number>>(() => new Set());
  const whatsappUrl = getWhatsAppAdvisorUrl(
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE ?? DEFAULT_WHATSAPP_PHONE,
  );

  function toggleItem(index: number) {
    setOpenItems((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <section
      id="preguntas"
      aria-labelledby="preguntas-title"
      className="bg-brand-navy py-20 text-white sm:py-24"
    >
      <div className="grid gap-12 px-5 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-8">
        <div data-reveal>
          <SectionHeading
            eyebrow="Preguntas frecuentes"
            title="Todo claro antes de planificar tu campaña."
            titleId="preguntas-title"
            inverted
          />
        </div>

        <div className="border-t border-white/20">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openItems.has(index);
            const answerId = `faq-answer-${index}`;
            const questionId = `faq-question-${index}`;

            return (
              <div
                key={item.question}
                data-reveal
                className="group border-b border-white/20 py-1"
              >
                <button
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleItem(index)}
                  className="flex min-h-16 w-full items-center justify-between gap-6 py-4 text-left text-base font-extrabold text-white hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-orange sm:text-lg"
                >
                <span>
                  <span className="mr-3 font-serif text-brand-orange" aria-hidden="true">
                    0{index + 1}
                  </span>
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className={`shrink-0 text-2xl leading-none text-brand-orange transition-transform duration-300 motion-reduce:transition-none ${isOpen ? "rotate-45" : "rotate-0"}`}
                >
                  +
                </span>
                </button>
                <div
                  id={answerId}
                  role="region"
                  aria-labelledby={questionId}
                  aria-hidden={!isOpen}
                  inert={!isOpen}
                  className="faq-answer-grid"
                  data-open={isOpen}
                >
                <div>
                  <p className="max-w-2xl pb-6 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                    {item.answer}
                  </p>
                </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>

      <div data-reveal className="mt-14 flex flex-col items-center px-5 text-center sm:mt-16">
        <p className="text-lg font-extrabold text-white sm:text-xl">
          ¿Tienes más preguntas?
        </p>
        <a
          href={EDITORIAL_CONTACT_URL}
          data-ga-event="contact_click"
          data-ga-param-location="faq"
          data-ga-param-channel="website"
          className="mt-5 hidden min-h-11 items-center justify-center rounded-xl bg-brand-orange px-5 text-sm font-extrabold text-white transition-colors hover:bg-brand-navy lg:inline-flex"
        >
          Contacta un asesor
        </a>
        {whatsappUrl && (
          <a
            href={whatsappUrl}
            data-ga-event="contact_click"
            data-ga-param-location="faq"
            data-ga-param-channel="whatsapp"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 text-sm font-extrabold text-white transition-colors hover:bg-[#1ebe5b] lg:hidden"
          >
            <WhatsAppIcon className="size-4" />
            Contacta un asesor
          </a>
        )}
      </div>
    </section>
  );
}
