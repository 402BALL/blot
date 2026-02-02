export default function SniperBotPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        Sniper Bot
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        Catch new token launches with sub-50ms execution speed.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Overview
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          The Sniper Bot is designed to instantly purchase tokens the moment liquidity is added to a DEX. 
          It monitors pending transactions and executes buy orders with optimized gas settings to ensure 
          you&apos;re among the first buyers.
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '16px' 
        }}>
          {[
            { label: 'Avg. Speed', value: '~50ms' },
            { label: 'Success Rate', value: '94%' },
            { label: 'Supported DEXs', value: '5+' },
          ].map((stat) => (
            <div key={stat.label} style={{ 
              textAlign: 'center',
              padding: '20px',
              border: '1px solid #000',
            }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#dc2626' }}>{stat.value}</div>
              <div style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '4px' }}>{stat.label}</div>
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
          How It Works
        </h2>
        <ol style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {[
            { step: '1', title: 'Mempool Monitoring', desc: 'Continuously scans the Solana mempool for liquidity addition transactions' },
            { step: '2', title: 'Token Analysis', desc: 'AI instantly analyzes the token contract for potential risks (honeypot, rug, etc.)' },
            { step: '3', title: 'Optimized Execution', desc: 'Submits buy transaction with dynamic priority fees for fastest confirmation' },
            { step: '4', title: 'Auto Take-Profit', desc: 'Sets automatic sell orders based on your profit targets' },
          ].map((item) => (
            <li key={item.step} style={{ 
              display: 'flex',
              gap: '16px',
              alignItems: 'flex-start'
            }}>
              <span style={{ 
                width: '28px',
                height: '28px',
                border: '1px solid #000',
                color: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 600,
                flexShrink: 0
              }}>
                {item.step}
              </span>
              <div>
                <strong style={{ color: '#000' }}>{item.title}</strong>
                <p style={{ margin: 0, color: '#71717a', marginTop: '4px' }}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Configuration
        </h2>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          overflow: 'auto'
        }}>
          <pre style={{ margin: 0, color: '#000' }}>
{`from blot import SniperBot

bot = SniperBot(
    `}<span style={{ color: '#71717a' }}># Target tokens (address or "new" for all new tokens)</span>{`
    target="new",
    
    `}<span style={{ color: '#71717a' }}># Buy amount in SOL</span>{`
    buy_amount=0.5,
    
    `}<span style={{ color: '#71717a' }}># Minimum liquidity requirement</span>{`
    min_liquidity=10,  `}<span style={{ color: '#71717a' }}># SOL</span>{`
    
    `}<span style={{ color: '#71717a' }}># Auto-sell settings</span>{`
    take_profit=[2.0, 5.0, 10.0],  `}<span style={{ color: '#71717a' }}># Sell 33% at 2x, 5x, 10x</span>{`
    stop_loss=0.5,  `}<span style={{ color: '#71717a' }}># Sell all at -50%</span>{`
    
    `}<span style={{ color: '#71717a' }}># Safety checks</span>{`
    check_honeypot=True,
    check_rug=True,
    max_dev_holding=10,  `}<span style={{ color: '#71717a' }}># Skip if dev holds &gt;10%</span>{`
)

bot.start()`}
          </pre>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Supported DEXs
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          {['Raydium', 'Orca', 'Jupiter', 'Meteora', 'Pump.fun'].map((dex) => (
            <span key={dex} style={{ 
              padding: '8px 16px',
              border: '1px solid #e4e4e7',
              fontSize: '0.875rem',
              color: '#3f3f46'
            }}>
              {dex}
            </span>
          ))}
        </div>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #dc2626',
      }}>
        <h3 style={{ color: '#dc2626', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Risk Warning</h3>
        <p style={{ margin: 0, color: '#3f3f46', fontSize: '0.875rem', lineHeight: 1.6 }}>
          Sniping new tokens is extremely high risk. Most new tokens lose value quickly. 
          Only invest what you can afford to lose and always use stop-losses.
        </p>
      </section>
    </article>
  );
}
