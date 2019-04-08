import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

/*######### PROJECT OBJECTS TEMPLATE################
import projectPicture from ""
const projectProject = {
  title: "",
  date: "",
  decription: "",
  sourceURL: "",
  hostedURL: "",
}
#####################################################
*/

//Living Cost Calculator Project
import livingCalcPicture from "../images/portfolio/16by9/boendekostnad.png"
const mortgageCalculatorProject = {
  title: "React Mortgage Calculator",
  date: "2019-03-28",
  decription:
    "While I was buying my apartment in Sweden, I always made the calculations by hand because I could not find a calculator that gave the whole picture. Tools: create-react-app; Bootstrap4; Material-UI",
  sourceURL: "",
  hostedURL: "",
}

export default () => (
  <Layout>
    <MyJumbo />
    <hr />
    <Container style={{ marginTop: "2.5rem" }}>
      {/*/Props: 
      //imageSrcPath: the path to the image used 
      //title: The title of the card/App 
      //date: The date of the card
      //description: Short description of the card 
      //sourceURL: URL to the source code of the project 
      //hostedURL: URL to the hosted version of the app*/}
      <Row>
        <Col>
          <ProjectCard
            imageSrcPath={livingCalcPicture}
            title={mortgageCalculatorProject.title}
            date={mortgageCalculatorProject.date}
            description={mortgageCalculatorProject.decription}
            sourceURL={mortgageCalculatorProject.sourceURL}
            hostedURL={mortgageCalculatorProject.hostedURL}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)
