# Design Tokens Reference
## Hear About Us - Implementation-Ready Foundation

> **Foundation stone of the visual language**  
> Mobile-first, clean, emotionally consistent, grounded in warmth, trust, reciprocity

---

## Quick Reference

### Brand Colors
```css
--color-reciprocity-blue: #3A8BFF
--color-reciprocity-blue-dark: #246CDB
--color-reciprocity-blue-light: #DCEBFF

--color-gold-warm: #E5B76A
--color-gold-warm-dark: #C79A50
--color-gold-warm-light: #F8E6C7
```

### Status Colors
```css
--color-status-positive: #3BB273
--color-status-warning: #FFA94D
--color-status-danger: #FF5C5C
--color-status-info: #3A8BFF
```

### Typography Scale
- **H1**: 28px / 36px line
- **H2**: 24px / 32px line
- **H3**: 20px / 28px line
- **H4**: 18px / 24px line
- **Body LG**: 16px / 24px line
- **Body**: 15px / 22px line
- **Body SM**: 14px / 20px line
- **Caption**: 12px / 16px line
- **Micro**: 11px / 16px line

### Spacing Scale
```
0, 2, 4, 6, 8, 10, 12, 16, 20, 24, 28, 32, 40, 48
```

### Radius
```
sm: 6px
md: 12px
lg: 16px
xl: 24px
full: 9999px
```

### Shadows
- `shadow-soft`: Standard cards
- `shadow-card`: Card elevation
- `shadow-pop`: Elevated surfaces
- `shadow-header`: Header elevation
- `shadow-focus-ring`: Focus states

### Motion
- **Fast**: 120ms
- **Normal**: 200ms
- **Slow**: 320ms
- **Easing**: `ease-soft`, `ease-emphasis`, `ease-decelerate`

---

## Usage in Code

### CSS Variables
```css
background-color: var(--color-reciprocity-blue);
color: var(--color-slate-900);
padding: var(--spacing-8);
border-radius: var(--radius-md);
box-shadow: var(--shadow-soft);
transition: all var(--duration-normal) var(--ease-soft);
```

### Tailwind Classes
```tsx
<div className="bg-reciprocity text-white p-8 rounded-md shadow-soft">
  Content
</div>

<h1 className="text-h1 font-bold">Heading</h1>
<p className="text-body text-slate-700">Body text</p>
```

### Component Tokens
```css
/* Button */
height: var(--button-height);
border-radius: var(--button-radius);
padding: var(--button-padding-y) var(--button-padding-x);

/* Card */
background: var(--card-bg);
border-radius: var(--card-radius);
padding: var(--card-padding);
box-shadow: var(--card-shadow);

/* Input */
background: var(--input-bg);
border: 1px solid var(--input-border);
border-radius: var(--input-radius);
padding: var(--input-padding-y) var(--input-padding-x);
```

---

## Files

- **`app/globals.css`** - All CSS variables and Tailwind theme
- **`design-tokens.json`** - Exportable JSON for design tools
- **`tailwind.config.ts`** - Tailwind configuration

---

## Design Tool Integration

Import `design-tokens.json` into:
- **Figma**: Use Tokens Studio plugin
- **Adobe XD**: Import as design tokens
- **Sketch**: Use Sketch Tokens plugin

---

*Last updated: [Current Date]*
