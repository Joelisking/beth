"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

import { HERO_IMAGE, photoSrc } from "@/lib/story"

/**
 * Scroll-scrubbed full-bleed reveal: the photograph unmasks and
 * settles as you scroll through it.
 */
export function HeroImage() {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const clip = useTransform(
    scrollYProgress,
    [0, 0.45],
    reduced
      ? ["inset(0% 0% 0% 0% round 0px)", "inset(0% 0% 0% 0% round 0px)"]
      : ["inset(22% 16% 22% 16% round 24px)", "inset(0% 0% 0% 0% round 0px)"],
  )
  const scale = useTransform(scrollYProgress, [0, 0.6], reduced ? [1, 1] : [1.18, 1])
  const captionOpacity = useTransform(scrollYProgress, [0.42, 0.55], [0, 1])
  const captionY = useTransform(scrollYProgress, [0.42, 0.55], [24, 0])

  return (
    <div ref={ref} className="relative h-[210vh]">
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        <motion.div style={{ clipPath: clip }} className="absolute inset-0">
          <motion.img
            src={photoSrc(HERO_IMAGE)}
            alt="the two of us, Times Square"
            style={{ scale }}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-[55%] bg-gradient-to-t from-wine-deep/90 via-wine-deep/35 to-transparent" />
        </motion.div>

        <motion.div
          style={{ opacity: captionOpacity, y: captionY }}
          className="absolute right-0 bottom-14 left-0 px-6 text-center"
        >
          <p className="text-[11px] tracking-[0.45em] text-cream/80 uppercase">
            times square &middot; may 2026
          </p>
          <p className="mt-3 font-serif text-3xl text-cream italic md:text-5xl">
            the night the whole city looked at you
          </p>
        </motion.div>
      </div>
    </div>
  )
}
