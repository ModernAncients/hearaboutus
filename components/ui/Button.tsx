import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger'
  size?: 'small' | 'medium' | 'large'
  children: ReactNode
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
}

export function Button({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}: ButtonProps) {
  // Base styles with design tokens
  const baseStyles = [
    'inline-flex items-center justify-center',
    'font-medium',
    'transition-all duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
    'active:scale-[0.98]',
  ].join(' ')

  // Size variants
  const sizeStyles = {
    small: 'h-8 px-3 text-sm',
    medium: 'h-11 px-4 text-base tap-target', // 44px = tap-target-min
    large: 'h-14 px-6 text-lg',
  }

  // Variant styles using design tokens
  const variantStyles = {
    primary: [
      'bg-[var(--color-reciprocity-600)]',
      'text-white',
      'hover:bg-[var(--color-reciprocity-500)]',
      'focus:ring-[var(--color-reciprocity-400)]',
      'shadow-soft',
      'hover:shadow-hover',
    ].join(' '),
    secondary: [
      'bg-white',
      'text-[var(--color-midnight)]',
      'border-2 border-[var(--color-slate-300)]',
      'hover:border-[var(--color-slate-500)]',
      'focus:ring-[var(--color-reciprocity-400)]',
    ].join(' '),
    ghost: [
      'text-[var(--color-reciprocity-600)]',
      'hover:bg-[var(--color-cloud)]',
      'focus:ring-[var(--color-reciprocity-400)]',
    ].join(' '),
    danger: [
      'bg-[var(--color-error)]',
      'text-white',
      'hover:bg-[#DC2626]',
      'focus:ring-[var(--color-error)]',
      'shadow-soft',
    ].join(' '),
  }

  // Radius based on size
  const radiusStyles = size === 'small' ? 'rounded-sm' : 'rounded-md'

  const iconSpacing = icon ? (iconPosition === 'left' ? 'mr-2' : 'ml-2') : ''

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${radiusStyles} ${iconSpacing} ${className}`}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
    </button>
  )
}

