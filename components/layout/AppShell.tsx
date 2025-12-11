'use client'

import { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface AppShellProps {
  children: ReactNode
  businessName?: string
}

export function AppShell({ children, businessName = 'Hear About Us' }: AppShellProps) {
  const pathname = usePathname()

  const navItems = [
    { href: '/home', label: 'Home', icon: '🏠' },
    { href: '/marker', label: 'Marker', icon: '🎯' },
    { href: '/intros', label: 'Intros', icon: '🤝' },
    { href: '/advocates', label: 'Advocates', icon: '⭐' },
    { href: '/settings', label: 'Settings', icon: '⚙️' },
  ]

  return (
    <div className="flex flex-col h-screen bg-[#F5F7FA]">
      {/* Top Bar */}
      <header className="sticky top-0 z-10 bg-white border-b border-[#C6CBD4] px-4 py-3">
        <h1 className="text-lg font-semibold text-[#1A1C1E]">{businessName}</h1>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {children}
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky bottom-0 bg-white border-t border-[#C6CBD4] safe-area-bottom">
        <div className="flex justify-around items-center px-2 py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/')
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex flex-col items-center justify-center px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? 'text-[#3A8BFF]'
                    : 'text-[#6A7280]'
                }`}
              >
                <span className="text-xl mb-1">{item.icon}</span>
                <span className="text-xs font-medium">{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </div>
  )
}

