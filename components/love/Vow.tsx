"use client"

import { motion } from "motion/react"

import { VOW_LINES } from "@/lib/story"

export function Vow() {
  return (
    <section className="relative bg-paper-deep py-32 md:py-44">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-paper to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-paper to-transparent" />

      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="font-serif text-5xl text-gold"
        >
          &#10087;
        </motion.span>

        <div className="mt-12 flex flex-col gap-10">
          {VOW_LINES.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-2xl leading-relaxed font-light text-ink md:text-[1.75rem]"
            >
              {line}
            </motion.p>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.3 }}
          className="mt-16 font-script text-4xl text-wine md:text-5xl"
        >
          I&rsquo;m not going anywhere.
        </motion.p>
      </div>
    </section>
  )
}
