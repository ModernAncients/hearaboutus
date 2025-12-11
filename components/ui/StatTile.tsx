import { ReactNode } from 'react'

interface StatTileProps {
  label: string
  value: string | number
  icon?: ReactNode
  className?: string
}

export function StatTile({ label, value, icon, className = '' }: StatTileProps) {
  return (
    <div className={`bg-white rounded-lg p-4 shadow-soft ${className}`}>
      {icon && <div className="mb-2">{icon}</div>}
      <div className="text-2xl font-bold text-[#1A1C1E] mb-1">{value}</div>
      <div className="text-sm text-[#6A7280]">{label}</div>
    </div>
  )
}

