import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"

export default () => (
  <Layout>
    <Container style={{ marginTop: "5rem" }}>
      <Row>
        <Col>
          <h1>Hello Projects page</h1>
        </Col>
      </Row>
    </Container>
  </Layout>
)
