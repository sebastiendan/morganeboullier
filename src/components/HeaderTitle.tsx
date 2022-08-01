import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'

const Root = styled(Link)`
  display: block;
  text-decoration: none;
`

const Title = styled.h4`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 0;
`

interface Props {
  className?: string
}

export default ({ className }: Props) => (
  <Root className={className} to="/">
    <Title>Morgane Boullier</Title>
  </Root>
)
