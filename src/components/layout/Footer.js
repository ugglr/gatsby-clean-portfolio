import React from "react"

const Footer = () => (
  <footer styles={footer_styles}>
    © {new Date().getFullYear()}, Built with
    {` `}
    <a href="https://www.gatsbyjs.org">Gatsby</a>
  </footer>
)

const footer_styles = {
  marginTop: "2rem",
  color: "green",
}

export default Footer
