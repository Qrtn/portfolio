import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Masonry from 'react-masonry-css'
import styled from 'styled-components/macro'

import { MOBILE } from './breakpoints'

const BREAKPOINT_COLS = {
  default: 4,
  1800: 3,
  800: 2,
  500: 1,
}

const StyledMasonry = styled(Masonry)`
  display: flex;

  --gutter: 20px;
  @media ${MOBILE} {
    --gutter: 10px;
  }

  > div:not(:first-child) {
    // Masonry columns
    margin-left: var(--gutter);
  }
`

const GalleryItem = styled.a`
  display: block;
  margin-bottom: var(--gutter);
`

const Gallery = ({ images }) => (
  <StyledMasonry breakpointCols={BREAKPOINT_COLS}>
    {images.map(({ id, gatsbyImageData }) => (
      <GalleryItem key={id} href={gatsbyImageData.images.fallback.src}>
        <GatsbyImage key={id} image={gatsbyImageData} alt={id} />
      </GalleryItem>
    ))}
  </StyledMasonry>
)

export default Gallery
