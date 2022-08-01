import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

import HomeSectionAsset from './HomeSectionAsset'
import HomeSectionContent from './HomeSectionContent'

type ActionPosition = 'left' | 'right'

const Root = styled.div`
  display: flex;
`

const itemStyle = css`
  padding-top: 4rem;
  text-align: center;

  p {
    margin; none;
  }
`

const Content = styled(HomeSectionContent)``

const Left = styled.div<{ actionPosition: ActionPosition }>`
  ${itemStyle};
  flex-grow: ${(props) => (props.actionPosition === 'left' ? 1 : 1.5)};

  ${Content} {
    text-align: right;

    * {
      text-align: right;
    }
  }
`

const Right = styled.div<{ actionPosition: ActionPosition }>`
  ${itemStyle};
  flex-grow: ${(props) => (props.actionPosition === 'left' ? 1.5 : 1)};

  ${Content} {
    text-align: left;

    * {
      text-align: left;
    }
  }
`

interface Props {
  actionPosition: ActionPosition
  asset: Queries.Maybe<Queries.ContentfulAsset>
  buttonHref: string
  buttonLabel: string
  description: any
  title: string
}

export default ({
  actionPosition,
  asset,
  buttonHref,
  buttonLabel,
  description,
  title,
}: Props) => (
  <Root>
    {actionPosition === 'left' ? (
      <>
        <Left actionPosition={actionPosition}>
          <Content
            title={title}
            description={description}
            buttonHref={buttonHref}
            buttonLabel={buttonLabel}
          />
        </Left>
        <Right actionPosition={actionPosition}>
          <HomeSectionAsset asset={asset!} />
        </Right>
      </>
    ) : (
      <>
        <Left actionPosition={actionPosition}>
          <HomeSectionAsset asset={asset!} />
        </Left>
        <Right actionPosition={actionPosition}>
          <Content
            title={title}
            description={description}
            buttonHref={buttonHref}
            buttonLabel={buttonLabel}
          />
        </Right>
      </>
    )}
  </Root>
)
