import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

interface Props {
  asset: Queries.ContentfulAsset
}

export default ({ asset }: Props) => (
  <GatsbyImage
    style={{ margin: 0 }}
    alt=""
    image={asset.gatsbyImageData as any}
  />
)
