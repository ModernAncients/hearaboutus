import React from 'react'

type PillVariant = 'neutral' | 'positive' | 'warning' | 'info'

export interface PillProps {
  label: string
  variant?: PillVariant
}

const pillVariantClasses: Record<PillVariant, string> = {
  neutral: 'bg-slate-100 text-slate-700',
  positive: 'bg-status-positive-light text-status-positive',
  warning: 'bg-status-warning-light text-status-warning',
  info: 'bg-status-info-light text-status-info',
}

export function Pill({ label, variant = 'neutral' }: PillProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium',
        pillVariantClasses[variant],
      ].join(' ')}
    >
      {label}
    </span>
  )
}
