'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { MarketingHeader } from '@/components/layout/MarketingHeader'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { createClient } from '@/lib/supabase/client'

export default function OnboardingPage() {
  const router = useRouter()
  const [businessName, setBusinessName] = useState('')
  const [category, setCategory] = useState('')
  const [domain, setDomain] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCreateBusiness = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        throw new Error('Not authenticated')
      }

      // Create business via API
      const response = await fetch('/api/businesses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: businessName,
          category: category || undefined,
          domain: domain || undefined,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create business')
      }

      // Redirect to app
      router.push('/home')
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <MarketingHeader />

      <div className="max-w-md mx-auto px-4 py-12">
        <div className="bg-white rounded-lg p-6 shadow-soft">
          <h1 className="text-2xl font-bold text-[#1A1C1E] mb-2">
            Set up your business
          </h1>
          <p className="text-[#6A7280] mb-6">
            Tell us about your business to get started
          </p>

          <form onSubmit={handleCreateBusiness} className="space-y-4">
            <Input
              label="Business Name"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              required
              placeholder="Your business name"
            />

            <Input
              label="Category (optional)"
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g., Restaurant, Retail, Service"
            />

            <Input
              label="Domain (optional)"
              type="text"
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
              placeholder="yourbusiness.com"
            />

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-sm p-3 rounded-md">
                {error}
              </div>
            )}

            <Button
              type="submit"
              variant="primary"
              className="w-full"
              disabled={loading}
            >
              {loading ? 'Creating...' : 'Continue'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

