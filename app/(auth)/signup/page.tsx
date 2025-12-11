'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { MarketingHeader } from '@/components/layout/MarketingHeader'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { createClient } from '@/lib/supabase/client'

export default function SignUpPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const supabase = createClient()
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      })

      if (signUpError) throw signUpError

      // Redirect to onboarding to create business
      router.push('/signup/onboarding')
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
            Create your account
          </h1>
          <p className="text-[#6A7280] mb-6">
            Start building your Trust Ledger today
          </p>

          <form onSubmit={handleSignUp} className="space-y-4">
            <Input
              label="Full name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
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
              {loading ? 'Creating account...' : 'Start free'}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-[#6A7280]">
            Already have an account?{' '}
            <Link href="/signin" className="text-[#3A8BFF] font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

