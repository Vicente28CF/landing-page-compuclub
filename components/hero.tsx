"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Keyboard, Laptop, Mouse, Sparkles } from "lucide-react"
import { EASE_OUT, fadeUp } from "@/lib/motion-variants"

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-navy text-white">
      {/* Decorative gradient & pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,theme(colors.brand-navy-600/60),transparent_60%),radial-gradient(circle_at_bottom_right,theme(colors.brand-orange/25),transparent_55%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]"
      />

      {/* Floating icons */}
      <FloatingIcons />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-4 pt-10 pb-16 text-center sm:px-6 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-28">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-2 shadow-lg ring-1 ring-white/20"
          >
            <Image
              src="/logo.png"
              alt="CompuClub logo"
              width={180}
              height={48}
              priority
              className="h-10 w-auto sm:h-12"
            />
          </Link>
        </motion.div>

        {/* Schedule badge with subtle pulse */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{
            opacity: 1,
            y: 0,
            scale: [1, 1.03, 1],
          }}
          transition={{
            opacity: { duration: 0.5, delay: 0.15, ease: EASE_OUT },
            y: { duration: 0.5, delay: 0.15, ease: EASE_OUT },
            scale: {
              repeat: Infinity,
              repeatType: "mirror",
              duration: 2.5,
              ease: "easeInOut",
              delay: 1.2,
            },
          }}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur"
        >
          <Sparkles className="h-4 w-4 text-brand-orange" aria-hidden="true" />
          <span>Clases Lun · Mié · Vie</span>
          <span className="text-white/40">|</span>
          <span className="font-semibold">$300 / semana</span>
        </motion.div>

        {/* Headline — word by word */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
          className="mt-6 max-w-3xl font-heading text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl"
        >
          {[
            { word: "Aprende", orange: false },
            { word: "computación", orange: true },
            { word: "y", orange: false },
            { word: "transforma", orange: false },
            { word: "tu", orange: false },
            { word: "futuro", orange: false },
          ].map(({ word, orange }, i) => (
            <span
              key={`${word}-${i}`}
              className="inline-block overflow-hidden align-baseline"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 18 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: EASE_OUT },
                  },
                }}
                className={`inline-block ${orange ? "text-brand-orange" : ""}`}
              >
                {word}
                {i < 5 ? "\u00A0" : ""}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5, ease: EASE_OUT }}
          className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 text-pretty sm:text-lg"
        >
          Cursos para niños y adultos con enfoque práctico y académico. Grupos pequeños, clases 100%
          prácticas y atención personalizada.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } },
          }}
          className="mt-8 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center"
        >
          <motion.div variants={fadeUp}>
            <Link
              href="#cursos"
              className="inline-flex w-full items-center justify-center rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/25 transition-all hover:scale-[1.03] hover:bg-brand-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:text-base"
            >
              Ver cursos
            </Link>
          </motion.div>
          <motion.div variants={fadeUp}>
            {/* TODO: Replace 521XXXXXXXXXX with the real WhatsApp number */}
            <Link
              href="https://wa.me/521XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center rounded-full border border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-white hover:text-brand-navy sm:w-auto sm:text-base"
            >
              Contáctanos por WhatsApp
            </Link>
          </motion.div>
        </motion.div>

        {/* Trust line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.9, ease: EASE_OUT }}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-1.5 text-xs text-white/75 sm:text-sm"
        >
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="text-brand-orange">
              ✓
            </span>
            Primera clase de prueba disponible
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="text-brand-orange">
              ✓
            </span>
            Grupos pequeños
          </span>
          <span className="inline-flex items-center gap-1.5">
            <span aria-hidden="true" className="text-brand-orange">
              ✓
            </span>
            Satisfacción garantizada
          </span>
        </motion.p>
      </div>

      {/* Wave divider */}
      <div aria-hidden="true" className="relative">
        <svg
          className="block h-10 w-full text-background sm:h-14"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            d="M0,48 C240,96 480,0 720,24 C960,48 1200,96 1440,48 L1440,80 L0,80 Z"
          />
        </svg>
      </div>
    </section>
  )
}

function FloatingIcon({
  children,
  className,
  duration,
  delay = 0,
}: {
  children: React.ReactNode
  className: string
  duration: number
  delay?: number
}) {
  return (
    <motion.div
      aria-hidden="true"
      className={className}
      initial={{ y: 0 }}
      animate={{ y: [0, -12, 0] }}
      transition={{
        repeat: Infinity,
        duration,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

function FloatingIcons() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <FloatingIcon
        className="absolute top-[12%] left-[6%]"
        duration={4}
        delay={0}
      >
        <Laptop
          className="h-10 w-10 text-white/15 sm:h-14 sm:w-14"
          strokeWidth={1.5}
        />
      </FloatingIcon>
      <FloatingIcon
        className="absolute top-[22%] right-[8%]"
        duration={3.4}
        delay={0.5}
      >
        <Mouse
          className="h-8 w-8 text-brand-orange/50 sm:h-12 sm:w-12"
          strokeWidth={1.5}
        />
      </FloatingIcon>
      {/* Keyboard hidden on mobile (keep max 2 icons on small screens) */}
      <FloatingIcon
        className="absolute bottom-[18%] left-[10%] hidden sm:block"
        duration={3.8}
        delay={1}
      >
        <Keyboard
          className="h-9 w-9 text-white/15 sm:h-12 sm:w-12"
          strokeWidth={1.5}
        />
      </FloatingIcon>
      <FloatingIcon
        className="absolute top-[55%] right-[14%] hidden sm:block"
        duration={3}
        delay={1.5}
      >
        <Sparkles
          className="h-6 w-6 text-white/20 sm:h-8 sm:w-8"
          strokeWidth={1.5}
        />
      </FloatingIcon>
    </div>
  )
}
