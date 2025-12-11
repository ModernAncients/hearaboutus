import React from 'react'
import { IntroListItem, IntroListItemProps } from './IntroListItem'
import { EmptyState } from './EmptyState'

export interface IntroListProps {
  intros: IntroListItemProps[]
  emptyMessage?: string
}

export function IntroList({ intros, emptyMessage = 'No introductions yet' }: IntroListProps) {
  if (intros.length === 0) {
    return (
      <EmptyState
        title={emptyMessage}
        description="Start sharing your Marker to track warm introductions"
      />
    )
  }

  return (
    <div>
      {intros.map((intro, index) => (
        <IntroListItem key={index} {...intro} />
      ))}
    </div>
  )
}
