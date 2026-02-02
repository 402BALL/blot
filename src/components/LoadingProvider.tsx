'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import LoadingScreen from './LoadingScreen';

export default function LoadingProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [showLoader, setShowLoader] = useState(true);
  const lastPathRef = useRef(pathname);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Clear any existing timer
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    const getSection = (p: string) => p === '/' ? 'home' : p.split('/')[1] || 'home';
    const lastSection = getSection(lastPathRef.current);
    const currentSection = getSection(pathname);
    const isFirstLoad = lastPathRef.current === pathname && showLoader;
    const isSectionChange = lastSection !== currentSection;

    // Show loader for first load or section change
    if (isFirstLoad || isSectionChange) {
      setShowLoader(true);
      const duration = isFirstLoad ? 1500 : 1000;
      
      timerRef.current = setTimeout(() => {
        setShowLoader(false);
      }, duration);
    }

    lastPathRef.current = pathname;

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [pathname]);

  // Fallback: hide loader after 2 seconds no matter what
  useEffect(() => {
    const fallback = setTimeout(() => {
      setShowLoader(false);
    }, 2000);
    
    return () => clearTimeout(fallback);
  }, [pathname]);

  if (showLoader) {
    return <LoadingScreen />;
  }

  return <>{children}</>;
}
