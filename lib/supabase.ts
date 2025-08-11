import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our blog data
export interface Blog {
  id: string
  title: string
  url_title: string | null
  custom_url: string | null
  short_description: string // metaDescription
  tags: string[]
  author: string // authorName
  category: string[]
  content: { image: string; paragraph: string }[]
  thumbnail: string | null // featuredImage
  created_at: string
  updated_at: string
}

// Types for contact submissions
export interface ContactSubmission {
  id: string
  first_name: string
  last_name: string
  email: string
  phone?: string | null
  company?: string | null
  service: string
  budget: string
  description: string
  submitted_at: string
  created_at: string
  updated_at: string
}
