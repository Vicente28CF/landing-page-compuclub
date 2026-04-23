import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "¿Necesitan computadora en casa?",
    a: "No. Trabajan en nuestros equipos durante la clase. Si tienen una en casa, pueden usar Google Classroom para repasar.",
  },
  {
    q: "¿Qué pasa si mi hijo falta a una clase?",
    a: "Subimos el material a Google Classroom y coordinamos con el instructor para que no se quede atrás.",
  },
  {
    q: "¿Cuánto cuesta y cómo se paga?",
    a: "$300 por semana (3 clases). Se paga cada lunes en efectivo o transferencia.",
  },
  {
    q: "¿Puedo inscribirme a mitad del curso?",
    a: "Sí. Evaluamos el nivel y lo integramos al grupo ideal.",
  },
  {
    q: "¿Las clases son presenciales?",
    a: "Sí, 100% presenciales. Usamos Google Classroom para material y tareas.",
  },
  {
    q: "¿Qué Incluye el curso de adultos?",
    a: "Celular, WhatsApp, videollamadas, apps bancarias, redes sociales y cómo evitar fraudes.",
  },
]

export function Faq() {
  return (
    <section id="faq" className="bg-brand-surface py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="font-heading text-sm font-bold tracking-wide text-brand-orange uppercase">
              FAQ
            </p>
            <h2 className="mt-3 text-3xl text-brand-navy text-balance sm:text-4xl">
              Preguntas frecuentes
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Todo lo que necesitas saber antes de inscribirte
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Accordion
            type="single"
            collapsible
            className="mt-10 w-full rounded-2xl border border-border bg-card px-2 shadow-sm sm:px-4"
          >
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="text-left font-heading text-base font-bold text-brand-navy hover:no-underline [&>svg]:text-brand-orange sm:text-lg">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  )
}
