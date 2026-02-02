'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import LoadingScreen from '@/components/LoadingScreen';
import { usePhantom } from '@/hooks/usePhantom';
import { supabase } from '@/lib/supabase';

// Types
interface Bot {
  id: string;
  name: string;
  type: 'sniper' | 'dca' | 'copy' | 'grid';
  status: 'running' | 'paused' | 'stopped';
  config: any;
  createdAt: string;
  pnl: number;
  trades: number;
  uptime: number;
  isMarketplace?: boolean;
}

interface MarketplaceBot {
  id: string;
  name: string;
  description: string;
  type: 'sniper' | 'dca' | 'copy' | 'grid';
  author: string;
  price: number;
  users: number;
  pnl: number;
  winRate: number;
}

// Marketplace data (will come from Supabase later)
const marketplaceBots: MarketplaceBot[] = [
  { id: 'm1', name: 'Alpha Sniper Pro', description: 'High-speed token sniper with MEV protection and smart entry points', type: 'sniper', author: '0x7aK...3mP', price: 500, users: 234, pnl: 847, winRate: 72 },
  { id: 'm2', name: 'Smart DCA Engine', description: 'AI-powered DCA bot that optimizes buy timing based on market conditions', type: 'dca', author: '0x9bF...2nQ', price: 300, users: 567, pnl: 156, winRate: 89 },
  { id: 'm3', name: 'Whale Tracker Elite', description: 'Copy trades from top performing wallets with customizable filters', type: 'copy', author: '0x3cD...8xR', price: 750, users: 123, pnl: 2341, winRate: 65 },
  { id: 'm4', name: 'Grid Master', description: 'Advanced grid trading bot for sideways markets with auto-adjustment', type: 'grid', author: '0x5eG...1yT', price: 400, users: 89, pnl: 423, winRate: 78 },
];

