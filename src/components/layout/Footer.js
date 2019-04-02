import React from "react"

import { Container, Row } from "react-bootstrap"

const Footer = () => (
  <Container>
    <Row>
      <footer styles={footer_styles}>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </Row>
  </Container>
)

const footer_styles = {
  marginTop: "20rem",
  color: "green",
}

export default Footer
