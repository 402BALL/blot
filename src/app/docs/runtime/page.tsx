export default function RuntimePage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        Runtime Environment
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        Understanding the BLOT execution environment.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Architecture Overview
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          BLOT provides a sandboxed runtime environment for trading bots. Each bot runs in 
          an isolated container with access to Solana RPC nodes, market data feeds, and the OpenClaw 
          AI engine.
        </p>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          fontSize: '0.875rem'
        }}>
          <pre style={{ margin: 0, color: '#000' }}>
{`┌─────────────────────────────────────────────────────┐
│                  BLOT Node                  │
├─────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐             │
│  │  Bot 1  │  │  Bot 2  │  │  Bot 3  │   ...       │
│  └────┬────┘  └────┬────┘  └────┬────┘             │
│       │            │            │                   │
│  ┌────┴────────────┴────────────┴────┐             │
│  │         Shared Services           │             │
│  │  • Solana RPC (multi-region)      │             │
│  │  • Market Data (Jupiter, Birdeye) │             │
│  │  • OpenClaw AI Engine             │             │
│  │  • Secure Key Management          │             │
│  └───────────────────────────────────┘             │
└─────────────────────────────────────────────────────┘`}
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
          Resource Allocation
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          Each bot instance receives dedicated resources based on your subscription tier:
        </p>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '16px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #000' }}>
              <th style={{ textAlign: 'left', padding: '12px 0', color: '#000' }}>Tier</th>
              <th style={{ textAlign: 'left', padding: '12px 0', color: '#000' }}>CPU</th>
              <th style={{ textAlign: 'left', padding: '12px 0', color: '#000' }}>Memory</th>
              <th style={{ textAlign: 'left', padding: '12px 0', color: '#000' }}>RPC Calls/s</th>
            </tr>
          </thead>
          <tbody style={{ color: '#3f3f46' }}>
            <tr style={{ borderBottom: '1px solid #e4e4e7' }}>
              <td style={{ padding: '12px 0' }}>Starter</td>
              <td style={{ padding: '12px 0' }}>0.5 vCPU</td>
              <td style={{ padding: '12px 0' }}>512 MB</td>
              <td style={{ padding: '12px 0' }}>100</td>
            </tr>
            <tr style={{ borderBottom: '1px solid #e4e4e7' }}>
              <td style={{ padding: '12px 0' }}>Pro</td>
              <td style={{ padding: '12px 0' }}>2 vCPU</td>
              <td style={{ padding: '12px 0' }}>2 GB</td>
              <td style={{ padding: '12px 0' }}>500</td>
            </tr>
            <tr>
              <td style={{ padding: '12px 0', fontWeight: 600 }}>Enterprise</td>
              <td style={{ padding: '12px 0' }}>8 vCPU</td>
              <td style={{ padding: '12px 0' }}>16 GB</td>
              <td style={{ padding: '12px 0' }}>Unlimited</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Available APIs
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { 
              name: 'solana', 
              desc: 'Full Solana Web3.js API for transaction building and signing',
              example: 'solana.send_transaction(tx)'
            },
            { 
              name: 'market', 
              desc: 'Real-time price feeds, order books, and trade history',
              example: 'market.get_price("SOL/USDC")'
            },
            { 
              name: 'dex', 
              desc: 'Unified interface for Jupiter, Raydium, Orca, and more',
              example: 'dex.swap("SOL", "USDC", 1.0)'
            },
            { 
              name: 'ai', 
              desc: 'OpenClaw AI for market analysis and decision making',
              example: 'ai.analyze_token("JUP")'
            },
            { 
              name: 'storage', 
              desc: 'Persistent key-value storage for bot state',
              example: 'storage.set("last_trade", data)'
            },
          ].map((api) => (
            <div key={api.name} style={{ 
              padding: '16px 20px',
              border: '1px solid #e4e4e7',
            }}>
              <div style={{ marginBottom: '8px' }}>
                <code style={{ 
                  fontWeight: 600, 
                  color: '#dc2626',
                }}>
                  {api.name}
                </code>
              </div>
              <p style={{ color: '#71717a', margin: 0, marginBottom: '8px', fontSize: '0.875rem' }}>{api.desc}</p>
              <code style={{ 
                fontSize: '0.875rem', 
                color: '#000',
              }}>
                {api.example}
              </code>
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
          Example: Basic Bot Structure
        </h2>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          overflow: 'auto'
        }}>
          <pre style={{ margin: 0, color: '#000' }}>
{`from blot import Bot, market, dex, ai

class MyTradingBot(Bot):
    def setup(self):
        `}<span style={{ color: '#71717a' }}># Called once when bot starts</span>{`
        self.target_token = "JUP"
        self.position = 0
    
    def on_tick(self, timestamp):
        `}<span style={{ color: '#71717a' }}># Called every block (~400ms)</span>{`
        price = market.get_price(f"{self.target_token}/USDC")
        
        `}<span style={{ color: '#71717a' }}># Use AI for analysis</span>{`
        analysis = ai.analyze_market(self.target_token)
        
        if analysis.signal == "BUY" and self.position == 0:
            dex.swap("USDC", self.target_token, 100)
            self.position = 100 / price
            
    def on_price_change(self, token, old_price, new_price):
        `}<span style={{ color: '#71717a' }}># Called on significant price movements</span>{`
        if token == self.target_token:
            change = (new_price - old_price) / old_price
            if change &lt; -0.1:  `}<span style={{ color: '#71717a' }}># -10% drop</span>{`
                dex.swap(self.target_token, "USDC", self.position)
                self.position = 0`}
          </pre>
        </div>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #000',
      }}>
        <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Execution Guarantees</h3>
        <p style={{ margin: 0, color: '#3f3f46', fontSize: '0.875rem', lineHeight: 1.6 }}>
          The runtime guarantees <strong>at-most-once</strong> execution for trades. If a node fails 
          mid-transaction, the standby clone will verify the transaction status before retrying to 
          prevent duplicate trades.
        </p>
      </section>
    </article>
  );
}
