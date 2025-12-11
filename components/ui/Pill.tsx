import React from 'react'

type PillVariant = 'neutral' | 'positive' | 'warning' | 'info'

export interface PillProps {
  label: string
  variant?: PillVariant
}

const pillVariantClasses: Record<PillVariant, { bg: string; text: string }> = {
  neutral: { bg: '#F0F2F5', text: '#2F3742' },
  positive: { bg: '#DFF6E8', text: '#3BB273' },
  warning: { bg: '#FFF4E6', text: '#FFA94D' },
  info: { bg: '#EAF2FF', text: '#3A8BFF' },
}

export function Pill({ label, variant = 'neutral' }: PillProps) {
  const colors = pillVariantClasses[variant]
  return (
    <span
      className="inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-medium"
      style={{
        backgroundColor: colors.bg,
        color: colors.text,
      }}
    >
      {label}
    </span>
  )
}
