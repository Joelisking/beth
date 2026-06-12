"use client"

const ROW_A = "and still, I choose you"
const ROW_B = "ten thousand mornings to go"

function Track({ text, dir }: { text: string; dir: "left" | "right" }) {
  const items = Array.from({ length: 6 })
  return (
    <div className="flex overflow-hidden whitespace-nowrap">
      <div
        className={
          dir === "left"
            ? "marquee-track-left flex shrink-0"
            : "marquee-track-right flex shrink-0"
        }
      >
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0">
            {items.map((_, i) => (
              <span key={i} className="flex items-center">
                <span
                  className={
                    dir === "left"
                      ? "px-6 font-script text-5xl text-cream md:text-7xl"
                      : "px-6 font-serif text-4xl font-light text-blush italic md:text-6xl"
                  }
                >
                  {text}
                </span>
                <span className="text-2xl text-gold">&hearts;</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export function Interlude() {
  return (
    <section
      aria-label="and still, I choose you"
      className="relative my-24 -rotate-2 scale-[1.03] bg-wine py-16 shadow-[0_40px_80px_-40px_rgba(71,16,25,0.6)] md:py-20"
    >
      <div className="flex flex-col gap-6">
        <Track text={ROW_A} dir="left" />
        <Track text={ROW_B} dir="right" />
      </div>
    </section>
  )
}
