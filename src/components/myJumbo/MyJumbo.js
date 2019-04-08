import React from "react"
import SocialRow from "../SocialRow/SocialRow"

import { Jumbotron, Row, Col, Button } from "react-bootstrap"

const MyJumbo = () => (
  <Jumbotron fluid style={jumbo_styles}>
    <Row style={{ marginTop: "3.5rem" }}>
      <Col>
        <h1>tldr; About me.</h1>
        <span>
          <p>
            So you are looking for a professional, communicative & punctual
            software engineer who likes to keep productive.
          </p>
        </span>
      </Col>
    </Row>
    <Row style={{ marginTop: "3.5rem" }}>
      <Col xs={4}>
        <Button variant="primary">English CV download</Button>
      </Col>
      <Col xs={4}>
        <Button variant="primary">Chinese CV download</Button>
      </Col>
    </Row>
    <SocialRow />
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
  marginTop: "3rem",
}

export default MyJumbo
