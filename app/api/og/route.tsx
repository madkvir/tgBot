import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '40px',
          position: 'relative',
        }}
      >
        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '20%',
            left: '10%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: '20px',
            }}
          >
            <div
              style={{
                width: '50px',
                height: '50px',
                background: 'white',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#3b82f6',
              }}
            >
              🤖
            </div>
          </div>
          <div
            style={{
              fontSize: '48px',
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            AI TG Bot Store
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: '64px',
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
            marginBottom: '20px',
            maxWidth: '800px',
            lineHeight: '1.2',
          }}
        >
          Створи інтернет-магазин у Telegram з AI-Агентом
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '32px',
            color: 'rgba(255,255,255,0.9)',
            textAlign: 'center',
            marginBottom: '40px',
            maxWidth: '700px',
          }}
        >
          Продавайте товари та послуги автоматично за допомогою ШІ
        </div>

        {/* Features */}
        <div
          style={{
            display: 'flex',
            gap: '40px',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              fontSize: '24px',
            }}
          >
            <span style={{ marginRight: '10px' }}>⚡</span>
            За 5 хвилин
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              fontSize: '24px',
            }}
          >
            <span style={{ marginRight: '10px' }}>🤖</span>
            AI-консультант
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              color: 'white',
              fontSize: '24px',
            }}
          >
            <span style={{ marginRight: '10px' }}>📱</span>
            В Telegram
          </div>
        </div>

        {/* CTA */}
        <div
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
            color: 'white',
            padding: '20px 40px',
            borderRadius: '50px',
            fontSize: '28px',
            fontWeight: 'bold',
            boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
          }}
        >
          🚀 Ранній доступ
        </div>

        {/* Bottom text */}
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            fontSize: '20px',
            color: 'rgba(255,255,255,0.7)',
          }}
        >
          aitgbot.store
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
