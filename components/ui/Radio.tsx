import { InputHTMLAttributes, useId } from 'react'

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string
  size?: 'standard' | 'large'
}

export function Radio({ label, size = 'standard', className = '', id, ...props }: RadioProps) {
  const radioId = id || useId()
  const sizeStyles = {
    standard: 'w-5 h-5',
    large: 'w-6 h-6',
  }

  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor={radioId}
        className="relative inline-flex items-center cursor-pointer"
      >
        <input
          type="radio"
          id={radioId}
          className="sr-only peer"
          {...props}
        />
        <div
          className={`
            ${sizeStyles[size]}
            border-2
            rounded-full
            bg-white
            border-[var(--color-slate-300)]
            peer-checked:border-[var(--color-reciprocity-600)]
            peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[var(--color-reciprocity-400)] peer-focus:ring-opacity-20
            peer-disabled:opacity-50 peer-disabled:cursor-not-allowed
            transition-colors duration-200 ease-in-out
            flex items-center justify-center
          `}
        >
          {/* Selected dot */}
          <div
            className="w-2 h-2 bg-[var(--color-reciprocity-600)] rounded-full opacity-0 peer-checked:opacity-100 transition-opacity duration-200"
          />
        </div>
      </label>
      {label && (
        <label
          htmlFor={radioId}
          className="text-body-small text-[var(--color-midnight)] cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  )
}
