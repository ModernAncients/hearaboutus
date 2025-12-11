import React from 'react'
import { Card } from '@/components/ui/Card'

export interface MarkerCardProps {
  businessName: string
  message?: string
  color?: string // hex or token
  compact?: boolean
}

export function MarkerCard({
  businessName,
  message = "I'd vouch for this brand.",
  color = '#3A8BFF',
  compact,
}: MarkerCardProps) {
  return (
    <Card
      padding={compact ? 'sm' : 'md'}
      className="relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          background:
            'radial-gradient(circle at top left, rgba(58,139,255,0.7), transparent 60%)',
        }}
      />
      <div className="relative flex flex-col gap-1">
        <span className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
          Marker
        </span>
        <h3 className="text-body-lg font-semibold text-slate-900">
          {businessName}
        </h3>
        <p className="text-body-sm text-slate-600">{message}</p>
      </div>
    </Card>
  )
}
