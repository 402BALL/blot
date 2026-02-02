export default function InstallationPage() {
  return (
    <article>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 700, 
        marginBottom: '16px',
        color: '#000'
      }}>
        Installation
      </h1>
      <p style={{ 
        fontSize: '1.125rem', 
        color: '#71717a', 
        marginBottom: '32px',
        lineHeight: 1.7
      }}>
        Install the BLOT SDK for building custom trading bots.
      </p>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Requirements
        </h2>
        <ul style={{ lineHeight: 2, color: '#3f3f46' }}>
          <li>• Python 3.9 or higher</li>
          <li>• pip (Python package manager)</li>
          <li>• Solana CLI (optional, for local testing)</li>
        </ul>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Install via PyPI
        </h2>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          marginBottom: '16px'
        }}>
          <code style={{ color: '#000' }}>
            <span style={{ color: '#dc2626' }}>$</span> pip install blot
          </code>
        </div>
        <p style={{ fontSize: '0.875rem', color: '#71717a' }}>
          This will install the SDK and all required dependencies.
        </p>
      </section>

      <section style={{ marginBottom: '48px' }}>
        <h2 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 600, 
          marginBottom: '16px',
          color: '#000'
        }}>
          Verify Installation
        </h2>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          marginBottom: '16px'
        }}>
          <pre style={{ margin: 0, color: '#000' }}>
{`$ python -c "import blot; print(blot.__version__)"
1.0.0`}
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
          Initialize Configuration
        </h2>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
          marginBottom: '16px'
        }}>
          <pre style={{ margin: 0, color: '#000' }}>
{`$ blot init

`}<span style={{ color: '#71717a' }}># Creates config file at ~/.blot/config.yaml</span>{`
Configuration initialized`}
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
          Set Your API Key
        </h2>
        <p style={{ lineHeight: 1.8, color: '#3f3f46', marginBottom: '16px' }}>
          Generate an API key from the <span style={{ color: '#dc2626' }}>App dashboard</span> and add it to your environment:
        </p>
        <div style={{ 
          padding: '20px',
          border: '1px solid #000',
          fontFamily: 'monospace',
        }}>
          <pre style={{ margin: 0, color: '#000' }}>
{`$ export BLOT_API_KEY="your-api-key-here"

`}<span style={{ color: '#71717a' }}># Or add to ~/.blot/config.yaml:</span>{`
api_key: "your-api-key-here"
network: mainnet-beta  `}<span style={{ color: '#71717a' }}># or devnet for testing</span>
          </pre>
        </div>
      </section>

      <section style={{ 
        padding: '20px',
        border: '1px solid #dc2626',
      }}>
        <h3 style={{ color: '#dc2626', marginBottom: '8px', fontWeight: 600, fontSize: '0.875rem' }}>Security Note</h3>
        <p style={{ margin: 0, color: '#3f3f46', fontSize: '0.875rem', lineHeight: 1.6 }}>
          Never commit your API key to version control. Use environment variables or a secure 
          secrets manager in production.
        </p>
      </section>
    </article>
  );
}
