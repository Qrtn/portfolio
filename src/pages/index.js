import 'water.css/out/light.css'

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

import { FontStyle } from '../components/Font'
import SEO from '../components/SEO'
// import FallingFruitLogo from '../images/falling_fruit_logo.png'

const Links = styled.ul`
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin-left: 0;
    margin-right: 20px;

    a::before {
      content: none !important;
    }
  }
`

/*
const FallingFruit = () => (
  <img
    height={20}
    width={20}
    src={FallingFruitLogo}
    alt="Falling Fruit logo"
    style={{ marginLeft: 2, verticalAlign: -3 }}
  />
)
*/

const IndexPage = () => (
  <>
    <FontStyle />
    <SEO title="Home" />
    <header>
      <StaticImage
        src="../../photos/me/010 hong kong.jpg"
        alt="Jeffrey in Sai Wan, HK"
        title="Many say it's the most Instagrammable spot in Hong Kong."
        width={700}
      />
      <h2>Jeffrey Tang</h2>
    </header>
    <main>
      <p>
        Currently building at <a href="https://golassie.com">Lassie</a> in San
        Francisco. We help independent doctors take control of their finances.{' '}
        <a href="https://jobs.ashbyhq.com/lassie/9b8258f2-996e-414d-b7c5-01109d227fb6">
          Come join us!
        </a>
      </p>
      <p>
        Previously worked in fintech and finance, studied computer science at
        UIUC, and built open-source software for non-profits.
      </p>
    </main>
    <footer>
      <Links>
        <li>
          <a href="/Jeffrey_Tang_Resume.pdf">Resume</a>
        </li>
        <li>
          <a href="https://github.com/Qrtn">GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jeffrey-tang/">LinkedIn</a>
        </li>
        <li>
          <a href="mailto:me@jeffreytang.com" title="Feel free to reach out!">
            Email
          </a>
        </li>
        <li>
          <Link to="/photos">
            <i>Photos</i>
          </Link>
        </li>
      </Links>
    </footer>
  </>
)

export default IndexPage
