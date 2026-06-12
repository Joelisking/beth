"use client"

import { motion } from "motion/react"

import { EST, HER_NAME } from "@/lib/story"

const letterVariants = {
  hidden: { y: "110%", rotate: 4 },
  shown: (i: number) => ({
    y: "0%",
    rotate: 0,
    transition: {
      delay: 2.1 + i * 0.09,
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
}

export function Hero() {
  const letters = HER_NAME.split("")

  return (
    <section className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden px-6">
      {/* stationery frame */}
      <div className="pointer-events-none absolute inset-4 border border-gold/40 md:inset-8" />
      <div className="pointer-events-none absolute inset-6 border border-gold/20 md:inset-10" />

      {/* soft radial blush */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 45% at 50% 42%, rgba(201,141,131,0.18), transparent 70%)",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9, duration: 1 }}
        className="text-[11px] tracking-[0.5em] text-ink-soft uppercase"
      >
        a love letter &middot; {EST}
      </motion.p>

      <h1
        aria-label={HER_NAME}
        className="mt-6 flex overflow-hidden font-serif text-[28vw] leading-[0.95] font-medium text-wine italic select-none md:text-[19vw]"
      >
        {letters.map((letter, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterVariants}
            initial="hidden"
            animate="shown"
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 2.9, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-2 h-px w-44 origin-center bg-gold/70"
      />

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.2, duration: 1.1 }}
        className="mt-6 font-script text-3xl text-ink/80 md:text-4xl"
      >
        from the one who loves you most
      </motion.p>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.4em] text-ink-soft uppercase">
          scroll slowly
        </span>
        <div className="h-12 w-px overflow-hidden">
          <div className="scroll-cue h-full w-px bg-wine/60" />
        </div>
      </motion.div>
    </section>
  )
}
