'use client'

import { useState } from 'react'
import { ScreenHeader } from '@/components/layout/ScreenHeader'
import { StatTile } from '@/components/ui/StatTile'
import { SegmentedControl } from '@/components/ui/SegmentedControl'
import { IntroList } from '@/components/domain/IntroList'

// Mock data
const mockIntros = [
  {
    advocateName: 'Anna',
    recipientHint: 'Friend',
    channel: 'sms' as const,
    status: 'converted' as const,
    createdAt: '2 days ago',
  },
  {
    advocateName: 'Sarah',
    recipientHint: 'Colleague',
    channel: 'email' as const,
    status: 'clicked' as const,
    createdAt: '3 days ago',
  },
  {
    advocateName: 'Mike',
    channel: 'link' as const,
    status: 'shared' as const,
    createdAt: '5 days ago',
  },
]

const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'shared', label: 'Shared' },
  { value: 'clicked', label: 'Opened' },
  { value: 'converted', label: 'Converted' },
]

export default function IntrosPage() {
  const [filter, setFilter] = useState('all')

  const filteredIntros =
    filter === 'all'
      ? mockIntros
      : mockIntros.filter((intro) => intro.status === filter)

  return (
    <div className="space-y-6 pb-6">
      <ScreenHeader
        title="Warm intros"
        subtitle="Every time someone puts in a good word."
      />

      {/* Funnel Summary */}
      <div className="grid grid-cols-4 gap-2">
        <StatTile label="Started" value={mockIntros.length} />
        <StatTile
          label="Shared"
          value={mockIntros.filter((i) => i.status === 'shared').length}
        />
        <StatTile
          label="Opened"
          value={mockIntros.filter((i) => i.status === 'clicked').length}
        />
        <StatTile
          label="Converted"
          value={mockIntros.filter((i) => i.status === 'converted').length}
        />
      </div>

      {/* Filter */}
      <SegmentedControl
        options={filterOptions}
        value={filter}
        onChange={setFilter}
      />

      {/* Intro List */}
      <IntroList
        intros={filteredIntros}
        emptyMessage="No intros yet. When a customer shares your Marker, you'll see the trail here."
      />
    </div>
  )
}
