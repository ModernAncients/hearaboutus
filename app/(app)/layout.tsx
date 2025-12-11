import { AppShell } from '@/components/layout/AppShell'
import { createClient } from '@/lib/supabase/server'
import { getBusinessByUserId } from '@/lib/db/businesses'

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  let businessName = 'Hear About Us'
  if (user) {
    const business = await getBusinessByUserId(user.id)
    if (business) {
      businessName = business.name
    }
  }

  return <AppShell businessName={businessName}>{children}</AppShell>
}
