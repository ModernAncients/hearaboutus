import { ReactNode } from 'react'

interface ErrorProps {
  title?: string
  message: string
  action?: {
    label: string
    onClick: () => void
  }
  variant?: 'inline' | 'page' | 'toast'
  className?: string
}

export function Error({
  title = 'Something went wrong',
  message,
  action,
  variant = 'inline',
  className = '',
}: ErrorProps) {
  const icon = (
    <svg
      className="w-6 h-6 text-[var(--color-error)]"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  )

  if (variant === 'page') {
    return (
      <div
        className={`
          flex flex-col items-center justify-center
          min-h-[400px]
          py-12 px-4
          text-center
          ${className}
        `}
      >
        <div className="mb-4">{icon}</div>
        <h2 className="text-h2 text-[var(--color-midnight)] mb-2">{title}</h2>
        <p className="text-body text-[var(--color-slate-700)] mb-6 max-w-md">{message}</p>
        {action && (
          <button
            onClick={action.onClick}
            className="px-6 py-3 bg-[var(--color-reciprocity-600)] text-white rounded-md font-medium hover:bg-[var(--color-reciprocity-500)] transition-colors duration-200"
          >
            {action.label}
          </button>
        )}
      </div>
    )
  }

  return (
    <div
      className={`
        flex items-start gap-3
        p-4
        bg-[var(--color-error-light)]
        border border-[var(--color-error)]
        rounded-md
        ${className}
      `}
      role="alert"
    >
      <div className="flex-shrink-0 mt-0.5">{icon}</div>
      <div className="flex-1 min-w-0">
        {title && <h3 className="text-body font-semibold text-[var(--color-midnight)] mb-1">{title}</h3>}
        <p className="text-body-small text-[var(--color-slate-700)]">{message}</p>
        {action && (
          <button
            onClick={action.onClick}
            className="mt-3 text-body-small font-medium text-[var(--color-error)] hover:underline"
          >
            {action.label}
          </button>
        )}
      </div>
    </div>
  )
}
