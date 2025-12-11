import { StatTile } from '@/components/ui/StatTile'
import { Card } from '@/components/ui/Card'
import { createClient } from '@/lib/supabase/server'
import { getBusinessByUserId } from '@/lib/db/businesses'
import { getAnalyticsByBusinessId } from '@/lib/db/analytics'
import { getWarmIntrosByBusinessId } from '@/lib/db/warm-intros'
import Link from 'next/link'

export default async function HomePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const business = await getBusinessByUserId(user.id)
  
  if (!business) {
    return (
      <div className="p-4">
        <Card>
          <div className="text-center py-8">
            <p className="text-[#6A7280] mb-4">No business found</p>
            <Link href="/signup/onboarding">
              <button className="text-[#3A8BFF] font-medium">
                Set up your business →
              </button>
            </Link>
          </div>
        </Card>
      </div>
    )
  }

  const analytics = await getAnalyticsByBusinessId(business.id)
  const recentIntros = await getWarmIntrosByBusinessId(business.id, 5)

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1A1C1E] mb-4">
          Trust Ledger
        </h1>
        <p className="text-[#6A7280] mb-6">
          Your warm intro strength and activity overview
        </p>
      </div>

      {/* WIS Score */}
      <Card className="bg-gradient-to-br from-[#3A8BFF] to-[#2A7BEF] text-white">
        <div className="text-sm opacity-90 mb-1">Warm Intro Strength</div>
        <div className="text-4xl font-bold mb-2">
          {typeof analytics.wisScore === 'number' ? analytics.wisScore.toFixed(1) : '0.0'}
        </div>
        <div className="text-sm opacity-90">
          {analytics.wisScore === 0 ? 'Start sharing Markers to build your WIS' : 'Growing strong'}
        </div>
      </Card>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <StatTile
          label="Total Intros"
          value={analytics.totalIntros}
          icon={<span className="text-2xl">🤝</span>}
        />
        <StatTile
          label="Shares"
          value={analytics.totalShares}
          icon={<span className="text-2xl">📤</span>}
        />
        <StatTile
          label="Clicks"
          value={analytics.totalClicks}
          icon={<span className="text-2xl">👆</span>}
        />
        <StatTile
          label="Conversions"
          value={analytics.totalConversions}
          icon={<span className="text-2xl">✅</span>}
        />
      </div>

      {/* Recent Activity */}
      <Card>
        <h2 className="text-lg font-semibold text-[#1A1C1E] mb-4">
          Recent Activity
        </h2>
        {recentIntros.length === 0 ? (
          <div className="text-center py-8 text-[#6A7280]">
            <p className="mb-2">No activity yet</p>
            <p className="text-sm">
              Create your first Marker to start tracking warm intros
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {recentIntros.map((intro) => (
              <div
                key={intro.id}
                className="flex items-center justify-between py-2 border-b border-[#C6CBD4] last:border-0"
              >
                <div>
                  <div className="text-sm font-medium text-[#1A1C1E]">
                    {intro.friend_email || intro.friend_phone || 'Anonymous'}
                  </div>
                  <div className="text-xs text-[#6A7280]">
                    {new Date(intro.created_at).toLocaleDateString()}
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    intro.status === 'converted'
                      ? 'bg-green-100 text-green-700'
                      : intro.status === 'clicked'
                      ? 'bg-blue-100 text-blue-700'
                      : intro.status === 'shared'
                      ? 'bg-yellow-100 text-yellow-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {intro.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  )
}
