import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createWarmIntro, getWarmIntrosByBusinessId } from '@/lib/db/warm-intros'

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
    const { businessId, customerId, friendEmail, friendPhone, channel, metadata } = body

    if (!businessId) {
      return NextResponse.json(
        { error: 'businessId required' },
        { status: 400 }
      )
    }

    const intro = await createWarmIntro({
      businessId,
      customerId,
      friendEmail,
      friendPhone,
      channel,
      metadata,
    })

    if (!intro) {
      return NextResponse.json(
        { error: 'Failed to create warm intro' },
        { status: 500 }
      )
    }

    // TODO: Log trust event
    // TODO: Trigger AI agents if needed

    return NextResponse.json({ intro })
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
    const limit = parseInt(searchParams.get('limit') || '50')

    if (!businessId) {
      return NextResponse.json(
        { error: 'businessId required' },
        { status: 400 }
      )
    }

    const intros = await getWarmIntrosByBusinessId(businessId, limit)

    return NextResponse.json({ intros })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

