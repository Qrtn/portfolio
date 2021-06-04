import { GatsbyImage } from 'gatsby-plugin-image'
import Masonry from 'masonry-layout'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components/macro'

const GUTTER = 10
const COLUMNS = 3

const MASONRY_OPTIONS = {
  itemSelector: 'a',
  gutter: GUTTER,
}

const StyledGallery = styled.div`
  a {
    margin-bottom: ${GUTTER}px;
    width: calc((100% - ${(COLUMNS - 1) * GUTTER}px) / ${COLUMNS});
  }
`

const Gallery = ({ images }) => {
  const gridRef = useRef()

  useEffect(() => {
    new Masonry(gridRef.current, MASONRY_OPTIONS)
    console.log('new masonry')
  }, [])

  return (
    <StyledGallery ref={gridRef}>
      {images.map(({ id, gatsbyImageData }) => (
        <a key={id} href={gatsbyImageData.images.fallback.src}>
          <GatsbyImage key={id} image={gatsbyImageData} alt={id} />
        </a>
      ))}
    </StyledGallery>
  )
}

export default Gallery
