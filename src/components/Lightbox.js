import '@reach/dialog/styles.css'

import { DialogContent, DialogOverlay } from '@reach/dialog'
import Rect from '@reach/rect'
import { GatsbyImage } from 'gatsby-plugin-image'
import { contain } from 'intrinsic-scale'
import React from 'react'
import styled from 'styled-components/macro'

const DIALOG_PADDING = 40
const CAPTION_HEIGHT = 35

const getImageSize = (parentRect, childRect) => {
  if (!parentRect || !childRect) {
    return null
  }

  const { width: parentWidth, height: parentHeight } = parentRect
  const { width: childWidth, height: childHeight } = childRect

  const { width, height } = contain(
    parentWidth - 2 * DIALOG_PADDING,
    parentHeight - 2 * DIALOG_PADDING - CAPTION_HEIGHT,
    childWidth,
    childHeight,
  )

  return {
    $imgWidth: Math.min(width, childWidth),
    $imgHeight: Math.min(height, childHeight),
  }
}

const StyledDialogContent = styled(DialogContent)`
  margin: 0;
  padding: 0;
  background: var(--background-body);
  width: 100%;
  height: 100%;

  box-sizing: border-box;
  padding: ${DIALOG_PADDING}px;

  display: grid;
  place-items: center;

  cursor: zoom-out;
`

const StyledFigure = styled.figure`
  cursor: default;

  figcaption {
    text-align: right;
    margin-top: 5px;
    font-size: smaller;
  }
`

const Image = styled(GatsbyImage)`
  &&& img {
    width: ${({ $imgWidth }) => $imgWidth}px;
    height: ${({ $imgHeight }) => $imgHeight}px;
  }
`

const CaptionedImage = ({ caption, onClick, ...props }) => (
  <StyledFigure onClick={onClick}>
    <Image {...props} />
    <figcaption>{caption}</figcaption>
  </StyledFigure>
)

const Lightbox = ({ images, index, onChange, isOpen, onDismiss }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowRight') {
      onChange(index < images.length - 1 ? index + 1 : 0)
    } else if (event.key === 'ArrowLeft') {
      onChange(index > 0 ? index - 1 : images.length - 1)
    }
  }

  return (
    <DialogOverlay
      isOpen={isOpen}
      onDismiss={onDismiss}
      onKeyDown={handleKeyDown}
    >
      <Rect>
        {({ rect, ref }) => (
          <StyledDialogContent
            aria-label="Lightbox"
            onClick={onDismiss}
            ref={ref}
          >
            <CaptionedImage
              image={images[index]}
              alt=""
              onClick={(event) => {
                onChange((index + 1) % images.length)
                event.stopPropagation()
              }}
              caption={`${index + 1} of ${images.length}`}
              {...getImageSize(rect, images[index])}
            />
          </StyledDialogContent>
        )}
      </Rect>
    </DialogOverlay>
  )
}

export default Lightbox
