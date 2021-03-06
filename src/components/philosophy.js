import React from "react"
//import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from 'styled-components'

import Technology from '../components/technology.js';
import Companies from '../components/companies.js'; 

import BackgroundImage from 'gatsby-background-image';

import MattLetter from "../components/matt-letter";

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
      
      return (
        <BackgroundImage className="philosophy" Tag="section" fluid={imageData} backgroundColor={`transparent`} 
          style={{ width: `100%`, display: `flex`, justifyContent: `center`, backgroundRepeat: `no-repeat`, 
          backgroundSize: `cover`, backgroundAttachment:`fixed`, backgroundPosition: `top`, alignItems: `center`, textAlign:`center`, flexDirection:`column`, paddingTop:`7em`}}>
            
                <p className="content"><span className="wholisticfont" style={{fontSize:`2.5em`,fontWeight:`regular`}}>Wholistic</span><br/>makes <b>software</b> easier.</p>
                <hr/>
                <div className="content">
                <p><em>People</em> are our secret.</p><br/>
                <p>We believe in eachother.</p><br/>
                <p>We <span className="wholisticfont">harmonize</span> with you.</p><br/>
                <p>We are <span className="softwarefont">one team.</span></p><br/>
                <p>Let's Build</p>
                </div>
                <hr/>
                
                <Technology></Technology>
                <hr/>
                <Companies></Companies>
                <hr/>
                <hr/>
                <div className="content" style={{width:`100%`, padding: `0`}}>
                   <MattLetter></MattLetter>                
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

/*

<div>
                
                <p>Technology-wise, we are a "what-tool-fits-best" thinking shop. That means we have no cloud preference. We are happy to look at the   tech stack that you want, or make recommendations.</p><hr/>
                <p>We'll even take a look at what you are trying to do and write up a high-level tech-spec -- for free. (Send an email to <a href="dev@wholisticsoftware.com">dev@wholisticsoftware.com</a>)</p><hr/>
                </div>
                
                */
