export default function SDKStrategiesPage() {
  return (
    <div>
      <h1 style={{ fontSize: '32px', fontWeight: 600, marginBottom: '16px' }}>Built-in Strategies</h1>
      <p style={{ color: '#71717a', marginBottom: '32px', lineHeight: 1.7 }}>
        Pre-built trading strategies ready to deploy with minimal configuration.
      </p>

      {/* Sniper Strategy */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>SniperStrategy</h2>
        <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '16px' }}>
          Instantly buy new tokens on listing.
        </p>
        <div style={{ border: '1px solid #000', padding: '16px' }}>
          <pre style={{ fontSize: '13px', overflow: 'auto', lineHeight: 1.5 }}>
{`from blot_sdk.strategies import SniperStrategy

strategy = SniperStrategy(
    dex="jupiter",
    amount=1.0,
    slippage=0.5,
    take_profit=2.0,
    stop_loss=0.5
)`}
          </pre>
        </div>
      </section>

      {/* DCA Strategy */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>DCAStrategy</h2>
        <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '16px' }}>
          Dollar-cost averaging into positions.
        </p>
        <div style={{ border: '1px solid #000', padding: '16px' }}>
          <pre style={{ fontSize: '13px', overflow: 'auto', lineHeight: 1.5 }}>
{`from blot_sdk.strategies import DCAStrategy

strategy = DCAStrategy(
    token="BONK",
    amount_per_buy=0.1,
    interval="1h",
    total_budget=10.0
)`}
          </pre>
        </div>
      </section>

      {/* Copy Trade Strategy */}
      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>CopyTradeStrategy</h2>
        <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '16px' }}>
          Copy trades from successful wallets.
        </p>
        <div style={{ border: '1px solid #000', padding: '16px' }}>
          <pre style={{ fontSize: '13px', overflow: 'auto', lineHeight: 1.5 }}>
{`from blot_sdk.strategies import CopyTradeStrategy

strategy = CopyTradeStrategy(
    wallets=["whale1...", "whale2..."],
    min_trade_size=100,
    follow_percentage=0.1,
    delay=0
)`}
          </pre>
        </div>
      </section>

      {/* Grid Strategy */}
      <section>
        <h2 style={{ fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>GridStrategy</h2>
        <p style={{ fontSize: '14px', color: '#71717a', marginBottom: '16px' }}>
          Profit from sideways markets with automated grid trading.
        </p>
        <div style={{ border: '1px solid #000', padding: '16px' }}>
          <pre style={{ fontSize: '13px', overflow: 'auto', lineHeight: 1.5 }}>
{`from blot_sdk.strategies import GridStrategy

strategy = GridStrategy(
    base_token="SOL",
    quote_token="USDC",
    lower_price=120,
    upper_price=180,
    grid_count=20,
    total_investment=100
)`}
          </pre>
        </div>
      </section>
    </div>
  );
}

