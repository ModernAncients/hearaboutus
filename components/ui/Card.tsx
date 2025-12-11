import React, { CSSProperties } from 'react'

export interface CardProps {
  children: React.ReactNode
  padding?: 'sm' | 'md' | 'lg'
  interactive?: boolean
  as?: 'div' | 'button'
  onClick?: () => void
  className?: string
  style?: CSSProperties
}

export function Card({
  children,
  padding = 'md',
  interactive,
  as: Component = 'div',
  onClick,
  className = '',
  style,
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
        'rounded-lg bg-white',
        paddingClass,
        interactive && 'transition hover:shadow-lg active:scale-[0.99] cursor-pointer',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{
        boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
        ...style,
      }}
    >
      {children}
    </Component>
  )
}

