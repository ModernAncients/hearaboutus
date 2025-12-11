import Link from 'next/link'
import { MarketingHeader } from '@/components/layout/MarketingHeader'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for getting started',
      features: [
        'Up to 100 warm intros/month',
        'Basic Trust Ledger',
        'Marker creation',
        'Email support',
      ],
      cta: 'Start free',
      highlight: false,
    },
    {
      name: 'Growth',
      price: '$49',
      period: 'month',
      description: 'For growing businesses',
      features: [
        'Unlimited warm intros',
        'Advanced Trust Ledger',
        'WIS analytics',
        'AI-generated narratives',
        'Priority support',
      ],
      cta: 'Start free trial',
      highlight: true,
    },
    {
      name: 'Community',
      price: '$149',
      period: 'month',
      description: 'For communities & networks',
      features: [
        'Everything in Growth',
        'Multi-business management',
        'Network-wide trust graph',
        'Custom integrations',
        'Dedicated support',
      ],
      cta: 'Contact sales',
      highlight: false,
    },
    {
      name: 'Agency',
      price: 'Custom',
      period: '',
      description: 'For agencies managing multiple brands',
      features: [
        'Everything in Community',
        'White-label options',
        'API access',
        'Custom agent training',
        'Account manager',
      ],
      cta: 'Contact sales',
      highlight: false,
    },
  ]

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <MarketingHeader />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1C1E] mb-4">
            Pricing
          </h1>
          <p className="text-lg text-[#6A7280]">
            Choose the plan that fits your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`${plan.highlight ? 'ring-2 ring-[#3A8BFF]' : ''} flex flex-col`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-[#1A1C1E] mb-1">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-[#1A1C1E]">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm text-[#6A7280] ml-1">
                      /{plan.period}
                    </span>
                  )}
                </div>
                <p className="text-sm text-[#6A7280]">{plan.description}</p>
              </div>

              <ul className="flex-1 space-y-2 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="text-sm text-[#1A1C1E] flex items-start">
                    <span className="text-[#3A8BFF] mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/signup" className="block">
                <Button
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#6A7280] mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <Link href="/">
            <Button variant="ghost">← Back to home</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

