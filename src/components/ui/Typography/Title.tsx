import styled from 'styled-components'
import { WithChildren } from '@/types/common'

interface TitleProps extends WithChildren {}

const Title = ({ children }: TitleProps) => <TitleText>{children}</TitleText>

export default Title

const TitleText = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: var(--color-typography-header);
  margin-bottom: 1rem;
`
