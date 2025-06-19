'use client'

import '@/styles/globals.css'
import styled from 'styled-components'

import { GlobalStyleWrapper } from '@/components/GlobalStyleWrapper/GlobalStyleWrapper'
import Header from '@/components/layout/Header/Header'
import Navigation from '@/components/layout/Navigation/Navigation'
import Footer from '@/components/layout/Footer/Footer'
import { WithChildren } from '@/types/common'

type LayoutProps = WithChildren

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <body data-theme="green">
        <GlobalStyleWrapper>
          <ContentWrapper>
            <Header />
            <ChildrenWrapper>
              <MainContainer>{children}</MainContainer>
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
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const ChildrenWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  position: relative;
`

const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;
`
