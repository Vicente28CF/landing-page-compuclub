import type { Variants } from "framer-motion"

export const EASE_OUT = [0.22, 1, 0.36, 1] as const
export const EASE_IN_OUT = [0.42, 0, 0.58, 1] as const

/** Standard entrance — fade + translate Y. Uses GPU-only properties. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
}

/** Parent that staggers children. */
export const staggerContainer: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

/** Slide from left (desktop). */
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

/** Slide from right (desktop). */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

/** Scale-in spring (for icons / small elements). */
export const springScaleIn: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 240, damping: 16 },
  },
}

/** Default viewport config: fire once, margin ≈ 80px. */
export const viewportOnce = { once: true, margin: "-80px" } as const

/** Splits a line of text into word-spans for per-word stagger animation. */
export const wordVariant: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

export const wordContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren: delay },
  },
})
