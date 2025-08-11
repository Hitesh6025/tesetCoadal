-- Create contact_submissions table
CREATE TABLE IF NOT EXISTS public.contact_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company VARCHAR(255),
    service VARCHAR(255) NOT NULL,
    budget VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    submitted_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Add RLS (Row Level Security) policies if needed
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow inserts (for form submissions)
CREATE POLICY "Allow public inserts" ON public.contact_submissions
    FOR INSERT TO public
    WITH CHECK (true);

-- Create policy to allow reads for authenticated users (optional - for admin panel)
CREATE POLICY "Allow authenticated reads" ON public.contact_submissions
    FOR SELECT TO authenticated
    USING (true);

-- Add indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email ON public.contact_submissions(email);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_submitted_at ON public.contact_submissions(submitted_at);
CREATE INDEX IF NOT EXISTS idx_contact_submissions_service ON public.contact_submissions(service);

-- Add comment to table
COMMENT ON TABLE public.contact_submissions IS 'Store contact form submissions from the website';
