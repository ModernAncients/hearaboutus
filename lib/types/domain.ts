/**
 * Domain types for Hear About Us
 * These represent business logic concepts
 */

export type WarmIntroStatus = 'started' | 'shared' | 'clicked' | 'converted'
export type WarmIntroChannel = 'sms' | 'email' | 'link' | 'qr'

export type AgentName =
  | 'coordinator'
  | 'marker_muse'
  | 'ledger_interpreter'
  | 'reciprocity_scout'
  | 'advocate_whisperer'
  | 'listener'

export type ContentItemType =
  | 'trust_story'
  | 'weekly_digest'
  | 'advocate_thank_you'
  | 'brand_spotlight'
  | 'intro_narrative'

export type ContentItemChannel = 'email' | 'in_app' | 'social' | 'sms' | 'internal'
export type ContentItemAudience = 'merchant' | 'advocate' | 'recipient' | 'global'

export interface Marker {
  id: string
  businessId: string
  copy: string
  colorPalette: {
    primary: string
    secondary: string
    accent: string
  }
  stampUrl?: string
  createdAt: string
}

export interface WarmIntroWithRelations {
  id: string
  businessId: string
  customerId?: string
  friendEmail?: string
  friendPhone?: string
  channel?: WarmIntroChannel
  status: WarmIntroStatus
  metadata?: Record<string, unknown>
  createdAt: string
  // Relations
  business?: {
    id: string
    name: string
    logoUrl?: string
  }
  customer?: {
    id: string
    name?: string
    email?: string
  }
}

export interface TrustLedgerSummary {
  businessId: string
  wisScore: number
  totalIntros: number
  totalShares: number
  totalClicks: number
  totalConversions: number
  recentEvents: TrustEvent[]
}

export interface TrustEvent {
  id: string
  type: string
  businessId?: string
  customerId?: string
  advocateId?: string
  recipientId?: string
  warmIntroId?: string
  geo?: {
    city?: string
    region?: string
    country?: string
    lat?: number
    lng?: number
  }
  metadata?: Record<string, unknown>
  createdAt: string
}

