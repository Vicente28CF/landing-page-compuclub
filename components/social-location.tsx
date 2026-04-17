"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ExternalLink, Facebook, MapPin } from "lucide-react"
import { EASE_OUT, viewportOnce } from "@/lib/motion-variants"
import { useMediaQuery } from "@/hooks/use-media-query"

export function SocialLocation() {
  const isDesktop = useMediaQuery("(min-width: 769px)")

  const facebookInitial = isDesktop
    ? { opacity: 0, x: -30 }
    : { opacity: 0, y: 32 }
  const mapsInitial = isDesktop
    ? { opacity: 0, x: 30 }
    : { opacity: 0, y: 32 }
  const reached = { opacity: 1, x: 0, y: 0 }

  return (
    <section id="encuentranos" className="bg-brand-surface py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.55, ease: EASE_OUT }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="font-heading text-sm font-bold tracking-wide text-brand-orange uppercase">
            Contáctanos
          </p>
          <h2 className="mt-3 text-3xl text-brand-navy text-balance sm:text-4xl">
            Encuéntranos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Síguenos en redes o visítanos en persona. ¡Estamos listos para recibirte!
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Facebook card */}
          <motion.article
            initial={facebookInitial}
            whileInView={reached}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1.5 bg-[#1877F2]"
            />
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1877F2]/10 text-[#1877F2] ring-1 ring-[#1877F2]/20">
                <Facebook className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-brand-navy sm:text-2xl">
                  Síguenos en Facebook
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">@CompuClub</p>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Mantente al día con nuestras novedades, fotos de clases y próximos cursos.
            </p>

            <div className="mt-6 flex-1" />

            {/* TODO: Replace # with the real Facebook page URL */}
            <Link
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1877F2] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:scale-[1.02] hover:bg-[#166FE0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1877F2]"
            >
              Visitar página
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Link>
          </motion.article>

          {/* Maps card */}
          <motion.article
            initial={mapsInitial}
            whileInView={reached}
            viewport={viewportOnce}
            transition={{ duration: 0.6, ease: EASE_OUT }}
            className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8"
          >
            <span
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1.5 bg-brand-orange"
            />
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange ring-1 ring-brand-orange/20">
                <MapPin className="h-7 w-7" strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-heading text-xl text-brand-navy sm:text-2xl">Visítanos</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {"[Dirección — agregar]"}
                </p>
              </div>
            </div>

            {/* TODO: Replace this placeholder with an embedded Google Maps iframe */}
            <div
              className="mt-6 flex aspect-video w-full items-center justify-center rounded-xl border-2 border-dashed border-brand-orange/40 bg-brand-surface text-center text-sm text-muted-foreground"
              role="img"
              aria-label="Placeholder para el mapa de Google Maps"
            >
              <div className="px-4">
                <MapPin
                  className="mx-auto h-8 w-8 text-brand-orange/70"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <p className="mt-2">{"[ Mapa — agregar iframe de Google Maps ]"}</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
