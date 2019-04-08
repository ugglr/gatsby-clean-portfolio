import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"
import SocialRow from "../SocialRow/SocialRow"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>
        Hey, I'm an Software developer from Sweden, living in Hangzhou, China
      </h1>
      <br />
      <h3
        style={{
          marginTop: "2rem",
          marginBottom: "6rem",
        }}
      >
        Right now I'm using Javascript, Node.js, React.js and Gatsby.js to
        design and hack things together on the internet.
      </h3>
      <p>Have a project you'd like to discuss?</p>
      <p>
        Let's chat{" "}
        <span style={{ color: "purple" }}>carl.igelstrom@gmail.com</span>
      </p>
    </div>
    <SocialRow />
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
