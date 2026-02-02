export default function SecurityPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        Security
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        How BLOT protects your funds and trading data.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Zero-Knowledge Architecture
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          BLOT is designed with a <span style={{ color: '#dc2626' }}>zero-knowledge architecture</span>. 
          This means we have no access to your private keys, trading strategies, or transaction history.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { title: 'No Key Custody', desc: 'Your private keys never leave your device. Transactions are signed locally using secure enclaves.' },
            { title: 'No Logging', desc: 'We don\'t store transaction logs, trading history, or strategy parameters. Your data is yours.' },
            { title: 'E2E Encryption', desc: 'All communication between your client and our nodes is end-to-end encrypted.' },
          ].map((item) => (
            <div key={item.title} style={{ 
              padding: '16px 20px',
              border: '1px solid #e4e4e7',
            }}>
              <strong style={{ color: '#000' }}>{item.title}</strong>
              <span style={{ color: '#71717a' }}> — {item.desc}</span>
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
          Key Management
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          BLOT uses a hierarchical deterministic (HD) wallet structure with threshold signatures:
        </p>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          overflow: 'auto'
        }}>
          <pre style={{ margin: 0, color: '#000' }}>
{`┌─────────────────────────────────────────────────────┐
│              Your Master Wallet                     │
│         (Never shared, stored locally)              │
└────────────────────┬────────────────────────────────┘
                     │
         ┌───────────┼───────────┐
         │           │           │
    ┌────▼────┐ ┌────▼────┐ ┌────▼────┐
    │ Bot 1   │ │ Bot 2   │ │ Bot 3   │  Derived Keys
    │ Key     │ │ Key     │ │ Key     │  (HD path)
    └────┬────┘ └────┬────┘ └────┬────┘
         │           │           │
    Threshold Signature (2-of-3 required)`}
          </pre>
        </div>
        <p style={{ lineHeight: 1.8, color: '#71717a', marginTop: '16px', fontSize: '0.875rem' }}>
          Each bot gets its own derived key. Transactions require signatures from multiple clones 
          (threshold signatures) to prevent single points of compromise.
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Secure Enclaves
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          All cryptographic operations happen inside hardware secure enclaves (Intel SGX / ARM TrustZone):
        </p>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', color: '#3f3f46' }}>
          <li>• Keys are generated inside the enclave and never exposed to the host OS</li>
          <li>• Transaction signing happens in isolated memory</li>
          <li>• Remote attestation verifies enclave integrity</li>
          <li>• Even if a node is compromised, keys remain secure</li>
        </ul>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Spending Limits
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          Configure spending limits to protect against bugs or exploits:
        </p>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          overflow: 'auto'
        }}>
          <pre style={{ margin: 0, color: '#000' }}>
{`from blot import SniperBot, SecurityLimits

limits = SecurityLimits(
    max_trade_size=10,  `}<span style={{ color: '#71717a' }}># Max 10 SOL per trade</span>{`
    max_daily_volume=100,  `}<span style={{ color: '#71717a' }}># Max 100 SOL/day total</span>{`
    max_slippage=5,  `}<span style={{ color: '#71717a' }}># Reject trades with &gt;5% slippage</span>{`
    allowed_tokens=["SOL", "USDC", "JUP"],  `}<span style={{ color: '#71717a' }}># Whitelist</span>{`
    require_2fa=True,  `}<span style={{ color: '#71717a' }}># 2FA for withdrawals</span>{`
)

bot = SniperBot(
    `}<span style={{ color: '#71717a' }}># ... config ...</span>{`
    security_limits=limits
)`}
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
          Audit & Bug Bounty
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
          <div style={{ 
            padding: '20px',
            border: '1px solid #e4e4e7',
          }}>
            <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Security Audits</h3>
            <p style={{ color: '#71717a', margin: 0, fontSize: '0.875rem' }}>
              Our smart contracts and runtime environment have been audited by leading security firms:
            </p>
            <ul style={{ color: '#3f3f46', marginTop: '12px', paddingLeft: '16px', fontSize: '0.875rem' }}>
              <li>Trail of Bits</li>
              <li>OtterSec</li>
              <li>Halborn</li>
            </ul>
          </div>
          <div style={{ 
            padding: '20px',
            border: '1px solid #e4e4e7',
          }}>
            <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Bug Bounty Program</h3>
            <p style={{ color: '#71717a', margin: 0, fontSize: '0.875rem' }}>
              We offer bounties for responsible disclosure of security vulnerabilities:
            </p>
            <ul style={{ color: '#3f3f46', marginTop: '12px', paddingLeft: '16px', fontSize: '0.875rem' }}>
              <li>Critical: up to <span style={{ color: '#dc2626' }}>$100,000</span></li>
              <li>High: up to $25,000</li>
              <li>Medium: up to $5,000</li>
            </ul>
          </div>
        </div>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #000',
      }}>
        <h3 style={{ color: '#000', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Your Responsibility</h3>
        <p style={{ margin: 0, color: '#3f3f46', fontSize: '0.875rem', lineHeight: 1.6 }}>
          While we provide industry-leading security, you are responsible for:
          keeping your master wallet seed phrase secure, setting appropriate spending limits,
          reviewing bot code before deployment, and using hardware wallets for large amounts.
        </p>
      </section>
    </article>
  );
}
