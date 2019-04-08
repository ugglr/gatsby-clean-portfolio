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
    <Row className="jumbo_social text-center">
      <Col>
        <a
          style={{ color: "#000" }}
          href="https://www.github.com/ugglr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github hover_effect" />
        </a>
      </Col>
      <Col>
        <a
          style={{ color: "#000" }}
          href="https://www.linkedin.com/in/igelstrom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin hover_effect" />
        </a>
      </Col>
      <Col>
        <a
          style={{ color: "#000" }}
          href="https://twitter.com/real_carlw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter hover_effect" />
        </a>
      </Col>

      <Col>
        <a
          style={{ color: "#000" }}
          href="https://www.instagram.com/hangzhouist/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram hover_effect" />
        </a>
      </Col>

      <Col>
        <a
          style={{ color: "#000" }}
          className="hover_effect"
          href="https://www.hackerrank.com/carl_igelstrom"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-hackerrank hover_effect" />
        </a>
      </Col>
      <Col>
        <a
          style={{ color: "#000" }}
          href="https://angel.co/igelstroem"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-angellist hover_effect" />
        </a>
      </Col>
    </Row>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
}

export default Hero
