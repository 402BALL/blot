import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our database
export interface User {
  id: string;
  email?: string;
  twitter_handle?: string;
  wallet_address?: string;
  created_at: string;
}

export interface Bot {
  id: string;
  user_id: string;
  name: string;
  type: 'sniper' | 'dca' | 'copy' | 'grid';
  status: 'running' | 'paused' | 'stopped';
  config: Record<string, any>;
  pnl: number;
  trades: number;
  uptime: number;
  is_marketplace: boolean;
  marketplace_id?: string;
  created_at: string;
}

export interface MarketplaceBot {
  id: string;
  name: string;
  description: string;
  type: 'sniper' | 'dca' | 'copy' | 'grid';
  author_id: string;
  author_name: string;
  price: number;
  users_count: number;
  avg_pnl: number;
  win_rate: number;
  created_at: string;
}

export interface Activity {
  id: string;
  user_id: string;
  action: string;
  created_at: string;
}

