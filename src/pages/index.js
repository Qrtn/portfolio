import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { Helmet } from 'react-helmet'
import styled from 'styled-components'

import FallingFruitLogo from '../images/falling_fruit_logo.png'

const Links = styled.div`
  a {
    margin-right: 20px;

    &::before {
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
    <Helmet>
      <title>Jeffrey Tang</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/water.css@2/out/water.css"
      />
    </Helmet>
    <header>
      <StaticImage
        src="../images/jeffrey_hk_cow_cropped.jpg"
        alt="Jeffrey in Lantau Island, HK"
        title="On Lantau Island in Hong Kong, cows roam free among the tourists."
        width={450}
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
        This summer I'll be a quant trader intern at IMC Trading. Previously, I
        was at Citadel, Citadel Securities, and The Tuesday Company.
      </p>
      <p>My hobbies include photography, making pizza, and tennis.</p>
      {/*
      <p>
        <strong>
          <a href="some link">My photography.</a>
        </strong>
      </p>
      */}
      {/* 
      <p>
        I study CS at <a href="https://illinois.edu/">UIUC</a>. I'm also a Tech
        Lead at <a href="https://uiuc.hack4impact.org/">Hack4Impact</a>.
      </p>
      <p>
        This summer I'll be a quant trader intern at{' '}
        <a href="https://www.imc.com/">IMC Trading</a>.
      </p>
      <p>
        Previously at <a href="https://www.citadel.com/">Citadel</a> and{' '}
        <a href="https://www.citadelsecurities.com/">Citadel Securities</a>, and{' '}
        <a href="https://www.tuesdaycompany.com/">The Tuesday Company</a>.
      </p>
      */}
    </main>
    <footer>
      <Links>
        <a href="/Jeffrey_Tang_Resume.pdf">Resume</a>
        <a href="https://github.com/Qrtn">GitHub</a>
        <a href="https://www.linkedin.com/in/jeffrey-tang/">LinkedIn</a>
        <a href="mailto:jt@jeffreytang.org">Email</a>
      </Links>
    </footer>
  </>
)

export default IndexPage
