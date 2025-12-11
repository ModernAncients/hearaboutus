'use client'

import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  title?: string
  variant?: 'standard' | 'alert' | 'full'
  className?: string
}

export function Modal({
  isOpen,
  onClose,
  children,
  title,
  variant = 'standard',
  className = '',
}: ModalProps) {
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
    standard: 'w-[90%] max-w-md rounded-lg',
    alert: 'w-[90%] max-w-sm rounded-lg',
    full: 'w-full h-full rounded-none',
  }

  const content = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[var(--color-midnight)] bg-opacity-40 z-40 animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className={`
          fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          bg-white
          ${variantStyles[variant]}
          shadow-large
          z-50
          safe-area-inset
          animate-in zoom-in-95 fade-in duration-300
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'modal-title' : undefined}
      >
        {/* Header */}
        {title && (
          <div className="px-6 py-4 border-b border-[var(--color-slate-200)]">
            <h2 id="modal-title" className="text-h2 text-[var(--color-midnight)]">
              {title}
            </h2>
          </div>
        )}

        {/* Content */}
        <div className={`${title ? 'p-6' : 'p-6'} ${className}`}>
          {children}
        </div>
      </div>
    </>
  )

  return createPortal(content, document.body)
}
