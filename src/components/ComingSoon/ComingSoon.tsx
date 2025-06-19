'use client'

import styled from 'styled-components'

export default function ComingSoon({ title = '🚧 Coming Soon 🚧' }) {
  return (
    <SectionContainer>
      <h1 className="text-4xl sm:text-5xl font-bold text-color-typography-header mb-4">{title}</h1>
      <p className="text-lg sm:text-xl text-color-typography-body max-w-prose">
        Coderscott isn’t live yet — because I’m actually building it, not bribing ChatGPT to
        scaffold my personality.
      </p>
      <p>
        Right now, it’s just me, a dark room, and a brutal obsession with spacing, themes, and
        component architecture.
      </p>
      <p>When this site does go live? It’ll hit harder than an API outage on a Friday at 4:59PM</p>
      <p>
        So yeah — check back soon. Or don’t. Either way, I’ll still be here, writing code that
        slaps.
      </p>
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
