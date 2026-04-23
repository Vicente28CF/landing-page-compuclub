"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CalendarCheck, MessageCircle, Rocket, type LucideIcon } from "lucide-react"
import { EASE_OUT, viewportOnce } from "@/lib/motion-variants"

type Step = {
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    icon: MessageCircle,
    title: "Escríbenos por WhatsApp",
    description:
      "Cuéntanos qué curso te interesa y resolvemos todas tus dudas sin compromiso",
  },
  {
    icon: CalendarCheck,
    title: "Elige tu curso y horario",
    description:
      "Te asignamos al grupo ideal según tu edad y nivel. Grupos pequeños, atención personalizada",
  },
  {
    icon: Rocket,
    title: "¡Ven a tu primera clase!",
    description:
      "Si en la primera semana no te convence, te devolvemos el dinero.",
  },
]

export function EnrollmentSteps() {
  return (
    <section
      id="inscripcion"
      className="relative overflow-hidden bg-brand-navy py-16 text-white sm:py-20 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-heading text-sm font-bold tracking-wide text-brand-orange uppercase">
            Inscripción
          </p>
          <h2 className="mt-3 text-3xl text-white text-balance sm:text-4xl lg:text-5xl">
            Empieza en 3 simples pasos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/75 sm:text-lg">
            El proceso más fácil de tu vida
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative mt-14"
        >
          {/* Connector line — desktop horizontal (animates width via scaleX) */}
          <motion.div
            aria-hidden="true"
            className="absolute top-8 left-[12%] right-[12%] hidden h-0.5 origin-left bg-white/15 md:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
          />
          {/* Connector line — mobile vertical */}
          <motion.div
            aria-hidden="true"
            className="absolute left-8 top-8 bottom-8 w-0.5 origin-top bg-white/15 md:hidden"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
          />

          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="relative flex items-start gap-5 md:flex-col md:items-center md:text-center"
              >
                {/* Circle with spring scale-in */}
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={viewportOnce}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 18,
                    delay: i * 0.2,
                  }}
                  className="relative z-10 flex h-16 w-16 flex-none items-center justify-center rounded-full bg-brand-orange font-heading text-2xl font-extrabold text-white shadow-lg shadow-brand-orange/25 ring-4 ring-brand-navy"
                >
                  {i + 1}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{
                    duration: 0.55,
                    ease: EASE_OUT,
                    delay: i * 0.2 + 0.15,
                  }}
                  className="flex-1 md:flex-none"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-brand-orange ring-1 ring-white/10 md:mx-auto md:mt-4">
                    <step.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                  </div>
                  <h3 className="mt-3 font-heading text-xl text-white md:mt-4">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
                    {step.description}
                  </p>
                </motion.div>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* CTA with spring + pulsing glow */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.15,
          }}
          className="mt-14 flex justify-center"
        >
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0px rgba(232,76,30,0)",
                "0 0 24px rgba(232,76,30,0.45)",
                "0 0 0px rgba(232,76,30,0)",
              ],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full"
          >
            <Link
              href="https://wa.me/523321916387?text=Hola%20CompuClub%2C%20quiero%20inscribirme.%20%C2%BFMe%20pueden%20orientar%20sobre%20el%20proceso%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-8 py-4 font-heading text-base font-bold text-white shadow-lg shadow-brand-orange/30 transition-colors hover:bg-brand-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
            >
              Quiero inscribirme ahora
              <span aria-hidden="true">🚀</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
