import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://xhishqdmlhpdmffozedi.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhoaXNocWRtbGhwZG1mZm96ZWRpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcxOTE4NjUsImV4cCI6MjAyMjc2Nzg2NX0.iBDPfePB9GVsgryKDYrW1MMSD6fAsyJCSHJMFPeE2ck";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
