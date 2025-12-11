'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ScreenHeader } from '@/components/layout/ScreenHeader'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

export default function SignUpPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const supabase = createClient()
      const { error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      })

      if (signUpError) {
        setError(signUpError.message)
        setLoading(false)
        return
      }

      router.push('/onboarding/business')
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg-cloud px-4 pt-2">
      <ScreenHeader title="Create your account" />

      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="new-password"
          helperText="At least 8 characters"
        />

        {error && (
          <div className="text-caption text-status-danger">{error}</div>
        )}

        <Button type="submit" variant="primary" fullWidth loading={loading}>
          Continue
        </Button>

        <div className="text-center text-body-sm text-slate-500">
          Already have an account?{' '}
          <Link href="/signin" className="text-reciprocity hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  )
}
