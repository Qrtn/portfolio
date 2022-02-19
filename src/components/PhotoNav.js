import React from 'react'
import styled from 'styled-components/macro'

import { MOBILE } from './breakpoints'

const { Link, useStaticQuery, graphql } = require('gatsby')

const AlbumLinks = styled.ul`
  list-style-type: none;
  padding: 0;

  li {
    margin-bottom: 10px;

    .active {
      font-weight: bold;
      text-decoration: none;
    }

    @media ${MOBILE} {
      display: inline-block;
      margin-right: 20px;
      height: 1.5em;
    }
  }
`

const PhotoNav = ({ currentAlbumDirectory }) => {
  const data = useStaticQuery(graphql`
    query Albums {
      allAlbumsJson {
        nodes {
          name
          directory
          hidden
        }
      }
    }
  `)

  return (
    <nav>
      <Link to="/">Home</Link>
      <h2>Photography</h2>
      <AlbumLinks>
        {data.allAlbumsJson.nodes.map(({ name, directory, hidden }) => ((!hidden || directory === currentAlbumDirectory) && (
          <li key={name}>
            <Link
              to={`/photos/${directory}`}
              activeClassName="active"
              partiallyActive
            >
              {name}
            </Link>
          </li>
        )))}
      </AlbumLinks>
    </nav>
  )
}
export default PhotoNav
