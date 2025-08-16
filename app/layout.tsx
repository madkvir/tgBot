import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'AI TG Bot Store - Створіть магазин у Telegram з ШІ',
  description: 'Створюйте інтернет-магазини у Telegram за допомогою штучного інтелекту. Автоматизація продажів, AI-консультант, прийом платежів.',
  generator: 'v0.dev',
  keywords: ['AI', 'Telegram', 'магазин', 'бот', 'автоматизація', 'продажі', 'ШІ'],
  authors: [{ name: 'Maksym', url: 'https://t.me/cgg5577' }],
  creator: 'AI TG Bot Store',
  publisher: 'AI TG Bot Store',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aitgbot.store'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'uk_UA',
    url: 'https://aitgbot.store',
    siteName: 'AI TG Bot Store',
    title: 'AI TG Bot Store - Створіть магазин у Telegram з ШІ',
    description: 'Створюйте інтернет-магазини у Telegram за допомогою штучного інтелекту. Автоматизація продажів, AI-консультант, прийом платежів.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'AI TG Bot Store - Створіть магазин у Telegram з ШІ',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI TG Bot Store - Створіть магазин у Telegram з ШІ',
    description: 'Створюйте інтернет-магазини у Telegram за допомогою штучного інтелекту. Автоматизація продажів, AI-консультант, прийом платежів.',
    images: ['/api/og'],
    creator: '@cgg5577',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Замените на ваш код
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <Toaster richColors position="top-center" theme="system" closeButton />
      </body>
    </html>
  )
}
