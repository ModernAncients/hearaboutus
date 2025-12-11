import React from 'react'

export interface AvatarProps {
  src?: string
  alt?: string
  name?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function Avatar({ src, alt, name, size = 'md', className = '' }: AvatarProps) {
  const sizeClasses = {
    sm: 'h-8 w-8 text-xs',
    md: 'h-10 w-10 text-sm',
    lg: 'h-12 w-12 text-base',
  }

  const initials = name
    ?.split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <div
      className={[
        'flex items-center justify-center rounded-full bg-slate-200 text-slate-600 font-medium',
        sizeClasses[size],
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {src ? (
        <img src={src} alt={alt || name} className="h-full w-full rounded-full object-cover" />
      ) : (
        <span>{initials || '?'}</span>
      )}
    </div>
  )
}
