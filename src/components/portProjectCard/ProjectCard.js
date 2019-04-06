import React from "react"
import { Row, Col } from "react-bootstrap"

import "./projectCard.css"

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
            <Col sm={5}>
              <a href={props.sourceURL}>
                <div className="button_styles text-center">Source Code</div>
              </a>
            </Col>
            <Col sm={5}>
              <a href={props.hostedURL}>
                <div className="button_styles text-center">Hosted App</div>
              </a>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default ProjectCard
