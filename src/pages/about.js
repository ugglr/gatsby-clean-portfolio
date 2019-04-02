import React from "react"
import MyNavbar from "../components/navbar/MyNavbar"

import { Container, Row, Jumbotron, Col } from "react-bootstrap"

export default () => (
  <React.Fragment>
    <MyNavbar />
    <Jumbotron fluid style={jumbo_styles}>
      <h1>tldr; About me.</h1>
      <span>
        <p>
          So you are looking for a professional, communicative & punctual
          software engineer who likes to keep productive.
        </p>
      </span>
    </Jumbotron>
    <hr />
    <Container fluid>
      <Row>
        <Col>
          <h3>Summary</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            consequuntur, facere sequi numquam praesentium cumque. Iure nostrum
            mollitia, dolorum autem quas, labore possimus qui sequi, voluptatem
            eligendi officia laborum facere.
          </p>
        </Col>
      </Row>
      <hr />
      {/* This is the beginning of the career section*/}
      <Row>
        <Col>
          <h3>Past work experience</h3>
        </Col>
      </Row>
      {/* Axis Electronics Position*/}
      <Row>
        <Col>
          <h5>Electronics Engineer</h5>
        </Col>
      </Row>
      <Row>
        <Col>Axis Communications AB, Lund Sweden</Col>
        <Col>2015.09 - 2019.01</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            I designed analog & digital electronic circuits making up the
            computer that runs inside Network/IP-Surveillance Cameras
          </p>
          <strong>Connection to Software Development?</strong>
          <p>
            Scale: During a project my designs were to be produced in several
            thousands units monthly, if not properly tested for large scale
            production it would have cost the company vast amounts of money in
            many different ways. This means I know the importance of testing,
            maintainability, and how things tend to go when things go big.
          </p>
        </Col>
      </Row>
      <hr />
      {/* Wayne SW intern Position*/}
      <Row>
        <Col>
          <h5>Software Engineer Intern</h5>
        </Col>
      </Row>
      <Row>
        <Col>Wayne, A GE Energy business, Malmoe Sweden</Col>
        <Col>2014.06 - 2014.09</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            Developed automated production HW tests using LabView, Machine
            Vision and Machine Learning.
            <br />
            Executed prototype plans for automated sensor calibration rig, Bench
            and equipment sourcing
          </p>
        </Col>
      </Row>
      <hr />
      {/* Electrolux SW+HW intern Position*/}
      <Row>
        <Col>
          <h5>Software & Hardware Engineer Intern</h5>
        </Col>
      </Row>
      <Row>
        <Col>Electrolux, Shanghai China</Col>
        <Col>2011.06 - 2011.08</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            Product prototype development; Embedded Linux programming & Hardware
            implementation.
            <br />
            UX/UI Study: Design of Android application touch interfaces on small
            home appliances.
          </p>
        </Col>
      </Row>
      <hr />
      {/* This is the beginning of the education section*/}
      <Row>
        <Col>
          <h3>Education</h3>
        </Col>
      </Row>
      {/* Masters Degreee*/}
      <Row>
        <Col>
          <h5>MSc. Electrical Engineering</h5>
        </Col>
        <Col>Lund University, Lund Sweden</Col>
        <Col>2009.08 - 2015.08</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            <strong>Masters' specialization:</strong> Design of processors and
            integrated systems. That means VHDL coding, asynchronous data
            manipulation and nanometer structures on silicon.
          </p>
        </Col>
      </Row>
      <Row>
        <Col>
          <strong>Exchange@Zhejiang University:</strong>
        </Col>
        <Col>2011.06 - 2012.01</Col>
      </Row>
      <Row>
        <Col>
          <p>
            I was fortunate enough to spend half year at Zhejiang University as
            part of my Engineering program.
          </p>
        </Col>
      </Row>
      <hr />
      {/* Chinese Studies*/}
      <Row>
        <Col>
          <h5>Mandarin Chinese</h5>
        </Col>
        <Col>Zhejiang University, Hangzhou China</Col>
        <Col>2012 - 2013</Col>
      </Row>
      <Row>
        <Col>
          <p style={{ marginTop: "1rem" }}>
            Inside of my engineering degree I had already taken one semester at
            Zhejiang University as part of a special program. After that I
            decided to go back and study Mandarin full time for a year. I'm
            married to the reason why and we have a 3 year old son today.
          </p>
        </Col>
      </Row>
    </Container>
  </React.Fragment>
)

const jumbo_styles = {
  backgroundColor: "#fff",
  paddingLeft: "1rem",
  marginTop: "3rem",
}