export default function AppPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'signin' | 'email'>('signin');
  const [emailInput, setEmailInput] = useState('');
  const [authLoading, setAuthLoading] = useState(false);
  const [authMessage, setAuthMessage] = useState('');
  const [showCreateBot, setShowCreateBot] = useState(false);
  const [showBotDetails, setShowBotDetails] = useState<Bot | null>(null);
  const [createBotStep, setCreateBotStep] = useState(1);
  const [selectedBotType, setSelectedBotType] = useState<string | null>(null);
  const [messages, setMessages] = useState([{ role: 'bot', content: 'gm, how can I help you?' }]);
  const [input, setInput] = useState('');
  const [activeView, setActiveView] = useState<'bots' | 'terminal' | 'marketplace' | 'leaderboard'>('bots');
  const [marketplaceFilter, setMarketplaceFilter] = useState<string>('all');
  
  // Phantom wallet
  const phantom = usePhantom();
  
  // User data
  const [bots, setBots] = useState<Bot[]>([]);
  const [activity, setActivity] = useState<{id: number; action: string; time: string}[]>([]);
  
  // Bot creation form
  const [botForm, setBotForm] = useState({
    name: '',
    buyAmount: '0.5', slippage: '1', takeProfit: '100', stopLoss: '50', antiMev: true,
    token: '', amountPerBuy: '0.1', interval: '1h', totalBudget: '10',
    walletAddress: '', copyPercentage: '10', minTradeSize: '0.1',
    lowerPrice: '', upperPrice: '', gridCount: '10', investment: '1',
  });
  
  const [openSections, setOpenSections] = useState({ activity: true, orders: true, settings: false, wallet: true });
  const toggleSection = (section: keyof typeof openSections) => setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));

  // Simulate bot activity
  const simulateBotActivity = useCallback(() => {
    setBots(prevBots => prevBots.map(bot => {
      if (bot.status !== 'running') return bot;
      
      // Random trade simulation
      const shouldTrade = Math.random() > 0.7;
      if (!shouldTrade) return bot;
      
      const isWin = Math.random() > 0.35; // 65% win rate
      const tradeAmount = Math.random() * 0.5;
      const pnlChange = isWin ? tradeAmount : -tradeAmount * 0.5;
      
      return {
        ...bot,
        pnl: Math.round((bot.pnl + pnlChange) * 100) / 100,
        trades: bot.trades + 1,
      };
    }));
  }, []);

  // Check Supabase auth session
  useEffect(() => {
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsLoggedIn(true);
        setUser(session.user);
      }
    };
    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session) {
        setIsLoggedIn(true);
        setUser(session.user);
        addActivity('Signed in');
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  // Load data and start simulation
  useEffect(() => {
    const savedBots = localStorage.getItem('blot_bots');
    const savedActivity = localStorage.getItem('blot_activity');
    if (savedBots) setBots(JSON.parse(savedBots));
    if (savedActivity) setActivity(JSON.parse(savedActivity));
    
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Simulation interval
  useEffect(() => {
    const interval = setInterval(simulateBotActivity, 5000); // Every 5 seconds
    return () => clearInterval(interval);
  }, [simulateBotActivity]);

  // Save data
  useEffect(() => {
    if (bots.length > 0) localStorage.setItem('blot_bots', JSON.stringify(bots));
    if (activity.length > 0) localStorage.setItem('blot_activity', JSON.stringify(activity));
  }, [bots, activity]);

  const addActivity = (action: string) => {
    const newActivity = { id: Date.now(), action, time: 'Just now' };
    setActivity(prev => [newActivity, ...prev].slice(0, 20));
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userInput = input.toLowerCase().trim();
    setMessages(prev => [...prev, { role: 'user', content: input }]);
    setInput('');

    setTimeout(() => {
      let response = '';

      // Parse commands
      if (userInput.includes('create') && userInput.includes('sniper')) {
        if (!isLoggedIn) {
          response = 'Please sign in first to create bots.';
        } else {
          setShowCreateBot(true);
          setSelectedBotType('sniper');
          setCreateBotStep(2);
          response = 'Opening Sniper Bot configuration...';
        }
      } else if (userInput.includes('create') && userInput.includes('dca')) {
        if (!isLoggedIn) {
          response = 'Please sign in first to create bots.';
        } else {
          setShowCreateBot(true);
          setSelectedBotType('dca');
          setCreateBotStep(2);
          response = 'Opening DCA Bot configuration...';
        }
      } else if (userInput.includes('create') && (userInput.includes('copy') || userInput.includes('trade'))) {
        if (!isLoggedIn) {
          response = 'Please sign in first to create bots.';
        } else {
          setShowCreateBot(true);
          setSelectedBotType('copy');
          setCreateBotStep(2);
          response = 'Opening Copy Trade Bot configuration...';
        }
      } else if (userInput.includes('create') && userInput.includes('grid')) {
        if (!isLoggedIn) {
          response = 'Please sign in first to create bots.';
        } else {
          setShowCreateBot(true);
          setSelectedBotType('grid');
          setCreateBotStep(2);
          response = 'Opening Grid Bot configuration...';
        }
      } else if (userInput.includes('show') && userInput.includes('portfolio')) {
        if (!isLoggedIn) {
          response = 'Please sign in to view your portfolio.';
        } else if (!phantom.connected) {
          response = 'Please connect your wallet first.';
        } else {
          response = `Portfolio Summary:\n• SOL: ${phantom.balance.toFixed(4)}\n• $BLOT: 0\n• Active Bots: ${bots.filter(b => b.status === 'running').length}\n• Total P&L: ${Math.round(bots.reduce((s, b) => s + b.pnl, 0) * 100) / 100} SOL`;
        }
      } else if (userInput.includes('show') && userInput.includes('bot')) {
        if (bots.length === 0) {
          response = 'No bots found. Create one with "Create sniper bot" or browse the Marketplace.';
        } else {
          response = `Your Bots:\n${bots.map(b => `• ${b.name} (${b.type}) - ${b.status} - P&L: ${b.pnl >= 0 ? '+' : ''}${b.pnl} SOL`).join('\n')}`;
        }
      } else if (userInput.includes('stop') && userInput.includes('all')) {
        if (bots.length === 0) {
          response = 'No bots to stop.';
        } else {
          setBots(prev => prev.map(b => ({ ...b, status: 'paused' })));
          response = `Stopped all ${bots.length} bots.`;
          addActivity('Stopped all bots');
        }
      } else if (userInput.includes('start') && userInput.includes('all')) {
        if (bots.length === 0) {
          response = 'No bots to start.';
        } else {
          setBots(prev => prev.map(b => ({ ...b, status: 'running' })));
          response = `Started all ${bots.length} bots.`;
          addActivity('Started all bots');
        }
      } else if (userInput.includes('analyze')) {
        response = '🔬 AI Analysis — Coming soon!\n\nThis feature will analyze tokens, detect rugs, and provide trading signals.';
      } else if (userInput.includes('buy') || userInput.includes('sell') || userInput.includes('swap')) {
        if (!phantom.connected) {
          response = 'Connect your wallet first to enable trading.';
        } else {
          response = '⚡ Direct Trading — Coming soon!\n\nFor now, create a bot to automate your trades.';
        }
      } else if (userInput.includes('snipe') || userInput.includes('sniper')) {
        response = '🎯 Sniping — Coming soon!\n\nCreate a Sniper Bot to automatically snipe new tokens.';
      } else if (userInput.includes('price') || userInput.includes('chart')) {
        response = '📊 Charts — Coming soon!\n\nPrice charts and analytics will be available soon.';
      } else if (userInput.includes('help')) {
        response = '📖 Available commands:\n\n• Create [sniper/dca/copy/grid] bot\n• Show portfolio\n• Show bots\n• Stop all bots\n• Start all bots\n• Marketplace\n• Help\n\n🔜 Coming soon: analyze, buy, sell, snipe, charts';
      } else if (userInput.includes('marketplace')) {
        setActiveView('marketplace');
        response = 'Opening Marketplace...';
      } else {
        response = `Command "${input}" coming soon.\n\nType "help" to see available commands.`;
      }

      setMessages(prev => [...prev, { role: 'bot', content: response }]);
    }, 300);
  };

  const createBot = () => {
    if (!selectedBotType || !botForm.name) return;
    const newBot: Bot = {
      id: Date.now().toString(),
      name: botForm.name,
      type: selectedBotType as Bot['type'],
      status: 'running',
      config: { ...botForm },
      createdAt: new Date().toISOString(),
      pnl: 0, trades: 0, uptime: 100,
    };
    setBots(prev => [...prev, newBot]);
    addActivity(`Created bot "${botForm.name}"`);
    setShowCreateBot(false);
    setCreateBotStep(1);
    setSelectedBotType(null);
    setBotForm({ ...botForm, name: '' });
  };

  const deployMarketplaceBot = (mBot: MarketplaceBot) => {
    if (!isLoggedIn) { setShowAuthModal(true); return; }
    const newBot: Bot = {
      id: Date.now().toString(),
      name: mBot.name,
      type: mBot.type,
      status: 'running',
      config: { source: 'marketplace', originalId: mBot.id },
      createdAt: new Date().toISOString(),
      pnl: 0, trades: 0, uptime: 100,
      isMarketplace: true,
    };
    setBots(prev => [...prev, newBot]);
    addActivity(`Deployed "${mBot.name}" from marketplace`);
    setActiveView('bots');
  };

  const deleteBot = (id: string) => {
    const bot = bots.find(b => b.id === id);
    setBots(prev => prev.filter(b => b.id !== id));
    if (bot) addActivity(`Deleted bot "${bot.name}"`);
    localStorage.setItem('blot_bots', JSON.stringify(bots.filter(b => b.id !== id)));
  };

  const toggleBotStatus = (id: string) => {
    setBots(prev => prev.map(b => {
      if (b.id === id) {
        const newStatus = b.status === 'running' ? 'paused' : 'running';
        addActivity(`${newStatus === 'running' ? 'Started' : 'Paused'} bot "${b.name}"`);
        return { ...b, status: newStatus };
      }
      return b;
    }));
  };

  if (isLoading) return <LoadingScreen />;

  // Auth functions
  const signInWithEmail = async () => {
    if (!emailInput.trim()) return;
    setAuthLoading(true);
    setAuthMessage('');
    
    const { error } = await supabase.auth.signInWithOtp({
      email: emailInput,
      options: {
        emailRedirectTo: `${window.location.origin}/app`,
      },
    });
    
    if (error) {
      setAuthMessage(error.message);
    } else {
      setAuthMessage('Check your email for the login link!');
    }
    setAuthLoading(false);
  };

  const signInWithTwitter = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'twitter',
      options: {
        redirectTo: `${window.location.origin}/app`,
      },
    });
    if (error) {
      console.error('Twitter auth error:', error);
      setAuthMessage(error.message);
    }
  };

  const signInWithPhantom = async () => {
    if (!phantom.isPhantomInstalled) {
      window.open('https://phantom.app/', '_blank');
      return;
    }
    
    await phantom.connect();
    if (phantom.publicKey) {
      // For now, just mark as logged in with wallet
      // In production, you'd verify the signature on backend
      setIsLoggedIn(true);
      setShowAuthModal(false);
      addActivity('Connected with Phantom');
    }
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    if (phantom.connected) {
      await phantom.disconnect();
    }
    setIsLoggedIn(false);
    setUser(null);
    addActivity('Signed out');
  };

  // Modals
  const AuthModal = () => (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <div style={{ background: '#fff', padding: '32px', width: '100%', maxWidth: '400px', border: '1px solid #000' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600 }}>{authMode === 'email' ? 'Sign in with Email' : 'Sign In'}</h2>
          <button onClick={() => { setShowAuthModal(false); setAuthMode('signin'); setAuthMessage(''); }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px' }}>×</button>
        </div>
        
        {authMessage && (
          <div style={{ padding: '12px', marginBottom: '16px', background: authMessage.includes('Check') ? '#dcfce7' : '#fee2e2', fontSize: '13px' }}>
            {authMessage}
          </div>
        )}

        {authMode === 'email' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              placeholder="your@email.com"
              style={{ padding: '12px', border: '1px solid #000', fontSize: '14px' }}
            />
            <button 
              onClick={signInWithEmail}
              disabled={authLoading}
              style={{ padding: '12px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}
            >
              {authLoading ? 'Sending...' : 'Send Magic Link'}
            </button>
            <button 
              onClick={() => setAuthMode('signin')}
              style={{ padding: '12px', background: '#fff', color: '#000', border: '1px solid #e4e4e7', cursor: 'pointer', fontSize: '14px' }}
            >
              Back
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button 
              onClick={() => setAuthMode('email')}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', border: '1px solid #000', background: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}
            >
              <span>✉️</span> Continue with Email
            </button>
            <button 
              onClick={signInWithTwitter}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', border: '1px solid #000', background: '#000', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}
            >
              <span>𝕏</span> Continue with X
            </button>
            <button 
              onClick={signInWithPhantom}
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', border: '1px solid #000', background: '#ab9ff2', color: '#fff', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}
            >
              <span>👻</span> Continue with Phantom
            </button>
          </div>
        )}
      </div>
    </div>
  );

  const CreateBotModal = () => (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
      <div style={{ background: '#fff', padding: '32px', width: '100%', maxWidth: '500px', border: '1px solid #000', maxHeight: '80vh', overflowY: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: 600 }}>{createBotStep === 1 ? 'Create New Bot' : `Configure ${selectedBotType?.toUpperCase()} Bot`}</h2>
          <button onClick={() => { setShowCreateBot(false); setCreateBotStep(1); setSelectedBotType(null); }} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px' }}>×</button>
        </div>

        {createBotStep === 1 ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { type: 'sniper', name: 'Sniper Bot', desc: 'Instantly buy new tokens on listing' },
              { type: 'dca', name: 'DCA Bot', desc: 'Dollar-cost average into positions' },
              { type: 'copy', name: 'Copy Trade Bot', desc: 'Mirror trades from successful wallets' },
              { type: 'grid', name: 'Grid Bot', desc: 'Profit from sideways markets' },
            ].map((bot) => (
              <button key={bot.type} onClick={() => { setSelectedBotType(bot.type); setCreateBotStep(2); }} 
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '16px', border: '1px solid #000', background: '#fff', cursor: 'pointer', textAlign: 'left' }}>
                <span style={{ fontWeight: 500, marginBottom: '4px' }}>{bot.name}</span>
                <span style={{ fontSize: '13px', color: '#71717a' }}>{bot.desc}</span>
              </button>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Bot Name *</label>
              <input type="text" value={botForm.name} onChange={(e) => setBotForm({ ...botForm, name: e.target.value })} placeholder="My Awesome Bot" style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} />
            </div>

            {selectedBotType === 'sniper' && (
              <>
                <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Buy Amount (SOL)</label><input type="text" value={botForm.buyAmount} onChange={(e) => setBotForm({ ...botForm, buyAmount: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Take Profit (%)</label><input type="text" value={botForm.takeProfit} onChange={(e) => setBotForm({ ...botForm, takeProfit: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                  <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Stop Loss (%)</label><input type="text" value={botForm.stopLoss} onChange={(e) => setBotForm({ ...botForm, stopLoss: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><input type="checkbox" checked={botForm.antiMev} onChange={(e) => setBotForm({ ...botForm, antiMev: e.target.checked })} /><label style={{ fontSize: '13px' }}>Enable MEV Protection</label></div>
              </>
            )}

            {selectedBotType === 'dca' && (
              <>
                <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Token Address</label><input type="text" value={botForm.token} onChange={(e) => setBotForm({ ...botForm, token: e.target.value })} placeholder="Token mint address" style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Amount per Buy (SOL)</label><input type="text" value={botForm.amountPerBuy} onChange={(e) => setBotForm({ ...botForm, amountPerBuy: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                  <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Interval</label><select value={botForm.interval} onChange={(e) => setBotForm({ ...botForm, interval: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }}><option value="15m">Every 15 min</option><option value="1h">Every 1 hour</option><option value="4h">Every 4 hours</option><option value="1d">Every day</option></select></div>
                </div>
                <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Total Budget (SOL)</label><input type="text" value={botForm.totalBudget} onChange={(e) => setBotForm({ ...botForm, totalBudget: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
              </>
            )}

            {selectedBotType === 'copy' && (
              <>
                <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Wallet to Copy</label><input type="text" value={botForm.walletAddress} onChange={(e) => setBotForm({ ...botForm, walletAddress: e.target.value })} placeholder="Solana wallet address" style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Copy Percentage (%)</label><input type="text" value={botForm.copyPercentage} onChange={(e) => setBotForm({ ...botForm, copyPercentage: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                  <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Min Trade Size (SOL)</label><input type="text" value={botForm.minTradeSize} onChange={(e) => setBotForm({ ...botForm, minTradeSize: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                </div>
              </>
            )}

            {selectedBotType === 'grid' && (
              <>
                <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Token Address</label><input type="text" value={botForm.token} onChange={(e) => setBotForm({ ...botForm, token: e.target.value })} placeholder="Token mint address" style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Lower Price ($)</label><input type="text" value={botForm.lowerPrice} onChange={(e) => setBotForm({ ...botForm, lowerPrice: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                  <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Upper Price ($)</label><input type="text" value={botForm.upperPrice} onChange={(e) => setBotForm({ ...botForm, upperPrice: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
                </div>
                <div><label style={{ fontSize: '13px', fontWeight: 500, display: 'block', marginBottom: '6px' }}>Investment (SOL)</label><input type="text" value={botForm.investment} onChange={(e) => setBotForm({ ...botForm, investment: e.target.value })} style={{ width: '100%', padding: '10px', border: '1px solid #000', fontSize: '14px', boxSizing: 'border-box' }} /></div>
              </>
            )}

            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <button onClick={() => { setCreateBotStep(1); setSelectedBotType(null); }} style={{ flex: 1, padding: '12px', border: '1px solid #000', background: '#fff', cursor: 'pointer', fontSize: '14px' }}>Back</button>
              <button onClick={createBot} disabled={!botForm.name} style={{ flex: 1, padding: '12px', border: 'none', background: botForm.name ? '#dc2626' : '#e4e4e7', color: '#fff', cursor: botForm.name ? 'pointer' : 'not-allowed', fontSize: '14px', fontWeight: 500 }}>Create & Deploy</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const BotDetailsModal = () => {
    if (!showBotDetails) return null;
    const bot = showBotDetails;
    return (
      <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100 }}>
        <div style={{ background: '#fff', padding: '32px', width: '100%', maxWidth: '600px', border: '1px solid #000', maxHeight: '80vh', overflowY: 'auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h2 style={{ fontSize: '20px', fontWeight: 600 }}>{bot.name}</h2>
              <span style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase' }}>{bot.type} bot {bot.isMarketplace && '• Marketplace'}</span>
            </div>
            <button onClick={() => setShowBotDetails(null)} style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '24px' }}>×</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
            <div style={{ padding: '16px', border: '1px solid #e4e4e7' }}><span style={{ fontSize: '12px', color: '#71717a', display: 'block' }}>Status</span><span style={{ color: bot.status === 'running' ? '#16a34a' : '#71717a', fontWeight: 500 }}>{bot.status}</span></div>
            <div style={{ padding: '16px', border: '1px solid #e4e4e7' }}><span style={{ fontSize: '12px', color: '#71717a', display: 'block' }}>P&L</span><span style={{ color: bot.pnl >= 0 ? '#16a34a' : '#dc2626', fontWeight: 500 }}>{bot.pnl >= 0 ? '+' : ''}{bot.pnl} SOL</span></div>
            <div style={{ padding: '16px', border: '1px solid #e4e4e7' }}><span style={{ fontSize: '12px', color: '#71717a', display: 'block' }}>Trades</span><span style={{ fontWeight: 500 }}>{bot.trades}</span></div>
            <div style={{ padding: '16px', border: '1px solid #e4e4e7' }}><span style={{ fontSize: '12px', color: '#71717a', display: 'block' }}>Uptime</span><span style={{ fontWeight: 500 }}>{bot.uptime}%</span></div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px' }}>Configuration</h3>
            <div style={{ background: '#f4f4f5', padding: '16px', fontSize: '13px' }}>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{JSON.stringify(bot.config, null, 2)}</pre>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => { toggleBotStatus(bot.id); setShowBotDetails({ ...bot, status: bot.status === 'running' ? 'paused' : 'running' }); }} style={{ flex: 1, padding: '12px', border: '1px solid #000', background: '#fff', cursor: 'pointer', fontSize: '14px' }}>
              {bot.status === 'running' ? 'Pause Bot' : 'Start Bot'}
            </button>
            <button onClick={() => { deleteBot(bot.id); setShowBotDetails(null); }} style={{ padding: '12px 24px', border: '1px solid #dc2626', background: '#fff', color: '#dc2626', cursor: 'pointer', fontSize: '14px' }}>Delete</button>
          </div>
        </div>
      </div>
    );
  };

  const Section = ({ title, isOpen, onToggle, children }: { title: string; isOpen: boolean; onToggle: () => void; children: React.ReactNode }) => (
    <div style={{ borderBottom: '1px solid #e4e4e7' }}>
      <button onClick={onToggle} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', background: 'none', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 600, textAlign: 'left' }}>{title}<span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>▼</span></button>
      {isOpen && <div style={{ paddingBottom: '12px' }}>{children}</div>}
    </div>
  );

  // Views
  const MyBotsView = () => (
    <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div><h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '4px' }}>My Bots</h2><p style={{ fontSize: '13px', color: '#71717a' }}>{bots.filter(b => b.status === 'running').length} running • {bots.length} total</p></div>
        {isLoggedIn && <button onClick={() => setShowCreateBot(true)} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: '#dc2626', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 500 }}>+ Create Bot</button>}
      </div>

      {!isLoggedIn ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '15px', color: '#71717a', marginBottom: '16px' }}>Sign in to create and manage bots</p>
          <button onClick={() => setShowAuthModal(true)} style={{ padding: '12px 24px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}>Sign In</button>
        </div>
      ) : bots.length === 0 ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ fontSize: '15px', fontWeight: 500, marginBottom: '8px' }}>No bots yet</p>
          <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '24px', textAlign: 'center' }}>Create your first bot or browse the marketplace</p>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={() => setShowCreateBot(true)} style={{ padding: '12px 24px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}>Create Bot</button>
            <button onClick={() => setActiveView('marketplace')} style={{ padding: '12px 24px', background: '#fff', color: '#000', border: '1px solid #000', cursor: 'pointer', fontSize: '14px', fontWeight: 500 }}>Browse Marketplace</button>
          </div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', overflowY: 'auto' }}>
          {bots.map((bot) => (
            <div key={bot.id} style={{ border: '1px solid #000', padding: '16px', cursor: 'pointer' }} onClick={() => setShowBotDetails(bot)}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div><h3 style={{ fontWeight: 600, marginBottom: '4px' }}>{bot.name}</h3><span style={{ fontSize: '12px', color: '#71717a', textTransform: 'uppercase' }}>{bot.type} {bot.isMarketplace && '• Marketplace'}</span></div>
                <span style={{ fontSize: '12px', padding: '4px 8px', background: bot.status === 'running' ? '#dcfce7' : '#f4f4f5', color: bot.status === 'running' ? '#16a34a' : '#71717a' }}>{bot.status === 'running' && '● '}{bot.status}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', fontSize: '13px' }}>
                <div><span style={{ color: '#71717a', display: 'block' }}>P&L</span><span style={{ color: bot.pnl >= 0 ? '#16a34a' : '#dc2626' }}>{bot.pnl >= 0 ? '+' : ''}{bot.pnl} SOL</span></div>
                <div><span style={{ color: '#71717a', display: 'block' }}>Trades</span>{bot.trades}</div>
                <div><span style={{ color: '#71717a', display: 'block' }}>Uptime</span>{bot.uptime}%</div>
                <div><span style={{ color: '#71717a', display: 'block' }}>Clones</span>1/1</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const MarketplaceView = () => {
    const filteredBots = marketplaceFilter === 'all' ? marketplaceBots : marketplaceBots.filter(b => b.type === marketplaceFilter);
    return (
      <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '24px' }}><h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '4px' }}>Marketplace</h2><p style={{ fontSize: '13px', color: '#71717a' }}>Deploy community bots to your account</p></div>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {['all', 'sniper', 'dca', 'copy', 'grid'].map((filter) => (
            <button key={filter} onClick={() => setMarketplaceFilter(filter)} style={{ padding: '6px 12px', fontSize: '12px', border: '1px solid #000', background: marketplaceFilter === filter ? '#000' : '#fff', color: marketplaceFilter === filter ? '#fff' : '#000', cursor: 'pointer', textTransform: 'capitalize' }}>{filter === 'all' ? 'All' : filter}</button>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', overflowY: 'auto' }}>
          {filteredBots.map((bot) => (
            <div key={bot.id} style={{ border: '1px solid #000', padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div><h3 style={{ fontWeight: 600, marginBottom: '4px' }}>{bot.name}</h3><span style={{ fontSize: '11px', color: '#71717a', textTransform: 'uppercase' }}>{bot.type}</span></div>
                <span style={{ fontSize: '14px', fontWeight: 600, color: '#dc2626' }}>{bot.price} $BLOT</span>
              </div>
              <p style={{ fontSize: '13px', color: '#71717a', marginBottom: '12px' }}>{bot.description}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', fontSize: '12px', marginBottom: '12px' }}>
                <div><span style={{ color: '#71717a', display: 'block' }}>Avg P&L</span><span style={{ color: '#16a34a' }}>+{bot.pnl}%</span></div>
                <div><span style={{ color: '#71717a', display: 'block' }}>Win Rate</span>{bot.winRate}%</div>
                <div><span style={{ color: '#71717a', display: 'block' }}>Users</span>{bot.users}</div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#71717a' }}>by {bot.author}</span>
                <button onClick={() => deployMarketplaceBot(bot)} style={{ padding: '8px 16px', background: '#000', color: '#fff', border: 'none', cursor: 'pointer', fontSize: '12px', fontWeight: 500 }}>Deploy</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const terminalSuggestions = [
    { cmd: 'Buy $50 of [token]', desc: 'Purchase tokens with SOL' },
    { cmd: 'Sell all [token]', desc: 'Sell entire position' },
    { cmd: 'Create sniper bot', desc: 'Launch a new sniper bot' },
    { cmd: 'Set stop loss -20%', desc: 'Set stop loss on positions' },
    { cmd: 'Copy wallet [address]', desc: 'Start copying a wallet' },
    { cmd: 'Show portfolio', desc: 'View your holdings' },
    { cmd: 'Analyze [token]', desc: 'Get AI analysis' },
    { cmd: 'DCA $10 into [token] daily', desc: 'Set up DCA schedule' },
  ];

  const TerminalView = () => (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
        {messages.map((msg, i) => (
          <div key={i} style={{ marginBottom: '20px', display: 'flex', gap: '12px' }}>
            {msg.role === 'bot' && (
              <img src="/logo.png" alt="BLOT" style={{ width: '36px', height: '36px', flexShrink: 0 }} />
            )}
            <div style={{ flex: 1 }}>
              {msg.role === 'user' ? (
                <p style={{ color: '#dc2626' }}>{'>'} {msg.content}</p>
              ) : i === 0 ? (
                <>
                  <p style={{ fontWeight: 500, marginBottom: '16px' }}>gm, how can I help you?</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {terminalSuggestions.map((s, j) => (
                      <button
                        key={j}
                        onClick={() => setInput(s.cmd)}
                        style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 12px', background: 'none', border: '1px solid #e4e4e7', cursor: 'pointer', textAlign: 'left', fontSize: '13px' }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#000'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#e4e4e7'; }}
                      >
                        <span style={{ color: '#dc2626' }}>{'>'} {s.cmd}</span>
                        <span style={{ color: '#71717a', fontSize: '12px' }}>{s.desc}</span>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <p>{msg.content}</p>
              )}
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: '16px', borderTop: '1px solid #e4e4e7' }}>
        <div style={{ border: '1px solid #000', display: 'flex', alignItems: 'center', padding: '12px' }}>
          <span style={{ color: '#dc2626', marginRight: '8px' }}>{'//'}</span>
          <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && handleSend()} placeholder="what's up?" style={{ flex: 1, border: 'none', outline: 'none', fontSize: '14px', background: 'transparent' }} />
          <button onClick={handleSend} style={{ width: '32px', height: '32px', background: '#000', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg style={{ width: '16px', height: '16px', color: '#fff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg></button>
        </div>
      </div>
    </div>
  );

  const LeaderboardView = () => (
    <div style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <p style={{ fontSize: '15px', fontWeight: 500, marginBottom: '8px' }}>Coming soon</p>
      <p style={{ fontSize: '13px', color: '#71717a' }}>Leaderboard will show top performing traders</p>
    </div>
  );

  const totalPnl = bots.reduce((sum, b) => sum + b.pnl, 0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', fontFamily: 'JetBrains Mono, monospace', background: '#fff' }}>
      {showAuthModal && <AuthModal />}
      {showCreateBot && <CreateBotModal />}
      {showBotDetails && <BotDetailsModal />}

      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 16px', borderBottom: '1px solid #e4e4e7' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 600, fontSize: '16px' }}><img src="/logo.png" alt="BLOT" style={{ width: '24px', height: '24px' }} />BLOT</Link>
          <span style={{ fontSize: '11px', padding: '2px 6px', background: '#dc2626', color: '#fff', fontWeight: 500 }}>beta</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {['bots', 'marketplace', 'terminal', 'leaderboard'].map((view) => (
            <button key={view} onClick={() => setActiveView(view as any)} style={{ padding: '6px 12px', fontSize: '13px', fontWeight: 500, background: activeView === view ? '#000' : '#fff', color: activeView === view ? '#fff' : '#000', border: '1px solid #000', cursor: 'pointer' }}>{view === 'bots' ? 'My Bots' : view.charAt(0).toUpperCase() + view.slice(1)}</button>
          ))}
          {isLoggedIn || phantom.connected ? <button onClick={signOut} style={{ padding: '6px 12px', fontSize: '13px', border: '1px solid #e4e4e7', background: '#fff', cursor: 'pointer' }}>Log Out</button> : <button onClick={() => setShowAuthModal(true)} style={{ padding: '6px 12px', fontSize: '13px', background: '#dc2626', color: '#fff', border: 'none', cursor: 'pointer' }}>Sign In</button>}
        </div>
      </header>

      <div style={{ padding: '8px 16px', background: '#fef3c7', fontSize: '12px', borderBottom: '1px solid #e4e4e7' }}>BLOT is currently in beta. Bots are simulated for demonstration.</div>

      <div style={{ flex: 1, display: 'flex', overflow: 'hidden' }}>
        <aside style={{ width: '240px', borderRight: '1px solid #e4e4e7', overflowY: 'auto', padding: '16px', flexShrink: 0 }}>
          <Section title="Activity" isOpen={openSections.activity} onToggle={() => toggleSection('activity')}>
            {activity.length > 0 ? <div style={{ fontSize: '12px' }}>{activity.slice(0, 10).map((a) => <div key={a.id} style={{ padding: '4px 0', color: '#71717a' }}>{a.action}<br/><span style={{ fontSize: '10px' }}>{a.time}</span></div>)}</div> : <p style={{ fontSize: '12px', color: '#71717a' }}>No activity yet</p>}
          </Section>
          <Section title="Settings" isOpen={openSections.settings} onToggle={() => toggleSection('settings')}>
            <p style={{ fontSize: '12px', color: '#71717a' }}>Click on a bot to configure</p>
          </Section>
        </aside>

        <main style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
          {activeView === 'bots' && <MyBotsView />}
          {activeView === 'marketplace' && <MarketplaceView />}
          {activeView === 'terminal' && <TerminalView />}
          {activeView === 'leaderboard' && <LeaderboardView />}
        </main>

        <aside style={{ width: '240px', borderLeft: '1px solid #e4e4e7', overflowY: 'auto', padding: '16px', flexShrink: 0 }}>
          <Section title="Wallet" isOpen={openSections.wallet} onToggle={() => toggleSection('wallet')}>
            {phantom.connected ? (
              <div style={{ fontSize: '12px' }}>
                <div style={{ padding: '8px', background: '#f4f4f5', marginBottom: '8px', wordBreak: 'break-all' }}>
                  <span style={{ color: '#71717a' }}>Address:</span> {phantom.shortAddress}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>SOL</span><span>{phantom.balance.toFixed(4)}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                  <span>$BLOT</span><span>0</span>
                </div>
                <button 
                  onClick={phantom.disconnect} 
                  style={{ width: '100%', padding: '8px', marginTop: '8px', border: '1px solid #dc2626', background: '#fff', color: '#dc2626', cursor: 'pointer', fontSize: '12px' }}
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <div style={{ fontSize: '12px' }}>
                <p style={{ color: '#71717a', marginBottom: '8px' }}>Connect wallet to trade</p>
                <button 
                  onClick={phantom.connect} 
                  disabled={phantom.loading}
                  style={{ width: '100%', padding: '8px', border: '1px solid #000', background: '#ab9ff2', color: '#fff', cursor: 'pointer', fontSize: '12px' }}
                >
                  {phantom.loading ? 'Connecting...' : phantom.isPhantomInstalled ? 'Connect Phantom' : 'Install Phantom'}
                </button>
              </div>
            )}
          </Section>
          <div style={{ marginTop: '16px', fontSize: '12px' }}>
            <h3 style={{ fontWeight: 600, marginBottom: '12px' }}>Stats</h3>
            <div style={{ color: '#71717a' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span>Total P&L</span><span style={{ color: totalPnl >= 0 ? '#16a34a' : '#dc2626' }}>{totalPnl >= 0 ? '+' : ''}{Math.round(totalPnl * 100) / 100} SOL</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span>Active Bots</span><span>{bots.filter(b => b.status === 'running').length}</span></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}><span>Total Trades</span><span>{bots.reduce((a, b) => a + b.trades, 0)}</span></div>
            </div>
          </div>
          <div style={{ marginTop: '24px' }}><Link href="/" style={{ display: 'block', width: '100%', padding: '10px', textAlign: 'center', border: '1px solid #000', fontSize: '12px', fontWeight: 500 }}>← Back to Site</Link></div>
        </aside>
      </div>
    </div>
  );
}
