'use client'

import '@/styles/globals.css'
import styled from 'styled-components'
import { media } from '@/styles/media'

import { GlobalStyleWrapper } from '@/components/GlobalStyleWrapper/GlobalStyleWrapper'
import Header from '@/components/layout/Header/Header'
import Navigation from '@/components/layout/Navigation/Navigation'
import Footer from '@/components/layout/Footer/Footer'
import { Inter } from 'next/font/google'
import { WithChildren } from '@/types/common'

type LayoutProps = WithChildren

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en" className={`theme-green ${inter.variable} font-sans bg-site-bg`}>
      <body data-theme="green">
        <GlobalStyleWrapper>
          <ContentWrapper>
            <Header />
            <ChildrenWrapper>
              <MainContainer className="w-[1440px] mx-auto flex-grow px-4 sm:px-6 lg:px-8">
                {children}
              </MainContainer>
              <Navigation />
            </ChildrenWrapper>
            <Footer />
          </ContentWrapper>
        </GlobalStyleWrapper>
      </body>
    </html>
  )
}

export default Layout

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const ChildrenWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;

  position: relative;
`

const MainContainer = styled.div`
  width: 1440px;
  margin: 0 auto;

  flex-grow: 1;
  padding-left: 16px;
  padding-right: 16px;

  ${media.sm} {
    padding-left: 20px;
    padding-right: 20px;
  }

  ${media.lg} {
    padding-left: 32px;
    padding-right: 32px;
  }
`
