import { ReactNode, CSSProperties } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  style?: CSSProperties
  variant?: 'standard' | 'elevated' | 'interactive' | 'gradient'
  padding?: 'none' | 'small' | 'medium' | 'large'
}

export function Card({
  children,
  className = '',
  onClick,
  style,
  variant = 'standard',
  padding = 'medium',
}: CardProps) {
  const baseStyles = [
    'bg-white',
    'rounded-lg',
    'transition-all duration-200 ease-in-out',
  ].join(' ')

  const variantStyles = {
    standard: 'shadow-soft',
    elevated: 'shadow-medium',
    interactive: [
      'shadow-soft',
      'cursor-pointer',
      'hover:shadow-hover',
      'active:scale-[0.98]',
      'active:shadow-inner',
    ].join(' '),
    gradient: [
      'bg-gradient-to-br from-[var(--color-reciprocity-600)] to-[var(--color-reciprocity-500)]',
      'text-white',
      'shadow-soft',
    ].join(' '),
  }

  const paddingStyles = {
    none: '',
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6',
  }

  return (
    <div
      className={`${baseStyles} ${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
      onClick={onClick}
      style={style}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                onClick()
              }
            }
          : undefined
      }
    >
      {children}
    </div>
  )
}

