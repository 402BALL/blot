export default function QuickStartPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        Quick Start
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        Get your first trading bot up and running in under 5 minutes.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Prerequisites
        </h2>
        <ul style={{ lineHeight: 2, color: '#3f3f46' }}>
          <li>• Solana wallet (Phantom, Solflare, or any SPL-compatible wallet)</li>
          <li>• At least 0.1 SOL for transaction fees</li>
          <li>• $BLOT tokens for runtime access</li>
        </ul>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Step 1: Connect Your Wallet
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          Navigate to the <span style={{ color: '#dc2626' }}>App</span> page and click &quot;Connect Wallet&quot;. 
          Select your preferred wallet provider and approve the connection request.
        </p>
        <div style={{ 
          padding: '16px',
          border: '1px solid #000',
          fontFamily: 'monospace',
        }}>
          <code style={{ color: '#000' }}>
            <span style={{ color: '#dc2626' }}>$</span> wallet connected: <span style={{ color: '#3f3f46' }}>7xK9...mF3d</span>
          </code>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Step 2: Choose a Bot
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          Browse our selection of pre-configured bots:
        </p>
        <div style={{ display: 'grid', gap: '12px' }}>
          {[
            { name: 'Sniper Bot', desc: 'Catch new token launches instantly', time: '~50ms execution' },
            { name: 'DCA Bot', desc: 'Dollar-cost average into any token', time: 'Scheduled buys' },
            { name: 'Copy Trade Bot', desc: 'Mirror successful traders', time: 'Real-time copying' },
            { name: 'Grid Bot', desc: 'Profit from sideways markets', time: 'Automated grids' },
          ].map((bot) => (
            <div key={bot.name} style={{ 
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '16px',
              border: '1px solid #e4e4e7',
            }}>
              <div>
                <strong style={{ color: '#000' }}>{bot.name}</strong>
                <p style={{ fontSize: '0.875rem', color: '#71717a', margin: 0 }}>{bot.desc}</p>
              </div>
              <span style={{ 
                fontSize: '0.75rem', 
                color: '#dc2626',
              }}>
                {bot.time}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Step 3: Configure & Deploy
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          Set your trading parameters and deploy. Your bot will automatically:
        </p>
        <ol style={{ lineHeight: 2.5, color: '#3f3f46', paddingLeft: '20px' }}>
          <li>Clone itself across 3+ distributed nodes</li>
          <li>Begin monitoring the market according to your strategy</li>
          <li>Execute trades when conditions are met</li>
          <li>Self-heal if any node goes offline</li>
        </ol>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #000',
      }}>
        <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Pro Tip</h3>
        <p style={{ margin: 0, color: '#3f3f46', fontSize: '0.875rem', lineHeight: 1.6 }}>
          Start with a small amount to test your strategy. BLOT bots support paper trading 
          mode for risk-free experimentation.
        </p>
      </section>
    </article>
  );
}
