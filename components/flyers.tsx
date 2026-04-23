"use client"

import { motion } from "framer-motion"
import { ImageIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { EASE_OUT, viewportOnce } from "@/lib/motion-variants"

import Image from "next/image"

type FlyerBadge = "NUEVO" | "EN CURSO" | "FINALIZADO"

type FlyerData = {
  badge: FlyerBadge
  src: string
  alt: string
  title: string
  description: string
}

const flyers: FlyerData[] = [
  {
    badge: "NUEVO",
    src: "/gallery/curso-adultos.jpeg",
    alt: "Curso de Computación para Adultos",
    title: "Computación para Adultos",
    description: "Curso diseñado para adultos que quieren aprender desde lo básico",
  },
  {
    badge: "EN CURSO",
    src: "/gallery/curso-niños-en-curso.jpeg",
    alt: "Curso de Computación para Niños en curso",
    title: "Computación para Niños",
    description: "Curso para niños de 8 a 12 años aprendiendo tecnología",
  },
  {
    badge: "FINALIZADO",
    src: "/gallery/curso-niños-finalizado.jpeg",
    alt: "Curso de Computación para Niños finalizado",
    title: "Niños Graduates",
    description: "Nuestros pequeños graduados del curso de computación",
  },
]

export function Flyers() {
  return (
    <section id="novedades" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-heading text-sm font-bold tracking-wide text-brand-orange uppercase">
            Cursos Vigentes y Próximos
          </p>
          <h2 className="mt-3 text-3xl text-brand-navy text-balance sm:text-4xl">
            Novedades y Cursos Activos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Aquí encontrarás los flyers de los cursos que están por iniciar o ya en marcha.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 hide-scrollbar sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
        >
          {flyers.map((flyer, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 32 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.55, ease: EASE_OUT },
                },
              }}
              className="min-w-[80%] snap-center sm:min-w-[60%] md:min-w-0"
            >
              <FlyerCard flyer={flyer} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function FlyerCard({ flyer }: { flyer: FlyerData }) {
  const isNew = flyer.badge === "NUEVO"
  return (
    <article className="relative flex aspect-[3/4] w-full flex-col items-center justify-center overflow-hidden rounded-2xl border-2 border-dashed border-brand-orange/50 bg-brand-surface shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <motion.span
        animate={isNew ? { scale: [1, 1.08, 1] } : undefined}
        transition={
          isNew
            ? { repeat: Infinity, duration: 2, ease: "easeInOut" }
            : undefined
        }
        className={cn(
          "absolute top-4 left-4 z-10 rounded-full px-3 py-1 text-xs font-bold text-white shadow-md",
          isNew ? "bg-brand-orange" : "bg-brand-navy",
        )}
      >
        {flyer.badge}
      </motion.span>

      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <Image
          src={flyer.src}
          alt={flyer.alt}
          fill
          className="object-cover"
        />
      </div>

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4 pt-12">
        <p className="text-center text-sm font-bold text-white">
          {flyer.title}
        </p>
        <p className="mt-1 text-center text-xs text-white/80">
          {flyer.description}
        </p>
      </div>
    </article>
  )
}
