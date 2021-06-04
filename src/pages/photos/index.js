import { Redirect } from '@reach/router'
import { graphql } from 'gatsby'
import React from 'react'

const PhotosIndex = ({ data }) => (
  <Redirect noThrow to={`/photos/${data.albumsJson.directory}`} />
)

export default PhotosIndex

export const pageQuery = graphql`
  query FirstAlbum {
    albumsJson {
      directory
    }
  }
`
