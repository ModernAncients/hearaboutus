import React from 'react'
import { Card } from '@/components/ui/Card'

export interface LedgerFunnelProps {
  stages: Array<{
    label: string
    value: number
    percentage: number
  }>
}

export function LedgerFunnel({ stages }: LedgerFunnelProps) {
  return (
    <Card padding="md">
      <h3 className="text-h4 font-semibold text-slate-900 mb-4">Conversion Funnel</h3>
      <div className="space-y-3">
        {stages.map((stage, index) => (
          <div key={index} className="space-y-1">
            <div className="flex items-center justify-between text-body-sm">
              <span className="text-slate-700">{stage.label}</span>
              <span className="font-medium text-slate-900">
                {stage.value} ({stage.percentage}%)
              </span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-reciprocity transition-all duration-300"
                style={{ width: `${stage.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  )
}
