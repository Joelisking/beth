import type { Metadata } from "next"
import { Cormorant_Garamond, Pinyon_Script } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
})

const pinyon = Pinyon_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-pinyon",
})

export const metadata: Metadata = {
  title: "for Beth ♡",
  description: "a love letter, meant to be scrolled slowly",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", cormorant.variable, pinyon.variable)}
    >
      <body>{children}</body>
    </html>
  )
}
