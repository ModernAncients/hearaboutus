import React from 'react'
import { AdvocateListItem, AdvocateListItemProps } from './AdvocateListItem'
import { EmptyState } from './EmptyState'

export interface AdvocateListProps {
  advocates: AdvocateListItemProps[]
  emptyMessage?: string
}

export function AdvocateList({
  advocates,
  emptyMessage = 'No advocates yet',
}: AdvocateListProps) {
  if (advocates.length === 0) {
    return (
      <EmptyState
        title={emptyMessage}
        description="Your customers become advocates when they share your Marker"
      />
    )
  }

  return (
    <div>
      {advocates.map((advocate, index) => (
        <AdvocateListItem key={index} {...advocate} />
      ))}
    </div>
  )
}
