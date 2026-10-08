-- ==============================================================================
-- Dananir (دنانير) - Supabase Database Schema (Free Tier Ready)
-- ==============================================================================
-- Run this script in your Supabase SQL Editor:
-- Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Create table for merchant onboarding applications & leads
CREATE TABLE IF NOT EXISTS public.merchant_leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    store_name TEXT NOT NULL,
    instagram_handle TEXT NOT NULL,
    merchant_name TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    governorate TEXT NOT NULL,
    category TEXT NOT NULL,
    notes TEXT,
    plan_tier TEXT DEFAULT 'annual_350k',
    status TEXT DEFAULT 'pending' CHECK (status IN ('pending', 'contacted', 'setup_in_progress', 'active', 'rejected')),
    ip_address TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Indexes for fast search and admin filtering
CREATE INDEX IF NOT EXISTS idx_merchant_leads_status ON public.merchant_leads(status);
CREATE INDEX IF NOT EXISTS idx_merchant_leads_created_at ON public.merchant_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_merchant_leads_phone ON public.merchant_leads(phone_number);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.merchant_leads ENABLE ROW LEVEL SECURITY;

-- 4. Policies:
-- Allow anyone (anonymous visitors) to submit an onboarding application
CREATE POLICY "Allow public insert to merchant_leads"
    ON public.merchant_leads
    FOR INSERT
    TO public
    WITH CHECK (true);

-- Allow authenticated admins to view all applications
CREATE POLICY "Allow authenticated read to merchant_leads"
    ON public.merchant_leads
    FOR SELECT
    TO authenticated
    USING (true);

-- Allow authenticated admins to update application status
CREATE POLICY "Allow authenticated update to merchant_leads"
    ON public.merchant_leads
    FOR UPDATE
    TO authenticated
    USING (true);

-- 5. Trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

DROP TRIGGER IF EXISTS trigger_merchant_leads_updated_at ON public.merchant_leads;
CREATE TRIGGER trigger_merchant_leads_updated_at
    BEFORE UPDATE ON public.merchant_leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

COMMENT ON TABLE public.merchant_leads IS 'Merchant onboarding leads for Dananir e-commerce platform';
