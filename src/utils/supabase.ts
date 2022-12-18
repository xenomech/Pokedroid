import { createClient } from "@supabase/supabase-js";

const SupabaseAdmin = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_KEY || ""
);

export { SupabaseAdmin };
