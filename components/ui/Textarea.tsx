import React from 'react'

export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export function TextArea({ label, error, helperText, className = '', ...props }: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-body-sm font-medium text-slate-700">
          {label}
        </label>
      )}
      <textarea
        className={[
          'min-h-[100px] w-full rounded-md border px-3 py-2 text-body outline-none transition resize-y',
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
