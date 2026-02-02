import Link from 'next/link';

export default function SDKDocsPage() {
  return (
    <div>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '16px' }}>Python SDK</h1>
      <p style={{ color: '#71717a', marginBottom: '32px', lineHeight: 1.7 }}>
        Build unstoppable, self-preserving trading bots that operate 24/7 with zero downtime.
      </p>

      {/* Core Features */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Core Features</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
          <div style={{ border: '1px solid #000', padding: '16px' }}>
            <h3 style={{ fontWeight: 500, marginBottom: '8px', color: '#dc2626' }}>24/7 Autonomous</h3>
            <p style={{ fontSize: '14px', color: '#71717a' }}>
              Bots run continuously without human intervention.
            </p>
          </div>
          <div style={{ border: '1px solid #000', padding: '16px' }}>
            <h3 style={{ fontWeight: 500, marginBottom: '8px', color: '#dc2626' }}>Self-Cloning</h3>
            <p style={{ fontSize: '14px', color: '#71717a' }}>
              Automatic replication across distributed nodes.
            </p>
          </div>
          <div style={{ border: '1px solid #000', padding: '16px' }}>
            <h3 style={{ fontWeight: 500, marginBottom: '8px', color: '#dc2626' }}>Zero Logging</h3>
            <p style={{ fontSize: '14px', color: '#71717a' }}>
              Complete privacy with no activity logs stored.
            </p>
          </div>
          <div style={{ border: '1px solid #000', padding: '16px' }}>
            <h3 style={{ fontWeight: 500, marginBottom: '8px', color: '#dc2626' }}>AI-Powered</h3>
            <p style={{ fontSize: '14px', color: '#71717a' }}>
              OpenClaw integration for intelligent decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Installation</h2>
        <div style={{ border: '1px solid #000', padding: '16px', marginBottom: '12px' }}>
          <pre style={{ fontSize: '14px', overflow: 'auto' }}>
            <code>pip install blot-sdk</code>
          </pre>
        </div>
        <p style={{ fontSize: '14px', color: '#71717a' }}>
          Requires Python 3.8+. Works with any Solana wallet.
        </p>
      </section>

      {/* Quick Example */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Quick Example</h2>
        <div style={{ border: '1px solid #000', padding: '16px' }}>
          <pre style={{ fontSize: '13px', overflow: 'auto', lineHeight: 1.5 }}>
{`from blot_sdk import Bot, Strategy, Trigger

# Initialize with your wallet
bot = Bot(
    private_key="your_private_key",
    rpc_url="https://api.mainnet-beta.solana.com"
)

# Create a sniper bot
@bot.strategy
class SniperBot(Strategy):
    
    @Trigger.on_new_token(dex="raydium")
    async def snipe(self, token):
        if await self.ai.analyze(token).is_promising:
            await self.swap(
                from_token="SOL",
                to_token=token.address,
                amount=0.5,
                slippage=1.0
            )

# Enable self-preservation & cloning
bot.enable_threat_monitoring()
bot.on_threat(action="clone", target_region="random")

# Deploy to BLOT distributed network
bot.deploy(tier="standard", duration_days=30)`}
          </pre>
        </div>
      </section>

      {/* Links */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Resources</h2>
        <div style={{ display: 'flex', gap: '12px' }}>
          <Link
            href="https://pypi.org/project/blot-sdk/"
            target="_blank"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #000', padding: '8px 16px' }}
          >
            <span>PyPI Package</span>
            <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}

