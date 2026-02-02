'use client';

import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [binaryCode, setBinaryCode] = useState('0000000000');
  const [randomText, setRandomText] = useState('LOADING...');

  useEffect(() => {
    // Binary code animation
    const binaryInterval = setInterval(() => {
      const newBinary = Array.from({ length: 10 }, () => 
        Math.random() > 0.5 ? '1' : '0'
      ).join('');
      setBinaryCode(newBinary);
    }, 50);

    // Random text animation
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const textInterval = setInterval(() => {
      const newText = Array.from({ length: 16 }, () => 
        chars[Math.floor(Math.random() * chars.length)]
      ).join('');
      setRandomText(newText);
    }, 30);

    // Auto complete after time
    const completeTimer = setTimeout(() => {
      clearInterval(binaryInterval);
      clearInterval(textInterval);
      onComplete?.();
    }, 1500);

    return () => {
      clearInterval(binaryInterval);
      clearInterval(textInterval);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      fontFamily: 'monospace'
    }}>
      {/* Binary code - RED */}
      <div style={{
        fontSize: 'clamp(3rem, 10vw, 6rem)',
        fontWeight: 700,
        color: '#dc2626',
        letterSpacing: '0.1em',
        marginBottom: '24px'
      }}>
        {binaryCode}
      </div>

      {/* Random scrambling text - BLACK */}
      <div style={{
        fontSize: '14px',
        fontWeight: 500,
        color: '#000000',
        letterSpacing: '0.3em',
        marginBottom: '16px',
      }}>
        {randomText}
      </div>

      {/* Loading text - BLACK */}
      <div style={{
        fontSize: '12px',
        fontWeight: 500,
        color: '#000000',
        letterSpacing: '0.5em',
        opacity: 0.6
      }}>
        LOADING...
      </div>
    </div>
  );
}
