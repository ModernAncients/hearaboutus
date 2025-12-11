-- Hear About Us - Initial Database Schema
-- Run this migration in your Supabase SQL editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Businesses table
CREATE TABLE businesses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  domain TEXT,
  logo_url TEXT,
  category TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Customers table
CREATE TABLE customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT,
  phone TEXT,
  name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Brand Stamps (Markers) table
CREATE TABLE brand_stamps (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  stamp_url TEXT,
  copy TEXT,
  color_palette JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Warm Intros table
CREATE TABLE warm_intros (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  friend_email TEXT,
  friend_phone TEXT,
  channel TEXT CHECK (channel IN ('sms', 'email', 'link', 'qr')),
  status TEXT CHECK (status IN ('started', 'shared', 'clicked', 'converted')) DEFAULT 'started',
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Reward Credits table
CREATE TABLE reward_credits (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  amount INTEGER NOT NULL,
  reason TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Analytics Day table
CREATE TABLE analytics_day (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  business_id UUID NOT NULL REFERENCES businesses(id) ON DELETE CASCADE,
  date DATE NOT NULL,
  total_intros INTEGER DEFAULT 0,
  total_shares INTEGER DEFAULT 0,
  total_clicks INTEGER DEFAULT 0,
  total_conversions INTEGER DEFAULT 0,
  warm_intro_strength NUMERIC,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(business_id, date)
);

-- Trust Events table
CREATE TABLE trust_events (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL,
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  customer_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  advocate_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  recipient_id UUID REFERENCES customers(id) ON DELETE SET NULL,
  warm_intro_id UUID REFERENCES warm_intros(id) ON DELETE SET NULL,
  geo JSONB,
  metadata JSONB,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Agent Logs table
CREATE TABLE agent_logs (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  agent_name TEXT NOT NULL,
  action TEXT NOT NULL,
  input_context JSONB,
  output_summary TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Content Items table
CREATE TABLE content_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  type TEXT NOT NULL,
  channel TEXT NOT NULL,
  audience TEXT NOT NULL,
  payload JSONB,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'scheduled', 'sent', 'published')),
  related_event_id UUID REFERENCES trust_events(id) ON DELETE SET NULL,
  business_id UUID REFERENCES businesses(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for performance
CREATE INDEX idx_brand_stamps_business_id ON brand_stamps(business_id);
CREATE INDEX idx_warm_intros_business_id ON warm_intros(business_id);
CREATE INDEX idx_warm_intros_customer_id ON warm_intros(customer_id);
CREATE INDEX idx_warm_intros_status ON warm_intros(status);
CREATE INDEX idx_warm_intros_created_at ON warm_intros(created_at DESC);
CREATE INDEX idx_trust_events_business_id ON trust_events(business_id);
CREATE INDEX idx_trust_events_type ON trust_events(type);
CREATE INDEX idx_trust_events_created_at ON trust_events(created_at DESC);
CREATE INDEX idx_analytics_day_business_id ON analytics_day(business_id);
CREATE INDEX idx_analytics_day_date ON analytics_day(date DESC);
CREATE INDEX idx_content_items_business_id ON content_items(business_id);
CREATE INDEX idx_content_items_status ON content_items(status);
CREATE INDEX idx_agent_logs_agent_name ON agent_logs(agent_name);
CREATE INDEX idx_agent_logs_created_at ON agent_logs(created_at DESC);

-- Row Level Security (RLS) policies
-- Enable RLS on all tables
ALTER TABLE businesses ENABLE ROW LEVEL SECURITY;
ALTER TABLE customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE brand_stamps ENABLE ROW LEVEL SECURITY;
ALTER TABLE warm_intros ENABLE ROW LEVEL SECURITY;
ALTER TABLE reward_credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics_day ENABLE ROW LEVEL SECURITY;
ALTER TABLE trust_events ENABLE ROW LEVEL SECURITY;
ALTER TABLE agent_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE content_items ENABLE ROW LEVEL SECURITY;

-- Basic RLS policies (merchants can only see their own data)
-- Note: These assume Supabase Auth is set up with user_id matching business owners
-- You'll need to add a user_id column to businesses or create a separate businesses_users table

-- Example policy for businesses (adjust based on your auth setup):
-- CREATE POLICY "Merchants can view their own business" ON businesses
--   FOR SELECT USING (auth.uid() IN (SELECT user_id FROM businesses_users WHERE business_id = businesses.id));

