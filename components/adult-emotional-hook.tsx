"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Laptop, Smartphone, UserRound } from "lucide-react"
import { EASE_OUT, viewportOnce } from "@/lib/motion-variants"
import { useMediaQuery } from "@/hooks/use-media-query"

export function AdultEmotionalHook() {
  const isDesktop = useMediaQuery("(min-width: 769px)")

  const leftInitial = isDesktop
    ? { opacity: 0, x: -40 }
    : { opacity: 0, y: 32 }
  const rightInitial = isDesktop
    ? { opacity: 0, x: 40 }
    : { opacity: 0, y: 32 }
  const reached = { opacity: 1, x: 0, y: 0 }

  return (
    <section
      aria-label="Curso para adultos"
      className="relative overflow-hidden bg-[linear-gradient(to_right,var(--brand-navy)_0%,#0f2347_100%)] py-16 text-white sm:py-20 md:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-12">
        {/* Text */}
        <motion.div
          initial={leftInitial}
          whileInView={reached}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: EASE_OUT }}
          className="text-center md:text-left"
        >
          <h2 className="font-heading text-2xl leading-tight text-white italic text-balance sm:text-3xl md:text-4xl lg:text-5xl">
            ¿Te ha pasado que tu hijo o nieto tiene que ayudarte con el teléfono?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 text-pretty sm:text-lg">
            Eso se acaba aquí. En CompuClub te enseñamos a dominar tu celular y computadora con
            paciencia, sin tecnicismos y a tu ritmo.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 md:items-start">
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: "#ffffff",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.2, ease: EASE_OUT }}
              className="rounded-full"
            >
              <Link
                href="#cursos"
                className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3.5 font-heading text-base font-bold text-brand-navy shadow-lg transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-lg"
              >
                Ver curso para adultos
              </Link>
            </motion.div>
            <p className="text-sm font-medium text-brand-orange">
              <span aria-hidden="true">⭐ </span>
              El curso más solicitado de nuestra comunidad
            </p>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={rightInitial}
          whileInView={reached}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
          className="relative flex items-center justify-center"
          aria-hidden="true"
        >
          <div className="relative flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
            {/* Orange glow */}
            <div className="absolute inset-0 rounded-full bg-brand-orange/20 blur-3xl" />

            {/* Icon composition */}
            <div className="relative flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
              <UserRound
                className="h-24 w-24 text-white sm:h-28 sm:w-28"
                strokeWidth={1.5}
              />
              <Smartphone
                className="absolute top-6 right-8 h-14 w-14 text-brand-orange drop-shadow-[0_0_14px_rgba(232,76,30,0.6)] sm:h-16 sm:w-16"
                strokeWidth={1.75}
              />
              <Laptop
                className="absolute bottom-8 left-6 h-16 w-16 text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] sm:h-20 sm:w-20"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
