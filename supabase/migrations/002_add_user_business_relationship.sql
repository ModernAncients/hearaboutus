-- Add user_id column to businesses table to link with Supabase Auth users
-- This allows merchants to own their businesses

ALTER TABLE businesses ADD COLUMN IF NOT EXISTS user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE;

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_businesses_user_id ON businesses(user_id);

-- Update RLS policies to allow merchants to manage their own businesses
DROP POLICY IF EXISTS "Merchants can view their own business" ON businesses;
CREATE POLICY "Merchants can view their own business" ON businesses
  FOR SELECT USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Merchants can insert their own business" ON businesses;
CREATE POLICY "Merchants can insert their own business" ON businesses
  FOR INSERT WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Merchants can update their own business" ON businesses;
CREATE POLICY "Merchants can update their own business" ON businesses
  FOR UPDATE USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Merchants can delete their own business" ON businesses;
CREATE POLICY "Merchants can delete their own business" ON businesses
  FOR DELETE USING (auth.uid() = user_id);

-- RLS policies for brand_stamps (merchants can manage their own markers)
DROP POLICY IF EXISTS "Merchants can manage their brand stamps" ON brand_stamps;
CREATE POLICY "Merchants can manage their brand stamps" ON brand_stamps
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = brand_stamps.business_id
      AND businesses.user_id = auth.uid()
    )
  );

-- RLS policies for warm_intros (merchants can view their own intros)
DROP POLICY IF EXISTS "Merchants can view their warm intros" ON warm_intros;
CREATE POLICY "Merchants can view their warm intros" ON warm_intros
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = warm_intros.business_id
      AND businesses.user_id = auth.uid()
    )
  );

DROP POLICY IF EXISTS "Merchants can insert warm intros" ON warm_intros;
CREATE POLICY "Merchants can insert warm intros" ON warm_intros
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = warm_intros.business_id
      AND businesses.user_id = auth.uid()
    )
  );

-- RLS policies for analytics_day
DROP POLICY IF EXISTS "Merchants can view their analytics" ON analytics_day;
CREATE POLICY "Merchants can view their analytics" ON analytics_day
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = analytics_day.business_id
      AND businesses.user_id = auth.uid()
    )
  );

-- RLS policies for trust_events
DROP POLICY IF EXISTS "Merchants can view their trust events" ON trust_events;
CREATE POLICY "Merchants can view their trust events" ON trust_events
  FOR SELECT USING (
    business_id IS NULL OR
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = trust_events.business_id
      AND businesses.user_id = auth.uid()
    )
  );

-- RLS policies for content_items
DROP POLICY IF EXISTS "Merchants can view their content items" ON content_items;
CREATE POLICY "Merchants can view their content items" ON content_items
  FOR SELECT USING (
    business_id IS NULL OR
    EXISTS (
      SELECT 1 FROM businesses
      WHERE businesses.id = content_items.business_id
      AND businesses.user_id = auth.uid()
    )
  );

