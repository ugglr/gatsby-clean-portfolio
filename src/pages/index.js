import React from "react"
import Hero from "../components/hero/Hero"
import Navbar from "../components/navbar/Navbar"

//import bootstrap Styles
import "../bootstrap/css/bootstrap.min.css"

export default () => (
  <React.Fragment>
    <Navbar />
    <Hero />
    <div>Hello world!</div>
  </React.Fragment>
)
