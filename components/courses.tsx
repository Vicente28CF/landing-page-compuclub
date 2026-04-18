"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import {
  BookOpen,
  CalendarDays,
  CheckCircle2,
  GraduationCap,
  Heart,
  MessageCircle,
  Star,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/components/ui/use-mobile"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { EASE_OUT, fadeUp, viewportOnce } from "@/lib/motion-variants"

type Theme = "orange" | "navy" | "gradient"

type ProgramModule = {
  title: string
  description: string
  badge?: string
}

type Course = {
  title: string
  audience: string
  theme: Theme
  description: string
  schedule: string
  scheduleUpcoming?: boolean
  highlight?: string
  mostPopular?: boolean
  waLink: string
  program: {
    title: string
    headerBadge?: string
    headerBadgeTheme?: "orange" | "navy"
    scheduleNote?: string
    modules: ProgramModule[]
    takeawaysTitle?: string
    takeaways?: string[]
    instructor?: {
      main: string
      auxiliary?: string
    }
    specialNote?: string
  }
}

const courses: Course[] = [
  {
    title: "Computación Básica para Niños",
    audience: "9 – 12 años",
    theme: "orange",
    description:
      "Los niños aprenden a usar la computadora con confianza: teclado, mouse, Word, presentaciones e internet seguro. Habilidades prácticas que aplican desde el primer día en sus tareas escolares.",
    schedule: "Lunes, Miércoles y Viernes · 5:00 PM a 6:00 PM",
    highlight: "⭐ Incluye: ¡Aprende a usar Google Classroom para subir sus tareas como todo un profesional!",
    waLink:
      "https://wa.me/523321916387?text=Hola%20CompuClub%2C%20me%20interesa%20el%20curso%20de%20*Computaci%C3%B3n%20B%C3%A1sica%20para%20Ni%C3%B1os*%20(9-12%20a%C3%B1os).%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20horarios%20y%20disponibilidad%3F",
    program: {
      title: "Programa — Computación Básica para Niños",
      headerBadge: "6 semanas · 18 clases · Lunes, Miércoles y Viernes",
      modules: [
        {
          title: "Semana 1 — Explorando el mundo digital",
          description:
            "Tu hijo aprenderá a conocer la computadora por dentro y por fuera: sus partes, cómo funciona Windows, cómo organizar archivos y personalizar su equipo. Todo con dinámicas divertidas para que pierda el miedo desde el primer día.",
        },
        {
          title: "Semana 2 — Escritura y documentos",
          description:
            "Aprenderá a escribir rápido y sin errores usando el teclado correctamente. Creará documentos en Word con formato profesional, tablas, imágenes y hasta su propio perfil digital.",
        },
        {
          title: "Semana 3 — Herramientas modernas y productividad",
          description:
            "Usará Inteligencia Artificial (ChatGPT) para aprender mejor, aprenderá a buscar información confiable en internet y a crear formularios y encuestas digitales.",
        },
        {
          title: "Semana 4 — Presentaciones y hojas de cálculo",
          description:
            "Aprenderá a hacer presentaciones en PowerPoint que impresionen a sus maestros, y dará sus primeros pasos en Excel con tablas, fórmulas y gráficos.",
        },
        {
          title: "Semana 5 — Seguridad, diseño y organización",
          description:
            "Sabrá cómo protegerse en internet, creará carteles con Canva y organizará sus trabajos en Google Drive y Notion.",
        },
        {
          title: "Semana 6 — Proyecto final 🎓",
          description:
            "Cada alumno presenta su proyecto en una Feria Tecnológica y recibe su constancia oficial de acreditación.",
        },
      ],
      takeawaysTitle: "¿Qué se lleva tu hijo al terminar?",
      takeaways: [
        "Dominio de Word, PowerPoint y Excel básico",
        "Habilidades para buscar información confiable",
        "Conocimiento de Inteligencia Artificial aplicada al estudio",
        "Seguridad y responsabilidad digital",
        "Un proyecto final completo",
        "Constancia oficial de acreditación",
      ],
    },
  },
  {
    title: "Computación Intermedia para Niños",
    audience: "11 – 13 años",
    theme: "navy",
    description:
      "Para niños que ya dominan lo básico. Trabajan con Excel, diseño digital e introducción a la programación visual para desarrollar pensamiento lógico y destacar en la escuela.",
    schedule: "Próximamente · Horario a convenir",
    scheduleUpcoming: true,
    highlight: "⭐ Incluye: ¡Domina Google Classroom y entrega todas sus tareas escolares en línea!",
    waLink:
      "https://wa.me/523321916387?text=Hola%20CompuClub%2C%20me%20interesa%20el%20curso%20de%20*Computaci%C3%B3n%20Intermedia%20para%20Ni%C3%B1os*%20(11-13%20a%C3%B1os).%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20horarios%20y%20disponibilidad%3F",
    program: {
      title: "Programa — Computación Intermedia para Niños",
      headerBadge: "1 mes · 8 sesiones · Martes y Jueves",
      headerBadgeTheme: "navy",
      scheduleNote: "Próximamente · Horario a convenir",
      modules: [
        {
          title: "Día 1 — Windows a nivel PRO",
          description:
            "Configuraciones avanzadas que los técnicos usan: optimización del sistema, comandos de Terminal, escritorios virtuales y trucos que la mayoría no conoce.",
        },
        {
          title: "Día 2 — Google Workspace profesional",
          description:
            "Trabajo colaborativo real: Drive, Docs, Sheets, Forms y Calendar sincronizados como lo hacen las empresas. Aprenderán a trabajar en equipo desde cualquier lugar.",
        },
        {
          title: "Día 3 — Documentos inteligentes",
          description:
            "Word y Google Docs al siguiente nivel: plantillas profesionales, CV, cartas formales con formato corporativo y combinación de correspondencia automática.",
        },
        {
          title: "Día 4 — Excel y Sheets: control total",
          description:
            "Fórmulas reales (SI, BUSCARV, CONTAR.SI), dashboards, tablas dinámicas y gráficos automáticos. Habilidades que piden en cualquier trabajo o universidad.",
        },
        {
          title: "Día 5 — Diseño digital profesional",
          description:
            "Canva avanzado con Inteligencia Artificial integrada: logos, carteles, presentaciones y contenido para redes sociales con identidad visual propia.",
        },
        {
          title: "Día 6 — Inteligencia Artificial aplicada",
          description:
            "ChatGPT, Claude.ai, NotebookLM e InVideo. Aprenderán a usar IA como herramienta real de estudio y productividad, no solo para curiosidad.",
        },
        {
          title: "Día 7 — Crea tu primera página web 🌐",
          description:
            "Con Lovable.dev crearán y publicarán una página web real desde cero, sin saber programar. La comparten en línea el mismo día.",
        },
        {
          title: "Día 8 — Seguridad y blindaje del sistema 🔒",
          description:
            "Firewall, protección de carpetas, antivirus y puntos de restauración. Su computadora quedará blindada al 100%. Cierre con Feria Digital donde presentan su portafolio completo.",
        },
      ],
      takeawaysTitle: "¿Qué incluye este curso que otros no tienen?",
      takeaways: [
        "Acceso a Google Classroom con seguimiento personalizado",
        "Retroalimentación del instructor en cada tarea",
        "Uso real de Inteligencia Artificial (ChatGPT, Claude.ai, NotebookLM)",
        "Página web propia publicada en internet",
        "Portafolio digital completo al finalizar",
        "Constancia oficial de acreditación",
        "Instructores certificados: Ing. Vicente Cayetano Flores",
      ],
      instructor: {
        main: "Instructor Principal: Ing. CC Vicente Cayetano Flores",
        auxiliary: "Instructor Auxiliar: Arq. Verónica Gabriela López Ramos",
      },
    },
  },
  {
    title: "Computación Básica para Adultos",
    audience: "Adultos (todas las edades)",
    theme: "gradient",
    description:
      "Nunca es tarde para aprender. Domina la computadora y tu celular a tu ritmo, con paciencia y ejemplos de la vida diaria: correo, apps bancarias y redes sociales con total seguridad.",
    schedule: "Martes, Jueves · 6:00 PM a 7:00 PM",
    highlight: "⭐ Incluye: ¡Aprende a dominar tu celular sin pedirle ayuda a nadie!",
    mostPopular: true,
    waLink:
      "https://wa.me/523321916387?text=Hola%20CompuClub%2C%20me%20interesa%20el%20curso%20de%20*Computaci%C3%B3n%20B%C3%A1sica%20para%20Adultos*%20(incluye%20uso%20de%20celular).%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%20sobre%20horarios%20y%20disponibilidad%3F",
    program: {
      title: "Programa — Computación Básica para Adultos",
      headerBadge: "6 semanas · 18 clases · Martes y Jueves",
      modules: [
        {
          title: "Semana 1 — Perdiendo el miedo a la tecnología",
          description:
            "Empezamos desde cero sin prisa. Conocerás las partes de la computadora, aprenderás a encenderla, apagarla y moverte por Windows con confianza. También configuraremos tu equipo a tu gusto para que se sienta tuyo.",
        },
        {
          title: "Semana 2 — Escribir, redactar y comunicarte mejor",
          description:
            "Aprenderás a escribir correctamente en el teclado y crearás tus primeros documentos en Word: cartas, solicitudes, listas y cualquier documento que necesites en tu vida diaria o trabajo.",
        },
        {
          title: "Semana 3 — Internet, correo y videollamadas",
          description:
            "Navegarás en internet con seguridad, crearás o mejorarás tu correo electrónico y aprenderás a hacer videollamadas por WhatsApp, Zoom y Meet para hablar con familia y amigos sin depender de nadie.",
        },
        {
          title: "Semana 4 — Tu celular sin secretos 📱",
          badge: "⭐ MÁS SOLICITADO",
          description:
            "La semana más solicitada. Dominarás WhatsApp al 100%: grupos, estados, documentos y videollamadas. Aprenderás a usar apps bancarias con seguridad, redes sociales, Google Maps y cómo detectar fraudes y estafas digitales antes de caer en ellas.",
        },
        {
          title: "Semana 5 — Inteligencia Artificial para tu vida diaria 🤖",
          description:
            "Aprenderás a usar ChatGPT como asistente personal: pedirle recetas, redactar mensajes, resolver dudas, traducir textos y resumir documentos largos. También usarás Google Lens para identificar objetos, plantas, medicamentos y traducir letreros con la cámara de tu celular.",
        },
        {
          title: "Semana 6 — Proyecto final y vida digital independiente 🎓",
          description:
            "Juntamos todo lo aprendido. Harás trámites digitales básicos en línea, aprenderás a organizar tus fotos y documentos en la nube y presentarás tu proyecto final. Al terminar recibirás tu constancia de acreditación.",
        },
      ],
      takeawaysTitle: "¿Qué te llevas al terminar?",
      takeaways: [
        "Uso seguro y completo del celular y WhatsApp",
        "Manejo de correo electrónico y videollamadas",
        "Documentos en Word para trámites y trabajo",
        "Protección contra fraudes y estafas digitales",
        "Inteligencia Artificial como asistente personal",
        "Trámites en línea sin necesidad de pedir ayuda",
        "Constancia oficial de acreditación",
      ],
      specialNote:
        "Este curso está diseñado con paciencia y respeto para adultos de todas las edades. Aquí nadie se queda atrás.",
    },
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
      const index = Math.round(
        scroller.scrollLeft / (scroller.scrollWidth / courses.length),
      )
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
                  i === activeIndex ? "w-6 bg-brand-orange" : "w-2 bg-brand-navy/20",
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
  const [open, setOpen] = useState(false)

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

        {/* Course description */}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {course.description}
        </p>

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
            $300 / semana{" "}
            <span className="font-normal text-muted-foreground">· solo $100 por clase</span>
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-medium sm:text-sm">
            <CalendarDays
              className={cn(
                "h-3.5 w-3.5 flex-none",
                course.scheduleUpcoming ? "text-brand-orange" : "text-brand-orange",
              )}
              aria-hidden="true"
            />
            <span
              className={cn(
                course.scheduleUpcoming ? "text-brand-orange" : "text-muted-foreground",
              )}
            >
              {course.schedule}
            </span>
            {course.scheduleUpcoming && (
              <span className="inline-flex items-center rounded-full bg-brand-orange px-2 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
                Próximo
              </span>
            )}
          </p>
        </div>

        <div className="mt-6 flex-1" />

        <div className="mt-2 space-y-2">
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
          >
            <Link
              href={course.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-navy-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Me interesa este curso
            </Link>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setOpen(true)}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2, ease: EASE_OUT }}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-brand-navy bg-transparent px-5 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-navy"
          >
            <BookOpen className="h-4 w-4" aria-hidden="true" />
            Ver programa completo
          </motion.button>
        </div>
      </div>

      <ProgramModal
        open={open}
        onOpenChange={setOpen}
        title={course.program.title}
        headerBadge={course.program.headerBadge}
        headerBadgeTheme={course.program.headerBadgeTheme}
        scheduleNote={course.program.scheduleNote}
        modules={course.program.modules}
        takeawaysTitle={course.program.takeawaysTitle}
        takeaways={course.program.takeaways}
        instructor={course.program.instructor}
        specialNote={course.program.specialNote}
      />
    </article>
  )
}

