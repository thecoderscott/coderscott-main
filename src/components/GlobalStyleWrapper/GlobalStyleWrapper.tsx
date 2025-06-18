'use client'

import { GlobalStyle } from '@/styles/GlobalStyle'

export const GlobalStyleWrapper = ({ children }: { children: React.ReactNode }) => (
  <>
    <GlobalStyle />
    {children}
  </>
)
