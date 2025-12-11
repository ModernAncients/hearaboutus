# Design System Quick Reference
## Hear About Us

> "Small gestures, beautifully held."

---

## Color Palette

### Primary: Reciprocity Blue
- `--color-reciprocity-600` - Primary brand color (#3A8BFF)
- Use: Primary actions, links, active states
- Tailwind: `bg-reciprocity-600`, `text-reciprocity-600`

### Secondary: Gold Warmth
- `--color-gold-600` - Secondary brand color (#E5B76A)
- Use: Accents, success states, special emphasis
- Tailwind: `bg-gold-600`, `text-gold-600`

### Neutrals: Slate
- `--color-midnight` / `--color-slate-800` - Primary text (#1A1C1E)
- `--color-slate-500` - Muted text (#6A7280)
- `--color-slate-300` - Borders (#C6CBD4)
- `--color-cloud` - Background (#F5F7FA)

### Status Colors
- Success: `--color-success` (#10B981)
- Error: `--color-error` (#EF4444)
- Warning: `--color-warning` (#F59E0B)
- Info: `--color-info` (uses Reciprocity 600)

---

## Spacing Scale (4px base)

- `1` = 4px
- `2` = 8px
- `3` = 12px
- `4` = 16px (standard)
- `5` = 20px
- `6` = 24px
- `8` = 32px
- `10` = 40px
- `12` = 48px

Tailwind: `p-4`, `gap-6`, `mt-8`, etc.

---

## Border Radius

- `--radius-sm` = 6px - Small buttons, inputs
- `--radius-md` = 12px - Standard buttons, cards
- `--radius-lg` = 16px - Large cards, modals
- `--radius-full` = 9999px - Pills, avatars

Tailwind: `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-full`

---

## Shadows

- `--shadow-soft` - Standard cards
- `--shadow-medium` - Elevated cards
- `--shadow-large` - Modals, sheets
- `--shadow-hover` - Interactive hover states
- `--shadow-focus` - Focus rings

Tailwind: `shadow-soft`, `shadow-medium`, etc.

---

## Typography

### Headings
- `h1` / `.text-h1` - Page titles (24px mobile, 30px desktop)
- `h2` / `.text-h2` - Section headers (20px mobile, 24px desktop)
- `h3` / `.text-h3` - Subsections (18px mobile, 20px desktop)
- `h4` / `.text-h4` - Minor headings (16px mobile, 18px desktop)

### Body Text
- `.text-body` - Primary text (16px)
- `.text-body-small` - Secondary text (14px)
- `.text-caption` - Tertiary text (12px)
- `.text-label` - Form labels (12px, medium weight)

### Components
```tsx
import { Title, Section, Body, Small, Meta, Label } from '@/components/ui/Typography'

<Title>Page Title</Title>
<Section>Section Header</Section>
<Body>Body text content</Body>
<Small>Supporting text</Small>
<Meta>Metadata, timestamps</Meta>
<Label>Form label</Label>
```

---

## Components

### Button
```tsx
import { Button } from '@/components/ui'

<Button variant="primary" size="medium">Click me</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Delete</Button>
```

Variants: `primary`, `secondary`, `ghost`, `danger`
Sizes: `small`, `medium`, `large`

### Input
```tsx
import { Input } from '@/components/ui'

<Input label="Email" placeholder="you@example.com" />
<Input label="Password" type="password" error="Required" />
```

### Card
```tsx
import { Card } from '@/components/ui'

<Card variant="standard" padding="medium">
  Content
</Card>

<Card variant="interactive" onClick={handleClick}>
  Clickable card
</Card>
```

Variants: `standard`, `elevated`, `interactive`, `gradient`
Padding: `none`, `small`, `medium`, `large`

### Bottom Navigation
```tsx
import { BottomNav } from '@/components/layout/BottomNav'

<BottomNav
  items={[
    { href: '/home', label: 'Home', icon: <HomeIcon /> },
    { href: '/marker', label: 'Marker', icon: <MarkerIcon /> },
    // ...
  ]}
/>
```

### Modal / Sheet
```tsx
import { Modal, Sheet } from '@/components/ui'

<Modal isOpen={open} onClose={() => setOpen(false)} title="Title">
  Content
</Modal>

<Sheet isOpen={open} onClose={() => setOpen(false)} title="Title">
  Content
</Sheet>
```

### Toast
```tsx
import { Toast } from '@/components/ui'

<Toast
  message="Success!"
  variant="success"
  duration={4000}
  onClose={() => {}}
/>
```

### Loading States
```tsx
import { Loading, Skeleton, Empty, Error } from '@/components/ui'

<Loading size="medium" variant="spinner" />
<Skeleton variant="text" lines={3} />
<Empty title="No items" description="Get started by..." />
<Error message="Something went wrong" />
```

---

## Layout Patterns

### Mobile-First Page Structure
```tsx
<div className="min-h-screen bg-[var(--color-cloud)]">
  {/* Top Bar */}
  <header className="h-14 bg-white border-b">...</header>
  
  {/* Content */}
  <main className="p-4 pb-20"> {/* pb-20 for bottom nav */}
    Content
  </main>
  
  {/* Bottom Nav */}
  <BottomNav items={...} />
</div>
```

### Safe Areas (iOS/Android)
```tsx
<div className="safe-area-bottom">Content</div>
```

Classes: `safe-area-top`, `safe-area-bottom`, `safe-area-left`, `safe-area-right`

### Tap Targets
Minimum 44x44px for all interactive elements.

Use class: `tap-target` or ensure `min-h-11` (44px)

---

## Motion

### Standard Transitions
- Duration: 200ms (primary)
- Easing: `ease-in-out` (cubic-bezier(0.4, 0, 0.2, 1))

### Hover States
```css
transition-all duration-200 ease-in-out
hover:shadow-hover
active:scale-[0.98]
```

### Focus States
```css
focus:outline-none
focus:ring-2
focus:ring-[var(--color-reciprocity-400)]
focus:ring-opacity-20
```

---

## Accessibility

### Contrast
- Text on background: Minimum 4.5:1
- Large text: Minimum 3:1

### Focus
- All interactive elements: Visible focus ring
- Keyboard navigation: Full support

### Motion
- Respects `prefers-reduced-motion`
- Animations disabled for reduced motion users

### Labels
- All inputs: Associated labels
- Icon buttons: `aria-label`
- Images: Alt text or `aria-label`

---

## Common Patterns

### Form
```tsx
<form className="space-y-4">
  <Input label="Name" required />
  <Input label="Email" type="email" />
  <Textarea label="Message" />
  <Button type="submit" variant="primary">Submit</Button>
</form>
```

### List Item
```tsx
<div className="flex items-center gap-3 p-4 bg-white rounded-md shadow-soft">
  <Avatar />
  <div className="flex-1">
    <h3 className="text-body font-semibold">Title</h3>
    <p className="text-body-small text-slate-500">Subtitle</p>
  </div>
  <Button variant="ghost">Action</Button>
</div>
```

### Stat Card
```tsx
<Card variant="gradient" padding="medium">
  <div className="text-caption opacity-90 mb-1">Label</div>
  <div className="text-4xl font-bold mb-2">Value</div>
  <div className="text-caption opacity-90">Description</div>
</Card>
```

---

## Design Tokens File

All tokens available in:
- CSS Variables: `globals.css`
- JSON Export: `design-tokens.json`
- Tailwind Config: Via `@theme inline` in `globals.css`

---

## Quick Tips

1. **Always use design tokens** - Never hardcode colors, spacing, etc.
2. **Mobile-first** - Design for mobile, scale up
3. **Touch targets** - Minimum 44x44px
4. **Accessibility** - Test with keyboard, screen reader
5. **Consistency** - Use existing components before creating new ones
6. **Motion** - Gentle, purposeful, never flashy
7. **Typography** - Use semantic components (Title, Body, etc.)

---

For complete documentation, see `DESIGN_SYSTEM.md`
