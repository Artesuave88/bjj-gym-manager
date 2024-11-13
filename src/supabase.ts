// src/supabase.js

import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://atdupumaodocrzrdjuge.supabase.co';
const SUPABASE_ANON_KEY =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF0ZHVwdW1hb2RvY3J6cmRqdWdlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MTQ4MTgsImV4cCI6MjA0NzA5MDgxOH0.snisbO4G54bnJUxCRCl65E7VUlq_FUi1VVfKv_mwLBY';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
