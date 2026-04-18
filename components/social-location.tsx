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

            <Link
              href="https://www.facebook.com/people/CompuClub/61579701570982/"
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

            <div className="relative mt-6 aspect-video w-full overflow-hidden rounded-xl sm:aspect-[16/10] lg:aspect-[4/3]">
              <iframe
                title="Ubicación de CompuClub en Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14974.788978556771!2d-103.57668508623046!3d20.229898161103012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8425f5b7f8fd98a3%3A0xd0f22754e8a54280!2sCompuClub!5e0!3m2!1ses-419!2smx!4v1776542577467!5m2!1ses-419!2smx"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-5 flex justify-center sm:justify-start">
              <Link
                href="https://maps.app.goo.gl/JATCh7o141CtmpXJ6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-orange px-4 py-2 text-sm font-semibold text-white transition-all hover:scale-[1.03] hover:bg-brand-orange-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
              >
                Cómo llegar
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
