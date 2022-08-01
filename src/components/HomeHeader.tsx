import styled from '@emotion/styled'
import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

const Img = styled(GatsbyImage)`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, 0.3);
  }
`

interface Props {
  asset: Queries.ContentfulAsset
}

export default ({ asset }: Props) => (
  <>
    {asset?.gatsbyImageData && (
      <Img loading="eager" alt="" image={asset.gatsbyImageData as any} />
    )}
  </>
)
