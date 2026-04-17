"use client"

import { motion } from "framer-motion"
import { wordContainer, wordVariant, viewportOnce } from "@/lib/motion-variants"

type AnimatedWordsProps = {
  text: string
  className?: string
  wordClassName?: string
  stagger?: number
  delay?: number
  /** Set false to trigger only when scrolled into view instead of on mount */
  animateOnMount?: boolean
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div"
}

/**
 * Splits a string into word-spans that fade + translate up with a stagger.
 * Uses translateY + opacity only (GPU-accelerated, no layout shift).
 */
export function AnimatedWords({
  text,
  className,
  wordClassName,
  stagger = 0.08,
  delay = 0,
  animateOnMount = true,
  as: Tag = "span",
}: AnimatedWordsProps) {
  const words = text.split(" ")

  const Container = motion[Tag] as typeof motion.span

  const animationProps = animateOnMount
    ? { initial: "hidden" as const, animate: "visible" as const }
    : {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: viewportOnce,
      }

  return (
    <Container
      variants={wordContainer(stagger, delay)}
      className={className}
      {...animationProps}
    >
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-baseline"
        >
          <motion.span
            variants={wordVariant}
            className={`inline-block ${wordClassName ?? ""}`}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Container>
  )
}
