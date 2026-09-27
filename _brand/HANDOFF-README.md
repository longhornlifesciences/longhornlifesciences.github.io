# Longhorn Life Sciences — Website Asset Handoff
Exported 2026-09-26. Logos left out on purpose (you already have the ones you want).

## /tokens
- `tokens.json` is the source of truth. Colors for both registers (dark Obsidian and light Clearfield), gradients, type roles, spacing, radii and shadows.
- `tokens.css` holds the CSS custom properties, the `.t-<role>` type classes and the `@font-face` rules. It is generated from tokens.json.
- `_tokens.scss` holds the same values as SCSS variables. Also generated.
- `tailwind.config.snippet.js` is a `theme.extend` block (colors, fonts, radii, shadows, gradients) to merge into your config. Also generated.
- The metallic standard is gunmetal: flat `#8d99a3` on dark backgrounds, and `gradient-gunmetal` on light ones.

## /fonts
Evolventa Regular, Bold, Oblique and BoldOblique, plus JetBrains Mono Regular and Bold. All are free (OFL).
- **WOFF2 files are NOT included.** They couldn't be generated here, because the conversion needs Brotli compression. Run this once in the folder:
  `npx ttf2woff2 < Evolventa-Regular.ttf > Evolventa-Regular.woff2` (repeat for each file), or use `woff2_compress *.ttf`.
- `tokens.css` already lists the `.woff2` file first and the `.ttf` second. It works now on the TTFs alone and will pick up the WOFF2 files once you add them.

## /brand
- `dna-helix.jpg` and `dna-helix-dark.jpg`: helix imagery. **Low-res** (about 211px wide), so use it small or faded. The dark file has stray letters on its right edge; crop them off.
- `motif-low-poly-mesh.svg`: the mesh motif as a vector (stroke `#2c6f8c`, nodes `#21afef`).
- `team/`: CEO, CTO, COO and CMO headshots, taken from the June 2026 deck. They are compressed deck extracts; get originals for retina use.

## /docs
- `design-rules.md`: the full usage rules (color pairing, emphasis, cards, team blocks, images, dos and don'ts). Its slide-specific parts (footer, 1920px canvas) are there for reference.

## /components/marketing-kit
- A reference build of the marketing site: `index.html`, `components.jsx` and `marketing.css`. It needs the fonts at `../../fonts/`, so open it from inside this package.
- Treat it as a visual and structural reference, not production code. It uses in-browser Babel.
- `colors_and_type.css` is the full source stylesheet the kit needs. Its token names differ from `tokens.css`, so build new work on `/tokens`.
