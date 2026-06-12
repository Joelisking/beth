"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "motion/react"

import { CHAPTERS, HER_NAME } from "@/lib/story"
import { ChapterSection } from "./ChapterSection"
import { Finale } from "./Finale"
import { Hero } from "./Hero"
import { HeroImage } from "./HeroImage"
import { Interlude } from "./Interlude"
import { Letter } from "./Letter"
import { LoveList } from "./LoveList"
import { Vow } from "./Vow"

export function Story() {
  const { scrollYProgress } = useScroll()

  // dev-only: jump to a section via NEXT_PUBLIC_PEEK=<vh-multiple> in .env.local
  const [peek] = useState<number | null>(() => {
    const v = process.env.NEXT_PUBLIC_PEEK
    return v ? parseFloat(v) : null
  })
  useEffect(() => {
    if (peek != null)
      window.scrollTo({ top: peek * window.innerHeight, behavior: "instant" })
  }, [peek])

  return (
    <main className="relative">
      {/* opening veil */}
      {peek === null && (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ delay: 1.5, duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
        className="pointer-events-none fixed inset-0 z-[70] flex items-center justify-center bg-paper"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: [0, 1, 1, 0], y: [16, 0, 0, -10] }}
          transition={{ duration: 1.6, times: [0, 0.3, 0.8, 1] }}
          className="font-script text-5xl text-wine md:text-6xl"
        >
          for {HER_NAME}
        </motion.p>
      </motion.div>
      )}

      {/* reading progress */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed inset-x-0 top-0 z-[65] h-[2px] origin-left bg-wine"
      />

      <div className="grain" />
      <div className="vignette" />

      <Hero />
      <HeroImage />
      <Letter />

      {CHAPTERS.map((chapter, i) => (
        <div key={chapter.numeral}>
          <ChapterSection chapter={chapter} index={i} />
          {i === 2 && <Interlude />}
        </div>
      ))}

      <LoveList />
      <Vow />
      <Finale />
    </main>
  )
}
