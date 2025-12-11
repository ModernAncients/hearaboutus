import React from 'react'

export interface PageSectionProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function PageSection({ title, subtitle, children, className = '' }: PageSectionProps) {
  return (
    <section className={`mb-6 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-3">
          {title && <h2 className="text-h3 font-semibold text-slate-900">{title}</h2>}
          {subtitle && <p className="mt-1 text-body-sm text-slate-500">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  )
}
