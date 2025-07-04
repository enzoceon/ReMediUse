// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://aywzejjhnrnhlvuzgerc.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF5d3plampobnJuaGx2dXpnZXJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDkzMTg5ODIsImV4cCI6MjA2NDg5NDk4Mn0.7hkZc21K-KK4YljWUGprktVYFCt00W89n-z-Ljp-Qu4";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    storage: localStorage,
    persistSession: true,
    autoRefreshToken: true,
  }
});