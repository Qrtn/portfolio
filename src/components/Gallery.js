import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Masonry from 'react-masonry-css'
import styled from 'styled-components/macro'

const GUTTER = 10

const StyledMasonry = styled(Masonry)`
  display: flex;
  margin-left: -30px;
  width: auto;
  margin-left: 30px;

  > div {
    // Masonry columns
    padding-left: ${GUTTER}px;
  }
`

const GalleryItem = styled.a`
  display: block;
  margin-bottom: ${GUTTER}px;
`

const Gallery = ({ images }) => (
  <StyledMasonry breakpointCols={3}>
    {images.map(({ id, gatsbyImageData }) => (
      <GalleryItem key={id} href={gatsbyImageData.images.fallback.src}>
        <GatsbyImage key={id} image={gatsbyImageData} alt={id} />
      </GalleryItem>
    ))}
  </StyledMasonry>
)

export default Gallery
