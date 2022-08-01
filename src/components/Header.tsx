import { css } from '@emotion/react'
import styled from '@emotion/styled'
import React, { ReactElement } from 'react'
import { Link } from 'gatsby'

import _HeaderTitle from './HeaderTitle'
import _Menu from './Menu'

const Header = styled.header`
  text-align: center;
`

const Content = styled.div`
  padding: 0.5rem;
`

const HeaderTitle = styled(_HeaderTitle)`
  margin: 4rem 0rem 2rem;
`

const Menu = styled(_Menu)`
  margin: 1rem auto;
`

const floatingContentStyle = css`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 2;
`

interface Props {
  children?: ReactElement | ReactElement[]
  floatingContent?: boolean
}

export default ({ children, floatingContent }: Props) => (
  <Header>
    <Content css={floatingContent && floatingContentStyle}>
      <HeaderTitle />
      <Menu />
    </Content>
    {children}
  </Header>
)
