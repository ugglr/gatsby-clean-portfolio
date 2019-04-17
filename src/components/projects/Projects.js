import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import "./projects.css"

import ProjectCard from "../portProjectCard/ProjectCard"

import image from "../../images/portfolio/cabin.png"

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
        title={"Cool React app"}
        date={"2019-03-28"}
        description={
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. At impedit, provident esse adipisci ipsam accusamus. Vitae quae maiores quas beatae, quis cumque culpa itaque eveniet, vero nesciunt aspernatur odit optio."
        }
        sourceURL={"https://github.com/"}
        hostedURL={"http://www.google.com"}
      />
      <Link to="/projects" className="blueViolet">
        Go to Projects page ---->
      </Link>
    </Container>
  </React.Fragment>
)

export default Projects
