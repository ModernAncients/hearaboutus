'use client'

import { useState } from 'react'
import { ScreenHeader } from '@/components/layout/ScreenHeader'
import { MarkerCard } from '@/components/domain/MarkerCard'
import { MarkerEditor } from '@/components/domain/MarkerEditor'
import { Toggle } from '@/components/ui/Toggle'
import { Card } from '@/components/ui/Card'
import { PageSection } from '@/components/layout/PageSection'

export default function MarkerPage() {
  const [message, setMessage] = useState(
    "I'd vouch for this brand. Thought you might like them too."
  )
  const [allowPersonalization, setAllowPersonalization] = useState(false)
  const [showThankYou, setShowThankYou] = useState(false)

  return (
    <div className="space-y-6 pb-6">
      <ScreenHeader
        title="Marker"
        subtitle="What your customers share when they vouch for you."
      />

      {/* Preview */}
      <MarkerCard
        businessName="Your Business"
        message={message}
      />

      {/* Message Editor */}
      <MarkerEditor
        businessName="Your Business"
        initialMessage={message}
        onChangeMessage={setMessage}
        onSave={() => {
          // TODO: Save to Supabase
          alert('Marker saved!')
        }}
      />

      {/* Secondary Controls */}
      <PageSection title="Advanced">
        <Card padding="md" className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-body-sm font-medium text-slate-800">
                Let customers personalize their message
              </p>
              <p className="text-caption text-slate-500 mt-1">
                They can edit the Marker text before sharing
              </p>
            </div>
            <Toggle
              checked={allowPersonalization}
              onChange={setAllowPersonalization}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-body-sm font-medium text-slate-800">
                Include a small thank-you credit
              </p>
              <p className="text-caption text-slate-500 mt-1">
                When their friend buys, they get a small credit (coming soon)
              </p>
            </div>
            <Toggle
              checked={showThankYou}
              onChange={setShowThankYou}
              disabled
            />
          </div>
        </Card>
      </PageSection>
    </div>
  )
}
