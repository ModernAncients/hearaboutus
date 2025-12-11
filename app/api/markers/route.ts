import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createOrUpdateMarker } from '@/lib/db/markers'

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body = await request.json()
    const { businessId, copy, colorPalette, stampUrl } = body

    if (!businessId || !copy || !colorPalette) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const marker = await createOrUpdateMarker({
      businessId,
      copy,
      colorPalette,
      stampUrl,
    })

    if (!marker) {
      return NextResponse.json(
        { error: 'Failed to create marker' },
        { status: 500 }
      )
    }

    return NextResponse.json({ marker })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const businessId = searchParams.get('businessId')

    if (!businessId) {
      return NextResponse.json(
        { error: 'businessId required' },
        { status: 400 }
      )
    }

    const { getMarkerByBusinessId } = await import('@/lib/db/markers')
    const marker = await getMarkerByBusinessId(businessId)

    return NextResponse.json({ marker })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

