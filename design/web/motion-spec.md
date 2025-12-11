# Motion Specification
## Hear About Us - Frontend Implementation Guide

> **"Trust moves in ripples, not explosions."**  
> Motion is a feature of calm, not a way to shout.

---

## Core Principles

1. **Gentle, not aggressive** - Motion should feel organic and reassuring
2. **Purposeful, not decorative** - Every animation serves a function
3. **Fast enough to feel responsive** - But slow enough to feel intentional
4. **Respect user preferences** - Always honor `prefers-reduced-motion`

---

## Duration Tokens

```css
--duration-fast: 120ms;    /* Micro-interactions, hover states */
--duration-normal: 200ms;  /* Primary duration - most transitions */
--duration-slow: 320ms;    /* Complex transitions, page changes */
```

**Usage:**
- Fast: Button hover, icon color changes, small state updates
- Normal: Card transitions, modal opens, tab switches
- Slow: Bottom sheet animations, page transitions, complex state changes

---

## Easing Curves

```css
/* Soft - Primary easing, feels organic and natural */
--ease-soft: cubic-bezier(0.25, 0.1, 0.25, 1);

/* Emphasis - For important state changes */
--ease-emphasis: cubic-bezier(0.2, 0, 0, 1);

/* Decelerate - For things entering/exiting */
--ease-decelerate: cubic-bezier(0, 0, 0, 1);
```

**When to use:**
- **Soft**: Default for most transitions (cards, buttons, inputs)
- **Emphasis**: Important actions (saving, confirming, primary CTAs)
- **Decelerate**: Bottom sheets, modals, overlays entering/exiting

---

## Motion Patterns

### 1. Bottom Sheet Open/Close

**Open:**
- Duration: `320ms`
- Easing: `ease-decelerate`
- Transform: `translateY(100%)` → `translateY(0)`
- Opacity: `0` → `1`
- Backdrop: Fade in simultaneously

**Close:**
- Duration: `200ms`
- Easing: `ease-emphasis`
- Transform: `translateY(0)` → `translateY(100%)`
- Opacity: `1` → `0`

**CSS Example:**
```css
.bottom-sheet {
  transform: translateY(100%);
  opacity: 0;
  transition: transform 320ms cubic-bezier(0, 0, 0, 1),
              opacity 320ms cubic-bezier(0, 0, 0, 1);
}

.bottom-sheet.open {
  transform: translateY(0);
  opacity: 1;
}
```

**Framer Motion Example:**
```tsx
<motion.div
  initial={{ y: '100%', opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: '100%', opacity: 0 }}
  transition={{
    duration: 0.32,
    ease: [0, 0, 0, 1]
  }}
>
```

---

### 2. Tab Change (Bottom Nav)

**Duration:** `200ms`
**Easing:** `ease-soft`
**Properties:** Color change, slight scale on icon

**CSS Example:**
```css
.nav-item {
  transition: color 200ms cubic-bezier(0.25, 0.1, 0.25, 1),
             transform 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.nav-item.active {
  color: var(--color-reciprocity);
  transform: scale(1.05);
}
```

**Framer Motion Example:**
```tsx
<motion.div
  animate={{
    color: isActive ? '#3A8BFF' : '#6A7280',
    scale: isActive ? 1.05 : 1
  }}
  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
>
```

---

### 3. Card Hover (Desktop)

**Duration:** `200ms`
**Easing:** `ease-soft`
**Properties:** Shadow lift, slight scale

**CSS Example:**
```css
.card {
  transition: box-shadow 200ms cubic-bezier(0.25, 0.1, 0.25, 1),
              transform 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.card:hover {
  box-shadow: var(--shadow-pop);
  transform: translateY(-2px);
}

.card:active {
  transform: translateY(0) scale(0.98);
}
```

**Note:** On mobile, skip hover effects. Use `active` state only.

---

### 4. Toast Show/Hide

**Show:**
- Duration: `200ms`
- Easing: `ease-soft`
- Transform: `translateY(8px)` → `translateY(0)`
- Opacity: `0` → `1`

