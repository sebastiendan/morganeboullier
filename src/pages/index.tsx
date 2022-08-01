import React from 'react'

import { graphql, PageProps } from 'gatsby'

import HomeSection from '../components/HomeSection'
import HomeHeader from '../components/HomeHeader'
import Layout from '../layouts'

export default ({
  data,
}: PageProps<{
  header: Queries.ContentfulAsset
  flowers: Queries.ContentfulCreation
  nature: Queries.ContentfulCreation
}>) => {
  const { flowers, header, nature } = data

  return (
    <Layout
      floatingHeader
      headerChildren={header && <HomeHeader asset={header} />}
    >
      <>
        {flowers && (
          <HomeSection
            actionPosition="right"
            asset={flowers.image}
            description={flowers.description}
            buttonHref="/creations"
            buttonLabel="See all my creations"
            title={flowers.title ?? ''}
          />
        )}
      </>
      <>
        {nature && (
          <HomeSection
            actionPosition="left"
            asset={nature.image}
            description={nature.description}
            buttonHref="/shop"
            buttonLabel="Shop more"
            title={`${nature.title} - $${nature.price}`}
          />
        )}
      </>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    header: contentfulAsset(title: { eq: "Home Header" }) {
      gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 2000)
    }
    flowers: contentfulCreation(title: { eq: "Flowers" }) {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
    }
    nature: contentfulCreation(title: { eq: "Nature" }) {
      title
      description {
        childMarkdownRemark {
          html
        }
      }
      image {
        gatsbyImageData(layout: CONSTRAINED, width: 600)
      }
      price
    }
  }
`
