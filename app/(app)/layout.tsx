'use client'

import { usePathname } from 'next/navigation'
import { AppShell } from '@/components/layout/AppShell'
import { BottomNav } from '@/components/layout/BottomNav'

const navItems = [
  {
    key: 'home',
    label: 'Home',
    href: '/app/home',
    icon: <span>🏠</span>,
  },
  {
    key: 'marker',
    label: 'Marker',
    href: '/app/marker',
    icon: <span>🎯</span>,
  },
  {
    key: 'intros',
    label: 'Intros',
    href: '/app/intros',
    icon: <span>🤝</span>,
  },
  {
    key: 'advocates',
    label: 'Advocates',
    href: '/app/advocates',
    icon: <span>⭐</span>,
  },
  {
    key: 'settings',
    label: 'Settings',
    href: '/app/settings',
    icon: <span>⚙️</span>,
  },
]

export default function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const activeKey = navItems.find((item) => pathname?.startsWith(item.href))?.key || 'home'

  const getTitle = () => {
    if (pathname?.includes('/home')) return 'Trust Ledger'
    if (pathname?.includes('/marker')) return 'Marker'
    if (pathname?.includes('/intros')) return 'Intros'
    if (pathname?.includes('/advocates')) return 'Advocates'
    if (pathname?.includes('/settings')) return 'Settings'
    return 'Hear About Us'
  }

  return (
    <AppShell
      title={getTitle()}
      bottomNav={<BottomNav items={navItems} activeKey={activeKey} />}
    >
      {children}
    </AppShell>
  )
}
