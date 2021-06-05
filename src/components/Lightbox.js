import '@reach/dialog/styles.css'

import { DialogContent, DialogOverlay } from '@reach/dialog'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components/macro'

const StyledDialogContent = styled(DialogContent)`
  margin: 0;
  padding: 0;
  background: var(--background-body);
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  padding: 40px;
`

const Image = styled(GatsbyImage).attrs({
  objectFit: 'contain',
})`
  width: 100%;
  height: 100%;
`

const Lightbox = ({ images, index, onChange, isOpen, onDismiss }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      onChange((index + 1) % images.length)
    } else if (event.key === 'ArrowLeft') {
      onChange((index - 1) % images.length)
    }
  }

  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      onKeyDown={handleKeyDown}
    >
      <StyledDialogContent aria-label="Lightbox" onClick={onDismiss}>
        <Image
          image={images[index]}
          alt=""
          onClick={(event) => {
            onChange((index + 1) % images.length)
            event.stopPropagation()
          }}
        />
      </StyledDialogContent>
    </DialogOverlay>
  )
}

export default Lightbox
