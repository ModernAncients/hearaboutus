'use client'

import { ReactNode } from 'react'

interface SegmentedControlOption {
  value: string
  label: ReactNode
}

interface SegmentedControlProps {
  options: SegmentedControlOption[]
  value: string
  onChange: (value: string) => void
  variant?: 'standard' | 'pills'
  className?: string
}

export function SegmentedControl({
  options,
  value,
  onChange,
  variant = 'standard',
  className = '',
}: SegmentedControlProps) {
  const selectedIndex = options.findIndex((opt) => opt.value === value)

  const containerStyles = variant === 'pills' ? 'rounded-full' : 'rounded-md'
  const optionStyles = variant === 'pills' ? 'rounded-full' : 'rounded-sm'

  return (
    <div
      className={`
        inline-flex
        bg-[var(--color-slate-100)]
        p-1
        ${containerStyles}
        ${className}
      `}
      role="tablist"
    >
      {options.map((option, index) => {
        const isSelected = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={isSelected}
            onClick={() => onChange(option.value)}
            className={`
              flex-1
              px-4 py-2
              text-body-small font-medium
              transition-all duration-200 ease-in-out
              focus:outline-none focus:ring-2 focus:ring-[var(--color-reciprocity-400)] focus:ring-opacity-20
              tap-target
              ${optionStyles}
              ${
                isSelected
                  ? 'bg-white text-[var(--color-reciprocity-600)] shadow-soft'
                  : 'text-[var(--color-slate-500)] hover:text-[var(--color-midnight)]'
              }
            `}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
