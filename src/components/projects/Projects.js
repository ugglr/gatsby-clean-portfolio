import React from "react"
import { Container, Row, Col, Card, Button } from "react-bootstrap"

const Projects = () => (
  <React.Fragment>
    <Container fluid>
      <h3>Recent Projects</h3>
      <br />
      <Row>
        <Col>
          <Card>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
              <Card.Title>Special title treatment</Card.Title>
              <Card.Text>
                With supporting text below as a natural lead-in to additional
                content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          ;
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)

export default Projects
