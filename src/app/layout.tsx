// src/app/layout.tsx
import './globals.css'

import type { ReactNode } from 'react'
import { Inter } from 'next/font/google'

import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import Navigation from '@/components/layout/Navigation/Navigation'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'coderscott',
  description: 'All things weird & wonderful!',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`theme-green ${inter.variable} font-sans bg-site-bg`}>
      <body className="text-typography-body font-sans antialiased">
        <div className="min-h-screen flex flex-col">
          <Header />
          <div className="relative max-w-[1440px] mx-auto">
            <main className="w-[1440px] mx-auto flex-grow px-4 sm:px-6 lg:px-8">{children}</main>
            <Navigation />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}
