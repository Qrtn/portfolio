import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import Masonry from 'react-masonry-component'
import styled from 'styled-components/macro'

const GUTTER = 10
const COLUMNS = 3

const MASONRY_OPTIONS = {
  itemSelector: 'a',
  gutter: GUTTER,
}

const GalleryItem = styled.a`
  margin-bottom: ${GUTTER}px;
  width: calc((100% - ${(COLUMNS - 1) * GUTTER}px) / ${COLUMNS});
`

const Gallery = ({ images }) => (
  <Masonry options={MASONRY_OPTIONS}>
    {images.map(({ id, gatsbyImageData }) => (
      <GalleryItem key={id} href={gatsbyImageData.images.fallback.src}>
        <GatsbyImage key={id} image={gatsbyImageData} alt={id} />
      </GalleryItem>
    ))}
  </Masonry>
)

export default Gallery
