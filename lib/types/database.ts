/**
 * Database types for Hear About Us
 * These types represent the Supabase/Postgres schema
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      businesses: {
        Row: {
          id: string
          name: string
          domain: string | null
          logo_url: string | null
          category: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          domain?: string | null
          logo_url?: string | null
          category?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          domain?: string | null
          logo_url?: string | null
          category?: string | null
          created_at?: string
        }
      }
      customers: {
        Row: {
          id: string
          email: string | null
          phone: string | null
          name: string | null
          created_at: string
        }
        Insert: {
          id?: string
          email?: string | null
          phone?: string | null
          name?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string | null
          phone?: string | null
          name?: string | null
          created_at?: string
        }
      }
      brand_stamps: {
        Row: {
          id: string
          business_id: string
          stamp_url: string | null
          copy: string | null
          color_palette: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          stamp_url?: string | null
          copy?: string | null
          color_palette?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          stamp_url?: string | null
          copy?: string | null
          color_palette?: Json | null
          created_at?: string
        }
      }
      warm_intros: {
        Row: {
          id: string
          business_id: string
          customer_id: string | null
          friend_email: string | null
          friend_phone: string | null
          channel: 'sms' | 'email' | 'link' | 'qr' | null
          status: 'started' | 'shared' | 'clicked' | 'converted'
          metadata: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          customer_id?: string | null
          friend_email?: string | null
          friend_phone?: string | null
          channel?: 'sms' | 'email' | 'link' | 'qr' | null
          status?: 'started' | 'shared' | 'clicked' | 'converted'
          metadata?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          customer_id?: string | null
          friend_email?: string | null
          friend_phone?: string | null
          channel?: 'sms' | 'email' | 'link' | 'qr' | null
          status?: 'started' | 'shared' | 'clicked' | 'converted'
          metadata?: Json | null
          created_at?: string
        }
      }
      reward_credits: {
        Row: {
          id: string
          business_id: string
          customer_id: string | null
          amount: number
          reason: string | null
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          customer_id?: string | null
          amount: number
          reason?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          customer_id?: string | null
          amount?: number
          reason?: string | null
          created_at?: string
        }
      }
      analytics_day: {
        Row: {
          id: string
          business_id: string
          date: string
          total_intros: number
          total_shares: number
          total_clicks: number
          total_conversions: number
          warm_intro_strength: number | null
          created_at: string
        }
        Insert: {
          id?: string
          business_id: string
          date: string
          total_intros?: number
          total_shares?: number
          total_clicks?: number
          total_conversions?: number
          warm_intro_strength?: number | null
          created_at?: string
        }
        Update: {
          id?: string
          business_id?: string
          date?: string
          total_intros?: number
          total_shares?: number
          total_clicks?: number
          total_conversions?: number
          warm_intro_strength?: number | null
          created_at?: string
        }
      }
      trust_events: {
        Row: {
          id: string
          type: string
          business_id: string | null
          customer_id: string | null
          advocate_id: string | null
          recipient_id: string | null
          warm_intro_id: string | null
          geo: Json | null
          metadata: Json | null
          created_at: string
        }
        Insert: {
          id?: string
          type: string
          business_id?: string | null
          customer_id?: string | null
          advocate_id?: string | null
          recipient_id?: string | null
          warm_intro_id?: string | null
          geo?: Json | null
          metadata?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          type?: string
          business_id?: string | null
          customer_id?: string | null
          advocate_id?: string | null
          recipient_id?: string | null
          warm_intro_id?: string | null
          geo?: Json | null
          metadata?: Json | null
          created_at?: string
        }
      }
      agent_logs: {
        Row: {
          id: string
          agent_name: string
          action: string
          input_context: Json | null
          output_summary: string | null
          created_at: string
        }
        Insert: {
          id?: string
          agent_name: string
          action: string
          input_context?: Json | null
          output_summary?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          agent_name?: string
          action?: string
          input_context?: Json | null
          output_summary?: string | null
          created_at?: string
        }
      }
      content_items: {
        Row: {
          id: string
          type: string
          channel: string
          audience: string
          payload: Json | null
          status: string
          related_event_id: string | null
          business_id: string | null
          created_at: string
        }
        Insert: {
          id?: string
          type: string
          channel: string
          audience: string
          payload?: Json | null
          status?: string
          related_event_id?: string | null
          business_id?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          type?: string
          channel?: string
          audience?: string
          payload?: Json | null
          status?: string
          related_event_id?: string | null
          business_id?: string | null
          created_at?: string
        }
      }
    }
  }
}

// Convenience types
export type Business = Database['public']['Tables']['businesses']['Row']
export type Customer = Database['public']['Tables']['customers']['Row']
export type BrandStamp = Database['public']['Tables']['brand_stamps']['Row']
export type WarmIntro = Database['public']['Tables']['warm_intros']['Row']
export type TrustEvent = Database['public']['Tables']['trust_events']['Row']
export type AnalyticsDay = Database['public']['Tables']['analytics_day']['Row']
export type ContentItem = Database['public']['Tables']['content_items']['Row']

