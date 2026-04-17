"use client"

import { LazyMotion, domAnimation } from "framer-motion"
import type { ReactNode } from "react"

/**
 * Loads Framer Motion DOM features lazily — shrinks the client bundle by
 * ~60% since hover/tap/spring features only get loaded once. Works with both
 * `motion.*` and `m.*` components.
 */
export function LazyMotionProvider({ children }: { children: ReactNode }) {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>
}
