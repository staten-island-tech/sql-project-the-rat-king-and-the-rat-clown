import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  'https://ehbsznslwiyptngjydsd.supabase.co',
  '<eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVoYnN6bnNsd2l5cHRuZ2p5ZHNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODM3MzcwNzIsImV4cCI6MTk5OTMxMzA3Mn0.wxyCP9JGSuOMWwEua2utPBLGgNGpCjohyLSP1lrtPOA>'
)
