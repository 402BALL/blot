'use client';

import { usePathname } from 'next/navigation';

export default function ContentFrame() {
  const pathname = usePathname();
  const isDocs = pathname?.startsWith('/docs');

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      pointerEvents: 'none',
      zIndex: 40
    }}>
      {/* Top horizontal line - under header */}
      <div style={{
        position: 'absolute',
        top: '56px',
        left: 0,
        right: 0,
        height: '1px',
        background: '#000'
      }} />
      
      {/* Left vertical line - only show when NOT on docs pages */}
      {!isDocs && (
        <div style={{
          position: 'absolute',
          top: '56px',
          left: '100px',
          bottom: '70px',
          width: '1px',
          background: '#000'
        }} />
      )}
      
      {/* Bottom horizontal line - above footer */}
      <div style={{
        position: 'absolute',
        bottom: '70px',
        left: 0,
        right: 0,
        height: '1px',
        background: '#000'
      }} />
    </div>
  );
}
