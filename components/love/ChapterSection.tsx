"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

import type { Chapter } from "@/lib/story"
import { cn } from "@/lib/utils"
import { MediaFigure } from "./MediaFigure"

export function ChapterSection({
  chapter,
  index,
}: {
  chapter: Chapter
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const ghostY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [120, -180])
  const even = index % 2 === 0

  return (
    <section ref={ref} className="relative mx-auto max-w-7xl px-6 py-28 md:py-40">
      {/* ghost year drifting behind the collage */}
      <motion.span
        aria-hidden
        style={{ y: ghostY }}
        className={cn(
          "ghost-year pointer-events-none absolute top-56 z-0 font-serif text-[26vw] leading-none font-semibold opacity-60 select-none md:top-10 md:text-[24vw] md:opacity-100",
          even ? "-right-6 md:right-0" : "-left-6 md:left-0",
        )}
      >
        {chapter.ghost}
      </motion.span>

      <motion.header
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "relative z-10 mb-20 md:mb-28",
          even ? "text-left" : "text-left md:text-right",
        )}
      >
        <p className="text-[11px] font-semibold tracking-[0.5em] text-gold-deep uppercase">
          chapter {chapter.numeral}
          {chapter.years && <> &middot; {chapter.years}</>}
        </p>
        <h2 className="mt-4 font-serif text-5xl leading-none font-medium text-ink italic md:text-8xl">
          {chapter.title}
        </h2>
        <p className="mt-4 font-script text-3xl text-wine md:text-4xl">
          {chapter.subtitle}
        </p>
      </motion.header>

      <div className="relative z-10 grid grid-cols-1 gap-y-20 md:grid-cols-12 md:gap-x-6 md:gap-y-10">
        {chapter.media.map((media) => (
          <MediaFigure key={media.id} media={media} />
        ))}
      </div>
    </section>
  )
}
