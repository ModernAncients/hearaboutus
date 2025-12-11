import React from 'react'
import { Card } from '@/components/ui/Card'
import { Pill } from '@/components/ui/Pill'

export interface IntroListItemProps {
  advocateName?: string
  recipientHint?: string
  channel: 'sms' | 'email' | 'link' | 'qr'
  status: 'started' | 'shared' | 'clicked' | 'converted'
  createdAt: string
}

export function IntroListItem({
  advocateName = 'Anonymous advocate',
  recipientHint,
  channel,
  status,
  createdAt,
}: IntroListItemProps) {
  const statusMap: Record<
    IntroListItemProps['status'],
    { label: string; variant: 'neutral' | 'positive' | 'info' }
  > = {
    started: { label: 'Started', variant: 'neutral' },
    shared: { label: 'Shared', variant: 'info' },
    clicked: { label: 'Opened', variant: 'info' },
    converted: { label: 'Converted', variant: 'positive' },
  }

  return (
    <Card padding="sm" className="mb-2">
      <div className="flex items-start justify-between gap-2">
        <div className="flex flex-col">
          <p className="text-body-sm font-medium text-slate-800">
            {advocateName}
          </p>
          {recipientHint && (
            <p className="text-[12px] text-slate-500">
              → {recipientHint}
            </p>
          )}
          <p className="mt-1 text-[11px] text-slate-500">
            Sent via {channel.toUpperCase()}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <Pill
            label={statusMap[status].label}
            variant={statusMap[status].variant}
          />
          <span className="text-[11px] text-slate-400">
            {createdAt}
          </span>
        </div>
      </div>
    </Card>
  )
}
