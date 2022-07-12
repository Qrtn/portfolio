import 'water.css/out/light.css'

import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

import { FontStyle } from '../components/Font'
import SEO from '../components/SEO'
import FallingFruitLogo from '../images/falling_fruit_logo.png'

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

const FallingFruit = () => (
  <img
    height={20}
    width={20}
    src={FallingFruitLogo}
    alt="Falling Fruit logo"
    style={{ marginLeft: 2, verticalAlign: -3 }}
  />
)

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
        Living in San Francisco and working as a founding engineer at Lassie.
      </p>
      <p>
        Previously, I studied CS at UIUC. I was a tech lead at{' '}
        <a href="https://uiuc.hack4impact.org/">Hack4Impact</a>, where I built
        open-source software for non-profits. I worked with a team on{' '}
        <a href="https://falling-fruit.vercel.app/">Falling Fruit</a>
        <FallingFruit />, a collaborative foraging map with food around the
        world.
      </p>
      <p>
        In industry, I've also worked at <a href="https://ramp.com/">Ramp</a>,{' '}
        <a href="https://www.imc.com">IMC Trading</a>,{' '}
        <a href="https://www.citadel.com/">Citadel</a> and{' '}
        <a href="https://www.citadelsecurities.com/">Citadel Securities</a>, and{' '}
        <a href="https://www.tuesdaycompany.com/">The Tuesday Company</a>.
      </p>
      <p>
        My hobbies include <Link to="/photos">photography</Link> and{' '}
        <Link to="/photos/pizza">making pizza</Link>.
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
      </Links>
    </footer>
  </>
)

export default IndexPage
