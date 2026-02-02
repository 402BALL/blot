'use client';

import { useState, useEffect } from 'react';

const words = ['trading', 'AI', 'your', 'autonomous'];

export default function RotatingText() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [lineWidth, setLineWidth] = useState('100%');

  useEffect(() => {
    const interval = setInterval(() => {
      // Start hide animation
      setLineWidth('0%');
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % words.length);
        setIsVisible(true);
        setLineWidth('100%');
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <span style={{ position: 'relative', display: 'inline-block' }}>
      {/* The word */}
      <span 
        style={{
          display: 'inline-block',
          color: '#dc2626',
          transition: 'all 0.4s ease',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(-10px)'
        }}
      >
        {words[currentIndex]}
      </span>
      
      {/* Animated underline */}
      <span 
        style={{
          position: 'absolute',
          bottom: '0.1em',
          left: 0,
          height: '2px',
          background: '#dc2626',
          width: lineWidth,
          transition: 'width 0.4s ease',
        }}
      />
    </span>
  );
}
