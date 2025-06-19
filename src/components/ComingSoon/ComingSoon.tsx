'use client'

import Image from 'next/image'
import styled from 'styled-components'

import { media } from '@/styles/media'
import Title from '@/components/ui/Typography/Title'

import avatar from '@/images/avatar.png'

export default function ComingSoon({ title = '🚧 Coming Soon 🚧' }) {
  return (
    <SectionContainer>
      <StyledImage src={avatar} alt="avatar" />
      <Title>{title}</Title>
      <p className="text-lg sm:text-xl text-color-typography-body max-w-prose">
        Coderscott isn’t live yet — because I’m actually building it, not bribing ChatGPT to
        scaffold my personality.
      </p>
      <p>
        Right now, it’s just me, a dark room, and a brutal obsession with spacing, themes, and
        component architecture.
      </p>
      <p>When this site does go live? It’ll hit harder than an API outage on a Friday at 4:59PM.</p>
    </SectionContainer>
  )
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`

const StyledImage = styled(Image)`
  width: 12rem;
  height: auto;
  border-radius: 50%;
  border: 2px solid var(--color-brand-secondary);

  ${media.md} {
    width: 16rem;
  }
`
