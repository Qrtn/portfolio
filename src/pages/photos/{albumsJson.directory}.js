import { graphql } from 'gatsby'
import React from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components/macro'

import Gallery from '../../components/Gallery'
import PhotoNav from '../../components/PhotoNav'
import SEO from '../../components/seo'

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1400px !important;
  }
`

const Layout = styled.div`
  display: flex;

  nav {
    width: 30%;
  }

  main {
    flex: 1;
  }
`

const PhotoPage = ({ data }) => {
  const images = data.allFile.nodes.map((node) => node.childImageSharp)

  return (
    <>
      <SEO title="Photos" />
      <GlobalStyle />
      <Layout>
        <PhotoNav />
        <main>
          <Gallery images={images} />
        </main>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery($id: String!, $directory: String!) {
    albumsJson(id: { eq: $id }) {
      name
    }

    allFile(
      filter: {
        sourceInstanceName: { eq: "photos" }
        relativeDirectory: { eq: $directory }
      }
      sort: { fields: name }
    ) {
      nodes {
        childImageSharp {
          id
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`

export default PhotoPage
