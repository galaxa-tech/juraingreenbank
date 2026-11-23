-- Jurain Green Bank — Supabase PostgreSQL Schema
-- Tables for Volunteer Squad, Sapling & Organic Compost Requests, and Contact Messages

-- Enable UUID extension if needed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Volunteers Table
CREATE TABLE IF NOT EXISTS public.volunteers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name TEXT NOT NULL,
    contact TEXT NOT NULL,
    area TEXT DEFAULT 'East Jurain, Dhaka',
    interest TEXT DEFAULT 'general',
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security for Volunteers
ALTER TABLE public.volunteers ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert to volunteers" 
ON public.volunteers FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated read to volunteers" 
ON public.volunteers FOR SELECT TO authenticated USING (true);

-- 2. Sapling & Compost Requests Table
CREATE TABLE IF NOT EXISTS public.sapling_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    reference_code TEXT UNIQUE NOT NULL,
    full_name TEXT NOT NULL,
    phone TEXT NOT NULL,
    plant_type TEXT NOT NULL,
    quantity INTEGER DEFAULT 1,
    area TEXT NOT NULL,
    pickup_preference TEXT DEFAULT 'Nurani Masjid, East Jurain',
    notes TEXT,
    status TEXT DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security for Sapling Requests
ALTER TABLE public.sapling_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert to sapling_requests" 
ON public.sapling_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated read to sapling_requests" 
ON public.sapling_requests FOR SELECT TO authenticated USING (true);

-- 3. Contact Messages Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT,
    phone TEXT,
    subject TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Row Level Security for Contact Messages
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Allow public insert to contact_messages" 
ON public.contact_messages FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow authenticated read to contact_messages" 
ON public.contact_messages FOR SELECT TO authenticated USING (true);
