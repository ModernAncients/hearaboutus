import React from 'react'

export interface ScreenHeaderProps {
  title: string
  subtitle?: string
  rightAction?: React.ReactNode
}

export function ScreenHeader({ title, subtitle, rightAction }: ScreenHeaderProps) {
  return (
    <div className="mb-4 flex items-center justify-between gap-2">
      <div>
        <h2 className="text-h3 font-semibold text-slate-900">{title}</h2>
        {subtitle && (
          <p className="text-body-sm text-slate-500">{subtitle}</p>
        )}
      </div>
      {rightAction && <div>{rightAction}</div>}
    </div>
  )
}
