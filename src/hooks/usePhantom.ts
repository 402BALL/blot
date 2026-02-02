'use client';

import { useState, useEffect, useCallback } from 'react';
import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

interface PhantomProvider {
  isPhantom?: boolean;
  publicKey?: PublicKey;
  isConnected?: boolean;
  connect: () => Promise<{ publicKey: PublicKey }>;
  disconnect: () => Promise<void>;
  signMessage: (message: Uint8Array) => Promise<{ signature: Uint8Array }>;
  on: (event: string, callback: (args: any) => void) => void;
  off: (event: string, callback: (args: any) => void) => void;
}

declare global {
  interface Window {
    solana?: PhantomProvider;
  }
}

export function usePhantom() {
  const [provider, setProvider] = useState<PhantomProvider | null>(null);
  const [connected, setConnected] = useState(false);
  const [publicKey, setPublicKey] = useState<string | null>(null);
  const [balance, setBalance] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  // Check if Phantom is installed
  useEffect(() => {
    if (typeof window !== 'undefined' && window.solana?.isPhantom) {
      setProvider(window.solana);
      
      // Check if already connected
      if (window.solana.isConnected && window.solana.publicKey) {
        setConnected(true);
        setPublicKey(window.solana.publicKey.toString());
        fetchBalance(window.solana.publicKey.toString());
      }
    }
  }, []);

  // Listen for account changes
  useEffect(() => {
    if (!provider) return;

    const handleAccountChanged = (publicKey: PublicKey | null) => {
      if (publicKey) {
        setConnected(true);
        setPublicKey(publicKey.toString());
        fetchBalance(publicKey.toString());
      } else {
        setConnected(false);
        setPublicKey(null);
        setBalance(0);
      }
    };

    const handleDisconnect = () => {
      setConnected(false);
      setPublicKey(null);
      setBalance(0);
    };

    provider.on('accountChanged', handleAccountChanged);
    provider.on('disconnect', handleDisconnect);

    return () => {
      provider.off('accountChanged', handleAccountChanged);
      provider.off('disconnect', handleDisconnect);
    };
  }, [provider]);

  const fetchBalance = async (address: string) => {
    try {
      const connection = new Connection('https://api.mainnet-beta.solana.com', 'confirmed');
      const pubKey = new PublicKey(address);
      const bal = await connection.getBalance(pubKey);
      setBalance(bal / LAMPORTS_PER_SOL);
    } catch (error) {
      console.error('Error fetching balance:', error);
      setBalance(0);
    }
  };

  const connect = useCallback(async () => {
    if (!provider) {
      window.open('https://phantom.app/', '_blank');
      return;
    }

    try {
      setLoading(true);
      const response = await provider.connect();
      setConnected(true);
      setPublicKey(response.publicKey.toString());
      await fetchBalance(response.publicKey.toString());
    } catch (error: any) {
      // User rejected the request - this is normal, not an error
      if (error?.message?.includes('User rejected')) {
        console.log('User cancelled Phantom connection');
      } else {
        console.error('Error connecting to Phantom:', error);
      }
    } finally {
      setLoading(false);
    }
  }, [provider]);

  const disconnect = useCallback(async () => {
    if (!provider) return;

    try {
      await provider.disconnect();
      setConnected(false);
      setPublicKey(null);
      setBalance(0);
    } catch (error) {
      console.error('Error disconnecting from Phantom:', error);
    }
  }, [provider]);

  const signMessage = useCallback(async (message: string) => {
    if (!provider || !connected) return null;

    try {
      const encodedMessage = new TextEncoder().encode(message);
      const { signature } = await provider.signMessage(encodedMessage);
      return signature;
    } catch (error) {
      console.error('Error signing message:', error);
      return null;
    }
  }, [provider, connected]);

  const shortenAddress = (address: string) => {
    return `${address.slice(0, 4)}...${address.slice(-4)}`;
  };

  return {
    provider,
    connected,
    publicKey,
    shortAddress: publicKey ? shortenAddress(publicKey) : null,
    balance,
    loading,
    connect,
    disconnect,
    signMessage,
    isPhantomInstalled: !!provider,
  };
}

