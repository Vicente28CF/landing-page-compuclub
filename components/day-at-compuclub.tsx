"use client"

import Image from "next/image"
import Link from "next/link"
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefObject,
} from "react"
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion"
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  X,
} from "lucide-react"
import { cn } from "@/lib/utils"

type Photo = {
  src: string
  alt: string
  caption: string
  tag: string
}

const photos: Photo[] = [
  {
    src: "/gallery/clase-videojuegos.jpeg",
    alt: "Alumno aprendiendo cómo se crean los videojuegos durante una clase con proyector",
    caption: "Alumnos trabajando en proyectos reales",
    tag: "Curso Básico",
  },
  {
    src: "/gallery/clase-computacion.jpeg",
    alt: "Instructor enseñando el uso del explorador de archivos de Windows en el proyector",
    caption: "Atención personalizada en cada clase",
    tag: "Nuestro método",
  },
  {
    src: "/gallery/estudiantes-laptops.jpeg",
    alt: "Alumnas trabajando con sus laptops en un ambiente cómodo y acogedor",
    caption: "Aprendizaje divertido y práctico",
    tag: "Ambiente CompuClub",
  },
  {
    src: "/gallery/clase-grupal.jpeg",
    alt: "Grupo de estudiantes aprendiendo con laptops junto a su maestro",
    caption: "Nuestros alumnos listos para el futuro",
    tag: "Resultados reales",
  },
]

const EASE = [0.22, 1, 0.36, 1] as const

/* -------------------------------------------------------------------------- */
/*  Root                                                                       */
/* -------------------------------------------------------------------------- */

