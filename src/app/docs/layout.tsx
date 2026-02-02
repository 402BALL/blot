import DocsSidebar from '../../components/DocsSidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ 
      display: 'flex', 
      minHeight: 'calc(100vh - 140px)',
    }}>
      {/* Sidebar */}
      <div style={{ 
        width: '220px', 
        flexShrink: 0,
        padding: '40px 30px 40px 40px',
      }}>
        <DocsSidebar />
      </div>
      
      {/* Vertical divider line */}
      <div style={{
        width: '1px',
        background: '#000',
        flexShrink: 0,
      }} />
      
      {/* Main content */}
      <main style={{ 
        flex: 1, 
        maxWidth: '800px',
        padding: '40px',
        paddingLeft: '60px',
      }}>
        {children}
      </main>
    </div>
  );
}
