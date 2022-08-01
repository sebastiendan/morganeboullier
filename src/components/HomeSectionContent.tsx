import styled from '@emotion/styled'
import React from 'react'

import Button from './Button'

const Root = styled.div`
  padding: 10rem 0 1rem;
`

const SectionTitle = styled.h3``

const SectionText = styled.div``

interface Props {
  className?: string
  title: string
  description: any
  buttonHref: string
  buttonLabel: string
}

export default ({
  className,
  title,
  description,
  buttonHref,
  buttonLabel,
}: Props) => (
  <Root className={className}>
    <SectionTitle>{title}</SectionTitle>
    <SectionText
      dangerouslySetInnerHTML={{
        __html: description?.childMarkdownRemark?.html ?? '',
      }}
    />
    <Button href={buttonHref} label={buttonLabel} />
  </Root>
)
