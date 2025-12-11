import { ReactNode } from 'react'

interface LoadingProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'spinner' | 'pulse' | 'dots'
  className?: string
}

export function Loading({ size = 'medium', variant = 'spinner', className = '' }: LoadingProps) {
  const sizeStyles = {
    small: 'w-4 h-4',
    medium: 'w-6 h-6',
    large: 'w-8 h-8',
  }

  if (variant === 'spinner') {
    return (
      <div className={`inline-block ${className}`} role="status" aria-label="Loading">
        <svg
          className={`${sizeStyles[size]} animate-spin text-[var(--color-reciprocity-600)]`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  if (variant === 'pulse') {
    return (
      <div
        className={`${sizeStyles[size]} rounded-full bg-[var(--color-reciprocity-600)] animate-pulse ${className}`}
        role="status"
        aria-label="Loading"
      />
    )
  }

  if (variant === 'dots') {
    return (
      <div className={`flex items-center gap-1 ${className}`} role="status" aria-label="Loading">
        <div
          className={`${sizeStyles.small} rounded-full bg-[var(--color-reciprocity-600)] animate-pulse`}
          style={{ animationDelay: '0ms' }}
        />
        <div
          className={`${sizeStyles.small} rounded-full bg-[var(--color-reciprocity-600)] animate-pulse`}
          style={{ animationDelay: '150ms' }}
        />
        <div
          className={`${sizeStyles.small} rounded-full bg-[var(--color-reciprocity-600)] animate-pulse`}
          style={{ animationDelay: '300ms' }}
        />
      </div>
    )
  }

  return null
}

interface LoadingOverlayProps {
  isLoading: boolean
  children: ReactNode
}

export function LoadingOverlay({ isLoading, children }: LoadingOverlayProps) {
  return (
    <div className="relative">
      {children}
      {isLoading && (
        <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
          <Loading size="large" />
        </div>
      )}
    </div>
  )
}
