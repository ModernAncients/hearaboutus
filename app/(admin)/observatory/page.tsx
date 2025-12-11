import { Card } from '@/components/ui/Card'
import { StatTile } from '@/components/ui/StatTile'

export default function ObservatoryPage() {
  // TODO: Fetch real data from Supabase
  const totalTrustEvents = 0
  const totalBusinesses = 0
  const totalContentItems = 0
  const totalAgentLogs = 0

  return (
    <div className="min-h-screen bg-[#F5F7FA] p-4">
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1C1E] mb-2">
            Observatory
          </h1>
          <p className="text-[#6A7280]">
            Internal dashboard for trust flows and network insights
          </p>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatTile
            label="Trust Events"
            value={totalTrustEvents}
            icon={<span className="text-2xl">📊</span>}
          />
          <StatTile
            label="Businesses"
            value={totalBusinesses}
            icon={<span className="text-2xl">🏢</span>}
          />
          <StatTile
            label="Content Items"
            value={totalContentItems}
            icon={<span className="text-2xl">📝</span>}
          />
          <StatTile
            label="Agent Logs"
            value={totalAgentLogs}
            icon={<span className="text-2xl">🤖</span>}
          />
        </div>

        {/* Trust Events Table */}
        <Card>
          <h2 className="text-lg font-semibold text-[#1A1C1E] mb-4">
            Recent Trust Events
          </h2>
          <div className="text-center py-8 text-[#6A7280]">
            <p>No events yet</p>
          </div>
        </Card>

        {/* Trust Flow Map */}
        <Card>
          <h2 className="text-lg font-semibold text-[#1A1C1E] mb-4">
            Trust Flow Map
          </h2>
          <div className="text-center py-8 text-[#6A7280]">
            <p>Trust flow visualization coming soon</p>
          </div>
        </Card>

        {/* Agent Activity */}
        <Card>
          <h2 className="text-lg font-semibold text-[#1A1C1E] mb-4">
            Agent Activity
          </h2>
          <div className="text-center py-8 text-[#6A7280]">
            <p>Agent logs will appear here</p>
          </div>
        </Card>
      </div>
    </div>
  )
}

