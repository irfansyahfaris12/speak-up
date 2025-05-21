import { createClient } from '@supabase/supabase-js';


const supabaseUrl = "https://eqnijdkyonurcdudvqdw.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVxbmlqZGt5b251cmNkdWR2cWR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MzE4NDcsImV4cCI6MjA2MzMwNzg0N30.trUNsqpC7exBfWZheifwAUjRMc7gpjcAZ66aNjiGFpU"
        

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase