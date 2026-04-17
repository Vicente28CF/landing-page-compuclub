"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const photos = [
  {
    src: "/gallery/clase-videojuegos.jpeg",
    alt: "Alumno aprendiendo cómo se crean los videojuegos durante una clase con proyector",
    caption: "Clases de creación de videojuegos",
  },
  {
    src: "/gallery/clase-computacion.jpeg",
    alt: "Instructor enseñando el uso del explorador de archivos de Windows en el proyector",
    caption: "Computación práctica paso a paso",
  },
  {
    src: "/gallery/estudiantes-laptops.jpeg",
    alt: "Alumnas trabajando con sus laptops en un ambiente cómodo y acogedor",
    caption: "Ambiente tranquilo y personalizado",
  },
  {
    src: "/gallery/clase-grupal.jpeg",
    alt: "Grupo de estudiantes aprendiendo con laptops junto a su maestro",
    caption: "Grupos pequeños con atención individual",
  },
]

export function DayAtCompuClub() {
  return (
    <section
      id="un-dia"
      className="bg-background py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-bold tracking-wide text-brand-orange uppercase">
            Galería
          </p>
          <h2 className="mt-3 text-3xl text-brand-navy text-balance sm:text-4xl">
            Un día en CompuClub
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Así se vive una clase con nosotros
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {photos.map((photo, i) => (
            <motion.figure
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-2xl border border-border border-b-4 border-b-brand-orange bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 24vw, (min-width: 640px) 48vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <figcaption className="p-5 text-sm font-medium text-brand-navy sm:text-base">
                {photo.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
