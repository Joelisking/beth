// Visual verification: screenshot the site at multiple scroll positions.
import { chromium } from "playwright"

const positions = process.argv[2]
  ? process.argv[2].split(",").map(Number)
  : [0, 1.4, 4.8, 5.9, 6.6, 8, 10.5, 14.5, 18.9, 21, 26, 31.3, 33, 35.3]

const mobile = process.argv[3] === "mobile"

const browser = await chromium.launch()
const page = await browser.newPage({
  viewport: mobile ? { width: 390, height: 844 } : { width: 1440, height: 900 },
})
await page.goto("http://localhost:3000", { waitUntil: "networkidle" })
await page.waitForTimeout(3500) // let the veil lift & hero settle

for (const p of positions) {
  await page.evaluate((vh) => {
    window.scrollTo({ top: vh * window.innerHeight, behavior: "instant" })
  }, p)
  await page.waitForTimeout(1600) // entrance animations
  const name = `/tmp/beth-snap/${mobile ? "m" : "d"}-${String(p).replace(".", "_")}.jpg`
  await page.screenshot({ path: name, type: "jpeg", quality: 70 })
  console.log(name)
}

// horizontal overflow check
const overflow = await page.evaluate(() => ({
  scrollW: document.documentElement.scrollWidth,
  innerW: window.innerWidth,
  docH: document.documentElement.scrollHeight,
}))
console.log(JSON.stringify(overflow))
await browser.close()
