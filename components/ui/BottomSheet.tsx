'use client'

import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'

export interface BottomSheetProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  title?: string
  className?: string
}

export function BottomSheet({
  isOpen,
  onClose,
  children,
  title,
  className = '',
}: BottomSheetProps) {
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

  const content = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900 bg-opacity-40 z-40 animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sheet */}
      <div
        className={`
          fixed bottom-0 left-0 right-0
          bg-white
          max-h-[90vh] rounded-t-2xl
          shadow-pop
          z-50
          safe-area-bottom
          animate-in slide-in-from-bottom duration-300 ease-decelerate
        `}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'sheet-title' : undefined}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-slate-300 rounded-full" />
        </div>

        {/* Header */}
        {title && (
          <div className="px-4 pb-3 border-b border-slate-200">
            <h2 id="sheet-title" className="text-h3 font-semibold text-slate-900">
              {title}
            </h2>
          </div>
        )}

        {/* Content */}
        <div className={`overflow-y-auto ${title ? 'p-4' : 'p-4 pt-2'} ${className}`}>
          {children}
        </div>
      </div>
    </>
  )

  return createPortal(content, document.body)
}
