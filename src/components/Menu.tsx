import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
`

const MenuItem = styled(Link)`
  color: white;
  text-decoration: none;
`

interface Props {
  className?: string
}

export default ({ className }: Props) => (
  <Root className={className}>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/">About</MenuItem>
    <MenuItem to="/creations">Creations</MenuItem>
    <MenuItem to="/">Shop</MenuItem>
    <MenuItem to="/">Books</MenuItem>
    <MenuItem to="/">Contact</MenuItem>
  </Root>
)
