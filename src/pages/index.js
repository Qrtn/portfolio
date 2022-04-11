import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'

import SEO from '../components/seo'
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
    <SEO title="Home" />
    <header>
      <StaticImage
        src="../images/jeffrey_hk_cow_cropped.jpg"
        alt="Jeffrey in Lantau Island, HK"
        title="On Lantau Island in Hong Kong, cows roam free among the tourists."
        width={400}
      />
      <h1>Jeffrey Tang</h1>
    </header>
    <main>
      <p>
        Currently in my final year studying CS at UIUC, and interning at{' '}
        <a href="https://ramp.com/">Ramp</a> as a software engineer.
      </p>
      <p>
        Previously, I was a tech lead at{' '}
        <a href="https://uiuc.hack4impact.org/">Hack4Impact</a>, where I built
        open-source software for non-profits. I worked with a team on{' '}
        <a href="https://falling-fruit.vercel.app/">Falling Fruit</a>
        <FallingFruit />, a collaborative foraging map with food around the
        world.
      </p>
      <p>
        In industry, I've also worked at{' '}
        <a href="https://www.imc.com">IMC Trading</a>,{' '}
        <a href="https://www.citadel.com/">Citadel</a> and{' '}
        <a href="https://www.citadelsecurities.com/">Citadel Securities</a>, and{' '}
        <a href="https://www.tuesdaycompany.com/">The Tuesday Company</a>.
      </p>
      <p>
        My hobbies include <Link to="/photos">photography</Link>,{' '}
        <Link to="/photos/pizza">
          making pizza{' '}
          <span role="img" aria-label="pizza emoji">
            🍕
          </span>
        </Link>
        , and tennis.
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
          <a href="mailto:jt@jeffreytang.org">Email</a>
        </li>
      </Links>
    </footer>
  </>
)

export default IndexPage