**Hide:**
- Duration: `150ms`
- Easing: `ease-emphasis`
- Transform: `translateY(0)` → `translateY(8px)`
- Opacity: `1` → `0`

**CSS Example:**
```css
.toast {
  transform: translateY(8px);
  opacity: 0;
  transition: transform 200ms cubic-bezier(0.25, 0.1, 0.25, 1),
              opacity 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.toast.visible {
  transform: translateY(0);
  opacity: 1;
}
```

**Framer Motion Example:**
```tsx
<motion.div
  initial={{ y: 8, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  exit={{ y: 8, opacity: 0 }}
  transition={{
    duration: 0.2,
    ease: [0.25, 0.1, 0.25, 1]
  }}
>
```

---

### 5. Marker Spark Pulse

**Duration:** `1000ms` (infinite)
**Easing:** `ease-soft`
**Properties:** Scale and opacity pulse

**CSS Example:**
```css
@keyframes spark-pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.1);
    opacity: 1;
  }
}

.marker-spark {
  animation: spark-pulse 1000ms cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
}
```

**Framer Motion Example:**
```tsx
<motion.div
  animate={{
    scale: [1, 1.1, 1],
    opacity: [0.8, 1, 0.8]
  }}
  transition={{
    duration: 1,
    repeat: Infinity,
    ease: [0.25, 0.1, 0.25, 1]
  }}
>
```

---

### 6. Button Press/Active

**Duration:** `100ms`
**Easing:** `ease-emphasis`
**Properties:** Scale down slightly

**CSS Example:**
```css
.button {
  transition: transform 100ms cubic-bezier(0.2, 0, 0, 1);
}

.button:active {
  transform: scale(0.98);
}
```

**Framer Motion Example:**
```tsx
<motion.button
  whileTap={{ scale: 0.98 }}
  transition={{ duration: 0.1, ease: [0.2, 0, 0, 1] }}
>
```

---

### 7. Input Focus

**Duration:** `200ms`
**Easing:** `ease-soft`
**Properties:** Border color, shadow ring

**CSS Example:**
```css
.input {
  transition: border-color 200ms cubic-bezier(0.25, 0.1, 0.25, 1),
              box-shadow 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.input:focus {
  border-color: var(--color-reciprocity);
  box-shadow: var(--shadow-focus-ring);
}
```

---

## Implementation Examples

### CSS Transition Utility

```css
.transition-soft {
  transition: all 200ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.transition-fast {
  transition: all 120ms cubic-bezier(0.25, 0.1, 0.25, 1);
}

.transition-slow {
  transition: all 320ms cubic-bezier(0, 0, 0, 1);
}
```

### React Hook for Motion

```tsx
import { useReducedMotion } from 'framer-motion'

export function useMotion() {
  const prefersReducedMotion = useReducedMotion()
  
  return {
    duration: {
      fast: prefersReducedMotion ? 0 : 0.12,
      normal: prefersReducedMotion ? 0 : 0.2,
      slow: prefersReducedMotion ? 0 : 0.32,
    },
    ease: {
      soft: [0.25, 0.1, 0.25, 1],
      emphasis: [0.2, 0, 0, 1],
      decelerate: [0, 0, 0, 1],
    }
  }
}
```

### Respect Reduced Motion

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Anti-Patterns (What NOT to Do)

❌ **Overshooty animations** - No bouncy, springy effects  
❌ **Aggressive motion** - Nothing that feels jarring or attention-grabbing  
❌ **Decorative animations** - No motion just for the sake of motion  
❌ **Long durations** - Nothing over 400ms unless absolutely necessary  
❌ **Complex sequences** - Keep it simple, one thing at a time  
❌ **Ignoring reduced motion** - Always respect user preferences  

---

## Motion Checklist

When implementing motion, ask:

- [ ] Does this serve a purpose?
- [ ] Is it fast enough to feel responsive?
- [ ] Is it slow enough to feel intentional?
- [ ] Does it respect `prefers-reduced-motion`?
- [ ] Does it feel calm, not aggressive?
- [ ] Is it consistent with other motion in the app?

---

*Motion should feel like trust moving—gentle, purposeful, and real.*
