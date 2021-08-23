import 'water.css/out/water.css'

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
      <p>I study CS at UIUC!</p>
      <p>
        I'm also a tech lead at{' '}
        <a href="https://uiuc.hack4impact.org/">Hack4Impact</a>. We build
        open-source software for non-profits. Most recently, I've been working
        with a team on{' '}
        <a href="https://falling-fruit.vercel.app/">Falling Fruit</a>
        <FallingFruit />, a collaborative foraging map with food around the
        world.
      </p>
      <p>
        Previously, I've interned at IMC Trading, Citadel and Citadel
        Securities, and The Tuesday Company.
      </p>
      <p>
        My hobbies include <Link to="/photos">photography</Link>,{' '}
        <Link to="/photos/pizza">making pizza</Link>, and tennis.
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
