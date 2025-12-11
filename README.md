# Hear About Us

A reciprocity network and trust infrastructure platform. Turn customer advocates into warm introductions with Markers and the Trust Ledger.

## 🏗️ Project Structure

```
/app
  /(marketing)          # Public marketing pages
  /(auth)               # Authentication flows
  /(app)                # Authenticated app shell (mobile-first)
  /(admin)              # Internal admin dashboard
  /api                  # API routes

/components
  /ui                   # Reusable UI components
  /layout               # Layout components (AppShell, MarketingHeader)

/lib
  /supabase             # Supabase client configuration
  /types                # TypeScript types (database & domain)
  /db                   # Database utilities
  /ai                   # AI service layer

/supabase
  /migrations           # Database migrations
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account (for database and auth)

### Installation

1. **Clone and install dependencies:**

```bash
npm install
```

2. **Set up environment variables:**

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional (for AI features)
OPENAI_API_KEY=your_openai_api_key

# Optional (for email/SMS)
EMAIL_API_KEY=your_email_api_key
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token
```

3. **Set up the database:**

Run the migration file `supabase/migrations/001_initial_schema.sql` in your Supabase SQL editor. This creates all the necessary tables and indexes.

4. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the marketing landing page.

## 📱 Mobile-First Design

This application is designed mobile-first:

- **Full-height views** with sticky navigation
- **Bottom navigation bar** for core app sections
- **Large tap targets** (minimum 44x44px)
- **Responsive scaling** to tablet and desktop
- **PWA-ready** structure

## 🎨 Design System

### Colors

- `midnight`: #1A1C1E (primary text)
- `cloud`: #F5F7FA (background)
- `reciprocity`: #3A8BFF (primary brand)
- `gold`: #E5B76A (accent)
- `slate700`: #2F3742
- `slate500`: #6A7280
- `slate300`: #C6CBD4

### Typography

- Font: Inter (via Next.js Google Fonts)
- Mobile scale: H1 (text-2xl/3xl), H2 (text-xl), Body (text-base)

## 🔐 Authentication

Uses Supabase Auth for merchant authentication. Customers/advocates interact via flows without full app auth.

## 📊 Core Features

### Marketing Funnel
- Landing page (`/`)
- Pricing page (`/pricing`)
- Sign up / Sign in flows

### App Shell (Mobile-First)
- **Home** (`/home`): Trust Ledger overview with WIS score
- **Marker** (`/marker`): Create and customize your Marker
- **Intros** (`/intros`): Track warm introductions
- **Advocates** (`/advocates`): View customer advocates
- **Settings** (`/settings`): Account and business settings

### Database Schema

Core tables:
- `businesses` - Merchant accounts
- `customers` - Customer/advocate records
- `brand_stamps` - Marker definitions
- `warm_intros` - Warm introduction events
- `trust_events` - Trust graph events
- `analytics_day` - Daily aggregated metrics
- `content_items` - AI-generated content
- `agent_logs` - AI agent activity logs

## 🛠️ Development

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Auth**: Supabase Auth
- **Deployment**: Vercel (recommended)

### Key Patterns

- **Route Groups**: Organized by feature (`(marketing)`, `(auth)`, `(app)`, `(admin)`)
- **Server Components**: Default, with `'use client'` only when needed
- **Type Safety**: Full TypeScript with database types
- **Mobile-First**: All components designed for mobile, scaled up

## 📝 Domain Language

Consistent terminology throughout:

- **Business**: Merchant/brand using the platform
- **Customer**: Person buying from a business
- **Advocate**: Customer who shares a Marker
- **Marker**: Branded trust token shared by advocates
- **Warm Intro**: Event where a Marker is shared
- **Trust Ledger**: Dashboard view of warm intros and metrics
- **WIS**: Warm Intro Strength (derived trust metric)
- **Trust Event**: Atomic event in the trust graph

## 🚧 Next Steps

1. Connect Supabase and test auth flow
2. Implement Marker creation and storage
3. Build warm intro tracking APIs
4. Add analytics aggregation jobs
5. Implement AI service layer
6. Build checkout widget
7. Create Observatory admin dashboard

## 📄 License

Built by Modern Ancients for Hear About Us.
