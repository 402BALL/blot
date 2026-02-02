import Link from 'next/link';

export default function TokenomicsPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        Tokenomics
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        Simple tokenomics. Pay for services, tokens get burned. That&apos;s it.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Token Info
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(2, 1fr)', 
          gap: '16px' 
        }}>
          {[
            { label: 'Token Name', value: 'BLOT' },
            { label: 'Network', value: 'Solana (SPL)' },
            { label: 'Total Supply', value: '1,000,000,000' },
            { label: 'Decimals', value: '6' },
          ].map((item) => (
            <div key={item.label} style={{ 
              padding: '20px',
              border: '1px solid #e4e4e7',
            }}>
              <div style={{ fontSize: '0.75rem', color: '#71717a', marginBottom: '4px' }}>{item.label}</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 600, color: '#000' }}>{item.value}</div>
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
          Burn Mechanism
        </h2>
        <div style={{ 
          padding: '24px',
          border: '1px solid #dc2626',
          background: '#fef2f2',
          marginBottom: '16px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
            <div style={{ fontSize: '2rem' }}>🔥</div>
            <div>
              <strong style={{ color: '#dc2626', fontSize: '1.25rem' }}>100% Burn</strong>
              <p style={{ margin: 0, marginTop: '4px', color: '#3f3f46', fontSize: '0.875rem' }}>
                All tokens spent on services are permanently burned
              </p>
            </div>
          </div>
          <div style={{ 
            padding: '16px',
            background: '#fff',
            border: '1px solid #e4e4e7',
          }}>
            <div style={{ fontFamily: 'monospace', fontSize: '0.875rem', color: '#3f3f46' }}>
              User pays $BLOT → Service activated → Tokens burned forever
            </div>
          </div>
        </div>
        <p style={{ lineHeight: 1.8, color: '#3f3f46' }}>
          Every time someone uses BLOT services, tokens are removed from circulation permanently. 
          No team wallet. No recycling. Just burn. This creates constant deflationary pressure 
          as adoption grows.
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          What You Pay For
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { service: 'Bot Runtime (per day)', price: '10-100 $BLOT', burn: '100%' },
            { service: 'Premium Bot Access', price: '100-500 $BLOT', burn: '100%' },
            { service: 'SDK License', price: '1,000 $BLOT', burn: '100%' },
            { service: 'Priority Execution', price: '50 $BLOT/day', burn: '100%' },
            { service: 'Marketplace Bot Deploy', price: 'Varies', burn: '100%' },
          ].map((item) => (
            <div key={item.service} style={{ 
              padding: '16px 20px',
              border: '1px solid #e4e4e7',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <strong style={{ color: '#000' }}>{item.service}</strong>
                <p style={{ margin: 0, color: '#71717a', marginTop: '4px', fontSize: '0.875rem' }}>{item.price}</p>
              </div>
              <span style={{ 
                padding: '4px 8px', 
                background: '#dc2626', 
                color: '#fff', 
                fontSize: '0.75rem',
                fontWeight: 600
              }}>
                {item.burn} BURN
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
          Supply Over Time
        </h2>
        <div style={{ 
          padding: '24px',
          border: '1px solid #000',
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#3f3f46' }}>Launch</span>
                <span style={{ fontWeight: 600, color: '#000' }}>1,000,000,000</span>
              </div>
              <div style={{ height: '8px', backgroundColor: '#dc2626' }}></div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#3f3f46' }}>After Usage</span>
                <span style={{ fontWeight: 600, color: '#000' }}>↓ Decreasing</span>
              </div>
              <div style={{ height: '8px', backgroundColor: '#e4e4e7', overflow: 'hidden' }}>
                <div style={{ width: '75%', height: '100%', backgroundColor: '#dc2626' }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                <span style={{ color: '#3f3f46' }}>Long Term</span>
                <span style={{ fontWeight: 600, color: '#000' }}>↓↓ Scarce</span>
              </div>
              <div style={{ height: '8px', backgroundColor: '#e4e4e7', overflow: 'hidden' }}>
                <div style={{ width: '40%', height: '100%', backgroundColor: '#dc2626' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #000',
      }}>
        <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Contract Address</h3>
        <code style={{ 
          display: 'block',
          fontSize: '0.875rem',
          color: '#dc2626',
          wordBreak: 'break-all',
          fontFamily: 'monospace'
        }}>
          BRiGa9xAV9jFVChXkWWkMvSk5vrtALZgzBV7vXxzpump
        </code>
        <div style={{ display: 'flex', gap: '12px', marginTop: '16px' }}>
          <Link 
            href="https://pump.fun/coin/BRiGa9xAV9jFVChXkWWkMvSk5vrtALZgzBV7vXxzpump"
            target="_blank"
            style={{ 
              padding: '8px 16px',
              background: '#dc2626',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}
          >
            Buy on Pump.fun
          </Link>
          <Link 
            href="https://solscan.io/token/BRiGa9xAV9jFVChXkWWkMvSk5vrtALZgzBV7vXxzpump"
            target="_blank"
            style={{ 
              padding: '8px 16px',
              border: '1px solid #000',
              color: '#000',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}
          >
            View on Solscan
          </Link>
        </div>
      </section>
    </article>
  );
}
