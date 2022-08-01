import React from 'react'

import { graphql, PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Layout from '../../layouts'

export default ({ data }: PageProps<Queries.Query>) => {
  const creation = data.contentfulCreation
  return (
    <Layout>
      <div
        style={{
          display: `flex`,
          justifyContent: `center`,
        }}
      >
        {creation?.image?.gatsbyImageData && (
          <GatsbyImage
            style={{ marginBottom: `1rem` }}
            alt=""
            image={creation.image.gatsbyImageData as any}
          />
        )}
      </div>
      <h1 style={{ marginBottom: `1rem` }}>{creation?.title}</h1>
      <div
        style={{ flex: 1 }}
        dangerouslySetInnerHTML={{
          __html: creation?.description?.childMarkdownRemark?.html ?? '',
        }}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($title: String!) {
    contentfulCreation(title: { eq: $title }) {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      linkToShop
      image {
        gatsbyImageData(width: 200)
      }
    }
  }
`
