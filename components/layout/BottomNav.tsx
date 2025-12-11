'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface NavItem {
  href: string
  label: string
  icon: ReactNode
  badge?: number | boolean
}

interface BottomNavProps {
  items: NavItem[]
}

export function BottomNav({ items }: BottomNavProps) {
  const pathname = usePathname()

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--color-slate-200)] shadow-soft z-50 safe-area-bottom"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="flex items-center justify-around h-16 px-2">
        {items.map((item) => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
          
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                flex flex-col items-center justify-center
                flex-1
                h-full
                min-w-0
                px-2
                transition-colors duration-200 ease-in-out
                focus:outline-none focus:ring-2 focus:ring-[var(--color-reciprocity-400)] focus:ring-opacity-20 rounded-sm
                ${isActive ? 'text-[var(--color-reciprocity-600)]' : 'text-[var(--color-slate-500)]'}
              `}
              aria-current={isActive ? 'page' : undefined}
            >
              <div className="relative">
                <span className="text-2xl">{item.icon}</span>
                {item.badge && (
                  <span
                    className={`
                      absolute -top-1 -right-1
                      ${typeof item.badge === 'number' ? 'px-1.5 py-0.5' : 'w-2 h-2'}
                      ${typeof item.badge === 'number' ? 'text-[10px] font-medium' : ''}
                      bg-[var(--color-error)]
                      text-white
                      rounded-full
                      flex items-center justify-center
                      min-w-[16px]
                    `}
                  >
                    {typeof item.badge === 'number' ? item.badge : ''}
                  </span>
                )}
              </div>
              <span className="text-caption mt-0.5 truncate w-full text-center">
                {item.label}
              </span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
