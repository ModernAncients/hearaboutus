'use client'

import React from 'react'

export interface ToastProps {
  message: string
  visible: boolean
}

export function Toast({ message, visible }: ToastProps) {
  return (
    <div
      className={[
        'fixed inset-x-4 bottom-20 z-40 flex justify-center transition',
        visible ? 'opacity-100 translate-y-0' : 'pointer-events-none opacity-0 translate-y-2',
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="max-w-sm rounded-full bg-slate-900 px-4 py-2 text-center text-[13px] text-white shadow-pop">
        {message}
      </div>
    </div>
  )
}
