import React from "react"
import SocialRow from "../SocialRow/SocialRow"

import { Jumbotron, Row, Col } from "react-bootstrap"

import "./myJumbo.css"

/*########### PROPS ########## 
title: The title of the jumbotron
body: The body of the Jumbotron
*/

const MyJumbo = props => (
  <Jumbotron fluid className="jumbo" style={jumbo_styles}>
    <div className="jumbo_content">
      <h1>{props.title}</h1>
      <span>
        <p>{props.body}</p>
      </span>
      <SocialRow />
    </div>
  </Jumbotron>
)

const jumbo_styles = {
  backgroundColor: "#fff",
}

export default MyJumbo
