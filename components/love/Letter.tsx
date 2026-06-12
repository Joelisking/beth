"use client"

import { useRef } from "react"
import {
  motion,
  type MotionValue,
  useScroll,
  useTransform,
} from "motion/react"

import { LETTER_CLOSE, LETTER_WORDS } from "@/lib/story"

function Word({
  word,
  progress,
  range,
}: {
  word: string
  progress: MotionValue<number>
  range: [number, number]
}) {
  const opacity = useTransform(progress, range, [0.1, 1])
  const blur = useTransform(progress, range, ["blur(3px)", "blur(0px)"])
  return (
    <motion.span style={{ opacity, filter: blur }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  )
}

/**
 * The letter writes itself as she scrolls — each word surfacing
 * out of the paper, ending on the only sentence that matters.
 */
export function Letter() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const closeOpacity = useTransform(scrollYProgress, [0.78, 0.92], [0, 1])
  const closeScale = useTransform(scrollYProgress, [0.78, 0.92], [0.92, 1])

  const total = LETTER_WORDS.length
  const span = 0.7

  return (
    <div ref={ref} className="relative h-[320vh]">
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center px-6">
        <p className="mb-10 text-[11px] tracking-[0.5em] text-ink-soft uppercase">
          before anything else
        </p>
        <p className="max-w-3xl text-center font-serif text-2xl leading-relaxed font-light text-ink md:text-[2.6rem] md:leading-snug">
          {LETTER_WORDS.map((word, i) => {
            const start = (i / total) * span
            const end = start + (span / total) * 2.5
            return (
              <Word
                key={i}
                word={word}
                progress={scrollYProgress}
                range={[start, Math.min(end, span + 0.08)]}
              />
            )
          })}
        </p>
        <motion.p
          style={{ opacity: closeOpacity, scale: closeScale }}
          className="mt-12 font-serif text-5xl font-medium text-wine italic md:text-7xl"
        >
          {LETTER_CLOSE}
        </motion.p>
      </div>
    </div>
  )
}
