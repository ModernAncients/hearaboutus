import React, { ReactNode, HTMLAttributes } from 'react'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant?: 'title' | 'section' | 'subsection' | 'body' | 'small' | 'meta' | 'label'
  className?: string
}

export function Typography({
  children,
  as,
  variant = 'body',
  className = '',
  ...props
}: TypographyProps) {
  // Determine element based on variant if 'as' not provided
  const elementMap: Record<string, React.ElementType> = {
    title: 'h1',
    section: 'h2',
    subsection: 'h3',
    body: 'p',
    small: 'p',
    meta: 'span',
    label: 'label',
  }

  const Component = as || elementMap[variant] || 'p'

  // Variant styles
  const variantStyles = {
    title: 'text-h1',
    section: 'text-h2',
    subsection: 'text-h3',
    body: 'text-body',
    small: 'text-body-small',
    meta: 'text-caption',
    label: 'text-label',
  }

  return (
    <Component className={`${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </Component>
  )
}

// Semantic text components
export function Title({ children, className = '', ...props }: TypographyProps) {
  return (
    <Typography variant="title" className={className} {...props}>
      {children}
    </Typography>
  )
}

export function Section({ children, className = '', ...props }: TypographyProps) {
  return (
    <Typography variant="section" className={className} {...props}>
      {children}
    </Typography>
  )
}

export function Subsection({ children, className = '', ...props }: TypographyProps) {
  return (
    <Typography variant="subsection" className={className} {...props}>
      {children}
    </Typography>
  )
}

export function Body({ children, className = '', ...props }: TypographyProps) {
  return (
    <Typography variant="body" className={className} {...props}>
      {children}
    </Typography>
  )
}

export function Small({ children, className = '', ...props }: TypographyProps) {
  return (
    <Typography variant="small" className={className} {...props}>
      {children}
    </Typography>
  )
}

export function Meta({ children, className = '', ...props }: TypographyProps) {
  return (
    <Typography variant="meta" className={className} {...props}>
      {children}
    </Typography>
  )
}

export function Label({ children, className = '', ...props }: TypographyProps) {
  return (
    <Typography variant="label" className={className} {...props}>
      {children}
    </Typography>
  )
}

