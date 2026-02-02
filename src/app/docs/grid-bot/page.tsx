export default function GridBotPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        Grid Bot
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        Profit from sideways markets with automated grid trading.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          What is Grid Trading?
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          Grid trading places a series of buy and sell orders at predetermined price intervals, 
          creating a &quot;grid&quot; of orders. When price fluctuates within your range, the bot continuously 
          buys low and sells high, generating profit from every price movement.
        </p>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          textAlign: 'center'
        }}>
          <pre style={{ 
            margin: 0, 
            fontFamily: 'monospace', 
            fontSize: '0.875rem',
            color: '#000',
            lineHeight: 2
          }}>
{`$160 ─── SELL ─── SELL ─── SELL
$150 ─── SELL ─── BUY  ─── SELL
$140 ─── BUY  ─── SELL ─── BUY    ← Price oscillates
$130 ─── BUY  ─── BUY  ─── BUY
$120 ─── BUY  ─── BUY  ─── BUY`}
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
          When to Use Grid Bots
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ 
            padding: '20px',
            border: '1px solid #000',
          }}>
            <h3 style={{ color: '#000', marginBottom: '12px', fontWeight: 600, fontSize: '0.875rem' }}>Good For</h3>
            <ul style={{ color: '#3f3f46', lineHeight: 1.8, paddingLeft: '16px', fontSize: '0.875rem' }}>
              <li>Sideways/ranging markets</li>
              <li>Stable pairs (SOL/USDC)</li>
              <li>High-volume tokens</li>
              <li>Predictable volatility</li>
            </ul>
          </div>
          <div style={{ 
            padding: '20px',
            border: '1px solid #dc2626',
          }}>
            <h3 style={{ color: '#dc2626', marginBottom: '12px', fontWeight: 600, fontSize: '0.875rem' }}>Avoid</h3>
            <ul style={{ color: '#3f3f46', lineHeight: 1.8, paddingLeft: '16px', fontSize: '0.875rem' }}>
              <li>Strong trending markets</li>
              <li>Low-liquidity tokens</li>
              <li>Extreme volatility events</li>
              <li>Tokens with death spiral risk</li>
            </ul>
          </div>
        </div>
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
{`from blot import GridBot

bot = GridBot(
    `}<span style={{ color: '#71717a' }}># Trading pair</span>{`
    base_token="SOL",
    quote_token="USDC",
    
    `}<span style={{ color: '#71717a' }}># Grid range</span>{`
    lower_price=120,  `}<span style={{ color: '#71717a' }}># Bottom of grid</span>{`
    upper_price=180,  `}<span style={{ color: '#71717a' }}># Top of grid</span>{`
    
    `}<span style={{ color: '#71717a' }}># Grid density</span>{`
    grid_count=20,  `}<span style={{ color: '#71717a' }}># Number of grid lines</span>{`
    
    `}<span style={{ color: '#71717a' }}># Investment</span>{`
    total_investment=100,  `}<span style={{ color: '#71717a' }}># USDC to deploy</span>{`
    
    `}<span style={{ color: '#71717a' }}># Grid type</span>{`
    mode="arithmetic",  `}<span style={{ color: '#71717a' }}># "arithmetic" or "geometric"</span>{`
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
          Grid Types Explained
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ 
            padding: '20px',
            border: '1px solid #e4e4e7',
          }}>
            <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Arithmetic Grid</h3>
            <p style={{ color: '#71717a', margin: 0, fontSize: '0.875rem' }}>
              Equal price distance between grid lines. Best for small price ranges.
              <br />
              <code style={{ fontSize: '0.875rem' }}>
                $120 → $130 → $140 → $150 (gap: $10)
              </code>
            </p>
          </div>
          <div style={{ 
            padding: '20px',
            border: '1px solid #e4e4e7',
          }}>
            <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Geometric Grid</h3>
            <p style={{ color: '#71717a', margin: 0, fontSize: '0.875rem' }}>
              Equal percentage distance between grid lines. Better for wider ranges.
              <br />
              <code style={{ fontSize: '0.875rem' }}>
                $100 → $110 → $121 → $133 (gap: 10%)
              </code>
            </p>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Expected Returns
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          Grid profit depends on volatility and grid spacing. More volatile markets = more trades = more profit.
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #000' }}>
              <th style={{ textAlign: 'left', padding: '12px 0', color: '#000' }}>Daily Volatility</th>
              <th style={{ textAlign: 'left', padding: '12px 0', color: '#000' }}>Est. Daily Return</th>
              <th style={{ textAlign: 'left', padding: '12px 0', color: '#000' }}>Est. APY</th>
            </tr>
          </thead>
          <tbody style={{ color: '#3f3f46' }}>
            <tr style={{ borderBottom: '1px solid #e4e4e7' }}>
              <td style={{ padding: '12px 0' }}>1-2%</td>
              <td style={{ padding: '12px 0' }}>0.1-0.2%</td>
              <td style={{ padding: '12px 0', color: '#dc2626' }}>36-73%</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e4e4e7' }}>
              <td style={{ padding: '12px 0' }}>3-5%</td>
              <td style={{ padding: '12px 0' }}>0.3-0.5%</td>
              <td style={{ padding: '12px 0', color: '#dc2626' }}>109-182%</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 0' }}>5-10%</td>
              <td style={{ padding: '12px 0' }}>0.5-1.0%</td>
              <td style={{ padding: '12px 0', color: '#dc2626' }}>182-365%</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #000',
      }}>
        <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Pro Tip</h3>
        <p style={{ margin: 0, color: '#3f3f46', fontSize: '0.875rem', lineHeight: 1.6 }}>
          Use the <strong>AI-Assisted Grid</strong> feature to let OpenClaw automatically adjust 
          your grid range based on market analysis and technical indicators.
        </p>
      </section>
    </article>
  );
}
