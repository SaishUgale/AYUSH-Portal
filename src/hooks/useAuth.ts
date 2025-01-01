import { useState, useEffect } from 'react';
import { LoginCredentials, AuthState } from '../types/auth';
import { loginWithCredentials, signUpWithCredentials } from '../services/auth';
import { supabase } from '../lib/supabase';

export function useAuth() {
  const [authState, setAuthState] = useState<AuthState>({
    isAuthenticated: false,
    user: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const initAuth = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        setAuthState({
          isAuthenticated: !!session,
          user: session?.user ?? null,
          loading: false,
          error: null,
        });
      } catch (error) {
        setAuthState({
          isAuthenticated: false,
          user: null,
          loading: false,
          error: 'Failed to initialize auth',
        });
      }
    };

    initAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setAuthState({
        isAuthenticated: !!session,
        user: session?.user ?? null,
        loading: false,
        error: null,
      });
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async (credentials: LoginCredentials) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      const { session } = await loginWithCredentials(credentials);
      
      if (!session) {
        throw new Error('Login failed - no session returned');
      }

      setAuthState({
        isAuthenticated: true,
        user: session.user,
        loading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Login failed',
      }));
    }
  };

  const signUp = async (credentials: LoginCredentials & { name: string }) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }));
      const { session } = await signUpWithCredentials(credentials);
      
      if (!session) {
        throw new Error('Sign up successful. Please check your email to confirm your account.');
      }

      setAuthState({
        isAuthenticated: true,
        user: session.user,
        loading: false,
        error: null,
      });
    } catch (error) {
      setAuthState(prev => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : 'Sign up failed',
      }));
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return { ...authState, login, signUp, logout };
}