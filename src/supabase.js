import { createClient } from "@supabase/supabase-js";

console.log(process.env);
const supabaseUrl = "https://jiwmiywskwvnsszhupxz.supabase.co";
const supabaseKey = process.env.REACT_APP_SUPABASEKEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
