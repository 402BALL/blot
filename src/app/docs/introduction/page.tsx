export default function IntroductionPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        Introduction
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        Welcome to BLOT — the autonomous runtime environment for AI-powered trading bots on Solana.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          What is BLOT?
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          BLOT is a decentralized platform that enables traders to deploy and run autonomous trading bots 
          powered by <span style={{ color: '#dc2626' }}>OpenClaw AI</span>. Our bots operate 24/7 without downtime, 
          automatically clone themselves across distributed nodes, and execute trades with zero human intervention.
        </p>
        <p style={{ lineHeight: 1.8, color: '#3f3f46' }}>
          Unlike traditional trading bots, BLOT bots are <strong>truly autonomous</strong> — they can adapt 
          to market conditions, manage risk, and even migrate to new infrastructure if their current host becomes unavailable.
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Key Features
        </h2>
        <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {[
            { title: 'Self-Cloning', desc: 'Bots automatically replicate across multiple nodes for maximum uptime' },
            { title: 'Zero-Logging', desc: 'Complete privacy — no transaction data stored on our servers' },
            { title: 'AI-Powered', desc: 'OpenClaw integration for intelligent decision making' },
            { title: 'Solana Native', desc: 'Built specifically for Solana\'s high-speed, low-cost ecosystem' },
          ].map((feature) => (
            <li key={feature.title} style={{ 
              padding: '16px 20px',
              border: '1px solid #e4e4e7',
            }}>
              <strong style={{ color: '#000' }}>{feature.title}</strong>
              <span style={{ color: '#71717a' }}> — {feature.desc}</span>
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
          How It Works
        </h2>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '24px' 
        }}>
          {[
            { num: '01', title: 'Choose Your Bot', desc: 'Select from ready-made bots or create custom ones with our SDK' },
            { num: '02', title: 'Configure Strategy', desc: 'Set your parameters, risk levels, and trading pairs' },
            { num: '03', title: 'Deploy & Forget', desc: 'Your bot runs autonomously across our distributed network' },
          ].map((step) => (
            <div key={step.num} style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '2rem', 
                fontWeight: 700, 
                color: '#dc2626',
                marginBottom: '8px'
              }}>
                {step.num}
              </div>
              <h3 style={{ fontWeight: 600, marginBottom: '4px', color: '#000', fontSize: '1rem' }}>{step.title}</h3>
              <p style={{ fontSize: '0.875rem', color: '#71717a' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #000',
      }}>
        <p style={{ margin: 0, color: '#3f3f46', fontSize: '0.875rem' }}>
          Ready to get started? Head to the <span style={{ color: '#dc2626' }}>Quick Start</span> guide 
          to deploy your first bot in under 5 minutes.
        </p>
      </section>
    </article>
  );
}
