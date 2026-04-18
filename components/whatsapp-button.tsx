"use client"

import Link from "next/link"
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"

export function WhatsAppButton() {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        delay: 1.5,
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="fixed right-4 bottom-4 z-50 sm:right-6 sm:bottom-6"
    >
      <div
        className="relative"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Pulsing ring (pauses on hover) */}
        {!hovered && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
            initial={{ scale: 1, opacity: 0.55 }}
            animate={{ scale: 1.4, opacity: 0 }}
            transition={{
              repeat: Infinity,
              duration: 1.8,
              ease: "easeOut",
            }}
          />
        )}

        {/* Tooltip */}
        <AnimatePresence>
          {hovered && (
            <motion.span
              key="wa-tooltip"
              role="tooltip"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="pointer-events-none absolute right-full top-1/2 mr-3 -translate-y-1/2 rounded-lg bg-brand-navy px-3 py-1.5 text-xs font-semibold whitespace-nowrap text-white shadow-md"
            >
              Habla con un asesor
            </motion.span>
          )}
        </AnimatePresence>

        <motion.div
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
          className="relative"
        >
          <Link
            href="https://wa.me/523321916387?text=Hola%20CompuClub%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20cursos"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir chat de WhatsApp"
            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]"
          >
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-7 w-7"
              fill="currentColor"
            >
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.02 0C5.41 0 .04 5.37.04 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.2-1.62a11.94 11.94 0 0 0 5.82 1.49h.01c6.61 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.49-8.41ZM12.03 21.3h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.68.96.98-3.59-.24-.37a9.89 9.89 0 0 1-1.52-5.27c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.04 7.01 2.91a9.85 9.85 0 0 1 2.9 7.02c0 5.48-4.45 9.86-9.96 9.86Zm5.47-7.42c-.3-.15-1.77-.88-2.05-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.95 1.18-.18.2-.35.23-.65.08-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.66-2.07-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.52s1.08 2.92 1.23 3.12c.15.2 2.13 3.25 5.15 4.56 3.02 1.3 3.02.87 3.57.82.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35Z" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
