"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { fadeUp, viewportOnce } from "@/lib/motion-variants"

type Metric = {
  prefix?: string
  target: number
  suffix?: string
  label: string
  format?: (n: number) => string
  duration?: number
}

const metrics: Metric[] = [
  {
    target: 80,
    suffix: "+",
    label: "Alumnos formados",
    duration: 1200,
  },
  {
    prefix: "⭐ ",
    target: 5.0,
    label: "Calificación en Google",
    format: (n) => n.toFixed(1),
    duration: 1200,
  },
  {
    target: 3,
    label: "Años en la comunidad",
    duration: 800,
  },
  {
    target: 100,
    suffix: "%",
    label: "Padres satisfechos",
    duration: 1200,
  },
]

function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}

function CountUp({ metric }: { metric: Metric }) {
  const { ref, inView } = useInView<HTMLSpanElement>()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return

    const reduceMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (reduceMotion) {
      setValue(metric.target)
      return
    }

    const duration = metric.duration ?? 1200
    const start = performance.now()
    let raf = 0

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(metric.target * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, metric.target, metric.duration])

  const display = metric.format
    ? metric.format(value)
    : Math.round(value).toString()

  return (
    <span ref={ref} className="tabular-nums">
      {metric.prefix}
      {display}
      {metric.suffix}
    </span>
  )
}

export function SocialProofBar() {
  return (
    <section
      aria-label="Indicadores de CompuClub"
      className="border-y border-brand-navy/10 bg-brand-surface py-10 sm:py-12"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.ul
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 gap-6 text-center sm:gap-8 md:grid-cols-4"
        >
          {metrics.map((metric) => (
            <motion.li
              key={metric.label}
              variants={fadeUp}
              className="flex flex-col items-center"
            >
              <p className="font-heading text-3xl font-extrabold text-brand-orange sm:text-4xl lg:text-5xl">
                <CountUp metric={metric} />
              </p>
              <p className="mt-1.5 text-sm font-medium text-brand-navy sm:text-base">
                {metric.label}
              </p>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}

