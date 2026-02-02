import RotatingText from '@/components/RotatingText';

export default function Home() {
  return (
    <div style={{ 
      minHeight: 'calc(100vh - 126px)', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
    }}>
      {/* Background Video */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '100px', /* Start after the vertical line */
        right: 0,
        bottom: 0,
        overflow: 'hidden',
        zIndex: 0
      }}>
        <video 
          autoPlay
          loop
          muted
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            opacity: 0.15, /* Subtle background */
          }}
        >
          <source src="/background.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div style={{ 
        width: '100%', 
        paddingLeft: '140px', 
        paddingRight: '24px',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 style={{ 
          fontSize: 'clamp(3rem, 10vw, 7rem)', 
          fontWeight: 400, 
          letterSpacing: '-0.03em', 
          lineHeight: 1.05
        }}>
          <span style={{ display: 'block' }}>
            The <RotatingText /> bots
          </span>
          <span style={{ display: 'block' }}>should be</span>
          <span style={{ display: 'block', paddingLeft: '80px' }}>unstoppable</span>
        </h1>
      </div>
    </div>
  );
}
