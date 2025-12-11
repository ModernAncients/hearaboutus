'use client'

import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

interface ToastProps {
  message: string
  variant?: ToastVariant
  duration?: number
  onClose?: () => void
  action?: {
    label: string
    onClick: () => void
  }
}

const toastVariants = {
  success: {
    bg: 'bg-[var(--color-success)]',
    text: 'text-white',
    icon: '✓',
  },
  error: {
    bg: 'bg-[var(--color-error)]',
    text: 'text-white',
    icon: '✕',
  },
  warning: {
    bg: 'bg-[var(--color-warning)]',
    text: 'text-white',
    icon: '⚠',
  },
  info: {
    bg: 'bg-[var(--color-info)]',
    text: 'text-white',
    icon: 'ℹ',
  },
}

export function Toast({
  message,
  variant = 'info',
  duration = 4000,
  onClose,
  action,
}: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false)
        setTimeout(() => onClose?.(), 300) // Wait for animation
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [duration, onClose])

  const styles = toastVariants[variant]

  if (!isVisible) return null

  const content = (
    <div
      className={`
        fixed bottom-4 left-1/2 -translate-x-1/2
        w-[90%] max-w-sm
        ${styles.bg}
        ${styles.text}
        rounded-md
        shadow-medium
        p-4
        z-50
        animate-in slide-in-from-bottom fade-in duration-300
        md:bottom-auto md:top-4 md:right-4 md:left-auto md:translate-x-0
      `}
      role="alert"
    >
      <div className="flex items-start gap-3">
        <span className="text-lg flex-shrink-0">{styles.icon}</span>
        <div className="flex-1 min-w-0">
          <p className="text-body-small font-medium">{message}</p>
          {action && (
            <button
              onClick={() => {
                action.onClick()
                setIsVisible(false)
                setTimeout(() => onClose?.(), 300)
              }}
              className="mt-2 text-body-small font-medium underline"
            >
              {action.label}
            </button>
          )}
        </div>
        {onClose && (
          <button
            onClick={() => {
              setIsVisible(false)
              setTimeout(() => onClose(), 300)
            }}
            className="flex-shrink-0 text-lg opacity-80 hover:opacity-100"
            aria-label="Close"
          >
            ×
          </button>
        )}
      </div>
    </div>
  )

  return createPortal(content, document.body)
}

// Toast Container for managing multiple toasts
interface ToastContainerProps {
  toasts: Array<ToastProps & { id: string }>
  onRemove: (id: string) => void
}

export function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <>
      {toasts.map((toast, index) => (
        <div
          key={toast.id}
          style={{
            transform: `translateY(${index * -80}px)`,
          }}
        >
          <Toast
            {...toast}
            onClose={() => onRemove(toast.id)}
          />
        </div>
      ))}
    </>
  )
}
