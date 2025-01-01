import { LoginCredentials } from '../types/auth';
import { supabase } from '../lib/supabase';

export async function loginWithCredentials({ email, password }: LoginCredentials) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function signUpWithCredentials({ 
  email, 
  password, 
  name 
}: LoginCredentials & { name: string }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        name,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}