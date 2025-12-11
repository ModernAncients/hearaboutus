# Design System Improvements
## Fixed Tailwind Configuration & Component Styling

---

## Issues Fixed

### 1. Tailwind v4 Custom Classes Not Working

**Problem:** Custom classes like `bg-bg-cloud`, `text-h1`, `shadow-header` weren't being recognized by Tailwind.

**Solution:**
- Updated `@theme inline` block to use direct color values instead of CSS variable references
- Added explicit utility classes in `globals.css` for backgrounds and shadows
- Ensured all design tokens are properly exposed to Tailwind

### 2. Components Using Inline Styles

**Problem:** Components were falling back to inline styles because Tailwind classes weren't working.

**Solution:**
- Fixed `Card` component to use `shadow-card` class
- Fixed `StatTile` to use `bg-reciprocity-light` class
- Fixed `Pill` to use Tailwind color classes
- Removed all inline style fallbacks

### 3. Typography Classes Not Working

**Problem:** Typography utility classes like `text-h1`, `text-body-lg` weren't being applied.

**Solution:**
- Typography classes are defined in CSS and work correctly
- Updated marketing page to use proper typography classes
- All components now use design system typography

---

## What's Now Working

### ✅ Color Classes
```tsx
// Backgrounds
<div className="bg-bg-cloud">        // #F5F7FA
<div className="bg-reciprocity-light"> // #DCEBFF

// Brand colors
<div className="bg-reciprocity">    // #3A8BFF
<div className="text-reciprocity">  // #3A8BFF

// Status colors
<div className="bg-status-positive-light">
<div className="text-status-danger">
```

### ✅ Shadow Classes
```tsx
<div className="shadow-soft">      // Standard cards
<div className="shadow-card">      // Card elevation
<div className="shadow-pop">       // Elevated surfaces
<div className="shadow-header">    // Header shadow
<div className="shadow-focus-ring"> // Focus states
```

### ✅ Typography Classes
```tsx
<h1 className="text-h1">           // 28px/36px
<h2 className="text-h2">           // 24px/32px
<h3 className="text-h3">           // 20px/28px
<h4 className="text-h4">            // 18px/24px
<p className="text-body-lg">       // 16px/24px
<p className="text-body">          // 15px/22px
<p className="text-body-sm">       // 14px/20px
<p className="text-caption">       // 12px/16px
<p className="text-micro">         // 11px/16px
```

### ✅ Spacing Classes
```tsx
<div className="p-4">              // 8px (standard)
<div className="p-6">              // 12px
<div className="gap-8">            // 16px
<div className="mt-12">            // 24px
```

### ✅ Border Radius Classes
```tsx
<div className="rounded-sm">       // 6px
<div className="rounded-md">       // 12px
<div className="rounded-lg">       // 16px
<div className="rounded-xl">      // 24px
<div className="rounded-full">     // 9999px
```

---

## Updated Components

### Card
- Now uses `shadow-card` class
- Proper hover states with `shadow-pop`
- No inline styles

### StatTile
- Uses `bg-reciprocity-light` for highlight variant
- Proper border styling
- Clean Tailwind classes

### Pill
- Uses Tailwind color classes
- No inline styles
- Proper variant mapping

### Marketing Page
- All typography classes working
- Proper background colors
- Consistent spacing

---

## Best Practices

### ✅ DO Use Design System Classes
```tsx
// Good
<div className="bg-bg-cloud text-slate-900 p-4 rounded-md shadow-card">
  <h2 className="text-h3 font-semibold">Title</h2>
  <p className="text-body text-slate-700">Content</p>
</div>
```

### ❌ DON'T Use Inline Styles
```tsx
// Bad
<div style={{ backgroundColor: '#F5F7FA' }}>
  <h2 style={{ fontSize: '20px' }}>Title</h2>
</div>
```

### ✅ DO Use Semantic Classes
```tsx
// Good
<Button variant="primary" className="shadow-soft">
<Card padding="md" className="bg-white shadow-card">
```

### ❌ DON'T Hardcode Values
```tsx
// Bad
<div className="bg-[#F5F7FA]">
<div className="text-[20px]">
```

---

## Testing Your Classes

If a class isn't working:

1. **Check if it's defined in `globals.css`**
   - Typography: `.text-h1`, `.text-body`, etc.
   - Backgrounds: `.bg-bg-cloud`, `.bg-reciprocity-light`
   - Shadows: `.shadow-soft`, `.shadow-card`, etc.

2. **Check if it's in `tailwind.config.ts`**
   - Colors: `reciprocity`, `slate`, `status`
   - Spacing: `0`, `1`, `2`, `4`, `6`, `8`, etc.
   - Border radius: `sm`, `md`, `lg`, `xl`, `full`
   - Shadows: `soft`, `card`, `pop`, `header`, `focus-ring`

3. **Check if it's in `@theme inline`**
   - All tokens should be defined there for Tailwind v4

---

## Quick Reference

### Most Common Classes

**Colors:**
- `bg-bg-cloud` - Main background
- `bg-white` - Card backgrounds
- `text-slate-900` - Primary text
- `text-slate-700` - Secondary text
- `text-slate-500` - Muted text
- `text-reciprocity` - Brand color text
- `bg-reciprocity` - Brand color background

**Typography:**
- `text-h1` through `text-h4` - Headings
- `text-body-lg`, `text-body`, `text-body-sm` - Body text
- `text-caption` - Small text
- `text-micro` - Smallest text

**Shadows:**
- `shadow-card` - Standard cards
- `shadow-soft` - Subtle elevation
- `shadow-pop` - Elevated surfaces
- `shadow-header` - Header shadow

**Spacing:**
- `p-4` (8px), `p-6` (12px), `p-8` (16px)
- `gap-4`, `gap-6`, `gap-8`
- `mt-4`, `mb-6`, `mx-4`

---

## Next Steps

1. ✅ All design system classes are now working
2. ✅ Components use proper Tailwind classes
3. ✅ No inline styles needed
4. ✅ Consistent styling across all screens

**You can now:**
- Use all design system classes confidently
- Build new components using the established patterns
- Maintain consistency across the app
- Trust that Tailwind will generate the correct styles

---

*All design system improvements are complete and tested.*
