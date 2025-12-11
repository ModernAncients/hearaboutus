'use client'

import { useState } from 'react'
import { LedgerSummary } from '@/components/domain/LedgerSummary'
import { MiniChart } from '@/components/data/MiniChart'
import { AiNarrativeCard } from '@/components/domain/AiNarrativeCard'
import { TrustEventFeed } from '@/components/domain/TrustEventFeed'
import { EmptyState } from '@/components/domain/EmptyState'
import { Button } from '@/components/ui/Button'
import { PageSection } from '@/components/layout/PageSection'

// Mock data - replace with real data fetching
const mockWisTrend = [5.2, 5.8, 6.1, 6.5, 7.0, 7.3, 7.8, 8.1, 8.4]
const mockEvents = [
  {
    type: 'marker_shared' as const,
    description: 'Sarah shared your Marker with a friend',
    timestamp: '2h ago',
    city: 'San Francisco',
    statusLabel: 'Shared',
    statusVariant: 'info' as const,
  },
  {
    type: 'intro_converted' as const,
    description: 'New customer from Anna's referral',
    timestamp: '1d ago',
    statusLabel: 'Converted',
    statusVariant: 'positive' as const,
  },
  {
    type: 'intro_clicked' as const,
    description: 'Someone opened your Marker',
    timestamp: '2d ago',
    city: 'New York',
    statusLabel: 'Opened',
    statusVariant: 'info' as const,
  },
]

export default function HomePage() {
  const [showPreview, setShowPreview] = useState(false)

  return (
    <div className="space-y-6 pb-6">
      {/* Ledger Summary */}
      <LedgerSummary
        wisValue={8.4}
        introsCount={42}
        advocatesCount={18}
        conversionsCount={12}
      />

      {/* Mini trend */}
      <PageSection title="Last 30 days">
        <div className="bg-white rounded-lg p-4 shadow-card">
          <MiniChart data={mockWisTrend} width={300} height={60} />
        </div>
      </PageSection>

      {/* AI Narrative */}
      <AiNarrativeCard
        contextLabel="This week in warm intros"
        body="Your trust network is growing. Three new advocates emerged this week, and their gestures are creating real connections. The momentum is building."
        timestamp="2h ago"
      />

      {/* Recent Activity */}
      <PageSection title="Recent trust moments">
        {mockEvents.length === 0 ? (
          <EmptyState
            title="No warm intros yet."
            description="Once your customers start vouching for you, you'll see every movement of trust here."
            action={
              showPreview ? (
                <TrustEventFeed events={mockEvents} />
              ) : (
                <Button
                  variant="secondary"
                  onClick={() => setShowPreview(true)}
                >
                  Preview how it works
                </Button>
              )
            }
          />
        ) : (
          <TrustEventFeed events={mockEvents} />
        )}
      </PageSection>
    </div>
  )
}
