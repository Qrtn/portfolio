import { graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { Helmet } from 'react-helmet'
import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components/macro'

const GUTTER = 10
const COLUMNS = 3

const GlobalStyle = createGlobalStyle`
  body {
    max-width: 1400px !important;
  }
`

const Layout = styled.div`
  display: flex;

  nav {
    width: 30%;
  }

  main {
    flex: 1;
  }
`

const Gallery = styled.div.attrs({
  'data-masonry': JSON.stringify({
    itemSelector: '.grid-item',
    gutter: GUTTER,
  }),
  className: 'grid',
})`
  .grid-item {
    margin-bottom: ${GUTTER}px;
    width: calc((100% - ${(COLUMNS - 1) * GUTTER}px) / ${COLUMNS});
  }
`

const MyPage = ({ data }) => {
  const images = data.allFile.nodes.map((node) => [
    node.childImageSharp.id,
    node.childImageSharp.gatsbyImageData,
  ])

  return (
    <>
      <Helmet>
        <title>Photos | Jeffrey Tang</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
        />
        <script src="//unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
      </Helmet>
      <Layout>
        <nav>
          <h1>Photography</h1>
          <ul>
            <li>
              <Link to="/photos/grad">Graduation Photos @ UIUC</Link>
            </li>
          </ul>
        </nav>

        <main>
          <GlobalStyle />
          <Gallery>
            {images.map(([id, image]) => (
              <div key={id} className="grid-item">
                <a href={image.images.fallback.src}>
                  <GatsbyImage key={id} image={image} alt={id} />
                </a>
              </div>
            ))}
          </Gallery>
        </main>
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query ImagesForGallery {
    allFile(filter: { sourceInstanceName: { eq: "photos" } }) {
      nodes {
        childImageSharp {
          id
          gatsbyImageData(
            width: 1000
            placeholder: BLURRED
            formats: [AUTO, WEBP]
          )
        }
      }
    }
  }
`

export default MyPage
