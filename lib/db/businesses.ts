import { createClient } from '@/lib/supabase/server'
import type { Business } from '@/lib/types/database'

export async function getBusinessByUserId(userId: string): Promise<Business | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error || !data) return null
  return data
}

export async function getBusinessesByUserId(userId: string): Promise<Business[]> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('businesses')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error || !data) return []
  return data
}

export async function createBusiness(business: {
  name: string
  domain?: string
  logoUrl?: string
  category?: string
  userId: string
}): Promise<Business | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('businesses')
    .insert({
      name: business.name,
      domain: business.domain,
      logo_url: business.logoUrl,
      category: business.category,
      user_id: business.userId,
    })
    .select()
    .single()

  if (error || !data) return null
  return data
}

