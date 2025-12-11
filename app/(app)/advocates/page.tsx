'use client'

import { ScreenHeader } from '@/components/layout/ScreenHeader'
import { StatTile } from '@/components/ui/StatTile'
import { AiNarrativeCard } from '@/components/domain/AiNarrativeCard'
import { AdvocateList } from '@/components/domain/AdvocateList'

// Mock data
const mockAdvocates = [
  {
    name: 'Anna Chen',
    totalIntros: 8,
    conversions: 5,
    lastActive: '2 days ago',
    trustScore: 8.5,
  },
  {
    name: 'Sarah Johnson',
    totalIntros: 12,
    conversions: 7,
    lastActive: '1 week ago',
    trustScore: 9.2,
  },
  {
    name: 'Mike Rodriguez',
    totalIntros: 5,
    conversions: 3,
    lastActive: '3 days ago',
    trustScore: 7.8,
  },
]

export default function AdvocatesPage() {
  return (
    <div className="space-y-6 pb-6">
      <ScreenHeader
        title="Advocates"
        subtitle="People who put in a good word."
      />

      {/* Highlight Tile */}
      <StatTile
        label="Active advocates"
        value={mockAdvocates.length}
        hint="ever"
        variant="highlight"
      />

      {/* AI Narrative */}
      <AiNarrativeCard
        contextLabel="Advocate echoes"
        body="This week, new advocates emerged in San Francisco and New York. Their gestures are creating real connections across your network."
        timestamp="1d ago"
      />

      {/* Advocate List */}
      <AdvocateList
        advocates={mockAdvocates}
        emptyMessage="You don't have visible advocates yet. They're there… we're just starting to listen for them."
      />
    </div>
  )
}
