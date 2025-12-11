# Component Implementation Guide
## Hear About Us - Full App Component Set

> **"Give Cursor a full box of Lego bricks"**  
> Complete React/TypeScript component library ready for implementation

---

## Architecture Overview

```
/components
  /layout          - App shells, headers, navigation
  /ui              - Primitive components (atoms)
  /data            - Analytics & visualization components
  /domain          - Product-specific components
```

---

## Component Catalog

### Layout Components

#### `AppShell`
Mobile-first app wrapper with sticky header + bottom nav.

**Props:**
- `title?: string` - Header title
- `children: ReactNode` - Main content
- `bottomNav?: ReactNode` - Bottom navigation component
- `showHeader?: boolean` - Toggle header visibility
- `rightAction?: ReactNode` - Action button in header

#### `ScreenHeader`
Used inside sub-screens when you don't want the global header.

**Props:**
- `title: string` - Screen title
- `subtitle?: string` - Optional subtitle
- `rightAction?: ReactNode` - Action button

#### `BottomNav`
Fixed bottom navigation bar.

**Props:**
- `items: BottomNavItem[]` - Navigation items
- `activeKey: string` - Currently active route key

#### `PageSection`
Section wrapper with optional title/subtitle.

**Props:**
- `title?: string`
- `subtitle?: string`
- `children: ReactNode`
- `className?: string`

---

### UI Primitives

#### `Button`
Primary interactive element.

**Props:**
- `variant?: 'primary' | 'secondary' | 'ghost' | 'destructive'`
- `fullWidth?: boolean`
- `loading?: boolean`
- `leftIcon?: ReactNode`
- `rightIcon?: ReactNode`

#### `IconButton`
Icon-only button.

**Props:**
- `icon: ReactNode`
- `variant?: 'primary' | 'secondary' | 'ghost'`
- `size?: 'sm' | 'md' | 'lg'`
- `'aria-label': string` (required)

#### `Input`
Text input field.

**Props:**
- `label?: string`
- `error?: string`
- `helperText?: string`
- Standard input HTML attributes

#### `TextArea`
Multi-line text input.

**Props:**
- `label?: string`
- `error?: string`
- `helperText?: string`
- Standard textarea HTML attributes

#### `Card`
Container component.

**Props:**
- `padding?: 'sm' | 'md' | 'lg'`
- `interactive?: boolean` - Adds hover/click effects
- `as?: 'div' | 'button'` - Render as button if interactive
- `onClick?: () => void`

#### `Pill`
Small badge/pill component.

**Props:**
- `label: string`
- `variant?: 'neutral' | 'positive' | 'warning' | 'info'`

#### `Badge`
Badge component (similar to Pill but different styling).

**Props:**
- `children: ReactNode`
- `variant?: 'default' | 'positive' | 'warning' | 'danger' | 'info'`

#### `Avatar`
User avatar with fallback initials.

**Props:**
- `src?: string` - Image URL
- `alt?: string`
- `name?: string` - For initials fallback
- `size?: 'sm' | 'md' | 'lg'`

#### `Toggle`
Toggle switch component.

**Props:**
- `checked: boolean`
- `onChange: (checked: boolean) => void`
- `label?: string`
- `size?: 'sm' | 'md'`

#### `StatTile`
Statistic display tile.

**Props:**
- `label: string`
- `value: string | number`
- `delta?: string` - Change indicator
- `hint?: string` - Additional info
- `variant?: 'default' | 'highlight'`

#### `BottomSheet`
Slide-up panel (mobile-first).

**Props:**
- `isOpen: boolean`
- `onClose: () => void`
- `children: ReactNode`
- `title?: string`

#### `Toast`
Temporary notification.

**Props:**
- `message: string`
- `visible: boolean`

#### `EmptyState`
Empty state display.

**Props:**
- `title: string`
- `description?: string`
- `action?: ReactNode`

---

### Data Components

#### `MiniChart`
Simple line chart component.

