'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ScreenHeader } from '@/components/layout/ScreenHeader'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'
import { Button } from '@/components/ui/Button'
import { Avatar } from '@/components/ui/Avatar'

const categories = [
  { value: 'wellness', label: 'Wellness' },
  { value: 'dtc', label: 'DTC' },
  { value: 'local-service', label: 'Local service' },
  { value: 'coaching', label: 'Coaching' },
  { value: 'other', label: 'Other' },
]

export default function BusinessSetupPage() {
  const router = useRouter()
  const [businessName, setBusinessName] = useState('')
  const [category, setCategory] = useState('')
  const [logo, setLogo] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)

    // TODO: Create business in Supabase
    // For now, just redirect
    setTimeout(() => {
      router.push('/onboarding/marker')
    }, 500)
  }

  return (
    <div className="min-h-screen bg-bg-cloud px-4 pt-2">
      <ScreenHeader
        title="Set up your business"
        subtitle="We use this for your Marker and Ledger."
      />

      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
        <div className="space-y-4">
          <Input
            label="Business name"
            value={businessName}
            onChange={(e) => setBusinessName(e.target.value)}
            required
            placeholder="Your business name"
          />

          <Select
            label="Category"
            options={categories}
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            placeholder="Select a category"
          />

          <div className="space-y-2">
            <label className="text-body-sm font-medium text-slate-700">
              Logo (optional)
            </label>
            <div className="flex items-center gap-4">
              <Avatar name={businessName || 'Business'} size="lg" />
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  // TODO: Implement file upload
                  alert('Logo upload coming soon')
                }}
              >
                Upload logo
              </Button>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <Button type="submit" variant="primary" fullWidth loading={loading}>
            Continue
          </Button>
          <p className="text-caption text-slate-500 text-center">
            You can change this anytime in Settings.
          </p>
        </div>
      </form>
    </div>
  )
}
