import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Reveal } from "@/components/reveal"

const faqs = [
  {
    q: "¿Los alumnos necesitan tener computadora en casa?",
    a: "No. Todos los alumnos trabajan en los equipos del centro durante sus clases. No necesitas ningún equipo propio para inscribirte.",
  },
  {
    q: "¿Qué pasa si mi hijo se atrasa o falta a clases?",
    a: "Trabajamos con grupos pequeños para poder dar atención personalizada. Si un alumno falta, coordinamos para que pueda retomar el contenido sin quedarse atrás.",
  },
  {
    q: "¿Puedo inscribirme a mitad del curso?",
    a: "[AGREGAR RESPUESTA — ejemplo: Sí, aceptamos inscripciones en cualquier momento del ciclo, evaluamos el nivel del alumno y lo integramos al grupo más adecuado.]",
  },
  {
    q: "¿Hay descuento por inscribir a varios hermanos?",
    a: "[AGREGAR RESPUESTA — ejemplo: Sí, ofrecemos X% de descuento a partir del segundo hermano inscrito. Pregúntanos por WhatsApp.]",
  },
  {
    q: "¿Las clases son presenciales o en línea?",
    a: "[AGREGAR RESPUESTA — confirmar modalidad: presencial / en línea / híbrido.]",
  },
  {
    q: "¿Qué incluye exactamente el curso de adultos con celular?",
    a: "Además del contenido de computación básica, dedicamos módulos especiales a dominar el smartphone: WhatsApp, videollamadas, redes sociales, apps bancarias, búsqueda segura en internet y cómo evitar fraudes digitales.",
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
