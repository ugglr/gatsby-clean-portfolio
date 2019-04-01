import React from "react"

import { Container, Row, Col } from "react-bootstrap"

const BlogSection = () => (
  <React.Fragment>
    <Container fluid>
      <h1>Latests Blog Posts</h1>
      <Row>
        <Col>BlogPost1</Col>
      </Row>
      <Row>
        <Col>BlogPost2</Col>
      </Row>
      <Row>
        <Col>BlogPost3</Col>
      </Row>
    </Container>
  </React.Fragment>
)

export default BlogSection
