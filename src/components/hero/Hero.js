import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>
        Hey, I'm an Software developer from Sweden, living in Hangzhou, China
      </h1>
      <br />
      <h2>
        Right now I'm using React.js and Gatsby.js to design and hack things
        together on the internet.
      </h2>
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1.5rem",
}

export default Hero
