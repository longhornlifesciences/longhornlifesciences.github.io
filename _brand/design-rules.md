# Design rules — Longhorn Life Sciences (Obsidian / Clearfield)

Slides are designed at 1920×1080. Two registers: **Obsidian** (dark navy — cover, section dividers, big-stat, closing) and **Clearfield** (white — all content slides). A deck alternates: dark for brand moments, light for information.

## Logo
- `logos/lockup-reversed-for-dark-bg` on Obsidian slides. Cover: top-left, 560px wide. Closing: centered, 520px wide.
- `logos/lockup-for-light-bg` (gunmetal-gradient text) on white/light surfaces.
- `logos/lockup-plate-navy` (self-contained navy plate) on photos, colored, or unknown backgrounds.
- `logos/mark-medallion.png` is the mark alone (transparent; the horns overhang the ring circle — do not crop it into a circle). `mark-medallion-dark.png` is its dark-gunmetal version for low-contrast moments on light grounds.
- Content slides do NOT carry the logo; the footer text "LONGHORN LIFE SCIENCES" stands in for it.
- Minimum size and clear-space rules are not defined (see README).

## Color pairing (text on background)
- On dark (`#04101f` family): white `#ffffff` for headlines, `#aebccd` body, `#7b8da3` muted, teal `#17cda5` / bright teal `#4eddb9` accents, gunmetal-300 `#8d99a3` for metallic display (divider titles, big numbers). Never marine `#0c3a5e` text on dark.
- On light (white / `#f5f7fa`): marine `#0c3a5e` headlines, `#475368` body, `#5f7088` muted, `#8595ad` faint/footers, teal-deep `#109aa6` accents (never bright teal `#17cda5` as text on white — fails contrast). Metallic display text on light uses the gunmetal gradient.
- The old white-chrome gradient is legacy; do not use it in new work.

## Emphasis in running text
Bold (Evolventa 700) in the same color, or the register's accent teal for short key phrases. No italics for emphasis, no underlines (underline = link only).

## Footer (light content slides)
One row at the bottom margin, JetBrains Mono 18px `#8595ad`: left "LONGHORN LIFE SCIENCES" (uppercase), right "NN / NN" page numbers. No date in the footer. Confidentiality text sits top-right of the COVER only (18px Evolventa, 0.22em tracking, uppercase, `#b0bccd`).

## Big-number callouts
Dark slide. Mono uppercase label in bright teal `#4eddb9` above; the number in gunmetal-300 at 260px; one meaning sentence below in white at 85% opacity; source line bottom-left in mono 16px `#7b8da3`. One number per slide.

## Stat / feature cards (light slides)
Card: `#f5f7fa` fill, 1px `#e9edf3` border, 14–16px radius, 44px padding. Number in marine 76px bold (teal-deep `#109aa6` for the standout card), statement in 26px `#475368`. Three across, 32px gap.

## Team / bio blocks
4-across grid, 36px gap. Square headshot (1:1, 14px radius), name 26px bold marine, role 20px teal-deep, one-line credential 18px `#5f7088`.

## Charts & data
No formal chart spec. Observed practice: series colors marine → teal → cyan → slate-300 (see tokens.json chartSequence, derived); axis/series labels in JetBrains Mono 16px uppercase 0.14em `#5f7088`; bars 9px radius; no gridline style defined.

## Tables
Not defined — no table pattern exists in this system.

## Quotes
Not defined.

## Images
Rounded corners: 10px (small chips) to 24px (feature panels). Photos crop with object-fit: cover; schematics/product shots sit on white panels with 1px `#d4dbe6` border, object-fit: contain. Captions in mono 14–16px `#5f7088`. On dark, images may fade in via a linear mask from the slide background. No duotone/tint overlay is used.

## Icons
No icon set exists. Bullets are 6–8px teal dots. Do not introduce third-party icons.

## Dos and don'ts
- DO alternate registers: dark for the moments that sell, light for the ones that inform.
- DO keep one idea per slide; the headline states the takeaway as a sentence.
- DON'T set bright teal `#17cda5` text on white (use `#109aa6`).
- DON'T put the gunmetal gradient on dark backgrounds (flat `#8d99a3` there).
- DON'T crop the medallion's horns.
- DON'T use the legacy chrome-white gradient or the old skull badge (`mark-badge`) in new work.
