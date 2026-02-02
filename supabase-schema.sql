-- Users table (extends Supabase auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT,
  twitter_handle TEXT,
  wallet_address TEXT,
  blot_balance INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id);

-- Bots table
CREATE TABLE public.bots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  name TEXT NOT NULL,
  type TEXT NOT NULL CHECK (type IN ('sniper', 'dca', 'copy', 'grid')),
  status TEXT DEFAULT 'running' CHECK (status IN ('running', 'paused', 'stopped')),
  config JSONB DEFAULT '{}',
  pnl DECIMAL DEFAULT 0,
  trades INTEGER DEFAULT 0,
  uptime DECIMAL DEFAULT 100,
  is_marketplace BOOLEAN DEFAULT FALSE,
  marketplace_id UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.bots ENABLE ROW LEVEL SECURITY;

-- Bots policies
CREATE POLICY "Users can view own bots" ON public.bots
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own bots" ON public.bots
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own bots" ON public.bots
  FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own bots" ON public.bots
  FOR DELETE USING (auth.uid() = user_id);

-- Marketplace bots table
CREATE TABLE public.marketplace_bots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  description TEXT,
  type TEXT NOT NULL CHECK (type IN ('sniper', 'dca', 'copy', 'grid')),
  author_id UUID REFERENCES auth.users(id),
  author_name TEXT,
  price INTEGER DEFAULT 0,
  users_count INTEGER DEFAULT 0,
  avg_pnl DECIMAL DEFAULT 0,
  win_rate DECIMAL DEFAULT 0,
  config JSONB DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.marketplace_bots ENABLE ROW LEVEL SECURITY;

-- Marketplace policies (everyone can view)
CREATE POLICY "Anyone can view marketplace bots" ON public.marketplace_bots
  FOR SELECT USING (true);

CREATE POLICY "Users can create marketplace bots" ON public.marketplace_bots
  FOR INSERT WITH CHECK (auth.uid() = author_id);

-- Activity log
CREATE TABLE public.activity (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) NOT NULL,
  action TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public.activity ENABLE ROW LEVEL SECURITY;

-- Activity policies
CREATE POLICY "Users can view own activity" ON public.activity
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create own activity" ON public.activity
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Function to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email)
  VALUES (NEW.id, NEW.email);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger for new user
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Insert some sample marketplace bots
INSERT INTO public.marketplace_bots (name, description, type, author_name, price, users_count, avg_pnl, win_rate) VALUES
  ('Alpha Sniper Pro', 'High-speed token sniper with MEV protection and smart entry points', 'sniper', 'anonymous', 500, 234, 847, 72),
  ('Smart DCA Engine', 'AI-powered DCA bot that optimizes buy timing based on market conditions', 'dca', 'anonymous', 300, 567, 156, 89),
  ('Whale Tracker Elite', 'Copy trades from top performing wallets with customizable filters', 'copy', 'anonymous', 750, 123, 2341, 65),
  ('Grid Master', 'Advanced grid trading bot for sideways markets with auto-adjustment', 'grid', 'anonymous', 400, 89, 423, 78);

