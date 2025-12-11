import React from 'react'
import { TrustEventItem, TrustEventItemProps } from './TrustEventItem'

export interface TrustEventFeedProps {
  events: TrustEventItemProps[]
  emptyMessage?: string
}

export function TrustEventFeed({ events, emptyMessage = 'No events yet' }: TrustEventFeedProps) {
  if (events.length === 0) {
    return (
      <div className="py-8 text-center text-body-sm text-slate-500">
        {emptyMessage}
      </div>
    )
  }

  return (
    <div className="space-y-1">
      {events.map((event, index) => (
        <TrustEventItem key={index} {...event} />
      ))}
    </div>
  )
}
