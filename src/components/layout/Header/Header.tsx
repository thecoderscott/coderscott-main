import styled from 'styled-components'

const Header = () => {
  return (
    <HeaderText className="text-2xl font-mono text-typography-header text-center py-8 border-b-2 border-brand-secondary w-full">
      &lt;coder<span className="color-brand-secondary">scott</span> /&gt;
    </HeaderText>
  )
}

export default Header

const HeaderText = styled.h1`
  font-size: 1.5rem;
  font-family: var(--font-mono), 'ui-monospace';
  text-align: center;
  color: var(--color-typography-header);

  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  margin: 0;

  border-bottom: 2px solid var(--color-brand-secondary);
`
