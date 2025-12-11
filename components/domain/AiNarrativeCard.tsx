import React from 'react'
import { Card } from '@/components/ui/Card'

export interface AiNarrativeCardProps {
  title?: string
  body: string
  contextLabel?: string // e.g. "This week in warm intros"
  timestamp?: string
}

export function AiNarrativeCard({
  title,
  body,
  contextLabel,
  timestamp,
}: AiNarrativeCardProps) {
  return (
    <Card className="bg-reciprocity-light border border-reciprocity-light">
      {contextLabel && (
        <p className="text-[11px] font-medium uppercase tracking-wide text-slate-500">
          {contextLabel}
        </p>
      )}
      {title && (
        <h3 className="mt-1 text-body-lg font-semibold text-slate-900">
          {title}
        </h3>
      )}
      <p className="mt-2 text-body-sm text-slate-700">
        {body}
      </p>
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
        <span>From The Listener</span>
        {timestamp && <span>{timestamp}</span>}
      </div>
    </Card>
  )
}
