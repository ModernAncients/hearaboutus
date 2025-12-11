import Link from 'next/link'
import { MarketingHeader } from '@/components/layout/MarketingHeader'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function MarketingHome() {
  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <MarketingHeader />

      {/* Hero Section */}
      <section className="px-4 py-12 md:py-20 max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-[#1A1C1E] mb-4 leading-tight">
            Warm intros, made visible.
          </h1>
          <p className="text-lg md:text-xl text-[#6A7280] mb-8 max-w-2xl mx-auto">
            Turn customer advocates into warm introductions with Markers and the Trust Ledger. 
            Build a reciprocity network that grows your business through trust.
          </p>
          <Link href="/signup">
            <Button variant="primary" className="text-lg px-8 py-4">
              Start free
            </Button>
          </Link>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1C1E] text-center mb-8">
            How it works
          </h2>
          <div className="space-y-6 md:grid md:grid-cols-3 md:gap-6 md:space-y-0">
            <Card className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-[#1A1C1E] mb-2">
                Create Your Marker
              </h3>
              <p className="text-[#6A7280]">
                Design a branded trust token that your customers can share. 
                Simple, beautiful, and portable.
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-[#1A1C1E] mb-2">
                Customers Share
              </h3>
              <p className="text-[#6A7280]">
                At checkout, customers choose to vouch for your brand. 
                They share their Marker with friends via SMS, email, or link.
              </p>
            </Card>
            <Card className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold text-[#1A1C1E] mb-2">
                Track Trust
              </h3>
              <p className="text-[#6A7280]">
                See every warm intro in your Trust Ledger. 
                Watch your Warm Intro Strength (WIS) grow over time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1C1E] text-center mb-8">
            Why it matters
          </h2>
          <div className="space-y-6">
            <Card>
              <h3 className="text-xl font-semibold text-[#1A1C1E] mb-3">
                Warm intros convert 10x better than cold outreach
              </h3>
              <p className="text-[#6A7280]">
                When someone you trust recommends a brand, you're far more likely to try it. 
                Hear About Us makes these warm introductions visible and measurable.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-[#1A1C1E] mb-3">
                Build a network-wide trust graph
              </h3>
              <p className="text-[#6A7280]">
                Every Marker shared creates a connection in the trust network. 
                Over time, you'll see how trust flows through your community.
              </p>
            </Card>
            <Card>
              <h3 className="text-xl font-semibold text-[#1A1C1E] mb-3">
                AI-driven narratives tell your story
              </h3>
              <p className="text-[#6A7280]">
                Our AI agents interpret your Trust Ledger and generate stories about 
                how trust moves through your network—perfect for marketing and insights.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1C1E] mb-4">
            See it in action
          </h2>
          <p className="text-[#6A7280] mb-8">
            A mobile-first experience that feels like a native app
          </p>
          <div className="bg-[#F5F7FA] rounded-lg p-8 border-2 border-[#C6CBD4]">
            <div className="text-[#6A7280] text-sm mb-4">Mobile App Preview</div>
            <div className="bg-white rounded-lg p-6 shadow-soft max-w-sm mx-auto">
              <div className="space-y-4">
                <div className="h-8 bg-[#3A8BFF] rounded-md"></div>
                <div className="space-y-2">
                  <div className="h-4 bg-[#C6CBD4] rounded w-3/4"></div>
                  <div className="h-4 bg-[#C6CBD4] rounded w-1/2"></div>
                </div>
                <div className="h-32 bg-[#F5F7FA] rounded-md border-2 border-[#C6CBD4]"></div>
              </div>
              <div className="mt-6 flex justify-around border-t border-[#C6CBD4] pt-4">
                <div className="text-xs text-[#6A7280]">Home</div>
                <div className="text-xs text-[#6A7280]">Marker</div>
                <div className="text-xs text-[#6A7280]">Intros</div>
                <div className="text-xs text-[#6A7280]">Settings</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1A1C1E] mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-[#6A7280] mb-8">
            Start free, scale as you grow
          </p>
          <Link href="/pricing">
            <Button variant="secondary">
              View pricing
            </Button>
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-12 bg-[#1A1C1E] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to make warm intros visible?
          </h2>
          <p className="text-lg text-[#C6CBD4] mb-8">
            Join the reciprocity network and start building your Trust Ledger today.
          </p>
          <Link href="/signup">
            <Button variant="primary" className="bg-[#3A8BFF] hover:bg-[#2A7BEF]">
              Start free
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-4 py-8 border-t border-[#C6CBD4] bg-white">
        <div className="max-w-4xl mx-auto text-center text-sm text-[#6A7280]">
          <p>© 2024 Hear About Us. Built by Modern Ancients.</p>
        </div>
      </footer>
    </div>
  )
}