**Props:**
- `data: number[]` - Array of values
- `width?: number` - Default: 100
- `height?: number` - Default: 40
- `color?: string` - Default: '#3A8BFF'

#### `Sparkline`
Minimal trend line.

**Props:**
- `data: number[]`
- `width?: number` - Default: 80
- `height?: number` - Default: 20
- `showArea?: boolean` - Show filled area

#### `MetricRow`
Row with label, value, and optional sparkline.

**Props:**
- `label: string`
- `value: string | number`
- `trend?: number[]` - For sparkline
- `delta?: string`
- `variant?: 'default' | 'highlight'`

---

### Domain Components

#### `MarkerCard`
Displays a Marker card preview.

**Props:**
- `businessName: string`
- `message?: string` - Default: "I'd vouch for this brand."
- `color?: string` - Hex color
- `compact?: boolean`

#### `MarkerEditor`
Editor for creating/editing Markers.

**Props:**
- `businessName: string`
- `initialMessage?: string`
- `onChangeMessage?: (value: string) => void`
- `onSave?: () => void`

#### `ShareSheet`
Bottom sheet for sharing Markers.

**Props:**
- `isOpen: boolean`
- `onClose: () => void`
- `title?: string`
- `url?: string`
- `onShare?: (method: 'native' | 'copy' | 'sms' | 'email') => void`

#### `TrustEventItem`
Individual trust event in feed.

**Props:**
- `type: TrustEventType` - 'marker_shared' | 'intro_clicked' | 'intro_converted' | 'merchant_onboarded'
- `description: string`
- `timestamp: string` - Preformatted (e.g., "2h ago")
- `city?: string`
- `statusLabel?: string`
- `statusVariant?: 'neutral' | 'positive' | 'info'`

#### `TrustEventFeed`
Feed of trust events.

**Props:**
- `events: TrustEventItemProps[]`
- `emptyMessage?: string`

#### `LedgerSummary`
Home screen hero with WIS and stats.

**Props:**
- `wisValue: number`
- `introsCount: number`
- `advocatesCount: number`
- `conversionsCount: number`

#### `LedgerFunnel`
Conversion funnel visualization.

**Props:**
- `stages: Array<{ label: string; value: number; percentage: number }>`

#### `IntroListItem`
Individual intro in list.

**Props:**
- `advocateName?: string` - Default: "Anonymous advocate"
- `recipientHint?: string`
- `channel: 'sms' | 'email' | 'link' | 'qr'`
- `status: 'started' | 'shared' | 'clicked' | 'converted'`
- `createdAt: string`

#### `IntroList`
List of introductions.

**Props:**
- `intros: IntroListItemProps[]`
- `emptyMessage?: string`

#### `AdvocateListItem`
Individual advocate in list.

**Props:**
- `name: string`
- `avatar?: string`
- `totalIntros: number`
- `conversions: number`
- `lastActive?: string`
- `trustScore?: number`

#### `AdvocateList`
List of advocates.

**Props:**
- `advocates: AdvocateListItemProps[]`
- `emptyMessage?: string`

#### `AiNarrativeCard`
AI-generated narrative from "The Listener".

**Props:**
- `title?: string`
- `body: string`
- `contextLabel?: string` - e.g., "This week in warm intros"
- `timestamp?: string`

---

## Usage Patterns

### Basic Page Structure

```tsx
import { AppShell } from '@/components/layout/AppShell'
import { BottomNav } from '@/components/layout/BottomNav'

export default function HomePage() {
  return (
    <AppShell
      title="Trust Ledger"
      bottomNav={
        <BottomNav
          items={navItems}
          activeKey="home"
        />
      }
    >
      {/* Page content */}
    </AppShell>
  )
}
```

### Form Pattern

```tsx
import { Input } from '@/components/ui/Input'
import { TextArea } from '@/components/ui/Textarea'
import { Button } from '@/components/ui/Button'

<form className="space-y-4">
  <Input label="Name" required />
  <TextArea label="Message" rows={3} />
  <Button type="submit" fullWidth>Submit</Button>
</form>
```

