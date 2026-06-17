import { ImageResponse } from 'next/og'

// Site-wide Open Graph / Twitter card image, generated statically at build time.
export const alt = 'Inioluwa Alake — Software & AI Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage:
            'radial-gradient(circle at 25% 25%, rgba(20,184,166,0.18), transparent 45%), radial-gradient(circle at 80% 80%, rgba(20,184,166,0.10), transparent 40%)',
          padding: '80px',
          color: '#fafafa',
          fontFamily: 'sans-serif',
        }}
      >
        {/* monogram badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 96,
            height: 96,
            borderRadius: 24,
            backgroundColor: '#14b8a6',
            color: '#04110f',
            fontSize: 48,
            fontWeight: 700,
            marginBottom: 40,
          }}
        >
          IA
        </div>

        <div style={{ display: 'flex', fontSize: 68, fontWeight: 700, lineHeight: 1.1 }}>
          Inioluwa Alake
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 38,
            fontWeight: 600,
            color: '#2dd4bf',
            marginTop: 12,
          }}
        >
          Software &amp; AI Engineer
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            color: '#a3a3a3',
            marginTop: 28,
            maxWidth: 900,
          }}
        >
          APIs, secure data systems, and high-availability infrastructure.
        </div>
      </div>
    ),
    { ...size }
  )
}
