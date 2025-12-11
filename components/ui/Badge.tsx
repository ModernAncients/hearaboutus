import React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'positive' | 'warning' | 'danger' | 'info'
  className?: string
}

const variantClasses = {
  default: 'bg-slate-100 text-slate-700',
  positive: 'bg-status-positive-light text-status-positive',
  warning: 'bg-status-warning-light text-status-warning',
  danger: 'bg-status-danger-light text-status-danger',
  info: 'bg-status-info-light text-status-info',
}

export function Badge({ children, variant = 'default', className = '' }: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium',
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </span>
  )
}
