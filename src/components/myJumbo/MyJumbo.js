import React from "react"
import SocialRow from "../SocialRow/SocialRow"

import { Jumbotron } from "react-bootstrap"

import "./myJumbo.css"

/*########### PROPS ########## 
title: The title of the jumbotron
body: The body of the Jumbotron
body2: 
*/

const MyJumbo = props => (
  <Jumbotron fluid className="myjumbo" style={myjumbo_styles}>
    <div className="myjumbo_content">
      <h1>{props.title}</h1>
      <span>
        <p>{props.body}</p>
      </span>
      <span>
        <p>{props.body2}</p>
      </span>
      <SocialRow />
    </div>
  </Jumbotron>
)

const myjumbo_styles = {
  backgroundColor: "#fff",
}

export default MyJumbo
