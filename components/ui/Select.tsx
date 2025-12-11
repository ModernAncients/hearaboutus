import { SelectHTMLAttributes, useId } from 'react'

interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  label?: string
  error?: string
  helperText?: string
  options: SelectOption[]
  placeholder?: string
  variant?: 'standard' | 'error' | 'success'
}

export function Select({
  label,
  error,
  helperText,
  options,
  placeholder,
  variant = 'standard',
  className = '',
  id,
  ...props
}: SelectProps) {
  const selectId = id || useId()
  const hasError = !!error || variant === 'error'
  const isSuccess = variant === 'success' && !hasError

  const baseStyles = [
    'w-full',
    'px-4 py-3',
    'rounded-md',
    'border-2',
    'bg-white',
    'text-[var(--color-midnight)]',
    'appearance-none',
    'bg-[url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' fill=\'none\' viewBox=\'0 0 20 20\'%3E%3Cpath stroke=\'%236A7280\' stroke-linecap=\'round\' stroke-linejoin=\'round\' stroke-width=\'1.5\' d=\'M6 8l4 4 4-4\'/%3E%3C/svg%3E")]',
    'bg-[length:1.5em_1.5em]',
    'bg-[right_0.75rem_center]',
    'bg-no-repeat',
    'pr-10',
    'transition-colors duration-200 ease-in-out',
    'focus:outline-none',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'tap-target',
  ].join(' ')

  const borderStyles = hasError
    ? 'border-[var(--color-error)] focus:border-[var(--color-error)] focus:ring-2 focus:ring-[var(--color-error)] focus:ring-opacity-20'
    : isSuccess
      ? 'border-[var(--color-success)] focus:border-[var(--color-success)] focus:ring-2 focus:ring-[var(--color-success)] focus:ring-opacity-20'
      : 'border-[var(--color-slate-300)] focus:border-[var(--color-reciprocity-600)] focus:ring-2 focus:ring-[var(--color-reciprocity-400)] focus:ring-opacity-20'

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={selectId}
          className="block text-label text-[var(--color-midnight)] mb-2"
        >
          {label}
        </label>
      )}
      <select
        id={selectId}
        className={`${baseStyles} ${borderStyles} ${className}`}
        aria-invalid={hasError}
        aria-describedby={
          error ? `${selectId}-error` : helperText ? `${selectId}-helper` : undefined
        }
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
      {error && (
        <p
          id={`${selectId}-error`}
          className="mt-1 text-caption text-[var(--color-error)]"
          role="alert"
        >
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${selectId}-helper`} className="mt-1 text-caption text-[var(--color-slate-500)]">
          {helperText}
        </p>
      )}
    </div>
  )
}
