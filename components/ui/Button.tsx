import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'destructive'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'small' | 'default'
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

const baseClasses =
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:shadow-focus-ring disabled:opacity-50 disabled:cursor-not-allowed'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-reciprocity text-white hover:bg-reciprocity-dark',
  secondary:
    'bg-slate-100 text-slate-800 hover:bg-slate-200',
  ghost:
    'bg-transparent text-slate-700 hover:bg-slate-100',
  destructive:
    'bg-status-danger text-white hover:bg-status-danger/90',
}

export function Button({
  variant = 'primary',
  size = 'default',
  fullWidth,
  loading,
  leftIcon,
  rightIcon,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const sizeClasses = size === 'small' ? 'h-9 px-3 text-xs' : 'h-11 px-4'
  
  return (
    <button
      className={[
        baseClasses,
        variantClasses[variant],
        fullWidth ? 'w-full' : '',
        sizeClasses,
        'gap-2',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      )}
      {!loading && leftIcon}
      {!loading && <span>{children}</span>}
      {!loading && rightIcon}
    </button>
  )
}

