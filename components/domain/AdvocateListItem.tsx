import React from 'react'
import { Card } from '@/components/ui/Card'
import { Avatar } from '@/components/ui/Avatar'
import { Pill } from '@/components/ui/Pill'

export interface AdvocateListItemProps {
  name: string
  avatar?: string
  totalIntros: number
  conversions: number
  lastActive?: string
  trustScore?: number
}

export function AdvocateListItem({
  name,
  avatar,
  totalIntros,
  conversions,
  lastActive,
  trustScore,
}: AdvocateListItemProps) {
  const conversionRate = totalIntros > 0 ? ((conversions / totalIntros) * 100).toFixed(0) : '0'

  return (
    <Card padding="sm" interactive className="mb-2">
      <div className="flex items-start gap-3">
        <Avatar src={avatar} name={name} size="md" />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p className="text-body-sm font-medium text-slate-800 truncate">
                {name}
              </p>
              <div className="mt-1 flex items-center gap-3 text-[11px] text-slate-500">
                <span>{totalIntros} intros</span>
                <span>•</span>
                <span>{conversions} conversions</span>
                {conversionRate !== '0' && (
                  <>
                    <span>•</span>
                    <span className="font-medium text-status-positive">{conversionRate}% rate</span>
                  </>
                )}
              </div>
            </div>
            {trustScore !== undefined && (
              <Pill label={`${trustScore}`} variant="info" />
            )}
          </div>
          {lastActive && (
            <p className="mt-2 text-[11px] text-slate-400">
              Last active {lastActive}
            </p>
          )}
        </div>
      </div>
    </Card>
  )
}
