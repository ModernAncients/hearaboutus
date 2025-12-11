import { InputHTMLAttributes, useId } from 'react'

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  size?: 'standard' | 'large'
  indeterminate?: boolean
}

export function Checkbox({
  label,
  size = 'standard',
  indeterminate = false,
  className = '',
  id,
  ...props
}: CheckboxProps) {
  const checkboxId = id || useId()
  const sizeStyles = {
    standard: 'w-5 h-5',
    large: 'w-6 h-6',
  }

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor={checkboxId}
        className="relative inline-flex items-center cursor-pointer"
      >
        <input
          type="checkbox"
          id={checkboxId}
          className="sr-only peer"
          ref={(el) => {
            if (el) el.indeterminate = indeterminate
          }}
          {...props}
        />
        <div
          className={`
            ${sizeStyles[size]}
            border-2
            rounded-sm
            bg-white
            border-[var(--color-slate-300)]
            peer-checked:bg-[var(--color-reciprocity-600)]
            peer-checked:border-[var(--color-reciprocity-600)]
            peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--color-reciprocity-400)] peer-focus:ring-opacity-20
            peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
            transition-colors duration-200 ease-in-out
            flex items-center justify-center
          `}
        >
          {/* Checkmark */}
          <svg
            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
          {/* Indeterminate line */}
          {indeterminate && (
            <div className="w-2 h-0.5 bg-[var(--color-reciprocity-600)] absolute" />
          )}
        </div>
      </label>
      {label && (
        <label
          htmlFor={checkboxId}
          className="text-body-small text-[var(--color-midnight)] cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  )
}
