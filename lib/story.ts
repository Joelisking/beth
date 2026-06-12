/**
 * Everything personal lives in this file — names, dates, captions,
 * which photos and videos appear and in what order.
 * Edit freely; the design adapts.
 */

export const HER_NAME = "Beth"
export const SIGNATURE = "your Joel"
export const EST = "est. september 2023"

export type Media = {
  /** filename without extension, under public/media/photos or /videos */
  id: string
  kind: "photo" | "video"
  caption?: string
  date?: string
  /** visual treatment */
  frame: "plain" | "polaroid" | "arch" | "wide"
  /** aspect ratio used for the crop */
  aspect: "3/4" | "4/3" | "9/16" | "16/9" | "1/1" | "4/5"
  /** tailwind classes for desktop collage placement */
  cls: string
  /** parallax drift in px (positive = moves down slower) */
  drift?: number
  /** rotation for polaroids */
  tilt?: number
}

export type Chapter = {
  numeral: string
  years: string
  ghost: string
  title: string
  subtitle: string
  media: Media[]
}

export const LETTER_WORDS = (
  "My Beth — I have started this a hundred different ways, and every " +
  "single one began with you. I know the weight between us right now is " +
  "mine. I put it there, and I won't pretend otherwise. But underneath " +
  "everything I got wrong sits the one thing I have never gotten wrong:"
).split(" ")

export const LETTER_CLOSE = "I love you."

export const LOVE_LIST = [
  "the way you laugh with your whole body",
  "how you glow in red — every single time",
  "your hand finding mine without looking",
  "the faces you pull when you think no one is watching",
  "that you'll try anything once — pottery wheels, horses, feeding zebras",
  "how every city we visit ends up looking better with you in it",
  "the safest I ever sleep is next to you",
  "that you have seen every version of me, and stayed",
]

export const VOW_LINES = [
  "I am not asking you to forget what hurt you.",
  "I am asking you to remember what built us.",
  "The mistakes were mine. The foolishness was mine. But so is the lesson — and so is the man who is done learning it the hard way.",
  "Every photograph here is a promise I already made, and intend to keep making: to choose you on the bright days, the heavy days, and every ordinary Tuesday in between.",
]

