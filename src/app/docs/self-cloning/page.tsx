export default function SelfCloningPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        Self-Cloning
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        How BLOT bots achieve true unstoppability through autonomous replication.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          The Problem
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          Traditional trading bots run on a single server. If that server goes down, your bot stops trading. 
          You miss opportunities. You can&apos;t close positions. Your funds are at risk.
        </p>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: '#000'
        }}>
          <pre style={{ margin: 0 }}>
{`[TRADITIONAL BOT]

Server Crashes ─────────────────────────────────────
                 │
                 ├── Bot stops
                 ├── Open positions unmanaged
                 ├── Missed trades
                 └── Manual intervention required`}
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
          The Solution: Self-Cloning Architecture
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          BLOT bots run on a distributed network of nodes. Each bot maintains multiple 
          clones of itself across different geographic regions. If one clone fails, others 
          immediately take over — with zero downtime.
        </p>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          fontSize: '0.875rem',
          color: '#000'
        }}>
          <pre style={{ margin: 0 }}>
{`[BLOT BOT]

Primary Clone (US) ──── FAILS ──────────────────────
                           │
Clone 2 (EU) ─────────────── TAKES OVER (< 100ms)
                           │
Clone 3 (ASIA) ───────────── STANDBY (auto-promotes)
                           │
New Clone (US-2) ─────────── SPAWNS (replaces failed)`}
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
          How It Works
        </h2>
        <ol style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {[
            { 
              step: '1', 
              title: 'Initial Deployment', 
              desc: 'When you deploy a bot, it automatically replicates to 3+ nodes in different regions.' 
            },
            { 
              step: '2', 
              title: 'State Synchronization', 
              desc: 'All clones share state via encrypted peer-to-peer communication. Every clone knows the current positions, orders, and strategy.' 
            },
            { 
              step: '3', 
              title: 'Leader Election', 
              desc: 'One clone is the "primary" that executes trades. Others watch and validate. If primary fails, a new leader is elected in <100ms.' 
            },
            { 
              step: '4', 
              title: 'Self-Healing', 
              desc: 'When a clone fails, surviving clones automatically spawn a replacement to maintain redundancy.' 
            },
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
                <strong style={{ color: '#000', fontSize: '1rem' }}>{item.title}</strong>
                <p style={{ margin: 0, color: '#71717a', marginTop: '4px', lineHeight: 1.6 }}>{item.desc}</p>
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
    `}<span style={{ color: '#71717a' }}># ... your bot config ...</span>{`
    
    `}<span style={{ color: '#71717a' }}># Cloning settings</span>{`
    clone_count=5,  `}<span style={{ color: '#71717a' }}># Minimum active clones</span>{`
    regions=["us", "eu", "asia"],  `}<span style={{ color: '#71717a' }}># Geographic distribution</span>{`
    
    `}<span style={{ color: '#71717a' }}># Failover settings</span>{`
    failover_timeout=100,  `}<span style={{ color: '#71717a' }}># ms before electing new leader</span>{`
    sync_interval=50,  `}<span style={{ color: '#71717a' }}># ms between state syncs</span>{`
)`}
          </pre>
        </div>
      </section>

      <section style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '16px',
        marginBottom: '48px'
      }}>
        {[
          { value: '99.99%', label: 'Uptime SLA' },
          { value: '<100ms', label: 'Failover Time' },
          { value: '50+', label: 'Global Nodes' },
        ].map((stat) => (
          <div key={stat.label} style={{ 
            textAlign: 'center',
            padding: '24px',
            border: '1px solid #000',
          }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#dc2626' }}>{stat.value}</div>
            <div style={{ fontSize: '0.75rem', color: '#71717a', marginTop: '4px' }}>{stat.label}</div>
          </div>
        ))}
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #000',
      }}>
        <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Security Note</h3>
        <p style={{ margin: 0, color: '#3f3f46', fontSize: '0.875rem', lineHeight: 1.6 }}>
          Your private keys are <strong>never</strong> shared between clones. Each clone uses a 
          secure enclave to sign transactions, and keys are derived from your master key using 
          threshold cryptography.
        </p>
      </section>
    </article>
  );
}
