import React from 'react'

export interface AppShellProps {
  title?: string
  children: React.ReactNode
  bottomNav?: React.ReactNode
  showHeader?: boolean
  rightAction?: React.ReactNode
}

export function AppShell({
  title,
  children,
  bottomNav,
  showHeader = true,
  rightAction,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-bg-cloud text-slate-900">
      {showHeader && (
        <header className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3 shadow-header">
          <h1 className="text-h4 font-semibold">{title}</h1>
          {rightAction && <div>{rightAction}</div>}
        </header>
      )}

      <main className="flex-1 px-4 pb-24 pt-2">{children}</main>

      {bottomNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-800 bg-slate-900 safe-area-bottom">
          {bottomNav}
        </nav>
      )}
    </div>
  )
}
