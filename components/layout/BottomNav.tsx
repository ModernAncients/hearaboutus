'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export interface BottomNavItem {
  key: string
  label: string
  icon: React.ReactNode
  href: string
}

export interface BottomNavProps {
  items: BottomNavItem[]
  activeKey: string
}

export function BottomNav({ items, activeKey }: BottomNavProps) {
  const pathname = usePathname()

  return (
    <div className="flex h-16 items-center justify-around">
      {items.map((item) => {
        const active = item.key === activeKey || pathname === item.href || pathname?.startsWith(item.href + '/')
        return (
          <Link
            key={item.key}
            href={item.href}
            className="flex flex-1 flex-col items-center justify-center gap-1 text-xs"
          >
            <span
              className={
                active
                  ? 'text-reciprocity'
                  : 'text-slate-500'
              }
            >
              {item.icon}
            </span>
            <span
              className={
                active
                  ? 'text-[11px] font-medium text-reciprocity'
                  : 'text-[11px] text-slate-400'
              }
            >
              {item.label}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
