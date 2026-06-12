// Render favicon candidates with the real brand font via headless Chromium.
import { chromium } from "playwright"

const html = `<!doctype html>
<html><head>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600;1,700&display=swap" rel="stylesheet">
<style>
  body { margin: 0; display: flex; gap: 40px; padding: 40px; background: #ddd; font-family: sans-serif; }
  .tile { width: 256px; height: 256px; position: relative; }
  /* A — wax seal */
  .seal { background: #f5efe3; display: flex; align-items: center; justify-content: center; }
  .seal .wax {
    width: 200px; height: 200px; border-radius: 47% 53% 50% 50% / 52% 48% 52% 48%;
    background: radial-gradient(circle at 35% 30%, #8a2f3e, #6e2230 60%, #471019);
    display: flex; align-items: center; justify-content: center;
    box-shadow: inset 0 -6px 14px rgba(71,16,25,.8), inset 0 6px 10px rgba(255,240,220,.25), 0 8px 18px rgba(43,29,23,.35);
  }
  .seal .wax::before {
    content: ""; position: absolute; width: 156px; height: 156px; border-radius: 50%;
    border: 2px solid rgba(245,239,227,.4);
  }
  .seal .b { font-family: "Cormorant Garamond", serif; font-style: italic; font-weight: 700; font-size: 130px; color: #f5efe3; margin-top: -10px; }
  /* B — stationery monogram */
  .mono { background: #f5efe3; display: flex; align-items: center; justify-content: center; }
  .mono .frame { position: absolute; inset: 18px; border: 3px solid #a8824f; }
  .mono .frame2 { position: absolute; inset: 30px; border: 1.5px solid rgba(168,130,79,.5); }
  .mono .b { font-family: "Cormorant Garamond", serif; font-style: italic; font-weight: 600; font-size: 170px; color: #6e2230; }
  /* C — heart */
  .heart { background: #f5efe3; display: flex; align-items: center; justify-content: center; }
  .heart span { font-size: 190px; color: #6e2230; margin-top: -20px; }
</style></head>
<body>
  <div class="tile seal"><div class="wax"><span class="b">B</span></div></div>
  <div class="tile mono"><div class="frame"></div><div class="frame2"></div><span class="b">B</span></div>
  <div class="tile heart"><span>&hearts;</span></div>
</body></html>`

const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 970, height: 340 } })
await page.setContent(html, { waitUntil: "networkidle" })
await page.waitForTimeout(800)
await page.screenshot({ path: "/tmp/favicon-candidates.png" })

// also render each at 32px-equivalent zoom to judge legibility small
const tiles = await page.locator(".tile").all()
let i = 0
for (const t of tiles) {
  await t.screenshot({ path: `/tmp/favicon-${++i}.png` })
}
await browser.close()
console.log("done")

// hi-res seal export (re-run section)
const b2 = await chromium.launch()
const p2 = await b2.newPage({ viewport: { width: 970, height: 340 }, deviceScaleFactor: 2 })
await p2.setContent(html, { waitUntil: "networkidle" })
await p2.waitForTimeout(800)
await p2.locator(".tile.seal").screenshot({ path: "/tmp/seal-512.png" })
await b2.close()
console.log("seal exported")
