# Design Assets
## Hear About Us - Brand & Visual Identity

This folder contains all design assets, brand tokens, and specifications for Hear About Us.

---

## Folder Structure

```
/design
  /svg              - SVG assets (logo, icons, app icon)
  /branding         - Brand tokens (colors, typography)
  /web              - Web-specific assets (copy, motion specs)
```

---

## SVG Assets

### `logo-symbol.svg`
The "Passing Dot" symbol representing trust moving between people. Use `currentColor` for flexible theming.

**Usage:**
- Header logos
- Favicon (with sizing)
- Brand marks

### `marker-glyph.svg`
The Marker icon—a soft seal/card with a spark dot. Represents the trust token customers share.

**Usage:**
- Marker-related UI
- Navigation icons
- Empty states

### `app-icon-base.svg`
Base app icon with gradient background and centered logo symbol. Export at various sizes (1024, 512, 256, etc.) for app stores.

**Usage:**
- iOS app icon
- Android app icon
- PWA icon

---

## Brand Tokens

### `color-tokens.json`
Complete color palette including:
- Brand colors (Reciprocity, Gold)
- Neutral scale (Slate 50-900)
- Status colors (Positive, Warning, Danger, Info)
- Background colors

### `typography-tokens.json`
Typography scale with:
- Font family (Inter + system fallback)
- Size, line height, weight for all text styles
- H1-H4, Body variants, Caption, Micro

---

## Web Assets

### `landing-copy.md`
Complete marketing copy for the landing page:
- Hero section
- How it works
- Product preview
- Why it matters
- Pricing teaser
- Footer copy

**Tone:** Calm, human, sincere. No hype.

### `motion-spec.md`
Frontend implementation guide for motion:
- Duration tokens
- Easing curves
- Motion patterns (BottomSheet, Toast, Card hover, etc.)
- Implementation examples (CSS, Framer Motion)
- Anti-patterns

---

## Usage Guidelines

### SVG Assets
- Always use `currentColor` where possible for theming
- Optimize SVGs before production (remove metadata)
- Test at multiple sizes (16px, 24px, 48px, etc.)

### Brand Tokens
- Import JSON files into design tools (Figma, etc.)
- Use as single source of truth
- Never hardcode colors or typography values

### Copy
- Use landing-copy.md as reference
- Maintain tone: calm, human, sincere
- No "10x growth" style language

### Motion
- Follow motion-spec.md for all animations
- Always respect `prefers-reduced-motion`
- Keep durations under 400ms
- Use easing curves consistently

---

## Export Guidelines

### App Icons
Export `app-icon-base.svg` at:
- 1024x1024 (iOS, Android)
- 512x512 (PWA)
- 256x256 (Favicon)
- 180x180 (Apple touch icon)

### Logo Symbol
Export `logo-symbol.svg` at:
- 24x24 (default)
- 48x48 (large)
- 16x16 (small)

---

*"Small gestures, beautifully held."*
