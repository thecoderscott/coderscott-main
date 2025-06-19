import styled from 'styled-components'

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
  font-size: 1rem;
  font-family: var(--font-sans);
  color: var(--color-typography-header);
  text-align: center;
  padding: 1rem 0;

  border-top: 2px solid var(--color-brand-secondary);
`
