"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { CalendarDays, MessageCircle, Star } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  EASE_OUT,
  fadeUp,
  viewportOnce,
} from "@/lib/motion-variants"

type Theme = "orange" | "navy" | "gradient"

type Course = {
  title: string
  audience: string
  theme: Theme
  highlight?: string
  mostPopular?: boolean
}

const courses: Course[] = [
  {
    title: "Computación Básica para Niños",
    audience: "9 – 12 años",
    theme: "orange",
  },
  {
    title: "Computación Intermedia para Niños",
    audience: "11 – 13 años",
    theme: "navy",
  },
  {
    title: "Computación Básica para Adultos",
    audience: "Adultos (todas las edades)",
    theme: "gradient",
    highlight: "⭐ Incluye: ¡Aprende a dominar tu celular sin pedirle ayuda a nadie!",
    mostPopular: true,
  },
]

function bannerClasses(theme: Theme) {
  switch (theme) {
    case "orange":
      return "bg-brand-orange"
    case "navy":
      return "bg-brand-navy"
    case "gradient":
      return "bg-[linear-gradient(135deg,var(--brand-orange)_0%,var(--brand-navy)_100%)]"
  }
}

function badgeClasses(theme: Theme) {
  switch (theme) {
    case "orange":
      return "bg-brand-orange/10 text-brand-orange ring-1 ring-brand-orange/20"
    case "navy":
      return "bg-brand-navy/10 text-brand-navy ring-1 ring-brand-navy/20"
    case "gradient":
      return "bg-brand-navy/10 text-brand-navy ring-1 ring-brand-navy/20"
  }
}

export function Courses() {
  const scrollerRef = useRef<HTMLDivElement | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const scroller = scrollerRef.current
    if (!scroller) return

    const handleScroll = () => {
      const width = scroller.clientWidth
      if (width === 0) return
      // find closest card by snap point
      const index = Math.round(scroller.scrollLeft / (scroller.scrollWidth / courses.length))
      setActiveIndex(Math.min(Math.max(index, 0), courses.length - 1))
    }

    scroller.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => scroller.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="cursos" className="bg-brand-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-heading text-sm font-bold tracking-wide text-brand-orange uppercase">
            Nuestros Cursos
          </p>
          <h2 className="mt-3 text-3xl text-brand-navy text-balance sm:text-4xl">
            Encuentra el curso ideal para ti
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Todos nuestros cursos son 100% prácticos, con horarios flexibles y grupos reducidos.
          </p>
        </motion.div>

        {/* Mobile: horizontal scroll. Desktop: grid */}
        <div className="mt-12">
          <motion.div
            ref={scrollerRef}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 hide-scrollbar sm:-mx-6 sm:px-6 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0"
          >
            {courses.map((course) => (
              <motion.div
                key={course.title}
                variants={fadeUp}
                className="min-w-[85%] snap-center sm:min-w-[70%] md:min-w-0"
              >
                <CourseCard course={course} />
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator dots (mobile only) */}
          <div
            role="tablist"
            aria-label="Cursos"
            className="mt-4 flex items-center justify-center gap-2 md:hidden"
          >
            {courses.map((c, i) => (
              <span
                key={c.title}
                aria-hidden="true"
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === activeIndex
                    ? "w-6 bg-brand-orange"
                    : "w-2 bg-brand-navy/20",
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CourseCard({ course }: { course: Course }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {course.mostPopular && (
        <motion.span
          animate={{ rotate: [-2, 2, -2] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
            ease: "easeInOut",
          }}
          className="absolute top-3 right-3 z-10 rounded-full bg-white px-2.5 py-1 text-[10px] font-extrabold tracking-wide text-brand-orange uppercase shadow-md ring-1 ring-brand-orange/30 sm:text-xs"
        >
          ⭐ Más solicitado
        </motion.span>
      )}

      {/* Color-coded top banner */}
      <div className={cn("h-24 w-full", bannerClasses(course.theme))}>
        <div className="flex h-full items-end justify-between gap-2 px-5 pb-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-brand-navy">
            <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
            Lun · Mié · Vie
          </span>
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-brand-navy">
            Solo $300 / semana
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-xl leading-tight text-brand-navy sm:text-2xl text-pretty">
            {course.title}
          </h3>
        </div>

        <span
          className={cn(
            "mt-3 inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold",
            badgeClasses(course.theme),
          )}
        >
          {course.audience}
        </span>

        {course.highlight && (
          <div className="mt-4 flex items-start gap-2 rounded-xl bg-brand-orange/10 p-3 ring-1 ring-brand-orange/20">
            <Star
              className="mt-0.5 h-4 w-4 flex-none text-brand-orange"
              aria-hidden="true"
              fill="currentColor"
            />
            <p className="text-sm font-semibold text-brand-navy">{course.highlight}</p>
          </div>
        )}

        <div className="mt-4 space-y-2 rounded-xl bg-brand-surface/80 p-3">
          <p className="text-sm font-semibold text-brand-navy">
            Solo $300 / semana{" "}
            <span className="font-normal text-muted-foreground">
              — menos de $15 por clase
            </span>
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground sm:text-sm">
            <CalendarDays className="h-3.5 w-3.5 text-brand-orange" aria-hidden="true" />
            Solo 3 horas a la semana · Lun · Mié · Vie
          </p>
        </div>

        {/* Placeholders */}
        <div className="mt-5 space-y-3">
          <div className="rounded-xl border-2 border-dashed border-border bg-brand-surface/60 p-4 text-sm text-muted-foreground">
            {"[DESCRIPCIÓN DEL CURSO — agregar contenido]"}
          </div>
          <div className="rounded-xl border-2 border-dashed border-border bg-brand-surface/60 p-4 text-sm text-muted-foreground">
            {"[HORARIO ESPECÍFICO — agregar]"}
          </div>
        </div>

        <div className="mt-6 flex-1" />

        {/* TODO: Replace 521XXXXXXXXXX with the real WhatsApp number */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.2, ease: EASE_OUT }}
        >
          <Link
            href={`https://wa.me/521XXXXXXXXXX?text=${encodeURIComponent(
              `Hola, me interesa el curso: ${course.title}`,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            Me interesa este curso
          </Link>
        </motion.div>
      </div>
    </article>
  )
}
