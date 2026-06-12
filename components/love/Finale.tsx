"use client"

import { useState } from "react"
import { motion } from "motion/react"

import { EST, FINALE_VIDEO, HER_NAME, posterSrc, SIGNATURE, videoSrc } from "@/lib/story"
import { SmartVideo } from "./SmartVideo"

type Burst = { id: number; hearts: { hx: string; hy: string; hr: string; d: string }[] }

export function Finale() {
  const [bursts, setBursts] = useState<Burst[]>([])

  const popHearts = () => {
    const id = Date.now()
    const hearts = Array.from({ length: 14 }, () => ({
      hx: `${(Math.random() - 0.5) * 280}px`,
      hy: `${-60 - Math.random() * 220}px`,
      hr: `${(Math.random() - 0.5) * 90}deg`,
      d: `${Math.random() * 0.25}s`,
    }))
    setBursts((b) => [...b.slice(-3), { id, hearts }])
  }

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-end overflow-hidden">
      <SmartVideo
        src={videoSrc(FINALE_VIDEO)}
        poster={posterSrc(FINALE_VIDEO)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-wine-deep via-wine-deep/40 to-transparent" />

      <div className="relative z-10 flex flex-col items-center px-6 pb-20 text-center">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-serif text-5xl leading-tight font-medium text-cream italic md:text-8xl"
        >
          I love you, {HER_NAME}.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-6 font-script text-3xl text-blush md:text-4xl"
        >
          always &amp; in every version of this life &mdash; {SIGNATURE}
        </motion.p>

        {/* the heart that blooms when pressed */}
        <motion.button
          onClick={popHearts}
          whileTap={{ scale: 0.85 }}
          aria-label="a little extra love"
          className="relative mt-12 font-serif text-4xl text-cream transition-transform hover:scale-110"
        >
          &hearts;
          {bursts.map((burst) =>
            burst.hearts.map((h, i) => (
              <span
                key={`${burst.id}-${i}`}
                className="heart-pop pointer-events-none absolute top-0 left-1/2 text-xl text-blush"
                style={
                  {
                    "--hx": h.hx,
                    "--hy": h.hy,
                    "--hr": h.hr,
                    animationDelay: h.d,
                  } as React.CSSProperties
                }
              >
                &hearts;
              </span>
            )),
          )}
        </motion.button>

        <p className="mt-10 text-[10px] tracking-[0.45em] text-cream/60 uppercase">
          {EST} &middot; forever to go
        </p>
      </div>
    </section>
  )
}
