import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderText>
      &lt;coder<SecondaryText>scott</SecondaryText> /&gt;
    </HeaderText>
  )
}

export default Header

const HeaderText = styled.h1`
  position: sticky;
  top: 0;
  z-index: 9999;

  font-size: 1.5rem;
  font-family: var(--font-mono), 'ui-monospace';
  text-align: center;
  color: var(--color-typography-header);

  background-color: rgba(0, 0, 0, 0.4); /* semi-transparent */
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px); /* for Safari */

  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0;

  border-bottom: 2px solid var(--color-brand-secondary);
`

const SecondaryText = styled.span`
  color: var(--color-brand-secondary);
`
