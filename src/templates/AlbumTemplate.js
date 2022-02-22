import 'water.css/out/water.css'

import { graphql } from 'gatsby'
import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components/macro'

import { DESKTOP } from '../components/breakpoints'
import Lightbox from '../components/Lightbox'
import PhotoNav from '../components/PhotoNav'
import SectionedGallery from '../components/SectionedGallery'
import SEO from '../components/seo'
import { makeAlbumSections } from './albumUtils'

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

    h3 {
      /* Style section names as h2 on desktop */
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
    }
  }
`

const AlbumTemplate = ({ data, pageContext }) => {
  const [index, setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const { name: albumName, sections } = data.albumsJson
  const albumDirectory = pageContext.directory

  const { albumSections, lightboxImages } = makeAlbumSections(data.allFile.nodes, sections)

  return (
    <>
      <SEO title={albumName} />
      <BodyStyle />
      <Layout>
        <PhotoNav currentAlbumDirectory={albumDirectory} />
        <SectionedGallery
          sections={albumSections}
          onImageClick={(sectionIndex, imageIndex) => {
            const index = albumSections[sectionIndex].startIndex + imageIndex
            setIndex(index)
            setIsOpen(true)
          }}
        />
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

export const query = graphql`
  query ImagesForGallery($directory: String!, $directoryRegex: String!) {
    albumsJson(directory: { eq: $directory }) {
      name
      sections {
        name
        directory
      }
    }

    allFile(
      filter: {
        sourceInstanceName: { eq: "photos" }
        relativeDirectory: { regex: $directoryRegex }
      }
      sort: { fields: name }
    ) {
      nodes {
        relativeDirectory
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

export default AlbumTemplate
