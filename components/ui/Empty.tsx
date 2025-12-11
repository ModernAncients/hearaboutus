import { ReactNode } from 'react'

interface EmptyProps {
  icon?: ReactNode
  title: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  className?: string
}

export function Empty({ icon, title, description, action, className = '' }: EmptyProps) {
  return (
    <div
      className={`
        flex flex-col items-center justify-center
        py-12 px-4
        text-center
        ${className}
      `}
    >
      {icon && (
        <div className="mb-4 text-[var(--color-slate-400)] text-6xl">
          {icon}
        </div>
      )}
      <h3 className="text-h3 text-[var(--color-slate-700)] mb-2">{title}</h3>
      {description && (
        <p className="text-body-small text-[var(--color-slate-500)] max-w-sm mb-6">
          {description}
        </p>
      )}
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
