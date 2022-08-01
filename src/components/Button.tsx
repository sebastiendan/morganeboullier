import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React, { ReactElement } from 'react'

const Root = styled(Link)`
  background-color: black;
  color: white;
  opacity: 0.7;
  padding: 0.6rem;
  transition: opacity 0.4s ease;

  &:hover {
    opacity: 1;
  }
`

interface Props {
  clickCallback?: () => void
  href?: string
  label: string
}

export default ({ clickCallback = () => {}, href = '', label = '' }: Props) => (
  <Root to={href} onClick={clickCallback}>
    {label}
  </Root>
)
