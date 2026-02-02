import Link from 'next/link';

export default function BunkerTokenPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        $BLOT Token
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        The native utility token of the BLOT ecosystem.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <div style={{ 
          padding: '32px',
          border: '1px solid #000',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '3rem', fontWeight: 700, color: '#dc2626', marginBottom: '8px' }}>
            $BLOT
          </div>
          <div style={{ fontSize: '0.875rem', color: '#71717a' }}>
            Pay • Use • Burn
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
          What is $BLOT?
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          $BLOT is a SPL token on the Solana blockchain. It&apos;s the only payment method 
          for all BLOT services. Simple as that.
        </p>
        <div style={{ 
          padding: '20px',
          border: '1px solid #dc2626',
          background: '#fef2f2',
          marginBottom: '16px'
        }}>
          <strong style={{ color: '#dc2626' }}>Deflationary by Design</strong>
          <p style={{ margin: 0, marginTop: '8px', color: '#3f3f46', fontSize: '0.875rem' }}>
            All $BLOT spent on platform services is permanently burned. The more people use BLOT, 
            the less tokens exist. Supply only goes down.
          </p>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          What Can You Pay For?
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { title: 'Bot Runtime', desc: 'Keep your bots running 24/7 on our infrastructure' },
            { title: 'Premium Bots', desc: 'Access to advanced trading strategies from marketplace' },
            { title: 'SDK Access', desc: 'Build and deploy your own custom bots' },
            { title: 'Priority Execution', desc: 'Faster trades, better RPC nodes' },
          ].map((item) => (
            <div key={item.title} style={{ 
              padding: '16px 20px',
              border: '1px solid #e4e4e7',
            }}>
              <strong style={{ color: '#000' }}>{item.title}</strong>
              <p style={{ margin: 0, color: '#71717a', marginTop: '4px', fontSize: '0.875rem' }}>{item.desc}</p>
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
          Contract Address
        </h2>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
        }}>
          <div style={{ fontSize: '0.75rem', color: '#71717a', marginBottom: '8px' }}>SOLANA (SPL TOKEN)</div>
          <code style={{ 
            display: 'block',
            fontSize: '0.875rem',
            color: '#dc2626',
            wordBreak: 'break-all',
            fontFamily: 'monospace'
          }}>
            BRiGa9xAV9jFVChXkWWkMvSk5vrtALZgzBV7vXxzpump
          </code>
        </div>
        <p style={{ fontSize: '0.875rem', color: '#71717a', marginTop: '12px' }}>
          Always verify you&apos;re interacting with the correct contract. Never trust random links.
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Buy $BLOT
        </h2>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link 
            href="https://pump.fun/coin/BRiGa9xAV9jFVChXkWWkMvSk5vrtALZgzBV7vXxzpump"
            target="_blank"
            style={{ 
              padding: '12px 24px',
              border: '1px solid #dc2626',
              background: '#dc2626',
              color: '#fff',
              textDecoration: 'none',
            }}
          >
            Buy on Pump.fun →
          </Link>
          <Link 
            href="/docs/how-to-buy"
            style={{ 
              padding: '12px 24px',
              border: '1px solid #000',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            How to Buy Guide →
          </Link>
        </div>
      </section>
    </article>
  );
}
