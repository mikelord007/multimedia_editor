import { createClient } from "@supabase/supabase-js";
import { SUPABASE_KEY, SUPABASE_URL } from '.';

const supabase = createClient(
	SUPABASE_URL,
	SUPABASE_KEY,
	{multiTab: false}
);

export default supabase;