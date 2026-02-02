'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const sections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '/docs/introduction' },
      { title: 'Quick Start', href: '/docs/quick-start' },
      { title: 'Installation', href: '/docs/installation' },
    ],
  },
  {
    title: 'Bots',
    items: [
      { title: 'Sniper Bot', href: '/docs/sniper-bot' },
      { title: 'DCA Bot', href: '/docs/dca-bot' },
      { title: 'Copy Trade Bot', href: '/docs/copy-trade-bot' },
      { title: 'Grid Bot', href: '/docs/grid-bot' },
    ],
  },
  {
    title: 'SDK',
    items: [
      { title: 'Python SDK', href: '/docs/sdk' },
      { title: 'Strategies', href: '/docs/sdk-strategies' },
      { title: 'Autonomy', href: '/docs/sdk-autonomy' },
    ],
  },
  {
    title: 'Infrastructure',
    items: [
      { title: 'Self-Cloning', href: '/docs/self-cloning' },
      { title: 'Runtime', href: '/docs/runtime' },
      { title: 'Security', href: '/docs/security' },
    ],
  },
  {
    title: 'Token',
    items: [
      { title: '$BLOT', href: '/docs/bunker-token' },
      { title: 'Tokenomics', href: '/docs/tokenomics' },
      { title: 'How to Buy', href: '/docs/how-to-buy' },
    ],
  },
];

export default function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside>
      <div style={{ position: 'sticky', top: '80px' }}>
        {sections.map((section) => (
          <div key={section.title} style={{ marginBottom: '28px' }}>
            <h3 style={{ 
              fontSize: '11px', 
              fontWeight: 600, 
              marginBottom: '10px',
              color: '#000',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              {section.title}
            </h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      style={{ 
                        display: 'block',
                        padding: '6px 10px',
                        fontSize: '13px', 
                        color: isActive ? '#dc2626' : '#71717a',
                        backgroundColor: isActive ? 'rgba(220, 38, 38, 0.05)' : 'transparent',
                        transition: 'all 0.15s ease',
                        borderLeft: isActive ? '2px solid #dc2626' : '2px solid transparent',
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#000';
                          e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.03)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.color = '#71717a';
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }
                      }}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
}
