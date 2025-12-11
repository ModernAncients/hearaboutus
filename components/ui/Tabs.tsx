'use client'

import { ReactNode, useState, createContext, useContext } from 'react'

interface TabsContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
}

const TabsContext = createContext<TabsContextValue | undefined>(undefined)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within Tabs')
  }
  return context
}

interface TabsProps {
  children: ReactNode
  defaultValue: string
  className?: string
  variant?: 'standard' | 'pills' | 'underline'
}

export function Tabs({ children, defaultValue, className = '', variant = 'standard' }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue)

  const containerStyles = {
    standard: 'border-b border-[var(--color-slate-200)]',
    pills: '',
    underline: 'border-b border-[var(--color-slate-200)]',
  }

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`${containerStyles[variant]} ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

interface TabsListProps {
  children: ReactNode
  className?: string
}

export function TabsList({ children, className = '' }: TabsListProps) {
  return (
    <div className={`flex gap-2 ${className}`} role="tablist">
      {children}
    </div>
  )
}

interface TabsTriggerProps {
  value: string
  children: ReactNode
  className?: string
}

export function TabsTrigger({ value, children, className = '' }: TabsTriggerProps) {
  const { activeTab, setActiveTab } = useTabsContext()
  const isActive = activeTab === value

  const baseStyles = [
    'px-3 py-2',
    'text-body-small font-medium',
    'transition-colors duration-200 ease-in-out',
    'focus:outline-none focus:ring-2 focus:ring-[var(--color-reciprocity-400)] focus:ring-opacity-20 rounded-sm',
    'tap-target',
  ].join(' ')

  const activeStyles = isActive
    ? 'text-[var(--color-reciprocity-600)] border-b-2 border-[var(--color-reciprocity-600)]'
    : 'text-[var(--color-slate-500)] hover:text-[var(--color-reciprocity-500)]'

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      className={`${baseStyles} ${activeStyles} ${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  )
}

interface TabsContentProps {
  value: string
  children: ReactNode
  className?: string
}

export function TabsContent({ value, children, className = '' }: TabsContentProps) {
  const { activeTab } = useTabsContext()
  if (activeTab !== value) return null

  return (
    <div className={`mt-4 ${className}`} role="tabpanel">
      {children}
    </div>
  )
}
