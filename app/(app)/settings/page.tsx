'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'

export default function SettingsPage() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSignOut = async () => {
    setLoading(true)
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/signin')
  }

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1A1C1E] mb-2">
          Settings
        </h1>
        <p className="text-[#6A7280]">
          Manage your account and business
        </p>
      </div>

      {/* Business Settings */}
      <Card>
        <h2 className="text-lg font-semibold text-[#1A1C1E] mb-4">
          Business Information
        </h2>
        <div className="space-y-4">
          <Input label="Business Name" type="text" placeholder="Your business name" />
          <Input label="Category" type="text" placeholder="e.g., Restaurant, Retail" />
          <Input label="Domain" type="text" placeholder="yourbusiness.com" />
          <Button variant="secondary" className="w-full">
            Save Changes
          </Button>
        </div>
      </Card>

      {/* Account Settings */}
      <Card>
        <h2 className="text-lg font-semibold text-[#1A1C1E] mb-4">
          Account
        </h2>
        <div className="space-y-4">
          <Input label="Email" type="email" placeholder="your@email.com" />
          <Input label="Password" type="password" placeholder="••••••••" />
          <Button variant="secondary" className="w-full">
            Update Account
          </Button>
        </div>
      </Card>

      {/* Danger Zone */}
      <Card>
        <h2 className="text-lg font-semibold text-[#1A1C1E] mb-4">
          Danger Zone
        </h2>
        <Button
          variant="ghost"
          className="w-full text-red-600 hover:text-red-700 hover:bg-red-50"
          onClick={handleSignOut}
          disabled={loading}
        >
          {loading ? 'Signing out...' : 'Sign out'}
        </Button>
      </Card>
    </div>
  )
}

