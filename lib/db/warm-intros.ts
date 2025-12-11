import { createClient } from '@/lib/supabase/server'
import type { WarmIntro } from '@/lib/types/database'
import type { WarmIntroStatus, WarmIntroChannel } from '@/lib/types/domain'

export async function getWarmIntrosByBusinessId(
  businessId: string,
  limit = 50
): Promise<WarmIntro[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('warm_intros')
    .select('*')
    .eq('business_id', businessId)
    .order('created_at', { ascending: false })
    .limit(limit)

  if (error || !data) return []
  return data
}

export async function createWarmIntro(intro: {
  businessId: string
  customerId?: string
  friendEmail?: string
  friendPhone?: string
  channel?: WarmIntroChannel
  status?: WarmIntroStatus
  metadata?: Record<string, unknown>
}): Promise<WarmIntro | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('warm_intros')
    .insert({
      business_id: intro.businessId,
      customer_id: intro.customerId,
      friend_email: intro.friendEmail,
      friend_phone: intro.friendPhone,
      channel: intro.channel,
      status: intro.status || 'started',
      metadata: intro.metadata,
    })
    .select()
    .single()

  if (error || !data) return null
  return data
}

export async function updateWarmIntroStatus(
  introId: string,
  status: WarmIntroStatus
): Promise<WarmIntro | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('warm_intros')
    .update({ status })
    .eq('id', introId)
    .select()
    .single()

  if (error || !data) return null
  return data
}

