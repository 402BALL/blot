'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import Footer from './Footer';
import ContentFrame from './ContentFrame';
import LoadingProvider from './LoadingProvider';

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAppPage = pathname === '/app' || pathname.startsWith('/app/');

  // App page has its own layout
  if (isAppPage) {
    return <>{children}</>;
  }

  // Regular pages with Header/Footer
  return (
    <LoadingProvider>
      <Header />
      <ContentFrame />
      <main style={{ minHeight: '100vh', paddingTop: '56px', paddingBottom: '70px' }}>
        {children}
      </main>
      <Footer />
    </LoadingProvider>
  );
}

