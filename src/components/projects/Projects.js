import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"

import image from "../../images/portfolio/16by9/boendekostnad.png"

const Projects = () => (
  <React.Fragment>
    <Container fluid>
      <h3 style={{ marginBottom: "1rem" }}> Latest Projects</h3>
      {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
      <ProjectCard
        imageSrcPath={image}
        title={"React Mortgage Calculator"}
        date={"2019-03-28"}
        description={
          "While I was buying my apartment in Sweden, I always made the calculations by hand because I could not find a calculator that gave the whole picture. Tools: create-react-app; Bootstrap4; Material-UI"
        }
        sourceURL={"/"}
        hostedURL={"/"}
      />
      <Link to="/projects">Go to Projects page ----></Link>
    </Container>
  </React.Fragment>
)

export default Projects
