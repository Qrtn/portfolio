const DEFAULT_SECTIONS = [{ name: null, directory: undefined }]

const separateImages = (imageNodes) => {
  const imagesByDir = {}

  for (const imageNode of imageNodes) {
    const { relativeDirectory, childImageSharp } = imageNode
    const [_rootDir, sectionDir] = relativeDirectory.split('/')

    if (!imagesByDir[sectionDir]) {
      imagesByDir[sectionDir] = []
    }
    imagesByDir[sectionDir].push(childImageSharp)
  }

  return imagesByDir
}

export const makeAlbumSections = (imageNodes, sections) => {
  sections = sections ?? DEFAULT_SECTIONS

  const imagesByDir = separateImages(imageNodes)

  const lightboxImages = []
  const albumSections = []

  sections.forEach(({ name, directory }) => {
    if (!imagesByDir[directory]) {
      throw `section "${name}" has no associated directory "${directory}"`
    }

    const thumbImages = imagesByDir[directory].map((image) => image.thumb)
    const fullImages = imagesByDir[directory].map((image) => image.full)

    albumSections.push({
      name,
      images: thumbImages,
      startIndex: lightboxImages.length,
    })
    lightboxImages.push(...fullImages)
  })

  return { albumSections, lightboxImages }
}
