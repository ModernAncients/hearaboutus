'use client'

import { useState, useEffect } from 'react'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { createClient } from '@/lib/supabase/client'

export default function MarkerPage() {
  const [copy, setCopy] = useState('I had a great experience with this brand and think you would too!')
  const [colors, setColors] = useState({
    primary: '#3A8BFF',
    secondary: '#E5B76A',
    accent: '#1A1C1E',
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [businessId, setBusinessId] = useState<string | null>(null)

  useEffect(() => {
    async function loadBusinessAndMarker() {
      try {
        const supabase = createClient()
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!user) return

        // Get business
        const businessRes = await fetch('/api/businesses')
        const businessData = await businessRes.json()
        
        if (businessData.business) {
          setBusinessId(businessData.business.id)

          // Get marker
          const markerRes = await fetch(`/api/markers?businessId=${businessData.business.id}`)
          const markerData = await markerRes.json()

          if (markerData.marker) {
            setCopy(markerData.marker.copy || copy)
            if (markerData.marker.color_palette) {
              setColors(markerData.marker.color_palette)
            }
          }
        }
      } catch (error) {
        console.error('Error loading marker:', error)
      } finally {
        setLoading(false)
      }
    }

    loadBusinessAndMarker()
  }, [])

  const colorPresets = [
    { primary: '#3A8BFF', secondary: '#E5B76A', accent: '#1A1C1E' },
    { primary: '#E5B76A', secondary: '#3A8BFF', accent: '#2F3742' },
    { primary: '#2F3742', secondary: '#3A8BFF', accent: '#E5B76A' },
  ]

  const handleSave = async () => {
    if (!businessId) {
      alert('Please set up your business first')
      return
    }

    setSaving(true)
    try {
      const response = await fetch('/api/markers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          businessId,
          copy,
          colorPalette: colors,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to save marker')
      }

      alert('Marker saved successfully!')
    } catch (error: any) {
      alert(error.message || 'Failed to save marker')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="p-4">
        <div className="text-center py-8 text-[#6A7280]">Loading...</div>
      </div>
    )
  }

  return (
    <div className="p-4 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#1A1C1E] mb-2">
          Your Marker
        </h1>
        <p className="text-[#6A7280]">
          Design the trust token your customers will share
        </p>
      </div>

      {/* Live Preview */}
      <Card
        className="p-6"
        style={{
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          color: colors.accent === '#1A1C1E' ? 'white' : colors.accent,
        }}
      >
        <div className="text-center">
          <div className="text-sm opacity-90 mb-2">MARKER</div>
          <p className="text-lg font-medium mb-4">{copy}</p>
          <div className="text-xs opacity-75">Share this with someone you trust</div>
        </div>
      </Card>

      {/* Editor */}
      <Card>
        <h2 className="text-lg font-semibold text-[#1A1C1E] mb-4">
          Customize
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1A1C1E] mb-2">
              Marker Copy
            </label>
            <textarea
              value={copy}
              onChange={(e) => setCopy(e.target.value)}
              className="w-full px-4 py-3 rounded-md border-2 border-[#C6CBD4] focus:border-[#3A8BFF] focus:outline-none transition-colors"
              rows={3}
              placeholder="What should your Marker say?"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1C1E] mb-2">
              Color Palette
            </label>
            <div className="grid grid-cols-3 gap-2 mb-3">
              {colorPresets.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => setColors(preset)}
                  className="h-12 rounded-md border-2 border-[#C6CBD4] overflow-hidden flex"
                >
                  <div
                    className="flex-1"
                    style={{ backgroundColor: preset.primary }}
                  />
                  <div
                    className="flex-1"
                    style={{ backgroundColor: preset.secondary }}
                  />
                </button>
              ))}
            </div>
          </div>

          <Button
            variant="primary"
            className="w-full"
            onClick={handleSave}
            disabled={saving || !businessId}
          >
            {saving ? 'Saving...' : 'Save Marker'}
          </Button>
        </div>
      </Card>
    </div>
  )
}
