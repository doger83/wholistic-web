import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

import "./layout.css"

const BizTech = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "bixby2.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      
      const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 500,
      cssEase: "linear"
    };
      return (
        <BackgroundImage Tag="section" className={className} fluid={imageData} backgroundColor={`transparent`} 
          style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`, 
          backgroundSize: `cover`, backgroundPosition: `top`}}>
            <div style={{ width: `100%`, height: `100%`, display: `flex`, justifyContent: `center`, alignItems: `center`, overflow:`auto`}}>
              <div style={{fontSize:`1.25rem`, color:`black`, backgroundColor: `rgba(255,255,255,.3)`, height: `100%`,
                padding:`1rem 1rem 1rem 1rem`, borderLeft:`2px solid rgba(255,255,255,.5)`, borderRight:`2px solid rgba(255,255,255,.5)`, maxWidth:`90%`
                }}>
                <p>From simple, compelling websites to enterprise micro-services, <span className="wholistic-font">Wholistic</span> has 
                  built it.</p>
                <p>Our core belief is that people are the source and goal of all good software. We believe in echother, and strive to build respect-based
                  relations.</p>
                <p>Our team structure is designed to harmonize with where you are at, your team size, and your aims. We look at you and your people as
                  part of our extended team.</p>
                <p>Technology-wise, we are a "what-tool-fits-best" thinking shop. That means we have no cloud preference. We are happy to look at the   tech stack that you want, or make recommendations.</p>
                <p>We'll even take a look at what you are trying to do and write up a high-level tech-spec -- for free. (Send an email to <a href="dev@wholisticsoftware.com">dev@wholisticsoftware.com</a>)</p>
                <p>Some of the tools we have used in the past include:</p>
                <ul>
                <li>AWS</li>
                <li>GCP</li>
                <li>blueMix</li>
                <li>Java</li>
                <li>Node</li>
                <li>Python</li>
                <li>Spring Framework</li>
                <li>Express</li>
                <li>React</li>
                <li>VueJS</li>
                <li>Angular</li>
                </ul>
              </div>
            </div>
        </BackgroundImage>
      )
    }}
  />
)

const StyledWelcome = styled(BizTech)`
  width: 100%;
  background-position: left;
  background-repeat: repeat-y;
  background-size: cover;
`
export default StyledWelcome
