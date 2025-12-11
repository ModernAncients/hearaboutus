import React from 'react'

export interface ToggleProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  size?: 'sm' | 'md'
}

export function Toggle({
  checked,
  onChange,
  label,
  size = 'md',
  className = '',
  ...props
}: ToggleProps) {
  const sizeClasses = {
    sm: {
      container: 'h-5 w-9',
      thumb: 'h-4 w-4',
      translate: 'translate-x-4',
    },
    md: {
      container: 'h-6 w-11',
      thumb: 'h-5 w-5',
      translate: 'translate-x-5',
    },
  }

  const styles = sizeClasses[size]

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={[
          'relative inline-flex items-center rounded-full transition-colors focus-visible:outline-none focus-visible:shadow-focus-ring',
          checked ? 'bg-reciprocity' : 'bg-slate-300',
          styles.container,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...props}
      >
        <span
          className={[
            'inline-block rounded-full bg-white shadow-sm transition-transform',
            checked ? styles.translate : 'translate-x-0.5',
            styles.thumb,
          ].join(' ')}
        />
      </button>
      {label && (
        <label
          onClick={() => onChange(!checked)}
          className="text-body-sm text-slate-700 cursor-pointer"
        >
          {label}
        </label>
      )}
    </div>
  )
}
