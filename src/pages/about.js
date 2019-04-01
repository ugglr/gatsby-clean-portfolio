import React from "react"
import MyNavbar from "../components/navbar/MyNavbar"

import { Container, Row, Jumbotron, Col } from "react-bootstrap"

export default () => (
  <React.Fragment>
    <MyNavbar />
    <Jumbotron fluid style={jumbo_styles}>
      <h1>tldr; About me.</h1>
      <span>
        <p>
          So you are looking for a professional, communicative & punctual
          software engineer who likes to keep productive.
        </p>
      </span>
    </Jumbotron>
    <Container fluid>
      <Row>
        <Col>
          <h4>Read on to know more about my Background.</h4>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h3>Past work experience</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Electronics Engineer</h5>
        </Col>
        <Col>Axis Communications AB, Lund Sweden</Col>
        <Col>2015 - 2019</Col>
        <p style={{ marginTop: "1rem" }}>
          I designed analog & digital electronic circuits making up the computer
          that runs inside Network/IP-Surveillance Cameras
        </p>
        <strong>Why is this relevant?</strong>
        <p>
          Scale: During a project my designs were to be produced in several
          thousands units monthly, if not properly tested for large scale
          production it would have cost the company vast amounts of money in
          many different ways. This means I know the importance of testing,
          maintainability, and how things tend to go when things go big.
        </p>
      </Row>
      <hr />
      <Row>
        <Col>
          <h3>Education</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>MSc. Electrical Engineering</h5>
        </Col>
        <Col>Lund University, Lund Sweden</Col>
        <Col>2009 - 2015</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            <strong>Masters' specialization:</strong> Design of processors and
            integrated systems. That means VHDL coding, asynchronous data
            manipulation and nanometer structures on silicon.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <h5>Mandarin Chinese</h5>
        </Col>
        <Col>Zhejiang University, Hangzhou China</Col>
        <Col>2012 - 2013</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            Inside of my engineering degree I had already taken one semester at
            Zhejiang University as part of a special program. After that I
            decided to go back and study Mandarin full time for a year. I'm
            married to the reason why and we have a 3 year old son today.
          </p>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
  marginTop: "3rem",
}
