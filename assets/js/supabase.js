/**
 * Jurain Green Bank — Supabase Integration Client
 * Gracefully manages volunteer registrations, sapling requests, and contact messages.
 * Automatically falls back to offline localStorage if credentials are not configured.
 */

(function () {
  const SUPABASE_URL = window.SUPABASE_URL || '';
  const SUPABASE_ANON_KEY = window.SUPABASE_ANON_KEY || '';

  let supabaseClient = null;

  if (SUPABASE_URL && SUPABASE_ANON_KEY && window.supabase) {
    try {
      supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
      console.log('✓ Supabase connection initialized for Jurain Green Bank');
    } catch (err) {
      console.warn('Supabase initialization failed, falling back to local persistence', err);
    }
  }

  // Sync Volunteer
  window.syncVolunteerWithSupabase = async function (volData) {
    if (!supabaseClient) {
      console.info('Volunteer stored locally (Supabase keys pending)');
      return;
    }
    try {
      const { data, error } = await supabaseClient.from('volunteers').insert([{
        full_name: volData.name,
        contact: volData.contact,
        area: volData.area,
        interest: volData.interest,
        created_at: volData.date
      }]);
      if (error) console.error('Error inserting volunteer into Supabase:', error);
      else console.log('Volunteer recorded in Supabase:', data);
    } catch (e) {
      console.error('Supabase volunteer error:', e);
    }
  };

  // Sync Sapling Request
  window.syncRequestWithSupabase = async function (reqData) {
    if (!supabaseClient) {
      console.info('Sapling request stored locally (Supabase keys pending)');
      return;
    }
    try {
      const { data, error } = await supabaseClient.from('sapling_requests').insert([{
        reference_code: reqData.refCode,
        full_name: reqData.name,
        phone: reqData.phone,
        plant_type: reqData.plantType,
        quantity: parseInt(reqData.quantity, 10),
        area: reqData.area,
        notes: reqData.notes,
        status: reqData.status,
        created_at: reqData.date
      }]);
      if (error) console.error('Error inserting sapling request into Supabase:', error);
      else console.log('Sapling request recorded in Supabase:', data);
    } catch (e) {
      console.error('Supabase request error:', e);
    }
  };
})();
