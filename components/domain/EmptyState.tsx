import React from 'react'

export interface EmptyStateProps {
  title: string
  description?: string
  action?: React.ReactNode
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="flex min-h-[160px] flex-col items-center justify-center gap-2 text-center text-slate-600">
      <p className="text-body font-medium">{title}</p>
      {description && (
        <p className="max-w-xs text-body-sm text-slate-500">
          {description}
        </p>
      )}
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}
