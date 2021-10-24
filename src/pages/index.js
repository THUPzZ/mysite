import * as React from "react"
import SEO from "../components/SEO"
import Sociallinks from "../components/sociallinks"
import { OutboundLink } from "gatsby-plugin-google-analytics"

const IndexPage = () => {
  const textColor = "#f2eded"
  return (
    <React.Fragment>
      <SEO/>
      <div className="layout">
        <Sociallinks/>
        <div className="wrapp">
          <div>
            <h1 className="animated bounceIn">{ 'Hello World!' }</h1>
            <h2 className="animated bounceIn" style={{ color: textColor, marginTop: "8px", marginBottom: 0 }}>{ 'My Name is' }</h2>
            <h2 className="animated bounceIn" style={{ color: textColor, marginTop: "8px" }}>{ 'Theeraprasert Meemui' }</h2>
          </div>
        </div>
        <footer className="fixbot">
          <p style={{ color:"#fff", letterSpacing: ".2rem", fontSize: ".6rem", opacity: ".75", marginBottom: 0 }}>
            BUILT WITH <a style={{ textDecoration: "none", color: "#a2cae2" }} href="https://www.gatsbyjs.com/" target="_blank" rel="noreferrer">GATSBY.JS</a> BY THEERAPRASERT.M 2021
          </p>
        </footer>
      </div>
    </React.Fragment>
  )
}

export default IndexPage