export const CHAPTERS: Chapter[] = [
  {
    numeral: "I",
    years: "2023 — 2024",
    ghost: "2023",
    title: "Where it began",
    subtitle: "the first pages",
    media: [
      {
        id: "IMG_4732",
        kind: "photo",
        frame: "polaroid",
        aspect: "3/4",
        date: "september 2023",
        caption: "the very beginning",
        cls: "md:col-span-4 md:col-start-2",
        tilt: -2.5,
        drift: 30,
      },
      {
        id: "IMG_0306",
        kind: "photo",
        frame: "plain",
        aspect: "3/4",
        date: "january 2024",
        caption: "holding on, even then",
        cls: "md:col-span-4 md:col-start-8 md:mt-40",
        drift: -24,
      },
      {
        id: "IMG_0802",
        kind: "photo",
        frame: "polaroid",
        aspect: "3/4",
        date: "july 2024",
        caption: "grey sky, didn't notice",
        cls: "md:col-span-4 md:col-start-3 md:mt-24",
        tilt: 2,
        drift: 20,
      },
      {
        id: "IMG_6886",
        kind: "photo",
        frame: "arch",
        aspect: "3/4",
        date: "august 2024",
        caption: "you, in teal, ruining me forever",
        cls: "md:col-span-4 md:col-start-8 md:-mt-10",
        drift: -32,
      },
    ],
  },
  {
    numeral: "II",
    years: "winter 2024 — 25",
    ghost: "2025",
    title: "The holidays",
    subtitle: "all my favorite lights were you",
    media: [
      {
        id: "IMG_8681",
        kind: "photo",
        frame: "plain",
        aspect: "3/4",
        date: "december 2024",
        caption: "dinner under the lanterns",
        cls: "md:col-span-4 md:col-start-2",
        drift: 26,
      },
      {
        id: "IMG_8688",
        kind: "photo",
        frame: "arch",
        aspect: "3/4",
        date: "december 2024",
        caption: "matching in midnight",
        cls: "md:col-span-4 md:col-start-7 md:mt-36",
        drift: -20,
      },
      {
        id: "IMG_2944",
        kind: "video",
        frame: "plain",
        aspect: "9/16",
        date: "new year's eve",
        caption: "we wore white into the new year",
        cls: "md:col-span-3 md:col-start-3 md:mt-28",
        drift: 18,
      },
      {
        id: "IMG_9174",
        kind: "photo",
        frame: "polaroid",
        aspect: "3/4",
        date: "january 1, 2025",
        caption: "first photo of the year — of course it's you",
        cls: "md:col-span-4 md:col-start-7 md:mt-10",
        tilt: 2.5,
        drift: -28,
      },
      {
        id: "IMG_8985",
        kind: "photo",
        frame: "polaroid",
        aspect: "3/4",
        date: "december 2024",
        caption: "every mirror agrees with me",
        cls: "md:col-span-3 md:col-start-2 md:mt-32",
        tilt: -3,
        drift: 22,
      },
      {
        id: "IMG_9179",
        kind: "photo",
        frame: "plain",
        aspect: "1/1",
        date: "january 2025",
        caption: "palm trees & your head on my shoulder",
        cls: "md:col-span-4 md:col-start-6 md:mt-24",
        drift: -16,
      },
      {
        id: "IMG_9451",
        kind: "video",
        frame: "plain",
        aspect: "9/16",
        date: "january 2025",
        caption: "under the palms, time stopped",
        cls: "md:col-span-3 md:col-start-4 md:mt-28",
        drift: 24,
      },
    ],
  },
  {
    numeral: "III",
    years: "2025",
    ghost: "2025",
    title: "The adventures",
    subtitle: "zebras, horses, & your hands in clay",
    media: [
      {
        id: "IMG_9444",
        kind: "photo",
        frame: "plain",
        aspect: "3/4",
        date: "january 2025",
        caption: "what we shaped that day",
        cls: "md:col-span-4 md:col-start-2",
        drift: 28,
      },
      {
        id: "IMG_1047",
        kind: "video",
        frame: "plain",
        aspect: "9/16",
        date: "march 2025",
        caption: "you fed a zebra like it was nothing",
        cls: "md:col-span-3 md:col-start-8 md:mt-36",
        drift: -22,
      },
      {
        id: "100_0096",
        kind: "photo",
        frame: "wide",
        aspect: "3/4",
        date: "the pottery village",
        caption: "two wheels, side by side",
        cls: "md:col-span-4 md:col-start-3 md:mt-24",
        drift: 18,
      },
      {
        id: "IMG_4270",
        kind: "video",
        frame: "plain",
        aspect: "9/16",
        date: "march 2025",
        caption: "fearless — I have the footage",
        cls: "md:col-span-3 md:col-start-8 md:mt-16",
        drift: -26,
      },
      {
        id: "IMG_1009",
        kind: "photo",
        frame: "arch",
        aspect: "3/4",
        date: "march 2025",
        caption: "a nest built for exactly two",
        cls: "md:col-span-4 md:col-start-2 md:mt-32",
        drift: 22,
      },
      {
        id: "IMG_4209",
        kind: "video",
        frame: "polaroid",
        aspect: "9/16",
        date: "march 2025",
        caption: "thirty seconds of us being us",
        cls: "md:col-span-3 md:col-start-7 md:mt-24",
        tilt: 2,
        drift: -18,
      },
      {
        id: "IMG_3032",
        kind: "photo",
        frame: "polaroid",
        aspect: "3/4",
        date: "january 2025",
        caption: "dinner, then dessert: your laugh",
        cls: "md:col-span-4 md:col-start-3 md:mt-28",
        tilt: -2,
        drift: 16,
      },
      {
        id: "IMG_3017",
        kind: "photo",
        frame: "plain",
        aspect: "3/4",
        date: "january 2025",
        caption: "red. always red.",
        cls: "md:col-span-4 md:col-start-8 md:mt-12",
        drift: -30,
      },
    ],
  },
  {
    numeral: "IV",
    years: "2025",
    ghost: "2025",
    title: "The everyday",
    subtitle: "my favorite ordinary days",
    media: [
      {
        id: "IMG_2842",
        kind: "photo",
        frame: "polaroid",
        aspect: "3/4",
        date: "june 2025",
        caption: "passenger princess & chauffeur",
        cls: "md:col-span-4 md:col-start-2",
        tilt: 2,
        drift: 24,
      },
      {
        id: "IMG_5250",
        kind: "photo",
        frame: "arch",
        aspect: "3/4",
        date: "june 2025",
        caption: "caught mid-kiss, zero regrets",
        cls: "md:col-span-4 md:col-start-7 md:mt-36",
        drift: -20,
      },
      {
        id: "IMG_3183",
        kind: "photo",
        frame: "plain",
        aspect: "3/4",
        date: "june 2025",
        caption: "we painted the same sunset",
        cls: "md:col-span-4 md:col-start-3 md:mt-24",
        drift: 18,
      },
      {
        id: "IMG_5589",
        kind: "photo",
        frame: "plain",
        aspect: "1/1",
        date: "november 2025",
        caption: "the sign knew",
        cls: "md:col-span-4 md:col-start-8 md:mt-16",
        drift: -24,
      },
      {
        id: "IMG_5366",
        kind: "video",
        frame: "polaroid",
        aspect: "9/16",
        date: "june 2025",
        caption: "fit check (you won)",
        cls: "md:col-span-3 md:col-start-2 md:mt-32",
        tilt: -2.5,
        drift: 20,
      },
      {
        id: "IMG_0636",
        kind: "photo",
        frame: "plain",
        aspect: "3/4",
        date: "november 2025",
        caption: "leather weather",
        cls: "md:col-span-4 md:col-start-6 md:mt-20",
        drift: -16,
      },
      {
        id: "IMG_5852",
        kind: "photo",
        frame: "polaroid",
        aspect: "3/4",
        date: "november 2025",
        caption: "golden hour found us indoors",
        cls: "md:col-span-4 md:col-start-2 md:mt-28",
        tilt: 2.5,
        drift: 22,
      },
      {
        id: "IMG_5862",
        kind: "photo",
        frame: "plain",
        aspect: "3/4",
        date: "november 2025",
        caption: "the safest I ever sleep",
        cls: "md:col-span-3 md:col-start-7 md:mt-24",
        drift: -18,
      },
      {
        id: "IMG_5820",
        kind: "photo",
        frame: "arch",
        aspect: "3/4",
        date: "november 2025",
        caption: "every light in town, dimmer than you",
        cls: "md:col-span-4 md:col-start-4 md:mt-28",
        drift: 16,
      },
      {
        id: "1B36DBEC-0782-4BB2-B341-971027D6C529",
        kind: "video",
        frame: "plain",
        aspect: "9/16",
        date: "december 2025",
        caption: "doing nothing together — my favorite thing",
        cls: "md:col-span-3 md:col-start-8 md:-mt-4",
        drift: -26,
      },
    ],
  },
  {
    numeral: "V",
    years: "2026",
    ghost: "2026",
    title: "Now",
    subtitle: "still us. always us.",
    media: [
      {
        id: "IMG_0128",
        kind: "photo",
        frame: "plain",
        aspect: "3/4",
        date: "march 2026",
        caption: "boardwalk, blue sky, you",
        cls: "md:col-span-4 md:col-start-2",
        drift: 26,
      },
      {
        id: "IMG_1786",
        kind: "photo",
        frame: "polaroid",
        aspect: "3/4",
        date: "march 2026",
        caption: "a kiss you didn't see coming",
        cls: "md:col-span-4 md:col-start-7 md:mt-36",
        tilt: -2,
        drift: -20,
      },
      {
        id: "7DE0A1C9-5B82-4B04-B48B-BD1DA70DAA4D",
        kind: "video",
        frame: "plain",
        aspect: "9/16",
        date: "may 2026",
        caption: "an ordinary afternoon I'd relive forever",
        cls: "md:col-span-3 md:col-start-3 md:mt-24",
        drift: 18,
      },
      {
        id: "IMG_9123",
        kind: "photo",
        frame: "polaroid",
        aspect: "3/4",
        date: "may 2026",
        caption: "you, half-asleep, still the whole show",
        cls: "md:col-span-4 md:col-start-7 md:mt-12",
        tilt: 2.5,
        drift: -24,
      },
      {
        id: "IMG_0606",
        kind: "photo",
        frame: "arch",
        aspect: "3/4",
        date: "may 2026",
        caption: "that red gown should be illegal",
        cls: "md:col-span-4 md:col-start-2 md:mt-32",
        drift: 22,
      },
      {
        id: "IMG_2770",
        kind: "photo",
        frame: "plain",
        aspect: "3/4",
        date: "may 2026",
        caption: "a thousand reflections, one favorite person",
        cls: "md:col-span-4 md:col-start-7 md:mt-24",
        drift: -16,
      },
      {
        id: "IMG_2788",
        kind: "photo",
        frame: "polaroid",
        aspect: "3/4",
        date: "may 2026",
        caption: "cheek to cheek",
        cls: "md:col-span-3 md:col-start-3 md:mt-28",
        tilt: -2.5,
        drift: 20,
      },
      {
        id: "DSC09650",
        kind: "photo",
        frame: "wide",
        aspect: "4/3",
        date: "times square, may 2026",
        caption: "and the whole city held its breath",
        cls: "md:col-span-8 md:col-start-3 md:mt-36",
        drift: -12,
      },
    ],
  },
]

/** hero & finale media */
export const HERO_IMAGE = "DSC09638"
export const FINALE_VIDEO = "IMG_9318"

export const photoSrc = (id: string) => `/media/photos/${id}.jpg`
export const videoSrc = (id: string) => `/media/videos/${id}.mp4`
export const posterSrc = (id: string) => `/media/videos/${id}.jpg`
