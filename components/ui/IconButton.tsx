import React from 'react'

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  'aria-label': string
}

export function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  className = '',
  ...props
}: IconButtonProps) {
  const sizeClasses = {
    sm: 'h-8 w-8',
    md: 'h-11 w-11',
    lg: 'h-12 w-12',
  }

  const variantClasses = {
    primary: 'bg-reciprocity text-white hover:bg-reciprocity-dark',
    secondary: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
    ghost: 'bg-transparent text-slate-600 hover:bg-slate-100',
  }

  return (
    <button
      className={[
        'inline-flex items-center justify-center rounded-md transition-colors',
        'focus-visible:outline-none focus-visible:shadow-focus-ring',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        variantClasses[variant],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      {icon}
    </button>
  )
}
