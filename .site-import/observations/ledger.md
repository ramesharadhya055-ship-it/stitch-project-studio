# Import observation ledger — Stitch project 15657252909823993300 (SUNWAY)

Source: https://stitch.google.com/projects/15657252909823993300 (Google Stitch
prototype editor; the design itself lives in a nested cross-origin frame at
app-companion-430619.appspot.com and was extracted from that frame's DOM).
Reference: .site-import/reference.png (editor shell), source design capture:
hero + full page HTML in src/site-import/sunway-home.html.

## Preview verification (route /, dev server localhost:8080)

| Check | Layout | Result |
|---|---|---|
| Header (logo, nav, language pills, theme buttons, survey CTA) | desktop + phone | pass |
| Hero (badge, headline, copy, 2 CTAs, 3 info cards, hero photo + MNRE card) | desktop + phone | pass |
| Brands marquee section (3 rows) | desktop + phone | pass |
| Services / Products / PM-Surya Ghar / Wizard / Appointment / Branches / Reviews / About — all 10 sections render with real heights | desktop + phone | pass |
| Footer (quick links, branch contacts, year) | desktop + phone | pass |
| Theme toggle (solar / light / dark) — window.setTheme('dark') switches palette, dark: utilities active | desktop | pass |
| Language switch EN / ಕನ್ನಡ / हिन्दी — setLanguage('kn') translates data-i18n nodes, active pill highlighted | desktop | pass |
| Survey wizard step 1 → step 2 (Next: Property Details) — step hides/shows, dots + progress bar update | desktop + phone | pass |
| Select dropdowns — single chevron arrow (forms-plugin base styles in src/styles/site.css) | desktop + phone | pass |
| Current year auto-set (2026) | both | pass |
| Console/page errors | both | none |

## Notes / fallbacks
- The Stitch editor page itself (chat sidebar, canvas, sign-in chrome) was
  intentionally not kept; the imported page is the SUNWAY design screen.
- Design scripts (theme, i18n, survey wizard) are IIFE-wrapped with window.*
  exports and re-executed after the raw HTML is injected on mount
  (src/routes/index.tsx). Page content mounts client-side only — the raw HTML
  never hydrates byte-for-byte.
- Screenshots: /tmp/browser/verify/*.png (desktop_top/mid/bottom/dark/kn,
  wizard_step2b, phone_top/mid/bottom/footer/wizard*).
