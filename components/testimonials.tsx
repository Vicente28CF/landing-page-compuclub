"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { EASE_OUT, viewportOnce } from "@/lib/motion-variants"

type Testimonial = {
  quote: string
  name: string
  role: string
  initials: string
  avatarClass: string
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Decidí inscribirme en el curso de Excel para mejorar en mi trabajo y la experiencia superó mis expectativas. Los instructores explican paso a paso y tienen una paciencia increíble.",
    name: "Martha Guadalupe Ramírez",
    role: "Alumna, Curso Básico para Adultos",
    initials: "MR",
    avatarClass: "bg-brand-orange text-white",
  },
  {
    quote:
      "Lo que más me gusta de CompuClub es la seguridad y el profesionalismo. Sé que mis hijos están aprendiendo habilidades reales para su futuro en un lugar confiable.",
    name: "Carlos Mendoza Herrera",
    role: "Papá de alumno, Curso Básico Niños",
    initials: "CM",
    avatarClass: "bg-brand-navy text-white",
  },
  {
    quote:
      "Altamente recomendado para niños de todas las edades. El equipo de CompuClub sabe cómo mantener su interés y enseñarles tecnología de vanguardia.",
    name: "Sofía Torres Villanueva",
    role: "Mamá de alumno, Curso Intermedio",
    initials: "ST",
    avatarClass:
      "bg-[linear-gradient(135deg,var(--brand-orange)_0%,var(--brand-navy)_100%)] text-white",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonios"
      className="bg-background py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-heading text-sm font-bold tracking-wide text-brand-orange uppercase">
            Testimonios
          </p>
          <h2 className="mt-3 text-3xl text-brand-navy text-balance sm:text-4xl">
            Lo que dicen nuestros alumnos y papás
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Historias reales de familias CompuClub
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto px-4 pb-4 hide-scrollbar sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
        >
          {testimonials.map((t, i) => (
            <motion.article
              key={i}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: EASE_OUT },
                },
              }}
              className="relative flex min-w-[85%] snap-center flex-col rounded-2xl border border-border border-l-4 border-l-brand-orange bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl sm:min-w-[70%] sm:p-7 md:min-w-0"
            >
              <Quote
                className="h-8 w-8 text-brand-orange"
                strokeWidth={2}
                aria-hidden="true"
              />

              <p className="mt-4 flex-1 text-base leading-relaxed text-brand-navy italic">
                {"\u201C"}
                {t.quote}
                {"\u201D"}
              </p>

              <motion.div
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.07,
                      delayChildren: 0.3,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-5 flex items-center gap-1"
                aria-label="5 de 5 estrellas"
              >
                {Array.from({ length: 5 }).map((_, s) => (
                  <motion.span
                    key={s}
                    variants={{
                      hidden: { scale: 0, opacity: 0 },
                      visible: {
                        scale: 1,
                        opacity: 1,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 14,
                        },
                      },
                    }}
                    className="inline-flex"
                  >
                    <Star
                      className="h-4 w-4 text-brand-orange"
                      fill="currentColor"
                      aria-hidden="true"
                    />
                  </motion.span>
                ))}
              </motion.div>

              <div className="mt-5 flex items-center gap-3 border-t border-border pt-5">
                <div
                  className={`flex h-12 w-12 flex-none items-center justify-center rounded-full font-heading text-sm font-bold ring-2 ring-brand-orange/30 ${t.avatarClass}`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <p className="truncate font-heading text-base font-bold text-brand-navy">
                    {t.name}
                  </p>
                  <p className="truncate text-xs text-muted-foreground sm:text-sm">
                    {t.role}
                  </p>
                </div>
              </div>
              <span className="sr-only">Testimonio {i + 1}</span>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
