import { createClient } from '@/lib/supabase/server'

export async function getAnalyticsByBusinessId(businessId: string) {
  const supabase = await createClient()
  
  // Get latest analytics day
  const { data: analytics } = await supabase
    .from('analytics_day')
    .select('*')
    .eq('business_id', businessId)
    .order('date', { ascending: false })
    .limit(1)
    .single()

  // Get warm intros counts
  const { count: totalIntros } = await supabase
    .from('warm_intros')
    .select('*', { count: 'exact', head: true })
    .eq('business_id', businessId)

  const { count: totalShares } = await supabase
    .from('warm_intros')
    .select('*', { count: 'exact', head: true })
    .eq('business_id', businessId)
    .eq('status', 'shared')

  const { count: totalClicks } = await supabase
    .from('warm_intros')
    .select('*', { count: 'exact', head: true })
    .eq('business_id', businessId)
    .eq('status', 'clicked')

  const { count: totalConversions } = await supabase
    .from('warm_intros')
    .select('*', { count: 'exact', head: true })
    .eq('business_id', businessId)
    .eq('status', 'converted')

  return {
    wisScore: analytics?.warm_intro_strength || 0,
    totalIntros: totalIntros || 0,
    totalShares: totalShares || 0,
    totalClicks: totalClicks || 0,
    totalConversions: totalConversions || 0,
  }
}

