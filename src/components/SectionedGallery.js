import React from 'react'

import Gallery from './Gallery'

const SectionedGallery = ({ sections, onImageClick }) => (
    <main>
      {sections.map(({ name, images }, sectionIndex) => <>
        {name && <h3>{name}</h3>}
        <Gallery
          images={images}
          onImageClick={(imageIndex) => onImageClick(sectionIndex, imageIndex)}
        />
      </>)}
    </main>
  )

export default SectionedGallery
