"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"

export function UrgencyBanner() {
  const [visible, setVisible] = useState(true)

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <motion.div
          role="region"
          aria-label="Anuncio de inscripciones"
          initial={{ y: -48, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -48, opacity: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="sticky top-0 z-50 w-full bg-brand-orange text-white shadow-sm"
        >
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-2 sm:px-6">
            <p className="flex-1 text-center text-xs leading-snug text-pretty sm:text-sm">
              <span aria-hidden="true" className="mr-1.5">
                🔔
              </span>
              <span className="font-semibold">Inscripciones abiertas</span>
              <span className="mx-1.5 hidden sm:inline">—</span>
              <span className="block sm:inline">
                Cupo limitado por grupo
                <span className="mx-2 text-white/60">|</span>
                Lun · Mié · Vie
              </span>
            </p>
            <button
              type="button"
              onClick={() => setVisible(false)}
              aria-label="Cerrar anuncio"
              className="inline-flex flex-none items-center justify-center rounded-full p-1 text-white/90 transition hover:bg-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
