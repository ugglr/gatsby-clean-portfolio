import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import "../../fontawesome/css/all.min.css"

import "./summary.css"

const Summary = () => (
  <React.Fragment>
    <Container fluid>
      <h3>Most Recent Technologies:</h3>
      <br />
      <Row className="text-center">
        <Col>
          <i class="fab fa-js hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>JavaScript/ES6</span>
        </Col>
        <Col>
          <i class="fab fa-react hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>React.js</span>
        </Col>
        <Col>
          <i class="fab fa-html5 hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>HTML5</span>
        </Col>
        <Col>
          <i class="fab fa-css3 hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>CSS3</span>
        </Col>
        <Col>
          <i class="fab fa-github hover_effect" style={icon_style} />
          <br />
          <span style={font_size}>GitHub</span>
        </Col>
      </Row>
      <br />
      <br />
      <br />

      <h4>
        My biggest goal as an Engineer is to never stop learning, and work on
        cool stuff. Here's a couple of things I'm good at:
      </h4>
      <Row style={{ marginTop: "1.8rem" }}>
        <Col>
          <h4 className="hover_effect">Fast Learner</h4>
          <p>
            Through my career I have been on a never ending quest to learn new
            things that excites me and feels fresh. In the Software side of the
            river this is great because new tools and frameworks are coming out
            very frequently. Bringing me onto the team you get someone who think
            it's a privilege to get into new waters and will jump at the
            opportunity to do something new.
          </p>
        </Col>
        <Col>
          <h4 className="hover_effect">Communication</h4>
          <p>
            During my 4 years of working in a high responsibility position I
            learnt the value of clear and concise exchange of information. Many
            meetings in my career were just wasted on missunderstandings and
            useless talking about things that was not related to getting the
            work done. I absolutely hate wasting time, and as such, clear
            concise and structured communication is religion.
          </p>
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <h4 className="hover_effect">True Technologist</h4>
          <p>
            With a Msc. in Electrical Engineering and 4 years working experience
            as an Electronics Engineer in Hardware Development, I am someone who
            know the whole chain that makes up a computer. It is important to
            bring in as many perspectives in a project as possible, and with me
            you will have someone who can think from the Silicon structures,
            through the machine code, Asembly code and up to the top level
            fluffy stuff like JavaScript.
          </p>
        </Col>
        <Col>
          <h4 className="hover_effect">Getting Things done</h4>
          <p>
            I absolutely hate wasting time on endless discussions that does not
            bring any real value. I have seen the impact on a project who dives
            too deep into the details and, as we all know, it's not pretty. I am
            a big practitioner of ToDo-Lists, Kanban, Agile/Scrum Methodologies
            and anything else that might elevate productivity levels. Let's face
            it, our brains are lazy. It needs dicipline to trick our brains to
            keep delivering, and I like to keep the momentum up!
          </p>
        </Col>
      </Row>
      <br />
      <h4>
        I'm constantly experimenting with new things, give me a follow or join
        the fun through the magic of open-source on GitHub.
      </h4>
    </Container>
    <br />
  </React.Fragment>
)

const icon_style = {
  fontSize: "5.5rem",
}

const font_size = {
  fontSize: "1.2rem",
}

export default Summary
