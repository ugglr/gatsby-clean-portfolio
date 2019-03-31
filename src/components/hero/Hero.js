import React from "react"
import { Jumbotron } from "react-bootstrap"

//import custom styles
import "./hero.css"

const Hero = () => (
  <Jumbotron className="jumbotron" fluid>
    <h1>Hi, I'm a software developer from Sweden, living in China</h1>
    <h2>I design, build, operate & hack together things on the internet</h2>
    <p>
      I hold an MSc. in Electrical Engineering and previously worked as an
      Electronics Engineer
    </p>
  </Jumbotron>
)

export default Hero
