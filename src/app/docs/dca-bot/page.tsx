export default function DCABotPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        DCA Bot
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        Automate dollar-cost averaging into any Solana token.
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
          Dollar-Cost Averaging (DCA) is a proven investment strategy that reduces the impact of volatility 
          by spreading purchases over time. The DCA Bot automates this process, executing buys on a schedule 
          you define.
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Benefits
        </h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { title: 'Reduce Emotional Trading', desc: 'Remove the stress of timing the market perfectly' },
            { title: 'Lower Average Cost', desc: 'Buy more when prices are low, less when high' },
            { title: 'Fully Automated', desc: 'Set once and let the bot handle everything' },
            { title: 'Flexible Scheduling', desc: 'Daily, weekly, or custom intervals' },
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
{`from blot import DCABot

bot = DCABot(
    `}<span style={{ color: '#71717a' }}># Token to accumulate</span>{`
    token="So11111111111111111111111111111111111111112",  `}<span style={{ color: '#71717a' }}># SOL</span>{`
    
    `}<span style={{ color: '#71717a' }}># Amount per purchase (in USDC)</span>{`
    amount=100,
    
    `}<span style={{ color: '#71717a' }}># Schedule</span>{`
    frequency="daily",  `}<span style={{ color: '#71717a' }}># "hourly", "daily", "weekly", or cron expression</span>{`
    time="09:00",  `}<span style={{ color: '#71717a' }}># UTC time</span>{`
    
    `}<span style={{ color: '#71717a' }}># Optional: price conditions</span>{`
    buy_only_below=150,  `}<span style={{ color: '#71717a' }}># Only buy if SOL &lt; $150</span>{`
    
    `}<span style={{ color: '#71717a' }}># Slippage tolerance</span>{`
    slippage=0.5,  `}<span style={{ color: '#71717a' }}># 0.5%</span>{`
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
          Advanced Options
        </h2>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          overflow: 'auto'
        }}>
          <pre style={{ margin: 0, color: '#000' }}>
{`bot = DCABot(
    token="JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN",  `}<span style={{ color: '#71717a' }}># JUP</span>{`
    amount=50,
    
    `}<span style={{ color: '#71717a' }}># Randomize purchase time (avoid detection)</span>{`
    frequency="daily",
    time_variance=60,  `}<span style={{ color: '#71717a' }}># Random offset ±60 minutes</span>{`
    
    `}<span style={{ color: '#71717a' }}># Split large orders</span>{`
    max_single_order=25,  `}<span style={{ color: '#71717a' }}># Split $50 into 2x $25 orders</span>{`
    order_delay=30,  `}<span style={{ color: '#71717a' }}># 30 second gap between split orders</span>{`
    
    `}<span style={{ color: '#71717a' }}># Use multiple DEXs for better pricing</span>{`
    use_jupiter=True,  `}<span style={{ color: '#71717a' }}># Jupiter aggregator for best rates</span>{`
)`}
          </pre>
        </div>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #000',
      }}>
        <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Strategy Tip</h3>
        <p style={{ margin: 0, color: '#3f3f46', fontSize: '0.875rem', lineHeight: 1.6 }}>
          Combine DCA with the <span style={{ color: '#dc2626' }}>Grid Bot</span> for maximum efficiency. 
          DCA accumulates your position over time while the Grid Bot generates yield from price fluctuations.
        </p>
      </section>
    </article>
  );
}
