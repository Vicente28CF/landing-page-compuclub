"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function About() {
  return (
    <section
      id="quienes-somos"
      className="bg-brand-surface py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
          {/* Contenedor de imagen — círculo decorativo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Círculo decorativo de fondo — el naranja */}
            <div className="absolute h-72 w-72 rounded-full bg-orange-500/20 -z-10 scale-110" />

            {/* Imagen recortada en círculo */}
            <div className="relative h-64 w-64 overflow-hidden rounded-full ring-4 ring-orange-500/30 shadow-xl">
              <Image
                src="/gallery/instructores.jpeg"
                alt="Gabriela López y Vicente Cayetano"
                fill
                className="object-cover object-top"
              />
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
              Nosotros
            </h2>
            <p className="mt-2 text-base font-semibold text-brand-orange">
              Gabriela López & Vicente Cayetano
            </p>
            <p className="mt-2 text-sm font-semibold text-brand-orange">
              Fundadores e Instructores, CompuClub
            </p>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {"Soy Gaby, Arquitecta, y yo Vicente, Ingeniero en Computación. Vivimos en Zacoalco de Torres, Jalisco — y es aquí donde también nació nuestro proyecto juntos: CompuClub. Creemos que la tecnología no debería tener fronteras. Que cada persona en nuestra comunidad merece aprender, crear y conectar con el mundo digital, sin importar su edad ni experiencia previa. CompuClub es nuestra forma de devolver algo a nuestra comunidad."}
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
