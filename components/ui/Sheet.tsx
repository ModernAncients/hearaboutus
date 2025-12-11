'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface SheetProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  variant?: 'standard' | 'full' | 'half'
  className?: string
}

export function Sheet({
  isOpen,
  onClose,
  children,
  title,
  variant = 'standard',
  className = '',
}: SheetProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const variantStyles = {
    standard: 'max-h-[90vh] rounded-t-2xl',
    full: 'h-screen rounded-none',
    half: 'max-h-[50vh] rounded-t-2xl',
  }

  const content = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[var(--color-midnight)] bg-opacity-40 z-40 animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        className={`
          fixed bottom-0 left-0 right-0
          bg-white
          ${variantStyles[variant]}
          shadow-large
          z-50
          safe-area-bottom
          animate-in slide-in-from-bottom duration-300 ease-out
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'sheet-title' : undefined}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-[var(--color-slate-300)] rounded-full" />
        </div>

        {/* Header */}
        {title && (
          <div className="px-6 pb-4 border-b border-[var(--color-slate-200)]">
            <h2 id="sheet-title" className="text-h2 text-[var(--color-midnight)]">
              {title}
            </h2>
          </div>
        )}

        {/* Content */}
        <div className={`overflow-y-auto ${title ? 'p-6' : 'p-6 pt-4'} ${className}`}>
          {children}
        </div>
      </div>
    </>
  )

  return createPortal(content, document.body)
}
