import React from 'react'
import { Card } from './Card'

export interface StatTileProps {
  label: string
  value: string | number
  delta?: string
  hint?: string
  variant?: 'default' | 'highlight'
}

export function StatTile({
  label,
  value,
  delta,
  hint,
  variant = 'default',
}: StatTileProps) {
  const isHighlight = variant === 'highlight'
  return (
    <Card
      padding="md"
      className={
        isHighlight
          ? 'bg-reciprocity-light border border-reciprocity-light'
          : 'bg-white'
      }
    >
      <p className="text-xs font-medium text-slate-500">
        {label}
      </p>
      <p className="mt-1 text-xl font-semibold text-slate-900">
        {value}
      </p>
      <div className="mt-1 flex items-center justify-between text-[11px] text-slate-500">
        {delta && <span>{delta}</span>}
        {hint && <span>{hint}</span>}
      </div>
    </Card>
  )
}