### List Pattern

```tsx
import { IntroList } from '@/components/domain/IntroList'

<IntroList
  intros={intros}
  emptyMessage="No introductions yet"
/>
```

### Card Pattern

```tsx
import { Card } from '@/components/ui/Card'
import { StatTile } from '@/components/ui/StatTile'

<Card padding="md">
  <StatTile
    label="Total Intros"
    value={42}
    variant="highlight"
  />
</Card>
```

---

## Design Principles

1. **Mobile-First**: All components designed for mobile, scaled up
2. **Composable**: Small, focused components that compose well
3. **Type-Safe**: Full TypeScript interfaces
4. **Accessible**: ARIA labels, keyboard navigation, focus states
5. **Consistent**: Uses design tokens throughout
6. **Warm & Trust-Centric**: Soft minimalism, gentle motion

---

## Cursor Implementation Prompt

When implementing or extending components, use this prompt:

```text
You are implementing the Hear About Us component library in a Next.js 14 + Tailwind + TypeScript project.

Goals:
- Mobile-first, app-like UI for merchants and advocates.
- Shared design language from landing page to app.
- Components must be small, composable, well-typed.
- Use the tokens defined in tailwind.config (reciprocity, gold, slate, etc).

Architecture:
- /components/layout for shells (AppShell, BottomNav, ScreenHeader, etc.)
- /components/ui for primitives (Button, Input, Card, Pill, StatTile, Modal, Toast, Skeleton, Tabs, Toggle, Avatar, etc.)
- /components/domain for product-specific components (MarkerCard, MarkerEditor, ShareSheet, LedgerSummary, IntroListItem, TrustEventItem, AiNarrativeCard, EmptyState, etc.)
- /components/data for small charts like Sparkline/MiniChart.

Constraints:
- Default to mobile-first layout.
- Use min-h-screen, sticky headers, and a fixed bottom nav for app views.
- Keep components visually calm and uncluttered, with generous spacing and readable typography.
- Follow TypeScript interfaces similar to the ones already provided.
- Do not introduce design that contradicts the "soft minimalism, warm transparency, gentle motion, quiet confidence" aesthetic.

When building or modifying components:
- Keep props simple and explicit.
- Avoid unnecessary generic complexity.
- Compose components instead of nesting excessive logic.
- Always design for one primary action per screen.
- Respect the emotional tone: trust-centric, warm, non-pushy.
```

---

## File Structure

```
components/
├── layout/
│   ├── AppShell.tsx
│   ├── ScreenHeader.tsx
│   ├── BottomNav.tsx
│   └── PageSection.tsx
├── ui/
│   ├── Button.tsx
│   ├── IconButton.tsx
│   ├── Input.tsx
│   ├── TextArea.tsx
│   ├── Card.tsx
│   ├── Badge.tsx
│   ├── Pill.tsx
│   ├── StatTile.tsx
│   ├── Modal.tsx
│   ├── BottomSheet.tsx
│   ├── Toast.tsx
│   ├── Skeleton.tsx
│   ├── Tabs.tsx
│   ├── Toggle.tsx
│   └── Avatar.tsx
├── data/
│   ├── MiniChart.tsx
│   ├── Sparkline.tsx
│   └── MetricRow.tsx
└── domain/
    ├── MarkerCard.tsx
    ├── MarkerEditor.tsx
    ├── ShareSheet.tsx
    ├── TrustEventItem.tsx
    ├── TrustEventFeed.tsx
    ├── LedgerSummary.tsx
    ├── LedgerFunnel.tsx
    ├── AdvocateListItem.tsx
    ├── AdvocateList.tsx
    ├── IntroListItem.tsx
    ├── IntroList.tsx
    ├── EmptyState.tsx
    └── AiNarrativeCard.tsx
```

---

*All components are ready for implementation. Use the Cursor prompt above when building or extending the library.*
