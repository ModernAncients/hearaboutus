import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { StatTile } from '@/components/ui/StatTile'
import { LedgerSummary } from '@/components/domain/LedgerSummary'
import { TrustEventItem } from '@/components/domain/TrustEventItem'

export default function MarketingHome() {
  return (
    <div className="min-h-screen bg-bg-cloud">
      {/* Header */}
      <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 shadow-header">
        <h1 className="text-h4 font-semibold text-slate-900">Hear About Us</h1>
        <Link href="/signin">
          <Button variant="ghost" size="small">
            Sign in
          </Button>
        </Link>
      </header>

      {/* Hero */}
      <section className="px-4 pt-8 pb-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-h1 font-bold text-slate-900 mb-4">
            Warm intros, made visible.
          </h1>
          <p className="text-body-lg text-slate-700 mb-8">
            Turn word-of-mouth into a living Trust Ledger your business can see, understand, and grow.
          </p>
          <Link href="/signup">
            <Button variant="primary" fullWidth className="mb-3">
              Start free
            </Button>
          </Link>
          <p className="text-caption text-slate-500">
            No credit card. Built for founders who live on referrals.
          </p>
        </div>
      </section>

      {/* How it Works */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-h3 font-semibold text-slate-900 mb-6">How it works</h2>
          <div className="space-y-4">
            <Card padding="md">
              <h3 className="text-body-lg font-semibold text-slate-900 mb-2">
                Ask at checkout
              </h3>
              <p className="text-body-sm text-slate-600">
                A tiny prompt invites your customers to vouch for you.
              </p>
            </Card>
            <Card padding="md">
              <h3 className="text-body-lg font-semibold text-slate-900 mb-2">
                They share a Marker
              </h3>
              <p className="text-body-sm text-slate-600">
                A branded trust token they can pass to a friend.
              </p>
            </Card>
            <Card padding="md">
              <h3 className="text-body-lg font-semibold text-slate-900 mb-2">
                You see every warm intro
              </h3>
              <p className="text-body-sm text-slate-600">
                Your Trust Ledger shows the real flow of referrals.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="px-4 py-12 bg-bg-cloud">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-h3 font-semibold text-slate-900 mb-6">What you'll see</h2>
          <Card padding="lg" className="bg-white">
            <div className="space-y-4">
              <LedgerSummary
                wisValue={8.4}
                introsCount={42}
                advocatesCount={18}
                conversionsCount={12}
              />
              <div className="space-y-2 pt-4 border-t border-slate-200">
                <TrustEventItem
                  type="marker_shared"
                  description="Sarah shared your Marker with a friend"
                  timestamp="2h ago"
                  city="San Francisco"
                />
                <TrustEventItem
                  type="intro_converted"
                  description="New customer from Anna's referral"
                  timestamp="1d ago"
                  statusLabel="Converted"
                  statusVariant="positive"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Why it matters */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-2xl mx-auto">
          <p className="text-body text-slate-700 leading-relaxed">
            Most of your growth comes from a small group of people who put in a good word. Hear About Us makes their gestures visible, measurable, and meaningful, without turning trust into a cheap funnel metric.
          </p>
        </div>
      </section>

      {/* Pricing teaser */}
      <section className="px-4 py-12 bg-bg-cloud">
        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-3 mb-6">
            <Card padding="sm" className="text-center">
              <p className="text-caption font-medium text-slate-500 mb-1">Solo founders</p>
              <p className="text-h3 font-bold text-slate-900">Free</p>
            </Card>
            <Card padding="sm" className="text-center">
              <p className="text-caption font-medium text-slate-500 mb-1">Growing teams</p>
              <p className="text-h3 font-bold text-slate-900">Fair</p>
            </Card>
            <Card padding="sm" className="text-center">
              <p className="text-caption font-medium text-slate-500 mb-1">Agencies</p>
              <p className="text-h3 font-bold text-slate-900">Simple</p>
            </Card>
          </div>
          <Link href="/pricing">
            <Button variant="secondary" fullWidth>
              View pricing
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 bg-white border-t border-slate-200">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center text-caption text-slate-500">
            <Link href="/about" className="hover:text-slate-700">About</Link>
            <Link href="/pricing" className="hover:text-slate-700">Pricing</Link>
            <Link href="/terms" className="hover:text-slate-700">Terms</Link>
            <Link href="/privacy" className="hover:text-slate-700">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
