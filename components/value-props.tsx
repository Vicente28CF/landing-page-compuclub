"use client"

import { motion } from "framer-motion"
import { GraduationCap, Lightbulb, Users, type LucideIcon } from "lucide-react"
import {
  EASE_OUT,
  fadeUp,
  viewportOnce,
} from "@/lib/motion-variants"
import { useMediaQuery } from "@/hooks/use-media-query"

type Item = {
  icon: LucideIcon
  title: string
  description: string
}

const items: Item[] = [
  {
    icon: GraduationCap,
    title: "Mejora tu rendimiento escolar",
    description:
      "Aprenderás herramientas digitales que te ayudarán en todas tus materias: buscar información, hacer presentaciones, organizar tareas y mucho más.",
  },
  {
    icon: Lightbulb,
    title: "Aprende haciendo",
    description:
      "Clases 100% prácticas donde cada alumno trabaja en su propio equipo con proyectos reales desde el día uno.",
  },
  {
    icon: Users,
    title: "Para todas las edades",
    description:
      "Desde niños de 9 años hasta adultos. Grupos pequeños para atención personalizada.",
  },
]

export function ValueProps() {
  const isDesktop = useMediaQuery("(min-width: 769px)")

  return (
    <section id="por-que" className="bg-background py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-heading text-sm font-bold tracking-wide text-brand-orange uppercase">
            ¿Por qué CompuClub?
          </p>
          <h2 className="mt-3 text-3xl text-brand-navy text-balance sm:text-4xl">
            Una formación que impulsa a niños y adultos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Combinamos enseñanza académica y habilidades digitales reales para que aproveches la
            tecnología en tu vida diaria y en la escuela.
          </p>
        </motion.div>

        <motion.div
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8"
        >
          {items.map((item) => (
            <ValueCard key={item.title} item={item} isDesktop={isDesktop} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ValueCard({ item, isDesktop }: { item: Item; isDesktop: boolean }) {
  const Icon = item.icon
  return (
    <motion.article
      variants={fadeUp}
      whileHover={
        isDesktop
          ? { y: -6, boxShadow: "0 20px 40px rgba(27,58,107,0.15)" }
          : undefined
      }
      transition={{ duration: 0.25, ease: EASE_OUT }}
      className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-7"
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-1.5 origin-left bg-brand-orange"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewportOnce}
        transition={{ duration: 0.5, delay: 0.35, ease: EASE_OUT }}
      />
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange ring-1 ring-brand-orange/20 transition-colors group-hover:bg-brand-orange group-hover:text-white">
        <Icon className="h-6 w-6" strokeWidth={2} aria-hidden="true" />
      </div>
      <h3 className="mt-5 font-heading text-xl text-brand-navy sm:text-2xl">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
        {item.description}
      </p>
    </motion.article>
  )
}
