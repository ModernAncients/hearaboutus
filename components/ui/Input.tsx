import React from 'react'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
}

export function Input({ label, error, helperText, className = '', ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-body-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <input
        className={[
          'h-11 w-full rounded-md border px-3 text-body outline-none transition',
          'bg-white border-slate-300 placeholder:text-slate-400',
          'focus:border-reciprocity focus-visible:shadow-focus-ring',
          error && 'border-status-danger',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      />
      {error ? (
        <p className="text-xs text-status-danger">{error}</p>
      ) : helperText ? (
        <p className="text-xs text-slate-500">{helperText}</p>
      ) : null}
    </div>
  )
}

