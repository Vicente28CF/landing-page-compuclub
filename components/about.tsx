"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, UserRound } from "lucide-react"

export function About() {
  return (
    <section
      id="quienes-somos"
      className="bg-brand-surface py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto md:mx-0"
          >
            <div className="relative">
              <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-full border-2 border-dashed border-orange-300 bg-orange-50 ring-4 ring-brand-orange ring-offset-4 ring-offset-brand-surface sm:h-56 sm:w-56 md:h-52 md:w-52 lg:h-60 lg:w-60">
                <div className="text-center">
                  <UserRound
                    className="mx-auto h-14 w-14 text-brand-orange/70"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="mt-1 px-4 text-xs font-medium text-brand-orange/90">
                    {"[FOTO DEL INSTRUCTOR]"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center md:text-left"
          >
            <h2 className="font-heading text-3xl font-extrabold text-brand-navy text-balance sm:text-4xl">
              [Tu nombre]
            </h2>
            <p className="mt-2 text-base font-semibold text-brand-orange">
              Fundador &amp; Instructor Principal, CompuClub
            </p>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {
                "[AGREGAR BIO — ejemplo: Soy [nombre], con X años de experiencia enseñando computación en Guadalajara. Fundé CompuClub porque creo que el acceso a la tecnología no debería ser un privilegio sino un derecho para toda nuestra comunidad.]"
              }
            </p>

            <p className="mt-8 text-sm text-brand-navy/60">
              Nuestra historia, misión y los valores que nos mueven
            </p>
            <div className="mt-3 flex justify-center md:justify-start">
              <Link
                href="/nosotros"
                className="group inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/25 transition-all duration-200 hover:scale-[1.03] hover:bg-brand-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:text-base"
              >
                Conoce más sobre nosotros
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
