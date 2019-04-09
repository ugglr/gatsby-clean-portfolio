import React from "react"

import { Col } from "react-bootstrap"

import "./myButton.css"

//########## PROPS INPUT ###############
//text: the text displayed in the button
//URL: the link the button goes to

const MyButton = props => (
  <Col sm={6}>
    <a href={props.URL} target="_blank" rel="noopener noreferrer">
      <div className="button_styles text-center">{props.text}</div>
    </a>
  </Col>
)

export default MyButton
