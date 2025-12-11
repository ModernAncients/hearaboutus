import { Card } from '@/components/ui/Card'
import { StatTile } from '@/components/ui/StatTile'
import { createClient } from '@/lib/supabase/server'
import { getBusinessByUserId } from '@/lib/db/businesses'

export default async function AdvocatesPage() {
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

  // Get advocates (customers who have shared markers)
  const { data: intros } = await supabase
    .from('warm_intros')
    .select(`
      customer_id,
      customers (
        id,
        name,
        email
      )
    `)
    .eq('business_id', business.id)
    .not('customer_id', 'is', null)

  // Count unique advocates and their shares
  const advocateMap = new Map()
  intros?.forEach((intro: any) => {
    if (intro.customer_id && intro.customers) {
      const customerId = intro.customer_id
      if (!advocateMap.has(customerId)) {
        advocateMap.set(customerId, {
          id: customerId,
          name: intro.customers.name,
          email: intro.customers.email,
          shareCount: 0,
        })
      }
      advocateMap.get(customerId).shareCount++
    }
  })

  const advocates = Array.from(advocateMap.values())
  const totalAdvocates = advocates.length
  const totalShares = advocates.reduce((sum, a) => sum + a.shareCount, 0)

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1A1C1E] mb-2">
          Advocates
        </h1>
        <p className="text-[#6A7280]">
          Customers who've shared your Marker
        </p>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4">
        <StatTile
          label="Total Advocates"
          value={totalAdvocates}
          icon={<span className="text-2xl">⭐</span>}
        />
        <StatTile
          label="Total Shares"
          value={totalShares}
          icon={<span className="text-2xl">📤</span>}
        />
      </div>

      {/* Advocates List */}
      {advocates.length === 0 ? (
        <Card>
          <div className="text-center py-12">
            <div className="text-4xl mb-4">⭐</div>
            <p className="text-[#6A7280] mb-2">No advocates yet</p>
            <p className="text-sm text-[#6A7280]">
              Customers who share your Marker will become advocates
            </p>
          </div>
        </Card>
      ) : (
        <div className="space-y-3">
          {advocates.map((advocate) => (
            <Card key={advocate.id}>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-[#1A1C1E]">
                    {advocate.name || advocate.email || 'Anonymous'}
                  </div>
                  <div className="text-sm text-[#6A7280]">
                    {advocate.shareCount} {advocate.shareCount === 1 ? 'share' : 'shares'}
                  </div>
                </div>
                <div className="text-2xl">⭐</div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
