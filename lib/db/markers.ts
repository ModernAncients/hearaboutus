import { createClient } from '@/lib/supabase/server'
import type { BrandStamp } from '@/lib/types/database'

export async function getMarkerByBusinessId(businessId: string): Promise<BrandStamp | null> {
  const supabase = await createClient()
  
  const { data, error } = await supabase
    .from('brand_stamps')
    .select('*')
    .eq('business_id', businessId)
    .order('created_at', { ascending: false })
    .limit(1)
    .single()

  if (error || !data) return null
  return data
}

export async function createOrUpdateMarker(marker: {
  businessId: string
  copy: string
  colorPalette: {
    primary: string
    secondary: string
    accent: string
  }
  stampUrl?: string
}): Promise<BrandStamp | null> {
  const supabase = await createClient()
  
  // Check if marker exists
  const existing = await getMarkerByBusinessId(marker.businessId)
  
  if (existing) {
    // Update existing
    const { data, error } = await supabase
      .from('brand_stamps')
      .update({
        copy: marker.copy,
        color_palette: marker.colorPalette,
        stamp_url: marker.stampUrl,
      })
      .eq('id', existing.id)
      .select()
      .single()

    if (error || !data) return null
    return data
  } else {
    // Create new
    const { data, error } = await supabase
      .from('brand_stamps')
      .insert({
        business_id: marker.businessId,
        copy: marker.copy,
        color_palette: marker.colorPalette,
        stamp_url: marker.stampUrl,
      })
      .select()
      .single()

    if (error || !data) return null
    return data
  }
}