export function DayAtCompuClub() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const total = photos.length

  const goNext = useCallback(() => {
    setDirection(1)
    setActiveIndex((i) => (i + 1) % total)
  }, [total])

  const goPrev = useCallback(() => {
    setDirection(-1)
    setActiveIndex((i) => (i - 1 + total) % total)
  }, [total])

  const close = useCallback(() => setIsOpen(false), [])

  const openAt = useCallback((index: number) => {
    setActiveIndex(index)
    setDirection(1)
    setIsOpen(true)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goNext()
      else if (e.key === "ArrowLeft") goPrev()
      else if (e.key === "Escape") close()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [isOpen, goNext, goPrev, close])

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  // Touch swipe for lightbox
  const touchStartX = useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const endX = e.changedTouches[0]?.clientX ?? touchStartX.current
    const deltaX = endX - touchStartX.current
    if (deltaX > 50) goPrev()
    else if (deltaX < -50) goNext()
    touchStartX.current = null
  }

  const active = photos[activeIndex]

  return (
    <section id="un-dia" className="relative overflow-hidden bg-background">
      <SectionHeader />

      {/* Mobile + Tablet */}
      <div className="lg:hidden">
        <MobileTabletGallery onOpen={openAt} />
      </div>

      {/* Desktop cinematic horizontal strip (sticky scroll) */}
      <div className="hidden lg:block">
        <DesktopStrip onOpen={openAt} />
      </div>

      <BottomCTA />

      {/* Lightbox */}
      <AnimatePresence>
        {isOpen && active && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Imagen ${activeIndex + 1} de ${total}: ${active.caption}`}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
            onClick={close}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            {/* Close */}
            <motion.button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                close()
              }}
              aria-label="Cerrar galería"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 18 }}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-brand-navy text-white shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </motion.button>

            {/* Prev */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goPrev()
              }}
              aria-label="Imagen anterior"
              className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-navy shadow-md transition-all hover:scale-105 hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:left-8"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Next */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                goNext()
              }}
              aria-label="Imagen siguiente"
              className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white text-brand-navy shadow-md transition-all hover:scale-105 hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white md:right-8"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>

            {/* Image stage */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="flex w-full max-w-5xl flex-col items-center"
            >
              <div className="relative flex h-[68vh] w-full items-center justify-center overflow-hidden sm:h-[78vh]">
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    initial={(d: number) => ({
                      x: d > 0 ? 60 : -60,
                      opacity: 0,
                      scale: 0.95,
                    })}
                    animate={{ x: 0, opacity: 1, scale: 1 }}
                    exit={(d: number) => ({
                      x: d > 0 ? -60 : 60,
                      opacity: 0,
                      scale: 0.95,
                    })}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={active.src}
                      alt={active.alt}
                      fill
                      sizes="100vw"
                      className="rounded-xl object-contain"
                      priority
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Caption + counter */}
              <div className="mt-4 flex w-full items-center justify-between gap-4 px-4">
                <p className="font-heading text-sm font-semibold text-white sm:text-base">
                  {active.caption}
                </p>
                <p className="font-mono text-xs text-white/50 sm:text-sm">
                  {activeIndex + 1} / {total}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*  Section header                                                             */
/* -------------------------------------------------------------------------- */

function SectionHeader() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 md:py-20">
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className="inline-flex items-center rounded-full bg-brand-orange px-3.5 py-1 font-heading text-xs font-bold uppercase tracking-wider text-white sm:text-sm"
      >
        Galería
      </motion.span>

      <div className="mt-5 overflow-hidden">
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: EASE }}
          className="font-heading text-3xl font-extrabold leading-tight text-brand-navy text-balance md:text-6xl"
        >
          Así se vive
        </motion.h2>
      </div>
      <div className="overflow-hidden">
        <motion.p
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="font-heading text-3xl font-extrabold italic leading-tight text-brand-orange text-balance md:text-6xl"
        >
          aprender en CompuClub
        </motion.p>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5, delay: 0.4, ease: EASE }}
        className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-brand-navy/55 sm:text-base"
      >
        Clases reales, ambiente increíble y tecnología de verdad. Cada foto cuenta
        una historia.
      </motion.p>

      {/* Three dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            aria-hidden="true"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              delay: 0.55 + i * 0.1,
              type: "spring",
              stiffness: 360,
              damping: 14,
            }}
            className="block h-2 w-2 rounded-full bg-brand-orange"
          />
        ))}
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Mobile + Tablet grid                                                       */
/* -------------------------------------------------------------------------- */

function MobileTabletGallery({ onOpen }: { onOpen: (i: number) => void }) {
  /**
   * Mobile: single column, aspect 4/3 each (gap-3)
   * Tablet: asymmetric 2-col mosaic:
   *   Card 1 — col 1, row-span-2 (tall)
   *   Card 2 — col 2, h-56
   *   Card 3 — col 2, h-56
   *   Card 4 — full width banner (col-span-2, h-52)
   */
  const mobileTabletClasses = [
    // Card 1
    "aspect-[4/3] md:aspect-auto md:row-span-2 md:h-full md:min-h-[29rem]",
    // Card 2
    "aspect-[4/3] md:aspect-auto md:h-56",
    // Card 3
    "aspect-[4/3] md:aspect-auto md:h-56",
    // Card 4
    "aspect-[4/3] md:aspect-auto md:col-span-2 md:h-52",
  ]

  return (
    <div className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
        {photos.map((photo, i) => (
          <MobileTabletCard
            key={photo.src}
            photo={photo}
            index={i}
            onClick={() => onOpen(i)}
            className={mobileTabletClasses[i]}
          />
        ))}
      </div>
    </div>
  )
}

function MobileTabletCard({
  photo,
  index,
  onClick,
  className,
}: {
  photo: Photo
  index: number
  onClick: () => void
  className?: string
}) {
  const ref = useRef<HTMLButtonElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement>,
    offset: ["start end", "end start"],
  })
  // Subtle vertical image parallax
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <motion.button
      ref={ref}
      type="button"
      onClick={onClick}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.15, ease: EASE }}
      className={cn(
        "group relative w-full overflow-hidden rounded-[20px] text-left shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange",
        className,
      )}
      aria-label={`Abrir imagen: ${photo.caption}`}
    >
      {/* Parallax image wrapper (120% tall, offset by -10%) */}
      <motion.div
        style={{ y }}
        className="absolute inset-x-0 top-[-10%] h-[120%] will-change-transform"
      >
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          loading={index === 0 ? "eager" : "lazy"}
          className="object-cover transition-transform duration-500 ease-out md:group-hover:scale-[1.06]"
        />
      </motion.div>

      {/* Persistent gradient for caption readability (mobile) + hover fade in (tablet) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1B3A6B]/90 via-[#1B3A6B]/20 to-transparent md:opacity-0 md:transition-opacity md:duration-300 md:group-hover:opacity-100"
      />

      {/* Caption — always visible on mobile; slides up on tablet hover */}
      <div className="absolute inset-x-0 bottom-0 p-5 md:translate-y-full md:transition-transform md:duration-300 md:ease-out md:group-hover:translate-y-0">
        <div className="flex items-end justify-between gap-3">
          <div className="min-w-0">
            <span className="mb-2 inline-flex items-center rounded-full bg-brand-orange px-2 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wide text-white">
              {photo.tag}
            </span>
            <p className="font-heading text-sm font-semibold text-white md:text-base">
              {photo.caption}
            </p>
          </div>
          <span
            aria-hidden="true"
            className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-white/15 backdrop-blur-sm"
          >
            <Maximize2 className="h-4 w-4 text-white" />
          </span>
        </div>
      </div>
    </motion.button>
  )
}

/* -------------------------------------------------------------------------- */
/*  Desktop sticky horizontal strip                                            */
/* -------------------------------------------------------------------------- */

function DesktopStrip({ onOpen }: { onOpen: (i: number) => void }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const progressTrackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isScrubbing, setIsScrubbing] = useState(false)

  const updateProgress = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    const p = max > 0 ? el.scrollLeft / max : 0
    setProgress(Math.min(Math.max(p, 0), 1))
    setCanScrollLeft(el.scrollLeft > 2)
    setCanScrollRight(el.scrollLeft < max - 2)
  }, [])

  useEffect(() => {
    updateProgress()
    const el = scrollerRef.current
    if (!el) return
    el.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)
    return () => {
      el.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [updateProgress])

  const scrollByCard = (dir: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    // Card width (380) + gap (24)
    el.scrollBy({ left: dir * 404, behavior: "smooth" })
  }

  const scrubToClientX = (clientX: number, smooth = false) => {
    const track = progressTrackRef.current
    const el = scrollerRef.current
    if (!track || !el) return
    const rect = track.getBoundingClientRect()
    const p = Math.min(Math.max((clientX - rect.left) / rect.width, 0), 1)
    const max = el.scrollWidth - el.clientWidth
    if (smooth) {
      el.scrollTo({ left: max * p, behavior: "smooth" })
    } else {
      el.scrollLeft = max * p
    }
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsScrubbing(true)
    ;(e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId)
    scrubToClientX(e.clientX, false)
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isScrubbing) return
    scrubToClientX(e.clientX, false)
  }

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isScrubbing) return
    setIsScrubbing(false)
    try {
      ;(e.currentTarget as HTMLDivElement).releasePointerCapture(e.pointerId)
    } catch {
      /* noop */
    }
  }

  return (
    <div className="relative bg-[#0a1628] py-12">
      {/* Scroller */}
      <div
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-[8vw] pb-6 [&::-webkit-scrollbar]:hidden"
        style={{ scrollbarWidth: "none" }}
      >
        {photos.map((photo, i) => (
          <div key={photo.src} className="flex-none snap-start">
            <DesktopCard photo={photo} onClick={() => onOpen(i)} />
          </div>
        ))}
      </div>

      {/* Controls: prev + interactive scrub bar + next */}
      <div className="mx-auto mt-6 flex max-w-4xl items-center gap-4 px-8">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={!canScrollLeft}
          aria-label="Imagen anterior"
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>

        <div
          ref={progressTrackRef}
          role="slider"
          aria-label="Posición de la galería"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerUp}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") {
              e.preventDefault()
              scrollByCard(1)
            } else if (e.key === "ArrowLeft") {
              e.preventDefault()
              scrollByCard(-1)
            }
          }}
          className="group relative h-2.5 flex-1 cursor-pointer touch-none rounded-full bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange"
        >
          <div
            style={{ width: `${progress * 100}%` }}
            className={cn(
              "pointer-events-none h-full rounded-full bg-brand-orange",
              isScrubbing ? "" : "transition-[width] duration-150 ease-out",
            )}
          />
          <div
            style={{ left: `${progress * 100}%` }}
            className={cn(
              "pointer-events-none absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-md ring-2 ring-brand-orange transition-transform",
              isScrubbing ? "scale-110" : "group-hover:scale-110",
            )}
          />
        </div>

        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={!canScrollRight}
          aria-label="Imagen siguiente"
          className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <p className="mx-auto mt-4 max-w-4xl px-8 text-center font-heading text-xs text-white/50">
        Usa las flechas o arrastra la barra para explorar
      </p>
    </div>
  )
}

function DesktopCard({
  photo,
  onClick,
}: {
  photo: Photo
  onClick: () => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)
  const [spotlight, setSpotlight] = useState({ x: -200, y: -200 })
  const rafRef = useRef<number | null>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const clientX = e.clientX
    const clientY = e.clientY
    if (rafRef.current != null) return
    rafRef.current = window.requestAnimationFrame(() => {
      const rect = cardRef.current?.getBoundingClientRect()
      if (rect) {
        setSpotlight({
          x: clientX - rect.left,
          y: clientY - rect.top,
        })
      }
      rafRef.current = null
    })
  }

  const handleMouseLeave = () => {
    if (rafRef.current != null) {
      window.cancelAnimationFrame(rafRef.current)
      rafRef.current = null
    }
    setHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8 }}
      transition={{ type: "tween", duration: 0.3, ease: EASE }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onClick()
        }
      }}
      aria-label={`Abrir imagen: ${photo.caption}`}
      className={cn(
        "group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl bg-brand-navy/40 shadow-xl shadow-black/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange",
      )}
      style={{
        width: 380,
        height: 460,
      }}
    >
      {/* Image with subtle brightness on hover */}
      <div className="absolute inset-0">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes="380px"
          loading="lazy"
          className="object-cover transition-[filter] duration-300"
          style={{ filter: hovered ? "brightness(1.1)" : "brightness(1)" }}
        />
      </div>

      {/* Spotlight glow — radial gradient following cursor */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at ${spotlight.x}px ${spotlight.y}px, rgba(232,76,30,0.25) 0%, transparent 60%)`,
        }}
      />

      {/* Gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#1B3A6B] via-[#1B3A6B]/60 to-transparent"
      />

      {/* Caption — slides up on hover */}
      <motion.div
        initial={false}
        animate={{ y: hovered ? 0 : "100%" }}
        transition={{ duration: 0.3, ease: EASE }}
        className="absolute inset-x-0 bottom-0 p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="font-heading text-lg font-semibold text-white">
              {photo.caption}
            </p>
            <p className="mt-1 font-sans text-sm text-brand-orange">
              {photo.tag}
            </p>
          </div>
          <ArrowUpRight
            className="mt-1 h-4 w-4 flex-none text-white"
            aria-hidden="true"
          />
        </div>
      </motion.div>

      {/* Persistent tag (visible when caption hidden) */}
      <div
        aria-hidden={hovered}
        className={cn(
          "absolute left-5 top-5 transition-opacity duration-300",
          hovered ? "opacity-0" : "opacity-100",
        )}
      >
        <span className="inline-flex items-center rounded-full bg-brand-orange px-2.5 py-0.5 font-heading text-[10px] font-semibold uppercase tracking-wider text-white">
          {photo.tag}
        </span>
      </div>
    </motion.div>
  )
}

/* -------------------------------------------------------------------------- */
/*  Bottom CTA                                                                 */
/* -------------------------------------------------------------------------- */

function BottomCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: EASE }}
      className="flex flex-col items-center gap-4 py-12 text-center"
    >
      <p className="text-sm text-brand-navy/60">
        ¿Quieres que tu hijo viva esta experiencia?
      </p>
      <motion.div
        whileHover={{
          scale: 1.04,
          boxShadow: "0 10px 30px rgba(232,76,30,0.35)",
        }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 400, damping: 18 }}
        className="rounded-full"
      >
        <Link
          href="https://wa.me/523321916387?text=Hola%20CompuClub%2C%20me%20gustar%C3%ADa%20reservar%20un%20lugar%20para%20mi%20hijo."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-orange/25 transition-colors hover:bg-brand-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:text-base"
        >
          Reservar lugar ahora →
        </Link>
      </motion.div>
    </motion.div>
  )
}
