"use client"

import Link from "next/link"
import { motion, type Variants } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Heart,
  Shield,
  Target,
  Telescope,
  TrendingUp,
  Users,
} from "lucide-react"

import { SiteFooter } from "@/components/site-footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnimatedWords } from "@/components/animated-words"
import { useMediaQuery } from "@/hooks/use-media-query"
import { EASE_OUT, viewportOnce } from "@/lib/motion-variants"

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
}

const values = [
  {
    icon: Heart,
    title: "Enseñamos con paciencia",
    desc: "Cada alumno aprende a su ritmo, sin presión y sin miedo a equivocarse",
  },
  {
    icon: Shield,
    title: "Somos confiables",
    desc: "Padres nos eligen porque saben que sus hijos están en buenas manos",
  },
  {
    icon: Users,
    title: "Comunidad primero",
    desc: "Nacimos aquí, conocemos a nuestras familias y sus necesidades reales",
  },
  {
    icon: TrendingUp,
    title: "Resultados reales",
    desc: "No prometemos lo que no podemos cumplir — nuestros alumnos lo comprueban",
  },
]

const parentChecks = [
  "Mejores calificaciones en todas las materias",
  "Más confianza y autonomía en la escuela",
  "Habilidades que ningún maestro le puede quitar",
]

export default function NosotrosPage() {
  const isDesktop = useMediaQuery("(min-width: 769px)")

  const missionInitial = isDesktop
    ? { opacity: 0, x: -30 }
    : { opacity: 0, y: 24 }
  const visionInitial = isDesktop
    ? { opacity: 0, x: 30 }
    : { opacity: 0, y: 24 }

  return (
    <main className="min-h-dvh bg-background">
      {/* Back button */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-brand-navy transition-colors duration-200 hover:text-brand-orange"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Volver al inicio
        </Link>
      </div>

      {/* Page Hero */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:28px_28px]"
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans text-xs font-bold tracking-[0.18em] text-brand-orange uppercase sm:text-sm"
          >
            Nuestra historia
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-4 font-heading text-3xl font-extrabold text-white text-balance sm:text-4xl md:text-5xl"
          >
            Más que un curso.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-2 font-heading text-3xl font-extrabold text-brand-orange text-balance sm:text-4xl md:text-5xl"
          >
            Una misión para nuestra comunidad.
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Conoce quiénes somos, en qué creemos y por qué hacemos lo que hacemos.
          </motion.p>
        </motion.div>
      </section>

      {/* Slogan Hero Banner — word-by-word animation */}
      <section className="relative overflow-hidden bg-background">
        <div
          aria-hidden="true"
          className="absolute inset-y-0 left-0 w-2 bg-gradient-to-b from-brand-orange to-brand-navy"
        />
        <div className="mx-auto flex min-h-[40vh] max-w-4xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
          <h2 className="font-heading text-3xl font-extrabold text-brand-navy text-balance sm:text-5xl md:text-6xl">
            <AnimatedWords
              as="span"
              text="No enseñamos computación."
              animateOnMount={false}
              stagger={0.1}
              className="block"
            />
          </h2>
          <p className="mt-2 font-heading text-3xl font-extrabold text-brand-orange text-balance sm:text-5xl md:text-6xl">
            <AnimatedWords
              as="span"
              text="Preparamos a tu hijo para el mundo que viene."
              animateOnMount={false}
              stagger={0.08}
              delay={0.5}
              className="block"
            />
          </p>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 0.6, delay: 1.4, ease: EASE_OUT }}
            aria-hidden="true"
            className="mx-auto my-6 h-1 w-24 origin-left bg-brand-orange"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.55, delay: 1.6, ease: EASE_OUT }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-brand-navy/70"
          >
            Cada clase en CompuClub es una herramienta más que tu hijo lleva a la
            escuela, al trabajo y a la vida.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision cards */}
      <section className="bg-background py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-center font-sans text-xs font-bold tracking-[0.18em] text-brand-orange uppercase sm:text-sm">
            Lo que nos mueve
          </p>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Mission */}
            <motion.article
              initial={missionInitial}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, ease: EASE_OUT }}
              className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/5"
            >
              <motion.div
                aria-hidden="true"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={viewportOnce}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: 0.35,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white"
              >
                <Target className="h-6 w-6" />
              </motion.div>
              <p className="mt-5 font-sans text-xs font-bold tracking-[0.18em] text-brand-orange uppercase">
                Nuestra misión
              </p>
              <h3 className="mt-2 font-heading text-xl font-bold text-brand-navy text-balance">
                Cerrar la brecha digital, una familia a la vez
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-navy/80">
                En CompuClub creemos que dominar la tecnología no debería depender
                de cuánto dinero tienes o dónde vives. Nuestra misión es darte
                acceso a una educación digital de calidad, práctica y humana —
                para que tú y tu familia nunca se queden atrás.
              </p>
            </motion.article>

            {/* Vision */}
            <motion.article
              initial={visionInitial}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: 0.15, ease: EASE_OUT }}
              className="rounded-2xl bg-card p-8 shadow-md ring-1 ring-black/5"
            >
              <motion.div
                aria-hidden="true"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={viewportOnce}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: 0.5,
                }}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-white"
              >
                <Telescope className="h-6 w-6" />
              </motion.div>
              <p className="mt-5 font-sans text-xs font-bold tracking-[0.18em] text-brand-orange uppercase">
                Nuestra visión
              </p>
              <h3 className="mt-2 font-heading text-xl font-bold text-brand-navy text-balance">
                Ser el centro de confianza donde cada familia aprende tecnología
                con seguridad y orgullo
              </h3>
              <p className="mt-3 text-base leading-relaxed text-brand-navy/80">
                Imaginamos una comunidad donde ningún niño tenga miedo de abrir
                una computadora, ningún adulto sienta vergüenza de no saber usar
                su celular, y ninguna familia se pierda una oportunidad por falta
                de habilidades digitales.
              </p>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Values strip */}
      <section className="bg-brand-navy py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <p className="text-center font-sans text-xs font-bold tracking-[0.18em] text-brand-orange uppercase sm:text-sm">
            Lo que nos define
          </p>

          <motion.ul
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4"
          >
            {values.map((value) => (
              <motion.li
                key={value.title}
                variants={{
                  hidden: { opacity: 0, y: 24, rotate: -15 },
                  show: {
                    opacity: 1,
                    y: 0,
                    rotate: 0,
                    transition: { duration: 0.55, ease: EASE_OUT },
                  },
                }}
                className="flex flex-col items-center text-center"
              >
                <value.icon
                  className="h-8 w-8 text-brand-orange"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <h3 className="mt-4 font-heading text-base font-bold text-white text-balance sm:text-lg">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {value.desc}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Emotional parent hook */}
      <section className="bg-[#FFF5F2] py-16 md:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl px-4 text-center sm:px-6"
        >
          <motion.p
            variants={fadeUp}
            className="font-heading text-2xl font-extrabold text-brand-navy italic text-balance md:text-4xl"
          >
            {"\u201CComo papá o mamá, tu mayor miedo es que tu hijo se quede atrás.\u201D"}
          </motion.p>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-lg leading-relaxed text-brand-navy/75"
          >
            En CompuClub tu mayor miedo se convierte en su mayor ventaja.
          </motion.p>

          <motion.ul
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
            }}
            className="mt-8 flex flex-col items-start justify-center gap-4 text-left md:flex-row md:items-center md:text-center"
          >
            {parentChecks.map((check) => (
              <motion.li
                key={check}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.5, ease: EASE_OUT },
                  },
                }}
                className="flex items-start gap-2.5 text-brand-navy md:flex-col md:items-center md:text-center"
              >
                <motion.span
                  variants={{
                    hidden: { scale: 0 },
                    show: {
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 360,
                        damping: 16,
                      },
                    },
                  }}
                  className="inline-flex flex-none"
                >
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 text-brand-orange md:mt-0"
                    aria-hidden="true"
                  />
                </motion.span>
                <span className="font-sans text-sm font-medium leading-relaxed sm:text-base">
                  {check}
                </span>
              </motion.li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} className="mt-10 flex justify-center">
            <Link
              href="/#cursos"
              className="group inline-flex w-fit items-center gap-2 rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/25 transition-all duration-200 hover:scale-[1.03] hover:shadow-xl hover:shadow-brand-orange/30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:text-base"
            >
              Ver nuestros cursos
              <ArrowRight
                className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Bottom CTA strip */}
      <section className="bg-brand-orange py-12">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <h2 className="font-heading text-2xl font-bold text-white text-balance">
            ¿Listo para dar el primer paso?
          </h2>
          <p className="mt-2 text-base leading-relaxed text-white/85">
            Escríbenos hoy y te orientamos sin compromiso
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-navy shadow-md transition-all duration-200 hover:scale-[1.03] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
            >
              Ir al inicio
            </Link>
            <Link
              href="https://wa.me/523321916387?text=Hola%20CompuClub%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20cursos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand-navy px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:scale-[1.03] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy sm:text-base"
            >
              Contáctanos por WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
      <WhatsAppButton />
    </main>
  )
}
