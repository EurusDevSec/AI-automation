import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-anon-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Fallback Local Storage Helper for Offline/Demo Mode
const LOCAL_LEADS_KEY = 'ai_automation_leads';
const LOCAL_LESSONS_KEY = 'ai_automation_lessons';

export const saveLead = async (leadData) => {
  try {
    if (supabaseUrl !== 'https://placeholder.supabase.co') {
      const { data, error } = await supabase.from('leads').insert([leadData]);
      if (!error) return { success: true, data };
    }
  } catch (err) {
    console.warn('Supabase not connected, using fallback storage:', err);
  }

  // Fallback storage
  const existing = JSON.parse(localStorage.getItem(LOCAL_LEADS_KEY) || '[]');
  const newLead = { id: Date.now().toString(), ...leadData, created_at: new Date().toISOString(), status: 'Pending' };
  existing.push(newLead);
  localStorage.getItem && localStorage.setItem(LOCAL_LEADS_KEY, JSON.stringify(existing));
  return { success: true, data: [newLead] };
};

export const getLeads = async () => {
  try {
    if (supabaseUrl !== 'https://placeholder.supabase.co') {
      const { data, error } = await supabase.from('leads').select('*').order('created_at', { ascending: false });
      if (!error && data) return data;
    }
  } catch (err) {
    console.warn('Supabase fetch failed, fallback to local storage:', err);
  }
  return JSON.parse(localStorage.getItem(LOCAL_LEADS_KEY) || '[]');
};

export const updateLessonData = async (sessionNumber, updatedFields) => {
  try {
    if (supabaseUrl !== 'https://placeholder.supabase.co') {
      const { data, error } = await supabase.from('lessons').update(updatedFields).eq('session_number', sessionNumber);
      if (!error) return { success: true, data };
    }
  } catch (err) {
    console.warn('Supabase update failed, fallback to local storage:', err);
  }

  const existing = JSON.parse(localStorage.getItem(LOCAL_LESSONS_KEY) || '{}');
  existing[sessionNumber] = { ...existing[sessionNumber], ...updatedFields };
  localStorage.setItem(LOCAL_LESSONS_KEY, JSON.stringify(existing));
  return { success: true };
};

export const getLocalLessonsOverride = () => {
  return JSON.parse(localStorage.getItem(LOCAL_LESSONS_KEY) || '{}');
};
