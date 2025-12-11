import React from 'react'

export interface CardProps {
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
  interactive?: boolean
  as?: 'div' | 'button'
  onClick?: () => void
  className?: string
}

export function Card({
  children,
  padding = 'md',
  interactive,
  as: Component = 'div',
  onClick,
  className = '',
}: CardProps) {
  const paddingClass =
    padding === 'sm'
      ? 'p-3'
      : padding === 'lg'
      ? 'p-5'
      : 'p-4'

  return (
    <Component
      onClick={onClick}
      className={[
        'rounded-lg bg-white shadow-card',
        paddingClass,
        interactive && 'transition hover:shadow-pop active:scale-[0.99]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Component>
  )
}

