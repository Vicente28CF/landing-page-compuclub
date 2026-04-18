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
    a: "No. Todos los alumnos trabajan en los equipos del centro durante sus clases. Aun así, si cuentan con una computadora en casa pueden aprovechar Google Classroom para repasar el material y entregar tareas desde donde estén.",
  },
  {
    q: "¿Qué pasa si mi hijo se atrasa o falta a clases?",
    a: "Trabajamos con grupos pequeños para poder dar atención personalizada. Si un alumno falta, subimos el material a Google Classroom y coordinamos con el instructor para que pueda retomar el contenido en la siguiente clase sin quedarse atrás.",
  },
  {
    q: "¿Qué pasa si mi hijo no va un día, se pierde el dinero de esa clase?",
    a: "Las clases se pagan por semana todos los lunes ($300 por semana, que incluye 3 clases). Si por alguna razón tu hijo no puede asistir un día, solo necesitas avisarnos con anticipación por WhatsApp y buscamos cómo reponer esa clase o ajustar el pago. Si no se avisa antes, esa clase se considera tomada y no se puede recuperar el costo.",
  },
  {
    q: "¿Puedo inscribirme a mitad del curso?",
    a: "Sí. Aceptamos inscripciones en cualquier momento. Evaluamos el nivel del alumno al entrar y lo integramos al grupo más adecuado para que avance a su ritmo y sin frustrarse.",
  },
  {
    q: "¿Cuánto cuesta y cómo se paga?",
    a: "El costo es de $300 por semana (solo $100 por clase, 3 clases a la semana). El pago se realiza todos los lunes antes de empezar la semana, en efectivo en el centro o por transferencia.",
  },
  {
    q: "¿Las clases son presenciales o en línea?",
    a: "Las clases son 100% presenciales en nuestro centro. Usamos Google Classroom como apoyo para compartir material, subir tareas y dar seguimiento, pero la enseñanza y la práctica se hacen siempre en persona con el instructor.",
  },
  {
    q: "¿Qué incluye exactamente el curso de adultos con celular?",
    a: "Además del contenido de computación básica (Windows, Word, correo y documentos), dedicamos módulos especiales a dominar el smartphone: WhatsApp avanzado, videollamadas por Zoom y Meet, redes sociales, apps bancarias con seguridad, Google Maps, uso de Inteligencia Artificial como asistente personal y cómo detectar fraudes y estafas digitales antes de caer en ellas.",
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
