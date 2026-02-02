import Link from 'next/link';

export default function HowToBuyPage() {
  const CA = 'BRiGa9xAV9jFVChXkWWkMvSk5vrtALZgzBV7vXxzpump';
  
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        How to Buy
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        Get $BLOT in 3 simple steps.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Step 1: Get a Solana Wallet
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          You need a Solana wallet to hold $BLOT:
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a 
            href="https://phantom.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              padding: '12px 20px',
              border: '1px solid #000',
              color: '#000',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}
          >
            Phantom <span style={{ fontSize: '0.75rem', color: '#dc2626' }}>Recommended</span>
          </a>
          <a 
            href="https://solflare.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              padding: '12px 20px',
              border: '1px solid #e4e4e7',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            Solflare
          </a>
        </div>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Step 2: Get SOL
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          You need SOL to buy $BLOT. Get it from:
        </p>
        <ul style={{ lineHeight: 2, color: '#3f3f46' }}>
          <li>• <strong>Exchanges:</strong> Binance, Coinbase, Kraken, Bybit</li>
          <li>• <strong>Buy with card:</strong> MoonPay, Transak (in Phantom)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Step 3: Buy on Pump.fun
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          $BLOT is available on Pump.fun:
        </p>
        
        <ol style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
          {[
            'Go to pump.fun',
            'Connect your Phantom wallet',
            'Find $BLOT or paste the contract address',
            'Enter SOL amount you want to spend',
            'Click Buy and confirm in wallet',
          ].map((step, index) => (
            <li key={index} style={{ 
              display: 'flex',
              gap: '12px',
              alignItems: 'flex-start'
            }}>
              <span style={{ 
                width: '28px',
                height: '28px',
                background: index === 4 ? '#dc2626' : '#000',
                color: '#fff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: 600,
                flexShrink: 0,
                borderRadius: '50%'
              }}>
                {index + 1}
              </span>
              <span style={{ color: '#3f3f46', paddingTop: '4px' }}>{step}</span>
            </li>
          ))}
        </ol>

        <Link 
          href={`https://pump.fun/coin/${CA}`}
          target="_blank"
          style={{ 
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: '#dc2626',
            color: '#fff',
            textDecoration: 'none',
          }}
        >
          Buy $BLOT on Pump.fun →
        </Link>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #000',
        marginBottom: '24px'
      }}>
        <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Contract Address</h3>
        <code style={{ 
          display: 'block',
          fontSize: '0.875rem',
          color: '#dc2626',
          wordBreak: 'break-all',
          fontFamily: 'monospace'
        }}>
          {CA}
        </code>
        <p style={{ margin: 0, marginTop: '12px', fontSize: '0.75rem', color: '#71717a' }}>
          Always verify you&apos;re buying the correct token. Check the address!
        </p>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #e4e4e7',
      }}>
        <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Other Places to Buy</h3>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '12px' }}>
          <a 
            href={`https://jup.ag/swap/SOL-${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              padding: '8px 16px',
              border: '1px solid #e4e4e7',
              color: '#000',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}
          >
            Jupiter
          </a>
          <a 
            href={`https://raydium.io/swap/?inputMint=sol&outputMint=${CA}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{ 
              padding: '8px 16px',
              border: '1px solid #e4e4e7',
              color: '#000',
              textDecoration: 'none',
              fontSize: '0.875rem'
            }}
          >
            Raydium
          </a>
        </div>
      </section>
    </article>
  );
}
