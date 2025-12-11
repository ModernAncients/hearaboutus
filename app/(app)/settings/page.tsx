'use client'

import { ScreenHeader } from '@/components/layout/ScreenHeader'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

export default function SettingsPage() {
  return (
    <div className="space-y-6 pb-6">
      <ScreenHeader title="Settings" />

      {/* Business */}
      <Card padding="md">
        <h3 className="text-body-lg font-semibold text-slate-900 mb-4">
          Business
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div>
              <p className="text-body-sm font-medium text-slate-800">
                Business name
              </p>
              <p className="text-caption text-slate-500">Your Business</p>
            </div>
            <Button variant="ghost" size="small">
              Edit
            </Button>
          </div>
          <div className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
            <div>
              <p className="text-body-sm font-medium text-slate-800">
                Category
              </p>
              <p className="text-caption text-slate-500">Wellness</p>
            </div>
            <Button variant="ghost" size="small">
              Edit
            </Button>
          </div>
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-body-sm font-medium text-slate-800">Domain</p>
              <p className="text-caption text-slate-500">yourbusiness.com</p>
            </div>
            <Button variant="ghost" size="small">
              Edit
            </Button>
          </div>
        </div>
      </Card>

      {/* Team */}
      <Card padding="md">
        <h3 className="text-body-lg font-semibold text-slate-900 mb-4">
          Team
        </h3>
        <div className="space-y-3">
          <Button variant="secondary" fullWidth>
            Invite a collaborator
          </Button>
          <p className="text-caption text-slate-500">
            Manage team (coming soon)
          </p>
        </div>
      </Card>

      {/* Account */}
      <Card padding="md">
        <h3 className="text-body-lg font-semibold text-slate-900 mb-4">
          Account
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2 border-b border-slate-100">
            <div>
              <p className="text-body-sm font-medium text-slate-800">Email</p>
              <p className="text-caption text-slate-500">you@example.com</p>
            </div>
            <Button variant="ghost" size="small">
              Edit
            </Button>
          </div>
          <Button variant="secondary" fullWidth>
            Change password
          </Button>
        </div>
      </Card>

      {/* Billing */}
      <Card padding="md">
        <h3 className="text-body-lg font-semibold text-slate-900 mb-4">
          Billing
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <div>
              <p className="text-body-sm font-medium text-slate-800">Plan</p>
              <p className="text-caption text-slate-500">Free</p>
            </div>
            <Button variant="ghost" size="small">
              Manage
            </Button>
          </div>
        </div>
      </Card>

      {/* About */}
      <Card padding="md">
        <h3 className="text-body-lg font-semibold text-slate-900 mb-4">
          About
        </h3>
        <div className="space-y-2">
          <Link
            href="/about/wis"
            className="block text-body-sm text-reciprocity hover:underline"
          >
            What is Warm Intro Strength?
          </Link>
          <Link
            href="/about/trust-principles"
            className="block text-body-sm text-reciprocity hover:underline"
          >
            Read the trust principles
          </Link>
        </div>
      </Card>

      {/* Sign out */}
      <div className="pt-4">
        <Button variant="destructive" fullWidth>
          Sign out
        </Button>
      </div>
    </div>
  )
}
