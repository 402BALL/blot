export default function SDKAutonomyPage() {
  return (
    <div>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '16px' }}>Autonomy & Self-Preservation</h1>
      <p style={{ color: '#71717a', marginBottom: '32px', lineHeight: 1.7 }}>
        Bots operate 24/7 without downtime, automatically clone themselves across distributed nodes, 
        and execute trades with zero human intervention.
      </p>

      {/* Full Example */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Configuration</h2>
        <div style={{ border: '1px solid #000', padding: '16px' }}>
          <pre style={{ fontSize: '13px', overflow: 'auto', lineHeight: 1.5 }}>
{`from blot_sdk import Bot

bot = Bot(private_key="...")

# Enable 24/7 autonomous operation
bot.enable_autonomy(
    mode="persistent",
    auto_restart=True,
    health_checks=True
)

# Enable self-cloning on threat detection
bot.enable_self_cloning(
    trigger="on_threat",
    target_nodes=3,
    regions=["us", "eu", "asia"]
)

# Zero-logging mode for privacy
bot.set_logging(enabled=False)

# Auto-migrate if node goes down
bot.on_node_failure(action="migrate", priority="immediate")

# Deploy to BLOT distributed network
bot.deploy(
    tier="premium",
    redundancy=3,
    duration_days=30
)`}
          </pre>
        </div>
      </section>

      {/* Features */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Features</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ border: '1px solid #000', padding: '16px' }}>
            <h3 style={{ fontWeight: 500, marginBottom: '8px', color: '#dc2626' }}>Persistent Mode</h3>
            <p style={{ fontSize: '14px', color: '#71717a' }}>
              Bots automatically restart after crashes or network issues. Health checks ensure continuous operation.
            </p>
          </div>
          <div style={{ border: '1px solid #000', padding: '16px' }}>
            <h3 style={{ fontWeight: 500, marginBottom: '8px', color: '#dc2626' }}>Self-Cloning</h3>
            <p style={{ fontSize: '14px', color: '#71717a' }}>
              When threats are detected, bots clone themselves to other nodes. Geographic distribution ensures resilience.
            </p>
          </div>
          <div style={{ border: '1px solid #000', padding: '16px' }}>
            <h3 style={{ fontWeight: 500, marginBottom: '8px', color: '#dc2626' }}>Zero Logging</h3>
            <p style={{ fontSize: '14px', color: '#71717a' }}>
              No transaction history, no activity logs, no trace. Complete operational privacy.
            </p>
          </div>
          <div style={{ border: '1px solid #000', padding: '16px' }}>
            <h3 style={{ fontWeight: 500, marginBottom: '8px', color: '#dc2626' }}>Auto-Migration</h3>
            <p style={{ fontSize: '14px', color: '#71717a' }}>
              If a node fails, the bot automatically migrates to a healthy node with zero downtime.
            </p>
          </div>
        </div>
      </section>

      {/* Deployment Tiers */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '16px' }}>Deployment Tiers</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ border: '1px solid #000', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontWeight: 500, marginBottom: '4px' }}>Standard</h3>
              <p style={{ fontSize: '14px', color: '#71717a' }}>1 active node, basic monitoring</p>
            </div>
            <span style={{ color: '#dc2626', fontWeight: 500 }}>100 $BLOT/day</span>
          </div>
          <div style={{ border: '1px solid #000', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontWeight: 500, marginBottom: '4px' }}>Premium</h3>
              <p style={{ fontSize: '14px', color: '#71717a' }}>3 redundant nodes, priority execution</p>
            </div>
            <span style={{ color: '#dc2626', fontWeight: 500 }}>250 $BLOT/day</span>
          </div>
          <div style={{ border: '1px solid #000', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h3 style={{ fontWeight: 500, marginBottom: '4px' }}>Enterprise</h3>
              <p style={{ fontSize: '14px', color: '#71717a' }}>Unlimited nodes, dedicated infrastructure</p>
            </div>
            <span style={{ color: '#dc2626', fontWeight: 500 }}>Contact</span>
          </div>
        </div>
      </section>
    </div>
  );
}

