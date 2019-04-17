/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import SEO from "../Seo"
import MyNavbar from "../navbar/MyNavbar"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <SEO
          title="John Doe Software Developer"
          keywords={[
            `gatsby`,
            `application`,
            `react`,
            `software developer`,
            `portfolio Site`,
            `material-UI`,
            `react-bootstrap`,
            `boostrap`,
            `API calling`,
            `Axios`,
            `Fetch`,
            `Javascript`,
            `Frontend Developer`,
          ]}
        />
        <MyNavbar />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
        <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
