"use client"

import { useEffect, useState } from "react"

/**
 * Subscribes to a CSS media query. Returns false on the server and during
 * first render on the client to avoid hydration mismatches, then updates
 * after mount.
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mql = window.matchMedia(query)
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setMatches("matches" in e ? e.matches : mql.matches)

    handler(mql)
    mql.addEventListener?.("change", handler as (e: MediaQueryListEvent) => void)
    return () => {
      mql.removeEventListener?.(
        "change",
        handler as (e: MediaQueryListEvent) => void,
      )
    }
  }, [query])

  return matches
}

export function usePrefersReducedMotion(): boolean {
  return useMediaQuery("(prefers-reduced-motion: reduce)")
}
