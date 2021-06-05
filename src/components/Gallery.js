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
  ${({ onClick }) => onClick && 'cursor: pointer;'}
  display: block;
  margin-bottom: var(--gutter);
`

const Gallery = ({ images, onImageClick }) => (
  <StyledMasonry breakpointCols={BREAKPOINT_COLS}>
    {images.map((gatsbyImageData, index) => (
      <GalleryItem
        key={gatsbyImageData.images.fallback.src}
        onClick={onImageClick && (() => onImageClick(index))}
      >
        <GatsbyImage image={gatsbyImageData} alt="" />
      </GalleryItem>
    ))}
  </StyledMasonry>
)

export default Gallery
