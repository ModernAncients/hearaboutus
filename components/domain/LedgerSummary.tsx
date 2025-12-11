import React from 'react'
import { StatTile } from '@/components/ui/StatTile'

export interface LedgerSummaryProps {
  wisValue: number
  introsCount: number
  advocatesCount: number
  conversionsCount: number
}

export function LedgerSummary({
  wisValue,
  introsCount,
  advocatesCount,
  conversionsCount,
}: LedgerSummaryProps) {
  return (
    <div className="flex flex-col gap-3">
      <StatTile
        label="Warm Intro Strength"
        value={wisValue.toFixed(1)}
        delta=""
        hint="Trust momentum"
        variant="highlight"
      />
      <div className="grid grid-cols-3 gap-2">
        <StatTile label="Intros" value={introsCount} />
        <StatTile label="Advocates" value={advocatesCount} />
        <StatTile label="Conversions" value={conversionsCount} />
      </div>
    </div>
  )
}
