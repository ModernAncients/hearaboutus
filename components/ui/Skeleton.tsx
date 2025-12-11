interface SkeletonProps {
  variant?: 'text' | 'card' | 'avatar' | 'circle'
  width?: string | number
  height?: string | number
  className?: string
  lines?: number
}

export function Skeleton({
  variant = 'text',
  width,
  height,
  className = '',
  lines,
}: SkeletonProps) {
  const baseStyles = [
    'bg-[var(--color-slate-200)]',
    'animate-pulse',
    'rounded-md',
  ].join(' ')

  if (variant === 'text' && lines) {
    return (
      <div className={`space-y-2 ${className}`}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={baseStyles}
            style={{
              height: height || '1rem',
              width: i === lines - 1 && width ? '60%' : width || '100%',
            }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'card') {
    return (
      <div
        className={`
          ${baseStyles}
          w-full
          ${height ? '' : 'h-32'}
          ${className}
        `}
        style={{
          width: width || '100%',
          height: height || undefined,
        }}
      />
    )
  }

  if (variant === 'avatar' || variant === 'circle') {
    const size = width || height || 40
    return (
      <div
        className={`
          ${baseStyles}
          ${variant === 'circle' ? 'rounded-full' : 'rounded-md'}
          ${className}
        `}
        style={{
          width: size,
          height: size,
        }}
      />
    )
  }

  return (
    <div
      className={baseStyles}
      style={{
        width: width || '100%',
        height: height || '1rem',
      }}
    />
  )
}

// Pre-composed skeleton components
export function SkeletonCard({ className = '' }: { className?: string }) {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-soft ${className}`}>
      <Skeleton variant="avatar" width={40} height={40} className="mb-3" />
      <Skeleton variant="text" lines={2} className="mb-2" />
      <Skeleton variant="text" width="60%" />
    </div>
  )
}

export function SkeletonList({ items = 3, className = '' }: { items?: number; className?: string }) {
  return (
    <div className={`space-y-4 ${className}`}>
      {Array.from({ length: items }).map((_, i) => (
        <div key={i} className="flex items-center gap-3">
          <Skeleton variant="avatar" width={40} height={40} />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" width="70%" />
            <Skeleton variant="text" width="40%" />
          </div>
        </div>
      ))}
    </div>
  )
}
