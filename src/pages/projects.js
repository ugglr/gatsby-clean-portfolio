import React from "react"
import Layout from "../components/layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import MyJumbo from "../components/myJumbo/MyJumbo"
import ProjectCard from "../components/portProjectCard/ProjectCard"

import livingCalcPicture from "../images/portfolio/16by9/boendekostnad.png"
import imageSearchAppPicture from "../images/portfolio/16by9/image-search.png"
import weatherAppPicture from "../images/portfolio/16by9/weather-app.png"
import saveTweetAppPicture from "../images/portfolio/16by9/save_tweet.png"

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

const mortgageCalculatorProject = {
  title: "React Mortgage Calculator",
  date: "2019-03-28",
  decription:
    "While I was buying my apartment in Sweden, I always made the calculations by hand because I could not find a calculator that gave the whole picture. Tools: create-react-app; Bootstrap4; Material-UI",
  sourceURL: "https://github.com/ugglr/boendekostnad-nu",
  hostedURL: "http://www.boendekostnad.nu",
}

//React Image-API search app Project

const imageSearchAppProject = {
  title: "React Search image-API App",
  date: "2019-03-03",
  decription:
    "This app uses Axios to search Pixabay API for images, and displays them in a grid below. Also uses Material-UI pre-built components for some styling.",
  sourceURL: "https://github.com/ugglr/React-Image-Search-API-app",
  hostedURL: "",
}

//Weather app Project

const weatherAppProject = {
  title: "React Weather-API App",
  date: "2019-02-12",
  decription:
    "This app uses async-await + fetch to grab weather data from openweathermap.org open API. Bootstrap 4 CSS classes are used for styling",
  sourceURL: "https://github.com/ugglr/react-API-weather-app",
  hostedURL: "",
}

//Save Tweet app Project

const saveTweetProject = {
  title: "Vanilla JS Create-Read-Delete to Local Storage",
  date: "2019-02-05",
  decription:
    "Vanilla Javascript application which saves & removes strings into/from the browsers Local Storage. Bootstrap CSS file is used for styling purposes.",
  sourceURL:
    "https://github.com/ugglr/JavaScript-Webapp-Read-Write-to-local-storage",
  hostedURL: "",
}

export default () => (
  <Layout>
    {/*########### MyJumbo PROPS ##########
    title: The title of the jumbotron
    body: The body of the Jumbotron
    */}
    <MyJumbo
      title={"Projects Portfolio"}
      body={
        "I think the best way of learning is by getting down to coding and build. I really appreciate feedback on anything that I have built!"
      }
    />
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
      <Row>
        <Col>
          <ProjectCard
            imageSrcPath={imageSearchAppPicture}
            title={imageSearchAppProject.title}
            date={imageSearchAppProject.date}
            description={imageSearchAppProject.decription}
            sourceURL={imageSearchAppProject.sourceURL}
            hostedURL={imageSearchAppProject.hostedURL}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectCard
            imageSrcPath={weatherAppPicture}
            title={weatherAppProject.title}
            date={weatherAppProject.date}
            description={weatherAppProject.decription}
            sourceURL={weatherAppProject.sourceURL}
            hostedURL={weatherAppProject.hostedURL}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <ProjectCard
            imageSrcPath={saveTweetAppPicture}
            title={saveTweetProject.title}
            date={saveTweetProject.date}
            description={saveTweetProject.decription}
            sourceURL={saveTweetProject.sourceURL}
            hostedURL={saveTweetProject.hostedURL}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)
