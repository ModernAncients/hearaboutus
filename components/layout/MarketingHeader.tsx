import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function MarketingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#C6CBD4]">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-[#1A1C1E]">
          Hear About Us
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/signin">
            <Button variant="ghost" className="text-sm px-4 py-2">
              Sign in
            </Button>
          </Link>
          <Link href="/signup">
            <Button variant="primary" className="text-sm px-4 py-2">
              Start free
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

