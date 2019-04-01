import React from "react"
import Hero from "../components/hero/Hero"
import MyNavbar from "../components/navbar/MyNavbar"
import Summary from "../components/summary/Summary"
import Projects from "../components/projects/Projects"
import BlogSection from "../components/blogSection/BlogSection"

//Use Nike Orange later as primary color, it's dope together with white
//#FF6600

//import bootstrap styles
import "../bootstrap/css/bootstrap.min.css"

//import my custom styles
import "./index.css"

export default () => (
  <div className="App">
    <MyNavbar />
    <Hero />
    <hr />
    <Summary />
    <hr />
    <Projects />
    <hr />
    <BlogSection />
  </div>
)