function ProgramModal({
  open,
  onOpenChange,
  title,
  headerBadge,
  headerBadgeTheme = "orange",
  scheduleNote,
  modules,
  takeawaysTitle,
  takeaways,
  instructor,
  specialNote,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  headerBadge?: string
  headerBadgeTheme?: "orange" | "navy"
  scheduleNote?: string
  modules: ProgramModule[]
  takeawaysTitle?: string
  takeaways?: string[]
  instructor?: {
    main: string
    auxiliary?: string
  }
  specialNote?: string
}) {
  const isMobile = useIsMobile()

  const body = (
    <div>
      {headerBadge && (
        <div className="mb-2 flex justify-center">
          <span
            className={cn(
              "inline-flex items-center rounded-full px-3.5 py-1.5 text-center text-xs font-semibold text-white sm:text-sm",
              headerBadgeTheme === "navy" ? "bg-brand-navy" : "bg-brand-orange",
            )}
          >
            {headerBadge}
          </span>
        </div>
      )}

      {scheduleNote && (
        <p className="mb-6 text-center text-xs font-medium text-brand-orange sm:text-sm">
          {scheduleNote}
        </p>
      )}

      <ul className="space-y-5">
        {modules.map((m) => (
          <li key={m.title} className="flex gap-3">
            <span
              aria-hidden="true"
              className="mt-2 h-2 w-2 flex-none rounded-full bg-brand-navy"
            />
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5">
                <p className="font-heading text-sm font-bold text-brand-orange sm:text-base">
                  {m.title}
                </p>
                {m.badge && (
                  <span className="inline-flex items-center rounded-full bg-brand-orange px-2 py-0.5 text-xs font-semibold text-white">
                    {m.badge}
                  </span>
                )}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-brand-navy/80">
                {m.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {takeaways && takeaways.length > 0 && (
        <div className="mt-8 border-t border-border pt-6">
          {takeawaysTitle && (
            <h4 className="font-heading text-base font-bold text-brand-navy sm:text-lg">
              {takeawaysTitle}
            </h4>
          )}
          <ul className="mt-4 space-y-3">
            {takeaways.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle2
                  className="mt-0.5 h-5 w-5 flex-none text-brand-orange"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-brand-navy/90">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {instructor && (
            <div className="mt-4 flex items-start gap-3 rounded-xl bg-brand-navy/5 p-3 ring-1 ring-brand-navy/10">
              <GraduationCap
                className="mt-0.5 h-5 w-5 flex-none text-brand-orange"
                aria-hidden="true"
              />
              <div className="min-w-0 text-sm text-brand-navy">
                <p className="font-semibold leading-snug">{instructor.main}</p>
                {instructor.auxiliary && (
                  <p className="mt-0.5 leading-snug text-brand-navy/80">
                    {instructor.auxiliary}
                  </p>
                )}
              </div>
            </div>
          )}

          {specialNote && (
            <div className="mt-4 flex items-start gap-3 rounded-xl border-l-4 border-brand-orange bg-[#FFF5F2] p-4">
              <Heart
                className="mt-0.5 h-5 w-5 flex-none text-brand-orange"
                aria-hidden="true"
              />
              <p className="text-sm leading-relaxed text-brand-navy">
                {specialNote}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  )

  const closeButton = (
    <button
      type="button"
      onClick={() => onOpenChange(false)}
      className="inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-brand-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
    >
      Cerrar
    </button>
  )

  if (isMobile) {
    return (
      <Drawer open={open} onOpenChange={onOpenChange}>
        <DrawerContent className="border-t-0 bg-white p-0">
          <DrawerHeader className="border-b border-white/10 bg-brand-navy px-5 py-5 text-left">
            <DrawerTitle className="font-heading text-lg font-bold text-white">
              {title}
            </DrawerTitle>
            <DrawerDescription className="sr-only">
              Programa del curso: {title}
            </DrawerDescription>
          </DrawerHeader>

          <div className="max-h-[60vh] overflow-y-auto px-5 py-6">{body}</div>

          <div className="flex justify-center border-t border-border bg-white px-5 py-4">
            {closeButton}
          </div>
        </DrawerContent>
      </Drawer>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="gap-0 overflow-hidden border-0 bg-white p-0 sm:max-w-lg">
        <DialogHeader className="bg-brand-navy px-6 py-5 text-left">
          <DialogTitle className="font-heading text-lg font-bold text-white sm:text-xl">
            {title}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Programa del curso: {title}
          </DialogDescription>
        </DialogHeader>

        <div className="max-h-[65vh] overflow-y-auto px-6 py-6">{body}</div>

        <div className="flex justify-center border-t border-border bg-white px-6 py-4">
          {closeButton}
        </div>
      </DialogContent>
    </Dialog>
  )
}
