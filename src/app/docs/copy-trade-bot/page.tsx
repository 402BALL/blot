export default function CopyTradeBotPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        Copy Trade Bot
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        Mirror the trades of successful wallets in real-time.
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
          The Copy Trade Bot monitors specified wallet addresses and automatically replicates their trades. 
          Powered by OpenClaw AI, it can analyze trader performance, filter trades based on your criteria, 
          and execute with optimal timing.
        </p>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '16px' 
        }}>
          {[
            { label: 'Copy Delay', value: '<1s' },
            { label: 'Tracked Wallets', value: '∞' },
            { label: 'Filter Options', value: '20+' },
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
          Finding Good Wallets
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          Use these strategies to find wallets worth copying:
        </p>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { title: 'On-chain Analysis', desc: 'Track wallets with consistent profitability using Solscan or Birdeye' },
            { title: 'Influencer Wallets', desc: 'Follow known traders (verify wallet ownership first!)' },
            { title: 'Smart Money Trackers', desc: 'Use tools like Nansen or Arkham to find institutional wallets' },
            { title: 'DEX Leaderboards', desc: 'Top traders on Jupiter, Raydium often have public stats' },
          ].map((item) => (
            <li key={item.title} style={{ 
              padding: '16px 20px',
              border: '1px solid #e4e4e7',
            }}>
              <strong style={{ color: '#000' }}>{item.title}</strong>
              <span style={{ color: '#71717a' }}> — {item.desc}</span>
            </li>
          ))}
        </ul>
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
{`from blot import CopyTradeBot

bot = CopyTradeBot(
    `}<span style={{ color: '#71717a' }}># Wallets to copy</span>{`
    wallets=[
        "7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU",
        "9WzDXwBbmPELbcmEqAbNTjxXBQZzH2f3FPJnMT1ZHsRK",
    ],
    
    `}<span style={{ color: '#71717a' }}># Position sizing</span>{`
    size_mode="percentage",  `}<span style={{ color: '#71717a' }}># "fixed" or "percentage"</span>{`
    size_value=10,  `}<span style={{ color: '#71717a' }}># 10% of their trade size</span>{`
    
    max_position=1.0,  `}<span style={{ color: '#71717a' }}># Max 1 SOL per trade</span>{`
    
    `}<span style={{ color: '#71717a' }}># Trade filters</span>{`
    min_trade_size=0.1,  `}<span style={{ color: '#71717a' }}># Ignore tiny trades (SOL)</span>{`
    copy_sells=True,  `}<span style={{ color: '#71717a' }}># Also copy sell orders</span>{`
    
    `}<span style={{ color: '#71717a' }}># Token filters</span>{`
    blacklist_tokens=["SCAM", "RUG"],  `}<span style={{ color: '#71717a' }}># Token symbols to avoid</span>{`
    only_verified=False,  `}<span style={{ color: '#71717a' }}># Allow unverified tokens</span>{`
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
          AI-Powered Features
        </h2>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          overflow: 'auto'
        }}>
          <pre style={{ margin: 0, color: '#000' }}>
{`bot = CopyTradeBot(
    wallets=["..."],
    
    `}<span style={{ color: '#71717a' }}># OpenClaw AI analysis</span>{`
    ai_filter=True,  `}<span style={{ color: '#71717a' }}># Let AI decide which trades to copy</span>{`
    
    `}<span style={{ color: '#71717a' }}># AI will consider:</span>{`
    `}<span style={{ color: '#71717a' }}># - Wallet's historical win rate</span>{`
    `}<span style={{ color: '#71717a' }}># - Token contract analysis</span>{`
    `}<span style={{ color: '#71717a' }}># - Current market conditions</span>{`
    `}<span style={{ color: '#71717a' }}># - Your portfolio exposure</span>{`
    
    ai_confidence_threshold=0.7,  `}<span style={{ color: '#71717a' }}># Only copy if AI is &gt;70% confident</span>{`
)`}
          </pre>
        </div>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #dc2626',
      }}>
        <h3 style={{ color: '#dc2626', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Important</h3>
        <p style={{ margin: 0, color: '#3f3f46', fontSize: '0.875rem', lineHeight: 1.6 }}>
          Past performance doesn&apos;t guarantee future results. Even the best traders have losing streaks. 
          Always set position limits and never copy trade with more than you can afford to lose.
        </p>
      </section>
    </article>
  );
}
