import 'water.css/out/water.css'

import { graphql } from 'gatsby'
import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components/macro'

import { DESKTOP } from '../../components/breakpoints'
import Gallery from '../../components/Gallery'
import Lightbox from '../../components/Lightbox'
import PhotoNav from '../../components/PhotoNav'
import SEO from '../../components/seo'

const BodyStyle = createGlobalStyle`
  body {
    max-width: none;
    margin: 0;
    padding: 0;
  }
`

const Layout = styled.div`
  margin: 20px;

  @media ${DESKTOP} {
    margin: 30px;
    position: relative;

    nav {
      position: fixed;
      width: 250px;
    }

    main {
      position: absolute;
      left: 275px;
      overflow: auto;
    }
  }
`

const PhotoPage = ({ data }) => {
  const galleryImages = data.allFile.nodes.map(
    (node) => node.childImageSharp.thumb,
  )
  const lightboxImages = data.allFile.nodes.map(
    (node) => node.childImageSharp.full,
  )

  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <SEO title="Photos" />
      <BodyStyle />
      <Layout>
        <PhotoNav />
        <main>
          <Gallery
            images={galleryImages}
            onImageClick={(index) => {
              setIndex(index)
              setIsOpen(true)
            }}
          />
        </main>
      </Layout>
      <Lightbox
        images={lightboxImages}
        index={index}
        onChange={setIndex}
        isOpen={isOpen}
        onDismiss={() => setIsOpen(false)}
      />
    </>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery($directory: String!) {
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
          thumb: gatsbyImageData(
            width: 1000
            outputPixelDensities: [0.4, 0.6, 0.8, 1]
            sizes: "(max-width: 500px) 95vw, (max-width: 800px) 45vw, (max-width: 1800px) 30vw, 25vw"
          )
          full: gatsbyImageData(width: 2000)
        }
      }
    }
  }
`

export default PhotoPage
