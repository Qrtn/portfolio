import React from 'react'
import styled from 'styled-components/macro'

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
  }
`

const PhotoNav = () => {
  const data = useStaticQuery(graphql`
    query Albums {
      allAlbumsJson {
        nodes {
          name
          directory
        }
      }
    }
  `)

  return (
    <nav>
      <Link to="/">Back to home</Link>
      <h1>Photography</h1>
      <AlbumLinks>
        {data.allAlbumsJson.nodes.map(({ name, directory }) => (
          <li key={name}>
            <Link to={`/photos/${directory}`} activeClassName="active">
              {name}
            </Link>
          </li>
        ))}
      </AlbumLinks>
    </nav>
  )
}
export default PhotoNav
