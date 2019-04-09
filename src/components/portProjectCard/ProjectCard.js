import React from "react"
import { Row, Col } from "react-bootstrap"

import "./projectCard.css"
import MyButton from "../myButton/MyButton"

//Props:
//imageSrcPath: the path to the image used
//title: The title of the card/App
//date: The date of the card
//description: Short description of the card
//sourceURL: URL to the source code of the project
//hostedURL: URL to the hosted version of the app

const ProjectCard = props => {
  return (
    <div className="project_container">
      <Row>
        <Col>
          <img
            src={props.imageSrcPath}
            alt={"Smiley face"}
            style={{ maxWidth: "100%" }}
          />
        </Col>
        <Col>
          <h4>
            {props.title}
            <br />
            <small>{props.date}</small>
          </h4>

          <p>{props.description}</p>

          <Row>
            <MyButton text={"Source Code"} URL={props.sourceURL} />
            <MyButton text={"Hosted App"} URL={props.hostedURL} />
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectCard
