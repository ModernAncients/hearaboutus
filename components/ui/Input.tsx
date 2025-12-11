import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  variant?: 'standard' | 'error' | 'success'
}

export function Input({
  label,
  error,
  helperText,
  variant = 'standard',
  className = '',
  id,
  ...props
}: InputProps) {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  const hasError = !!error || variant === 'error'
  const isSuccess = variant === 'success' && !hasError

  const baseStyles = [
    'w-full',
    'px-4 py-3',
    'rounded-md',
    'border-2',
    'bg-white',
    'text-[var(--color-midnight)]',
    'placeholder:text-[var(--color-slate-500)]',
    'transition-colors duration-200 ease-in-out',
    'focus:outline-none',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    'tap-target', // Minimum 44px height
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
          htmlFor={inputId}
          className="block text-label text-[var(--color-midnight)] mb-2"
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        className={`${baseStyles} ${borderStyles} ${className}`}
        aria-invalid={hasError}
        aria-describedby={
          error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined
        }
        {...props}
      />
      {error && (
        <p
          id={`${inputId}-error`}
          className="mt-1 text-caption text-[var(--color-error)]"
          role="alert"
        >
          {error}
        </p>
      )}
      {helperText && !error && (
        <p id={`${inputId}-helper`} className="mt-1 text-caption text-[var(--color-slate-500)]">
          {helperText}
        </p>
      )}
    </div>
  )
}

