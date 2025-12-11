import React from 'react'
import { Sparkline } from './Sparkline'

export interface MetricRowProps {
  label: string
  value: string | number
  trend?: number[] // Array of values for sparkline
  delta?: string
  variant?: 'default' | 'highlight'
}

export function MetricRow({
  label,
  value,
  trend,
  delta,
  variant = 'default',
}: MetricRowProps) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
      <div className="flex-1 min-w-0">
        <p className="text-body-sm font-medium text-slate-800">{label}</p>
        <div className="mt-1 flex items-center gap-2">
          <span className={`text-h4 font-semibold ${variant === 'highlight' ? 'text-reciprocity' : 'text-slate-900'}`}>
            {value}
          </span>
          {delta && (
            <span className="text-[11px] text-slate-500">{delta}</span>
          )}
        </div>
      </div>
      {trend && trend.length > 0 && (
        <div className="ml-4">
          <Sparkline data={trend} width={60} height={24} showArea />
        </div>
      )}
    </div>
  )
}
