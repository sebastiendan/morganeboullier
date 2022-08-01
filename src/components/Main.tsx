import styled from '@emotion/styled'
import React, { ReactElement } from 'react'

const Main = styled.main`
  margin: 0 auto;
  margin-bottom: 1.5rem;
  max-width: 1200;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
`

interface Props {
  children: ReactElement | ReactElement[]
}

export default ({ children }: Props) => <Main>{children}</Main>
