'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItems = [
  { href: '/docs', label: 'Docs' },
  { href: 'https://pypi.org/project/blot-sdk/', label: 'PyPI', external: true },
  { href: '/app', label: 'App' },
  { href: 'https://x.com/bloboratory', label: '@bloboratory', external: true },
  { href: 'https://pump.fun/coin/BRiGa9xAV9jFVChXkWWkMvSk5vrtALZgzBV7vXxzpump', label: '$BLOT', external: true },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      zIndex: 50, 
      background: '#fff',
      height: '56px'
    }}>
      <nav style={{ height: '100%', padding: '0 24px' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', 
          height: '100%',
        }}>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <img 
              src="/logo.png" 
              alt="BLOT" 
              style={{ 
                width: '32px', 
                height: '32px', 
                objectFit: 'contain',
              }}
            />
            <span style={{ fontSize: '15px', fontWeight: 500, letterSpacing: '-0.01em' }}>BLOT</span>
          </Link>

          {/* Navigation - Desktop */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '14px', fontWeight: 500, color: '#000', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.5'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ 
                    fontSize: '14px', 
                    fontWeight: 500, 
                    color: pathname === item.href ? '#dc2626' : '#000',
                    transition: 'opacity 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== item.href) e.currentTarget.style.opacity = '0.5';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = '1';
                  }}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>

          {/* Mobile menu button */}
          <button 
            className="nav-mobile-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ padding: '8px', color: '#000', background: 'transparent', border: 'none', cursor: 'pointer' }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {mobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div style={{ 
            position: 'absolute',
            top: '56px',
            left: 0,
            right: 0,
            background: '#fff',
            borderBottom: '1px solid #000',
            padding: '0 24px 16px'
          }}>
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    display: 'block', 
                    padding: '12px 0', 
                    fontSize: '14px', 
                    fontWeight: 500, 
                    color: '#000',
                  }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ 
                    display: 'block',
                    padding: '12px 0',
                    fontSize: '14px', 
                    fontWeight: 500, 
                    color: pathname === item.href ? '#dc2626' : '#000',
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
