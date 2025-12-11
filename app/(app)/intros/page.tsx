import { Card } from '@/components/ui/Card'
import { createClient } from '@/lib/supabase/server'
import { getBusinessByUserId } from '@/lib/db/businesses'
import { getWarmIntrosByBusinessId } from '@/lib/db/warm-intros'

export default async function IntrosPage() {
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
          <div className="text-center py-8 text-[#6A7280]">
            <p>Please set up your business first</p>
          </div>
        </Card>
      </div>
    )
  }

  const intros = await getWarmIntrosByBusinessId(business.id)

  return (
    <div className="p-4 space-y-4">
      <div>
        <h1 className="text-2xl font-bold text-[#1A1C1E] mb-2">
          Warm Intros
        </h1>
        <p className="text-[#6A7280]">
          Track every warm introduction in your network
        </p>
      </div>

      {intros.length === 0 ? (
        <Card>
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🤝</div>
            <p className="text-[#6A7280] mb-2">No warm intros yet</p>
            <p className="text-sm text-[#6A7280]">
              When customers share your Marker, they'll appear here
            </p>
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {intros.map((intro) => (
            <Card key={intro.id}>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="font-semibold text-[#1A1C1E] mb-1">
                    {intro.friend_email || intro.friend_phone || 'Anonymous'}
                  </div>
                  <div className="text-sm text-[#6A7280] mb-2">
                    Shared via {intro.channel || 'unknown'}
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
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
