import React from "react"
import { Jumbotron, Row, Col } from "react-bootstrap"

//import custom styles
import "./hero.css"

const Hero = () => (
  <Jumbotron style={jumbo_styles} className="jumbo" fluid>
    <div className="jumbo_content">
      <h1>
        Hey, I'm an Software developer from Sweden, living in Hangzhou, China
      </h1>
      <br />
      <h3>
        Right now I'm using React.js and Gatsby.js to design and hack things
        together on the internet.
      </h3>
    </div>
    <Row className="jumbo_social">
      <Col>
        <i class="fab fa-github hover_effect" />
      </Col>
      <Col>
        <i class="fab fa-linkedin hover_effect" />
      </Col>
      <Col>
        <i class="fab fa-twitter hover_effect" />
      </Col>

      <Col>
        <i class="fab fa-instagram hover_effect" />
      </Col>

      <Col>
        <i class="fab fa-hackerrank hover_effect" />
      </Col>
      <Col>
        <i class="fab fa-stack-overflow hover_effect" />
      </Col>
      <Col>
        <i class="fab fa-angellist hover_effect" />
      </Col>
    </Row>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
