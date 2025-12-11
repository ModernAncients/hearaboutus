'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ScreenHeader } from '@/components/layout/ScreenHeader'
import { MarkerEditor } from '@/components/domain/MarkerEditor'

export default function MarkerSetupPage() {
  const router = useRouter()
  const [message, setMessage] = useState(
    "I'd vouch for this brand. Thought you might like them too."
  )
  const [loading, setLoading] = useState(false)

  async function handleSave() {
    setLoading(true)
    // TODO: Save marker to Supabase
    setTimeout(() => {
      router.push('/onboarding/install')
    }, 500)
  }

  return (
    <div className="min-h-screen bg-bg-cloud px-4 pt-2">
      <ScreenHeader
        title="Create your Marker"
        subtitle="This is what your customers will send when they put in a good word."
      />

      <div className="max-w-md mx-auto">
        <MarkerEditor
          businessName="Your Business" // TODO: Get from context/state
          initialMessage={message}
          onChangeMessage={setMessage}
          onSave={handleSave}
        />
      </div>
    </div>
  )
}
