'use client';

import Link from 'next/link';

export default function TokenPage() {
  const CA = 'BRiGa9xAV9jFVChXkWWkMvSk5vrtALZgzBV7vXxzpump';
  
  return (
    <div style={{ minHeight: 'calc(100vh - 10rem)' }}>
      <div style={{ maxWidth: '896px', margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ paddingLeft: '32px', borderLeft: '1px solid #000' }}>
          <h1 style={{ fontSize: '48px', fontWeight: 500, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            $BLOT
          </h1>
          <p style={{ color: '#71717a', marginBottom: '48px' }}>
            Pay for services. Tokens get burned. Supply goes down.
          </p>

          {/* Token Info */}
          <section style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '16px' }}>Token Info</h2>
            <div style={{ border: '1px solid #e4e4e7', borderRadius: '8px', padding: '24px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
                <div>
                  <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '4px' }}>Network</p>
                  <p style={{ fontWeight: 500 }}>Solana</p>
                </div>
                <div>
                  <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '4px' }}>Token Standard</p>
                  <p style={{ fontWeight: 500 }}>SPL Token</p>
                </div>
                <div style={{ gridColumn: '1 / -1' }}>
                  <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '4px' }}>Contract Address</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <code style={{ background: '#f4f4f5', padding: '8px 12px', borderRadius: '4px', fontSize: '14px', flex: 1, overflow: 'auto' }}>
                      {CA}
                    </code>
                    <button 
                      onClick={() => navigator.clipboard.writeText(CA)}
                      style={{ padding: '8px', border: '1px solid #e4e4e7', borderRadius: '4px', background: 'transparent', cursor: 'pointer' }}
                    >
                      <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Burn Mechanism */}
          <section style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '16px' }}>Burn Mechanism 🔥</h2>
            <div style={{ border: '1px solid #dc2626', borderRadius: '8px', padding: '24px', background: '#fef2f2' }}>
              <p style={{ fontSize: '16px', fontWeight: 500, marginBottom: '12px' }}>100% of tokens spent on services are burned forever</p>
              <p style={{ fontSize: '14px', color: '#71717a' }}>
                No team wallet. No recycling. Every payment reduces total supply permanently.
                The more BLOT is used, the scarcer $BLOT becomes.
              </p>
            </div>
          </section>

          {/* Utility */}
          <section style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '16px' }}>What You Pay For</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ border: '1px solid #e4e4e7', borderRadius: '8px', padding: '16px' }}>
                <h3 style={{ fontWeight: 500, marginBottom: '8px' }}>Bot Runtime</h3>
                <p style={{ fontSize: '14px', color: '#71717a' }}>
                  Keep your trading bots running 24/7 on our distributed infrastructure.
                </p>
              </div>
              <div style={{ border: '1px solid #e4e4e7', borderRadius: '8px', padding: '16px' }}>
                <h3 style={{ fontWeight: 500, marginBottom: '8px' }}>Premium Bots</h3>
                <p style={{ fontSize: '14px', color: '#71717a' }}>
                  Access advanced strategies from the marketplace.
                </p>
              </div>
              <div style={{ border: '1px solid #e4e4e7', borderRadius: '8px', padding: '16px' }}>
                <h3 style={{ fontWeight: 500, marginBottom: '8px' }}>SDK Access</h3>
                <p style={{ fontSize: '14px', color: '#71717a' }}>
                  Build and deploy your own custom bots.
                </p>
              </div>
              <div style={{ border: '1px solid #e4e4e7', borderRadius: '8px', padding: '16px' }}>
                <h3 style={{ fontWeight: 500, marginBottom: '8px' }}>Priority Execution</h3>
                <p style={{ fontSize: '14px', color: '#71717a' }}>
                  Faster trades, better RPC nodes, MEV protection.
                </p>
              </div>
            </div>
          </section>

          {/* How to Buy */}
          <section style={{ marginBottom: '64px' }}>
            <h2 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '16px' }}>How to Buy</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '32px', height: '32px', background: '#000', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  1
                </div>
                <div>
                  <h3 style={{ fontWeight: 500, marginBottom: '4px' }}>Get a Solana Wallet</h3>
                  <p style={{ fontSize: '14px', color: '#71717a' }}>
                    Download Phantom or any Solana wallet.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '32px', height: '32px', background: '#000', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  2
                </div>
                <div>
                  <h3 style={{ fontWeight: 500, marginBottom: '4px' }}>Fund with SOL</h3>
                  <p style={{ fontSize: '14px', color: '#71717a' }}>
                    Transfer SOL to your wallet from an exchange.
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '32px', height: '32px', background: '#dc2626', color: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  3
                </div>
                <div>
                  <h3 style={{ fontWeight: 500, marginBottom: '4px' }}>Buy on Pump.fun</h3>
                  <p style={{ fontSize: '14px', color: '#71717a' }}>
                    Go to Pump.fun and swap SOL for $BLOT.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Links */}
          <section>
            <h2 style={{ fontSize: '24px', fontWeight: 500, marginBottom: '16px' }}>Links</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <Link
                href={`https://pump.fun/coin/${CA}`}
                target="_blank"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #dc2626', background: '#dc2626', color: '#fff', borderRadius: '8px', padding: '8px 16px' }}
              >
                <span>Buy on Pump.fun</span>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <Link
                href={`https://solscan.io/token/${CA}`}
                target="_blank"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #e4e4e7', borderRadius: '8px', padding: '8px 16px' }}
              >
                <span>Solscan</span>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
              <Link
                href={`https://dexscreener.com/solana/${CA}`}
                target="_blank"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #e4e4e7', borderRadius: '8px', padding: '8px 16px' }}
              >
                <span>DexScreener</span>
                <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
