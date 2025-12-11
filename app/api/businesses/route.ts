import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'
import { createBusiness } from '@/lib/db/businesses'

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
    const { name, domain, logoUrl, category } = body

    if (!name) {
      return NextResponse.json(
        { error: 'Business name is required' },
        { status: 400 }
      )
    }

    const business = await createBusiness({
      name,
      domain,
      logoUrl,
      category,
      userId: user.id,
    })

    if (!business) {
      return NextResponse.json(
        { error: 'Failed to create business' },
        { status: 500 }
      )
    }

    return NextResponse.json({ business })
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

    const { getBusinessByUserId } = await import('@/lib/db/businesses')
    const business = await getBusinessByUserId(user.id)

    return NextResponse.json({ business })
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}

