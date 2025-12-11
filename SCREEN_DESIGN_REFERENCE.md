# Complete Mobile Screen Designs
## Hear About Us - Artifact 3 of 4

> **Complete mobile screen flows** - All pages implemented and ready

---

## Screen Inventory

### Public Marketing
- ✅ `/` - Landing page
- ✅ `/pricing` - Pricing page (existing)
- `/how-it-works` - Optional deeper explanation

### Auth & Onboarding
- ✅ `/signin` - Sign in
- ✅ `/signup` - Sign up
- ✅ `/onboarding/business` - Business setup
- ✅ `/onboarding/marker` - Marker creation
- ✅ `/onboarding/install` - Widget installation guide

### Main App (All wrapped in AppShell + BottomNav)
- ✅ `/app/home` - Trust Ledger overview
- ✅ `/app/intros` - Warm intro feed
- ✅ `/app/advocates` - Advocate list & insights
- ✅ `/app/marker` - Marker editor & preview
- ✅ `/app/settings` - Business/account/billing

### Admin
- `/app/observatory` - Internal, founder-only (existing)

---

## Screen Details

### 1. Landing Page (`/`)

**Layout:**
1. Header with wordmark + "Sign in" button
2. Hero section with H1, subcopy, primary CTA
3. "How it Works" - 3 step cards
4. Product preview with mock LedgerSummary
5. "Why it matters" copy block
6. Pricing teaser with 3 stat tiles
7. Footer with links

**Key Components:**
- `Button` (primary, ghost)
- `Card`
- `LedgerSummary`
- `TrustEventItem`

---

### 2. Sign Up (`/signup`)

**Layout:**
- `ScreenHeader` with title
- Email input
- Password input
- Continue button (full width)
- "Already have an account?" link

**Flow:**
- On submit → Create user → Redirect to `/onboarding/business`

---

### 3. Business Setup (`/onboarding/business`)

**Layout:**
- `ScreenHeader` with title + subtitle
- Business name input
- Category select dropdown
- Logo upload (optional)
- Continue button
- Helper text about changing later

**Flow:**
- On submit → Create business → Redirect to `/onboarding/marker`

---

### 4. Marker Setup (`/onboarding/marker`)

**Layout:**
- `ScreenHeader` with title + subtitle
- `MarkerEditor` component:
  - Preview at top
  - Text area for message
  - Save button

**Flow:**
- On save → Redirect to `/onboarding/install`

---

### 5. Install Widget (`/onboarding/install`)

**Layout:**
- `ScreenHeader` with title + subtitle
- Card explaining widget
- Code block with snippet
- "Send to my developer" button (opens BottomSheet)
- "Go to my Ledger" button

**Flow:**
- On "Go to my Ledger" → Redirect to `/app/home`

---

### 6. Home / Ledger (`/app/home`)

**Layout:**
1. `LedgerSummary` - WIS + stats
2. Mini trend chart (last 30 days)
3. `AiNarrativeCard` (if available)
4. Recent Activity section:
   - `TrustEventFeed` or `EmptyState`

**Key Features:**
- Shows trust momentum at a glance
- AI insights from "The Listener"
- Recent trust events feed

---

### 7. Intros (`/app/intros`)

**Layout:**
- `ScreenHeader` with title + subtitle
- Funnel summary (4 stat tiles: Started, Shared, Opened, Converted)
- Filter row (`SegmentedControl`)
- `IntroList` with `IntroListItem` components

**Features:**
- Filter by status
- See intro funnel at a glance
- Each intro shows advocate → recipient flow

---

### 8. Advocates (`/app/advocates`)

**Layout:**
- `ScreenHeader` with title + subtitle
- Highlight tile (Active advocates count)
- `AiNarrativeCard` (optional)
- `AdvocateList` with `AdvocateListItem` components

**Features:**
- See who's vouching for you
- Track advocate activity
- Conversion rates per advocate

---

### 9. Marker (`/app/marker`)

**Layout:**
- `ScreenHeader` with title + subtitle
- Large `MarkerCard` preview
- `MarkerEditor` for editing message
- Advanced section with toggles:
  - Allow personalization
  - Thank-you credit (future)

**Features:**
- Live preview of Marker
- Edit message
- Configure sharing options

---

### 10. Settings (`/app/settings`)

**Layout:**
- `ScreenHeader` with title
- Sections (each in a Card):
  1. Business (name, category, domain)
  2. Team (invite collaborator)
  3. Account (email, password)
  4. Billing (plan, manage)
  5. About (links to docs)
- Sign out button (destructive)

**Features:**
- Edit business info
- Manage account
- Team collaboration (future)
- Billing management

---

## Layout Rules

### Consistent Across All App Screens:
- Safe area padding: `px-4` horizontally
- Top spacing: `pt-2` under header
- Bottom nav present on all authenticated app screens
- One primary action per screen
- Scrollable main content, sticky/top header

### AppShell Structure:
```tsx
<AppShell
  title="Page Title"
  bottomNav={<BottomNav items={navItems} activeKey={activeKey} />}
>
  {/* Scrollable content */}
</AppShell>
```

### Bottom Navigation:
- Home
- Marker
- Intros
- Advocates
- Settings

---

## Component Usage Patterns

### Forms
```tsx
<ScreenHeader title="Form Title" />
<form className="space-y-4 max-w-md mx-auto">
  <Input label="Field" required />
  <Button type="submit" fullWidth>Submit</Button>
</form>
```

### Lists
```tsx
<ScreenHeader title="List Title" />
<IntroList intros={data} emptyMessage="No items yet" />
```

### Sections
```tsx
<PageSection title="Section Title" subtitle="Optional subtitle">
  {/* Content */}
</PageSection>
```

---

## Modal & Sheet Flows

### ShareSheet
- Triggered from Marker sharing
- Shows Marker preview
- Share options: SMS, Copy link, Email
- Native share if available

### AI Insights Sheet
- Triggered from "See this week's story" link
- Shows `AiNarrativeCard`
- List of contextual `TrustEventItem`s

### Developer Handoff Sheet
- Triggered from onboarding install page
- Email input
- Send instructions button

---

## Data Flow

### Mock Data (Current)
- All screens use mock data for now
- Replace with real Supabase queries
- Use server components where possible
- Client components for interactive features

### Real Data Integration Points:
1. User authentication (Supabase Auth)
2. Business data (businesses table)
3. Marker data (brand_stamps table)
4. Intro data (warm_intros table)
5. Analytics (analytics_day table)
6. Trust events (trust_events table)

---

## Next Steps

1. **Connect to Supabase** - Replace mock data with real queries
2. **Add loading states** - Use Skeleton components
3. **Error handling** - Use Error component
4. **Form validation** - Add proper validation
5. **File uploads** - Logo upload functionality
6. **Email sending** - Developer handoff emails
7. **Widget implementation** - Actual checkout widget

---

*All screens are implemented and ready for data integration.*
