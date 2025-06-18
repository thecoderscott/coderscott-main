import type { ReactNode } from 'react'
import Layout from '@/components/layout/Layout'

export default function RootLayout({ children }: { children: ReactNode }) {
  return <Layout>{children}</Layout>
}
