"use client"

import { useRef } from "react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"

import type { Media } from "@/lib/story"
import { photoSrc, posterSrc, videoSrc } from "@/lib/story"
import { cn } from "@/lib/utils"
import { SmartVideo } from "./SmartVideo"

export function MediaFigure({ media }: { media: Media }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion()
  const drift = reduced ? 0 : (media.drift ?? 0)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [drift, -drift])

  const isPolaroid = media.frame === "polaroid"
  const tilt = reduced ? 0 : (media.tilt ?? 0)

  const inner = (
    <div
      className={cn(
        "relative overflow-hidden",
        media.frame === "arch" && "rounded-t-full rounded-b-md",
        (media.frame === "plain" || media.frame === "wide") && "rounded-md",
        isPolaroid && "rounded-[3px]",
      )}
      style={{ aspectRatio: media.aspect }}
    >
      {media.kind === "photo" ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={photoSrc(media.id)}
          alt={media.caption ?? ""}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <SmartVideo
          src={videoSrc(media.id)}
          poster={posterSrc(media.id)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  )

  return (
    <motion.figure ref={ref} style={{ y }} className={cn("relative", media.cls)}>
      <motion.div
        initial={{ opacity: 0, y: 56, rotate: 0 }}
        whileInView={{ opacity: 1, y: 0, rotate: tilt }}
        viewport={{ once: true, margin: "-12% 0px" }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
      >
        {isPolaroid ? (
          <div className="bg-cream p-3 pb-4 shadow-[0_30px_70px_-30px_rgba(43,29,23,0.5)]">
            {inner}
            <div className="flex flex-col gap-1.5 pt-3">
              <span className="font-script text-2xl leading-tight text-wine">
                {media.caption}
              </span>
              <span className="text-[10px] tracking-[0.25em] text-ink-soft uppercase">
                {media.date}
              </span>
            </div>
          </div>
        ) : (
          <>
            <div className="shadow-[0_30px_70px_-30px_rgba(43,29,23,0.55)]">
              {inner}
            </div>
            <figcaption className="mt-4 flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.3em] text-ink-soft uppercase">
                {media.date}
              </span>
              <span className="font-serif text-lg leading-snug text-wine italic">
                {media.caption}
              </span>
            </figcaption>
          </>
        )}
      </motion.div>
    </motion.figure>
  )
}
