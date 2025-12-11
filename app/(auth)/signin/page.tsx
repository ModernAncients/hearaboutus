'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ScreenHeader } from '@/components/layout/ScreenHeader'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

export default function SignInPage() {
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
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError(signInError.message)
        setLoading(false)
        return
      }

      router.push('/app/home')
      router.refresh()
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-bg-cloud px-4 pt-2">
      <ScreenHeader title="Sign in" />

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
          autoComplete="current-password"
        />

        {error && (
          <div className="text-caption text-status-danger">{error}</div>
        )}

        <Button type="submit" variant="primary" fullWidth loading={loading}>
          Sign in
        </Button>

        <div className="text-center text-body-sm text-slate-500">
          Don't have an account?{' '}
          <Link href="/signup" className="text-reciprocity hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  )
}
