import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL || "erro";
const supabaseKey = process.env.SUPABASE_KEY || "erro";

const supabase = createClient(supabaseUrl, supabaseKey);
