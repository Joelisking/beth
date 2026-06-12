"use client"

import { motion } from "motion/react"

import { LOVE_LIST } from "@/lib/story"

const ROMAN = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"]

export function LoveList() {
  return (
    <section className="relative mx-auto max-w-3xl px-6 py-32 md:py-44">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 1 }}
        className="mb-16 text-center"
      >
        <p className="text-[11px] tracking-[0.5em] text-gold uppercase">
          an incomplete inventory
        </p>
        <h2 className="mt-4 font-serif text-4xl font-medium text-ink italic md:text-6xl">
          A few of the ten thousand reasons
        </h2>
      </motion.div>

      <ol className="flex flex-col">
        {LOVE_LIST.map((reason, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -32 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-baseline gap-6 border-b border-gold/25 py-6 first:border-t"
          >
            <span className="w-8 shrink-0 font-serif text-lg text-gold italic">
              {ROMAN[i]}.
            </span>
            <span className="font-serif text-xl leading-snug font-light text-ink md:text-2xl">
              {reason}
            </span>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
