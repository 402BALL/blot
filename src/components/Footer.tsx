export default function Footer() {
  return (
    <footer style={{ 
      position: 'fixed', 
      bottom: 0, 
      left: 0, 
      right: 0, 
      background: '#ffffff',
      height: '70px',
      zIndex: 50
    }}>
      <div style={{ 
        height: '100%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        gap: '2px',
        fontSize: '13px',
        color: '#71717a',
      }}>
        <p>CA: BRiGa9xAV9jFVChXkWWkMvSk5vrtALZgzBV7vXxzpump</p>
        <p>blot.cloud 2026</p>
      </div>
    </footer>
  );
}
