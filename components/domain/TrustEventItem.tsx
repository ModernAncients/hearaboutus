import React from 'react'
import { Pill } from '@/components/ui/Pill'

export type TrustEventType =
  | 'marker_shared'
  | 'intro_clicked'
  | 'intro_converted'
  | 'merchant_onboarded'

export interface TrustEventItemProps {
  type: TrustEventType
  description: string
  timestamp: string // preformatted e.g. "2h ago"
  city?: string
  statusLabel?: string
  statusVariant?: 'neutral' | 'positive' | 'info'
}

export function TrustEventItem({
  type,
  description,
  timestamp,
  city,
  statusLabel,
  statusVariant = 'neutral',
}: TrustEventItemProps) {
  const icon = (() => {
    switch (type) {
      case 'marker_shared':
        return '✨'
      case 'intro_converted':
        return '🌱'
      case 'intro_clicked':
        return '👀'
      case 'merchant_onboarded':
        return '🏁'
      default:
        return '•'
    }
  })()

  return (
    <div className="flex items-start gap-3 py-2">
      <div className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs">
        {icon}
      </div>
      <div className="flex-1">
        <p className="text-sm text-slate-800">
          {description}
        </p>
        <div className="mt-1 flex items-center gap-2 text-[11px] text-slate-500">
          <span>{timestamp}</span>
          {city && <span>• {city}</span>}
          {statusLabel && (
            <Pill label={statusLabel} variant={statusVariant} />
          )}
        </div>
      </div>
    </div>
  )
}
