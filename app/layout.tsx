import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'
import { Toaster } from 'sonner'

export const metadata: Metadata = {
  title: 'AI TG Bot Store - Создайте магазин в Telegram с ИИ',
  description: 'Создавайте интернет-магазины в Telegram с помощью искусственного интеллекта. Автоматизация продаж, AI-консультант, прием платежей.',
  generator: 'v0.dev',
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
