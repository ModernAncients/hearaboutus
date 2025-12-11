# Hear About Us Design System
## Complete Visual & Interaction Language

> "Small gestures, beautifully held."

---

## Table of Contents

1. [Philosophy & Principles](#philosophy--principles)
2. [Atomic Design Tokens](#atomic-design-tokens)
3. [Typography System](#typography-system)
4. [Component Library](#component-library)
5. [Patterns & UX Frameworks](#patterns--ux-frameworks)
6. [Layout System](#layout-system)
7. [Brand Expression](#brand-expression)
8. [Accessibility](#accessibility)
9. [Governance](#governance)

---

## Philosophy & Principles

### Core Values

**Hear About Us** is a reciprocity network and trust infrastructure platform. Every design decision must embody:

- **Warmth**: Human connection, relational clarity, gentle presence
- **Clarity**: Precision simplicity, immediate understanding, focused communication
- **Trust**: Visual expression of trust movement, sincerity, reliability
- **Confidence**: Quiet sophistication, modern craft, calm assurance
- **Connection**: Relational warmth, gentle motion, human-centered interactions

### Emotional Tone

- **Warm minimalism**: Clean without coldness, simple without sterility
- **Gentle motion**: Fluent, organic, reassuring, never flashy
- **Quiet confidence**: Professional without pretension, modern without trend-chasing
- **Relational clarity**: Information hierarchy that supports human understanding
- **Precision simplicity**: Every element serves a purpose, nothing extraneous

### Design Principles

1. **Mobile-First**: Every component designed for mobile, scaled up
2. **Touch-Optimized**: Minimum 44x44px tap targets, generous spacing
3. **App-Like**: Native-feeling interactions through mobile web
4. **Clutter-Free**: Calm, focused, purposeful information density
5. **Emotionally Resonant**: Visual language that feels warm and trustworthy
6. **Accessible**: WCAG 2.1 AA minimum, cognitive load minimization
7. **Consistent**: Single source of truth for all design decisions

---

## Atomic Design Tokens

### A. Color Tokens

#### Primary Palette: Reciprocity Blue

The primary color represents trust, connection, and the movement of reciprocity.

- **Reciprocity 900** (Deep Trust): `#1A3A6B` - Darkest, for text on light backgrounds
- **Reciprocity 800** (Trust Depth): `#2A4A7B` - Dark variant
- **Reciprocity 700** (Trust Core): `#3A5A8B` - Standard dark
- **Reciprocity 600** (Trust Base): `#3A8BFF` - **Primary brand color**
- **Reciprocity 500** (Trust Light): `#5AA3FF` - Hover states
- **Reciprocity 400** (Trust Soft): `#7AB3FF` - Light backgrounds
- **Reciprocity 300** (Trust Gentle): `#9AC3FF` - Subtle accents
- **Reciprocity 200** (Trust Whisper): `#BAD3FF` - Very light backgrounds
- **Reciprocity 100** (Trust Mist): `#DAE3FF` - Lightest backgrounds
- **Reciprocity 50** (Trust Cloud): `#F0F5FF` - Subtle tinting

**Usage Rules:**
- Primary actions, links, active states: Reciprocity 600
- Hover states: Reciprocity 500
- Focus rings: Reciprocity 400 with 20% opacity
- Backgrounds: Reciprocity 50-200
- Text on reciprocity: White or Midnight

#### Secondary Palette: Gold Warmth

Represents warmth, generosity, and the human touch in reciprocity.

- **Gold 900** (Deep Warmth): `#8B6A3A` - Darkest
- **Gold 800** (Warmth Depth): `#9B7A4A` - Dark variant
- **Gold 700** (Warmth Core): `#AB8A5A` - Standard dark
- **Gold 600** (Warmth Base): `#E5B76A` - **Secondary brand color**
- **Gold 500** (Warmth Light): `#E8C17A` - Hover states
- **Gold 400** (Warmth Soft): `#EBCB8A` - Light backgrounds
- **Gold 300** (Warmth Gentle): `#EED59A` - Subtle accents
- **Gold 200** (Warmth Whisper): `#F1DFAA` - Very light backgrounds
- **Gold 100** (Warmth Mist): `#F4E9BA` - Lightest backgrounds
- **Gold 50** (Warmth Cloud): `#F9F5E8` - Subtle tinting

**Usage Rules:**
- Accent highlights, success states, special emphasis: Gold 600
- Hover states: Gold 500
- Backgrounds: Gold 50-200
- Text on gold: Midnight or Slate 700

#### Neutral Palette: Slate Ranges

Foundation for text, backgrounds, and structural elements.

- **Midnight** (Primary Text): `#1A1C1E` - Main text color
- **Slate 900**: `#0F1113` - Darkest, rarely used
- **Slate 800**: `#1A1C1E` - Same as Midnight
- **Slate 700**: `#2F3742` - Secondary text, strong emphasis
- **Slate 600**: `#4A5568` - Tertiary text
- **Slate 500**: `#6A7280` - Muted text, placeholders
- **Slate 400**: `#9CA3AF` - Disabled text, borders
- **Slate 300**: `#C6CBD4` - Light borders, dividers
- **Slate 200**: `#E2E8F0` - Very light borders
- **Slate 100**: `#F1F5F9` - Subtle backgrounds
- **Slate 50**: `#F8FAFC` - Lightest backgrounds
- **Cloud** (Primary Background): `#F5F7FA` - Main background color

**Usage Rules:**
- Body text: Midnight (Slate 800)
- Secondary text: Slate 700
- Tertiary text: Slate 500
- Placeholders: Slate 500
- Borders: Slate 300
- Dividers: Slate 200
- Backgrounds: Cloud or Slate 50-100
- Disabled: Slate 400

#### Background Palette

- **Cloud** (Light Background): `#F5F7FA` - Default app background
- **White**: `#FFFFFF` - Cards, modals, elevated surfaces
- **Midnight** (Dark Background): `#1A1C1E` - Dark mode primary (future)
- **Midnight 800**: `#2A2C2E` - Dark mode secondary (future)

#### Status Colors

- **Success**: `#10B981` (Green 500) - Positive actions, confirmations
- **Success Light**: `#D1FAE5` (Green 100) - Success backgrounds
- **Warning**: `#F59E0B` (Amber 500) - Cautions, pending states
- **Warning Light**: `#FEF3C7` (Amber 100) - Warning backgrounds
- **Error**: `#EF4444` (Red 500) - Errors, destructive actions
- **Error Light**: `#FEE2E2` (Red 100) - Error backgrounds
- **Info**: `#3A8BFF` (Reciprocity 600) - Informational messages
- **Info Light**: `#DAE3FF` (Reciprocity 100) - Info backgrounds

#### Opacity Variations

All colors support opacity modifiers:
- `/[0.05]` - Subtle tinting
- `/[0.10]` - Light overlays
- `/[0.20]` - Focus rings, hover states
- `/[0.40]` - Medium overlays
- `/[0.60]` - Strong overlays
- `/[0.80]` - Heavy overlays
- `/[0.90]` - Near-opaque overlays

### B. Radii Tokens

Curve language that feels soft and approachable.

- **None**: `0px` - Sharp corners (rarely used)
- **XS**: `4px` - Small badges, tags
- **SM**: `6px` - Small buttons, inputs, chips
- **MD**: `12px` - Standard buttons, cards, inputs
- **LG**: `16px` - Large cards, modals
- **XL**: `20px` - Extra large cards, hero sections
- **2XL**: `24px` - Maximum softness, special cards
- **Full**: `9999px` - Pills, avatars, fully rounded

**Usage Rules:**
- Buttons: SM or MD
- Inputs: MD
- Cards: MD or LG
- Modals: LG
- Badges/Tags: XS or SM
- Avatars: Full
- Pills: Full

### C. Shadow Tokens

Soft, ambient shadows that create gentle depth without harshness.

- **None**: No shadow
- **Subtle**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)` - Minimal elevation
- **Soft**: `0 4px 12px 0 rgba(0, 0, 0, 0.06)` - Standard cards
- **Medium**: `0 8px 24px 0 rgba(0, 0, 0, 0.08)` - Elevated cards
- **Large**: `0 12px 32px 0 rgba(0, 0, 0, 0.10)` - Modals, sheets
- **Hover**: `0 6px 16px 0 rgba(58, 139, 255, 0.12)` - Interactive hover
- **Focus**: `0 0 0 3px rgba(58, 139, 255, 0.20)` - Focus rings
- **Inner**: `inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)` - Pressed states

**Usage Rules:**
- Cards: Soft
- Hover states: Hover shadow
- Modals/Sheets: Large
- Focus states: Focus ring
- Pressed buttons: Inner shadow

### D. Typography Tokens

#### Font Family

- **Primary**: Inter (via Next.js Google Fonts)
- **Fallback**: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`

**Rationale**: Inter is modern, readable, warm, and optimized for screens. It balances professionalism with approachability.

#### Font Weights

- **Light**: 300 - Rarely used, for large display text
- **Regular**: 400 - Body text, default
- **Medium**: 500 - Emphasis, labels
- **Semibold**: 600 - Headings, strong emphasis
- **Bold**: 700 - Primary headings, maximum emphasis

#### Line Heights

- **Tight**: 1.1 - Large headings only
- **Snug**: 1.2 - Headings
- **Normal**: 1.3 - Subheadings
- **Relaxed**: 1.5 - Body text (default)
- **Loose**: 1.6 - Long-form content

#### Letter Spacing

- **Tighter**: `-0.02em` - Large headings
- **Normal**: `0em` - Default
- **Wide**: `0.02em` - Uppercase labels, small caps
- **Wider**: `0.05em` - Uppercase headings

#### Typography Scale (Mobile-First)

**Display (Future)**
- Size: `3rem` (48px)
- Weight: 700
- Line Height: 1.1
- Letter Spacing: -0.02em
- Usage: Hero headlines (marketing only)

**H1 - Primary Heading**
- Mobile: `1.5rem` (24px)
- Desktop: `1.875rem` (30px)
- Weight: 700
- Line Height: 1.2
- Letter Spacing: -0.01em
- Usage: Page titles, major sections

**H2 - Section Heading**
- Mobile: `1.25rem` (20px)
- Desktop: `1.5rem` (24px)
- Weight: 600
- Line Height: 1.3
- Letter Spacing: 0em
- Usage: Section headers, card titles

**H3 - Subsection Heading**
- Mobile: `1.125rem` (18px)
- Desktop: `1.25rem` (20px)
- Weight: 600
- Line Height: 1.3
- Letter Spacing: 0em
- Usage: Subsections, list headers

**H4 - Minor Heading**
- Mobile: `1rem` (16px)
- Desktop: `1.125rem` (18px)
- Weight: 600
- Line Height: 1.4
- Letter Spacing: 0em
- Usage: Small sections, inline headings

**Body - Primary Text**
- Size: `1rem` (16px)
- Weight: 400
- Line Height: 1.5
- Letter Spacing: 0em
- Usage: Main content, descriptions

**Body Small - Secondary Text**
- Size: `0.875rem` (14px)
- Weight: 400
- Line Height: 1.5
- Letter Spacing: 0em
- Usage: Supporting text, metadata

**Caption - Tertiary Text**
- Size: `0.75rem` (12px)
- Weight: 400
- Line Height: 1.4
- Letter Spacing: 0.01em
- Usage: Labels, timestamps, fine print

**Microcopy - Smallest Text**
- Size: `0.625rem` (10px)
- Weight: 400
- Line Height: 1.3
- Letter Spacing: 0.02em
- Usage: Legal text, disclaimers (rare)

#### Semantic Typography Roles

- **Title**: H1 styling
- **Section Header**: H2 styling
- **Subsection**: H3 styling
- **Body**: Body styling
- **Small**: Body Small styling
- **Meta**: Caption styling
- **Label**: Caption with Medium weight

### E. Spacing & Layout Tokens

#### Spacing Scale (4px base unit)

- **0**: `0px` - No spacing
- **1**: `4px` - Tight spacing, icon padding
- **2**: `8px` - Small gaps, tight groups
- **3**: `12px` - Standard small spacing
- **4**: `16px` - Standard spacing, component padding
- **5**: `20px` - Medium spacing
- **6**: `24px` - Large spacing, section gaps
- **8**: `32px` - Extra large spacing
- **10**: `40px` - Section spacing
- **12**: `48px` - Major section spacing
- **16**: `64px` - Hero spacing (marketing)
- **20**: `80px` - Maximum spacing (marketing)

#### Usage Rules

**Internal Padding:**
- Buttons: 12px vertical, 16-24px horizontal
- Inputs: 12px vertical, 16px horizontal
- Cards: 16-20px all sides
- Modals: 24px all sides

**Vertical Rhythm:**
- Between related elements: 8-12px
- Between sections: 24-32px
- Between major sections: 48px

**Section Spacing:**
- Page padding: 16px (mobile), 24px (desktop)
- Section gaps: 24-32px
- Card gaps: 16-20px

**Grid Alignment:**
- Grid gaps: 16-20px
- Column gaps: 16px

**Tap Target Sizing:**
- Minimum: 44x44px (iOS/Android standard)
- Preferred: 48x48px
- Large actions: 56x56px

### F. Iconography Rules

#### Icon Style

- **Stroke Width**: 1.5-2px for standard icons, 2px for emphasis
- **Corner Radius**: 2px for geometric icons, fully rounded for organic
- **Grid System**: 24x24px standard, 20x20px small, 32x32px large
- **Metaphor Style**: Soft, relational, simple, human-centered
- **Visual Weight**: Medium - not too thin, not too bold

#### Standard Icon Set

**Navigation:**
- Home, Marker, Intros, Advocates, Settings

**Actions:**
- Share, Copy, Edit, Delete, Save, Cancel, Add, Remove

**Status:**
- Success, Error, Warning, Info, Loading

**Trust/Reciprocity:**
- Handshake, Gift, Heart, Star, Checkmark

**Data:**
- Chart, Graph, Trending, List, Grid

#### Icon Usage Rules

- Always pair with text labels on mobile
- Use 24x24px for standard contexts
- Use 20x20px for compact contexts
- Use 32x32px for hero/feature contexts
- Maintain consistent stroke width within set
- Use semantic colors (Reciprocity for primary, Slate for neutral)

### G. Motion Tokens

#### Easing Curves

- **Ease In**: `cubic-bezier(0.4, 0, 1, 1)` - Entering, appearing
- **Ease Out**: `cubic-bezier(0, 0, 0.2, 1)` - Exiting, disappearing
- **Ease In Out**: `cubic-bezier(0.4, 0, 0.2, 1)` - **Primary easing** - Smooth, natural
- **Gentle**: `cubic-bezier(0.25, 0.1, 0.25, 1)` - Extra smooth, organic
- **Bounce**: `cubic-bezier(0.68, -0.55, 0.265, 1.55)` - Playful, rare use

#### Durations

- **Instant**: `0ms` - No animation
- **Fast**: `100ms` - Micro-interactions, hover states
- **Quick**: `150ms` - Standard transitions
- **Normal**: `200ms` - **Primary duration** - Most transitions
- **Moderate**: `300ms` - Component transitions
- **Slow**: `400ms` - Page transitions, complex animations
- **Gentle**: `500ms` - Smooth, deliberate motion

#### Micro-Interactions

- **Hover**: 150ms ease-out, scale 1.02 or shadow lift
- **Active/Press**: 100ms ease-in, scale 0.98
- **Focus**: 200ms ease-in-out, ring appears
- **Toggle**: 200ms ease-in-out, smooth state change
- **Loading**: 1000ms ease-in-out infinite, gentle pulse

#### Component Transitions

- **Fade In**: 200ms ease-out, opacity 0→1
- **Slide Up**: 300ms ease-out, translateY(8px)→0, opacity 0→1
- **Slide Down**: 300ms ease-out, translateY(-8px)→0, opacity 0→1
- **Scale In**: 200ms ease-out, scale 0.95→1, opacity 0→1
- **Modal Enter**: 300ms ease-out, scale 0.95→1, opacity 0→1
- **Modal Exit**: 200ms ease-in, scale 1→0.95, opacity 1→0

#### Feedback Animations

- **Success**: 300ms ease-out, scale 1→1.1→1, green flash
- **Error**: 200ms ease-out, shake (translateX -4px→4px→-4px→4px→0)
- **Pulse**: 1000ms ease-in-out infinite, opacity 0.5→1→0.5

#### Motion Principles

- All motion must feel **gentle, human, and purposeful**
- Never use motion for decoration
- Respect `prefers-reduced-motion` media query
- Use motion to guide attention, not distract
- Keep durations short (under 300ms for most interactions)
- Use easing curves that feel natural and organic

---

## Typography System

### Complete Typographic Scale

See [Typography Tokens](#d-typography-tokens) for full specifications.

### Usage Guidelines

#### Headlines

- **H1**: Use for page titles, major sections. Maximum one per page.
- **H2**: Use for section headers, card titles. Can have multiple per page.
- **H3**: Use for subsections, list headers.
- **H4**: Use sparingly for minor headings.

#### Body Text

- **Body**: Default for all content, descriptions, explanations.
- **Body Small**: Supporting text, metadata, secondary information.
- **Caption**: Labels, timestamps, fine print, helper text.

#### Accessibility Scaling

- Support user font size preferences (up to 200%)
- Maintain line height ratios at all sizes
- Ensure touch targets scale with text size
- Test with large text settings

#### Copywriting Tone Guidelines

**Voice:**
- Warm, minimal, relational
- Clear without being cold
- Confident without being arrogant
- Human without being casual

**Principles:**
- Use "you" and "your" to create connection
- Avoid jargon, explain when necessary
- Be concise but not terse
- Show, don't tell (let actions speak)
- Use active voice
- Celebrate small gestures

**Examples:**
- ✅ "Your Marker is ready to share"
- ❌ "Marker creation complete"
- ✅ "Share with someone you trust"
- ❌ "Distribute to network contacts"
- ✅ "Your gesture mattered"
- ❌ "Action recorded"

---

## Component Library

### Core Components

#### Button

**Purpose**: Primary interactive element for actions.

**Variants:**
- **Primary**: Main actions, CTAs. Reciprocity blue background, white text.
- **Secondary**: Secondary actions. White background, border, midnight text.
- **Ghost**: Tertiary actions, subtle. Transparent, reciprocity text.
- **Danger**: Destructive actions. Red background, white text.

**Sizes:**
- **Small**: 32px height, 12px horizontal padding, 14px text
- **Medium**: 44px height, 16px horizontal padding, 16px text (default)
- **Large**: 56px height, 24px horizontal padding, 18px text

**States:**
- Default: Standard styling
- Hover: Slight scale (1.02) or shadow lift, color shift
- Active/Pressed: Scale (0.98), inner shadow
- Focus: Focus ring (3px, reciprocity 400, 20% opacity)
- Disabled: 50% opacity, no pointer events

**Anatomy:**
- Padding: 12px vertical, 16-24px horizontal
- Border radius: SM (6px) or MD (12px)
- Font: Medium weight, appropriate size
- Icon support: Left, right, or icon-only

#### Input Field

**Purpose**: Text input for forms.

**Variants:**
- **Standard**: Default input styling
- **Error**: Red border, error message
- **Success**: Green border (optional)
- **Disabled**: Reduced opacity, no interaction

**States:**
- Default: Slate 300 border, cloud background
- Focus: Reciprocity 600 border, focus ring
- Error: Red 500 border, error message below
- Disabled: Slate 400 border, 50% opacity

**Anatomy:**
- Height: 44px minimum
- Padding: 12px vertical, 16px horizontal
- Border: 2px solid
- Border radius: MD (12px)
- Label: Above input, Medium weight, 14px
- Helper text: Below input, Caption styling, Slate 500
- Error text: Below input, Caption styling, Red 500

#### Select Dropdown

**Purpose**: Single or multiple selection from options.

**Variants:**
- **Standard**: Default dropdown
- **Searchable**: With search input
- **Multi-select**: Multiple selections

**States:**
- Same as Input field
- Open: Dropdown menu appears below
- Selected: Highlighted option

**Anatomy:**
- Same base as Input field
- Dropdown menu: White background, soft shadow, MD radius
- Options: 44px height, padding 12px horizontal
- Hover: Reciprocity 50 background
- Selected: Reciprocity 600 background, white text

#### Textarea

**Purpose**: Multi-line text input.

**Variants & States:**
- Same as Input field
- Resizable: Vertical only (default)

**Anatomy:**
- Min height: 100px
- Padding: 12px all sides
- Same border, radius, states as Input

#### Switch & Toggle

**Purpose**: Binary on/off control.

**Variants:**
- **Standard**: Default toggle
- **Large**: Larger touch target

**States:**
- Off: Slate 300 background, white circle
- On: Reciprocity 600 background, white circle
- Disabled: 50% opacity
- Focus: Focus ring

**Anatomy:**
- Width: 44px (standard), 52px (large)
- Height: 24px (standard), 28px (large)
- Border radius: Full (pill shape)
- Circle: 20px (standard), 24px (large)
- Transition: 200ms ease-in-out

#### Checkbox

**Purpose**: Single or multiple selection.

**Variants:**
- **Standard**: Default checkbox
- **Large**: Larger touch target

**States:**
- Unchecked: Slate 300 border, white background
- Checked: Reciprocity 600 background, white checkmark
- Indeterminate: Reciprocity 600 background, horizontal line
- Disabled: 50% opacity
- Focus: Focus ring

**Anatomy:**
- Size: 20x20px (standard), 24x24px (large)
- Border: 2px solid
- Border radius: SM (6px)
- Checkmark: White, 2px stroke
- Label: Body Small, left-aligned, 12px gap

#### Radio Button

**Purpose**: Single selection from group.

**Variants & States:**
- Similar to Checkbox
- Always circular (border radius: Full)

**Anatomy:**
- Size: 20x20px (standard), 24x24px (large)
- Border: 2px solid
- Selected: Reciprocity 600 background, white center dot (8px)

#### Tabs

**Purpose**: Horizontal navigation between related content.

**Variants:**
- **Standard**: Default tabs
- **Pills**: Rounded pill style
- **Underline**: Underline indicator

**States:**
- Default: Slate 500 text
- Active: Reciprocity 600 text, indicator
- Hover: Reciprocity 500 text
- Disabled: Slate 400 text, 50% opacity

**Anatomy:**
- Height: 44px minimum
- Padding: 12px horizontal, 8px vertical
- Indicator: 2px height, Reciprocity 600
- Gap: 8px between tabs

#### Bottom Navigation Bar

**Purpose**: Primary app navigation (mobile-first).

**Variants:**
- **Standard**: 5 items maximum
- **Compact**: 4 items

**States:**
- Default: Slate 500 icon, Slate 500 text
- Active: Reciprocity 600 icon, Reciprocity 600 text
- Badge: Small red dot or number badge

**Anatomy:**
- Height: 64px (includes safe area)
- Background: White, soft shadow (top)
- Items: Icon (24x24px) + Label (Caption, 12px)
- Padding: 8px vertical, 12px horizontal per item
- Safe area: 8px bottom padding for iOS

#### Top Bar / App Header

**Purpose**: Page title, actions, navigation.

**Variants:**
- **Standard**: Title + actions
- **Back**: Back button + title + actions
- **Search**: Search input + actions

**States:**
- Sticky: Fixed to top on scroll
- Transparent: Over content (marketing)

**Anatomy:**
- Height: 56px
- Padding: 16px horizontal
- Background: White or transparent
- Shadow: Subtle (when sticky)
- Title: H2 styling, Semibold
- Actions: Icon buttons, 44x44px

### Structural Components

#### Card

**Purpose**: Container for related content.

**Variants:**
- **Standard**: Default card
- **Elevated**: Medium shadow
- **Interactive**: Hover effects, clickable
- **Gradient**: Gradient background

**States:**
- Default: White background, soft shadow
- Hover: Shadow lift (if interactive)
- Active: Scale 0.98 (if interactive)

**Anatomy:**
- Padding: 16-20px all sides
- Border radius: MD (12px) or LG (16px)
- Shadow: Soft (standard), Medium (elevated)
- Background: White (default), gradients (special)

#### Sheet

**Purpose**: Slide-up panel (mobile-first).

**Variants:**
- **Standard**: Default sheet
- **Full**: Full screen
- **Half**: Half screen (desktop)

**States:**
- Closed: Off-screen bottom
- Open: Slide up animation
- Dragging: Follows touch gesture

**Anatomy:**
- Background: White
- Border radius: LG (16px) top corners
- Handle: Drag indicator (top center)
- Padding: 24px
- Max height: 90vh
- Shadow: Large (top)

#### Modal

**Purpose**: Focused dialog overlay.

**Variants:**
- **Standard**: Default modal
- **Alert**: Confirmation dialogs
- **Full**: Full screen (mobile)

**States:**
- Closed: Scale 0.95, opacity 0
- Open: Scale 1, opacity 1
- Backdrop: Dark overlay (40% opacity)

**Anatomy:**
- Width: 90% (mobile), 480px (desktop)
- Padding: 24px
- Border radius: LG (16px)
- Background: White
- Shadow: Large
- Backdrop: Midnight, 40% opacity

#### Toast / Notification

**Purpose**: Temporary feedback messages.

**Variants:**
- **Success**: Green background
- **Error**: Red background
- **Warning**: Amber background
- **Info**: Reciprocity background

**States:**
- Enter: Slide up, fade in
- Exit: Slide down, fade out
- Auto-dismiss: 4-6 seconds

**Anatomy:**
- Position: Bottom center (mobile), top right (desktop)
- Width: 90% (mobile), 320px (desktop)
- Padding: 16px
- Border radius: MD (12px)
- Shadow: Medium
- Icon: Left side, 20x20px
- Message: Body Small
- Action: Optional button

#### Tooltip

**Purpose**: Contextual help text.

**Variants:**
- **Standard**: Default tooltip
- **Rich**: With title and description

**States:**
- Hidden: Opacity 0, pointer-events none
- Visible: Opacity 1, on hover/focus

**Anatomy:**
- Background: Midnight, 90% opacity
- Text: White, Caption
- Padding: 8px horizontal, 6px vertical
- Border radius: SM (6px)
- Arrow: 4px triangle
- Max width: 200px

#### Statistic Tile

**Purpose**: Display key metrics.

**Variants:**
- **Standard**: Default stat tile
- **Large**: Emphasized stat
- **Trend**: With trend indicator

**Anatomy:**
- Background: White
- Padding: 16-20px
- Border radius: MD (12px)
- Shadow: Soft
- Value: H1 or H2 styling, Bold
- Label: Caption, Slate 500
- Icon: Optional, 24x24px

#### List Item

**Purpose**: Row in a list.

**Variants:**
- **Standard**: Default list item
- **Interactive**: Clickable
- **Expandable**: With chevron
- **Avatar**: With avatar image

**States:**
- Default: White background
- Hover: Reciprocity 50 background (if interactive)
- Active: Scale 0.98 (if interactive)

**Anatomy:**
- Height: 64px minimum
- Padding: 16px horizontal, 12px vertical
- Border: Bottom border, Slate 200
- Avatar: 40x40px, left side
- Content: Title (Body, Semibold) + Subtitle (Body Small, Slate 500)
- Action: Right side, icon or button

#### Segmented Control

**Purpose**: Switch between related options.

**Variants:**
- **Standard**: Default segmented control
- **Pills**: Rounded pill style

**States:**
- Default: Slate 100 background
- Selected: White background, Reciprocity 600 text
- Hover: Slight lift

**Anatomy:**
- Height: 40px
- Border radius: MD (12px) or Full (pills)
- Background: Slate 100
- Selected: White, soft shadow
- Padding: 4px (internal)
- Text: Body Small, Medium weight

### Data Visualization Components

#### Micro Charts

**Purpose**: Small inline charts.

**Variants:**
- **Line**: Simple line chart
- **Bar**: Simple bar chart
- **Sparkline**: Minimal trend line

**Anatomy:**
- Height: 40-60px
- Width: 100% or fixed
- Color: Reciprocity 600
- Stroke: 2px
- Background: Transparent or Reciprocity 50

#### WIS Line Graph

**Purpose**: Display Warm Intro Strength over time.

**Anatomy:**
- Height: 200px (mobile), 300px (desktop)
- Background: White or transparent
- Line: Reciprocity 600, 3px stroke
- Area: Reciprocity 50 fill, gradient
- Grid: Slate 200, subtle
- Points: Reciprocity 600, 8px circles on hover
- Tooltip: Shows value on hover

#### Funnel Graph

**Purpose**: Visualize conversion funnel.

**Anatomy:**
- Vertical bars, decreasing width
- Colors: Reciprocity gradient (600→400)
- Labels: Left side, Body Small
- Values: Right side, Body, Semibold
- Spacing: 12px between stages

#### Trust Event Feed

**Purpose**: Chronological feed of trust events.

**Anatomy:**
- Vertical list, newest first
- Event card: White background, soft shadow
- Icon: Left side, 32x32px, Reciprocity 600
- Content: Title (Body, Semibold) + Description (Body Small) + Timestamp (Caption, Slate 500)
- Spacing: 16px between events
- Grouping: Same-day events grouped

#### Cluster Visualizations (v1 Simple)

**Purpose**: Show trust network clusters.

**Anatomy:**
- Node: Circle, 24-40px, Reciprocity 600
- Connection: Line, Slate 300, 1px
- Label: Body Small, below node
- Background: White or transparent
- Interactive: Tap to focus node

### Interactive Components

#### Marker Card Generator

**Purpose**: Preview and customize Marker.

**Variants:**
- **Preview**: Display mode
- **Edit**: Edit mode

**Anatomy:**
- Card: White background, LG radius
- Preview: Shows Marker with custom colors/copy
- Controls: Color picker, text input
- Actions: Save, Cancel, Share

#### Sharing UI

**Purpose**: Share Marker or content.

**Variants:**
- **Sheet**: Mobile slide-up
- **Modal**: Desktop dialog

**Anatomy:**
- Native share options: iOS/Android share sheet
- Custom options: Copy link, Email, SMS
- Preview: Marker card preview
- Actions: Share buttons, 64px height

#### Touch-Friendly Sliders

**Purpose**: Range input for values.

**Anatomy:**
- Track: Slate 200, 4px height, MD radius
- Fill: Reciprocity 600, 4px height
- Thumb: 24x24px, White, Reciprocity 600 border, soft shadow
- Labels: Min/max values, current value
- Height: 44px minimum touch target

#### Gesture-Support Components

**Purpose**: Swipeable lists, pull-to-refresh.

**Anatomy:**
- Swipeable: Reveals actions on swipe
- Actions: Red (delete), Reciprocity (edit), 80px width
- Pull-to-refresh: Loading indicator at top
- Haptic feedback: On swipe actions

### System Components

#### Loading States

**Purpose**: Indicate processing.

**Variants:**
- **Spinner**: Circular spinner
- **Skeleton**: Content placeholders
- **Progress**: Progress bar
- **Pulse**: Gentle pulse animation

**Anatomy:**
- Spinner: Reciprocity 600, 24x24px, 1s rotation
- Skeleton: Slate 200 background, shimmer effect
- Progress: Reciprocity 600, 4px height, animated
- Pulse: Opacity 0.5→1, 1s duration

#### Empty States

**Purpose**: Show when no content exists.

**Anatomy:**
- Icon: 64x64px, Slate 400
- Title: H3, Slate 700
- Description: Body, Slate 500
- Action: Optional button
- Centered: Vertical and horizontal center

#### Error States

**Purpose**: Display errors.

**Variants:**
- **Inline**: In form fields
- **Page**: Full page error
- **Toast**: Temporary error message

**Anatomy:**
- Icon: Red 500, 24x24px
- Title: H3, Midnight
- Message: Body, Slate 700
- Action: Retry button
- Color: Red 500 for errors

#### Success Feedback

**Purpose**: Confirm successful actions.

**Anatomy:**
- Icon: Green 500, 24x24px
- Message: Body, Midnight
- Animation: Scale 1→1.1→1, 300ms
- Toast: Auto-dismiss 3 seconds

#### Skeleton Loaders

**Purpose**: Content placeholders during loading.

**Variants:**
- **Text**: Lines of varying width
- **Card**: Card-shaped placeholder
- **Avatar**: Circular placeholder
- **List**: Multiple list item placeholders

**Anatomy:**
- Background: Slate 200
- Shimmer: White overlay, animated left-to-right
- Border radius: Matches target component
- Height: Matches target content

### AI Narrative Components

#### Story Cards

**Purpose**: Display AI-generated insights.

**Variants:**
- **Standard**: Default story card
- **Featured**: Emphasized story
- **Compact**: Condensed version

**Anatomy:**
- Background: White or Reciprocity 50
- Padding: 20px
- Border radius: LG (16px)
- Shadow: Soft
- Title: H3, Semibold
- Content: Body, multiple paragraphs
- Footer: Timestamp, "From The Listener" badge
- Icon: Optional, Reciprocity 600

#### Insights Blocks

**Purpose**: Highlighted insights.

**Anatomy:**
- Background: Gold 50 or Reciprocity 50
- Border: Left border, 4px, Gold 600 or Reciprocity 600
- Padding: 16px
- Icon: Left side, 24x24px
- Text: Body, Semibold
- Border radius: MD (12px)

#### Digest Sections

**Purpose**: Grouped insights summary.

**Anatomy:**
- Header: H2, "Weekly Digest" or similar
- Cards: Multiple story cards
- Spacing: 16px between cards
- Background: Cloud or White

#### Echo Modules

**Purpose**: Show trust event echoes/resonance.

**Anatomy:**
- Visual: Ripple effect, concentric circles
- Color: Reciprocity 600, decreasing opacity
- Animation: Gentle pulse, 2s duration
- Label: "Echo" or event count
- Size: 80-120px diameter

---

## Patterns & UX Frameworks

### A. Navigation

#### Mobile-First Bottom Navigation

**Structure:**
- Fixed to bottom, above safe area
- 5 items maximum (4 preferred)
- Icons + labels
- Active state: Reciprocity 600
- Inactive: Slate 500
- Badge support for notifications

**Items:**
- Home: Trust Ledger overview
- Marker: Create/edit Marker
- Intros: Warm introductions feed
- Advocates: Customer advocates
- Settings: Account settings

**Behavior:**
- Smooth transition on tap
- Haptic feedback (if available)
- Active state persists on page
- Badge clears on view

#### Stack-Based Screen Transitions

**Pattern:**
- New screen slides in from right
- Previous screen slides out to left
- Back button returns to previous
- Smooth 300ms ease-out animation

**Implementation:**
- Use Next.js router transitions
- Maintain navigation stack
- Support browser back button
- Deep linking support

#### Tab Views

**Pattern:**
- Horizontal tabs at top
- Content below
- Smooth content transition
- Active tab indicator

**Usage:**
- Settings sections
- Filter views
- Related content groups

#### Swipe Interactions

**Pattern:**
- Swipe left: Delete/reveal actions
- Swipe right: Archive/favorite
- Pull down: Refresh
- Swipe between tabs: Navigate

**Feedback:**
- Visual: Element follows finger
- Haptic: On action trigger
- Animation: Smooth return or dismiss

#### Sticky Headers

**Pattern:**
- Header sticks to top on scroll
- Shadow appears when sticky
- Smooth transition
- Maintains actions/back button

**Usage:**
- Long content pages
- Feeds
- Settings lists

### B. Onboarding

#### Multi-Step Business Creation

**Flow:**
1. Welcome screen
2. Business name
3. Business type/industry
4. Marker customization
5. First share

**Pattern:**
- Progress indicator (dots or steps)
- Back/Next buttons
- Skip option (where appropriate)
- Validation on each step
- Save progress

**Design:**
- One question per screen
- Large, clear inputs
- Helpful placeholder text
- Error messages inline
- Success confirmation

#### Marker Creation Flow

**Flow:**
1. Choose template or custom
2. Customize copy
3. Choose colors
4. Preview
5. Save and share

**Pattern:**
- Live preview
- Color presets + custom
- Copy suggestions
- Save as draft
- Share immediately option

#### Integrating Checkout Widget Instructions

**Flow:**
1. Explain widget concept
2. Show code snippet
3. Copy code button
4. Integration guide
5. Test widget

**Pattern:**
- Visual code examples
- Step-by-step guide
- Copy-to-clipboard
- Test mode
- Support link

### C. Trust Ledger UX

#### Hierarchical Information Clarity

**Structure:**
1. WIS Score (hero, large, prominent)
2. Key metrics (grid, 2x2)
3. Recent activity (feed)
4. Detailed views (drill-down)

**Visual Hierarchy:**
- Size: Larger = more important
- Color: Reciprocity = primary, Slate = secondary
- Position: Top = primary, bottom = secondary
- Spacing: More space = more emphasis

#### WIS Understanding at a Glance

**Display:**
- Large number (H1, 48-64px)
- Label: "Warm Intro Strength"
- Trend: Up/down arrow, percentage
- Context: "Growing strong" or "Start sharing"
- Color: Reciprocity gradient background

**Explanation:**
- Tooltip on tap: "WIS measures..."
- Help icon: Link to full explanation
- First-time: Brief onboarding overlay

#### Recap Storytelling

**Pattern:**
- AI-generated narrative
- Human language, not data
- "This week, you..."
- Visual: Story card format
- Action: "View full story"

**Tone:**
- Warm, personal
- Celebrate small wins
- Acknowledge growth
- Suggest next steps

#### Emotional Feel of "Trust Moving"

**Visual Language:**
- Gentle motion: Subtle animations
- Flow: Left-to-right, top-to-bottom
- Connection: Lines, arrows, paths
- Growth: Expanding circles, gradients
- Warmth: Gold accents, soft shadows

**Micro-Interactions:**
- Trust event: Gentle pulse
- New intro: Slide in animation
- WIS increase: Number animates up
- Share: Ripple effect

### D. Warm Intro Flow

#### Advocate Sharing UI

**Pattern:**
- Marker card preview
- Share options (native + custom)
- Recipient selection (if applicable)
- Message (optional)
- Send button

**Design:**
- Large, clear preview
- Native share sheet (iOS/Android)
- Custom options: Copy, Email, SMS
- Message input: Textarea
- Send: Primary button, 56px height

#### Friend Recipient View

**Pattern:**
- Marker card (full screen)
- Business info
- Advocate info (optional)
- CTA: "Learn more" or "Get started"
- Trust indicators

**Design:**
- Hero: Marker card
- Content: Business description, benefits
- Social proof: "Shared by [Name]"
- CTA: Large, prominent button
- Footer: Trust badges, privacy info

#### Micro-Affirmations

**Pattern:**
- After share: "Your gesture mattered"
- After intro: "You made a connection"
- After conversion: "You helped [Business] grow"

**Design:**
- Toast notification
- Gentle animation
- Gold or Reciprocity color
- Auto-dismiss 4 seconds
- Optional: Celebration animation

#### Device-Native Sharing Integrations

**Implementation:**
- Use Web Share API (if available)
- Fallback to custom sheet
- Support: Copy link, Email, SMS, Social
- Preview: Marker card image
- Metadata: Open Graph tags

### E. Trust Event Feed

#### Chronological Vertical Feed

**Structure:**
- Newest first
- Infinite scroll
- Pull-to-refresh
- Group by date
- Event cards

**Design:**
- Card: White, soft shadow, MD radius
- Spacing: 16px between events
- Date header: Sticky, Slate 500, Caption
- Event: Icon + content + timestamp

#### Subtle Storytelling Cues

**Visual:**
- Icons: Semantic, Reciprocity 600
- Typography: Hierarchy (title bold, description regular)
- Color: Reciprocity for positive, Slate for neutral
- Motion: Gentle slide-in

**Content:**
- Human language: "Sarah shared your Marker"
- Not: "Event: share, user: Sarah"
- Context: Why it matters
- Action: Optional link

#### Event Grouping Rules

**Grouping:**
- Same day: Group under date header
- Same type: Visual grouping (subtle)
- Same user: Show avatar, group actions
- Time-based: "Today", "Yesterday", "This week"

**Display:**
- Date header: Sticky on scroll
- Event cards: Consistent styling
- Group indicator: Subtle line or spacing

### F. AI Interaction Guidelines

#### How AI Outputs Appear Visually

**Pattern:**
- Story cards: White background, soft shadow
- Insights blocks: Colored background (Gold 50 or Reciprocity 50)
- Digest sections: Grouped cards
- Echo modules: Visual ripple effect

**Typography:**
- Title: H3, Semibold
- Content: Body, regular
- Footer: Caption, "From The Listener"

#### Where The Listener Shows Up

**Locations:**
- Trust Ledger: Weekly digest card
- Intros feed: Insight cards between events
- Advocates: Growth insights
- Settings: Optional AI preferences

**Indicators:**
- Badge: "From The Listener" (small, Reciprocity 600)
- Icon: Optional AI icon
- Styling: Slightly different (colored background)

#### Narrative Hierarchy

**Structure:**
1. Title: What the insight is
2. Content: The story/narrative
3. Data: Supporting metrics (subtle)
4. Action: Optional "Learn more"

**Visual:**
- Title: Largest, Semibold
- Content: Body, regular
- Data: Body Small, Slate 500
- Action: Link or button

#### When AI Messaging is Subtle vs Highlighted

**Subtle:**
- Regular insights in feed
- Small badge: "From The Listener"
- Standard card styling
- Optional to engage

**Highlighted:**
- Major insights (weekly digest)
- Featured story card
- Colored background (Gold 50)
- Larger, more prominent
- Encouraged to read

### G. State Handling

#### Offline-First Behavior

**Pattern:**
- Cache content locally
- Show cached data immediately
- Sync when online
- Indicate sync status

**UI:**
- Offline indicator: Small banner
- Cached badge: "Last updated: [time]"
- Sync spinner: When syncing
- Error: If sync fails

#### Low Connectivity Considerations

**Pattern:**
- Progressive loading
- Skeleton loaders
- Optimistic UI
- Graceful degradation

**UI:**
- Loading: Skeleton, not spinner
- Images: Lazy load, placeholders
- Actions: Optimistic updates
- Errors: Clear, actionable

#### Optimistic UI Rules

**Pattern:**
- Update UI immediately
- Show loading state
- Revert on error
- Confirm on success

**Examples:**
- Share: Show success immediately
- Like: Show liked state immediately
- Delete: Remove from list immediately
- Edit: Show edited content immediately

---

## Layout System

### Mobile-First Page Templates

#### Standard App Page

**Structure:**
```
[Top Bar: 56px]
[Content: Flexible, 16px padding]
[Bottom Nav: 64px + safe area]
```

**Safe Areas:**
- Top: 16px (status bar)
- Bottom: 8px (home indicator)
- Sides: 16px (screen edges)

#### Marketing Page

**Structure:**
```
[Header: 64px, sticky]
[Hero: Flexible]
[Content: Flexible, 24px padding]
[Footer: Flexible]
```

**Spacing:**
- Section gaps: 48-64px
- Content padding: 24px
- Max width: 1200px (centered)

#### Modal/Sheet Page

**Structure:**
```
[Backdrop: Full screen, 40% opacity]
[Modal/Sheet: Centered or bottom]
  [Header: 56px]
  [Content: Flexible, 24px padding]
  [Actions: 64px, bottom]
```

### Single-Column Flows

**Pattern:**
- Maximum width: 100% (mobile), 600px (desktop)
- Centered: On desktop
- Padding: 16px (mobile), 24px (desktop)
- Vertical stack: All content

**Usage:**
- Forms
- Settings
- Content pages
- Onboarding

### Safe Area Padding

**iOS/Android Web:**
- Top: `env(safe-area-inset-top)`
- Bottom: `env(safe-area-inset-bottom)`
- Left: `env(safe-area-inset-left)`
- Right: `env(safe-area-inset-right)`

**Implementation:**
- Bottom nav: Add bottom safe area
- Full screen: Add all safe areas
- Modals: Add safe area padding

### Card Grid Patterns

**Patterns:**
- **Single**: Full width cards
- **2-Column**: 2 cards per row (mobile)
- **3-Column**: 3 cards per row (tablet+)
- **Masonry**: Variable height (future)

**Spacing:**
- Gap: 16px (mobile), 20px (desktop)
- Card padding: 16-20px
- Grid padding: 16px

### Vertical Stacks

**Pattern:**
- Settings: List of sections
- Forms: Vertical inputs
- Content: Vertical cards
- Feed: Vertical list

**Spacing:**
- Between items: 16px
- Between sections: 32px
- Section headers: 24px margin-bottom

### Proportional Spacing

**Marketing vs In-App:**
- Marketing: Larger spacing (48-64px sections)
- In-App: Tighter spacing (16-24px sections)
- Cards: Consistent (16-20px padding)

---

## Brand Expression

### Visual Tone

#### Soft Minimalism

**Principles:**
- Clean without coldness
- Simple without sterility
- Purposeful whitespace
- Gentle curves, not sharp edges
- Warm neutrals, not cool grays

**Implementation:**
- Generous padding
- Soft shadows
- Rounded corners
- Warm color palette
- Human typography

#### Relational Warmth

**Principles:**
- Human-centered design
- Personal, not corporate
- Warm colors (Gold, Reciprocity)
- Gentle motion
- Approachable language

**Implementation:**
- Gold accents
- Reciprocity primary
- Warm gradients
- Friendly copy
- Personal pronouns

#### Calm Professionalism

**Principles:**
- Confident, not flashy
- Modern, not trendy
- Reliable, not boring
- Sophisticated, not pretentious

**Implementation:**
- Consistent spacing
- Clear hierarchy
- Professional typography
- Subtle animations
- Trustworthy colors

#### Gentle Gradients

**Usage:**
- WIS score card: Reciprocity gradient
- Hero sections: Subtle cloud gradients
- Buttons: Optional gradient (hover)
- Backgrounds: Very subtle

**Colors:**
- Reciprocity: 600 → 400
- Gold: 600 → 400
- Cloud: White → Slate 50

#### Trust-Oriented Spacing

**Principles:**
- Breathing room
- Clear relationships
- Focused attention
- Calm density

**Implementation:**
- 16px minimum between elements
- 24px between sections
- 48px between major sections
- Generous card padding

### Photography/Imagery

#### Subject Matter

**Themes:**
- Human connection: Hands, gestures, eye contact
- Distance: People at distance, reaching
- Trust: Handshakes, shared moments
- Warmth: Natural light, golden hour
- Simplicity: Clean backgrounds, focused subjects

#### Color Grading

**Style:**
- Warm tones: Slight gold/amber tint
- Natural: Not oversaturated
- Soft: Gentle contrast
- Bright: Not dark or moody

#### Mood

**Feeling:**
- Quiet: Peaceful, not loud
- Warm: Inviting, not cold
- Honest: Authentic, not staged
- Hopeful: Positive, not naive

### Iconography Tone

**Style:**
- Simple: Not complex
- Soft: Rounded corners, gentle curves
- Geometric: Clean shapes
- Humanist: Relatable, not abstract

**Implementation:**
- 2px stroke width
- 2px corner radius (where applicable)
- 24x24px standard size
- Consistent visual weight

### Motion Tone

**Principles:**
- Fluent: Smooth, not jerky
- Organic: Natural, not mechanical
- Reassuring: Confident, not anxious
- Never flashy: Subtle, not attention-grabbing

**Implementation:**
- 200ms standard duration
- Ease-in-out curves
- Gentle scale (1.02 max)
- Soft shadows
- Purposeful only

---

## Accessibility

### Contrast Minimums

**WCAG 2.1 AA:**
- Normal text: 4.5:1 contrast ratio
- Large text (18px+): 3:1 contrast ratio
- UI components: 3:1 contrast ratio

**Colors:**
- Midnight on Cloud: 12.6:1 ✅
- Reciprocity 600 on White: 4.8:1 ✅
- Slate 500 on Cloud: 3.2:1 ✅
- Gold 600 on White: 2.1:1 ⚠️ (use on dark or with border)

### Tap Target Sizes

**Minimum:**
- 44x44px (iOS/Android standard)
- Preferred: 48x48px
- Large actions: 56x56px

**Spacing:**
- 8px minimum between targets
- Prevents accidental taps

### Screen Reader Labels

**Requirements:**
- All interactive elements: Accessible labels
- Images: Alt text or aria-label
- Icons: aria-label or aria-hidden with text
- Buttons: Descriptive text or aria-label
- Forms: Labels associated with inputs

**Implementation:**
- Semantic HTML
- ARIA attributes where needed
- Hidden text for icon-only buttons
- Descriptive link text

### Semantic Structure

**Requirements:**
- Proper heading hierarchy (H1 → H2 → H3)
- Landmark regions (header, nav, main, footer)
- Lists: ul/ol, not divs
- Buttons: button, not div
- Links: a, not div

### Motion Reduction Rules

**Implementation:**
- Respect `prefers-reduced-motion`
- Disable animations when reduced motion
- Keep essential transitions (opacity, not transform)
- Test with reduced motion enabled

**CSS:**
```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Cognitive Load Minimization

**Principles:**
- One primary action per screen
- Clear information hierarchy
- Progressive disclosure
- Consistent patterns
- Helpful defaults

**Implementation:**
- Limit options per screen
- Group related items
- Use familiar patterns
- Provide clear feedback
- Minimize steps

---

## Governance

### Naming Conventions

#### CSS Variables
- Format: `--color-{name}`, `--spacing-{size}`, `--radius-{size}`, `--shadow-{name}`
- Semantic: Use purpose, not value (e.g., `--color-primary`, not `--color-blue`)
- Consistent: Follow established patterns

#### Component Names
- PascalCase: `Button`, `Card`, `Input`
- Descriptive: Clear purpose from name
- Consistent: Follow existing patterns

#### File Names
- Match component name: `Button.tsx` for `Button` component
- Kebab-case for utilities: `design-tokens.json`
- Descriptive: Clear purpose from name

### Rules for Creating New Components

**Process:**
1. Check if component exists
2. Check if can extend existing component
3. Design with design tokens
4. Follow accessibility guidelines
5. Document usage and variants
6. Add to component library
7. Update design system doc

**Requirements:**
- Use design tokens (colors, spacing, radii, shadows)
- Mobile-first design
- Accessibility (WCAG 2.1 AA)
- Responsive (mobile → desktop)
- Documented (props, variants, usage)

### Patterns for New Feature Design

**Process:**
1. Define user goal
2. Map user flow
3. Identify components needed
4. Design with existing components first
5. Create new components only if needed
6. Follow established patterns
7. Test on mobile first
8. Iterate based on feedback

**Principles:**
- Reuse over create
- Consistency over novelty
- Mobile-first
- Accessibility-first
- User-centered

### Versioning

**System:**
- Semantic versioning: `MAJOR.MINOR.PATCH`
- Major: Breaking changes
- Minor: New components, non-breaking changes
- Patch: Bug fixes, small updates

**Documentation:**
- Changelog: Track all changes
- Migration guides: For breaking changes
- Examples: Updated with changes

### Tokens as Single Source of Truth

**Principle:**
- All design values come from tokens
- No hardcoded values in components
- Tokens defined in one place
- Tokens used everywhere

**Implementation:**
- CSS variables in `globals.css`
- Tailwind config references tokens
- Components use token classes
- Design tools reference tokens

### Guardrails for Designers/Developers

**For Designers:**
- Use design tokens, don't invent new values
- Follow component library patterns
- Test on mobile first
- Consider accessibility
- Document decisions

**For Developers:**
- Use design tokens, don't hardcode
- Follow component patterns
- Test on mobile first
- Implement accessibility
- Update documentation

**Tools:**
- Design tokens JSON
- Component library
- Style guide
- Accessibility checklist
- Mobile testing guidelines

---

## Implementation Notes

### Tailwind CSS Integration

All design tokens are available as Tailwind utilities:

- Colors: `bg-reciprocity-600`, `text-slate-500`, etc.
- Spacing: `p-4`, `gap-6`, `mt-8`, etc.
- Radii: `rounded-md`, `rounded-lg`, etc.
- Shadows: `shadow-soft`, `shadow-medium`, etc.
- Typography: `text-h1`, `text-body`, etc.

### CSS Variables

All tokens are available as CSS variables:

- Colors: `var(--color-reciprocity-600)`
- Spacing: `var(--spacing-4)`
- Radii: `var(--radius-md)`
- Shadows: `var(--shadow-soft)`

### Design Tokens JSON

Exportable JSON file for design tools (Figma, etc.) available at `design-tokens.json`.

---

## Conclusion

This design system provides a complete foundation for building Hear About Us with consistency, accessibility, and emotional resonance. Every token, component, and pattern serves the core purpose of expressing trust, warmth, reciprocity, and connection.

**Remember:** "Small gestures, beautifully held."

---

*Last updated: [Date]*
*Version: 1.0.0*
