import { SectionHeading } from "@/components/ui/section-heading";
import { FAQ_ITEMS } from "@/data/faq";

export function FrequentlyAskedQuestions() {
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
            description="Respuestas directas sobre tarifas, formatos y la experiencia de demostración."
            inverted
          />
        </div>

        <div className="border-t border-white/20">
          {FAQ_ITEMS.map((item, index) => (
            <details
              key={item.question}
              data-reveal
              className="group border-b border-white/20 py-1"
            >
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-4 text-left text-base font-extrabold text-white marker:content-none hover:text-brand-orange focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-brand-orange sm:text-lg">
                <span>
                  <span className="mr-3 font-serif text-brand-orange" aria-hidden="true">
                    0{index + 1}
                  </span>
                  {item.question}
                </span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-2xl leading-none text-brand-orange transition-transform group-open:rotate-45 motion-reduce:transition-none"
                >
                  +
                </span>
              </summary>
              <div className="faq-answer-grid">
                <div>
                  <p className="max-w-2xl pb-6 text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                    {item.answer}
                  </p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
