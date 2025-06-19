import styled from 'styled-components'
import { media } from '@/styles/media'

const Footer = () => {
  return (
    <FooterContainer className="text-xs md:text-lg font-sans text-typography-header text-center py-6 border-t-2 border-brand-secondary w-full">
      <p>&copy; {new Date().getFullYear()} coderscott</p>
      <p>Built with Next.js & Coffee 🍵</p>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.footer`
  font-size: 0.75rem;
  font-family: var(--font-sans);
  color: var(--color-typography-header);
  text-align: center;
  padding: 0.5rem 0;

  border-top: 2px solid var(--color-brand-secondary);

  ${media.md} {
    font-size: 1rem;
  }
`
