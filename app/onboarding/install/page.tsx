'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ScreenHeader } from '@/components/layout/ScreenHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { BottomSheet } from '@/components/ui/BottomSheet'
import { Input } from '@/components/ui/Input'

export default function InstallWidgetPage() {
  const router = useRouter()
  const [showEmailSheet, setShowEmailSheet] = useState(false)
  const [email, setEmail] = useState('')

  const widgetCode = `<HearAboutUsWidget businessId="your-business-id" />`

  function handleSendToDeveloper() {
    setShowEmailSheet(true)
  }

  async function handleSendEmail() {
    // TODO: Send email with instructions
    alert('Instructions sent!')
    setShowEmailSheet(false)
  }

  return (
    <div className="min-h-screen bg-bg-cloud px-4 pt-2">
      <ScreenHeader
        title="Add the one-line prompt"
        subtitle="A single embed places a 'Would you vouch for us?' moment in your checkout."
      />

      <div className="space-y-6 max-w-md mx-auto">
        <Card padding="md">
          <p className="text-body-sm text-slate-700 mb-4">
            Drop this in your checkout or thank-you page.
          </p>
          <div className="bg-slate-900 rounded-md p-4 overflow-x-auto">
            <code className="text-caption text-white font-mono">
              {widgetCode}
            </code>
          </div>
        </Card>

        <Button variant="secondary" fullWidth onClick={handleSendToDeveloper}>
          Send to my developer
        </Button>

        <div className="pt-4">
          <Button
            variant="primary"
            fullWidth
            onClick={() => router.push('/app/home')}
          >
            Go to my Ledger
          </Button>
        </div>
      </div>

      <BottomSheet
        isOpen={showEmailSheet}
        onClose={() => setShowEmailSheet(false)}
        title="Send instructions"
      >
        <div className="space-y-4">
          <Input
            label="Developer email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="developer@example.com"
          />
          <Button variant="primary" fullWidth onClick={handleSendEmail}>
            Send instructions
          </Button>
        </div>
      </BottomSheet>
    </div>
  )
}
